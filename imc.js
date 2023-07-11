const calcular = document.getElementById ('calcular');


function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const result = document.getElementById ('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorImc = (peso / (altura*altura)).toFixed(1);

        let classificacao = '';
        
        if(valorImc < 18.5){
            classificacao = 'abaixo do peso';
        }
        else if(valorImc < 25){
            classificacao = 'com o peso idela. Parabéns!';
        }
        else if(valorImc < 30){
            classificacao = 'lemente acima do peso.';
        }
        else if(valorImc < 35){
            classificacao = 'com obesidade grau I.';
        }
        else if(valorImc < 40){
            classificacao = 'com obesidade grau II.';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!';
        }

        result.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;
    }else{
        result.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', imc);