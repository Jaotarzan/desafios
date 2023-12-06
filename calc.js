function digitar(a) {
    let resultado = document.getElementById("resultado").value;
    document.getElementById("resultado").value = resultado + a;
}

function limpar() {
    resultado = ""
    document.getElementById("resultado").value = resultado;
}

function resul() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.replace("^", "**").replace("%", "/100")
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
}

let sin = document.querySelector("#seno");
sin.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").value; 
    resultado = `Math.sin(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
})

let cos = document.querySelector("#cos");
cos.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").value; 
    resultado = `Math.cos(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
})

let tan = document.querySelector("#tan");
tan.addEventListener("click", function() {
    let resultado = document.getElementById("resultado").value; 
    resultado = `Math.tan(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
})
