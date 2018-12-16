$(function() {
	$('.bg').hover(function() {
		$('rect').off()
		alert('Sorry, you lose!')
	})
	
	$('.finish').hover(function() {
		$('rect').off()
		alert('Congratulations, you win!')
	})
})