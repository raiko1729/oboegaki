---
layout: reveal
title: "jekyllについて"
reveal_theme: black
date: 2025-10-29
tags: ["Jekyll", "プログラミング"]
---

<body>

   

  <div class="reveal">

    <!-- Any section element inside of this container is displayed as a slide -->
    <div class="slides">

      


    
        <section >
            
            <h1>サイトをつくろう！</h1>
<p>来光壮馬</p>


            </section>
    



    
        <section >
            
            <h2>何ができるの？</h2>
<p>個人サイトを持つメリット</p>
<ul>
<li>メモに使える</li>
<li>ポートフォリオになる</li>
<li>絵の投稿</li>
</ul>

            </section>
    



    
        <section >
            
            <h2>私の自作サイト</h2>
<p><a href="https://raiko1729.github.io/oboegaki/">😎</a>
<img src="{{ site.baseurl }}/assets/images/2025-10-29-qr_124643.png" alt="my_website"></p>

            </section>
    



    
        <section >
            
            <h2>必要なこと</h2>
<ul>
<li>
<p class="fragment highlight-red">リンクの取得</p>
</li>
<li>Jekyll</li>
</ul>

            </section>
    



    
    <section>
        <section >
            <h2>リンクの取得について</h2>
<p>github pagesを用います</p>
<img src="{{ site.baseurl }}/assets/images/2025-10-29-github_image.png" alt="GitHub_image" width="50%">

            </section>
        
            <section >
                <p>リンクの取得は</p>
<p>アカウントがあればすぐできます！</p>

            </section>
        
            <section >
                <h2>どうやるの？</h2>
<ol>
<li>リポジトリ作成</li>
<li>設定→Pagesに行くとリンクができている！</li>
</ol>

            </section>
        

    </section>
    



    
        <section >
            
            <h2>https://…取得してどうするの</h2>
<ul>
<li>このGitHubのリポジトリにあげる</li>
<li><a href="https://github.com/raiko1729/oboegaki">こんな感じ</a></li>
<li><a href="https://raiko1729.github.io/oboegaki/tags/2025-05-12-jekyll/">あげかた</a></li>
</ul>

            </section>
    



    
        <section >
            
            <h2>比較</h2>
<table>
<thead>
<tr>
<th></th>
<th>自由度</th>
<th>難易度</th>
<th>手間</th>
</tr>
</thead>
<tbody>
<tr>
<td>HTMLを直接書く</td>
<td>高</td>
<td>高</td>
<td>ばり多い</td>
</tr>
<tr>
<td>Jekyllを使う</td>
<td>中～高</td>
<td>低</td>
<td>少ない</td>
</tr>
<tr>
<td>WordPress</td>
<td>低</td>
<td>低</td>
<td>少ない</td>
</tr>
</tbody>
</table>

            </section>
    



    
        <section >
            
            <h2>ながれ</h2>
<p>markdownで書く</p>
<p>↓</p>
<p>Jekyll（HTMLに変換）</p>

            </section>
    



    
        <section >
            
            <h2>Jekyllのメリット</h2>
<ul>
<li>
<p class="fragment highlight-red">markdownで書ける</p>
</li>
<li>ファイル管理が自由で楽</li>
<li>
<p>css, html次第で好きな見た目に</p>
</li>
</ul>

            </section>
    



    
        <section >
            
            <h2>jekyllのデメリット</h2>
<ul>
<li>静的サイト</li>
<li>デザインむずい</li>
</ul>

            </section>
    



    
    <section>
        <section >
            <h2>Jekyllの使い方</h2>

            </section>
        
            <section >
                <h3>1. ファイル構造</h3>
<pre><code>my-site/
├── _config.yml
├── _layouts
│   └── ○○.html
├── _posts/
│   └── 2025-10-26-○○.md
└── assets/
    ├── css/
    │   └── style.css
    └── images/
        └── 2025-10-26-○○.png
</code></pre>
<p>あとはプラスα</p>

            </section>
        
            <section >
                <h2>鬼余談</h2>
<p>これの記号使うとディレクトリ構造を他人に伝えやすい！</p>
<p>Qiitaの記事で見つけたが，いいね2320あった…</p>
<pre><code>┣ ┠ ┝ ├
┫ ┨ ┥ ┤ 
│ ┃
─ ━
┌ ┏ ┓ ┐
└ ┗ ┛ ┘
</code></pre>

            </section>
        
            <section >
                <h3>2. index.mdを作成</h3>
<p>トップページの内容</p>
<pre><code class="language-yaml">layout: post
title: &quot;APIを用いてGoogleカレンダーのバックアップ自動化&quot;
date: 2025-10-26
image: /assets/images/2025-10-26-icon.png
tags: [&quot;タスク管理&quot;]
</code></pre>

            </section>
        
            <section >
                <h3>3. _postsフォルダ</h3>
