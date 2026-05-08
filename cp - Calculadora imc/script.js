const escreve = document.getElementById("btnA");

escreve.addEventListener("click", () =>{
    let peso = document.getElementById("txtPeso").value;
    let altura = document.getElementById("txtAltura").value;
    let imc = peso/(altura*altura);

    const titulo = document.getElementById("imc");

    //let result = titulo.textContent ="IMC: "+imc;(codigo que eu estava fazendo antes)
    titulo.textContent ="IMC: "+ imc.toFixed(2);

    let classificacao = "";
    const elemento = document.getElementById("classificacao_pessoas");
    if (imc < 18.5){
        classificacao = "Menor que 18.5, abaixo do peso!";

        elemento.style.backgroundColor  = "forestgreen"; 
    }else if (imc >= 18.5 && imc <= 24.9){
        classificacao = "De 18.5 a 24.9, peso normal!";
        
        elemento.style.backgroundColor  = "goldenrod"; 
    }else if (imc >= 25.0 && imc <= 29.9){
        classificacao = "De 25 a 29.9, sobrepeso!";
        
        elemento.style.backgroundColor  = "darkorange";
    }else {
        classificacao = "Maior de 30, obesidade!";

        elemento.style.backgroundColor  = "red";
    }
    document.getElementById("classificacao_pessoas").innerHTML = classificacao;
});