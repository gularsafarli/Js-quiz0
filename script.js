"use strict"
// sadece practice meqsedi ile elemisem 0 yaza bilersiniz))
function Click(){
    let idInput=Number(document.getElementById('inp').value);
    
    
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let  input="";
    if(inp.value ===undefined || inp.value===''){
       alert(' Please fill it');
    }
    for(let i=0; i<idInput; i++){
        input+=chars.charAt(Math.round(Math.random() * chars.length));
    }
    console.log(input);
    
}
