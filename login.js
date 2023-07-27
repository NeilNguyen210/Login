
document.getElementById("loginNow").disabled=true

function refreshButton(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

    if (username.length > 0 && password.length > 0) 
        document.getElementById("loginNow").disabled=false;
    else
        document.getElementById("loginNow").disabled=true;
}

function loginToSystem(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var usernameC = username.toLowerCase();
	if(usernameC == "admin" && password == "0000"){
		alert("Success!");
	} else {
		alert("Invalid!");
	}
}