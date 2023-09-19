
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx){
    ctx.beginPath()
    ctx.strokeStyle = this.couleur
    ctx.strokeWidth = this.epaisseur
    ctx.rect(this.px,this.py,this.px+this.largeur,this.py+this.hauteur)
    //ctx.rect(10,10,100,100)
    ctx.stroke()
}