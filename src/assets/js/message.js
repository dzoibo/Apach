

 // Piece jointe Popup
// Lorsquon clique sur l'icone en coeur à coté de la zone de saisi des messages.
 $('#PieceJointe').click(function(){
	 var id_recpteur = $('.contact.active').attr('data-id_recepteur');
	$.ajax({

		type:'POST',
		url:'assets/traitement_ajax/traitement_PJ.php',
		data:'id_recepteur='+id_recpteur, 
		success:function(html){
			// endLoading();
			// alert(id_recpteur)
			$('#contenuPJ').html(html);
		}
	}); 

	$('.popup-pj').css({
		display:'block'
	});
})

 $('#PieceJointe').magnificPopup({
	items: {
		src: '#popupPieceJointe',
		type: 'inline'
	},
	preloader:true
  });

//   Lorsqu'on clique sur le bouton joindre dans le popup
$('#BtnJoindre').click(function(e){
	e.preventDefault();
	$('#ContenuJoint').html('');
	$("input:checked").each(function() {
		$('.checkmark').hide();
		var produit_joint = $(this).parent().parent();
		$('#ContenuJoint').append(produit_joint);
	});
	$('.content-piece-jointe').slideDown();
	$('.mfp-close').click();
});
$('#RemovePJ').click(function(){
	$('.content-piece-jointe').slideUp();
	$('#ContenuJoint').html('');
});

$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
  $("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");
	
	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};
	
	$("#status-options").removeClass("active");
});

function newMessage() {
	message = $(".message-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

$('.submit').click(function() {
  newMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});