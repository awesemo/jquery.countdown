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
				format : ["%h hour(s), %m minute(s) and %s second(s)","%m minute(s) and %s second(s)","%s second(s)"]
        }, options );
		
        var that = this;
        (function tick(){
			if (settings.callback.onTick) {
				settings.callback.onTick.call(interval);
			}
            if (settings.interval.hour == 0 && settings.interval.minute == 0 && settings.interval.second == 0) {
				if (settings.callback.onEnd) {
					settings.callback.onEnd.call(interval);
				}
                return;
            }
            if (settings.interval.second == 0) {
                if (settings.interval.minute > 0) {
                    settings.interval.minute--;
                }
                settings.interval.second = 60;
            }
            if (settings.interval.minute == 0) {
                if (settings.interval.hour > 0) {
                    settings.interval.hour--;
                    if (settings.interval.hour == 0) {
                        settings.interval.minute = 59;
                    }
                }
            }
            
            settings.interval.second--;
            setTimeout(tick, 1000);
            
            var hs = "00" + settings.interval.hour;
                hs = hs.substr(hs.length-2);
            var ms = "00" + settings.interval.minute;
                ms = ms.substr(ms.length-2);
            var ss = "00" + settings.interval.second;
                ss = ss.substr(ss.length-2);
            
            var time_str = '';
            if (settings.interval.hour > 0) {
                if (settings.format.length) {
                    time_str = settings.format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
                }
            } else if(settings.interval.hour == 0 && settings.interval.minute > 0) {
                if (settings.format.length > 1) {
                    time_str = settings.format[1].replace(/%m/g,ms).replace(/%s/g,ss);
                }
            } else if(settings.interval.hour == 0 && settings.interval.minute == 0) {
                if (settings.format.length > 2) {
                    time_str = settings.format[2].replace(/%s/g,ss);
                }
            } else {
                time_str = '';
            }
            
            $(that).html(time_str);
        })(this);
    };
}( jQuery ));
