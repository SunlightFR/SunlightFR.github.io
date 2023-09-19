
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
    DnD.prototype.clic = true
    const pos = getMousePosition(canvas,e)
    console.log(pos)
    DnD.prototype.initialx = pos.x
    DnD.prototype.initialy = pos.y
  }

  DnD.prototype.gererDeplacement = e=>{
    if(DnD.prototype.clic){
      const pos = getMousePosition(canvas,e)
      console.log(pos)
    }
    
  }

  DnD.prototype.gererRelachement = e=>{
    DnD.prototype.clic = false
    const pos = getMousePosition(canvas,e)
    console.log(pos)
    DnD.prototype.finalx = pos.x
    DnD.prototype.finaly = pos.y
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


