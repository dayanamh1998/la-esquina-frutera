

function enviarRegistro(){
    console.log("Enviando");
    
    const formData = new FormData(document.getElementById("registro"));
    const jsonData = {};

    formData.forEach((value, key => { jsonData[key]=value; }));

    console.log(jsonData);
}


