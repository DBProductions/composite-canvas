/**
 * composite canvas
 * handle n canvas element
 */
var CompositeCanvas = function(width, height)  {
	"use strict";
    this.canvasLayer = [];
    this.elements = [];
    this.color = '#fff';
    this.width = (width !== undefined) ? width : 500;
    this.height = (height !== undefined) ? height : 400;
    /**
     * get context
     */
    this.getCtx = function getCtx(canvas, color) {
        var c = document.querySelector('#' + canvas);
        var ctx = c.getContext('2d');
        if (undefined !== color) {
            ctx.fillStyle = color;  
        } else {
            ctx.fillStyle = this.color;
        }
        return ctx;
    };
    /**
     * add a layer
     */
    this.addLayer = function addLayer(canvas, width, height) {
        this.canvasLayer.push(canvas);
        var element = document.createElement('canvas');
        element.setAttribute('id', canvas);
        element.setAttribute('width', (width !== undefined) ? width + 'px' : this.width + 'px');
        element.setAttribute('height', (height !== undefined) ? height + 'px' : this.height + 'px');
        document.getElementsByTagName('body')[0].appendChild(element);
        this.elements.push(element);
    };
    /** 
     * remove a canvas 
     */
    this.removeLayer = function removeLayer(canvas) {
        for (var i = 0, n = this.canvasLayer.length; i < n; i++) {
            if (this.canvasLayer[i] === canvas) {
                this.canvasLayer.splice(i, 1);
                this.elements.splice(i, 1);
                var ele = document.querySelector('#' + canvas);
                ele.parentNode.removeChild(ele);
            } 
        }			
    };								
    /** 
     * copy canvas 
     */
    this.copyC2C = function copyC2C(c1, c2) {								
        var curCanvas = document.getElementById(c1), bufCtx = this.getCtx(c2);									
        bufCtx.drawImage(curCanvas, 0, 0);
    };
};