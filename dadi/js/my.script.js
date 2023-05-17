let UserCounter=0;
let CpuCounter=0;
let UserResult=0;
let CpuResult=0;

for(let i=0;i<3;i++){
    UserCounter = Math.floor(Math.random()* 6) + 1;
    console.log("Il tuo numero estratto è :" + UserCounter);
    UserResult = UserCounter + UserResult;

    CpuCounter = Math.floor(Math.random()* 6) + 1;
    console.log("Il numero estratto dalla Cpu è :" + CpuCounter);
    CpuResult = UserCounter + CpuResult;
}

if(UserResult>CpuResult){
    console.log("Hai Vinto! Con un punteggio di:" + UserResult);
}else{
    console.log("Hai Perso! Con un punteggio di:" + UserResult);
}
