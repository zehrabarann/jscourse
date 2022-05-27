function getTextfile() { //Text Dosyası
    fetch("example.txt")
    .then(response => response.text())
        //console.log(response);
        //return response.text();)
    .then(data => console.log(data)) //text gösterilir
    .catch(err => console.log(err));
}

function getJsonFile(){ //Local bir json dosyasından veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI(){ //Uzaktaki rest apiden alıyor
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data.rates.TRY);
    })
    .catch(err => console.log(err));
}

getExternalAPI();
//getJsonFile();
//getTextfile();

