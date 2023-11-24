function abrirFormulario() {
    document.getElementById('contato-form').style.display = 'block';
    document.getElementById('backdrop').style.display = 'block';
}

function fecharFormulario() {
    document.getElementById('contato-form').style.display = 'none';
    document.getElementById('backdrop').style.display = 'none';
}

function enviarFormulario() {
    alert('Formulário enviado!'); 
    fecharFormulario();
}
