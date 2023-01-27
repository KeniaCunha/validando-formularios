export default function verificarCPF(campo){
    const cpf = campo.value.replace(/\.|-/g,"");

    if (validarNumerosRepetidos(cpf) || validarPrimeiroDigito(cpf) || validarSegundoDigito(cpf)) {
        // Com o método setCustomValidity é possível alterar o valor de customError. Com isso, a mensagem do erro específica de acordo com o valor da propriedade do erro dentro do validityState irá aparecer pois o valor de customError não será mais false.
        campo.setCustomValidity("Esse CPF não é valido")
    } 
}

function validarNumerosRepetidos(cpf){
    const numeroRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ]
    return numeroRepetidos.includes(cpf)
}

function validarPrimeiroDigito(cpf){
    let soma= 0;
    let multiplicador = 10;

    for(let contador=0; contador < 9; contador++){
        soma += cpf[contador]*multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9];
}


function validarSegundoDigito(cpf){

    let soma= 0;
    let multiplicador = 11;

    for(let contador=0; contador < 10; contador++){
        soma += cpf[contador]*multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[10]
}