/**
 * Copyright (c) 2013 Andrew Aculana (andrew.aculana@gmail.com)
 *
 * Licensed under the MIT License (LICENSE.txt).
 * 
 * Version: 1.0
 */
(function ( $ ) {
    $.fn.countdown = function( interval, callback, format ) {
        if (typeof(interval)=="undefined") {
            interval = {'h':0,'m':0,'s':0};
        }
        if (typeof(callback)=="undefined") {
			callback = {
				onTick: function(e) {
				},
				onEnd: function(e) {
				}
			};
		}
        if (typeof(format)=="undefined") {
            format = ["%h hour(s), %m minute(s) and %s second(s)","%m minute(s) and %s second(s)","%s second(s)"];
        }
        var that = this;
        (function tick(){
			if (callback.onTick) {
				callback.onTick.call(interval);
			}
            if (interval.h == 0 && interval.m == 0 && interval.s == 0) {
				if (callback.onEnd) {
					callback.onEnd.call(interval);
				}
                return;
            }
            if (interval.s == 0) {
                if (interval.m > 0) {
                    interval.m--;
                }
                interval.s = 60;
            }
            if (interval.m == 0) {
                if (interval.h > 0) {
                    interval.h--;
                    if (interval.h == 0) {
                        interval.m = 59;
                    }
                }
            }
            
            interval.s--;
            setTimeout(tick, 1000);
            
            var hs = "00" + interval.h;
                hs = hs.substr(hs.length-2);
            var ms = "00" + interval.m;
                ms = ms.substr(ms.length-2);
            var ss = "00" + interval.s;
                ss = ss.substr(ss.length-2);
            
            var time_str = '';
            if (interval.h > 0) {
                if (format.length) {
                    time_str = format[0].replace(/%h/g,hs).replace(/%m/g,ms).replace(/%s/g,ss);
                }
            } else if(interval.h == 0 && interval.m > 0) {
                if (format.length > 1) {
                    time_str = format[1].replace(/%m/g,ms).replace(/%s/g,ss);
                }
            } else if(interval.h == 0 && interval.m == 0) {
                if (format.length > 2) {
                    time_str = format[2].replace(/%s/g,ss);
                }
            } else {
                time_str = '';
            }
            
            $(that).html(time_str);
        })(this);
    };
}( jQuery ));
