function checkPass(){
    vPass = Number(document.getElementById("pass").value);
    
    if (vPass == "sonal"){
        window.location.href = "/h/pics.html";
        return false;
    }
    else{
        alert("Inavlid Password!");
        return false;
    }
}
