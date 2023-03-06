document.getElementById('btnTongLuong').onclick = function(){
    //input nguoi dung nhap so ngay lam viec = number
    var ngayLam = +document.getElementById('ngayLam').value;

    //output tong tien luong = number
    var tongLuong = 0;

    //process:
    var luongNgay = 100000;
    tongLuong = ngayLam * luongNgay;
    document.getElementById('ket-qua-bai-1').innerHTML = tongLuong;
}


document.getElementById('btnTrungBinhCong').onclick = function(){
    //input nguoi dung nhap 5 số thực = number
    var so1 = +document.getElementById('so-1').value;
    var so2 = +document.getElementById('so-2').value;
    var so3 = +document.getElementById('so-3').value;
    var so4 = +document.getElementById('so-4').value;
    var so5 = +document.getElementById('so-5').value;
   
    //output trungbinhKQ = number
    var trungBinh5 = 0;

    //process
    trungBinh5 = (so1 + so2 + so3 + so4 + so5)/ 5;

    document.getElementById('ket-qua-bai-2').innerHTML = trungBinh5.toFixed(2);
}



document.getElementById('btnVND').onclick = function(){
    //input nguoi dung nhap tien USD = number
    var tienUSD = +document.getElementById('tienUSD').value;

   
    //output tien = number
    var tienVND = 0;

    //process
    var tiGia = 23500;
    tienVND = tienUSD * tiGia;

    document.getElementById('ket-qua-bai-3').innerHTML = `${new Intl.NumberFormat("vi-VN").format(tienVND)} VND`;
}


document.getElementById('btnCVDT').onclick = function(){
    //input nguoi dung nhap tien chieu dai chieu rong
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
   
    //output - chu vi  va dien tich
    var chuVi = 0;
    var dienTich = 0;

    //process
    chuVi = (chieuDai + chieuRong) * 2 ;
    dienTich = chieuDai * chieuRong;

    document.getElementById('ket-qua-bai-4').innerHTML = `Chu Vi = ${chuVi} <br>
                                                          Diện Tích = ${dienTich} <br>`;
}


document.getElementById('btnTong2So').onclick = function(){
    //input nguoi dung nhap so co 2 chu so
    var so2Chu = +document.getElementById('so2Chu').value;

   
    //output
    var tong2So=0;

    //process
    var soChuc = so2Chu %10;
    var soDV = (so2Chu /10) - soChuc / 10;
    tong2So = soChuc + soDV;

    document.getElementById('ket-qua-bai-5').innerHTML = `${soChuc} + ${soDV} = ${tong2So}`;
}