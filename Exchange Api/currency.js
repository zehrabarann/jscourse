//Using ES6 and Promise

class Currency {
    constructor(firstCurrency,secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url ="https://api.exchangeratesapi.io/lates?base=";
        this.amount = null; //her event oluştuğunda değişeceği için

    }

    exchange(){ //Promise dönüyor

        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency) //Veriyi response objesi şeklinde verecek
            .then(response => response.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency]; //Json içinde anahtar kelime alınıyor.
                const amount2 = Number(this.amount);

                let total = parity * amount2;
                //console.log(total);

                resolve(total);
            })
            .catch(err => reject(err))

            });
        


    }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}