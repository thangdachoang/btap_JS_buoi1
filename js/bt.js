
// Bài tập 1
/**
 * Khối 1:Inpput
 * ngayLam
 * 
 * khối 2:Các bước xử lý 
 * B1: khai báo và gán giá trị cho biến
 * B2: lập công thức tính toán
 * + luong = ngayLam*luongMotNgay
 * B3: in kết quả ở console
 * 
 * khối 3: Output
 * luong 
 *
 */

var ngayLam = 4
var luongMotNgay = 100000

var luong = ngayLam*luongMotNgay;

console.log("Tổng lương là: ", luong);

//Bài tập 2
/**
 * Khối 1: Input
 * soThuc1, soThuc2, soThuc3, soThuc4, soThuc5
 * 
 * Khối 2: Các bước xử lý
 * B1: khai báo và gán giá trị cho biến
 * B2: lập công thức tính toán
 * + giaTriTrungBinh= (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5
 * B3: in kết quả ở console
 * 
 * Khối 3: Output
 * giaTriTrungBinh
 */

var soThuc1 = 4;
var soThuc2 = 6;
var soThuc3 = 2;
var soThuc4 = 3;
var soThuc5 = 5;

var giaTriTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5;

console.log("giá trị trung bình của 5 số thức là: ", giaTriTrungBinh);


//Bài tập 3
/**
 * Khối 1: Input
 * soTienUSD
 * 
 * Khối 2: Các bước xử lý
 * B1: khai báo và gán giá trị cho biến
 * B2: Lập công thức tính toán
 * + soTienVND = soTienUSD * 23500
 * B3: in ra kết quả ở console
 * 
 * Khối 3: Output
 * soTienVND
 * 
 */
var soTienUSD = 4;

var soTienVND = soTienUSD*23500;

console.log("số tiền VND là: ", soTienVND, "VND");

//Bài tập 4
/**
 * Khối 1: Input
 * chiuDai
 * chieuRong
 * 
 * Khối 2 : Các bước xử lý
 * B1: khai báo và gán giá trị cho biến
 * B2: lập công thức tính toán
 * + dienTich = chieuDai*chieuRong
 * + chuVi = (chieuDai+chieuRong)*2
 * B3: in kết quả ở console
 * 
 * Khối 3: Output
 * dienTich
 * chuVi
 * 
 */
var chieuDai = 4;
var chieuRong = 5;

var dienTich= chieuDai*chieuRong;
var chuVi= (chieuDai+chieuRong)*2;

console.log("diện tích của hình chữ nhật là: ", dienTich);
console.log("chu vi của hình chữ nhật là: ", chuVi);


//Bài tập 5
/**
 * Khối 1: Input
 * so
 * 
 * Khối 2: Các Bước xử lý
 * B1: khai báo và gán giá trị cho biến
 * B2: lập công thức tính toán
 * + ten= so/10
 * + unit=so%10
 * + tong= ten + unit
 * B3: in kết quả ở console
 * 
 * Khối 3: Output
 * tong
 * 
 */

var so=23;

var ten = so / 10;
var unit = so % 10;
var  tong = ten + unit;

console.log("Tổng của 2 ký số là: ", parseInt(tong));
