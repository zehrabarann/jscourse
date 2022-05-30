function Translate(word,language){
    this.apikey = "apikey"
    this.word = word;
    this.language = language;


    //XHR object

    this.xhr = new XMLHttpRequest();
    
}

Translate.prototype.translateWord = function(callback){
    //Ajax İşlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint);


    this.xhr.onload = () => {
        if(this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);
            //console.log(JSON.parse(this.xhr.responseText).text[0]);

            const text = json.text[0];
            console.log(text)

            callback(null,text);

        } else {
            callback("Bit hata oluştu",null); 
        }

    }

    this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
    
}
