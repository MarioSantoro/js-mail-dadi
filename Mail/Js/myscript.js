let vet1 = ["riccardopetricca208@gmail.com" , "stefanocappellini118@gmail.com" , "antoniosagoleo777@gmail.com"]
let result = false;
let mail = prompt("Inserisci la tua mail per accedere");
   for(let i=0; i<vet1.length;i++){
      if(mail === vet1[i]){
         result =true;
         i= vet1.length;
      }
   }
   if(result==true){
    document.getElementById("login").innerHTML = "Benvenuto :" + mail;
   }else{
    document.getElementById("login").innerHTML = "Accesso non consentito!! Motivo: non è stata trovata la tua mail!!";
   }