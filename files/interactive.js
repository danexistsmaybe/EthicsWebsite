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
	setleft("moment-text3", (50 - .001*((pos - 200)**3))+"vw");
}

setInterval(mainloop, 10);

document.getElementById("moment2").style.left = "4vw"