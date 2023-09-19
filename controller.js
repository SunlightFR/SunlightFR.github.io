
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = document.getElementById("spinnerWidth").value;
	this.currColour =  document.getElementById("colour").value
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
		drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}

	Pencil.prototype.onInteractionUpdate = function(dnd){
		switch(this.currEditingMode){
			case editingMode.line:
				this.currentShape.p2x = dnd.finalx
				this.currentShape.p2y = dnd.finaly
				break;
			case editingMode.rect:
				this.currentShape.largeur = dnd.finalx - dnd.initialx
				this.currentShape.hauteur = dnd.finaly - dnd.initialy
				break;
		}
		drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}

	Pencil.prototype.onInteractionEnd = function(dnd){
		drawing.add(this.currentShape)
		console.log(drawing)
	}

	document.getElementById("butRect").onclick =  e=>{
		this.currEditingMode = editingMode.rect
	}

	document.getElementById("butLine").onclick =  e=>{
		this.currEditingMode = editingMode.line
	}

	document.getElementById("colour").onchange = e=>{
		this.currColour = document.getElementById("colour").value
	}

	document.getElementById("spinnerWidth").onchange = e=>{
		this.currLineWidth = document.getElementById("spinnerWidth").value
	}
};


