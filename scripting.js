var fps=2;
var dt=1000/fps;
var svg;
var G=1;
var bodyRegistry=[]

function initWorld(){
	body = document.getElementsByTagName("body")[0];
	svg = document.createElement("svg");
	svg.setAttribute("width",body.clientWidth);
	svg.setAttribute("height",body.clientHeight);
	document.appendChild(svg);
	runSim();
}

function runSim(){

}


function HardSphere(m,x,y,r){
	this.inverseMass=1/m;
	this.x=x;
	this.px=0;
	this.y=y;
	this.py=0;
	this.r=r;
	this.viz=initViz(x,y,r);
	this.forceOn=function(HS){

	}
	this.distSquaredWith=function(HS){
		return (this.x-HS.x)*(this.x-HS.x)+(this.y-HS.y)*(this.y-HS.y)
	}
	this.move  = function(dt){
		this.x+=dt*this.px
		this.y+dt*this.py
	}
}

function initViz(x,y,r){
	var circle = document.createElement("circle");
	circle.setAttribute("cx",x);
	circle.setAttribute("cy",y);
	circle.setAttribute("r",r);
	return circle;
}

function addToSim(HS,viz){
	bodyRegistry[bodyRegistry.length]=HS
	if(viz){
		svg.appendChild(HS.viz);
	}
}

function updatePos(dt){
	for(var i=0;i<bodyRegistry.length;i++){
		for(var j=i+1;j<bodyRegistry.length;j++){
			
		}
	}
}
