function digitar(a) {
    let resultado = document.getElementById("resultado").value;
    document.getElementById("resultado").value = resultado + a;
}

function deletar() {
    let resultado = document.getElementById("resultado").value;
    resultado = resultado.slice(0, -1);
    document.getElementById("resultado").value = resultado;
}


function limpar() {
    resultado = ""
    document.getElementById("resultado").value = resultado;
}

function resul() {
    let resultado = document.getElementById("resultado").value;
    if (resultado.includes("√")) {
        resultado = `Math.sqrt(${resultado.replace("√", "")})`;
        console.log(resultado)
    }
    else {
        resultado = resultado.replace("^", "**").replace("%", "/100")
    }
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
}

let sin = document.querySelector("#seno");
sin.addEventListener("click", function () {
    let resultado = document.getElementById("resultado").value;
    resultado = `Math.sin(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
})

let cos = document.querySelector("#cos");
cos.addEventListener("click", function () {
    let resultado = document.getElementById("resultado").value;
    resultado = `Math.cos(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
})

let tan = document.querySelector("#tan");
tan.addEventListener("click", function () {
    let resultado = document.getElementById("resultado").value;
    resultado = `Math.tan(${resultado})`
    resultado = eval(resultado);
    document.getElementById("resultado").value = resultado;
})
