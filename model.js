
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Forme(couleur, epaisseur){
    this.couleur = couleur
    this.epaisseur = epaisseur

}

function Line(p1x,p1y,p2x,p2y,couleur,epaisseur){
    Forme.call(this,couleur,epaisseur)
    this.p1x = p1x
    this.p1y = p1y
    this.p2x = p2x
    this.p2y = p2y
    Line.prototype.toString = function(){
        return "Ligne. Point de départ : ("+this.p1x+", "+this.p1y+")"+this.couleur
    }

}
Line.prototype = new Forme()

function Rectangle(px, py , largeur, hauteur,couleur,epaisseur){
    Forme.call(this,couleur,epaisseur)
    this.px = px
    this.py = py
    this.largeur = largeur
    this.hauteur = hauteur
    Rectangle.prototype.toString = function(){
        return "Rectangle. Point de départ : ("+this.px+", "+this.py+")"+ this.couleur
    }
}

function Cercle(ox, oy, rayon,couleur, epaisseur){
    Forme.call(this,couleur,epaisseur)
    this.ox = ox
    this.oy = oy
    this.rayon = rayon
    Cercle.prototype.toString = function(){
        return "Cercle. Origine : ("+this.ox+", "+this.oy+"), rayon : "+this.rayon+", "+this.couleur
    }
}

Rectangle.prototype = new Forme()

function Drawing(){
    this.formes = []
    this.add = function(forme){
        this.formes.push(forme)
        this.updateShapeList(forme)
    }

    this.pop  =function(){
        this.formes.pop()
    }

    this.getFormes = function(){
        return this.formes
    }
}

