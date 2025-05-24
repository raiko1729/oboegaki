// 定数
const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const STEP = 0.05;
const MU = 0.92;
const K = 0.01;
const GRAB = 0.01;

class Graph {
  constructor() {
    this.nodes = [];
    this.adj = {};
    this.edges = [];
    this.id_node_dict = {};
  }

  addnode(node_id, color) {
    let x = Math.random() * CANVAS_WIDTH;
    let y = Math.random() * CANVAS_HEIGHT;
    const newnode = new Node(node_id, x, y, color);
    this.nodes[node_id] = newnode;
    this.adj[node_id] = [];
    this.id_node_dict[node_id] = newnode;
  }

  addedge(u, v) {
    if (!(u in this.id_node_dict)) {
      this.addnode(u);
    }
    if (!(v in this.id_node_dict)) {
      this.addnode(v);
    }
    this.adj[u].push(this.id_node_dict[v]);
    this.adj[v].push(this.id_node_dict[u]);
    this.edges.push(new Edge(this.id_node_dict[u], this.id_node_dict[v]));
  }

  draw(ctx) {
    for (const edge of this.edges) {
      edge.draw(ctx);
    }
    for (const node of this.nodes) {
      node.draw(ctx);
    }
  }

  move() {
    for (const node of this.nodes) {
      if (node.binded) continue;
      const x = node.posx;
      const y = node.posy;

      for (const target of this.nodes) {
        if (node !== target) {
          const elecPowVec = elecPow(node, target);
          node.vx += elecPowVec.x * STEP;
          node.vy += elecPowVec.y * STEP;
        }
      }

      node.vx += centralGrabx(x) * STEP;
      node.vy += centralGraby(y) * STEP;

      for (const target of this.adj[node.id]) {
        const springPowVec = springPow(node, target);
        node.vx += springPowVec.x;
        node.vy += springPowVec.y;
      }

      node.vx *= MU;
      node.vy *= MU;
      node.posx += node.vx * STEP;
      node.posy += node.vy * STEP;
    }
  }
}

class Node {
  constructor(id, posx, posy, color) {
    this.id = id;
    this.posx = posx;
    this.posy = posy;
    this.color = color ?? "rgb(0,204,255)";
    this.vx = 0;
    this.vy = 0;
    this.binded = false;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.posx, this.posy, 10, 0, Math.PI * 2, false);
    ctx.fill();
  }

  mouseon(e) {
    return Math.sqrt((this.posx - e.x) ** 2 + (this.posy - e.y) ** 2) < 10;
  }
}

class Edge {
  constructor(u, v) {
    this.begin = u;
    this.end = v;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "rgb(100, 100, 100)";
    ctx.moveTo(this.begin.posx, this.begin.posy);
    ctx.lineTo(this.end.posx, this.end.posy);
    ctx.stroke();
  }
}

class Canvas {
  constructor() {
    this.graph = new Graph();
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.binded = undefined;
  }

  draw() {
    const ctx = document.getElementById("maincanvas").getContext("2d");
    ctx.clearRect(0, 0, this.width, this.height);
    this.graph.move();
    this.graph.draw(ctx);
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvas = document.getElementById("maincanvas");
    canvas.width = width;
    canvas.height = height;
    this.width = width;
    this.height = height;
  }

  getPosition(e) {
    const rect = e.target.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  onCanvasMousedown(e) {
    const pos = this.getPosition(e);
    for (const node of this.graph.nodes) {
      if (node.mouseon(pos)) {
        this.binded = node;
        node.binded = true;
        console.log("binded:", node.id);
        break;
      }
    }
  }

  onCanvasMousemove(e) {
    if (this.binded) {
      const pos = this.getPosition(e);
      this.binded.posx = pos.x;
      this.binded.posy = pos.y;
      this.binded.vx = 0;
      this.binded.vy = 0;
    }
  }

  onCanvasMouseup(e) {
    if (this.binded) {
      this.binded.binded = false;
      this.binded = undefined;
    }
  }

  changeGraph(graphname) {
    clearInterval(this.timer);
    const graph = new Graph();

    if (graphname === "star") {
      const starsize = 25;
      for (let i = 1; i < starsize; i++) {
        graph.addedge(0, i);
      }
    } else if (graphname === "complete") {
      const completegraphsize = 5;
      for (let i = 0; i < completegraphsize; i++) {
        for (let j = i + 1; j < completegraphsize; j++) {
          graph.addedge(i, j);
        }
      }
    } else if (graphname === "bipartite") {
      const nodeside = 3;
      for (let i = 0; i < nodeside; i++) {
        for (let j = 0; j < nodeside; j++) {
          graph.addedge(i, nodeside + j);
        }
      }
    } else if (graphname === "twostar") {
      const starsize = 10;
      for (let i = 0; i < starsize; i++) {
        graph.addnode(i, "orange");
        graph.addnode(i + starsize);
      }
      for (let i = 1; i < starsize; i++) {
        graph.addedge(0, i);
        graph.addedge(starsize, i + starsize);
      }
      graph.addedge(0, starsize);
    } else {
      console.log("no graph");
    }
    this.graph = graph;
  }
}

function centralGrabx(x) {
  return -K * (x - CANVAS_WIDTH / 2);
}
function centralGraby(y) {
  return -K * (y - CANVAS_HEIGHT / 2);
}
// elecPow: 最小距離を設けて力を抑制
function elecPow(u, v) {
  const dx = u.posx - v.posx;
  const dy = u.posy - v.posy;
  let d = Math.sqrt(dx * dx + dy * dy);
  d = Math.max(d, 30);
  const pow = 1 / (d * d) * 100;
  return { x: dx * pow, y: dy * pow };
}

// springPow: バネを弱める
function springPow(u, v) {
  const dx = v.posx - u.posx;
  const dy = v.posy - u.posy;
  const d = Math.sqrt(dx * dx + dy * dy);
  const diff = d - 100;
  const pow = diff * 0.001; // 弱めた
  if (d === 0) {
    return { x: 0, y: 0 };
  }
  return { x: dx * pow, y: dy * pow };
}

// Graph.addnode の中で、ノードを中心付近に寄せる
let x = CANVAS_WIDTH / 2 + (Math.random() - 0.5) * 200;
let y = CANVAS_HEIGHT / 2 + (Math.random() - 0.5) * 200;

