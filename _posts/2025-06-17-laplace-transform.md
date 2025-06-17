---
layout: post
title: "時間積分のLaplace変換について丁寧に"
date: 2025-06-17
tags: ["数学", "解析力学", "物理"]
---

# はじめに

授業で**Laplace変換**を扱いました．しかし，私は授業中に出てきた時間積分のLaplace変換について，どうも先生の極限の議論が雑だなーと感じました．
備忘録として，ちょっと丁寧な時間積分のLaplace変換の極限の議論についてメモを残しておきます．

<br>

# Laplace変換の定義

$$t\ge 0$$ で定義された $$f(x)$$ に対して，$$\int_0^{\infty} e^{-st}f(t)dt$$ が収束するとき，その値$$F(s)$$を$$f(t)$$のLaplace変換という．（sは複素数）

$$
F(s) = \mathscr{L}[f(t)] = \int_0^{\infty} e^{-st}f(t)dt
$$

ここで$$s = \sigma + j\omega$$ とします．（$$\sigma, \omega$$ は実数）

<br>

# 時間積分のLaplace変換について考えていく

今からは以下のLaplace変換を考えていく．

$$
\mathscr{L}\left[\int_0^t f(u)du\right]
$$

定義に従って計算していこう．

<div style="overflow-x: auto">
$$
\begin{align*}
&\mathscr{L}\left[\int_0^t f(u)du\right] \\
&= \int_0^{\infty} e^{-st}\int_0^t f(u)dudt \\
&= \left[-\frac{1}{s}e^{-st}\int_0^{t}f(u)du \right]_0^{\infty} + \frac{1}{s}\int_0^{\infty}e^{-st}f(t)dt \tag{1}\label{eq:laplace}
\end{align*}
$$
</div>

式\eqref{eq:laplace}の右辺の第一項目の

$$
e^{-st} \int_0^t f(u)du \quad (t \to \infty)
$$

について見ていきます．（先生はこれが0なのを自明として扱っていたけど，私はそこまで頭がよくない！）

Laplace変換の存在定理より，正の定数$$M$$が存在して $$\sigma > \sigma_0$$ において

$$
|f(t)| \le Me^{\sigma_0 t}
$$

が成り立ちます．（$$t$$は任意の非負実数）

ここで以下のように $$g(t)$$ を定めます．

$$
g(t) = \int_0^t f(u) du
$$

<div style="overflow-x: auto">
$$
|g(t)| = \left|\int_0^t f(u) du \right| \le \int_0^t |f(u)| du \le \int_0^t Me^{\sigma_0} du = \frac{M}{\sigma_0} (e^{\sigma_0 t}-1)
$$
</div>

よって正の数$$C$$を用いて，

<div style="overflow-x: auto">
$$
|g(t)| \le \frac{M}{\sigma_0} (e^{\sigma_0 t} - 1) \le \frac{M}{\sigma_0}e^{\sigma_0 t} = Ce^{\sigma_0 t} \tag{2}\label{eq:laplace2}
$$
</div>

ここで$$\sigma > \sigma_0$$だから

<div style="overflow-x: auto">
$$
\begin{align*}
|e^{-st}| &= |e^{-(\sigma+j\omega)t}| \\
&= |e^{-\sigma t}||e^{-j\omega t}| \\
&= |e^{-\sigma t}| \qquad (\because \text{オイラーの公式}) \\
&= e^{-\sigma t} \tag{3}\label{eq:laplace3}
\end{align*}
$$
</div>

式\eqref{eq:laplace2}式\eqref{eq:laplace3}より，

<div style="overflow-x: auto">
$$
|g(t)e^{-st}| \le Ce^{\sigma_0 t}e^{-\sigma t} = Ce^{-(\sigma - \sigma_0)t}
$$
</div>

ここで

<div style="overflow-x: auto">
$$
\lim_{t \to \infty} Ce^{-(\sigma - \sigma_0)t} = 0
$$
</div>

である．（$$\because \sigma-\sigma_0 > 0$$）

したがって

<div style="overflow-x: auto">
$$
\lim_{t \to \infty} |g(t)e^{-st}| = 0
$$
</div>

<div style="overflow-x: auto">
$$
\lim_{t \to \infty} e^{-st}\int_0^t f(u)du = 0
$$
</div>

となります！！

したがって式\eqref{eq:laplace}の右辺の第一項目は

<div style="overflow-x: auto">
$$
\left[-\frac{1}{s}e^{-st}\int_0^{t}f(u)du \right]_0^{\infty} = 0-0 = 0
$$
</div>

となるので，


<div style="overflow-x: auto">
$$
\begin{align*}
\mathscr{L}\left[\int_0^t f(u)du\right] &= \frac{1}{s}\int_0^{\infty}e^{-st}f(t)dt \\
&= \frac{F(s)}{s}
\end{align*}
$$
</div>

<br>

# 時間積分のLaplace変換の結果

結局授業で教わったものと一致しました！

余談ですが，微分方程式でLaplace変換ができるときに，機械的に解くことができるなんて幸せですね．
複素の世界はすばらしいなぁ