jquery.countdown
================

jQuery Countdown Timer

Usage:
-----------------------

<script src="jquery.countdown.js"></script>

jQuery(document).ready($) {
	$('.countdown').countdown({
		interval : {
			hour   : 1,
			minute : 30,
			second : 59
		},
		callback  : {
			onEnd : function {
				window.location.reload();
			}
		}
	});
})
