/**
 * Copyright (c) 2013 Andrew Aculana (andrew.aculana@gmail.com)
 *
 * Licensed under the MIT License (LICENSE.txt).
 * 
 * https://github.com/awesemo/jquery.countdown
 * 
 * Version: 1.0
 */
(function ( $ ) {
    $.fn.countdown = function( options ) {
		
		var settings = $.extend({
				interval : {hour:0,minute:0,second:0},
				callback : {
					onTick: function(e) {
					},
					onEnd: function(e) {
					}
				},
				format : ["%h hour(s), %m minute(s) and %s second(s)"]
        }, options );
		
        var that     = this;
        var time_str = '';
        
        var timeLeft = (parseInt(settings.interval.hour) * 3600) + (parseInt(settings.interval.minute) * 60) + parseInt(settings.interval.second);
        
        (function tick(){
			var remHours   = 0;
			var remMinutes = 0;
			var remSeconds = 0;
			var offset     = 0;
			var hs         = "";
			var ms         = "";
			var ss         = ""
			
			if (timeLeft >= 0) {
				timeLeft   = timeLeft-1;
				remHours   = Math.floor(timeLeft/3600);
				offset     = timeLeft%3600;
				remMinutes = Math.floor(offset/60);
				offset     = offset%60;
				remSeconds = offset;
				
				hs = "00" + remHours;
				hs = hs.substr(hs.length-(remHours.toString().length > 2 ? remHours.toString().length : 2));
				ms = "00" + remMinutes;
				ms = ms.substr(ms.length-2);
				ss = "00" + remSeconds;
				ss = ss.substr(ss.length-2);

				if (remHours > 0) {
					if (settings.format.length) {
						time_str = settings.format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
					} else {
						time_str = settings.format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
					}
				} else if(remHours == 0 && remMinutes > 0) {
					if (settings.format.length > 1) {
						time_str = settings.format[1].replace(/%m/g,ms).replace(/%s/g,ss);
					} else {
						time_str = settings.format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
					}
				} else if(remHours == 0 && remMinutes == 0) {
					if (settings.format.length > 2) {
						time_str = settings.format[2].replace(/%s/g,ss);
					} else {
						time_str = settings.format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
					}
				} else {
					time_str = settings.format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
				}
				
				if (that) {
					$(that).html(time_str);
				}
				if (settings.callback.onTick) {
					settings.callback.onTick.call(this,{'hour':hs,'minute':ms,'second':ss});
				}
				if (timeLeft > 0) {
					setTimeout(tick, 1000);
				} else {
					if (settings.callback.onEnd) {
						settings.callback.onEnd.call(this);
					}
				}

			} else {
				return;
			}
        })(this);
    };
}( jQuery ));
