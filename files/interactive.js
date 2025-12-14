var vel = 0;
var pos = 0;

var max = 10000000000000000;
var min = 0;

function setleft(id_, val_) {
	document.getElementById(id_).style.left = val_;
}

function setheight(id_, val_) {
	document.getElementById(id_).style.height = val_;
}

function setopacity(id_, val_) {
	document.getElementById(id_).style.opacity = val_;
}

function hump(x) {
	return 1/(2**(-.1*x)+2**(.1*x));

}

function hump2(x) {
	return 1/(2**(-.6*x)+2**(.6*x));

}


function animate(event) {
	if (event.type=="wheel") var dir = event.deltaY;
	else {
		var dir = lastpos - event.touches[0].clientY;
		lastpos = event.touches[0].clientY;
	}

	vel+=0.01*dir;
	if (vel>6) vel = 6;
	if (vel<-6) vel = -6;
}
window.addEventListener('wheel', animate);



function mainloop() {
	// Physics
	pos += vel;
	pos = Math.max(Math.min(pos, max), min);
	vel = .95*vel;


	// Graphics
	// moment 1
	setleft("moment1", (50 - .001*(pos**3))+"vw");
	setheight("moment1", (30 + 50*hump(pos)) + "px");
	setopacity("moment-image1", 4 - .01*(pos)**2);
	setleft("moment-text1", (50 - .001*(pos**3))+"vw");

	// moment 2
	setleft("moment2", (50 - .001*((pos - 100)**3))+"vw");
	setheight("moment2", (30 + 50*hump(pos - 100)) + "px");
	setopacity("moment-image2", 4 - .01*(pos - 100)**2);
	setleft("moment-text2", (50 - .001*((pos - 100)**3))+"vw");

	// moment 3
	setleft("moment3", (50 - .001*((pos - 200)**3))+"vw");
	setheight("moment3", (30 + 50*hump(pos - 200)) + "px");
	setopacity("moment-image3", 4 - .01*(pos - 200)**2);
	setleft("moment-text3", (50 - .001*((pos - 200)**3))+"vw");

	// moment 4
	setleft("moment4", (50 - .001*((pos - 300)**3))+"vw");
	setheight("moment4", (30 + 50*hump(pos - 300)) + "px");
	setopacity("moment-image4", 4 - .01*(pos - 300)**2);
	setleft("moment-text4", (50 - .001*((pos - 300)**3))+"vw");

	// moment 5
	setleft("moment5", (50 - .001*((pos - 400)**3))+"vw");
	setheight("moment5", (30 + 50*hump(pos - 400)) + "px");
	setopacity("moment-image5", 4 - .01*(pos - 400)*(pos - 700));
	setleft("moment-text5", (50 - .001*((pos - 400)**3))+"vw");

	// moment 5
	setleft("moment5-1", (50 - .001*((pos - 450)**3))+"vw");
	setheight("moment5-1", (30 + 50*hump(pos - 450)) + "px");
	setopacity("moment-image5-1", 4 - .01*(pos - 450)**2);
	setleft("moment-text5-1", (50 - .001*((pos - 450)**3))+"vw");
	
	// moment 6
	setleft("moment6", (50 - .001*((pos - 500)**3))+"vw");
	setheight("moment6", (30 + 50*hump(pos - 500)) + "px");
	setleft("moment-text6", (50 - .001*((pos - 500)**3))+"vw");

	// moment 7
	setleft("moment7", (50 - .001*((pos - 600)**3))+"vw");
	setheight("moment7", (30 + 50*hump(pos - 600)) + "px");
	setleft("moment-text7", (50 - .001*((pos - 600)**3))+"vw");

	// moment 8
	setleft("moment8", (50 - .001*((pos - 700)**3))+"vw");
	setheight("moment8", (30 + 50*hump(pos - 700)) + "px");
	setleft("moment-text8", (50 - .001*((pos - 700)**3))+"vw");

	// moment 9
	setleft("moment9", (50 - .001*((pos - 800)**3))+"vw");
	setheight("moment9", (30 + 50*hump(pos - 800)) + "px");
	setheight("moment-image9", (30 + 50*hump(pos - 800)) + "px");
	setleft("moment-text9", (50 - .001*((pos - 800)**3))+"vw");

		// moment 10
	setleft("moment10", (50 - .001*((pos - 900)**3))+"vw");
	setheight("moment10", (30 + 50*hump(pos - 900)) + "px");
	setheight("moment-image10", (30 + 50*hump(pos - 900)) + "px");
	setleft("moment-text10", (50 - .001*((pos - 900)**3))+"vw");

		// moment 11
	setleft("moment11", (50 - .001*((pos - 1000)**3))+"vw");
	setheight("moment11", (30 + 50*hump(pos - 1000)) + "px");
	setheight("moment-image11", (30 + 50*hump(pos - 1000)) + "px");
	setleft("moment-text11", (50 - .001*((pos - 1000)**3))+"vw");

	// moment 12
	setleft("moment12", (50 - .001*((pos - 1100)**3))+"vw");
	setheight("moment12", (30 + 50*hump(pos - 1100)) + "px");
	setheight("moment-image12", (30 + 50*hump(pos - 1100)) + "px");
	setleft("moment-text12", (50 - .001*((pos - 1100)**3))+"vw");
}

setInterval(mainloop, 10);

document.getElementById("moment2").style.left = "4vw"