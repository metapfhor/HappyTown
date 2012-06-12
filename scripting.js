N=3;
G=1;
function Body(){
	this.q = [N];
	this.p = [N];
	this.interactions = [];
	this.separationWith[i][j]=function(b,r){
		for(i=0;i<N;i++){
			r[i]=this.q[i]-b.q[i];
			r[N+1]+=r[i]*r[i];
		}
		r[N+1]=Math.sqrt(r[N+1]);
	}
	this.interactWith=function(b){
		
	}
}

MassiveBody.prototype = new Body(m){
	this.m=m;
	this.inverseM=1/m;
	this.interactions[this.interactions.legnth]=this.massAct;
	this.updatePos=function(dt){
		for(i=0;i<N;i++){
			q[i]+=inverseM*p[i];
		}
	}
	this.massAct = function(b,f){
		this.separationWith(b,f);
		f[N+1]=G*this.m*b.m/(f[N+1]*f[N+1]);
		for(i=0;i<N;i++){
			f[i]=-f[i]/f[N+1];
		}
		r[N+1]=Math.sqrt(r[N+1]);
	}
}

BodyHandler = function(){
	this.b=[];
	this.addBody=function(b){
		this.b[this.b.length]=b;
	}
	this.interactbodies=function(){
		for(i=0;i<this.b.length;i++){
			for(j=i+1;){
				
			}
		}
	}
}