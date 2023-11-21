let numero = '';
let forma;
let resultado;




function FORMA(){

    numero = document.querySelector('#slcNumero').value;



    if (forma > = 3) {

        EQUILATERO('TODOS OS LADOS IGUAIS');
        
    }


    if (forma == '-') {
        ISOSCELES('VOCÊ ESCOLHEU A OPERAÇÃO ISOSCELES!');
        
    }



    if (forma == '*') {
        ESCALENO('VOCÊ ESCOLHEU A OPERAÇÃO ESCALENO!');
        
    }

}



//DECLARAÇÃO DA FUNÇÃO DE SOMAR
function EQUILATERO(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (SOMAR)
    resultado = numero1 + numero2;
    //SAÍDA (VALOR DA SOMA)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}

function ISOSCELES(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (SUBTRAIR)
    resultado = numero1 - numero2;
    //SAÍDA (VALOR DA SUBTRAÇÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}

function ESCALENO(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (multiplicar)
    resultado = numero1 * numero2;
    //SAÍDA (VALOR DA MULTIPLICAÇÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}


let select = document.querySelector('#slcOperador');



select.addEventListener('change',function(){


    let imgOperacao = document.querySelector('#imgOperacao');
    let op = select.options[select.selectedIndex].value;

    if(forma > = 3){
    imgOperacao.setAttribute('src', 'equilatero.png');
    }

    if(op == '-'){
        imgOperacao.setAttribute('src', 'escaleno.png');
        }

        if(op == '*'){
            imgOperacao.setAttribute('src', 'isosceles.png');
            }
});

//FUNÇÃO DE LIMPAR FURMULÁRIO
function limpar(){

    document.querySelector('#numero1').value = '';
    document.querySelector('#numero2').value = '';
    document.querySelector('#resultado').innerHTML = '-';

}