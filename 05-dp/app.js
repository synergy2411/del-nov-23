window.onload = function () {

    var btnFetch = document.getElementById("btn-fetch");
    var listContainer = document.getElementById("list-container")

    btnFetch.addEventListener("click", function () {
        fetch("https://reqres.in/api/users")
            .then(response => response.json())
            .then(resp => {
                resp.data.forEach(user => {
                    var liElement = document.createElement("li");

                    liElement.innerHTML = `
                        <h1>${user.first_name} ${user.last_name}</h1>
                        <img src=${user.avatar} alt="User image"/>
                    
                    `

                    listContainer.appendChild(liElement);
                })
            })
    })
}


// Model View ViewModel