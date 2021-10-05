function main() {
	let obj1_top = [
		-1, 0,  
		-1, 1, 
		-0, 1,

        -1, 0,  
		-1, 1, 
		-0, 1,
		
		// -0.47781, 0.6809, 
		// -0.50652, 0.62186,
		// -0.47621, 0.4671,
		
		// -0.50652, 0.62186,
		// -0.47621, 0.4671,
		// -0.52886, 0.52613,
	
		// -0.47621, 0.4671,
		// -0.52886, 0.52613,
		// -0.54322, 0.4671,
	
		// -0.47621, 0.4671,
		// -0.54322, 0.4671,
		// -0.61082, 0.26845,
	
		// -0.47621, 0.4671,
		// -0.61082, 0.26845,
		// -0.46504, 0.30914,
	
		// -0.61082, 0.26845,
		// -0.46504, 0.30914,
		// -0.6083, 0.23436,
	
		// -0.46504, 0.30914,
		// -0.6083, 0.23436,
		// -0.57834, 0.21276,
	
		// -0.46504, 0.30914,
		// -0.57834, 0.21276,
		// -0.54003, 0.18699,
	
		// -0.46504, 0.30914,
		// -0.54003, 0.18699,
		// -0.50032, 0.19047,
	
		// -0.46504, 0.30914,
		// -0.50032, 0.19047,
		// -0.47106, 0.19744,
	
		// -0.46504, 0.30914,
		// -0.47106, 0.19744,
		// -0.45698, 0.22537,
	];

	let obj1_bottom = [
		-0.61082, 0.26845,
		-0.63082, 0.25306,
		-0.63236, 0.21922,
	
		-0.61082, 0.26845,
		-0.63236, 0.21922,
		-0.6083, 0.23436,
	
		-0.63236, 0.21922,
		-0.6083, 0.23436,
		-0.57834, 0.21276,
	
		-0.57834, 0.21276,
		-0.63236, 0.21922,
		-0.58929, 0.18537,
	
		-0.57834, 0.21276,
		-0.58929, 0.18537,
		-0.54003, 0.18699,
	
		-0.58929, 0.18537,
		-0.54003, 0.18699,
		-0.53698, 0.16076,
	
		-0.54003, 0.18699,
		-0.53698, 0.16076,
		-0.50032, 0.19047,
	
		-0.53698, 0.16076,
		-0.50032, 0.19047,
		-0.49544, 0.16383,
	
		-0.50032, 0.19047,
		-0.49544, 0.16383,
		-0.47106, 0.19744,
	
		-0.49544, 0.16383,
		-0.47106, 0.19744,
		-0.46006, 0.17614,
	
		-0.47106, 0.19744,
		-0.46006, 0.17614,
		-0.45698, 0.22537,
	
		-0.46006, 0.17614,
		-0.45698, 0.22537,
		-0.44314, 0.1946,
	];
	
	let obj2_top = [
		0.45059, 0.67915,
		0.4446, 0.58088,
		0.47024, 0.61879,
	
		0.4446, 0.58088,
		0.47024, 0.61879,
		0.47445, 0.5528,
	
		0.4446, 0.58088,
		0.47445, 0.5528,
		0.44887, 0.50813,
	
		0.47445, 0.5528,
		0.44887, 0.50813,
		0.4899, 0.52472,
	
		0.44887, 0.50813,
		0.4899, 0.52472,
		0.45572, 0.41419,
	
		0.4899, 0.52472,
		0.45572, 0.41419,
		0.4913, 0.48541,
	
		0.45572, 0.41419,
		0.4913, 0.48541,
		0.50394, 0.46295,
	
		0.45572, 0.41419,
		0.50394, 0.46295,
		0.50394, 0.42083,
	
		0.45572, 0.41419,
		0.50394, 0.42083,
		0.45474, 0.31926,
	
		0.50394, 0.42083,
		0.45474, 0.31926,
		0.56938, 0.19961,
	
		0.45474, 0.31926,
		0.56938, 0.19961,
		0.47724, 0.18726,
	
		0.45474, 0.31926,
		0.47724, 0.18726,
		0.45664, 0.19635,
	
		0.45474, 0.31926,
		0.47724, 0.18726,
		0.44545, 0.20107,
	
		0.56938, 0.19961,
		0.47724, 0.18726,
		0.51966, 0.17635,
	
		0.56938, 0.19961,
		0.51966, 0.17635,
		0.55299, 0.17635,
	
		0.56938, 0.19961,
		0.55299, 0.17635,
		0.57783, 0.18711,
	];
	
	let obj2_bottom = [
		0.44545, 0.20107,
		0.44407, 0.17778,
		0.45664, 0.19635,
	
		0.44407, 0.17778,
		0.45664, 0.19635,
		0.48949, 0.15376,
		
		0.45664, 0.19635,
		0.48949, 0.15376,
		0.47724, 0.18726,
	
		0.48949, 0.15376,
		0.47724, 0.18726,
		0.51966, 0.17635,
	
		0.48949, 0.15376,
		0.51966, 0.17635,
		0.51743, 0.15202,
	
		0.51966, 0.17635,
		0.51743, 0.15202,
		0.55299, 0.17635,
	
		0.51743, 0.15202,
		0.55299, 0.17635,
		0.55454, 0.15289,
	
		0.55299, 0.17635,
		0.55454, 0.15289,
		0.59078, 0.17297,
	
		0.55299, 0.17635,
		0.59078, 0.17297,
		0.57783, 0.18711,
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
		let r = 0.3;
		let g = 0.3;
		let b = 0.3;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	for (let i = 0; i < obj1_top.length/2; i++) {
		let r = 0.1;
		let g = 0.1;
		let b = 0.1;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	for (let i = 0; i < obj2_top.length/2; i++) {
		let r = 0.1;
		let g = 0.1;
		let b = 0.1;
		color.push(r);
		color.push(g);
		color.push(b);
		color.push(1);
	}
	for (let i = 0; i < obj2_bottom.length/2; i++) {
		let r = 0.3;
		let g = 0.3;
		let b = 0.3;
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
	 * Kecepatan adalah tiga digit terakhir NRP (001)
	*/
	let speed = 0.0009;
	function render() {
		dy >= 0.6 ? speed = -speed : speed = speed;
		dy <= -1.1 ? speed = -speed : speed = speed;
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
			
		gl.clearColor(0.8, 0.8, 0.8, 1);
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
