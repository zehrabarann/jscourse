//Dışardaki rest apidan veri almak

document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangeratesapi.io/latest",true);


    xhr.onload = function() {
        if(this.status) {
            const response = JSON.parse(this.responseText);
            //console.log(this.responseText); //Bize string değer dönderir

            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);    //String değer dönecek number'a çevrilmeli          console.log(response.rates.TRY); //Retes json objesi. İçerisinde para birimlerinin karşılık geldiği değer var. Direkt bu şekilde alabiliriz.
            document.getElementById("tl").value = amount *  rate; 
            //console.log(amount * rate);


        }
    }
     
 
    xhr.send();


}