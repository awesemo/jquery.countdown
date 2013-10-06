jquery.countdown
================

jQuery Countdown Timer

Usage:
-----------------------

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
