/*
	jq.Segment
	v0.1
	By Daniel Seripap, daniel@seripap.com
	----------------------------------------
	Lightweight jQuery Plugin that grabs URL Segments.

	USAGE:
	Example URL: http://www.seripap.com/a/b/c

	$.segment() - returns a,b,c
	$.segment(1) - returns a
	$.segment(2) - returns b
	$.segment(3) - returns c
*/

	(function ($) { "use strict";
		Array.prototype.clean = function(x) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] === x) {
					this.splice(i, 1);
					i--;
				}
			}
			return this;
		};
		$.segment = function(segment) {
			var url = window.location.pathname,
			segments = url.split('/'[0]).clean('');

			if (segment) {
				return segments[segment-1];
			} else {
				return segments;
			}
		};})(jQuery);