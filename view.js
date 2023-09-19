
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx){
    ctx.beginPath()
    ctx.strokeStyle = this.couleur
    ctx.lineWidth = this.epaisseur
    ctx.rect(this.px,this.py,this.px+this.largeur,this.py+this.hauteur)
    ctx.stroke()
}

Line.prototype.paint = function (ctx){
    ctx.beginPath()
    ctx.strokeStyle = this.couleur
    ctx.lineWidth = this.epaisseur
    ctx.moveTo(this.p1x, this.p1y);
    ctx.lineTo(this.p2x, this.p2y);
    ctx.stroke()
}