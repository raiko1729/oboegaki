---
layout: post
title: "二次元の支配方程式の導出"
tags: ["材料力学", "物理"]
---

# 二次元の支配方程式を導出する

授業で使っている「材料力学」コロナ社の演習問題[3.4]の答えが略となっていたため，その解答を示していく．

## 一般化されたフックの法則

<div style="overflow-x: auto">
$$
\begin{equation}
    \begin{cases}
        \varepsilon_x &= \frac{1}{E}\{\sigma_x - \nu(\sigma_y+\sigma_z) \} \\
        \varepsilon_y &= \frac{1}{E}\{\sigma_y - \nu(\sigma_z+\sigma_x) \} \\
        \varepsilon_z &= \frac{1}{E}\{\sigma_z - \nu(\sigma_x+\sigma_y) \} \\
        \gamma_{xy} &= 2\varepsilon_{xy} = \frac{\sigma_{xy}}{G} \\
        \gamma_{yz} &= 2\varepsilon_{yz} = \frac{\sigma_{yz}}{G} \\
        \gamma_{zx} &= 2\varepsilon_{zx} = \frac{\sigma_{zx}}{G} \\
    \end{cases}
\end{equation}
\label{a}\tag{1}
$$
</div>

今回は，平面応力状態を考えているので式(\ref{a})に$$\sigma_z=0, \sigma_{zx}=0, \sigma_{zy}=0$$を代入する

<div style="overflow-x: auto">
$$
\begin{equation}
    \begin{cases}
        \varepsilon_x &= \frac{1}{E}\sigma_x - \frac{\nu}{E}\sigma_y\\
        \varepsilon_y &= \frac{1}{E}\sigma_y - \frac{\nu}{E}\sigma_x\\
    \end{cases}
\end{equation}
\label{b}\tag{2}
$$
</div>

横弾性定数$$G=\frac{E}{2(1+\nu)}$$を代入して

<div style="overflow-x: auto">
$$
\begin{equation}
    \gamma_{xy} = \frac{2(1+\nu)}{E}\sigma_{xy}
\end{equation}
\label{c}\tag{3}
$$
</div>

となる．ここで，演習問題[3.3]で得られたひずみの適合条件式に式(\ref{b}), 式(\ref{c})を代入する．

<div style="overflow-x: auto">
$$
   \begin{equation}
    \frac{1}{E}\left(\frac{\partial^2 \sigma_x}{\partial y^2} - \nu\frac{\partial^2 \sigma_y}{\partial y^2} + \frac{\partial^2 \sigma_y}{\partial x^2} - \nu\frac{\partial^2 \sigma_x}{\partial x^2} \right) = \frac{2(1+\nu)}{E}\frac{\partial^2 \sigma_{xy}}{\partial x \partial y}
   \end{equation}
    \label{d}\tag{4}
$$
</div>


ここで平衡方程式

<div style="overflow-x: auto">
$$
\begin{equation}
    \begin{cases}
        \frac{\partial \sigma_x}{\partial x} + \frac{\partial \sigma_{xy}}{\partial y} + X &= 0 \\
        \frac{\partial \sigma_{yx}}{\partial x} + \frac{\partial \sigma_{y}}{\partial y} + Y &= 0
    \end{cases}
\end{equation}
\label{e}\tag{5}
$$
</div>

を用いて式(\ref{d})を変形していく．

式(\ref{e})の第一式を$$x$$で偏微分，第二式を$$y$$で偏微分して

<div style="overflow-x: auto">
$$
\begin{equation}
    \begin{cases}
        \frac{\partial^2 \sigma_x}{\partial x^2} + \frac{\partial^2 \sigma_{xy}}{\partial x \partial y} + \frac{\partial X}{\partial x} &= 0 \\
        \frac{\partial^2 \sigma_{yx}}{\partial x \partial y} + \frac{\partial^2 \sigma_{y}}{\partial y^2} + \frac{\partial Y}{\partial y} &= 0
    \end{cases}
\end{equation}
\label{f}\tag{6}
$$
<div>

式(\ref{f})の辺々を足し合わせて，

$$
\begin{equation}
    \frac{\partial^2 \sigma_x}{\partial x^2} + \frac{\partial^2 \sigma_{y}}{\partial y^2} + 2\frac{\partial^2 \sigma_{xy}}{\partial x \partial y} + \frac{\partial X}{\partial x} + \frac{\partial Y}{\partial y} = 0
\end{equation}
$$

移項して

<div style="overflow-x: auto">
$$
\begin{equation}
    2\frac{\partial^2 \sigma_{xy}}{\partial x \partial y} = -\frac{\partial^2 \sigma_x}{\partial x^2} - \frac{\partial^2 \sigma_{y}}{\partial y^2} - \frac{\partial X}{\partial x} - \frac{\partial Y}{\partial y}
\end{equation}
\label{g}\tag{7}
$$
</div>

式(\ref{d})の右辺へ式(\ref{g})を代入して

$$
\begin{equation}
    \frac{1}{E}\left(\frac{\partial^2}{\partial y^2}\sigma_x - \nu\frac{\partial^2}{\partial y^2}\sigma_y + \frac{\partial^2}{\partial x^2}\sigma_y - \nu\frac{\partial^2}{\partial x^2}\sigma_x \right) = \frac{1+\nu}{E}\left(-\frac{\partial^2}{\partial x^2}\sigma_x - \frac{\partial^2}{\partial y^2}\sigma_{y} - \frac{\partial X}{\partial x} - \frac{\partial Y}{\partial y} \right)
\end{equation}
$$

整理する

<div style="overflow-x: auto">
$$
\begin{equation}
    \left(\frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} \right)(\sigma_x + \sigma_y) = -(1+\nu)\left(\frac{\partial X}{\partial x} + \frac{\partial Y}{\partial y} \right)
\end{equation}
\label{h}\tag{8}
$$
</div>

今回は，物体力$$X = Y = 0$$だから式(\ref{h})の右辺は0である．
$$\nabla^2=\frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2}$$とすると

$$
\begin{equation}
    \nabla^2 (\sigma_x + \sigma_y) = 0
\end{equation}
$$

と導ける．