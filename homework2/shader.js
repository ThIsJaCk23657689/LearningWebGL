let shaderProgram;

function getShaderSource(shaderType){
    return $('#' + shaderType).html();
}

function createShader(gl, shaderType) {

    let shader, source;
    if(shaderType == 'vertex'){
        shader = gl.createShader(gl.VERTEX_SHADER);
    }else if(shaderType == 'fragment'){
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    }else{
        console.error('ShaderType is not defined, error in createShader function.');   
    }

    source = getShaderSource(shaderType);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Failed to compile ' + shaderType + ' shader, reason: ' + gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function initShaders() {  //著色器
    
    let vertexShader = createShader(gl, 'vertex');
    let fragmentShader = createShader(gl, 'fragment');

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Failed to linked shader program.');
    }
    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");

    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
    
    shaderProgram.model = gl.getUniformLocation(shaderProgram, "model");
    shaderProgram.view = gl.getUniformLocation(shaderProgram, "view");
    shaderProgram.projection = gl.getUniformLocation(shaderProgram, "projection");
}