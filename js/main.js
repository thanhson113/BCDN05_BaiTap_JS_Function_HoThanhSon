/** Bài 1:
 * Khối 1: Input
 * score, area, object, test1, test2, test3
 * Khối 2: 
 * B1: Lấy giá trị từ form
 * B2: Xác định điều kiện và lập công thức tính toán
 *      Tính điểm của thí sinh
 *      area == 0 && object == 0 => điểm khu vực và điểm đối tượng = 0
 *      test1 == 0 || test2 == 0 || test3 == 0 => Rớt
 * B3: Hiện kết quả
 * Khối 3: Output
 *  totalScore, kết quả
 */
const area_A = 2;
const area_B = 1;
const area_C = 0.5;

const object1 = 2.5;
const object2 = 1.5;
const object3 = 1;

function calScore() {
    var area = document.getElementById('area').value;
    var object = document.getElementById('object').value;
    var test1 = Number(document.getElementById('inpTest1').value);
    var test2 = Number(document.getElementById('inpTest2').value);
    var test3 = Number(document.getElementById('inpTest3').value);
    var totalScore = 0;

    if (test1 == 0 || test2 == 0 || test3 == 0) {
        totalScore = test1 + test2 + test3;
        document.getElementById('txtThongBao').innerHTML = 
        "Bạn đã rớt do có điểm 0 !"
    }else{
        if (area == "A") {
            totalScore = test1 + test2 + test3 + area_A;
            if (object == "1") {
                totalScore = test1 + test2 + test3 + area_A + object1;
            } else if (object == "2") {
                totalScore = test1 + test2 + test3 + area_A + object2;
            } else {
                totalScore = test1 + test2 + test3 + area_A + object3;
    
            }
        } else if (area == "B") {
            totalScore = test1 + test2 + test3 + area_B;
            if (object == "1") {
                totalScore = test1 + test2 + test3 + area_B + object1;
            } else if (object == "2") {
                totalScore = test1 + test2 + test3 + area_B + object2;
            } else {
                totalScore = test1 + test2 + test3 + area_B + object3;
    
            }
        } else if (area == "C") {
            totalScore = test1 + test2 + test3 + area_C;
            if (object == "1") {
                totalScore = test1 + test2 + test3 + area_C + object1;
            } else if (object == "2") {
                totalScore = test1 + test2 + test3 + area_C + object2;
            } else {
                totalScore = test1 + test2 + test3 + area_C + object3;
    
            }
        }else{
            totalScore = test1 + test2 + test3;
        }
        ketQua(totalScore)
    }
    
}

function ketQua(ketQua){
    var score = Number(document.getElementById('inpScore').value);

    if(ketQua >= score){
        document.getElementById('txtThongBao').innerHTML = 
        "Bạn đã đậu ! Tổng điểm của bạn là: "+ ketQua
    }else{
        document.getElementById('txtThongBao').innerHTML = 
        "Bạn đã rớt ! Tổng điểm của bạn là: "+ ketQua
    }
}

document.getElementById('btnKetQua').onclick = calScore;