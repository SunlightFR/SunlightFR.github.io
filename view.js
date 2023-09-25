
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx){
    ctx.strokeStyle = this.couleur
    ctx.lineWidth = this.epaisseur
}

Rectangle.prototype.paint = function(ctx){
    ctx.beginPath()
    Forme.prototype.paint.call(this,ctx)
    ctx.rect(this.px,this.py,this.largeur,this.hauteur)
    ctx.stroke()
}

Line.prototype.paint = function (ctx){
    ctx.beginPath()
    Forme.prototype.paint.call(this,ctx)
    ctx.moveTo(this.p1x, this.p1y);
    ctx.lineTo(this.p2x, this.p2y);
    ctx.stroke()
}

Drawing.prototype.paint = function(ctx){
    ctx.fillStyle = "#F0F0F0"
    ctx.fillRect(0,0,canvas.width,canvas.height);
    this.getFormes().forEach(forme =>{
        forme.paint(ctx)
    })
}

Drawing.prototype.updateShapeList = function(obj,id){
    const li = document.createElement("li")
    li.innerHTML = '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-remove-sign">'+obj.toString()+'</span></button>'
    li.querySelector("button").onclick = e=>{
        console.log("cliqué !")
        console.log()
        this.formes.splice(id,1)
        document.getElementById("shapeList").removeChild(li)
    }
    document.getElementById("shapeList").appendChild(li)
}