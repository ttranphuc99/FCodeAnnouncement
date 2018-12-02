$('.login100-form-btn').click(function () {
  var info = $('.input100').val().toUpperCase();
  checkOneTime(info);

  if (info != "" && info != null) {
    if (check) validation(info);

    if (check) checkExist(info);

    if (check) {
      var ele = $('.wrap-login100').eq(0);

      ele.css("transform", "scale(0)");

      $('.limiter').eq(0).css("z-index", "-1");
      $('.limiter').eq(1).css("z-index", "1");

      setTimeout(function () {
        $('.limiter').eq(2).css("z-index", "100");
        $('.wrap-login100').eq(1).css("transform", "scale(1)");
        console.log('in');
      }, 30000);

      localStorage.setItem("FCODE2018", info);
    }
  }
});

function checkOneTime(str) {
  var memory = localStorage.getItem("FCODE2018");

  if (memory != null && str != memory) {
    check = false;
    alert("You cannot find your friend's result!");
  }
}