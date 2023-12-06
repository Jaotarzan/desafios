document.addEventListener('keydown', (a) => {
    (a.key == "Enter" || a.key == "=") ? resul() : (a.key == "Backspace") ? limpar() : null;
    const numerosVerificados = /^[0-9-/^.*+%]+$/;
    if (numerosVerificados.test(a.key)) {
        digitar(a.key);
    }
})