<p>記事を入れる場所</p>
<p>ファイル名：<code>YYYY-MM-DD-タイトル.md</code></p>
<p>例：<code>2025-10-28-first-post.md</code></p>

            </section>
        
            <section >
                <p>postsフォルダにこんな形に書きます！</p>
<pre style="max-height: 400px; overflow-y: auto;"><code class="language-yaml" style="display: block; max-height: none; overflow: visible;">
layout: post
title: "初めての記事"
date: 2025-10-26
tags: ["Jekyll", "GitHub Pages"]


# 見出し

本文をMarkdownで書きます。

- リスト1
- リスト2

1. first
2. second
3. third

# 画像だよ！

![sample_image](assets/images/○○.jpg)

# ライブラリ設定すると数式も$\latex$で書けるよ！

$$
\int_{A}^{B}\frac{\partial v}{\partial t} \rm{d}s + 
\int_{A}^{B} \rm{d}\left[\frac{v^2}{2}+\frac{p}{\rho}+gz \right]
=0
$$


</code></pre>

            </section>
        

    </section>
    



    
    <section>
        <section >
            <h2>テーマを変えよう</h2>
<ul>
<li>自由度おに高い</li>
<li>めちゃ楽</li>
</ul>

            </section>
        
            <section >
                <h3>GitHub公式テーマ</h3>
<p>_config.ymlに追加するだけ</p>
<pre><code class="language-yaml">theme: jekyll-theme-cayman
# または
# jekyll-theme-minimal
# jekyll-theme-slate など
</code></pre>

            </section>
        
            <section >
                <h3>外部テーマを使う</h3>
<ol>
<li>好きなテーマを探す</li>
<li>_config.ymlに記述</li>
</ol>
<pre><code class="language-yaml">remote_theme: owner/name
</code></pre>
<p>例：<code>remote_theme: mmistakes/minimal-mistakes</code></p>

            </section>
        
            <section >
                <h3>自分でつくれるの？</h3>
<p>可能！</p>

            </section>
        

    </section>
    



    
        <section >
            
            <h2>jekyllまとめサイト</h2>
<ul>
<li><a href="https://qiita.com/madoreenu/items/b47833bf785562c77809">Qiitaのやつ</a></li>
<li>（あとでQRLを貼る）</li>
</ul>

            </section>
    



    
        <section >
            
            <h2>全体像</h2>
<p><img src="{{ site.baseurl }}/assets/images/2025-10-29-jekyll-article-flowchart.png" alt="jekyll-article-flowchart"></p>

            </section>
    



    
        <section >
            
            <h2>まとめ</h2>
<ol>
<li>GitHubでリポジトリ作る</li>
<li>RubyとJekyllをインストールする</li>
<li>記事をmdで書いていく</li>
<li>css変更したり，タグ機能つけたり自由</li>
<li>GitHub Pagesで公開</li>
</ol>
<p class="fragment">簡単に素敵なサイトが作れる！</p>

            </section>
    



    </div>


  </div>

<!--	<script src="libs/reveal.js/4.3.1/plugin/audio-slideshow/plugin.js"></script>  -->
<!--	<script src="libs/reveal.js/4.3.1/plugin/audio-slideshow/recorder.js"></script>-->
<!--	<script src="libs/reveal.js/4.3.1/plugin/audio-slideshow/RecordRTC.js"></script>-->

  

