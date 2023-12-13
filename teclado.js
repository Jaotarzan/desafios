document.addEventListener('keydown', (a) => {
    if (a.key == "Enter" || a.key == "=")  {
        resul()
    } 
    if (a.key == "Backspace")  {
        deletar();
    } 
    if (a.key == "Escape") {
        limpar();
        document.getElementById("igual").focus();
    }
    const numerosVerificados = /^[0-9-/^.*+%()]+$/;
    if (numerosVerificados.test(a.key)) {
        digitar(a.key);
    }
})