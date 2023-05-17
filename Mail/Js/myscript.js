let vet1 = ["riccardopetricca208@gmail.com" , "stefanocappellini118@gmail.com" , "antoniosagoleo777@gmail.com"]

let btn = document.getElementById("sumbit");
btn.addEventListener("click" , 
    function(){
        let result = false;
        let mail = document.getElementById("floatingInput").value;
        for(let i=0; i<vet1.length;i++){
            if(mail === vet1[i]){
                result =true;
                i= vet1.length;
            }
        }
        if(result==true){
            document.getElementById("output").innerHTML = "Benvenuto : " + mail;
        }else{
            document.getElementById("output").innerHTML = "Accesso non consentito!! Motivo: non è stata trovata la tua mail!!";
        }
    }
)
