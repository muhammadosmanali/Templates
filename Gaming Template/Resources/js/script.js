$(document).ready(function() {
  $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              var $target = $(target);
              //$target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1');
                //$target.focus(); 
              };
            });
          }
        }
    });
    
  
        
});

document.querySelector('.content').style.display = "none";
document.querySelector('.div1').classList.add('progress');
document.querySelector('.div2').classList.add('indeterminate');
  
setTimeout(() => {
  document.querySelector('.div1').classList.remove('progress');
  document.querySelector('.div2').classList.remove('indeterminate');
  document.querySelector('.content').style.display = "block";
  document.querySelector('.bar').remove();
}, 2000);


