let nom=document.getElementById('nom');
let email=document.getElementById('email');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
function verifier(){
    if(!emailRegex.test(email.value)){
        alert("Mettez votre email sous le bon forme indique SVP");

    }else if(nom.value==""){
        alert("Entregistrer votre nom");

    }else{
        alert("Enregistrer avec succes");

    }
}