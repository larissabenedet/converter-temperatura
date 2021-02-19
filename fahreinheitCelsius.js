function converte() {
    let tempF = document.getElementById("tempF").value;

    if (tempF == "") {
        alert("Insira a temperatura em Fahreinheit")
        exit
    } 

    let temperatura = (tempF - 32) * 5 / 9; 
    temperatura = temperatura.toFixed(2); 

    document.getElementById("tempC").value = temperatura;
    

}