<script>
  const printPlugins = [
      RevealNotes,
      RevealHighlight,
      RevealMath.MathJax3,
      RevealAnimate,
      RevealChalkboard, 
			RevealEmbedTweet,
			RevealChart,
		];

		const plugins =  [...printPlugins,
		RevealZoom, 
		RevealSearch, 
				RevealMarkdown, 
				RevealMenu, 
				RevealFullscreen,
				RevealAnything,
				//RevealAudioSlideshow,
				//RevealAudioRecorder,
				RevealCustomControls, 
				// poll
				// question
				// seminar
				Verticator 
				 ]


		// Also available as an ES module, see:
		// https://revealjs.com/initialization/
		Reveal.initialize({
			controls: true,
      controlsTutorial: true,
      controlsLayout: 'bottom-right',
      controlsBackArrows: 'faded',
      progress: true,
      slideNumber: false,
      //#showSlideNumber "all" "print" "speaker"
      hash: true, //# hash: false,
      //# respondToHashChanges: true,
      //# history: false,
      keyboard: true,
      //#keyboardCondition: null,
      overview: true,
      center: true,
      touch: true,
      loop: false,
      rtl: false,
      //#navigationMode: 'default', linear grid
      shuffle: false,
      fragments: true,
      fragmentInURL: false,
      embedded: false,
      help: true,
      //#pause: true
      showNotes: false,
      autoPlayMedia: false, // TODO fix this to a nullable value
      //#preloadIframes: null. true false
      //#autoAnimate: true
      //#autoAnimateMatcher: null,
      //#autoAnimateEasing: 'ease',
      //autoAnimateDuration: 1.0,
      //#autoAnimateUnmatched: true
      //#autoAnimateStyles: []
      autoSlide: 0, // TODO fix this to a falseable value
      autoSlideStoppable: true,
      autoSlideMethod: '0',
      defaultTiming: 120,
      mouseWheel: false,
      //#previewLinks: false
      //#postMessage: true, // TODO : this can cause issues with the vscode api ???
      //#postMessageEvents: false,
      //#focusBodyOnPageVisibilityChange: true,
      transition: 'slide',
      transitionSpeed: 'default',
      backgroundTransition: 'fade',
      //#pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
      //#pdfSeparateFragments: true,
      //#pdfPageHeightOffset: -1,
      viewDistance: 3,
      //#mobileViewDistance: 2,
      display: 'block',
      //#hideInactiveCursor: true,
      //#hideCursorTime: 5000

      // Parallax Background
      parallaxBackgroundImage: '',
      parallaxBackgroundSize: '',
      parallaxBackgroundHorizontal: 0,
      parallaxBackgroundVertical: 0,

      //Presentation Size
      width: 960,
			height: 700,
			margin: 0.04,
      minScale: 0.2,
      maxScale: 2,
      disableLayout: false,

      audio: {
        prefix: 'audio/', // audio files are stored in the "audio" folder
        suffix: '.ogg', // audio files have the ".ogg" ending
        textToSpeechURL: null, // the URL to the text to speech converter
        defaultNotes: false, // use slide notes as default for the text to speech converter
        defaultText: false, // use slide text as default for the text to speech converter
        advance: 0, // advance to next slide after given time in milliseconds after audio has played, use negative value to not advance
        autoplay: false, // automatically start slideshow
        defaultDuration: 5, // default duration in seconds if no audio is available
        defaultAudios: true, // try to play audios with names such as audio/1.2.ogg
        playerOpacity: 0.05, // opacity value of audio player if unfocused
        playerStyle: 'position: fixed; bottom: 4px; left: 25%; width: 50%; height:75px; z-index: 33;', // style used for container of audio controls
        startAtFragment: false, // when moving to a slide, start at the current fragment or at the start of the slide
      },
      
      chalkboard: { // font-awesome.min.css must be available
        //src: "chalkboard/chalkboard.json",
        storage: "chalkboard-demo",
      },
      
			customcontrols: {
					controls: [
      						{
						  id: 'toggle-overview',
						  title: 'Toggle overview (O)',
						  icon: '<i class="fa fa-th"></i>',
						  action: 'Reveal.toggleOverview();'
						}
						,
      {
        icon: '<i class="fa fa-pen-square"></i>',
        title: 'Toggle chalkboard (B)',
        action: 'RevealChalkboard.toggleChalkboard();'
      },
      {
        icon: '<i class="fa fa-pen"></i>',
        title: 'Toggle notes canvas (C)',
        action: 'RevealChalkboard.toggleNotesCanvas();'
      }
      
				]
			},
			chart: {
					defaults: { 
						color: 'lightgray', // color of labels
						scale: { 
							beginAtZero: true, 
							ticks: { stepSize: 1 },
							grid: { color: "lightgray" } , // color of grid lines
						},
					},
					line: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ], "borderDash": [ [5,10], [0,0] ] }, 
					bar: { backgroundColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]}, 
					pie: { backgroundColor: [ ["rgba(0,0,0,.8)" , "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"] ]},
					radar: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]}, 
			},
			math: {
				mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
				config: 'TeX-AMS_HTML-full',
				// pass other options into `MathJax.Hub.Config()`
				TeX: { Macros: { RR: "{\\bf R}" } }
				},
				anything: [ 
				{
		className: "plot",
		defaults: {width:500, height: 500, grid:true},
		initialize: (function(container, options){ options.target = "#"+container.id; functionPlot(options) })
	 },
	 {
		className: "chart",  
		initialize: (function(container, options){ container.chart = new Chart(container.getContext("2d"), options);  })
	 },
	 {
		className: "anything",
		initialize: (function(container, options){ if (options && options.initialize) { options.initialize(container)} })
	 },
					],
			// Learn about plugins: https://revealjs.com/plugins/
			plugins: (window.location.search.match(/print-pdf/gi) ? printPlugins : plugins ) 
		});
			


	    // Change chalkboard theme : 
		function changeTheme(input) {
			var config = {};
			config.theme = input.value;
			Reveal.getPlugin("RevealChalkboard").configure(config);
			input.blur();
		}

		// // Handle the message inside the webview
        // window.addEventListener('message', event => {

        //     const message = event.data; // The JSON data our extension sent

        //     switch (message.command) {
        //         case 'refactor':
        //             Reveal.toggleHelp();
        //     }
        // });

		if (window.location.search.match(/print-pdf-now/gi)) {
      		setTimeout(() => {
				window.print();
			  }, 2500);
			
    }
</script>

</body>
