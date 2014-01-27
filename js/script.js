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
	bindResults('#photo', 'bad', 'Seriously? Think again');
	bindResults('#old', 'good', 'Correct! Let your Sim reach the end of their lifespan');
	bindResults('#elec', 'good', 'Correct! Electrocution can happen when fixing something electronic');
	bindResults('#fire', 'good', 'Correct! They can die this way');
	bindResults('#knife', 'bad', 'Wrong! You\'re watching too much Dexter');
	bindResults('#bucket', 'bad', 'What?? Go play more Sims 3');
	bindResults('#water', 'good', 'Nice! So you put wall around<br /> the pool...');
	bindResults('#meteo', 'good', 'Sure! There is a small chance of them being crushed by a meteorit');
}

function bindResults(_div, _goodorbad, _text) {
	var _height = '96';

	if(_goodorbad == 'good')
		_height = '120';

	$(_div).click(function() {
		$('#result').addClass(_goodorbad);
		$('#result').append('<p>'+_text+'</p>').animate({ height: _height+'px'},500, function() {
			setTimeout(function(){
        		$('#result p').remove();
        		$('#result').css('height','');
        		$('#result').removeClass(_goodorbad);
		    }, 2800);
		});
	});
}
