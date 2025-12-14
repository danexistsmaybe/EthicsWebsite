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
	}

	.moment-image {
		z-index: 1;
		position: absolute;
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
<img class="moment-image" id="moment-image2" src="/EthicsWebsite/files/UNIX.gif" width = "300"/>
<div class="moment-text" id="moment-text3">
	<span class="moment-title">1972</span>
	<span class="moment-body">The UNIX kernel is developed at AT&T Bell Labs. It is not free to distribute, but it is distributed to some university with a free use licence.</span>
</div>

<script src="/EthicsWebsite/files/interactive.js"></script>
