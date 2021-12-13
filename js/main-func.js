/** Bài 1: Quản lý tuyển sinh
 * Khối 1: Input
 * score, area, object, test1, test2, test3
 * Khối 2: 
 * B1: Tạo biến
 * B2: Lấy giá trị từ form
 * B3: Xác định điều kiện và lập công thức tính toán
 *      1. Kiểm tra điểm nhập vào
 *      2. Kiểm tra khu vực
 *      3. Kiểm tra đối tượng
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
    var test1 = Number(document.getElementById('inpTest1').value);
    var test2 = Number(document.getElementById('inpTest2').value);
    var test3 = Number(document.getElementById('inpTest3').value);
    var score = Number(document.getElementById('inpScore').value);

    if (test1 == 0 || test2 == 0 || test3 == 0) {
        document.getElementById('txtThongBao').innerHTML =
            "Bạn đã rớt do có điểm 0 !"
    } else {
        kiemTraKhuVuc(test1, test2, test3, score)
    }

}
function kiemTraKhuVuc(paTest1, paTest2, paTest3, paScore) {
    var area = document.getElementById('area').value;
    var totalScore = 0;

    if (area == "A") {
        totalScore = paTest1 + paTest2 + paTest3 + area_A;
        kiemTraDoiTuong(totalScore)
    } else if (area == "B") {
        totalScore = paTest1 + paTest2 + paTest3 + area_B;
        kiemTraDoiTuong(totalScore)
    } else if (area == "C") {
        totalScore = paTest1 + paTest2 + paTest3 + area_C;
        kiemTraDoiTuong(totalScore)
    } else {
        totalScore = paTest1 + paTest2 + paTest3;
        kiemTraDoiTuong(totalScore)
    }

    var kq = kiemTraDoiTuong(totalScore)
    ketQua(kq, paScore);


}

function kiemTraDoiTuong(paTotalScore) {
    var object = document.getElementById('object').value;

    if (object == "1") {
        return paTotalScore + object1;
    } else if (object == "2") {
        return paTotalScore + object2;
    } else if (object == "3") {
        return paTotalScore + object3;
    } else {
        return paTotalScore;
    }

}

function ketQua(ketQua, paScore) {

    if (ketQua >= paScore) {
        document.getElementById('txtThongBao').innerHTML =
            "Bạn đã đậu ! Tổng điểm của bạn là: " + ketQua
    } else {
        document.getElementById('txtThongBao').innerHTML =
            "Bạn đã rớt ! Tổng điểm của bạn là: " + ketQua
    }
}

document.getElementById('btnKetQua').onclick = calScore;