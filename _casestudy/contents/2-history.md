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
		width: 30vw;
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
<img class="moment-image" id="moment-image1" src="/EthicsWebsite/files/sam.jpg" width = "300"/>
<div class="moment-text" id="moment-text1">
	<span class="moment-title">1982: Sorry</span>
	<span class="moment-body">It took quite awhile to code this from scratch! I have sources, info, etc., I just need to plug in the content. For now, I hope this proof of concept will suffice.</span>
</div>

<div class="moment" id="moment2"></div>
<img class="moment-image" id="moment-image2" src="/EthicsWebsite/files/apache.jpg" width = "300"/>
<div class="moment-text" id="moment-text2">
	<span class="moment-title">Hiya</span>
	<span class="moment-body">This is an example</span>
</div>

<div class="moment" id="moment3"></div>
<div class="moment-text" id="moment-text3">
	<span class="moment-title">Hiya</span>
	<span class="moment-body">This is an example</span>
</div>

<script src="/EthicsWebsite/files/interactive.js"></script>
