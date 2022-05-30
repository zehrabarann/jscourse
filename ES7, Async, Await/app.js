async function test(data) {
    //Promise return new Promise
    // return new Promise((resolve,reject) => {
    //     resolve(data);
    // });

    //return data; JS promise alıp o şekilde döndürüyor


    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir.");
        },5000);
    });

    let response = await promise; //5 saniye bekleyecek

    console.log(response);
    console.log("Naber");

}

//console.log(test("Merhaba"));
test("Merhaba"). then(response => console.log(response));


// async function testData(data) {

//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfwn string bi değer girin."));
//             }
//         },5000)
//     });

//     const response = await promise;

//     return response

// }

// testData("thriller")
// .then(data => console.log(data))
// .catch(err => console.log(err));


//Fetch ile await kullanmak
async function getCurrency(url){

    const response = await fetch(url); //Response Object
    console.log(response);

    const data = await response.json(); // Json object

    //console.log(data);

    return data;

}

getCurrency("https://api.excahngeratesapi.io/latest")
.then(response => console.log(response));


//Async Await Http İstekleri

class Request {

    async get(url){ //Get Request

        const response = await fetch(url); //Response Objec
        const data = await response.json() //Json object
        return data;
        
    }

     async post(url,data){

        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); //Response object

        const responsedata = await response.json();

        return responsedata;
    }

    async put(url,data){

        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); //Response object

        const reponsedata = await response.json();

        return data;
    }

    async delete(url){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
                method: 'DELETE'
                });  //Response object

        //await bir promisin resolve etmesini bekler

        //const data = await response.json();

        //return data;

        return "Veri silme işlemi başarılı";
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums);
})


.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));