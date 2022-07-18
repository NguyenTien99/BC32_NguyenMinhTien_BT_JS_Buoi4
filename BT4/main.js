document.getElementById("nutNhan").onclick = function(){
    // Đầu vào
    var canhThu1 = document.getElementById("canhthu1").value * 1;
    var canhThu2 = document.getElementById("canhthu2").value * 1;
    var canhThu3 = document.getElementById("canhthu3").value * 1;
    
    // Xử lí
    var canhHuyen1 = Math.sqrt(canhThu1 * canhThu1 + canhThu2 * canhThu2);
    console.log(canhHuyen1);
    var canhHuyen2 = Math.sqrt(canhThu2 * canhThu2 + canhThu3 * canhThu3);
    var canhHuyen3 = Math.sqrt(canhThu1 * canhThu1 + canhThu3 * canhThu3);
    var result = '';
    if (canhThu1 === canhThu2 && canhThu2 === canhThu3 && canhThu1 === canhThu3){
        result = 'Tam giác đều';
    }else if(canhThu1 === canhThu2 || canhThu2 === canhThu3 || canhThu1 === canhThu3){
        result = 'Tam giác cân';
    }else if ( canhThu1 === canhHuyen1 || canhThu1 === canhHuyen2 || canhThu1 === canhHuyen3){
        result = 'Tam giác vuông'
    }else if ( canhThu2 === canhHuyen1 || canhThu2 === canhHuyen2 || canhThu2 === canhHuyen3){
        result = 'Tam giác vuông'
    }else if ( canhThu3 === canhHuyen1 || canhThu3 === canhHuyen2 || canhThu3 === canhHuyen3){
        result = 'Tam giác vuông'
    }else{
        result = 'Tam giác khác'
    }
    
    // Đầu ra
    document.getElementById("showResult").innerHTML = result;
}
