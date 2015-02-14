# Composite canvas 

Helper object to handle n canvas elements as layer.

Create a composite canvas

    var c = new CompositeCanvas(width, height);

Add layer
    
    c.addLayer(id);

Get canvas context
    
    var ctx = c.getCtx(id);

Copy layer to layer
    
    c.copyC2C(id1, id2);

Remove layer
    
    c.removeLayer(id);

## Build it
This repository use Grunt to build the source.

    npm install
    grunt

## Feedback
Star this repo if you found it useful. Use the github issue tracker to give feedback on this repo.