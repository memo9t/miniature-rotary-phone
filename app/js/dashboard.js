const jwt = localStorage.getItem("jwt");
if(!jwt){
    window.location.href="../login.html";
}

fetch("http://localhost:3000/list_all"),{
    method:"GET",
    headers: {
        "Content-type": "application/json",
        Authorization: jwt,
    }
}
.then((response) => response.json())
.then((data)=>{
    const tablebody = document.getElementById("table-body");
    const columname= [ "id","amount","email","coment"];


    data.users.forEach((user) => {
        const row = document.createElement("tr");
        columname.forEach((key)=>{
            const td = document.createElement("td");
            td.textContent =user[key];
            row.appendChild(td);
        })
        tablebody.appendChild(row);
     });
})
.catch((error)=>{
    console.error("Error",error);
})

