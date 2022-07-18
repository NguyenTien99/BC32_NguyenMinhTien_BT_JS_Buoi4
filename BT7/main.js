document.getElementById("nut").onclick = function(){
    // Đầu vào
    var number = document.getElementById("number").value * 1;

    // Xử lí
    var hangtram = Math.floor(number / 100);
    var hangchuc = Math.floor(number % 100 / 10);
    var donvi = Math.floor(number % 10);
    var goitram = "";
    var goichuc = "";
    var goidonvi ="";
    switch (hangtram){
        case 1: {
            goitram = "Một";
        };break;
        case 2: {
            goitram = "Hai";
        };break;
        case 3: {
            goitram = "Ba";
        };break;
        case 4: {
            goitram = "Bốn";
        };break;
        case 5: {
            goitram = "Năm";
        };break;
        case 6: {
            goitram = "Sáu";
        };break;
        case 7: {
            goitram = "Bảy";
        };break;
        case 8: {
            goitram = "Tám";
        };break;
        case 9: {
            goitram = "Chín";
        };break;
    }
    switch (hangchuc){
        case 1: {
            goichuc = "một";
        };break;
        case 2: {
            goichuc = "hai";
        };break;
        case 3: {
            goichuc = "ba";
        };break;
        case 4: {
            goichuc = "bốn";
        };break;
        case 5: {
            goichuc = "năm";
        };break;
        case 6: {
            goichuc = "sáu";
        };break;
        case 7: {
            goichuc = "bảy";
        };break;
        case 8: {
            goichuc = "tám";
        };break;
        case 9: {
            goichuc = "chín";
        };break;
    }
    switch (donvi){
        case 1: {
            goidonvi = "một";
        };break;
        case 2: {
            goidonvi = "hai";
        };break;
        case 3: {
            goidonvi = "ba";
        };break;
        case 4: {
            goidonvi = "bốn";
        };break;
        case 5: {
            goidonvi = "năm";
        };break;
        case 6: {
            goidonvi = "sáu";
        };break;
        case 7: {
            goidonvi = "bảy";
        };break;
        case 8: {
            goidonvi = "tám";
        };break;
        case 9: {
            goidonvi = "chín";
        };break;
    }

    // Đầu ra 
    document.getElementById("showResult").innerHTML = goitram + " trăm " + goichuc + " mươi " + goidonvi;
}