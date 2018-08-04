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

$(document).ready(function() {
  
  
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
