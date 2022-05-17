function menu2(){
    let click = document.getElementById("menu");
    if (click.style.left == "0px"){
        click.style.left = "-200px";
    } else {
        click.style.left = "0px";
    }

}
let num = 0;

function more(){
    let result = document.getElementById("result");
    let num = result.innerHTML;
    if(num < 10){
        num++;
    }
    result.innerHTML = num;
}

function less(){
    let result = document.getElementById("result");
    let num = result.innerHTML;
    if(num > 0){
        num--;
    }
    result.innerHTML = num;
}
function five(){
    let result = document.getElementById("result");
    let num = result.innerHTML;
    let soma = parseInt(num) + 5;
    if(soma <= 50){
    result.innerHTML = soma;
    }   
}

function lessfive(){
    let result = document.getElementById("result");
    let num = result.innerHTML;
    let soma = parseInt(num) - 5;
    if(soma >= 0){
        result.innerHTML = soma;
    }
}
function color1(){
    let header = document.querySelector("header");
    header.style.backgroundColor = "#fff";
}
function color1(){
    let header = document.querySelector("header");
    let inp = document.getElementById("inp");
    header.style.backgroundColor = inp.value;
}

function color2(){
    let menu = document.getElementById("menu");
    let inp2 = document.getElementById("inp2");
    menu.style.backgroundColor = inp2.value;
}