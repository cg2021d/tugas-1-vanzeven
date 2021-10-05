import Vector3 from "./Vector3.js";

export default class Geometry {
    _vertices = []; // Vector3
    _faces = [];
    _colors = [];
    _deltaX = 0;
    _deltaY = 0;
    _deltaZ = 0;
    _animating = true;

    changeX = false;
    changeY = false;
    changeZ = false;

    //position :Vector3
    constructor(position = new Vector3(0, 0, 0)) {
        this.position = position;
    }

    //Vector3
    addVertice(vertice) {
        this._vertices.push(vertice);
    }

    addFace(face) {
        this._faces.push(face);
    }

    addColor(color) {
        this._colors.push(color);
    }

    setMovement(deltaX, deltaY, deltaZ) {
        this._deltaX = deltaX;
        this._deltaY = deltaY;
        this._deltaZ = deltaZ;
    }

    setAnimating() {
        this._animating = true;
    }

    getVerticeArray() {
        let vertices = [];

        this._faces.forEach((faces) => {
            faces.getArray().forEach((index) => {
                vertices.push(...this._vertices[index].getArray());
            });
        });

        return vertices;
    }

    getColorArray() {
        let colors = [];

        this._faces.forEach((faces) => {
            faces.getArray().forEach((index) => {
                colors.push(...this._colors[index].getArray());
            });
        });
        
        return colors;
    }

    move() {
        if (this._animating) {
            if (this.changeX) {
                this._deltaX = -this._deltaX;
                this.changeX = false;
            }
            if (this.changeY) {
                this._deltaY = -this._deltaY;
                this.changeY = false;
                console.log(this._deltaY);
            }
            if (this.changeZ) {
                this._deltaZ = -this._deltaZ;
                this.changeZ = false;
            }
    
            this._faces.forEach((faces) => {
                faces.getArray().forEach((index) => {
                    this._vertices[index].moveArray(this._deltaX, this._deltaY, this._deltaZ);
    
                    let vertices = this._vertices[index].getArray();
                    if (vertices[0] >= 1 || vertices[0] <= -1) {
                        this.changeX = true; 
                    }
                    if (vertices[1] >= 1 || vertices[1] <= -1) {
                        console.log(vertices[1]);
                        this.changeY = true;
                    }
                    if (vertices[2] >= 1 || vertices[2] <= -1) {
                        this.changeZ = true;
                    }
                });
            });
        }
    }
}