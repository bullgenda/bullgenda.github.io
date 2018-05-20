/*animatejQueryClick*/
function animatejQueryClick(){

	$('.animatejqueryclick .animated').click(
		function() {
			$(this).addClass('swing');
		}
	);

}
/*animatejQueryHover*/

function animatejQueryHover(){

	$('.animatejqueryhover .animated').hover(
		function() {
			$(this).addClass('swing');
		},
		function() {
			$(this).removeClass('swing');
		}
	);

}

$(document).ready(function() {

	animatejQueryClick();
	animatejQueryHover();
	
});