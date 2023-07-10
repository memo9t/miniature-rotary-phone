document.getElementById("regisform").addEventListener("submit",(event)=>{
	event.preventDefault();
	let user = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let pass = document.getElementById("password").value;

	fetch("http://34.236.82.153/usuario",{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username: user, email: email, pass: pass }),
	})
    .then((response)=> response.json())
	.then((data) => {
		if (!data.success) {
			console.log("registro fallido");
		} 
		localStorage.setItem("jwt",data.jwt)
		window.location.href = "../login.html";
	})
	.catch((error) => console.error("Error:", error));

});