# Composite canvas 

Helper object to handle n canvas elements as layer.

Create a composite canvas

    `var c = new CompositeCanvas(width, height);`

Add layer
    
    `c.addLayer(id);`

Get canvas context
    
    `var ctx = c.getCtx(id);`

Copy layer to layer
    
    `c.copyC2C(id1, id2);`

Remove layer
    
    `c.removeLayer(id);`
