function checkPass(){
    vPass = Number(document.getElementById("pass").value);
    passs = "sonal";
    if (vPass = passs){
        window.location.href = "/h/pics.html";
        return false;
    }
    else{
        alert("Inavlid Password!");
        return false;
    }
}

function logout(){
 window.location.href = "/h/index.html";
}
