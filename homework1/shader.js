    function getvertexShader(gl) {
        var str = `attribute vec3 aVertexPosition;
    uniform mat4 uMVMatrix; //模型視圖矩陣
    uniform mat4 uPMatrix;  //投影矩陣
    void main(void) {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    }
        `;
        //建立
        var shader;
        shader = gl.createShader(gl.VERTEX_SHADER);
        //編譯
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }
    function getfragmentShader(gl) {
        var str = `precision mediump float;
    	void main(void) {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);  //白色 (Red, Green, Blue, Alpha)
    }
        `;
        //建立
        var shader;
        shader = gl.createShader(gl.FRAGMENT_SHADER);
        //編譯
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    }
    var shaderProgram;
    function initShaders() {  //著色器
        var fragmentShader = getfragmentShader(gl);
        var vertexShader = getvertexShader(gl);

        /*添加片段著色器(fragment shader)和頂點著色器(vertex shader)到
        webgl program(二進制碼，可存一個片段與一個頂點著色器)*/
        shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            alert("Could not initialise shaders");
        }
        gl.useProgram(shaderProgram);
        shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);//提供數值給矩陣的屬性
        shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
        shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    }