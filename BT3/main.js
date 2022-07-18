document.getElementById("nutNhan").onclick = function(){
    // Input
    var soThu1 = document.getElementById("sothu1").value * 1;
    var soThu2 = document.getElementById("sothu2").value * 1;
    var soThu3 = document.getElementById("sothu3").value * 1;
    // Xử lí
    var soChan = 0;
    var soLe = 0;
    if (soThu1 % 2 == 0){
        soChan++; 
    }
    else{
        soLe++;
    }
    if (soThu2 % 2 == 0){
        soChan++;
    }
    else{
        soLe++;
    }
    if (soThu3 % 2 ==0){
        soChan++;
    }
    else{
        soLe++;
    }
    var result = "<div>";
    result += "<p> Có : " + soChan +" số chẵn </p>";
    result += "<p> Có : " + soLe +" số lẻ </p>";
    result += "</div>";
    //Đầu ra
    document.getElementById("showResult").innerHTML = result;
}