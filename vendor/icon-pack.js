var check = true;

//data

var sv = new Array();
//1
sv[1] = {code: "SE141009", name: "Phạm Quốc Anh Khôi", team: "1", result: "PASSED"};
sv[2] = {code: "SE140983", name: "Trần Nhẫn", team: "1", result: "NOT PASSED"};
sv[3] = {code: "SE140866", name: "Nguyễn Hữu Phước", team: "1", result: "NOT PASSED"};
sv[4] = {code: "SE140060", name: "Thái Đức Lợi", team: "1", result: "NOT PASSED"};

//2
sv[5] = {code: "SE140848", name: "Huỳnh Thế Hiển", team: "2", result: "PASSED"};
sv[6] = {code: "SE140372", name: "Nguyễn Diên Hoàng Sơn", team: "2", result: "PASSED"};
sv[7] = {code: "SE141031", name: "Tiêu Trung Lập", team: "2", result: "PASSED"};

//3
sv[8] = {code: "SE140910", name: "Phạm Thanh Phương", team: "3", result: "PASSED"};
sv[9] = {code: "SE140539", name: "Hà Thanh Vi", team: "3", result: "NOT PASSED"};
sv[10] = {code: "SE140868", name: "Quách Khổng Triết", team: "3", result: "PASSED"};
sv[11] = {code: "SE140867", name: "Phùng Đăng Tâm", team: "3", result: "PASSED"};

//4
sv[12] = {code: "SE140556", name: "Đào Tấn Tỷ", team: "4", result: "PASSED"};
sv[13] = {code: "SE140181", name: "Phạm Quang Đạt", team: "4", result: "PASSED"};
sv[14] = {code: "SE140256", name: "Lưu Quang Nhật", team: "4", result: "PASSED"};
sv[15] = {code: "SE140745", name: "Phan Duy Long", team: "4", result: "PASSED"};

//5
sv[16] = {code: "SE140205", name: "Nguyễn Phi Hùng", team: "5", result: "PASSED"};
sv[17] = {code: "SE140647", name: "Trần Phạm Gia Bảo", team: "5", result: "PASSED"};

//6
sv[18] = {code: "SE140736", name: "Phong Thanh Nhi", team: "6", result: "PASSED"};
sv[19] = {code: "SE140056", name: "Nguyễn Thế Thanh Tâm", team: "6", result: "NOT PASSED"};
sv[20] = {code: "SE140830", name: "Lưu Diệu Hoa", team: "6", result: "PASSED"};

//7
sv[21] = {code: "SE140126", name: "Vũ Xuân Thiên", team: "7", result: "PASSED"};
sv[22] = {code: "SE140784", name: "Lê Trọng Nhân", team: "7", result: "PASSED"};
sv[23] = {code: "SE140834", name: "Đào Phương Nam", team: "7", result: "PASSED"};

//8
sv[24] = {code: "SE140919", name: "Lê Tiến Đạt", team: "8", result: "PASSED"};
sv[25] = {code: "SE140092", name: "Trần Phan Trường Thịnh", team: "8", result: "PASSED"};
sv[26] = {code: "SE140831", name: "Nguyễn Kế Nam", team: "8", result: "PASSED"};

//9
sv[27] = {code: "SE140286", name: "Võ Vĩnh Khang", team: "9", result: "PASSED"};
sv[28] = {code: "SE140260", name: "Nguyễn Trung Anh", team: "9", result: "PASSED"};
sv[29] = {code: "SE141088", name: "Nguyễn Trọng Nhân", team: "9", result: "PASSED"};
sv[30] = {code: "SE140297", name: "Nguyễn Quang Vinh", team: "9", result: "PASSED"};

//10
sv[31] = {code: "SE140954", name: "Vũ Thu Giang", team: "10", result: "PASSED"};
sv[32] = {code: "SE140827", name: "Nguyễn Thị Thanh Ngân", team: "10", result: "PASSED"};
sv[33] = {code: "SE140283", name: "Bùi Thị Thùy Linh", team: "10", result: "NOT PASSED"};
sv[34] = {code: "SE140956", name: "Trần Nguyễn Trúc Ly", team: "10", result: "PASSED"};

//11
sv[35] = {code: "SE140775", name: "Triệu Phước Minh Long", team: "11", result: "PASSED"};
sv[36] = {code: "SE140832", name: "Nguyễn Mậu Hiếu", team: "11", result: "PASSED"};
sv[37] = {code: "SE140294", name: "Trịnh Phan Đức Cường", team: "11", result: "PASSED"};

//12
sv[38] = {code: "SE140809", name: "Đỗ Thành Đạt", team: "12", result: "PASSED"};
sv[39] = {code: "SE140125", name: "Trương Thanh Bình", team: "12", result: "PASSED"};
sv[40] = {code: "SE141053", name: "Đoàn Trọng Khôi", team: "12", result: "PASSED"};
sv[41] = {code: "SE140196", name: "Mai Hoàng Dương", team: "12", result: "PASSED"};

//13
sv[42] = {code: "SE140190", name: "Nguyễn Đại Đức Trung", team: "13", result: "NOT PASSED"};
sv[43] = {code: "SE140823", name: "Trần Gia Nguyên", team: "13", result: "PASSED"};
sv[44] = {code: "SE140737", name: "Hồng Kiện Triển", team: "13", result: "PASSED"};


function validation(str) {
  check = true;
  var regex = /SE14\d{4}/;
  if (!str.match(regex)) {
    check = false;
    alert("Invalid Student's Code. Try again!");
  }  
}

function checkExist(str) {
  check = false;
  for (var i = 1; i < sv.length; i++) {
    if (str == sv[i].code) {
      check = true;

      $('.stCode').text(sv[i].code);
      $('.stName').text(sv[i].name);
      $('.stTeam').text(sv[i].team);
      $('.stResult').text(sv[i].result);

      if (sv[i].result == "PASSED") {
        $('.stResult').css("color", "rgb(0, 128, 0)");
      } else {
        $('.stResult').css("color", "rgb(255, 0, 0)");
      }
      break;
    }
  }

  if (!check) {
    alert("Student's Code is not found! Try again!");
  }
}