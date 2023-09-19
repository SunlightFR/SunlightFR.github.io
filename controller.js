
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;



	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	Pencil.prototype.onInteractionStart = function(dnd){
		switch(this.currEditingMode){
			case editingMode.line:
				this.currentShape = new Line(dnd.initialx, dnd.initialy, dnd.initialx, dnd.initialy, this.currColour, this.currLineWidth)
				break;
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.initialx,dnd.initialy,0,0,this.currColour,this.currLineWidth)
				break;
		}
		this.currentShape.paint(ctx)
	}

	Pencil.prototype.onInteractionUpdate = function(dnd){
		switch(this.currEditingMode){
			case editingMode.line:
				this.currentShape.p2x = dnd.finalx
				this.currentShape.p2y = dnd.finaly
		}
		this.currentShape.paint(ctx)
	}
};


