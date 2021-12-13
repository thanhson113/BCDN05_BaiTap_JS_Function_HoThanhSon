/** Bài 2: Tính tiền điện 
 * Khối 1: Input
 * name, soKW
 * Khối 2: 
 * B1: Tạo biến
 * B2: Lấy giá trị từ form
 * B3: Xác định điều kiện và lập công thức tính toán
 *   0 < soKW <= 50 => totalMoney = soKW * giaDau
 *   50 < soKW <= 100 => totalMoney = 50 * giaDau + soKW * gia50_ke
 *   100 < soKW <= 150 => totalMoney = 50 * giaDau + 50 * gia50_ke + soKW *  gia100_Ke
 *   100 < soKW <= 150 => totalMoney = 50 * giaDau + 50 * gia50_ke + 100 *  gia100_Ke + soKW *   gia150_Ke
 *   soKW > 150 => totalMoney = 50 * giaDau + 50 * gia50_ke + 100 *  gia100_Ke + 150 * gia150_Ke +  soKW * giaConLai
 *      
 * B3: Hiện kết quả
 * Khối 3: Output
 *  totalMoney
 */
const giaDau = 500;
const gia50_Ke = 650;
const gia100_Ke = 850;
const gia150_Ke = 1100;
const giaConLai = 1300;
function tinhTienDien(){
    var name = document.getElementById('inpName').value;
    var soKW = Number(document.getElementById('inpKW').value);
    var totalMoney = 0;

    if(soKW == 0){
        document.getElementById('txtTinhTien').innerHTML = "Vui lòng nhập số kw điện !"
    }else{
         if(soKW <= 50){
            totalMoney = soKW * giaDau;
        }else if( soKW <= 100){
            totalMoney  = giaDau * 50 + (soKW - 50) * gia50_Ke
        }else if( soKW <= 200){
            totalMoney  = giaDau * 50 + gia50_Ke * 50 + (soKW - 100) * gia100_Ke;
        }else if( soKW <= 350){
            totalMoney  = giaDau * 50 + gia50_Ke * 50 + gia100_Ke * 100 + (soKW - 200) * gia150_Ke;
            
        }else if(soKW > 350){
            totalMoney  = giaDau * 50 + gia50_Ke * 50 + gia100_Ke * 100 + gia150_Ke * 150 + (soKW - 350) * giaConLai ;  
        }
        document.getElementById('txtTinhTien').innerHTML = 
        "Họ tên: "+name+" <br>Tiền điện: "+new Intl.NumberFormat('vn-VN',).format(totalMoney)+ ' VND';
        
    } 
       
    
}

document.getElementById('btnTinhTien').onclick = tinhTienDien;