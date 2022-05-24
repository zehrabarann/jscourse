document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json",true);

    xhr.onload = function(){
        let list = document.getElementById("employees");
        if(this.status == 200) {
            const employees = JSON.parse(this.responseText);
            //console.log(JSON.parse(this.responseText));  //Normalde string dönüyor. Bunu parse edip json olarak almmamız lazım

            employees.forEach(function(employee) { //Önceki bilgilerin üzerinde eklenip sürekl gğncellenmesi için += kullanılır
                list.innerHTML += `

                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                
                `

            });

        }
    }
    xhr.send();

}