function checkPass(){
    vPass = Number(document.getElementById("pass").value);
    
    if (vPass == 6395037520){
        window.location.href = "/h/pics.html";
        return false;
    }
    else{
        alert("Inavlid Password!");
        return false;
    }
}

function checkPass(){
 window.location.href = "/h/index.html";
}
