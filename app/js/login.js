/*document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault();

	let user = document.getElementById("email").value;
	let pass = document.getElementById("password").value;

	fetch("/ingresar", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ user: user, pass: pass }),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.error) {
				console.error(data.error);
			} else {
				window.location.href = "/";
			}
		})
		.catch((error) => console.error("Error:", error));
});*/
document.getElementById("loginform").addEventListener("submit",(event)=>{
	event.preventDefault();

	let email = document.getElementById("email").value;
	let pass = document.getElementById("password").value;
	fetch("http://34.236.82.153/ingresar",{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email: email, pass: pass }),
	})
	.then((response)=> response.json())
	.then((data) => {
		if (!data.success) {
			console.log("login fallido");
		} 
		localStorage.setItem("jwt",data.jwt)
		window.location.href = "../dashbord.html";
	})
	.catch((error) => console.error("Error:", error));
})