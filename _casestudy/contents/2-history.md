---
layout: blank
markdown: false
permalink: /subpages/history
title: "Interactive Timeline"
author_profile: true
---
<style>
	html, body {
		overflow: hidden;
	}

	.serif, #serif, h1, h2, h3, h4, h5, h6, h7, h8, h9, p, meta, li, span {
		font-family: Georgia, "Times New Roman", Times, serif;
	}

	.line {
		height: 2px;
		width: 400vw;
		z-index: 0;
		position: absolute;
		top: 65vh;
		border-top: 4px solid black;
		transform: translate(-50%, -50%);
	}

	.moment {
		height: 30px;
		width: 1px;
		z-index: 1;
		position: absolute;
		top: calc(65vh);
		border: 1px solid black;
		transform: translate(-50%, -50%);
		left: -100vw;
	}

	.moment-image {
		z-index: 1;
		position: absolute;
		opacity: 0;
		top: calc(38vh);
		transform: translate(-50%, -50%);
		left: 50vw;
	} 

	.moment-text {
		z-index: 1;
		position: absolute;
		display: flex;
		flex-direction: column;
		transform: translate(-50%, -50%);
		top: 78vh;
		align-items: center;  
   		text-align: center;   
		width: 45vw;
		left: -100vw;
	}

	.moment-title {
		font-weight: bold;
		font-size: 24px;
	}

	.moment-body {
		font-size: 14px;
	}

	.nav-buttons {
		
	}

	.nav-left {
		z-index: 2;
		font-size: 64px;
		font-family: Georgia, "Times New Roman", Times, serif;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 38vh;
		left: 20vw;
		cursor: pointer;
		color: black;
	}

	.nav-right {
		z-index: 2;
		font-size: 64px;
		font-family: Georgia, "Times New Roman", Times, serif;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 38vh;
		left: 80vw;
		cursor: pointer;
		color: black;
	}

	.nav-left:hover, .nav-right:hover {
		text-shadow: 2px 2px 7px black;
	}

	.unlink {
		text-decoration: none;
	}
</style>

<div style="height: 100vh; width: 1px">
</div>

<div class="nav-buttons">
	<a href="/EthicsWebsite/subpages/intro">
	<div class="nav-left">
		&larr; Back
	</div>
	</a>

	<a href="/EthicsWebsite/subpages/ai">
	<div class="nav-right">
		Next &rarr;
	</div>
	</a>
</div>

<div class="line">
</div>

<div class="moment" id="moment1"></div>
<img class="moment-image" id="moment-image1" src="/EthicsWebsite/files/SHARE.png" width = "300"/>
<div class="moment-text" id="moment-text1">
	<span class="moment-title">1960s</span>
	<span class="moment-body">Most software is more or less open source. Much of it is produced in research settings and freely distributed among software circles. For the industry, hardware is typically positioned as the product, all software included. One example is IBM's SHARE group, which freely distributed source code at public libraries.</span>
</div>

<div class="moment" id="moment2"></div>
<img class="moment-image" id="moment-image2" src="/EthicsWebsite/files/IBM.gif" width = "300"/>
<div class="moment-text" id="moment-text2">
	<span class="moment-title">1969</span>
	<span class="moment-body">IBM announces the unbundling of its software, which starts the software industry as a competitive market. Throughout the 1970s, the software ecosystem would unfold and methods of privatization would develop.</span>
</div>

<div class="moment" id="moment3"></div>
<img class="moment-image" id="moment-image3" src="/EthicsWebsite/files/UNIX.png" width = "300"/>
<div class="moment-text" id="moment-text3">
	<span class="moment-title">1972</span>
	<span class="moment-body">The UNIX operating system is developed at AT&T Bell Labs. It is not free to distribute, but it is distributed to some university with a free use licence.</span>
</div>

<div class="moment" id="moment4"></div>
<img class="moment-image" id="moment-image4" src="/EthicsWebsite/files/TEX.png" width = "300"/>
<div class="moment-text" id="moment-text4">
	<span class="moment-title">1978</span>
	<span class="moment-body">Donald Knuth develops TeX, a typesetting system that would go on to become the LaTeX we all know and love. At the time, it was freely distributed with a prototype open source licence, and was one of the first widely used packages with such a licence.</span>
