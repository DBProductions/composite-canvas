// basic properties
var CompositeCanvas = function (width, height)  {
	this.canvasLayer = [];
	this.elements = [];
	this.width = (width !== undefined) ? width : 500;
	this.height = (height !== undefined) ? height : 400;
	this.color = '#fff';
}

// get context
CompositeCanvas.prototype.getCtx = function(canvas, color) {
    var c = document.getElementById(canvas),
		ctx = c.getContext('2d');
	(undefined !== color) ? ctx.fillStyle = color : ctx.fillStyle = this.color; 	
	return ctx;
}	

// add a canvas
CompositeCanvas.prototype.addLayer = function(canvas, width, height) {
	this.canvasLayer.push(canvas);				
	var element = document.createElement('canvas');
	element.setAttribute('id', canvas);			
	element.setAttribute('width', (width !== undefined) ? width + 'px' : this.width + 'px');
	element.setAttribute('height', (height !== undefined) ? height + 'px' : this.height + 'px');
	document.getElementById('output').appendChild(element);				
	this.elements.push(element);	
}

// remove a canvas
CompositeCanvas.prototype.removeLayer = function(canvas) {
	for (var i = 0, n = this.canvasLayer.length; i < n; i++) {
	    if (this.canvasLayer[i] == canvas) {						
		    // first copy canvas to buffer									
			var curCanvas = document.getElementById( this.canvasLayer[i] ),
			    curCtx = curCanvas.getContext('2d'),
			    bufCanvas = document.getElementById('buffer'),
			    bufCtx = bufCanvas.getContext('2d');									
			// draw canvas to buffer
			bufCtx.drawImage(curCanvas, 0, 0);									 						
			this.canvasLayer.splice(i, 1); 	
			this.elements.splice(i, 1);
			var ele = document.getElementById(canvas);
            ele.parentNode.removeChild(ele);
		} 
	}			
}									
            						
CompositeCanvas.prototype.canvasToBuffer = function(canvas) {								
	var curCanvas = document.getElementById( canvas ),
		bufCtx = this.getCtx('buffer');									
	bufCtx.drawImage(curCanvas, 0, 0);
	return true;
}
			
CompositeCanvas.prototype.bufferToCanvas = function(canvas) {						
    var bufCanvas = document.getElementById('buffer'),				   
	    curCtx = this.getCtx( canvas );									
	curCtx.drawImage(bufCanvas, 0, 0);
}
			
CompositeCanvas.prototype.canvasToRender = function(canvas) {									
	var curCanvas = document.getElementById( canvas ),
		renCtx = this.getCtx('render');									
	renCtx.drawImage(curCanvas, 0, 0);
}

// helper for debugging
CompositeCanvas.prototype.showLayer = function() {
    console.log(this.canvasLayer);
	console.log(this.elements);
}



