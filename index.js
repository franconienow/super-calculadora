var numA = document.querySelector("#NumeroA");
var numB = document.querySelector("#NumeroB");

var somaText = document.querySelector("#soma");
var sub1Text = document.querySelector("#sub1");
var sub2Text = document.querySelector("#sub2");

var multiText = document.querySelector("#multi");
var divi1Text = document.querySelector("#divi1");
var divi2Text = document.querySelector("#divi2");

var quadrado1Text = document.querySelector("#quadrado1");
var quadrado2Text = document.querySelector("#quadrado2");
var intAText = document.querySelector("#intA");

var intBText = document.querySelector("#intB");
var fatAText = document.querySelector("#fatA");
var fatBText = document.querySelector("#fatB");

numA.addEventListener("input", ()=>{
    initCalculos(Number(numA.value),Number(numB.value));
})

numB.addEventListener("input", ()=>{
    initCalculos(Number(numA.value),Number(numB.value));
})

const initCalculos = (a,b) =>{
    soma(a,b);
    sub1(a,b);
    sub2(a,b);
    multi(a,b);
    divi1(a,b);
    divi2(a,b);
    quadrado1(a);
    quadrado2(b);
    intA(a);
    intB(b);
    fatA(a);
    fatB(b);
}

const soma = (a,b) => {
    somaText.value = a + b;
};

const sub1 = (a,b) => {
    sub1Text.value = a - b;
};

const sub2 = (a,b) => {
    sub2Text.value = b - a;
};

const multi = (a,b) => {
    multiText.value = a * b;
};

const divi1 = (a,b) => {
    let resultado = (b === 0) ? "Divisão por 0" : a / b;
    divi1Text.value = resultado;
};

const divi2 = (a,b) => {
    let resultado = (a === 0) ? "Divisão por 0" : b / a;
    divi2Text.value = resultado;
};

const quadrado1 = (a) => {
    quadrado1Text.value = Math.pow(a,2);
};

const quadrado2 = (b) => {
    quadrado2Text.value = Math.pow(b,2);
};

const intA = (a) => {
    var resultado = "";
    var cont = 0;
    for(let i = 1; i <= a;i++){
        if(Number.isInteger(a/i)){
            cont++;
            if(a === i){
                resultado += i 
            }else{
                resultado += `${i}, `
            }
        }
    }
    intAText.value = `${resultado} (${cont})`;
};

const intB = (b) => {
    var resultado = "";
    var cont = 0;
    for(let i = 1; i <= b;i++){
        if(Number.isInteger(b/i)){
            cont++;
            if(b === i){
                resultado += i 
            }else{
                resultado += `${i}, `
            }
        }
    }
    intBText.value = `${resultado} (${cont})`;
};

const fatA = (a) => {
    var n = "";
    if(a <= 21){
        n = 1;
        for(let i = 1; i <= a;i++){
            n *= i
        }
    }else if(a > 21){
        n = "Valor maior que 21";
    }
    fatAText.value = n;
};

const fatB = (b) => {
    var n = " ";
    if(b <= 21){
        n = 1;
        for(let i = 1; i <= b;i++){
            n *= i
        }
    }else if(b > 21){
        n = "Valor maior que 21";
    }
    fatBText.value = n;
};
