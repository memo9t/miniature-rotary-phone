const jwt = localStorage.getItem("jwt");
if(!jwt){
    window.location.href="../login.html";
}
document.getElementById("transform").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var monto = document.getElementById("monto").value;
    var glosa = document.getElementById("glosa").value;

    // Realizar la petición POST a la API
    fetch("http://34.236.82.153/retirar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
			Authorization: jwt,
        },
        body: JSON.stringify({ email: email, monto: monto, glosa: glosa })
    })
        .then(response => response.json())
        .then(data => {
            // Cambiar la apariencia de la página según los datos recibidos
            if (!data.success) {
                console.log("transferencia fallido");
            } else {
				console.log("transferencia exitosa");
                window.location.href = "../dashbord.html";
            }
        })
        .catch(error => console.error("Error:", error));
});