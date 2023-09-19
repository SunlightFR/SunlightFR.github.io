
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  DnD.prototype.initialx = 0
  DnD.prototype.initialy = 0
  DnD.prototype.finalx = 0
  DnD.prototype.finaly = 0
  DnD.prototype.clic = false

  // Developper les 3 fonctions gérant les événements
  DnD.prototype.gererPression = e=>{
    
    this.clic = true
    const pos = getMousePosition(canvas,e)
    console.log(pos)
    this.initialx = pos.x
    this.initialy = pos.y
    if(interactor != null){
      interactor.onInteractionStart(this)
    }
    
  }

  DnD.prototype.gererDeplacement = e=>{
    if(this.clic){
      const pos = getMousePosition(canvas,e)
      this.finalx = pos.x
      this.finaly = pos.y
      if(interactor!=null){
        interactor.onInteractionUpdate(this)
      }
      
    }
    
  }

  DnD.prototype.gererRelachement = e=>{
    this.clic = false
    const pos = getMousePosition(canvas,e)
    this.finalx = pos.x
    this.finaly = pos.y
    if(interactor!=null){
      interactor.onInteractionUpdate(this)
    }
  }

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.gererPression, false);
  canvas.addEventListener('mousemove', this.gererDeplacement, false);
  canvas.addEventListener('mouseup', this.gererRelachement, false);
	
	

};



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};


