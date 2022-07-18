document.getElementById("nutNhan").onclick = function(){
    //Đầu vào
    var soThu1 = document.getElementById("sothu1").value * 1;
    var soThu2 = document.getElementById("sothu2").value * 1;
    var soThu3 = document.getElementById("sothu3").value * 1;

    //Xử lí
    var result = '';
    if (soThu1 > soThu2 && soThu2 > soThu3) {
        result = soThu3 + " < " + soThu2 + " < " + soThu1;
    }
    else if (soThu1 > soThu3 && soThu3 > soThu2){
        result = soThu2 + " < " + soThu3 + " < " + soThu1;
    }
    else if (soThu2 > soThu1 && soThu1 > soThu3){
        result = soThu3 + " < " + soThu1 + " < " + soThu2;
    }
    else if (soThu2 > soThu3 && soThu3 > soThu1){
        result = soThu1 + " < " + soThu3 + " < " + soThu2;
    }
    else if (soThu3 > soThu2 && soThu2 > soThu1){
        result = soThu1 + " < " + soThu2 + " < " + soThu3;
    }
    else{
        result = soThu2 + " < " + soThu1 + " < " + soThu3;
    }
    
    // Đầu ra
    document.getElementById('showResult').innerHTML = "Kết quả là : " + result;
}