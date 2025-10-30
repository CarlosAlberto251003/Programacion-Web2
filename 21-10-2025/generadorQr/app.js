function generarQR(){

    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();


    let textoConpleto = input1 + " " + input2 + " " + input3 + " " + input4;

    if(textoConpleto === " "){
        alert("Ingresa al menos un texto para generar el QR");
    }

    let qrCodeURL ='https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+ encodeURIComponent(textoConpleto);

    let qrIMG = document.createElement('img');
    qrIMG.src = qrCodeURL; 
    qrIMG.alt = 'Un codigo QR';
    
    qrIMG.classList.add('qr-code');
    document.getElementById('qr-code').appendChild(qrIMG);

}


//gato y darle estilo a qr
//instalar node js