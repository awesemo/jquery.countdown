jquery.countdown
================

jQuery Countdown Timer

Usage:
-----------------------
```javascript
$('.countdown').countdown({
	interval : {
		hour   : 1,
		minute : 30,
		second : 59
	},
	callback  : {
		onEnd : function(e) {
			window.location.reload();
		}
	}
});
```

Demo:
-----------------------
[Fiddler Demo](http://jsfiddle.net/YrxLQ/2/ "Sample Fiddler")

Custom Formatting
[Fiddler Demo](http://jsfiddle.net/Cn2BL/ "Sample Fiddler")

	

