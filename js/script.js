$(document).ready(function() {
	loadstep0();
	showstep();
	closestep();
	bindvideo();
	showresult();
});

function loadstep0(){
	$(".wrapper-box").delay(10).animate({top: "50%"}, 1000, function() {
		$('#step0').fadeIn('slow');
	});
}

function showstep(){
	$('#goto-step1').click(function() {
		$('#step0').fadeOut( function(){
			$('#step1').fadeIn('slow');
		});
	});
	$('#goto-step2').click(function() {
		$('#step0').fadeOut( function(){
			$('#step2').fadeIn('slow');
		});
	});
}

function closestep(){
	$('.title .close').click(function() {
		if( $('#step1').is(':visible') ){
			$('#step1').fadeOut( function(){
				$('#step0').fadeIn('slow');
			});
		}
		if( $('#step2').is(':visible') ){
			$('#step2').fadeOut( function(){
				$('#step0').fadeIn('slow');
			});
		}
	});
}

function bindvideo(){
	$('.choose a').click(function() {
		var nId = $(this).attr('id') + '-video';
		// open video
		$('#' + nId).fadeIn( function(){
			$('.close').show();
		});
		// close video
		$('#closevideo').click(function() {
			$('#closevideo').hide();
			$('#' + nId).fadeOut();
		});
	});
}

function showresult(){
	$('#photo').click(function() {
		$('#result').addClass('bad');
		$('#result').append('<p>Seriously? Think again</p>').animate({ height: '96px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('bad');
		    }, 1200);
		});
	});
	$('#old').click(function() {
		$('#result').addClass('good');
		$('#result').append('<p>Correct! Let your Sim reach the end of their lifespan</p>').animate({ height: '120px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('good');
		    }, 2000);
		});
	});
	$('#elec').click(function() {
		$('#result').addClass('good');
		$('#result').append('<p>Correct! Electrocution can happen when fixing something electronic</p>').animate({ height: '120px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('good');
		    }, 2000);
		});
	});
	$('#fire').click(function() {
		$('#result').addClass('good');
		$('#result').append('<p>Correct! They can die this way</p>').animate({ height: '96px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('good');
		    }, 1800);
		});
	});
	$('#knife').click(function() {
		$('#result').addClass('bad');
		$('#result').append("<p>Wrong! You're watching too much Dexter</p>").animate({ height: '96px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('bad');
		    }, 1800);
		});
	});
	$('#bucket').click(function() {
		$('#result').addClass('bad');
		$('#result').append('<p>What?? Go play more Sims 3</p>').animate({ height: '96px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('bad');
		    }, 1200);
		});
	});
	$('#water').click(function() {
		$('#result').addClass('good');
		$('#result').append('<p>Nice! So you put wall around the pool...</p>').animate({ height: '96px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('good');
		    }, 2400);
		});
	});
	$('#meteo').click(function() {
		$('#result').addClass('good');
		$('#result').append('<p>Sure! There is a small chance of them being crushed by a meteorite</p>').animate({ height: '120px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','0');
        		$('#result').removeClass('good');
		    }, 2800);
		});
	});
}
