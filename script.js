var element = document.querySelectorAll('.tel-mask');
var maskOptions = {
  mask: '(00) 000-00-00'
};

for (let i = 0; i < element.length; i++){
    let mask = IMask(element[i], maskOptions);
}

$('.selected-price').on('click', function(e){
    $('.price').text(e.target.innerText + ' грн');
    var orderLink = document.getElementsByClassName('send-order')[0];
    orderLink.dataset.size = e.target.dataset.size;
    orderLink.dataset.depth = e.target.dataset.depth;
})

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $(".header-wrap").addClass("scroll-header");
  } else if(!$('.collapse').hasClass('show')){
    $(".header-wrap").removeClass("scroll-header");
  }
});

$('.collapse').on("show.bs.collapse", function() {
  $(".header-wrap").addClass("scroll-header");
});

$('.collapse').on("hide.bs.collapse", function() {
  if ($(window).scrollTop() >= 0) {
    
  }
  else{
    $(".header-wrap").removeClass("scroll-header");
  }
});

$(".navbar-nav").on("click",".nav-link", function (event) {
  $('.navbar-collapse').collapse('hide');
  let id = $(this).attr('href'),
  top = $(id).offset().top - 90;

  $("html, body").animate({ scrollTop: top}, 400, "linear");
})



// Mail form

$('.send-tel').on('click', (e) => {
  var telId = e.target.dataset.telInput;
  var errorId = e.target.dataset.errorId;

  axios.get('/mail.php?tel='+document.getElementById(telId).value)
  .then(function (response) {
    if(response.data == true){
      $(`#${errorId}`).css('display', 'none');
      e.target.disabled = true; 
      e.target.value = "Заявка отправлена";
      setTimeout(()=> {
        e.target.disabled = false; 
        e.target.value = "Получить точный расчет";
      }, 5000)
    }
    else if(response.data == false){
      $(`#${errorId}`).css('display', 'block');
      setTimeout(()=> {
        $(`#${errorId}`).css('display', 'none');
      }, 5000)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
})

$('.send-order').on('click', (e) => {
  var tel = document.getElementById('order-tel').value;
  var price = document.getElementsByClassName('price')[0].innerHTML;
  var teplitsaName = e.target.dataset.teplitsa;
  var size = e.target.dataset.size;
  var depth = e.target.dataset.depth;

  var errorId = e.target.dataset.errorId;

  axios.get('/mail_order.php',{
    params: {
      tel,
      price,
      teplitsaName,
      size,
      depth
    }
  })
  .then(function (response) {
    if(response.data == true){
      $(`#${errorId}`).css('display', 'none');
      e.target.disabled = true; 
      e.target.value = "Заявка отправлена";
      setTimeout(()=> {
        e.target.disabled = false; 
        e.target.value = "Купить в 1 клик";
      }, 5000)
    }
    else if(response.data == false){
      $(`#${errorId}`).css('display', 'block');
      setTimeout(()=> {
        $(`#${errorId}`).css('display', 'none');
      }, 5000)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
})

$('.send-dealer').on('click', (e) => {
  var tel = document.getElementById('tel').value;
  var dealerName = document.getElementById('dealer-name').value;
  var dealerMail = document.getElementById('dealer-mail').value;

  var errorId = e.target.dataset.errorId;

  axios.get('/mail_dealer.php',{
    params: {
      tel,
      dealerName,
      dealerMail
    }
  })
  .then(function (response) {
    if(response.data == true){
      $(`#${errorId}`).css('display', 'none');
      e.target.disabled = true; 
      e.target.value = "Заявка отправлена";
      setTimeout(()=> {
        e.target.disabled = false; 
        e.target.value = "Отправить заявку";
      }, 5000)
    }
    else if(response.data == false){
      $(`#${errorId}`).css('display', 'block');
      setTimeout(()=> {
        $(`#${errorId}`).css('display', 'none');
      }, 5000)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
})



