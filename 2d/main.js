function main() {
	let obj1_top = [ //antena
		-0.606, 0.349,
		-0.606, 0.6708,
		-0.654, 0.349,

        -0.654, 0.6708,
		-0.606, 0.6708,
		-0.654, 0.349,	

        -0.654, 0.6708,
		-0.606, 0.6708,
		-0.62265, 0.906,

        -0.654, 0.6708,
		-0.63735, 0.906,
		-0.62265, 0.906,

        -0.63, 0.91,
		-0.63735, 0.906,
		-0.62265, 0.906,//end of antena

        -0.618, 0.093,
        -0.633, 0.093,
        -0.618, 0.188,

        -0.633, 0.188,
        -0.633, 0.093,
        -0.618, 0.188,

        -0.618, 0.093,
        -0.633, 0.093,
        -0.6255, 0.087//end of pins
	];
    
    let obj1_bottom = [ //bagian utama
		-0.295, 0.307,
		-0.705, 0.307, 
		-0.295, 0.431,

        -0.705, 0.431,  
		-0.705, 0.307, 
		-0.295, 0.431,//end of kotak besar  
		
        -0.592, 0.188,
        -0.658, 0.188,
        -0.592, 0.307,  

        -0.658, 0.307,
        -0.658, 0.188,
        -0.592, 0.307,//end of pin base
	];
	
	let obj2_top = [
		0.295, 0.307,
		0.705, 0.307, 
		0.295, 0.431,

        0.705, 0.431,  
		0.705, 0.307, 
		0.295, 0.431,//end of kotak besar  
		
        0.592, 0.188,
        0.658, 0.188,
        0.592, 0.307,  

        0.658, 0.307,
        0.658, 0.188,
        0.592, 0.307,//end of pin base
	];
	
	let obj2_bottom = [//antena
		0.606, 0.349,
		0.606, 0.6708,
		0.654, 0.349,

        0.654, 0.6708,
		0.606, 0.6708,
		0.654, 0.349,	

        0.654, 0.6708,
		0.606, 0.6708,
		0.62265, 0.906,

        0.654, 0.6708,
		0.63735, 0.906,
		0.62265, 0.906,

        0.63, 0.91,
		0.63735, 0.906,
		0.62265, 0.906,//end of antena

        0.618, 0.093,
        0.633, 0.093,
        0.618, 0.188,

        0.633, 0.188,
        0.633, 0.093,
        0.618, 0.188,

        0.618, 0.093,
        0.633, 0.093,
        0.6255, 0.087//end of pins
	];
	

	function createShader(gl, type, source) {
		let shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
	
		let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
		if(success) {
			return shader;
		}
	
		console.log(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
	}
	
	let canvas = document.getElementById('myCanvas');
	let gl = canvas.getContext('webgl');
	
	let vertices = [
		...obj1_bottom, ...obj1_top,
		...obj2_top, ...obj2_bottom,
	];
	
	let vertexShaderCode = `
		attribute vec2 a_position;
		attribute vec4 a_color;
		varying vec4 v_color;
		uniform mat4 u_matrix;
	
		void main() {
			gl_Position = u_matrix * vec4(a_position, 0, 1.65);
			v_color = a_color;
		}
	`;
	let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderCode);
	
	
	let fragmentShaderCode = `
		precision mediump float;
		varying vec4 v_color;
	
		void main() {
			gl_FragColor = v_color;
		}
	`;
	let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderCode);
	
	let shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);
	
	let coords = gl.getAttribLocation(shaderProgram, "a_position");
	var colorLocation = gl.getAttribLocation(shaderProgram, "a_color");
	
	var color = [];
	for (let i = 0; i < obj1_bottom.length/2; i++) {
		let r = 0.7;
		let g = 0.7;
		let b = 0.7;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	for (let i = 0; i < obj1_top.length/2; i++) {
		let r = 1;
		let g = 1;
		let b = 1;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	for (let i = 0; i < obj2_top.length/2; i++) {
		let r = 0.7;
		let g = 0.7;
		let b = 0.7;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	for (let i = 0; i < obj2_bottom.length/2; i++) {
		let r = 1;
		let g = 1;
		let b = 1;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	
	
	let colorBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(color), gl.STATIC_DRAW);
	gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(colorLocation);
	
	let vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	gl.vertexAttribPointer(coords, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(coords);
	
	let dy = 0;
	/*
	 * Kecepatan adalah tiga digit terakhir NRP (009)
	*/
	let speed = 0.0009;
    // let speed = 0.005;//speed for debugging
	function render() {
		dy >= 0.45 ? speed = -speed : speed = speed;
		dy <= -1.05 ? speed = -speed : speed = speed;
		dy += speed;
		gl.useProgram(shaderProgram);
		
		const leftObject = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			-0.3, 0.0, 0.0, 1.0,
		]
			
		const rightObject = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, dy, 0.0, 1.0,
		]
			
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
	
		const u_matrix = gl.getUniformLocation(shaderProgram, 'u_matrix');
		gl.uniformMatrix4fv(u_matrix, false, rightObject);
		
		gl.drawArrays(
			gl.TRIANGLES, 
			(obj1_bottom.length + obj1_top.length)/2, 
			(obj2_top.length + obj2_bottom.length)/2
		);
			
		gl.uniformMatrix4fv(u_matrix, false, leftObject);
		gl.drawArrays(
			gl.TRIANGLES, 
			0, 
			(obj1_bottom.length + obj1_top.length)/2
		);
		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}

main();
