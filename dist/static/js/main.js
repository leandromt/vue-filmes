/* -------------- ANIMACAO EFEITO BOTAO MENU -------------------- */
var anchor = document.getElementsByClassName("btn-menu");

[].forEach.call(anchor, function(anchor){
  var open = false;
  anchor.onclick = function(event){
    event.preventDefault();
    if(!open){
      this.classList.add('close');
      open = true;
    }
    else{
      this.classList.remove('close');
      open = false;
    }
  }
});

var lastScrollTop = 0;
var alturaMinima = 65;
var scrollUp = true;

var hasSmartbanner = false; //Banner para download do app
var st = 0;

function initCarouselListaEspeciais()
{
  /* -------------- GALERIA ESPECIAIS -------------------- */ 
  var carouselEspeciais = $("ul.lista-especiais");
  if (carouselEspeciais.length ) {
    carouselEspeciais.itemslide(
      {
        start: 0,
        left_sided: true,
        swipe_sensitivity: 200,
        duration: 400,
        one_item: true,
        disable_clicktoslide: true
      }
    );
  }

}

$(function() {
  if ($.smartbanner) {
    var pathParts = window.location.pathname.split('/');
    
    if (pathParts[1] == 'jornal' || pathParts[1] == 'teste') {
      var apptitle = 'O POVO Digital';
      var inAppStore = 'compras no app';
      var inGooglePlay = 'compras no app';
      var iconUrl = 'https://mobile.opovo.com.br/images/imgs/2017/opovodigita-icon.png';
      var appCookieName = 'sb-opovodigital';
    } else if (pathParts[1] == 'vidaearte') {
      var apptitle = 'Agenda Vida&Arte';
      var inAppStore = 'na App Store';
      var inGooglePlay = 'na Google Play';
      var iconUrl = 'https://mobile.opovo.com.br/images/imgs/2017/icon-agenda-vidaearte.png';
      var appCookieName = 'sb-agendavidaearte';
    }
    
    $.smartbanner({
      title: apptitle,
      author: "O POVO Online",
      price: 'GRÁTIS',
      appStoreLanguage: 'pt',
      inAppStore: inAppStore,
      inGooglePlay: inGooglePlay,
      icon: iconUrl,
      button: 'BAIXAR',
      cookie: appCookieName,
      onInstall: function() {
        $('.topo').stop().animate({opacity: 1, top: 0}, 300);
      	hasSmartbanner = false;
      },
      onClose: function() {
        $('.topo').stop().animate({opacity: 1, top: 0}, 300);
        hasSmartbanner = false;
      }
    });
    
    if($("#smartbanner").length == 1 && $("#smartbanner").hasClass("shown")) {
      hasSmartbanner = true;
      $('.topo').stop().animate({opacity: 1, top: 78}, 300);
	}
  }
});

$(document).ready(function() {
  
  
  
  // $('.conteudo .sociais-interna').each(function() {
  //   var elem = $(this);
  //   elem.opovosocial({
  //     url: getCanonicalUrl(),
  //     hashtags: '',
  //     facebookClass: 'btn-social bt-face',
  //     twitterClass: 'btn-social bt-twitter',
  //     googleplusClass: 'btn-social bt-google',
  //     whatsappClass: 'btn-social bt-whats',
  //     linkedIn: false,
  //     twitterUser: 'opovoonline',
  //     horizontal: true
  //   });
  // });
  
  /* ---------- MENU ---------------- */	
  var isMenuOpen = false;
  $('.btn-menu').toggle(
    function(){
      $('.menu').slideDown('fast');
      $('.topo').addClass('aberto');
      $('body').addClass('hidden');
      isMenuOpen = true;
    }, function(){
      $('.menu').slideUp('fast');
      $('.topo').removeClass('aberto');
      $('body').removeClass('hidden');
      isMenuOpen = false;
    }
  );

  $(window).scroll(function(event){
    
    st = $(this).scrollTop();
    
    if (st > lastScrollTop && st > alturaMinima && scrollUp && !isMenuOpen){
      // downscroll code
      hideMenu();
    } else if (st < 78 && hasSmartbanner) {
      $('.topo').stop().animate({opacity: 1, top: 78}, 300);
    } else if (st < lastScrollTop && !scrollUp) {
      // upscroll code
      showMenu();
    }
    
    lastScrollTop = st;

  });
  

  /* -------------- SHARE -------------------- */
  // $("#share-buttons").opovosocial({
  //   url: getCanonicalUrl(),
  //   hashtags: '',
  //   facebookClass: 'btn-social bt-face',
  //   twitterClass: 'btn-social bt-twitter',
  //   googleplusClass: 'btn-social bt-google',
  //   whatsappClass: 'btn-social bt-whats',
  //   linkedIn: false,
  //   twitterUser: 'opovoonline',
  //   horizontal: true
  // });

  // $("#share-buttons-bottom").opovosocial({
  //   url: getCanonicalUrl(),
  //   hashtags: '',
  //   facebookClass: 'btn-social bt-face',
  //   twitterClass: 'btn-social bt-twitter',
  //   googleplusClass: 'btn-social bt-google',
  //   whatsappClass: 'btn-social bt-whats',
  //   linkedIn: false,
  //   twitterUser: 'opovoonline',
  //   horizontal: true
  // });

  /* -------------- BANNERS -------------------- */
  /*FECHAR BANNER POR TEMPO*/
  setTimeout(function() {
    $(".banner-tempo").remove();
  }, 8000);

  
});

function showMenu() {
  
  if (st < 100 && hasSmartbanner) {
    if(!scrollUp) $('.topo').stop().animate({opacity: 1, top: 78}, 300);
  } else {
    if(!scrollUp) $('.topo').stop().animate({opacity: 1, top: 0}, 300);
  }
  
  scrollUp = true; 
}

function hideMenu() {
  if(scrollUp) $('.topo').stop().delay(5).animate({opacity: 0, top: -65}, 300);
  scrollUp = false;
}

/* ------------------ FECHAR BANNER DHTML ------- */
function fechaDHTML(){
  $('.container-banner-dhtml').fadeOut('fast');
}


function removeBanner(elem){
  while (elem) {
    if (elem.classList.contains('banner')) {
      elem.remove();
    }
    elem = elem.parentNode;
  }
}




