export default class Scene {
    geometries = [];

    constructor(domElement) {
        this.context = domElement.getContext("webgl");

        if (this.context === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }
        
        this._createShaderProgram();
    }

    _createShaderProgram() {
        this.shaderProgram = this.context.createProgram();
        this.context.attachShader(this.shaderProgram, this._createVertexShader());
        this.context.attachShader(this.shaderProgram, this._createFragmentShader());
        this.context.linkProgram(this.shaderProgram);
        this.context.useProgram(this.shaderProgram);
    }

    _createVertexShader() {

        let vertexShaderCode = `
            attribute vec3 aCoordinates;
            attribute vec4 aColor;
            varying mediump vec4 vColor;
            void main(){
                gl_Position = vec4(aCoordinates, 1.0);
                vColor = aColor;
            }`

        let vertexShader = this.context.createShader(this.context.VERTEX_SHADER);
        this.context.shaderSource(vertexShader, vertexShaderCode);
        this.context.compileShader(vertexShader);

        return vertexShader;
    }

    _createFragmentShader() {
        let fragmentShaderCode = `
            precision mediump float;
            varying vec4 vColor;
            void main(){
                gl_FragColor = vColor;
            }    
        `

        let fragmentShader = this.context.createShader(this.context.FRAGMENT_SHADER);
        this.context.shaderSource(fragmentShader, fragmentShaderCode);
        this.context.compileShader(fragmentShader);

        return fragmentShader;
    }

    _bindArrayInsideShader(arrayToBePushed, shaderAttribute) {
        let buffer = this.context.createBuffer();
        this.context.bindBuffer(this.context.ARRAY_BUFFER, buffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, arrayToBePushed, this.context.STATIC_DRAW);

        let coordinate = this.context.getAttribLocation(this.shaderProgram, shaderAttribute);
        
        if (shaderAttribute === "aColor") {
            this.context.vertexAttribPointer(coordinate, 4, this.context.FLOAT, false, 0, 0);
        }

        else {
            this.context.vertexAttribPointer(coordinate, 3, this.context.FLOAT, false, 0, 0);
        }

        this.context.enableVertexAttribArray(coordinate);

    }

    add(geometry) {
        this.geometries.push(geometry);
    }

    remove(removedGeometry) {
        this.geometries.forEach((geometry, index, object) => {
            if (removedGeometry === geometry) object.splice(index, 1);
        });
    }

    render() {
        // Bind Vertices
        let vertices = [];

        this.geometries.forEach((geometry) => {
            vertices.push(...geometry.getVerticeArray());
        })

        vertices = new Float32Array([...vertices]);

        this._bindArrayInsideShader(vertices, "aCoordinates");

        // Bind Colors
        let colors = [];

        this.geometries.forEach((geometry) => {
            colors.push(...geometry.getColorArray())
        });
        
        colors = new Float32Array([...colors]);
        
        this._bindArrayInsideShader(colors, "aColor");

        this.geometries.forEach((geometry) => {
            geometry.move();
        });

        this.context.clearColor(0.8, 0.8, 0.8, 1.0);
        this.context.clear(this.context.COLOR_BUFFER_BIT);

        this.context.drawArrays(this.context.TRIANGLES, 0, vertices.length / 3);
    }
}