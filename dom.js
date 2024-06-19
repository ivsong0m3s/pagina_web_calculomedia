document.addEventListener('DOMContentLoaded', function() {
    // Estilos para o body
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.backgroundColor = '#fff';
    document.body.style.margin = '0';

    // Criação da faixa preta no topo
    var topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.height = '50px';
    topBar.style.backgroundColor = 'black';
    topBar.style.display = 'flex';
    topBar.style.alignItems = 'center';
    topBar.style.paddingRight = '20px';
    topBar.style.justifyContent = 'space-between';
    document.body.appendChild(topBar);

    // Criação do botão de reset
    var resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.type = 'button';
    resetButton.onclick = function() {
        var form = document.getElementById('form-notas');
        form.reset();
        document.getElementById('resultado').textContent = '';
    };
    resetButton.style.marginLeft = '40px';
    resetButton.style.padding = '10px 20px';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '5px';
    resetButton.style.color = 'white';
    resetButton.style.backgroundColor = '#555';
    topBar.appendChild(resetButton);

    // Criação do link para o GitHub
    var githubButton = document.createElement('a');
    githubButton.textContent = 'Meu GitHub';
    githubButton.href = 'https://github.com/seuUsuario';
    githubButton.target = '_blank';
    githubButton.style.marginRight = '40px';
    githubButton.style.padding = '10px 20px';
    githubButton.style.border = 'none';
    githubButton.style.borderRadius = '5px';
    githubButton.style.color = 'white';
    githubButton.style.backgroundColor = '#333';
    githubButton.style.textDecoration = 'none';
    topBar.appendChild(githubButton);

    // Criação do título
    var titulo = document.createElement('h1');
    titulo.textContent = 'Cálculo de Média do Aluno';
    titulo.style.textAlign = 'center';
    titulo.style.marginTop = '50px';
    document.body.appendChild(titulo);

    // Criação do formulário
    var form = document.createElement('form');
    form.id = 'form-notas';
    form.style.background = '#ccc';
    form.style.padding = '100px';
    form.style.borderRadius = '5px';
    form.style.boxShadow = '0 4px 8px #ccc';
    form.style.display = 'flex';
    form.style.justifyContent = 'center';
    form.style.alignItems = 'center';
    form.style.flexDirection = 'column';
    form.style.margin = '100px';
    document.body.appendChild(form);

    // Criação dos inputs
    var nomeInput = document.createElement('input');
    nomeInput.type = 'text';
    nomeInput.id = 'nomealuno';
    nomeInput.placeholder = 'Digite o nome do aluno';
    nomeInput.required = true;
    nomeInput.style.margin = '10px 0';
    nomeInput.style.padding = '10px';
    nomeInput.style.border = '1px solid #ddd';
    nomeInput.style.borderRadius = '4px';
    form.appendChild(nomeInput);

    var nota1Input = document.createElement('input');
    nota1Input.type = 'number';
    nota1Input.id = 'nota1';
    nota1Input.placeholder = 'Digite a 1º nota';
    nota1Input.required = true;
    nota1Input.style.margin = '10px 0';
    nota1Input.style.padding = '10px';
    nota1Input.style.border = '1px solid #ddd';
    nota1Input.style.borderRadius = '4px';
    form.appendChild(nota1Input);

    var nota2Input = document.createElement('input');
    nota2Input.type = 'number';
    nota2Input.id = 'nota2';
    nota2Input.placeholder = 'Digite a 2º nota';
    nota2Input.required = true;
    nota2Input.style.margin = '10px 0';
    nota2Input.style.padding = '10px';
    nota2Input.style.border = '1px solid #ddd';
    nota2Input.style.borderRadius = '4px';
    form.appendChild(nota2Input);

    var nota3Input = document.createElement('input');
    nota3Input.type = 'number';
    nota3Input.id = 'nota3';
    nota3Input.placeholder = 'Digite a 3º nota';
    nota3Input.required = true;
    nota3Input.style.margin = '10px 0';
    nota3Input.style.padding = '10px';
    nota3Input.style.border = '1px solid #ddd';
    nota3Input.style.borderRadius = '4px';
    form.appendChild(nota3Input);

    // Criação do botão de cálculo
    var calcularButton = document.createElement('button');
    calcularButton.type = 'button';
    calcularButton.textContent = 'Calcular Média';
    calcularButton.onclick = function() {
        var nome = document.getElementById('nomealuno').value;
        var nota1 = parseFloat(document.getElementById('nota1').value);
        var nota2 = parseFloat(document.getElementById('nota2').value);
        var nota3 = parseFloat(document.getElementById('nota3').value);
        var media = (nota1 + nota2 + nota3) / 3;
        var statusAluno;

        if (media < 5) {
            statusAluno = 'Reprovado';
        } else if (media >= 5 && media < 7) {
            statusAluno = 'Em recuperação';
        } else {
            statusAluno = 'Acima da média';
        }

        document.getElementById('resultado').textContent =
            `Aluno(a) ${nome}, sua média é: ` + media.toFixed(2) + ' - Status: ' + statusAluno;
    };
    calcularButton.style.background = '#000';
    calcularButton.style.color = '#fff';
    calcularButton.style.padding = '10px 50px';
    calcularButton.style.border = 'none';
    calcularButton.style.borderRadius = '4px';
    calcularButton.style.cursor = 'pointer';
    form.appendChild(calcularButton);

    // Criação da div de resultado
    var resultadoDiv = document.createElement('div');
    resultadoDiv.id = 'resultado';
    document.body.appendChild(resultadoDiv);

    // Criação da faixa preta no rodapé
    var downBar = document.createElement('div');
    downBar.id = 'down-bar';
    downBar.style.width = '100%';
    downBar.style.height = '50px';  
    downBar.style.backgroundColor = 'black';
    downBar.style.display = 'flex';
    downBar.style.justifyContent = 'flex-end';
    downBar.style.alignItems = 'center';
    downBar.style.paddingRight = '20px';
    downBar.style.position = 'fixed';
    downBar.style.bottom = '0';
    document.body.appendChild(downBar);

    // Criação do texto na faixa preta no rodapé
    var textodownBar = document.createElement('h3');
    textodownBar.textContent = '@by IVSON GOMES';
    textodownBar.style.color = 'green';
    textodownBar.style.fontFamily = 'Verdana';
    textodownBar.style.margin = '0';
    downBar.appendChild(textodownBar);

});