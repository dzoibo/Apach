	
	// script popup s'inscrire

$(document).ready(function(){
	// afficher menu mobile
	$('.menu_rac').click(function(){
		if($(this).hasClass('activ')){
			$('.dropdown-content').slideUp();
			$('.categorie-second').slideUp();
			$(this).removeClass('activ');
			$('body').css({overflow:'scroll'});

			
		} else {
			$('.categorie-second').slideDown();
			$('.dropdown-content').slideDown();
			$(this).addClass('activ');
			$('body').css({overflow:'hidden'});
			
		}

	var timeout;
	$('.dropdown-vue').on({
	  mouseenter: function() {
		  console.log('yes');
		$('.dropdown-content').show(0);
	  },
	  mouseleave: function() {
		timeout = setTimeout(function() {
		  $('.dropdown-content').hide(0);
		}, 0);
	  }
	});

	}); 

	


	/* afficher le dropdown*/
	var timeout;
	$('.dropdown-vue').on({
	  mouseenter: function() {
		$('.dropdown-content').show(1000);
	  },
	  mouseleave: function() {
		timeout = setTimeout(function() {
		  $('.dropdown-content').hide(500);
		}, 500);
	  }
	});
	
	
	/* afficher les fils du dropdown */
	
	$('.li1').hover(function(){
	  $('.dropdown-content-li1').show(1000);
	  $('.dropdown-content-li2').hide();
	  $('.dropdown-content-li3').hide();
	  
	}, function() {
	  $('.dropdown-content-li1').hide();
	});
	$('.li2').hover(function(){
	  $('.dropdown-content-li2').show(1000);
	  $('.dropdown-content-li1').hide();
	  $('.dropdown-content-li3').hide();
	}, function() {
	  $('.dropdown-content-li2').hide();
	});
	$('.li3').hover(function(){
	  $('.dropdown-content-li3').show(1000);
	  $('.dropdown-content-li2').hide();
	  $('.dropdown-content-li1').hide();
	}, function() {
	  $('.dropdown-content-li3').hide();
	});
	
	

	// show and hide cart panier
	

  
  // open box chat
  $('.chat-box').click(function(){
	$('.chat_content').slideToggle();
  });
  // open cart message page
  $('.click-open-cart').click(function(){
	$('.message_content_shop_contant').slideToggle();
  });
  //close index block product
  $('#message_cart_icone_close').click(function(){
	$('.message_affichage_index_msg').fadeOut(500);
	//$('.message_affichage_index_msg').empty();
  });
  
  // fetch box index
  $('#message_content_shop_contant_box1').click(function(){
	var name = $(this).attr("data-name");
	var prix = $(this).attr("data-prix");
	var price = "<span class='eachPrice'>" +$(this).attr("data-price")+ "</span>";
	var image= "<img src="+$(this).attr("data-image")+">";
	var content=`<div class="message_content_shop_contant_box_img">
			  ${image}
			</div>
			<div class="message_content_shop_contant_box_desc">
			  <span>${name}</span>
			  <span>${prix}</span>
	</div>`;
	$(".message_affichage_index_msg").fadeIn();
	$("#message_cart_index").append(content);
	$(".message_affichage_index_msg").fadeIn();
	
	//alert(content)
  });
  //send message page message
  $('#send-message').click(function(){
	SendMessage();
  });
  $('#send-message-index').click(function(){
	//e.preventDefault();
	SendMessageAccueil();
  });
});
 
  function SendMessage() {
	message = $("#message").val();
	if($.trim(message) == '') {
	  alert('champ vide');
	}
	$(".message_affichage_content_user_content").animate({ scrollTop: $(document).height() }, "fast");
	$(".message_affichage_content_user_content").append(`<div class="chat-message-item message-chat-message-item-operator chat-message-item-operator">
			  ${message}
	</div>`);
  $("#message").val('');
  }
  function SendMessageAccueil() {
  message_index = $("#message-accueil").val();
  if($.trim(message_index) == '') {
	alert('champ vide');
  }
  $(".chat-content-message").animate({ scrollTop: $(document).height() }, "fast");
  $('.chat-content-message').append(`<div class="chat-message-item chat-message-item-operator">
			  ${message_index}
  </div>`);
  $("#message-accueil").val('');
  }
  function quantityChange()
  {
  var qty= $(".cart-box-qty-input").val();
  var price = $(".add-to-cart").attr("data-price").split(",").join(".");
  var total= parseFloat(qty * price);
  ///alert(total)
  
  var totalPrice = 0;
  $(".eachPrice").each(function (){
  totalPrice+=total;
  });
  $("#total-price").html("XAF &nbsp;" +totalPrice);
  }
  



//   PAGE DE CHAT 

// SCRIPT GESTION LOCALISATION PAGE FILTRE

// SCRIPT GESTION LOCALISATION





$(document).ready(function(){
	
	$('#SelectRegion').on('change',function(){
		var stateID = $(this).val();
		if(stateID){
			// Loading();

			$.ajax({

				type:'POST',
				url:'assets/traitement_ajax/traitement_localisation.php',
				data:'state_id='+stateID,
				success:function(html){
					// endLoading();
					$('#SelectVille').html(html);
					$('#SelectQuartier').html('<option value="">Choisir quartier</option>');
				}
			}); 
		}else{
			$('#SelectVille').html('<option value="">Selectionnez d\'abord la region</option>'); 
			$('#SelectQuartier').html('<option value="">Selectionnez d\'abord la ville</option>');
		}
	});

	$('#SelectVille').on('change',function(){
		
		var city_id = $(this).val();
		if(city_id){
			// Loading();
			$.ajax({
				type:'POST',
				url:'assets/traitement_ajax/traitement_localisation.php',
				data:'city_id='+city_id,
				success:function(html){
					// endLoading();
					$('#SelectQuartier').html(html);
				}
			}); 
		}else{
			$('#SelectQuartier').html('<option value="">Selectionnez d\'abord la ville</option>'); 
		}
	});

	
});


/* 1. Proloder */
$(window).on('load', function () {
	$('#preloader-active').delay(450).fadeOut('slow');
	$('body').delay(450).css({
	  'overflow': 'visible'
	});
  });

/* 2. sticky And Scroll UP */
  $(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
	  $(".header-sticky").removeClass("sticky-bar");
	  $('#back-top').fadeOut(500);
	} else {
	  $(".header-sticky").addClass("sticky-bar");
	  $('#back-top').fadeIn(500);
	}
  });
// Scroll Up
  $('#back-top a').on("click", function () {
	$('body,html').animate({
	  scrollTop: 0
	}, 800);
	return false;
  });