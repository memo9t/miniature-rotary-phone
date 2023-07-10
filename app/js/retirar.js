const jwt = localStorage.getItem("jwt");
if(!jwt){
    window.location.href="../login.html";
}
document.getElementById("retiform").addEventListener("submit", function (event) {
    event.preventDefault();

    var monto = document.getElementById("monto").value;
    var cuentaBanco = document.getElementById("card").value;

    // Realizar la petición POST a la API
    fetch("http://34.236.82.153/retirar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
			Authorization: jwt,
        },
        body: JSON.stringify({ monto: monto, cuentaBanco: cuentaBanco })
    })
        .then(response => response.json())
        .then(data => {
            // Cambiar la apariencia de la página según los datos recibidos
            if (!data.success) {
                console.log("retiro fallido");
            } else {
				console.log("retiro exitosa");
                window.location.href = "../dashbord.html";
            }
        })
        .catch(error => console.error("Error:", error));
});