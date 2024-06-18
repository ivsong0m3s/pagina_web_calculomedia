document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.height = '100vh';
    body.style.backgroundColor = '#ccc';

    // Estilos para o título
    const titulo = document.createElement('h1');
    titulo.style.textAlign = 'center';
    titulo.style.marginTop = '50px';

    // Estilos para o formulário
    const form = document.createElement('form');
    form.style.background = '#fff';
    form.style.padding = '20px';
    form.style.borderRadius = '8px';
    form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.maxWidth = '300px';

    // Estilos para os inputs
    const inputs = form.createElement('input');
    inputs.forEach(input => {
        input.style.margin = '10px 0';
        input.style.padding = '10px';
        input.style.border = '1px solid #ddd';
        input.style.borderRadius = '4px';
    });

    // Estilos para o botão
    const button = form.createElement('button');
    button.style.background = '#007bff';
    button.style.color = '#fff';
    button.style.padding = '10px';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
});
