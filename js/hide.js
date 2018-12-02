$('.login100-form-btn').click(function () {
  var info = $('.input100').val().toUpperCase();

  if (info != "" && info != null) {
    validation(info);

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
    }
  }
})