const jwt = localStorage.getItem("jwt");
if(!jwt){
    window.location.href="../login.html";
}
document.getElementById("recarform").addEventListener("submit",(event)=>{
	event.preventDefault();
	var monto = document.getElementById("monto").value;
    var tarjeta = document.getElementById("card").value;

	fetch("http://34.236.82.153/usuario",{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: jwt,
		},
		body: JSON.stringify({ monto: monto, tarjeta: tarjeta }),
	})
    .then((response)=> response.json())
	.then((data) => {
		if (!data.success) {
			console.log("recarga fallida");
		} 
		console.log("recarga exitosa");
		localStorage.setItem("jwt",data.jwt)
		window.location.href = "../dashbord.html";
	})
	.catch((error) => console.error("Error:", error));

});