</div>

<div class="moment" id="moment5"></div>
<img class="moment-image" id="moment-image5" src="/EthicsWebsite/files/GNU.svg" width = "300"/>
<div class="moment-text" id="moment-text5">
	<span class="moment-title">1983</span>
	<span class="moment-body">Richard Stallman, a researcher at the MIT lab for artificial intelligence, quits his job and announces the GNU project. The goal of the project is to produce a UNIX-like operating system composed entirely of free software. </span>
</div>

<div class="moment" id="moment6"></div>
<div class="moment-text" id="moment-text6">
	<span class="moment-title">1987</span>
	<span class="moment-body">By this point, the GNU project had produced the text editor Emacs, its own compiler, a debugger, and several other packages. This allowed anyone to develop their own programs for the system, and Richard established the Free Software Foundation in 1985 off of the wave of his success.</span>
</div>

<div class="moment" id="moment7"></div>
<div class="moment-text" id="moment-text7">
	<span class="moment-title">1989</span>
	<span class="moment-body">The GNU project releases their unified open source software licence: the GNU General Public License. It establishes "four freedoms:" free to use, free to study and modify, free to distribute, and free to distribute modified versions.</span>
</div>

<div class="moment" id="moment8"></div>
<div class="moment-text" id="moment-text8">
	<span class="moment-title">1990</span>
	<span class="moment-body">The GNU General Public Licence is considered innovative in that it uses copyright law to protect freedoms. By 1990, the operating system was almost complete: it just lacked a kernel to run on.</span>
</div>

<div class="moment" id="moment5-1"></div>
<img class="moment-image" id="moment-image5-1" src="/EthicsWebsite/files/XWindow.svg" width = "300"/>
<div class="moment-text" id="moment-text5-1">
	<span class="moment-title">1986</span>
	<span class="moment-body">While GNU is still in development, X Windows is released as a collaborative project by both academia and industry, using a similarly free license. This is an early example of companies like IBM being benefited by the unpaid improvement of software by other sources.</span>
</div>

<div class="moment" id="moment9"></div>
<img class="moment-image" id="moment-image9" src="/EthicsWebsite/files/GNU.svg" width = "300"/>
<div class="moment-text" id="moment-text9">
	<span class="moment-title">1994</span>
	<span class="moment-body">Linus Torvalds releases the Linux kernel, to which the GNU software is swiftly ported. Now the entire operating system can be run and distributed for free. Furthermore, groups like Debian and Red Hat begin releasing their own distributions of Linux, beginning the open source ecosystem.</span>
</div>

<div class="moment" id="moment10"></div>
<img class="moment-image" id="moment-image10" src="/EthicsWebsite/files/IE.svg" width = "300"/>
<div class="moment-text" id="moment-text10">
	<span class="moment-title">1994-1997</span>
	<span class="moment-body">As the consumer computing market begins to expand exponentially, proprietary software remains dominant in all areas besides niche, highly technical uses. This is highly characterized by Microsoft's applications, particularly Internet Explorer, one of the few consumer web browsers.</span>
</div>

<div class="moment" id="moment11"></div>
<img class="moment-image" id="moment-image11" src="/EthicsWebsite/files/apache.jpg" width = "300"/>
<div class="moment-text" id="moment-text11">
	<span class="moment-title">1999</span>
	<span class="moment-body">The term open source is coined as an alternative to proprietary software. The Apache foundation is formed during this year, and they produce the Apache HTTP server. Some of their members are employees of companies with a clear interest in Apache projects.</span>
</div>

<div class="moment" id="moment12"></div>
<img class="moment-image" id="moment-image12" src="/EthicsWebsite/files/firefox.svg" width = "300"/>
<div class="moment-text" id="moment-text12">
	<span class="moment-title">2003</span>
	<span class="moment-body">The Mozilla foundation is formed, which will go on to produce Firefox. They are funded by industry companies like, ironically, Google, and maintain a base of paid employees [7].</span>
</div>



<script src="/EthicsWebsite/files/interactive.js"></script>
