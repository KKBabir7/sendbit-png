/////////////........scroll js
		   
						$(window).scroll(function(){
				$('nav').toggleClass('scrolled', $(this).scrollTop() >80);
				$('nav').toggleClass('scrolledd', $(this).scrollTop() >500);
				$('#topbar').toggleClass('scro', $(this).scrollTop() >80);
				$('#topbar').toggleClass('scrol', $(this).scrollTop() >500);
				
			});
			

/////////////........back to up		
			
				const scrollToTopButton = document.getElementById('js-top');
			

			window.addEventListener('scroll', () => {
			  // Get the current scroll value
			  let ye = window.scrollY;
			  if (ye > 100) {
				scrollToTopButton.style.bottom = '10px'
			  } else {
				scrollToTopButton.style.bottom = '-200px'
			  }
			})
			
/////////////........content animate

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      

      var winTop = $(window).scrollTop();
        if (pos < winTop + 500) {
          $(this).addClass("slide");
        }
		
    });
  });
})














/////////////........toogle


$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  
});























/////////////........copy
		    
			 function copy(){
				    
				    var copy=document.getElementById('allcopy');
					copy.style.display='block';
				}
				 function copyout(){
				    
				    var copy=document.getElementById('allcopy');
					copy.style.display='none';
				}
				
				
				
				function copy1(){
				    
				    var copy1=document.getElementById('allcopy1');
					copy1.style.display='block';
				}
				 function copyout1(){
				    
				    var copy1=document.getElementById('allcopy1');
					copy1.style.display='none';
				}
				
				
				
				
				function copy2(){
				    
				    var copy2=document.getElementById('allcopy2');
					copy2.style.display='block';
				}
				 function copyout2(){
				    
				    var copy2=document.getElementById('allcopy2');
					copy2.style.display='none';
				}
				
				
				
				
				function copy3(){
				    
				    var copy3=document.getElementById('allcopy3');
					copy3.style.display='block';
				}
				 function copyout3(){
				    
				    var copy3=document.getElementById('allcopy3');
					copy3.style.display='none';
				}
				
				
				
				
				function copy4(){
				    
				    var copy4=document.getElementById('allcopy4');
					copy4.style.display='block';
				}
				 function copyout4(){
				    
				    var copy4=document.getElementById('allcopy4');
					copy4.style.display='none';
				}
				
				
				
				function copy5(){
				    
				    var copy5=document.getElementById('allcopy5');
					copy5.style.display='block';
				}
				 function copyout5(){
				    
				    var copy5=document.getElementById('allcopy5');
					copy5.style.display='none';
				}
				
				
				
				function copy6(){
				    
				    var copy6=document.getElementById('allcopy6');
					copy6.style.display='block';
				}
				 function copyout6(){
				    
				    var copy6=document.getElementById('allcopy6');
					copy6.style.display='none';
				}
				
				
				
				function copy7(){
				    
				    var copy7=document.getElementById('allcopy7');
					copy7.style.display='block';
				}
				 function copyout7(){
				    
				    var copy7=document.getElementById('allcopy7');
					copy7.style.display='none';
				}
				
				
				
				function copy8(){
				    
				    var copy8=document.getElementById('allcopy8');
					copy8.style.display='block';
				}
				 function copyout8(){
				    
				    var copy8=document.getElementById('allcopy8');
					copy8.style.display='none';
				}
				
				
				
				function copy9(){
				    
				    var copy9=document.getElementById('allcopy9');
					copy9.style.display='block';
				}
				 function copyout9(){
				    
				    var copy9=document.getElementById('allcopy9');
					copy9.style.display='none';
				}
				
				
				
				function copy10(){
				    
				    var copy10=document.getElementById('allcopy10');
					copy10.style.display='block';
				}
				 function copyout10(){
				    
				    var copy10=document.getElementById('allcopy10');
					copy10.style.display='none';
				}
				
				
				
				function copy11(){
				    
				    var copy11=document.getElementById('allcopy11');
					copy11.style.display='block';
				}
				 function copyout11(){
				    
				    var copy11=document.getElementById('allcopy11');
					copy11.style.display='none';
				}
				
				
				
				function copy12(){
				    
				    var copy12=document.getElementById('allcopy12');
					copy12.style.display='block';
				}
				 function copyout12(){
				    
				    var copy12=document.getElementById('allcopy12');
					copy12.style.display='none';
				}
				
				
				
				