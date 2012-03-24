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
    var c = document.getElementById(canvas), ctx = c.getContext('2d');
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
    document.getElementsByTagName('body')[0].appendChild(element);	
	this.elements.push(element);	
}

// remove a canvas
CompositeCanvas.prototype.removeLayer = function(canvas) {
	for (var i = 0, n = this.canvasLayer.length; i < n; i++) {
	    if (this.canvasLayer[i] == canvas) {															 						
			this.canvasLayer.splice(i, 1); 	
			this.elements.splice(i, 1);
			var ele = document.getElementById(canvas);
            ele.parentNode.removeChild(ele);
		} 
	}			
}				
					
// copy canvas            						
CompositeCanvas.prototype.canvasToCanvas = function(canvas1, canvas2) {								
	var curCanvas = document.getElementById(canvas1), bufCtx = this.getCtx(canvas2);									
	bufCtx.drawImage(curCanvas, 0, 0);
	return true;
}

// helper for debugging
CompositeCanvas.prototype.showLayer = function() {
    console.log(this.canvasLayer);
	console.log(this.elements);
}



