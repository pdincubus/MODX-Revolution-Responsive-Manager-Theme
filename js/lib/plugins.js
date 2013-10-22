// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 /**
 * DarthPhader plugin
 * I find your lack of configuration options disturbing
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.DarthPhader
 */

 (function($) {
     $.fn.darthPhader = function(options) {
         /*----------------------------------------------------
          *      default settings
          *----------------------------------------------------*/

         var settings = $.extend({
             'animationDuration' : 2000,     //milliseconds
             'slideEasing' : 'swing',        //default options are swing or linear
             'includeNav' : true,            //do you want to output next/prev buttons?
             'navId' : 'phaderNav',          //create a blank div with an id
             'navIncludeNumSlides' : true,   //left and right nav plus number of slides shown
             'navNextId' : 'phadeNext',      //pick an ID
             'navPrevId' : 'phadePrev',      //see above
             'navNumClass' : 'phadeNum',     //pick a class
             'autoPhader' : false,           //wait for user interaction?
             'waitTime' : 5000,              //how long between auto phading?
             'opacity' : 0,                  //fadeOut or just opacity hide? Default - fadeOut
             'loopButtons' : false           //do buttons ever get disabled?
         }, options);

         return this.each(function() {

             /*----------------------------------------------------
              *      init
              *----------------------------------------------------*/
             //figure out slides, and number of slides, set where we're at and figure out the width of a slide
             var slides = '#' + $(this).attr('id');
             var slide = slides + ' > li';
             var numSlides = $(slide).size();
             var currentSlide = 1;

             //initial setup of slides
             if(settings.opacity == 1) {
                 $(slide).animate({
                     opacity: 0
                 }, 10);

                 $(slide).eq(0).animate({
                     opacity: 1
                 }, 10);
             } else {
                 $(slide).hide();
                 $(slide).eq(0).show();
             }

             /*----------------------------------------------------
              *      Auto fading
              *----------------------------------------------------*/
             function autoSliding() {
                 if (currentSlide === numSlides) {
                     //we're at the beginning, rewind and reset
                     currentSlide = 1;

                     if(settings.loopButtons === false) {
                         $('#' + settings.navPrevId).addClass('disabled');
                     }

                     //do the phading
                     if(settings.opacity == 1) {
                         $(slide).eq(0).animate({
                             opacity: 1
                         }, 10);

                         $(slide).not(':first').animate({
                             opacity: 0
                         }, parseInt(settings.animationDuration,10), settings.slideEasing);
                     } else {
                         $(slide).eq(0).show();
                         $(slide).not(':first').fadeOut(parseInt(settings.animationDuration,10));
                     }

                     if (settings.navIncludeNumSlides === true && settings.includeNav === true) {
                         $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + numSlides);
                     }
                 } else {
                     if (settings.includeNav === true && settings.loopButtons === false) {
                         //ensure we don't have any disabled buttons
                         $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                     }

                     //do the phading
                     if(settings.opacity == 1) {
                         $(slide).eq(currentSlide-1).animate({
                             opacity: 0
                         }, parseInt(settings.animationDuration,10), settings.slideEasing);

                         $(slide).eq(currentSlide).animate({
                             opacity: 1
                         }, parseInt(settings.animationDuration,10), settings.slideEasing);
                     } else {
                         $(slide).eq(currentSlide-1).fadeOut(parseInt(settings.animationDuration,10));
                         $(slide).eq(currentSlide).fadeIn(parseInt(settings.animationDuration,10));
                     }

                     //increment the counter
                     currentSlide++;

                     //update nav counter
                     if (settings.navIncludeNumSlides === true && settings.includeNav === true) {
                         $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + numSlides);
                     }

                     //disable button if we've just reached the last slide
                     if (currentSlide === numSlides && settings.loopButtons === false) {
                         $('#' + settings.navNextId).addClass('disabled');
                     }
                 }
             }//end autoSliding function

             if (settings.autoPhader === true) {
                 //set auto slide timer
                 var autoSlideTimer = setInterval(autoSliding, parseInt(settings.waitTime,10));
             }

             /*----------------------------------------------------
              *      phader nav
              *----------------------------------------------------*/

             if (settings.includeNav === true) {
                 //we only need to add it if it doesn't exist
                 if(!$('#' + settings.navPrevId).length) {
                     //create left and right nav
                     var navHtml = '<span id="' + settings.navPrevId + '">&lt;</span>';

                     if (settings.navIncludeNumSlides === true) {
                         //do we want to know what slide we're on?
                         navHtml = navHtml + '<span class="' + settings.navNumClass + '">1 of ' + numSlides + '</span>';
                     }

                     navHtml = navHtml + '<span id="' + settings.navNextId + '">&gt;</span>';

                     //add the nav to the nav element
                     $('#' + settings.navId).append(navHtml);

                     //diable previous to start with, I mean we're already at the beginning.
                     if(settings.loopButtons === false) {
                         $('#' + settings.navPrevId).addClass('disabled');
                     }

                     /*----------------------------------------------------
                      *      prev button
                      *----------------------------------------------------*/

                     $('#' + settings.navPrevId).on('click', function() {
                         //interrupt the timer for auto if it's going
                         if (settings.autoPhader === true) {
                             clearInterval(autoSlideTimer);
                         }

                         //prevent animation queueing
                         if ($(slide).is(':animated') === true) {
                             return;
                         }

                         if (currentSlide === 1) {
                             if(settings.loopButtons === true) {
                                 currentSlide = numSlides;

                                 //do the phading
                                 if(settings.opacity == 1) {
                                     $(slide).animate({
                                         opacity: 0
                                     }, parseInt(settings.animationDuration,10), settings.slideEasing);

                                     $(slide).eq(currentSlide).animate({
                                         opacity: 1
                                     }, 10);
                                 } else {
                                     $(slide).eq(currentSlide-1).fadeIn(parseInt(settings.animationDuration,10));
                                     $(slide).eq(currentSlide-1).siblings().fadeOut(parseInt(settings.animationDuration,10));
                                 }

                                 $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + numSlides);
                             } else {
                                 //we're at the beginning, just disable the button
                                 $('#' + settings.navPrevId).addClass('disabled');
                                 return;
                             }
                         } else {
                             //ensure we don't have any disabled buttons
                             if(settings.loopButtons === false) {
                                 $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                             }

                             //do the phading
                             if(settings.opacity == 1) {
                                 $(slide).eq(currentSlide-2).animate({
                                     opacity: 1
                                 }, parseInt(settings.animationDuration,10), settings.slideEasing);

                                 $(slide).eq(currentSlide-1).animate({
                                     opacity: 0
                                 }, parseInt(settings.animationDuration,10), settings.slideEasing);
                             } else {
                                 $(slide).eq(currentSlide-2).fadeIn(parseInt(settings.animationDuration,10));
                                 $(slide).eq(currentSlide-1).fadeOut(parseInt(settings.animationDuration,10));
                             }

                             //decrement counter
                             currentSlide--;

                             //update nav counter
                             if (settings.navIncludeNumSlides === true) {
                                 $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + numSlides);
                             }

                             //disable button if we've just reached the first slide again
                             if (currentSlide === 1 && settings.loopButtons === false) {
                                 $('#' + settings.navPrevId).addClass('disabled');
                             }
                         }

                         if (settings.autoPhader === true) {
                             autoSlideTimer = setInterval(autoSliding, parseInt(settings.waitTime,10));
                         }
                     });
                 }

                 /*----------------------------------------------------
                  *      next button
                  *----------------------------------------------------*/

                 $('#' + settings.navNextId).on('click', function() {

                     //interrupt the timer for auto if it's going
                     if (settings.autoPhader === true) {
                         clearInterval(autoSlideTimer);
                     }

                     //prevent animation queueing
                     if ($(slide).is(':animated') === true) {
                         return;
                     }

                     if (currentSlide === numSlides) {
                         if(settings.loopButtons === true) {
                             //we're at the beginning, rewind and reset
                             currentSlide = 1;

                             //do the phading
                             if(settings.opacity == 1) {
                                 $(slide).eq(0).animate({
                                     opacity: 1
                                 }, 10);

                                 $(slide).not(':first').animate({
                                     opacity: 0
                                 }, parseInt(settings.animationDuration,10), settings.slideEasing);
                             } else {
                                 $(slide).eq(0).show();
                                 $(slide).not(':first').fadeOut(parseInt(settings.animationDuration,10));
                             }
                         } else {
                             //we're at the end, just disable the button
                             $('#' + settings.navNextId).addClass('disabled');
                             return;
                         }

                         if (settings.navIncludeNumSlides === true) {
                             $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + numSlides);
                         }
                     } else {
                         //ensure we don't have any disabled buttons
                         if(settings.loopButtons === true) {
                             $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                         }

                         //do the phading
                         if(settings.opacity == 1) {
                             $(slide).eq(currentSlide-1).animate({
                                 opacity: 0
                             }, parseInt(settings.animationDuration,10), settings.slideEasing);

                             $(slide).eq(currentSlide).animate({
                                 opacity: 1
                             }, parseInt(settings.animationDuration,10), settings.slideEasing);
                         } else {
                             $(slide).eq(currentSlide-1).fadeOut(parseInt(settings.animationDuration,10));
                             $(slide).eq(currentSlide).fadeIn(parseInt(settings.animationDuration,10));
                         }

                         //increment the counter
                         currentSlide++;

                         //update nav counter
                         if (settings.navIncludeNumSlides === true) {
                             $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + numSlides);
                         }

                         //disable button if we've just reached the last slide
                         if (currentSlide === numSlides && settings.loopButtons === false) {
                             $('#' + settings.navNextId).addClass('disabled');
                         }
                     }

                     if (settings.autoPhader === true) {
                         autoSlideTimer = setInterval(autoSliding, parseInt(settings.waitTime,10));
                     }
                 });

             }//end includeNav stuff
         });
     };
 })(jQuery);


 /**
 * shlider plugin
 * shlide right. shlide right. shlide left. shlide right. shlide left again. nishe. very nishe.
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.Shlider
 */

 (function($) {
     $.fn.shlider = function(options) {

         // settings
         var settings = $.extend({
             'animationDuration' : 500,      //milliseconds
             'slideEasing' : 'swing',        //default options are swing or linear
             'includeNav' : true,            //do you want to output next/prev buttons?
             'navId' : 'shliderNav',         //create a blank div with an id
             'navIncludeNumSlides' : false,  //left and right nav plus number of slides shown
             'navNextId' : 'shlideNext',     //pick an ID
             'navPrevId' : 'shlidePrev',     //see above
             'navNumClass' : 'shlideNum',    //pick a class
             'slidesAtOnce' : 1,             //do you want more than one slide to move at once?
             'autoSlide' : false,            //wait for use interaction?
             'waitTime' : 3000,              //duration of pause between shlides
         }, options);

         return this.each(function() {
             //figure out slides, and number of slides, set where we're at and figure out the width of a slide
             var slides = '#' + $(this).attr('id');
             var slide = slides + ' > li';
             var numSlides = $(slide).size();
             var slidings = Math.ceil(numSlides / settings.slidesAtOnce);
             var currentSlide = 1;
             var slideWidth = $(slide).width();

             //what to do when the timer function is called
             function autoSliding() {
                 if (currentSlide === slidings) {
                     //we're at the beginning, rewind and reset
                     currentSlide = 1;

                     $('#' + settings.navNextId).removeClass('disabled');
                     $('#' + settings.navPrevId).addClass('disabled');

                     $(slides).animate({
                         left: 0
                     }, settings.animationDuration, settings.slideEasing);

                     $('#' + settings.navId + ' .' + settings.navNumClass).text('1 of ' + slidings);
                 }else {
                     if (settings.includeNav === true) {
                         //ensure we don't have any disabled buttons
                         $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');
                     }

                     //do the shhhhlide
                     $(slides).animate({
                         left: '-=' + slideWidth * settings.slidesAtOnce
                     }, settings.animationDuration, settings.slideEasing);

                     //increment the counter
                     currentSlide++;

                     //update nav counter
                     if (settings.navIncludeNumSlides === true && settings.includeNav === true) {
                         $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + slidings);
                     }

                     //disable button if we've just reached the last slide
                     if (currentSlide === slidings && settings.includeNav === true) {
                         $('#' + settings.navNextId).addClass('disabled');
                     }
                 }
             }

             if (settings.autoSlide === true) {
                 //set auto slide timer
                 var autoSlideTimer = setInterval(autoSliding, settings.waitTime);
             }//end autoSlide

             if (settings.includeNav === true) {
                 //we only need to add it if it doesn't exist
                 if(!$('#' + settings.navPrevId).length) {
                     //create left and right nav
                     var navHtml = '<span id="' + settings.navPrevId + '">&lt;</span>';
                     if (settings.navIncludeNumSlides === true) {
                         //do we want to know what slide we're on?
                         navHtml = navHtml + '<span class="' + settings.navNumClass + '">1 of ' + slidings + '</span>';
                     }
                     navHtml = navHtml + '<span id="' + settings.navNextId + '">&gt;</span>';

                     //add the nav to the nav element
                     $('#' + settings.navId).append(navHtml);
                     //diable previous to start with, I mean we're already at the beginning.
                     $('#' + settings.navPrevId).addClass('disabled');

                     //what happens when we click previous?
                     $('#' + settings.navPrevId).on('click', function() {

                         //interrupt the timer for auto if it's going
                         if (settings.autoSlide === true) {
                             clearInterval(autoSlideTimer);
                         }

                         //prevent animation queueing
                         if ($(slides).is(':animated') === true) {
                             return;
                         }

                         if (currentSlide === 1) {
                             //we're at the beginning, just disable the button
                             if (settings.autoSlide === true) {
                                 autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                             }

                             return;
                         }else {
                             //ensure we don't have any disabled buttons
                             $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');

                             //do the shhhhlide
                             $(slides).animate({
                                 left: '+=' + slideWidth * settings.slidesAtOnce
                             }, settings.animationDuration, settings.slideEasing);

                             //decrement counter
                             currentSlide--;

                             //update nav counter
                             if (settings.navIncludeNumSlides === true) {
                                 $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + slidings);
                             }

                             //disable button if we've just reached the first slide again
                             if (currentSlide === 1) {
                                 $('#' + settings.navPrevId).addClass('disabled');
                             }
                         }

                         if (settings.autoSlide === true) {
                             autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                         }
                     });
                 }

                 //what happens when we click next?
                 $('#' + settings.navNextId).on('click', function() {

                     //interrupt the timer for auto if it's going
                     if (settings.autoSlide === true) {
                         clearTimeout(autoSlideTimer);
                     }

                     //prevent animation queueing
                     if ($(slides).is(':animated') === true) {
                         return;
                     }

                     if (currentSlide === slidings) {
                         //we're at the beginning, just disable the button
                         if (settings.autoSlide === true) {
                             autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                         }

                         return;
                     }else {
                         //ensure we don't have any disabled buttons
                         $('#' + settings.navNextId + ', #' + settings.navPrevId).removeClass('disabled');

                         //do the shhhhlide
                         $(slides).animate({
                             left: '-=' + slideWidth * settings.slidesAtOnce
                         }, settings.animationDuration, settings.slideEasing);

                         //increment the counter
                         currentSlide++;

                         //update nav counter
                         if (settings.navIncludeNumSlides === true) {
                             $('#' + settings.navId + ' .' + settings.navNumClass).text(currentSlide + ' of ' + slidings);
                         }

                         //disable button if we've just reached the last slide
                         if (currentSlide === slidings) {
                             $('#' + settings.navNextId).addClass('disabled');
                         }
                     }

                     if (settings.autoSlide === true) {
                         autoSlideTimer = setInterval(autoSliding, settings.waitTime);
                     }
                 });

             }//end includeNav stuff
         });
     };
 })(jQuery);


 /**
 * ShliderWay plugin
 * ShliderWay, give it all you got. Mine today, fell in from the top. Only from the side
 * @author Phil Steer
 * https://github.com/pdincubus/jquery.ShliderWay
 */

 (function($) {
     $.fn.shliderWay = function(options) {

         // settings
         var settings = $.extend({
             'animationDuration' : 750,      //milliseconds
             'slideEasing' : 'swing',        //default options are swing or linear
             'waitTime' : 4000,              //duration of pause between shlides
         }, options);

         return this.each(function() {
             //figure out slides, and number of slides, set where we're at and figure out the width of a slide
             var slides = '#' + $(this).attr('id');
             var slide = slides + ' > li';
             var slidings = $(slide).size();
             var currentSlide = 1;
             var slideWidth = $(slide).width();

             $(slide).eq(0).css({
                 left: 0
             });

             //what to do when the timer function is called
             function autoSliding() {
                 if (currentSlide === slidings) {
                     currentSlide = 1;

                     $(slide).eq(currentSlide-1).animate({
                         left: 0
                     }, parseInt(settings.animationDuration,10), settings.slideEasing);

                     $(slide).last().animate({
                         left: '-' + slideWidth
                     }, parseInt(settings.animationDuration,10), settings.slideEasing).delay(settings.waitTime/2).animate({
                         left: slideWidth
                     }, 10);
                 }else {
                     $(slide).eq(currentSlide).animate({
                         left: 0
                     }, parseInt(settings.animationDuration,10), settings.slideEasing);

                     $(slide).eq(currentSlide-1).animate({
                         left: '-' + slideWidth
                     }, parseInt(settings.animationDuration,10), settings.slideEasing).delay(settings.waitTime/2).animate({
                         left: slideWidth
                     }, 10);

                     //increment the counter
                     currentSlide++;

                     $(slide).eq(currentSlide-1).css({
                         left: slideWidth
                     });
                 }
             }

             var autoSlideTimer = setInterval(autoSliding, settings.waitTime);
         });
     };
 })(jQuery);


 /**
  * Dropdownatron will convert a select box to something fancier
  *
  * @version 1.0
  * @author John Noel <john.noel@rckt.co.uk>
  * @package Doncaster Deaf Trust
  * @todo Keyboard shortcuts, focus styles (accessibility) etc.
  */

 !function($) {
     var Dropdownatron = function(elem, opts) {
         this.init('dropdownatron', elem, opts);
     };

     Dropdownatron.prototype = {
         constructor: Dropdownatron,
         init: function(type, elem, opts) {
             this.type = type;
             this.$element = $(elem);
             this.options = this.getOptions(opts);

             if (this.$element[0].tagName != 'SELECT') {
                 throw 'Cannot bind to anything other than SELECT elements';
             }

             this._build();

             var that = this;
             this.$element.on('change', function(e) {
                 that.select($(this).val());
             });
         },

         getOptions: function(opts) {
             return $.extend({}, $.fn[this.type].defaults, this.$element.data(), opts);
         },

         _build: function() {
             var that = this;
             this.$element.trigger('dropdownatron.pre_build');
             this.$element.hide().wrap($('<div/>').addClass('dropdownatron-container'));

             // because apparently wrap() obliterates any loosey references
             this.$container = this.$element.parent();

             // options
             this.$options = $('<ul/>').addClass('dropdownatron-options').appendTo(this.$container);
             this.$element.find('option').each(function() {
                 $('<li/>').text($(this).text()).data('val', $(this).attr('value'))
                     .attr('data-val', $(this).attr('value')).appendTo(that.$options).on({
                         'click': function(e) { that.onSelect(e); }
                     });
             });

             // selector
             $('<span/>').addClass('dropdownatron-select').appendTo(this.$container).on({
                 'click': function(e) { that.onToggle(e); }
             });

             // set the initially selected one
             var $toDisplay = this.$options.children().first(),
                 sel = this.$element.val();
             if (sel) {
                 var $selected = this.$options.children().filter(function() {
                     return $(this).data('val') == sel;
                 });

                 $toDisplay = ($selected.length > 0) ? $selected : $toDisplay;
             }

             // selected display
             $('<div/>').addClass('dropdownatron-selected')
                 .text($toDisplay.text()).data('val', $toDisplay.data('val'))
                 .attr('data-val', $toDisplay.data('val'))
                 .appendTo(this.$container).on({
                     'click': function(e) { that.onToggle(e); }
                 });

             this.$options.hide();
             this.select($toDisplay.data('val'));
             this.$element.trigger('dropdownatron.built');
         },

         /**
          * Return what is currently selected
          * @return string The currently selected value
          */
         selected: function() {
             return this.$container.find('.dropdownatron-selected').data('val');
         },

         onToggle: function(e) {
             e.preventDefault();
             e.stopPropagation();
             this.toggle();
         },

         /**
          * Toggle the opened/closed state of the dropdown
          * @return void
          */
         toggle: function() {
             this._event('toggled');
             if (this.$options.is(':visible')) {
                 this.close();
             } else {
                 this.open();
             }
         },

         /**
          * If the dropdown is closed, show it
          * @return void
          */
         open: function() {
             if (!this.$options.is(':visible') && !this.$options.is(':animated')) {
                 this._event('pre_open');
                 var height = this.$options.show().outerHeight(),
                     that = this;

                 this.$options.css('height', 0).animate({
                     'height': height
                 }, this.options.speed, this.options.easing, function() {
                     that._event('opened');
                 });

                 this.$container.addClass('shown');

                 $('body').on('click.dropdownatron', function(e) {
                     that.close();
                     $('body').off('click.dropdownatron');
                 });
             }
         },

         /**
          * If the dropdown is shown, close it
          * @return void
          */
         close: function() {
             if (this.$options.is(':visible') && !this.$options.is(':animated')) {
                 this._event('pre_close');
                 var height = this.$options.outerHeight(),
                     that = this;

                 this.$options.animate({
                     'height': 0
                 }, this.options.speed, this.options.easing, function() {
                     $(this).hide().css('height', height);
                     that._event('closed');
                 });

                 this.$container.removeClass('shown');
             }
         },

         onSelect: function(e) {
             e.preventDefault();
             e.stopPropagation();
             this.select($(e.target).data('val'));
         },

         /**
          * Select an option
          * @param string val The value to choose
          * @return void
          */
         select: function(val) {
             this.close();

             if (this.selected() == val) {
                 return;
             }

             var $selected = this.$options.children().filter(function() {
                 return $(this).data('val') == val;
             });

             if ($selected.length == 0) {
                 return;
             }

             $selected.addClass('on').siblings().removeClass('on');
             this.$container.find('.dropdownatron-selected').data('val', val).
                 text($selected.text());

             this.$element.val(val); // good ol' jQuery
             this._event('change');
         },

         _event: function(name) {
             this.$element.trigger('dropdownatron.'+name);
         }
     };

     $.fn.dropdownatron = function(option) {
         return this.each(function() {
             var $this = $(this),
                data = $this.data('dropdownatron'),
                options = typeof option == 'object' && option;

             if (!data) {
                 $this.data('dropdownatron', data = new Dropdownatron(this, options));
             }

             if (typeof option == 'string') {
                 data[option]();
             }
         });
     };

     $.fn.dropdownatron.defaults = {
         speed: 'fast',
         easing: 'linear'
     };
 }(window.jQuery);


 /*!
  * classie - class helper functions
  * from bonzo https://github.com/ded/bonzo
  *
  * classie.has( elem, 'my-class' ) -> true/false
  * classie.add( elem, 'my-new-class' )
  * classie.remove( elem, 'my-unwanted-class' )
  * classie.toggle( elem, 'my-class' )
  */

 /*jshint browser: true, strict: true, undef: true */
 /*global define: false */

 ( function( window ) {

 'use strict';

 // class helper functions from bonzo https://github.com/ded/bonzo

 function classReg( className ) {
   return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
 }

 // classList support for class management
 // altho to be fair, the api sucks because it won't accept multiple classes at once
 var hasClass, addClass, removeClass;

 if ( 'classList' in document.documentElement ) {
   hasClass = function( elem, c ) {
     return elem.classList.contains( c );
   };
   addClass = function( elem, c ) {
     elem.classList.add( c );
   };
   removeClass = function( elem, c ) {
     elem.classList.remove( c );
   };
 }
 else {
   hasClass = function( elem, c ) {
     return classReg( c ).test( elem.className );
   };
   addClass = function( elem, c ) {
     if ( !hasClass( elem, c ) ) {
       elem.className = elem.className + ' ' + c;
     }
   };
   removeClass = function( elem, c ) {
     elem.className = elem.className.replace( classReg( c ), ' ' );
   };
 }

 function toggleClass( elem, c ) {
   var fn = hasClass( elem, c ) ? removeClass : addClass;
   fn( elem, c );
 }

 var classie = {
   // full names
   hasClass: hasClass,
   addClass: addClass,
   removeClass: removeClass,
   toggleClass: toggleClass,
   // short names
   has: hasClass,
   add: addClass,
   remove: removeClass,
   toggle: toggleClass
 };

 // transport
 if ( typeof define === 'function' && define.amd ) {
   // AMD
   define( classie );
 } else {
   // browser global
   window.classie = classie;
 }

 })( window );




 /**
  * modalEffects.js v1.0.0
  * http://www.codrops.com
  *
  * Licensed under the MIT license.
  * http://www.opensource.org/licenses/mit-license.php
  *
  * Copyright 2013, Codrops
  * http://www.codrops.com
  */
 var ModalEffects = (function() {

    function init() {

        var overlay = document.querySelector( '.md-overlay' );

        [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

            var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
                close = modal.querySelector( '.md-close' );

            function removeModal( hasPerspective ) {
                classie.remove( modal, 'md-show' );

                if( hasPerspective ) {
                    classie.remove( document.documentElement, 'md-perspective' );
                }
            }

            function removeModalHandler() {
                removeModal( classie.has( el, 'md-setperspective' ) );
            }

            el.addEventListener( 'click', function( ev ) {
                classie.add( modal, 'md-show' );
                overlay.removeEventListener( 'click', removeModalHandler );
                overlay.addEventListener( 'click', removeModalHandler );

                if( classie.has( el, 'md-setperspective' ) ) {
                    setTimeout( function() {
                        classie.add( document.documentElement, 'md-perspective' );
                    }, 25 );
                }
            });

            close.addEventListener( 'click', function( ev ) {
                ev.stopPropagation();
                removeModalHandler();
            });

        } );

    }

    init();

 })();








 /* ***** BEGIN LICENSE BLOCK *****
  * Version: MPL 1.1/GPL 2.0/LGPL 2.1
  *
  * The contents of this file are subject to the Mozilla Public License Version
  * 1.1 (the "License"); you may not use this file except in compliance with
  * the License. You may obtain a copy of the License at
  * http://www.mozilla.org/MPL/
  *
  * Software distributed under the License is distributed on an "AS IS" basis,
  * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
  * for the specific language governing rights and limitations under the
  * License.
  *
  * The Original Code is mozilla.org code.
  *
  * The Initial Developer of the Original Code is
  * Netscape Communications Corporation.
  * Portions created by the Initial Developer are Copyright (C) 1998
  * the Initial Developer. All Rights Reserved.
  *
  * Contributor(s):
  *   emk <VYV03354@nifty.ne.jp>
  *   Daniel Glazman <glazman@netscape.com>
  *   L. David Baron <dbaron@dbaron.org>
  *   Boris Zbarsky <bzbarsky@mit.edu>
  *   Mats Palmgren <mats.palmgren@bredband.net>
  *   Christian Biesinger <cbiesinger@web.de>
  *   Jeff Walden <jwalden+code@mit.edu>
  *   Jonathon Jongsma <jonathon.jongsma@collabora.co.uk>, Collabora Ltd.
  *   Siraj Razick <siraj.razick@collabora.co.uk>, Collabora Ltd.
  *   Daniel Glazman <daniel.glazman@disruptive-innovations.com>
  *
  * Alternatively, the contents of this file may be used under the terms of
  * either of the GNU General Public License Version 2 or later (the "GPL"),
  * or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
  * in which case the provisions of the GPL or the LGPL are applicable instead
  * of those above. If you wish to allow use of your version of this file only
  * under the terms of either the GPL or the LGPL, and not to allow others to
  * use your version of this file under the terms of the MPL, indicate your
  * decision by deleting the provisions above and replace them with the notice
  * and other provisions required by the GPL or the LGPL. If you do not delete
  * the provisions above, a recipient may use your version of this file under
  * the terms of any one of the MPL, the GPL or the LGPL.
  *
  * ***** END LICENSE BLOCK ***** */

 ;
 var kCHARSET_RULE_MISSING_SEMICOLON = "Missing semicolon at the end of @charset rule";
 var kCHARSET_RULE_CHARSET_IS_STRING = "The charset in the @charset rule should be a string";
 var kCHARSET_RULE_MISSING_WS = "Missing mandatory whitespace after @charset";
 var kIMPORT_RULE_MISSING_URL = "Missing URL in @import rule";
 var kURL_EOF = "Unexpected end of stylesheet";
 var kURL_WS_INSIDE = "Multiple tokens inside a url() notation";
 var kVARIABLES_RULE_POSITION = "@variables rule invalid at this position in the stylesheet";
 var kIMPORT_RULE_POSITION = "@import rule invalid at this position in the stylesheet";
 var kNAMESPACE_RULE_POSITION = "@namespace rule invalid at this position in the stylesheet";
 var kCHARSET_RULE_CHARSET_SOF = "@charset rule invalid at this position in the stylesheet";
 var kUNKNOWN_AT_RULE = "Unknow @-rule";

 /* FROM http://peter.sh/data/vendor-prefixed-css.php?js=1 */

 var kENGINES = [
   "webkit",
   "presto",
   "trident",
   "generic"
 ];

 var kCSS_VENDOR_VALUES = {
   "-moz-box":             {"webkit": "-webkit-box",        "presto": "", "trident": "", "generic": "box" },
   "-moz-inline-box":      {"webkit": "-webkit-inline-box", "presto": "", "trident": "", "generic": "inline-box" },
   "-moz-initial":         {"webkit": "",                   "presto": "", "trident": "", "generic": "initial" },
   "-moz-linear-gradient": {"webkit20110101": FilterLinearGradientForOutput,
                            "webkit": FilterLinearGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterLinearGradientForOutput },
   "-moz-radial-gradient": {"webkit20110101": FilterRadialGradientForOutput,
                            "webkit": FilterRadialGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterRadialGradientForOutput },
   "-moz-repeating-linear-gradient": {"webkit20110101": "",
                            "webkit": FilterRepeatingGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterRepeatingGradientForOutput },
   "-moz-repeating-radial-gradient": {"webkit20110101": "",
                            "webkit": FilterRepeatingGradientForOutput,
                            "presto": "",
                            "trident": "",
                            "generic": FilterRepeatingGradientForOutput }
 };

 var kCSS_VENDOR_PREFIXES = {"lastUpdate":1304175007,"properties":[{"gecko":"","webkit":"","presto":"","trident":"-ms-accelerator","status":"P"},
 {"gecko":"","webkit":"","presto":"-wap-accesskey","trident":"","status":""},
 {"gecko":"-moz-animation","webkit":"-webkit-animation","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-delay","webkit":"-webkit-animation-delay","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-direction","webkit":"-webkit-animation-direction","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-duration","webkit":"-webkit-animation-duration","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-fill-mode","webkit":"-webkit-animation-fill-mode","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-animation-iteration-count","webkit":"-webkit-animation-iteration-count","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-name","webkit":"-webkit-animation-name","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-play-state","webkit":"-webkit-animation-play-state","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-animation-timing-function","webkit":"-webkit-animation-timing-function","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-appearance","webkit":"-webkit-appearance","presto":"","trident":"","status":"CR"},
 {"gecko":"","webkit":"-webkit-backface-visibility","presto":"","trident":"","status":"WD"},
 {"gecko":"background-clip","webkit":"-webkit-background-clip","presto":"background-clip","trident":"background-clip","status":"WD"},
 {"gecko":"","webkit":"-webkit-background-composite","presto":"","trident":"","status":""},
 {"gecko":"-moz-background-inline-policy","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"background-origin","webkit":"-webkit-background-origin","presto":"background-origin","trident":"background-origin","status":"WD"},
 {"gecko":"","webkit":"background-position-x","presto":"","trident":"-ms-background-position-x","status":""},
 {"gecko":"","webkit":"background-position-y","presto":"","trident":"-ms-background-position-y","status":""},
 {"gecko":"background-size","webkit":"-webkit-background-size","presto":"background-size","trident":"background-size","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-behavior","status":""},
 {"gecko":"-moz-binding","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-block-progression","status":""},
 {"gecko":"","webkit":"-webkit-border-after","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-after-color","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-after-style","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-after-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before-color","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before-style","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-before-width","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-bottom-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"border-bottom-left-radius","webkit":"-webkit-border-bottom-left-radius","presto":"border-bottom-left-radius","trident":"border-bottom-left-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-bottom-left-radius = border-bottom-left-radius","presto":"","trident":"","status":""},
 {"gecko":"border-bottom-right-radius","webkit":"-webkit-border-bottom-right-radius","presto":"border-bottom-right-radius","trident":"border-bottom-right-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-bottom-right-radius = border-bottom-right-radius","presto":"","trident":"","status":""},
 {"gecko":"-moz-border-end","webkit":"-webkit-border-end","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-end-color","webkit":"-webkit-border-end-color","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-end-style","webkit":"-webkit-border-end-style","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-end-width","webkit":"-webkit-border-end-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-border-fit","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-border-horizontal-spacing","presto":"","trident":"","status":""},
 {"gecko":"-moz-border-image","webkit":"-webkit-border-image","presto":"-o-border-image","trident":"","status":"WD"},
 {"gecko":"-moz-border-left-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"border-radius","webkit":"-webkit-border-radius","presto":"border-radius","trident":"border-radius","status":"WD"},
 {"gecko":"-moz-border-right-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-border-start","webkit":"-webkit-border-start","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-start-color","webkit":"-webkit-border-start-color","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-start-style","webkit":"-webkit-border-start-style","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-start-width","webkit":"-webkit-border-start-width","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-border-top-colors","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"border-top-left-radius","webkit":"-webkit-border-top-left-radius","presto":"border-top-left-radius","trident":"border-top-left-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-top-left-radius = border-top-left-radius","presto":"","trident":"","status":""},
 {"gecko":"border-top-right-radius","webkit":"-webkit-border-top-right-radius","presto":"border-top-right-radius","trident":"border-top-right-radius","status":"WD"},
 {"gecko":"","webkit":"-webkit-border-top-right-radius = border-top-right-radius","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-border-vertical-spacing","presto":"","trident":"","status":""},
 {"gecko":"-moz-box-align","webkit":"-webkit-box-align","presto":"","trident":"-ms-box-align","status":"WD"},
 {"gecko":"-moz-box-direction","webkit":"-webkit-box-direction","presto":"","trident":"-ms-box-direction","status":"WD"},
 {"gecko":"-moz-box-flex","webkit":"-webkit-box-flex","presto":"","trident":"-ms-box-flex","status":"WD"},
 {"gecko":"","webkit":"-webkit-box-flex-group","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-box-line-progression","status":""},
 {"gecko":"","webkit":"-webkit-box-lines","presto":"","trident":"-ms-box-lines","status":"WD"},
 {"gecko":"-moz-box-ordinal-group","webkit":"-webkit-box-ordinal-group","presto":"","trident":"-ms-box-ordinal-group","status":"WD"},
 {"gecko":"-moz-box-orient","webkit":"-webkit-box-orient","presto":"","trident":"-ms-box-orient","status":"WD"},
 {"gecko":"-moz-box-pack","webkit":"-webkit-box-pack","presto":"","trident":"-ms-box-pack","status":"WD"},
 {"gecko":"","webkit":"-webkit-box-reflect","presto":"","trident":"","status":""},
 {"gecko":"box-shadow","webkit":"-webkit-box-shadow","presto":"box-shadow","trident":"box-shadow","status":"WD"},
 {"gecko":"-moz-box-sizing","webkit":"box-sizing","presto":"box-sizing","trident":"","status":"CR"},
 {"gecko":"","webkit":"-webkit-box-sizing = box-sizing","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-caption-side = caption-side","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-color-correction","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-column-break-after","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-column-break-before","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-column-break-inside","presto":"","trident":"","status":""},
 {"gecko":"-moz-column-count","webkit":"-webkit-column-count","presto":"column-count","trident":"column-count","status":"CR"},
 {"gecko":"-moz-column-gap","webkit":"-webkit-column-gap","presto":"column-gap","trident":"column-gap","status":"CR"},
 {"gecko":"-moz-column-rule","webkit":"-webkit-column-rule","presto":"column-rule","trident":"column-rule","status":"CR"},
 {"gecko":"-moz-column-rule-color","webkit":"-webkit-column-rule-color","presto":"column-rule-color","trident":"column-rule-color","status":"CR"},
 {"gecko":"-moz-column-rule-style","webkit":"-webkit-column-rule-style","presto":"column-rule-style","trident":"column-rule-style","status":"CR"},
 {"gecko":"-moz-column-rule-width","webkit":"-webkit-column-rule-width","presto":"column-rule-width","trident":"column-rule-width","status":"CR"},
 {"gecko":"","webkit":"-webkit-column-span","presto":"column-span","trident":"column-span","status":"CR"},
 {"gecko":"-moz-column-width","webkit":"-webkit-column-width","presto":"column-width","trident":"column-width","status":"CR"},
 {"gecko":"","webkit":"-webkit-columns","presto":"columns","trident":"columns","status":"CR"},
 {"gecko":"","webkit":"-webkit-dashboard-region","presto":"-apple-dashboard-region","trident":"","status":""},
 {"gecko":"filter","webkit":"","presto":"filter","trident":"-ms-filter","status":""},
 {"gecko":"-moz-float-edge","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"-o-focus-opacity","trident":"","status":""},
 {"gecko":"-moz-font-feature-settings","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-font-language-override","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-font-size-delta","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-font-smoothing","presto":"","trident":"","status":""},
 {"gecko":"-moz-force-broken-image-icon","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-align","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-span","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-columns","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-layer","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-align","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-span","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-grid-rows","status":"WD"},
 {"gecko":"","webkit":"-webkit-highlight","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-hyphenate-character","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-hyphenate-limit-after","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-hyphenate-limit-before","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-hyphens","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-epub-hyphens = -webkit-hyphens","presto":"","trident":"","status":""},
 {"gecko":"-moz-image-region","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"ime-mode","webkit":"","presto":"","trident":"-ms-ime-mode","status":""},
 {"gecko":"","webkit":"","presto":"-wap-input-format","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-wap-input-required","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-interpolation-mode","status":""},
 {"gecko":"","webkit":"","presto":"-xv-interpret-as","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-flow","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-char","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-line","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-mode","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-type","status":""},
 {"gecko":"","webkit":"-webkit-line-box-contain","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-line-break","presto":"","trident":"-ms-line-break","status":""},
 {"gecko":"","webkit":"-webkit-line-clamp","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-line-grid-mode","status":""},
 {"gecko":"","webkit":"","presto":"-o-link","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-o-link-source","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-locale","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-logical-height","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-logical-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-after","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-after-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-margin-before","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-before-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-margin-bottom-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-margin-collapse","presto":"","trident":"","status":""},
 {"gecko":"-moz-margin-end","webkit":"-webkit-margin-end","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-margin-start","webkit":"-webkit-margin-start","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-margin-top-collapse","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-marquee","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-wap-marquee-dir","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-marquee-direction","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-marquee-increment","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-wap-marquee-loop","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-marquee-repetition","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-marquee-speed","presto":"-wap-marquee-speed","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-marquee-style","presto":"-wap-marquee-style","trident":"","status":"WD"},
 {"gecko":"mask","webkit":"-webkit-mask","presto":"mask","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-attachment","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-box-image","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-clip","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-composite","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-image","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-origin","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-position","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-position-x","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-position-y","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-repeat","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-repeat-x","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-repeat-y","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-mask-size","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-match-nearest-mail-blockquote-color","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-max-logical-height","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-max-logical-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-min-logical-height","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-min-logical-width","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"","presto":"-o-mini-fold","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-nbsp-mode","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"-o-object-fit","trident":"","status":"ED"},
 {"gecko":"","webkit":"","presto":"-o-object-position","trident":"","status":"ED"},
 {"gecko":"opacity","webkit":"-webkit-opacity","presto":"opacity","trident":"opacity","status":"WD"},
 {"gecko":"","webkit":"-webkit-opacity = opacity","presto":"","trident":"","status":""},
 {"gecko":"-moz-outline-radius","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-bottomleft","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-bottomright","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-topleft","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-outline-radius-topright","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"overflow-x","webkit":"overflow-x","presto":"overflow-x","trident":"-ms-overflow-x","status":"WD"},
 {"gecko":"overflow-y","webkit":"overflow-y","presto":"overflow-y","trident":"-ms-overflow-y","status":"WD"},
 {"gecko":"","webkit":"-webkit-padding-after","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-padding-before","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-padding-end","webkit":"-webkit-padding-end","presto":"","trident":"","status":"ED"},
 {"gecko":"-moz-padding-start","webkit":"-webkit-padding-start","presto":"","trident":"","status":"ED"},
 {"gecko":"","webkit":"-webkit-perspective","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-perspective-origin","presto":"","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-perspective-origin-x","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-perspective-origin-y","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-phonemes","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-rtl-ordering","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-script-level","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-script-min-size","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-script-size-multiplier","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"scrollbar-3dlight-color","trident":"-ms-scrollbar-3dlight-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-arrow-color","trident":"-ms-scrollbar-arrow-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-base-color","trident":"-ms-scrollbar-base-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-darkshadow-color","trident":"-ms-scrollbar-darkshadow-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-face-color","trident":"-ms-scrollbar-face-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-highlight-color","trident":"-ms-scrollbar-highlight-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-shadow-color","trident":"-ms-scrollbar-shadow-color","status":"P"},
 {"gecko":"","webkit":"","presto":"scrollbar-track-color","trident":"-ms-scrollbar-track-color","status":"P"},
 {"gecko":"-moz-stack-sizing","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-svg-shadow","presto":"","trident":"","status":""},
 {"gecko":"-moz-tab-size","webkit":"","presto":"-o-tab-size","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-o-table-baseline","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-tap-highlight-color","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-align-last","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-autospace","status":"WD"},
 {"gecko":"-moz-text-blink","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-combine","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-combine = -webkit-text-combine","presto":"","trident":"","status":""},
 {"gecko":"-moz-text-decoration-color","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-text-decoration-line","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"-moz-text-decoration-style","webkit":"","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-decorations-in-effect","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-emphasis = -webkit-text-emphasis","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis-color","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-emphasis-color = -webkit-text-emphasis-color","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis-position","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-emphasis-style","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-emphasis-style = -webkit-text-emphasis-style","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-webkit-text-fill-color","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-justify","status":"WD"},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-kashida-space","status":"P"},
 {"gecko":"","webkit":"-webkit-text-orientation","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"-epub-text-orientation = -webkit-text-orientation","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"text-overflow","presto":"text-overflow","trident":"-ms-text-overflow","status":"WD"},
 {"gecko":"","webkit":"-webkit-text-security","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-text-size-adjust","presto":"","trident":"-ms-text-size-adjust","status":""},
 {"gecko":"","webkit":"-webkit-text-stroke","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-text-stroke-color","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-text-stroke-width","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-epub-text-transform = text-transform","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"","trident":"-ms-text-underline-position","status":"P"},
 {"gecko":"","webkit":"-webkit-touch-callout","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-transform","webkit":"-webkit-transform","presto":"-o-transform","trident":"-ms-transform","status":"WD"},
 {"gecko":"-moz-transform-origin","webkit":"-webkit-transform-origin","presto":"-o-transform-origin","trident":"-ms-transform-origin","status":"WD"},
 {"gecko":"","webkit":"-webkit-transform-origin-x","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-transform-origin-y","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-transform-origin-z","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"-webkit-transform-style","presto":"","trident":"","status":"WD"},
 {"gecko":"-moz-transition","webkit":"-webkit-transition","presto":"-o-transition","trident":"","status":"WD"},
 {"gecko":"-moz-transition-delay","webkit":"-webkit-transition-delay","presto":"-o-transition-delay","trident":"","status":"WD"},
 {"gecko":"-moz-transition-duration","webkit":"-webkit-transition-duration","presto":"-o-transition-duration","trident":"","status":"WD"},
 {"gecko":"-moz-transition-property","webkit":"-webkit-transition-property","presto":"-o-transition-property","trident":"","status":"WD"},
 {"gecko":"-moz-transition-timing-function","webkit":"-webkit-transition-timing-function","presto":"-o-transition-timing-function","trident":"","status":"WD"},
 {"gecko":"","webkit":"-webkit-user-drag","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-focus","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-input","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-modify","webkit":"-webkit-user-modify","presto":"","trident":"","status":"P"},
 {"gecko":"-moz-user-select","webkit":"-webkit-user-select","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"","presto":"-xv-voice-balance","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-duration","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-pitch","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-pitch-range","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-rate","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-stress","trident":"","status":""},
 {"gecko":"","webkit":"","presto":"-xv-voice-volume","trident":"","status":""},
 {"gecko":"-moz-window-shadow","webkit":"","presto":"","trident":"","status":"P"},
 {"gecko":"","webkit":"word-break","presto":"","trident":"-ms-word-break","status":"WD"},
 {"gecko":"","webkit":"-epub-word-break = word-break","presto":"","trident":"","status":""},
 {"gecko":"word-wrap","webkit":"word-wrap","presto":"word-wrap","trident":"-ms-word-wrap","status":"WD"},
 {"gecko":"","webkit":"-webkit-writing-mode","presto":"writing-mode","trident":"-ms-writing-mode","status":"ED"},
 {"gecko":"","webkit":"-epub-writing-mode = -webkit-writing-mode","presto":"","trident":"","status":""},
 {"gecko":"","webkit":"zoom","presto":"","trident":"-ms-zoom","status":""}]};

 var kCSS_PREFIXED_VALUE = [
   {"gecko": "-moz-box", "webkit": "-moz-box", "presto": "", "trident": "", "generic": "box"}
 ];

 var CssInspector = {

   mVENDOR_PREFIXES: null,

   kEXPORTS_FOR_GECKO:   true,
   kEXPORTS_FOR_WEBKIT:  true,
   kEXPORTS_FOR_PRESTO:  true,
   kEXPORTS_FOR_TRIDENT: true,

   cleanPrefixes: function()
   {
     this.mVENDOR_PREFIXES = null;
   },

   prefixesForProperty: function(aProperty)
   {
     if (!this.mVENDOR_PREFIXES) {

       this.mVENDOR_PREFIXES = {};
       for (var i = 0; i < kCSS_VENDOR_PREFIXES.properties.length; i++) {
         var p = kCSS_VENDOR_PREFIXES.properties[i];
         if (p.gecko && (p.webkit || p.presto || p.trident)) {
           var o = {};
           if (this.kEXPORTS_FOR_GECKO) o[p.gecko] = true;
           if (this.kEXPORTS_FOR_WEBKIT && p.webkit)  o[p.webkit] = true;
           if (this.kEXPORTS_FOR_PRESTO && p.presto)  o[p.presto] = true;
           if (this.kEXPORTS_FOR_TRIDENT && p.trident) o[p.trident] = true;
           this.mVENDOR_PREFIXES[p.gecko] = [];
           for (var j in o)
             this.mVENDOR_PREFIXES[p.gecko].push(j)
         }
       }
     }
     if (aProperty in this.mVENDOR_PREFIXES)
       return this.mVENDOR_PREFIXES[aProperty].sort();
     return null;
   },

   parseColorStop: function(parser, token)
   {
     var color = parser.parseColor(token);
     var position = "";
     if (!color)
       return null;
     token = parser.getToken(true, true);
     if (token.isPercentage() ||
         token.isDimensionOfUnit("cm") ||
         token.isDimensionOfUnit("mm") ||
         token.isDimensionOfUnit("in") ||
         token.isDimensionOfUnit("pc") ||
         token.isDimensionOfUnit("px") ||
         token.isDimensionOfUnit("em") ||
         token.isDimensionOfUnit("ex") ||
         token.isDimensionOfUnit("pt")) {
       position = token.value;
       token = parser.getToken(true, true);
     }
     return { color: color, position: position }
   },

   parseGradient: function (parser, token)
   {
     var isRadial = false;
     var gradient = { isRepeating: false };
     if (token.isNotNull()) {
       if (token.isFunction("-moz-linear-gradient(") ||
           token.isFunction("-moz-radial-gradient(") ||
           token.isFunction("-moz-repeating-linear-gradient(") ||
           token.isFunction("-moz-repeating-radial-gradient(")) {
         if (token.isFunction("-moz-radial-gradient(") ||
             token.isFunction("-moz-repeating-radial-gradient(")) {
           gradient.isRadial = true;
         }
         if (token.isFunction("-moz-repeating-linear-gradient(") ||
             token.isFunction("-moz-repeating-radial-gradient(")) {
           gradient.isRepeating = true;
         }


         token = parser.getToken(true, true);
         var haveGradientLine = false;
         var foundHorizPosition = false;
         var haveAngle = false;

         if (token.isAngle()) {
           gradient.angle = token.value;
           haveGradientLine = true;
           haveAngle = true;
           token = parser.getToken(true, true);
         }

         if (token.isLength()
             || token.isIdent("top")
             || token.isIdent("center")
             || token.isIdent("bottom")
             || token.isIdent("left")
             || token.isIdent("right")) {
           haveGradientLine = true;
           if (token.isLength()
             || token.isIdent("left")
             || token.isIdent("right")) {
             foundHorizPosition = true;
           }
           gradient.position = token.value;
           token = parser.getToken(true, true);
         }

         if (haveGradientLine) {
           if (!haveAngle && token.isAngle()) { // we have an angle here
             gradient.angle = token.value;
             haveAngle = true;
             token = parser.getToken(true, true);
           }

           else if (token.isLength()
                   || (foundHorizPosition && (token.isIdent("top")
                                              || token.isIdent("center")
                                              || token.isIdent("bottom")))
                   || (!foundHorizPosition && (token.isLength()
                                               || token.isIdent("top")
                                               || token.isIdent("center")
                                               || token.isIdent("bottom")
                                               || token.isIdent("left")
                                               || token.isIdent("right")))) {
             gradient.position = ("position" in gradient) ? gradient.position + " ": "";
             gradient.position += token.value;
             token = parser.getToken(true, true);
           }

           if (!haveAngle && token.isAngle()) { // we have an angle here
             gradient.angle = token.value;
             haveAngle = true;
             token = parser.getToken(true, true);
           }

           // we must find a comma here
           if (!token.isSymbol(","))
             return null;
           token = parser.getToken(true, true);
         }

         // ok... Let's deal with the rest now
         if (gradient.isRadial) {
           if (token.isIdent("circle") ||
               token.isIdent("ellipse")) {
             gradient.shape = token.value;
             token = parser.getToken(true, true);
           }
           if (token.isIdent("closest-side") ||
                    token.isIdent("closest-corner") ||
                    token.isIdent("farthest-side") ||
                    token.isIdent("farthest-corner") ||
                    token.isIdent("contain") ||
                    token.isIdent("cover")) {
             gradient.size = token.value;
             token = parser.getToken(true, true);
           }
           if (!("shape" in gradient) &&
               (token.isIdent("circle") ||
                token.isIdent("ellipse"))) {
             // we can still have the second value...
             gradient.shape = token.value;
             token = parser.getToken(true, true);
           }
           if ((("shape" in gradient) || ("size" in gradient)) && !token.isSymbol(","))
             return null;
           else if (("shape" in gradient) || ("size" in gradient))
             token = parser.getToken(true, true);
         }

         // now color stops...
         var stop1 = this.parseColorStop(parser, token);
         if (!stop1)
           return null;
         token = parser.currentToken();
         if (!token.isSymbol(","))
           return null;
         token = parser.getToken(true, true);
         var stop2 = this.parseColorStop(parser, token);
         if (!stop2)
           return null;
         token = parser.currentToken();
         if (token.isSymbol(",")) {
           token = parser.getToken(true, true);
         }
         // ok we have at least two color stops
         gradient.stops = [stop1, stop2];
         while (!token.isSymbol(")")) {
           var colorstop = this.parseColorStop(parser, token);
           if (!colorstop)
             return null;
           token = parser.currentToken();
           if (!token.isSymbol(")") && !token.isSymbol(","))
             return null;
           if (token.isSymbol(","))
             token = parser.getToken(true, true);
           gradient.stops.push(colorstop);
         }
         return gradient;
       }
     }
     return null;
   },

   parseBoxShadows: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var shadows = [];
     var token = parser.getToken(true, true);
     var color = "", blurRadius = "0px", offsetX = "0px", offsetY = "0px", spreadRadius = "0px";
     var inset = false;
     while (token.isNotNull()) {
       if (token.isIdent("none")) {
         shadows.push( { none: true } );
         token = parser.getToken(true, true);
       }
       else {
         if (token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetX = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetX = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var blurRadius = token.value;
           token = parser.getToken(true, true);
         }

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var spreadRadius = token.value;
           token = parser.getToken(true, true);
         }

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         if (token.isFunction("rgb(") ||
             token.isFunction("rgba(") ||
             token.isFunction("hsl(") ||
             token.isFunction("hsla(") ||
             token.isSymbol("#") ||
             token.isIdent()) {
           var color = parser.parseColor(token);
           token = parser.getToken(true, true);
         }

         if (!inset && token.isIdent('inset')) {
           inset = true;
           token = parser.getToken(true, true);
         }

         shadows.push( { none: false,
                         color: color,
                         offsetX: offsetX, offsetY: offsetY,
                         blurRadius: blurRadius,
                         spreadRadius: spreadRadius } );

         if (token.isSymbol(",")) {
           inset = false;
           color = "";
           blurRadius = "0px";
           spreadRadius = "0px"
           offsetX = "0px";
           offsetY = "0px";
           token = parser.getToken(true, true);
         }
         else if (!token.isNotNull())
           return shadows;
         else
           return [];
       }
     }
     return shadows;
   },

   parseTextShadows: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var shadows = [];
     var token = parser.getToken(true, true);
     var color = "", blurRadius = "0px", offsetX = "0px", offsetY = "0px";
     while (token.isNotNull()) {
       if (token.isIdent("none")) {
         shadows.push( { none: true } );
         token = parser.getToken(true, true);
       }
       else {
         if (token.isFunction("rgb(") ||
             token.isFunction("rgba(") ||
             token.isFunction("hsl(") ||
             token.isFunction("hsla(") ||
             token.isSymbol("#") ||
             token.isIdent()) {
           var color = parser.parseColor(token);
           token = parser.getToken(true, true);
         }
         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetX = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];
         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var offsetY = token.value;
           token = parser.getToken(true, true);
         }
         else
           return [];
         if (token.isPercentage() ||
             token.isDimensionOfUnit("cm") ||
             token.isDimensionOfUnit("mm") ||
             token.isDimensionOfUnit("in") ||
             token.isDimensionOfUnit("pc") ||
             token.isDimensionOfUnit("px") ||
             token.isDimensionOfUnit("em") ||
             token.isDimensionOfUnit("ex") ||
             token.isDimensionOfUnit("pt")) {
           var blurRadius = token.value;
           token = parser.getToken(true, true);
         }
         if (!color &&
             (token.isFunction("rgb(") ||
              token.isFunction("rgba(") ||
              token.isFunction("hsl(") ||
              token.isFunction("hsla(") ||
              token.isSymbol("#") ||
              token.isIdent())) {
           var color = parser.parseColor(token);
           token = parser.getToken(true, true);
         }

         shadows.push( { none: false,
                         color: color,
                         offsetX: offsetX, offsetY: offsetY,
                         blurRadius: blurRadius } );

         if (token.isSymbol(",")) {
           color = "";
           blurRadius = "0px";
           offsetX = "0px";
           offsetY = "0px";
           token = parser.getToken(true, true);
         }
         else if (!token.isNotNull())
           return shadows;
         else
           return [];
       }
     }
     return shadows;
   },

   parseBackgroundImages: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var backgrounds = [];
     var token = parser.getToken(true, true);
     while (token.isNotNull()) {
       /*if (token.isFunction("rgb(") ||
           token.isFunction("rgba(") ||
           token.isFunction("hsl(") ||
           token.isFunction("hsla(") ||
           token.isSymbol("#") ||
           token.isIdent()) {
         var color = parser.parseColor(token);
         backgrounds.push( { type: "color", value: color });
         token = parser.getToken(true, true);
       }
       else */
       if (token.isFunction("url(")) {
         token = parser.getToken(true, true);
         var urlContent = parser.parseURL(token);
         backgrounds.push( { type: "image", value: "url(" + urlContent });
         token = parser.getToken(true, true);
       }
       else if (token.isFunction("-moz-linear-gradient(") ||
                token.isFunction("-moz-radial-gradient(") ||
                token.isFunction("-moz-repeating-linear-gradient(") ||
                token.isFunction("-moz-repeating-radial-gradient(")) {
         var gradient = this.parseGradient(parser, token);
         backgrounds.push( { type: gradient.isRadial ? "radial-gradient" : "linear-gradient", value: gradient });
         token = parser.getToken(true, true);
       }
       else
         return null;
       if (token.isSymbol(",")) {
         token = parser.getToken(true, true);
         if (!token.isNotNull())
           return null;
       }
     }
     return backgrounds;
   },

   serializeGradient: function(gradient)
   {
     var s = gradient.isRadial
               ? (gradient.isRepeating ? "-moz-repeating-radial-gradient(" : "-moz-radial-gradient(" )
               : (gradient.isRepeating ? "-moz-repeating-linear-gradient(" : "-moz-linear-gradient(" );
     if (gradient.angle || gradient.position)
       s += (gradient.angle ? gradient.angle + " ": "") +
            (gradient.position ? gradient.position : "") +
            ", ";
     if (gradient.isRadial && (gradient.shape || gradient.size))
       s += (gradient.shape ? gradient.shape : "") +
            " " +
            (gradient.size ? gradient.size : "") +
            ", ";
     for (var i = 0; i < gradient.stops.length; i++) {
       var colorstop = gradient.stops[i];
       s += colorstop.color + (colorstop.position ? " " + colorstop.position : "");
       if (i != gradient.stops.length -1)
         s += ", ";
     }
     s += ")";
     return s;
   },

   parseBorderImage: function(aString)
   {
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var borderImage = {url: "", offsets: [], widths: [], sizes: []};
     var token = parser.getToken(true, true);
     if (token.isFunction("url(")) {
       token = parser.getToken(true, true);
       var urlContent = parser.parseURL(token);
       if (urlContent) {
         borderImage.url = urlContent.substr(0, urlContent.length - 1).trim();
         if ((borderImage.url[0] == '"' && borderImage.url[borderImage.url.length - 1] == '"') ||
              (borderImage.url[0] == "'" && borderImage.url[borderImage.url.length - 1] == "'"))
         borderImage.url = borderImage.url.substr(1, borderImage.url.length - 2);
       }
       else
         return null;
     }
     else
       return null;

     token = parser.getToken(true, true);
     if (token.isNumber() || token.isPercentage())
       borderImage.offsets.push(token.value);
     else
       return null;
     var i;
     for (i= 0; i < 3; i++) {
       token = parser.getToken(true, true);
       if (token.isNumber() || token.isPercentage())
         borderImage.offsets.push(token.value);
       else
         break;
     }
     if (i == 3)
       token = parser.getToken(true, true);

     if (token.isSymbol("/")) {
       token = parser.getToken(true, true);
       if (token.isDimension()
           || token.isNumber("0")
           || (token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES))
         borderImage.widths.push(token.value);
       else
         return null;

       for (var i = 0; i < 3; i++) {
         token = parser.getToken(true, true);
         if (token.isDimension()
             || token.isNumber("0")
             || (token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES))
           borderImage.widths.push(token.value);
         else
           break;
       }
       if (i == 3)
         token = parser.getToken(true, true);
     }

     for (var i = 0; i < 2; i++) {
       if (token.isIdent("stretch")
           || token.isIdent("repeat")
           || token.isIdent("round"))
         borderImage.sizes.push(token.value);
       else if (!token.isNotNull())
         return borderImage;
       else
         return null;
       token = parser.getToken(true, true);
     }
     if (!token.isNotNull())
       return borderImage;

     return null;
   },

   parseMediaQuery: function(aString)
   {
     var kCONSTRAINTS = {
       "width": true,
       "min-width": true,
       "max-width": true,
       "height": true,
       "min-height": true,
       "max-height": true,
       "device-width": true,
       "min-device-width": true,
       "max-device-width": true,
       "device-height": true,
       "min-device-height": true,
       "max-device-height": true,
       "orientation": true,
       "aspect-ratio": true,
       "min-aspect-ratio": true,
       "max-aspect-ratio": true,
       "device-aspect-ratio": true,
       "min-device-aspect-ratio": true,
       "max-device-aspect-ratio": true,
       "color": true,
       "min-color": true,
       "max-color": true,
       "color-index": true,
       "min-color-index": true,
       "max-color-index": true,
       "monochrome": true,
       "min-monochrome": true,
       "max-monochrome": true,
       "resolution": true,
       "min-resolution": true,
       "max-resolution": true,
       "scan": true,
       "grid": true
     };
     var parser = new CSSParser();
     parser._init();
     parser.mPreserveWS       = false;
     parser.mPreserveComments = false;
     parser.mPreservedTokens = [];
     parser.mScanner.init(aString);

     var m = {amplifier: "", medium: "", constraints: []};
     var token = parser.getToken(true, true);

     if (token.isIdent("all") ||
         token.isIdent("aural") ||
         token.isIdent("braille") ||
         token.isIdent("handheld") ||
         token.isIdent("print") ||
         token.isIdent("projection") ||
         token.isIdent("screen") ||
         token.isIdent("tty") ||
         token.isIdent("tv")) {
        m.medium = token.value;
        token = parser.getToken(true, true);
     }
     else if (token.isIdent("not") || token.isIdent("only")) {
       m.amplifier = token.value;
       token = parser.getToken(true, true);
       if (token.isIdent("all") ||
           token.isIdent("aural") ||
           token.isIdent("braille") ||
           token.isIdent("handheld") ||
           token.isIdent("print") ||
           token.isIdent("projection") ||
           token.isIdent("screen") ||
           token.isIdent("tty") ||
           token.isIdent("tv")) {
          m.medium = token.value;
          token = parser.getToken(true, true);
       }
       else
         return null;
     }

     if (m.medium) {
       if (!token.isNotNull())
         return m;
       if (token.isIdent("and")) {
         token = parser.getToken(true, true);
       }
       else
         return null;
     }

     while (token.isSymbol("(")) {
       token = parser.getToken(true, true);
       if (token.isIdent() && (token.value in kCONSTRAINTS)) {
         var constraint = token.value;
         token = parser.getToken(true, true);
         if (token.isSymbol(":")) {
           token = parser.getToken(true, true);
           var values = [];
           while (!token.isSymbol(")")) {
             values.push(token.value);
             token = parser.getToken(true, true);
           }
           if (token.isSymbol(")")) {
             m.constraints.push({constraint: constraint, value: values});
             token = parser.getToken(true, true);
             if (token.isNotNull()) {
               if (token.isIdent("and")) {
                 token = parser.getToken(true, true);
               }
               else
                 return null;
             }
             else
               return m;
           }
           else
             return null;
         }
         else if (token.isSymbol(")")) {
           m.constraints.push({constraint: constraint, value: null});
           token = parser.getToken(true, true);
           if (token.isNotNull()) {
             if (token.isIdent("and")) {
               token = parser.getToken(true, true);
             }
             else
               return null;
           }
           else
             return m;
         }
         else
           return null;
       }
       else
         return null;
     }
     return m;
   }

 };


 /************************************************************/
 /************************** JSCSSP **************************/
 /************************************************************/

 var CSS_ESCAPE  = '\\';

 var IS_HEX_DIGIT  = 1;
 var START_IDENT   = 2;
 var IS_IDENT      = 4;
 var IS_WHITESPACE = 8;

 var W   = IS_WHITESPACE;
 var I   = IS_IDENT;
 var S   =          START_IDENT;
 var SI  = IS_IDENT|START_IDENT;
 var XI  = IS_IDENT            |IS_HEX_DIGIT;
 var XSI = IS_IDENT|START_IDENT|IS_HEX_DIGIT;

 function CSSScanner(aString)
 {
   this.init(aString);
 }

 CSSScanner.prototype = {

   kLexTable: [
   //                                     TAB LF      FF  CR
      0,  0,  0,  0,  0,  0,  0,  0,  0,  W,  W,  0,  W,  W,  0,  0,
   //
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   // SPC !   "   #   $   %   &   '   (   )   *   +   ,   -   .   /
      W,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  I,  0,  0,
   // 0   1   2   3   4   5   6   7   8   9   :   ;   <   =   >   ?
      XI, XI, XI, XI, XI, XI, XI, XI, XI, XI, 0,  0,  0,  0,  0,  0,
   // @   A   B   C   D   E   F   G   H   I   J   K   L   M   N   O
      0,  XSI,XSI,XSI,XSI,XSI,XSI,SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // P   Q   R   S   T   U   V   W   X   Y   Z   [   \   ]   ^   _
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, 0,  S,  0,  0,  SI,
   // `   a   b   c   d   e   f   g   h   i   j   k   l   m   n   o
      0,  XSI,XSI,XSI,XSI,XSI,XSI,SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // p   q   r   s   t   u   v   w   x   y   z   {   |   }   ~
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, 0,  0,  0,  0,  0,
   //
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   //
      0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
   //     ¡   ¢   £   ¤   ¥   ¦   §   ¨   ©   ª   «   ¬   ­   ®   ¯
      0,  SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // °   ±   ²   ³   ´   µ   ¶   ·   ¸   ¹   º   »   ¼   ½   ¾   ¿
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // À   Á   Â   Ã   Ä   Å   Æ   Ç   È   É   Ê   Ë   Ì   Í   Î   Ï
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // Ð   Ñ   Ò   Ó   Ô   Õ   Ö   ×   Ø   Ù   Ú   Û   Ü   Ý   Þ   ß
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // à   á   â   ã   ä   å   æ   ç   è   é   ê   ë   ì   í   î   ï
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
   // ð   ñ   ò   ó   ô   õ   ö   ÷   ø   ù   ú   û   ü   ý   þ   ÿ
      SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI
   ],

   kHexValues: {
     "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
     "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15
   },

   mString : "",
   mPos : 0,
   mPreservedPos : [],

   init: function(aString) {
     this.mString = aString;
     this.mPos = 0;
     this.mPreservedPos = [];
   },

   getCurrentPos: function() {
     return this.mPos;
   },

   getAlreadyScanned: function()
   {
     return this.mString.substr(0, this.mPos);
   },

   preserveState: function() {
     this.mPreservedPos.push(this.mPos);
   },

   restoreState: function() {
     if (this.mPreservedPos.length) {
       this.mPos = this.mPreservedPos.pop();
     }
   },

   forgetState: function() {
     if (this.mPreservedPos.length) {
       this.mPreservedPos.pop();
     }
   },

   read: function() {
     if (this.mPos < this.mString.length)
       return this.mString.charAt(this.mPos++);
     return -1;
   },

   peek: function() {
     if (this.mPos < this.mString.length)
       return this.mString.charAt(this.mPos);
     return -1;
   },

   isHexDigit: function(c) {
     var code = c.charCodeAt(0);
     return (code < 256 && (this.kLexTable[code] & IS_HEX_DIGIT) != 0);
   },

   isIdentStart: function(c) {
     var code = c.charCodeAt(0);
     return (code >= 256 || (this.kLexTable[code] & START_IDENT) != 0);
   },

   startsWithIdent: function(aFirstChar, aSecondChar) {
     var code = aFirstChar.charCodeAt(0);
     return this.isIdentStart(aFirstChar) ||
            (aFirstChar == "-" && this.isIdentStart(aSecondChar));
   },

   isIdent: function(c) {
     var code = c.charCodeAt(0);
     return (code >= 256 || (this.kLexTable[code] & IS_IDENT) != 0);
   },

   isSymbol: function(c) {
     var code = c.charCodeAt(0);
     return (this.kLexTable[code] & IS_IDENT) != 1;
   },

   pushback: function() {
     this.mPos--;
   },

   nextHexValue: function() {
     var c = this.read();
     if (c == -1 || !this.isHexDigit(c))
       return new jscsspToken(jscsspToken.NULL_TYPE, null);
     var s = c;
     c = this.read();
     while (c != -1 && this.isHexDigit(c)) {
       s += c;
       c = this.read();
     }
     if (c != -1)
       this.pushback();
     return new jscsspToken(jscsspToken.HEX_TYPE, s);
   },

   gatherEscape: function() {
     var c = this.peek();
     if (c == -1)
       return "";
     if (this.isHexDigit(c)) {
       var code = 0;
       for (var i = 0; i < 6; i++) {
         c = this.read();
         if (this.isHexDigit(c))
           code = code * 16 + this.kHexValues[c.toLowerCase()];
         else if (!this.isHexDigit(c) && !this.isWhiteSpace(c)) {
           this.pushback();
           break;
         }
         else
           break;
       }
       if (i == 6) {
         c = this.peek();
         if (this.isWhiteSpace(c))
           this.read();
       }
       return String.fromCharCode(code);
     }
     c = this.read();
     if (c != "\n")
       return c;
     return "";
   },

   gatherIdent: function(c) {
     var s = "";
     if (c == CSS_ESCAPE)
       s += this.gatherEscape();
     else
       s += c;
     c = this.read();
    if(!this.mMediaQueryMode){
        while (c != -1
               && (this.isIdent(c) || c == CSS_ESCAPE)) {
          if (c == CSS_ESCAPE)
            s += this.gatherEscape();
          else
            s += c;
          c = this.read();
        }
    }
    else {
        while (c != -1
               && c != '{'
               && c != ',') {
            s += c;
          c = this.read();
        }
    }
     if (c != -1)
       this.pushback();
      this.mMediaQueryMode = false;
     return s;
   },

   parseIdent: function(c) {
    var value = this.gatherIdent(c);
     var nextChar = this.peek();
     if (nextChar == "(") {
       value += this.read();
       return new jscsspToken(jscsspToken.FUNCTION_TYPE, value);
     }
     return new jscsspToken(jscsspToken.IDENT_TYPE, value);
   },

   isDigit: function(c) {
     return (c >= '0') && (c <= '9');
   },

   parseComment: function(c) {
     var s = c;
     while ((c = this.read()) != -1) {
       s += c;
       if (c == "*") {
         c = this.read();
         if (c == -1)
           break;
         if (c == "/") {
           s += c;
           break;
         }
         this.pushback();
       }
     }
     return new jscsspToken(jscsspToken.COMMENT_TYPE, s);
   },

   parseNumber: function(c) {
     var s = c;
     var foundDot = false;
     while ((c = this.read()) != -1) {
       if (c == ".") {
         if (foundDot)
           break;
         else {
           s += c;
           foundDot = true;
         }
       } else if (this.isDigit(c))
         s += c;
       else
         break;
     }

     if (c != -1 && this.startsWithIdent(c, this.peek())) { // DIMENSION
       var unit = this.gatherIdent(c);
       s += unit;
       return new jscsspToken(jscsspToken.DIMENSION_TYPE, s, unit);
     }
     else if (c == "%") {
       s += "%";
       return new jscsspToken(jscsspToken.PERCENTAGE_TYPE, s);
     }
     else if (c != -1)
       this.pushback();
     return new jscsspToken(jscsspToken.NUMBER_TYPE, s);
   },

   parseString: function(aStop) {
     var s = aStop;
     var previousChar = aStop;
     var c;
     while ((c = this.read()) != -1) {
       if (c == aStop && previousChar != CSS_ESCAPE) {
         s += c;
         break;
       }
       else if (c == CSS_ESCAPE) {
         c = this.peek();
         if (c == -1)
           break;
         else if (c == "\n" || c == "\r" || c == "\f") {
           d = c;
           c = this.read();
           // special for Opera that preserves \r\n...
           if (d == "\r") {
             c = this.peek();
             if (c == "\n")
               c = this.read();
           }
         }
         else {
           s += this.gatherEscape();
           c = this.peek();
         }
       }
       else if (c == "\n" || c == "\r" || c == "\f") {
         break;
       }
       else
         s += c;

       previousChar = c;
     }
     return new jscsspToken(jscsspToken.STRING_TYPE, s);
   },

   isWhiteSpace: function(c) {
     var code = c.charCodeAt(0);
     return code < 256 && (this.kLexTable[code] & IS_WHITESPACE) != 0;
   },

   eatWhiteSpace: function(c) {
     var s = c;
     while ((c = this.read()) != -1) {
       if (!this.isWhiteSpace(c))
         break;
       s += c;
     }
     if (c != -1)
       this.pushback();
     return s;
   },

   parseAtKeyword: function(c) {
     return new jscsspToken(jscsspToken.ATRULE_TYPE, this.gatherIdent(c));
   },

   nextToken: function() {
     var c = this.read();
     if (c == -1)
       return new jscsspToken(jscsspToken.NULL_TYPE, null);

     if (this.startsWithIdent(c, this.peek()))
       return this.parseIdent(c);

     if (c == '@') {
       var nextChar = this.read();
       if (nextChar != -1) {
         var followingChar = this.peek();
         this.pushback();
         if (this.startsWithIdent(nextChar, followingChar))
           return this.parseAtKeyword(c);
       }
     }

     if (c == "." || c == "+" || c == "-") {
       var nextChar = this.peek();
       if (this.isDigit(nextChar))
         return this.parseNumber(c);
       else if (nextChar == "." && c != ".") {
         firstChar = this.read();
         var secondChar = this.peek();
         this.pushback();
         if (this.isDigit(secondChar))
           return this.parseNumber(c);
       }
     }
     if (this.isDigit(c)) {
       return this.parseNumber(c);
     }

     if (c == "'" || c == '"')
       return this.parseString(c);

     if (this.isWhiteSpace(c)) {
       var s = this.eatWhiteSpace(c);

       return new jscsspToken(jscsspToken.WHITESPACE_TYPE, s);
     }

     if (c == "|" || c == "~" || c == "^" || c == "$" || c == "*") {
       var nextChar = this.read();
       if (nextChar == "=") {
         switch (c) {
           case "~" :
             return new jscsspToken(jscsspToken.INCLUDES_TYPE, "~=");
           case "|" :
             return new jscsspToken(jscsspToken.DASHMATCH_TYPE, "|=");
           case "^" :
             return new jscsspToken(jscsspToken.BEGINSMATCH_TYPE, "^=");
           case "$" :
             return new jscsspToken(jscsspToken.ENDSMATCH_TYPE, "$=");
           case "*" :
             return new jscsspToken(jscsspToken.CONTAINSMATCH_TYPE, "*=");
           default :
             break;
         }
       } else if (nextChar != -1)
         this.pushback();
     }

     if (c == "/" && this.peek() == "*")
       return this.parseComment(c);

     return new jscsspToken(jscsspToken.SYMBOL_TYPE, c);
   }
 };

 function CSSParser(aString)
 {
   this.mToken = null;
   this.mLookAhead = null;
   this.mScanner = new CSSScanner(aString);

   this.mPreserveWS = true;
   this.mPreserveComments = true;

   this.mPreservedTokens = [];

   this.mError = null;
 }

 CSSParser.prototype = {

   _init:function() {
     this.mToken = null;
     this.mLookAhead = null;
     this.mMediaQueryMode = false;
   },

   kINHERIT: "inherit",

   kBORDER_WIDTH_NAMES: {
       "thin": true,
       "medium": true,
       "thick": true
   },

   kBORDER_STYLE_NAMES: {
     "none": true,
     "hidden": true,
     "dotted": true,
     "dashed": true,
     "solid": true,
     "double": true,
     "groove": true,
     "ridge": true,
     "inset": true,
     "outset": true
   },

   kCOLOR_NAMES: {
     "transparent": true,

     "black": true,
     "silver": true,
     "gray": true,
     "white": true,
     "maroon": true,
     "red": true,
     "purple": true,
     "fuchsia": true,
     "green": true,
     "lime": true,
     "olive": true,
     "yellow": true,
     "navy": true,
     "blue": true,
     "teal": true,
     "aqua": true,

     "aliceblue": true,
     "antiquewhite": true,
     "aqua": true,
     "aquamarine": true,
     "azure": true,
     "beige": true,
     "bisque": true,
     "black": true,
     "blanchedalmond": true,
     "blue": true,
     "blueviolet": true,
     "brown": true,
     "burlywood": true,
     "cadetblue": true,
     "chartreuse": true,
     "chocolate": true,
     "coral": true,
     "cornflowerblue": true,
     "cornsilk": true,
     "crimson": true,
     "cyan": true,
     "darkblue": true,
     "darkcyan": true,
     "darkgoldenrod": true,
     "darkgray": true,
     "darkgreen": true,
     "darkgrey": true,
     "darkkhaki": true,
     "darkmagenta": true,
     "darkolivegreen": true,
     "darkorange": true,
     "darkorchid": true,
     "darkred": true,
     "darksalmon": true,
     "darkseagreen": true,
     "darkslateblue": true,
     "darkslategray": true,
     "darkslategrey": true,
     "darkturquoise": true,
     "darkviolet": true,
     "deeppink": true,
     "deepskyblue": true,
     "dimgray": true,
     "dimgrey": true,
     "dodgerblue": true,
     "firebrick": true,
     "floralwhite": true,
     "forestgreen": true,
     "fuchsia": true,
     "gainsboro": true,
     "ghostwhite": true,
     "gold": true,
     "goldenrod": true,
     "gray": true,
     "green": true,
     "greenyellow": true,
     "grey": true,
     "honeydew": true,
     "hotpink": true,
     "indianred": true,
     "indigo": true,
     "ivory": true,
     "khaki": true,
     "lavender": true,
     "lavenderblush": true,
     "lawngreen": true,
     "lemonchiffon": true,
     "lightblue": true,
     "lightcoral": true,
     "lightcyan": true,
     "lightgoldenrodyellow": true,
     "lightgray": true,
     "lightgreen": true,
     "lightgrey": true,
     "lightpink": true,
     "lightsalmon": true,
     "lightseagreen": true,
     "lightskyblue": true,
     "lightslategray": true,
     "lightslategrey": true,
     "lightsteelblue": true,
     "lightyellow": true,
     "lime": true,
     "limegreen": true,
     "linen": true,
     "magenta": true,
     "maroon": true,
     "mediumaquamarine": true,
     "mediumblue": true,
     "mediumorchid": true,
     "mediumpurple": true,
     "mediumseagreen": true,
     "mediumslateblue": true,
     "mediumspringgreen": true,
     "mediumturquoise": true,
     "mediumvioletred": true,
     "midnightblue": true,
     "mintcream": true,
     "mistyrose": true,
     "moccasin": true,
     "navajowhite": true,
     "navy": true,
     "oldlace": true,
     "olive": true,
     "olivedrab": true,
     "orange": true,
     "orangered": true,
     "orchid": true,
     "palegoldenrod": true,
     "palegreen": true,
     "paleturquoise": true,
     "palevioletred": true,
     "papayawhip": true,
     "peachpuff": true,
     "peru": true,
     "pink": true,
     "plum": true,
     "powderblue": true,
     "purple": true,
     "red": true,
     "rosybrown": true,
     "royalblue": true,
     "saddlebrown": true,
     "salmon": true,
     "sandybrown": true,
     "seagreen": true,
     "seashell": true,
     "sienna": true,
     "silver": true,
     "skyblue": true,
     "slateblue": true,
     "slategray": true,
     "slategrey": true,
     "snow": true,
     "springgreen": true,
     "steelblue": true,
     "tan": true,
     "teal": true,
     "thistle": true,
     "tomato": true,
     "turquoise": true,
     "violet": true,
     "wheat": true,
     "white": true,
     "whitesmoke": true,
     "yellow": true,
     "yellowgreen": true,

     "activeborder": true,
     "activecaption": true,
     "appworkspace": true,
     "background": true,
     "buttonface": true,
     "buttonhighlight": true,
     "buttonshadow": true,
     "buttontext": true,
     "captiontext": true,
     "graytext": true,
     "highlight": true,
     "highlighttext": true,
     "inactiveborder": true,
     "inactivecaption": true,
     "inactivecaptiontext": true,
     "infobackground": true,
     "infotext": true,
     "menu": true,
     "menutext": true,
     "scrollbar": true,
     "threeddarkshadow": true,
     "threedface": true,
     "threedhighlight": true,
     "threedlightshadow": true,
     "threedshadow": true,
     "window": true,
     "windowframe": true,
     "windowtext": true
   },

   kLIST_STYLE_TYPE_NAMES: {
     "decimal": true,
     "decimal-leading-zero": true,
     "lower-roman": true,
     "upper-roman": true,
     "georgian": true,
     "armenian": true,
     "lower-latin": true,
     "lower-alpha": true,
     "upper-latin": true,
     "upper-alpha": true,
     "lower-greek": true,

     "disc": true,
     "circle": true,
     "square": true,
     "none": true,

     /* CSS 3 */
     "box": true,
     "check": true,
     "diamond": true,
     "hyphen": true,

     "lower-armenian": true,
     "cjk-ideographic": true,
     "ethiopic-numeric": true,
     "hebrew": true,
     "japanese-formal": true,
     "japanese-informal": true,
     "simp-chinese-formal": true,
     "simp-chinese-informal": true,
     "syriac": true,
     "tamil": true,
     "trad-chinese-formal": true,
     "trad-chinese-informal": true,
     "upper-armenian": true,
     "arabic-indic": true,
     "binary": true,
     "bengali": true,
     "cambodian": true,
     "khmer": true,
     "devanagari": true,
     "gujarati": true,
     "gurmukhi": true,
     "kannada": true,
     "lower-hexadecimal": true,
     "lao": true,
     "malayalam": true,
     "mongolian": true,
     "myanmar": true,
     "octal": true,
     "oriya": true,
     "persian": true,
     "urdu": true,
     "telugu": true,
     "tibetan": true,
     "upper-hexadecimal": true,
     "afar": true,
     "ethiopic-halehame-aa-et": true,
     "ethiopic-halehame-am-et": true,
     "amharic-abegede": true,
     "ehiopic-abegede-am-et": true,
     "cjk-earthly-branch": true,
     "cjk-heavenly-stem": true,
     "ethiopic": true,
     "ethiopic-abegede": true,
     "ethiopic-abegede-gez": true,
     "hangul-consonant": true,
     "hangul": true,
     "hiragana-iroha": true,
     "hiragana": true,
     "katakana-iroha": true,
     "katakana": true,
     "lower-norwegian": true,
     "oromo": true,
     "ethiopic-halehame-om-et": true,
     "sidama": true,
     "ethiopic-halehame-sid-et": true,
     "somali": true,
     "ethiopic-halehame-so-et": true,
     "tigre": true,
     "ethiopic-halehame-tig": true,
     "tigrinya-er-abegede": true,
     "ethiopic-abegede-ti-er": true,
     "tigrinya-et": true,
     "ethiopic-halehame-ti-et": true,
     "upper-greek": true,
     "asterisks": true,
     "footnotes": true,
     "circled-decimal": true,
     "circled-lower-latin": true,
     "circled-upper-latin": true,
     "dotted-decimal": true,
     "double-circled-decimal": true,
     "filled-circled-decimal": true,
     "parenthesised-decimal": true,
     "parenthesised-lower-latin": true
   },

   reportError: function(aMsg) {
     this.mError = aMsg;
   },

   consumeError: function() {
     var e = this.mError;
     this.mError = null;
     return e;
   },

   currentToken: function() {
     return this.mToken;
   },

   getHexValue: function() {
     this.mToken = this.mScanner.nextHexValue();
     return this.mToken;
   },

   getToken: function(aSkipWS, aSkipComment) {
     if (this.mLookAhead) {
       this.mToken = this.mLookAhead;
       this.mLookAhead = null;
       return this.mToken;
     }

     this.mToken = this.mScanner.nextToken();
     while (this.mToken &&
            ((aSkipWS && this.mToken.isWhiteSpace()) ||
             (aSkipComment && this.mToken.isComment())))
       this.mToken = this.mScanner.nextToken();
    return this.mToken;
   },

   lookAhead: function(aSkipWS, aSkipComment) {
     var preservedToken = this.mToken;
     this.mScanner.preserveState();
     var token = this.getToken(aSkipWS, aSkipComment);
     this.mScanner.restoreState();
     this.mToken = preservedToken;

     return token;
   },

   ungetToken: function() {
     this.mLookAhead = this.mToken;
   },

   addUnknownAtRule: function(aSheet, aString) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var blocks = [];
     var token = this.getToken(false, false);
     while (token.isNotNull()) {
       aString += token.value;
       if (token.isSymbol(";") && !blocks.length)
         break;
       else if (token.isSymbol("{")
                || token.isSymbol("(")
                || token.isSymbol("[")
                || token.type == "function") {
         blocks.push(token.isFunction() ? "(" : token.value);
       } else if (token.isSymbol("}")
                  || token.isSymbol(")")
                  || token.isSymbol("]")) {
         if (blocks.length) {
           var ontop = blocks[blocks.length - 1];
           if ((token.isSymbol("}") && ontop == "{")
               || (token.isSymbol(")") && ontop == "(")
               || (token.isSymbol("]") && ontop == "[")) {
             blocks.pop();
             if (!blocks.length && token.isSymbol("}"))
               break;
           }
         }
       }
       token = this.getToken(false, false);
     }

     this.addUnknownRule(aSheet, aString, currentLine);
   },

   addUnknownRule: function(aSheet, aString, aCurrentLine) {
     var errorMsg = this.consumeError();
     var rule = new jscsspErrorRule(errorMsg);
     rule.currentLine = aCurrentLine;
     rule.parsedCssText = aString;
     rule.parentStyleSheet = aSheet;
     aSheet.cssRules.push(rule);
   },

   addWhitespace: function(aSheet, aString) {
     var rule = new jscsspWhitespace();
     rule.parsedCssText = aString;
     rule.parentStyleSheet = aSheet;
     aSheet.cssRules.push(rule);
   },

   addComment: function(aSheet, aString) {
     var rule = new jscsspComment();
     rule.parsedCssText = aString;
     rule.parentStyleSheet = aSheet;
     aSheet.cssRules.push(rule);
   },

   parseCharsetRule: function(aToken, aSheet) {
     var s = aToken.value;
     var token = this.getToken(false, false);
     s += token.value;
     if (token.isWhiteSpace(" ")) {
       token = this.getToken(false, false);
       s += token.value;
       if (token.isString()) {
         var encoding = token.value;
         token = this.getToken(false, false);
         s += token.value;
         if (token.isSymbol(";")) {
           var rule = new jscsspCharsetRule();
           rule.encoding = encoding;
           rule.parsedCssText = s;
           rule.parentStyleSheet = aSheet;
           aSheet.cssRules.push(rule);
           return true;
         }
         else
           this.reportError(kCHARSET_RULE_MISSING_SEMICOLON);
       }
       else
         this.reportError(kCHARSET_RULE_CHARSET_IS_STRING);
     }
     else
       this.reportError(kCHARSET_RULE_MISSING_WS);

     this.addUnknownAtRule(aSheet, s);
     return false;
   },

   parseImportRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     this.preserveState();
     var token = this.getToken(true, true);
     var media = [];
     var href = "";
     if (token.isString()) {
       href = token.value;
       s += " " + href;
     }
     else if (token.isFunction("url(")) {
       token = this.getToken(true, true);
       var urlContent = this.parseURL(token);
       if (urlContent) {
         href = "url(" + urlContent;
         s += " " + href;
       }
     }
     else
       this.reportError(kIMPORT_RULE_MISSING_URL);

     if (href) {
       token = this.getToken(true, true);
       while (token.isIdent()) {
         s += " " + token.value;
         media.push(token.value);
         token = this.getToken(true, true);
         if (!token)
           break;
         if (token.isSymbol(",")) {
           s += ",";
         } else if (token.isSymbol(";")) {
           break;
         } else
           break;
         token = this.getToken(true, true);
       }

       if (!media.length) {
         media.push("all");
       }

       if (token.isSymbol(";")) {
         s += ";"
         this.forgetState();
         var rule = new jscsspImportRule();
         rule.currentLine = currentLine;
         rule.parsedCssText = s;
         rule.href = href;
         rule.media = media;
         rule.parentStyleSheet = aSheet;
         aSheet.cssRules.push(rule);
         return true;
       }
     }

     this.restoreState();
     this.addUnknownAtRule(aSheet, "@import");
     return false;
   },

   parseVariablesRule: function(token, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = token.value;
     var declarations = [];
     var valid = false;
     this.preserveState();
     token = this.getToken(true, true);
     var media = [];
     var foundMedia = false;
     while (token.isNotNull()) {
       if (token.isIdent()) {
         foundMedia = true;
         s += " " + token.value;
         media.push(token.value);
         token = this.getToken(true, true);
         if (token.isSymbol(",")) {
           s += ",";
         } else {
           if (token.isSymbol("{"))
             this.ungetToken();
           else {
             // error...
             token.type = jscsspToken.NULL_TYPE;
             break;
           }
         }
       } else if (token.isSymbol("{"))
         break;
       else if (foundMedia) {
         token.type = jscsspToken.NULL_TYPE;
         // not a media list
         break;
       }
       token = this.getToken(true, true);
     }

     if (token.isSymbol("{")) {
       s += " {";
       token = this.getToken(true, true);
       while (true) {
         if (!token.isNotNull()) {
           valid = true;
           break;
         }
         if (token.isSymbol("}")) {
           s += "}";
           valid = true;
           break;
         } else {
           var d = this.parseDeclaration(token, declarations, true, false, aSheet);
           s += ((d && declarations.length) ? " " : "") + d;
         }
         token = this.getToken(true, false);
       }
     }
     if (valid) {
       this.forgetState();
       var rule = new jscsspVariablesRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.declarations = declarations;
       rule.media = media;
       rule.parentStyleSheet = aSheet;
       aSheet.cssRules.push(rule)
       return true;
     }
     this.restoreState();
     return false;
   },

   parseNamespaceRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     this.preserveState();
     var token = this.getToken(true, true);
     if (token.isNotNull()) {
       var prefix = "";
       var url = "";
       if (token.isIdent()) {
         prefix = token.value;
         s += " " + prefix;
         token = this.getToken(true, true);
       }
       if (token) {
         var foundURL = false;
         if (token.isString()) {
           foundURL = true;
           url = token.value;
           s += " " + url;
         } else if (token.isFunction("url(")) {
           // get a url here...
           token = this.getToken(true, true);
           var urlContent = this.parseURL(token);
           if (urlContent) {
             url += "url(" + urlContent;
             foundURL = true;
             s += " " + urlContent;
           }
         }
       }
       if (foundURL) {
         token = this.getToken(true, true);
         if (token.isSymbol(";")) {
           s += ";";
           this.forgetState();
           var rule = new jscsspNamespaceRule();
           rule.currentLine = currentLine;
           rule.parsedCssText = s;
           rule.prefix = prefix;
           rule.url = url;
           rule.parentStyleSheet = aSheet;
           aSheet.cssRules.push(rule);
           return true;
         }
       }

     }
     this.restoreState();
     this.addUnknownAtRule(aSheet, "@namespace");
     return false;
   },

   parseFontFaceRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var descriptors = [];
     this.preserveState();
     var token = this.getToken(true, true);
     if (token.isNotNull()) {
       // expecting block start
       if (token.isSymbol("{")) {
         s += " " + token.value;
         var token = this.getToken(true, false);
         while (true) {
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, descriptors, false, false, aSheet);
             s += ((d && descriptors.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     if (valid) {
       this.forgetState();
       var rule = new jscsspFontFaceRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.descriptors = descriptors;
       rule.parentStyleSheet = aSheet;
       aSheet.cssRules.push(rule)
       return true;
     }
     this.restoreState();
     return false;
   },

   parsePageRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var declarations = [];
     this.preserveState();
     var token = this.getToken(true, true);
     var pageSelector = "";
     if (token.isSymbol(":") || token.isIdent()) {
       if (token.isSymbol(":")) {
         pageSelector = ":";
         token = this.getToken(false, false);
       }
       if (token.isIdent()) {
         pageSelector += token.value;
         s += " " + pageSelector;
         token = this.getToken(true, true);
       }
     }
     if (token.isNotNull()) {
       // expecting block start
       if (token.isSymbol("{")) {
         s += " " + token.value;
         var token = this.getToken(true, false);
         while (true) {
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, declarations, true, true, aSheet);
             s += ((d && declarations.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     if (valid) {
       this.forgetState();
       var rule = new jscsspPageRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.pageSelector = pageSelector;
       rule.declarations = declarations;
       rule.parentStyleSheet = aSheet;
       aSheet.cssRules.push(rule)
       return true;
     }
     this.restoreState();
     return false;
   },

   parseDefaultPropertyValue: function(token, aDecl, aAcceptPriority, descriptor, aSheet) {
     var valueText = "";
     var blocks = [];
     var foundPriority = false;
     var values = [];
     while (token.isNotNull()) {

       if ((token.isSymbol(";")
            || token.isSymbol("}")
            || token.isSymbol("!"))
           && !blocks.length) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       if (token.isIdent(this.kINHERIT)) {
         if (values.length) {
           return "";
         }
         else {
           valueText = this.kINHERIT;
           var value = new jscsspVariable(kJscsspINHERIT_VALUE, aSheet);
           values.push(value);
           token = this.getToken(true, true);
           break;
         }
       }
       else if (token.isSymbol("{")
                  || token.isSymbol("(")
                  || token.isSymbol("[")) {
         blocks.push(token.value);
       }
       else if (token.isSymbol("}")
                  || token.isSymbol("]")) {
         if (blocks.length) {
           var ontop = blocks[blocks.length - 1];
           if ((token.isSymbol("}") && ontop == "{")
               || (token.isSymbol(")") && ontop == "(")
               || (token.isSymbol("]") && ontop == "[")) {
             blocks.pop();
           }
         }
       }
       // XXX must find a better way to store individual values
       // probably a |values: []| field holding dimensions, percentages
       // functions, idents, numbers and symbols, in that order.
       if (token.isFunction()) {
         if (token.isFunction("var(")) {
           token = this.getToken(true, true);
           if (token.isIdent()) {
             var name = token.value;
             token = this.getToken(true, true);
             if (token.isSymbol(")")) {
               var value = new jscsspVariable(kJscsspVARIABLE_VALUE, aSheet);
               valueText += "var(" + name + ")";
               value.name = name;
               values.push(value);
             }
             else
               return "";
           }
           else
             return "";
         }
         else {
           var fn = token.value;
           token = this.getToken(false, true);
           var arg = this.parseFunctionArgument(token);
           if (arg) {
             valueText += fn + arg;
             var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
             value.value = fn + arg;
             values.push(value);
           }
           else
             return "";
         }
       }
       else if (token.isSymbol("#")) {
         var color = this.parseColor(token);
         if (color) {
           valueText += color;
           var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
           value.value = color;
           values.push(value);
         }
         else
           return "";
       }
       else if (!token.isWhiteSpace() && !token.isSymbol(",")) {
         var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
         value.value = token.value;
         values.push(value);
         valueText += token.value;
       }
       else
         valueText += token.value;
       token = this.getToken(false, true);
     }
     if (values.length && valueText) {
       this.forgetState();
       aDecl.push(this._createJscsspDeclarationFromValuesArray(descriptor, values, valueText));
       return valueText;
     }
     return "";
   },

   parseMarginOrPaddingShorthand: function(token, aDecl, aAcceptPriority, aProperty)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
         token = this.getToken(true, true);
         break;
       }

       else if (token.isDimension()
               || token.isNumber("0")
               || token.isPercentage()
               || token.isIdent("auto")) {
         values.push(token.value);
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-top", top));
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-right", right));
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-bottom", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-left", left));
    return top + " " + right + " " + bottom + " " + left;
   },

   parseBorderColorShorthand: function(token, aDecl, aAcceptPriority)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
         token = this.getToken(true, true);
         break;
       }

       else {
         var color = this.parseColor(token);
         if (color)
           values.push(color);
         else
           return "";
       }

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("border-top-color", top));
     aDecl.push(this._createJscsspDeclarationFromValue("border-right-color", right));
     aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-color", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue("border-left-color", left));
     return top + " " + right + " " + bottom + " " + left;
   },

   parseCueShorthand: function(token, declarations, aAcceptPriority)
   {
     var before = "";
     var after = "";

     var values = [];
     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isIdent("none"))
         values.push(token.value);

         else if (token.isFunction("url(")) {
         var token = this.getToken(true, true);
         var urlContent = this.parseURL(token);
         if (urlContent)
           values.push("url(" + urlContent);
         else
           return "";
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         before = values[0];
         after = before;
         break;
       case 2:
         before = values[0];
         after = values[1];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("cue-before", before));
     aDecl.push(this._createJscsspDeclarationFromValue("cue-after", after));
     return before + " " + after;
   },

   parsePauseShorthand: function(token, declarations, aAcceptPriority)
   {
     var before = "";
     var after = "";

     var values = [];
     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isDimensionOfUnit("ms")
                || token.isDimensionOfUnit("s")
                || token.isPercentage()
                || token.isNumber("0"))
         values.push(token.value);
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         before = values[0];
         after = before;
         break;
       case 2:
         before = values[0];
         after = values[1];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("pause-before", before));
     aDecl.push(this._createJscsspDeclarationFromValue("pause-after", after));
     return before + " " + after;
   },

   parseBorderWidthShorthand: function(token, aDecl, aAcceptPriority)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isDimension()
                || token.isNumber("0")
                || (token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES)) {
         values.push(token.value);
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("border-top-width", top));
     aDecl.push(this._createJscsspDeclarationFromValue("border-right-width", right));
     aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-width", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue("border-left-width", left));
     return top + " " + right + " " + bottom + " " + left;
   },

   parseBorderStyleShorthand: function(token, aDecl, aAcceptPriority)
   {
     var top = null;
     var bottom = null;
     var left = null;
     var right = null;

     var values = [];
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!values.length && token.isIdent(this.kINHERIT)) {
         values.push(token.value);
       }

       else if (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES) {
         values.push(token.value);
       }
       else
         return "";

       token = this.getToken(true, true);
     }

     var count = values.length;
     switch (count) {
       case 1:
         top = values[0];
         bottom = top;
         left = top;
         right = top;
         break;
       case 2:
         top = values[0];
         bottom = top;
         left = values[1];
         right = left;
         break;
       case 3:
         top = values[0];
         left = values[1];
         right = left;
         bottom = values[2];
         break;
       case 4:
         top = values[0];
         right = values[1];
         bottom = values[2];
         left = values[3];
         break;
       default:
         return "";
     }
     this.forgetState();
     aDecl.push(this._createJscsspDeclarationFromValue("border-top-style", top));
     aDecl.push(this._createJscsspDeclarationFromValue("border-right-style", right));
     aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-style", bottom));
     aDecl.push(this._createJscsspDeclarationFromValue("border-left-style", left));
     return top + " " + right + " " + bottom + " " + left;
   },

   parseBorderEdgeOrOutlineShorthand: function(token, aDecl, aAcceptPriority, aProperty)
   {
     var bWidth = null;
     var bStyle = null;
     var bColor = null;

     while (true) {
       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!bWidth && !bStyle && !bColor
                && token.isIdent(this.kINHERIT)) {
         bWidth = this.kINHERIT;
         bStyle = this.kINHERIT;
         bColor = this.kINHERIT;
       }

       else if (!bWidth &&
                (token.isDimension()
                 || (token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES)
                 || token.isNumber("0"))) {
         bWidth = token.value;
       }

       else if (!bStyle &&
                (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES)) {
         bStyle = token.value;
       }

       else {
         var color = (aProperty == "outline" && token.isIdent("invert"))
                     ? "invert" : this.parseColor(token);
         if (!bColor && color)
           bColor = color;
         else
           return "";
       }
       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     bWidth = bWidth ? bWidth : "medium";
     bStyle = bStyle ? bStyle : "none";
     bColor = bColor ? bColor : "-moz-initial";

     function addPropertyToDecl(aSelf, aDecl, property, w, s, c) {
       aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-width", w));
       aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-style", s));
       aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-color", c));
     }

     if (aProperty == "border") {
       addPropertyToDecl(this, aDecl, "border-top", bWidth, bStyle, bColor);
       addPropertyToDecl(this, aDecl, "border-right", bWidth, bStyle, bColor);
       addPropertyToDecl(this, aDecl, "border-bottom", bWidth, bStyle, bColor);
       addPropertyToDecl(this, aDecl, "border-left", bWidth, bStyle, bColor);
     }
     else
       addPropertyToDecl(this, aDecl, aProperty, bWidth, bStyle, bColor);
     return bWidth + " " + bStyle + " " + bColor;
   },

   parseBackgroundShorthand: function(token, aDecl, aAcceptPriority)
   {
     var kHPos = {"left": true, "right": true };

     var kVPos = {"top": true, "bottom": true };
     var kPos = {"left": true, "right": true, "top": true, "bottom": true, "center": true};

     var bgColor = null;
     var bgRepeat = null;
     var bgAttachment = null;
     var bgImage = null;
     var bgPosition = null;

     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!bgColor && !bgRepeat && !bgAttachment && !bgImage && !bgPosition
                && token.isIdent(this.kINHERIT)) {
         bgColor = this.kINHERIT;
         bgRepeat = this.kINHERIT;
         bgAttachment = this.kINHERIT;
         bgImage = this.kINHERIT;
         bgPosition = this.kINHERIT;
       }

       else {
         if (!bgAttachment &&
             (token.isIdent("scroll")
              || token.isIdent("fixed"))) {
           bgAttachment = token.value;
         }

         else if (!bgPosition &&
                  ((token.isIdent() && token.value in kPos)
                   || token.isDimension()
                   || token.isNumber("0")
                   || token.isPercentage())) {
           bgPosition = token.value;
           token = this.getToken(true, true);
           if (token.isDimension() || token.isNumber("0") || token.isPercentage()) {
             bgPosition += " " + token.value;
           }
           else if (token.isIdent() && token.value in kPos) {
             if ((bgPosition in kHPos && token.value in kHPos) ||
                 (bgPosition in kVPos && token.value in kVPos))
               return "";
             bgPosition += " " + token.value;
           }
           else {
             this.ungetToken();
             bgPosition += " center";
           }
         }

         else if (!bgRepeat &&
                  (token.isIdent("repeat")
                   || token.isIdent("repeat-x")
                   || token.isIdent("repeat-y")
                   || token.isIdent("no-repeat"))) {
           bgRepeat = token.value;
         }

         else if (!bgImage &&
                  (token.isFunction("url(")
                   || token.isIdent("none"))) {
           bgImage = token.value;
           if (token.isFunction("url(")) {
             token = this.getToken(true, true);
             var url = this.parseURL(token); // TODO
             if (url)
               bgImage += url;
             else
               return "";
           }
         }

         else if (!bgImage &&
                  (token.isFunction("-moz-linear-gradient(")
                   || token.isFunction("-moz-radial-gradient(")
                   || token.isFunction("-moz-repeating-linear-gradient(")
                   || token.isFunction("-moz-repeating-radial-gradient("))) {
           var gradient = CssInspector.parseGradient(this, token);
           if (gradient)
             bgImage = CssInspector.serializeGradient(gradient);
           else
             return "";
         }

         else {
           var color = this.parseColor(token);
           if (!bgColor && color)
             bgColor = color;
           else
             return "";
         }

       }

       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     bgColor = bgColor ? bgColor : "transparent";
     bgImage = bgImage ? bgImage : "none";
     bgRepeat = bgRepeat ? bgRepeat : "repeat";
     bgAttachment = bgAttachment ? bgAttachment : "scroll";
     bgPosition = bgPosition ? bgPosition : "top left";

     aDecl.push(this._createJscsspDeclarationFromValue("background-color", bgColor));
     aDecl.push(this._createJscsspDeclarationFromValue("background-image", bgImage));
     aDecl.push(this._createJscsspDeclarationFromValue("background-repeat", bgRepeat));
     aDecl.push(this._createJscsspDeclarationFromValue("background-attachment", bgAttachment));
     aDecl.push(this._createJscsspDeclarationFromValue("background-position", bgPosition));
     return bgColor + " " + bgImage + " " + bgRepeat + " " + bgAttachment + " " + bgPosition;
   },

   parseListStyleShorthand: function(token, aDecl, aAcceptPriority)
   {
     var kPosition = { "inside": true, "outside": true };

     var lType = null;
     var lPosition = null;
     var lImage = null;

     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!lType && !lPosition && ! lImage
                && token.isIdent(this.kINHERIT)) {
         lType = this.kINHERIT;
         lPosition = this.kINHERIT;
         lImage = this.kINHERIT;
       }

       else if (!lType &&
                (token.isIdent() && token.value in this.kLIST_STYLE_TYPE_NAMES)) {
         lType = token.value;
       }

       else if (!lPosition &&
                (token.isIdent() && token.value in kPosition)) {
         lPosition = token.value;
       }

       else if (!lImage && token.isFunction("url")) {
         token = this.getToken(true, true);
         var urlContent = this.parseURL(token);
         if (urlContent) {
           lImage = "url(" + urlContent;
         }
         else
           return "";
       }
       else if (!token.isIdent("none"))
         return "";

       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     lType = lType ? lType : "none";
     lImage = lImage ? lImage : "none";
     lPosition = lPosition ? lPosition : "outside";

     aDecl.push(this._createJscsspDeclarationFromValue("list-style-type", lType));
     aDecl.push(this._createJscsspDeclarationFromValue("list-style-position", lPosition));
     aDecl.push(this._createJscsspDeclarationFromValue("list-style-image", lImage));
     return lType + " " + lPosition + " " + lImage;
   },

   parseFontShorthand: function(token, aDecl, aAcceptPriority)
   {
     var kStyle = {"italic": true, "oblique": true };
     var kVariant = {"small-caps": true };
     var kWeight = { "bold": true, "bolder": true, "lighter": true,
                       "100": true, "200": true, "300": true, "400": true,
                       "500": true, "600": true, "700": true, "800": true,
                       "900": true };
     var kSize = { "xx-small": true, "x-small": true, "small": true, "medium": true,
                     "large": true, "x-large": true, "xx-large": true,
                     "larger": true, "smaller": true };
     var kValues = { "caption": true, "icon": true, "menu": true, "message-box": true, "small-caption": true, "status-bar": true };
     var kFamily = { "serif": true, "sans-serif": true, "cursive": true, "fantasy": true, "monospace": true };

     var fStyle = null;
     var fVariant = null;
     var fWeight = null;
     var fSize = null;
     var fLineHeight = null;
     var fFamily = "";
     var fSystem = null;
     var fFamilyValues = [];

     var normalCount = 0;
     while (true) {

       if (!token.isNotNull())
         break;

       if (token.isSymbol(";")
           || (aAcceptPriority && token.isSymbol("!"))
           || token.isSymbol("}")) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       }

       else if (!fStyle && !fVariant && !fWeight
                && !fSize && !fLineHeight && !fFamily
                && !fSystem
                && token.isIdent(this.kINHERIT)) {
         fStyle = this.kINHERIT;
         fVariant = this.kINHERIT;
         fWeight = this.kINHERIT;
         fSize = this.kINHERIT;
         fLineHeight = this.kINHERIT;
         fFamily = this.kINHERIT;
         fSystem = this.kINHERIT;
       }

       else {
         if (!fSystem && (token.isIdent() && token.value in kValues)) {
           fSystem = token.value;
           break;
         }

         else {
           if (!fStyle
                    && token.isIdent()
                    && (token.value in kStyle)) {
             fStyle = token.value;
           }

           else if (!fVariant
                    && token.isIdent()
                    && (token.value in kVariant)) {
             fVariant = token.value;
           }

           else if (!fWeight
                    && (token.isIdent() || token.isNumber())
                    && (token.value in kWeight)) {
             fWeight = token.value;
           }

           else if (!fSize
                    && ((token.isIdent() && (token.value in kSize))
                        || token.isDimension()
                        || token.isPercentage())) {
             fSize = token.value;
             var token = this.getToken(false, false);
             if (token.isSymbol("/")) {
               token = this.getToken(false, false);
               if (!fLineHeight &&
                   (token.isDimension() || token.isNumber() || token.isPercentage())) {
                 fLineHeight = token.value;
               }
               else
                 return "";
             }
             else
               this.ungetToken();
           }

           else if (token.isIdent("normal")) {
             normalCount++;
             if (normalCount > 3)
               return "";
           }

           else if (!fFamily && // *MUST* be last to be tested here
                    (token.isString()
                     || token.isIdent())) {
             var lastWasComma = false;
             while (true) {
               if (!token.isNotNull())
                 break;
               else if (token.isSymbol(";")
                   || (aAcceptPriority && token.isSymbol("!"))
                   || token.isSymbol("}")) {
                 this.ungetToken();
                 break;
               }
               else if (token.isIdent() && token.value in kFamily) {
                 var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                 value.value = token.value;
                 fFamilyValues.push(value);
                 fFamily += token.value;
                 break;
               }
               else if (token.isString() || token.isIdent()) {
                 var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                 value.value = token.value;
                 fFamilyValues.push(value);
                 fFamily += token.value;
                 lastWasComma = false;
               }
               else if (!lastWasComma && token.isSymbol(",")) {
                 fFamily += ", ";
                 lastWasComma = true;
               }
               else
                 return "";
               token = this.getToken(true, true);
             }
           }

           else {
             return "";
           }
         }

       }

       token = this.getToken(true, true);
     }

     // create the declarations
     this.forgetState();
     if (fSystem) {
       aDecl.push(this._createJscsspDeclarationFromValue("font", fSystem));
       return fSystem;
     }
     fStyle = fStyle ? fStyle : "normal";
     fVariant = fVariant ? fVariant : "normal";
     fWeight = fWeight ? fWeight : "normal";
     fSize = fSize ? fSize : "medium";
     fLineHeight = fLineHeight ? fLineHeight : "normal";
     fFamily = fFamily ? fFamily : "-moz-initial";

     aDecl.push(this._createJscsspDeclarationFromValue("font-style", fStyle));
     aDecl.push(this._createJscsspDeclarationFromValue("font-variant", fVariant));
     aDecl.push(this._createJscsspDeclarationFromValue("font-weight", fWeight));
     aDecl.push(this._createJscsspDeclarationFromValue("font-size", fSize));
     aDecl.push(this._createJscsspDeclarationFromValue("line-height", fLineHeight));
     aDecl.push(this._createJscsspDeclarationFromValuesArray("font-family", fFamilyValues, fFamily));
     return fStyle + " " + fVariant + " " + fWeight + " " + fSize + "/" + fLineHeight + " " + fFamily;
   },

   _createJscsspDeclaration: function(property, value)
   {
     var decl = new jscsspDeclaration();
     decl.property = property;
     decl.value = this.trim11(value);
     decl.parsedCssText = property + ": " + value + ";";
     return decl;
   },

   _createJscsspDeclarationFromValue: function(property, valueText)
   {
     var decl = new jscsspDeclaration();
     decl.property = property;
     var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
     value.value = valueText;
     decl.values = [value];
     decl.valueText = valueText;
     decl.parsedCssText = property + ": " + valueText + ";";
     return decl;
   },

   _createJscsspDeclarationFromValuesArray: function(property, values, valueText)
   {
     var decl = new jscsspDeclaration();
     decl.property = property;
     decl.values = values;
     decl.valueText = valueText;
     decl.parsedCssText = property + ": " + valueText + ";";
     return decl;
   },

   parseURL: function(token)
   {
     var value = "";
     if (token.isString())
     {
       value += token.value;
       token = this.getToken(true, true);
     }
     else
       while (true)
       {
         if (!token.isNotNull()) {
           this.reportError(kURL_EOF);
           return "";
         }
         if (token.isWhiteSpace()) {
           nextToken = this.lookAhead(true, true);
           // if next token is not a closing parenthesis, that's an error
           if (!nextToken.isSymbol(")")) {
             this.reportError(kURL_WS_INSIDE);
             token = this.currentToken();
             break;
           }
         }
         if (token.isSymbol(")")) {
           break;
         }
         value += token.value;
         token = this.getToken(false, false);
       }

     if (token.isSymbol(")")) {
       return value + ")";
     }
     return "";
   },

   parseFunctionArgument: function(token)
   {
     var value = "";
     if (token.isString())
     {
       value += token.value;
       token = this.getToken(true, true);
     }
     else {
       var parenthesis = 1;
       while (true)
       {
         if (!token.isNotNull())
           return "";
         if (token.isFunction() || token.isSymbol("("))
           parenthesis++;
         if (token.isSymbol(")")) {
           parenthesis--;
           if (!parenthesis)
             break;
         }
         value += token.value;
         token = this.getToken(false, false);
       }
     }

     if (token.isSymbol(")"))
       return value + ")";
     return "";
   },

   parseColor: function(token)
   {
     var color = "";
     if (token.isFunction("rgb(")
         || token.isFunction("rgba(")) {
       color = token.value;
       var isRgba = token.isFunction("rgba(")
       token = this.getToken(true, true);
       if (!token.isNumber() && !token.isPercentage())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isNumber() && !token.isPercentage())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isNumber() && !token.isPercentage())
         return "";
       color += token.value;

       if (isRgba) {
         token = this.getToken(true, true);
         if (!token.isSymbol(","))
           return "";
         color += ", ";

         token = this.getToken(true, true);
         if (!token.isNumber())
           return "";
         color += token.value;
       }

       token = this.getToken(true, true);
       if (!token.isSymbol(")"))
         return "";
       color += token.value;
     }

     else if (token.isFunction("hsl(")
              || token.isFunction("hsla(")) {
       color = token.value;
       var isHsla = token.isFunction("hsla(")
       token = this.getToken(true, true);
       if (!token.isNumber())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isPercentage())
         return "";
       color += token.value;
       token = this.getToken(true, true);
       if (!token.isSymbol(","))
         return "";
       color += ", ";

       token = this.getToken(true, true);
       if (!token.isPercentage())
         return "";
       color += token.value;

       if (isHsla) {
         token = this.getToken(true, true);
         if (!token.isSymbol(","))
           return "";
         color += ", ";

         token = this.getToken(true, true);
         if (!token.isNumber())
           return "";
         color += token.value;
       }

       token = this.getToken(true, true);
       if (!token.isSymbol(")"))
         return "";
       color += token.value;
     }

     else if (token.isIdent()
              && (token.value in this.kCOLOR_NAMES))
       color = token.value;

     else if (token.isSymbol("#")) {
       token = this.getHexValue();
       if (!token.isHex())
         return "";
       var length = token.value.length;
       if (length != 3 && length != 6)
         return "";
       if (token.value.match( /[a-fA-F0-9]/g ).length != length)
         return "";
       color = "#" + token.value;
     }
     return color;
   },

   parseDeclaration: function(aToken, aDecl, aAcceptPriority, aExpandShorthands, aSheet) {
     this.preserveState();
     var blocks = [];
     if (aToken.isIdent()) {
       var descriptor = aToken.value.toLowerCase();
       var token = this.getToken(true, true);
       if (token.isSymbol(":")) {
         var token = this.getToken(true, true);

         var value = "";
         var declarations = [];
         if (aExpandShorthands)
           switch (descriptor) {
             case "background":
               value = this.parseBackgroundShorthand(token, declarations, aAcceptPriority);
               break;
             case "margin":
             case "padding":
               value = this.parseMarginOrPaddingShorthand(token, declarations, aAcceptPriority, descriptor);
               break;
             case "border-color":
               value = this.parseBorderColorShorthand(token, declarations, aAcceptPriority);
               break;
             case "border-style":
               value = this.parseBorderStyleShorthand(token, declarations, aAcceptPriority);
               break;
             case "border-width":
               value = this.parseBorderWidthShorthand(token, declarations, aAcceptPriority);
               break;
             case "border-top":
             case "border-right":
             case "border-bottom":
             case "border-left":
             case "border":
             case "outline":
               value = this.parseBorderEdgeOrOutlineShorthand(token, declarations, aAcceptPriority, descriptor);
               break;
             case "cue":
               value = this.parseCueShorthand(token, declarations, aAcceptPriority);
               break;
             case "pause":
               value = this.parsePauseShorthand(token, declarations, aAcceptPriority);
               break;
             case "font":
               value = this.parseFontShorthand(token, declarations, aAcceptPriority);
               break;
             case "list-style":
               value = this.parseListStyleShorthand(token, declarations, aAcceptPriority);
               break;
             default:
               value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
               break;
           }
         else
           value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
         token = this.currentToken();
         if (value) // no error above
         {
           var priority = false;
           if (token.isSymbol("!")) {
             token = this.getToken(true, true);
             if (token.isIdent("important")) {
               priority = true;
               token = this.getToken(true, true);
               if (token.isSymbol(";") || token.isSymbol("}")) {
                 if (token.isSymbol("}"))
                   this.ungetToken();
               }
               else return "";
             }
             else return "";
           }
           else if  (token.isNotNull() && !token.isSymbol(";") && !token.isSymbol("}"))
             return "";
           for (var i = 0; i < declarations.length; i++) {
             declarations[i].priority = priority;
             aDecl.push(declarations[i]);
           }
           return descriptor + ": " + value + ";";
         }
       }
     }
     else if (aToken.isComment()) {
       if (this.mPreserveComments) {
         this.forgetState();
         var comment = new jscsspComment();
         comment.parsedCssText = aToken.value;
         aDecl.push(comment);
       }
       return aToken.value;
     }

     // we have an error here, let's skip it
     this.restoreState();
     var s = aToken.value;
     blocks = [];
     var token = this.getToken(false, false);
     while (token.isNotNull()) {
       s += token.value;
       if ((token.isSymbol(";") || token.isSymbol("}")) && !blocks.length) {
         if (token.isSymbol("}"))
           this.ungetToken();
         break;
       } else if (token.isSymbol("{")
                  || token.isSymbol("(")
                  || token.isSymbol("[")
                  || token.isFunction()) {
         blocks.push(token.isFunction() ? "(" : token.value);
       } else if (token.isSymbol("}")
                  || token.isSymbol(")")
                  || token.isSymbol("]")) {
         if (blocks.length) {
           var ontop = blocks[blocks.length - 1];
           if ((token.isSymbol("}") && ontop == "{")
               || (token.isSymbol(")") && ontop == "(")
               || (token.isSymbol("]") && ontop == "[")) {
             blocks.pop();
           }
         }
       }
       token = this.getToken(false, false);
     }
     return "";
   },

   parseKeyframesRule: function(aToken, aSheet) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var keyframesRule = new jscsspKeyframesRule();
     keyframesRule.currentLine = currentLine;
     this.preserveState();
     var token = this.getToken(true, true);
     var foundName = false;
     while (token.isNotNull()) {
       if (token.isIdent()) {
         // should be the keyframes' name
         foundName = true;
         s += " " + token.value;
         keyframesRule.name = token.value;
         token = this.getToken(true, true);
         if (token.isSymbol("{"))
           this.ungetToken();
         else {
           // error...
           token.type = jscsspToken.NULL_TYPE;
           break;
         }
       }
       else if (token.isSymbol("{")) {
         if (!foundName) {
           token.type = jscsspToken.NULL_TYPE;
           // not a valid keyframes at-rule
         }
         break;
       }
       else {
         token.type = jscsspToken.NULL_TYPE;
         // not a valid keyframes at-rule
         break;
       }
       token = this.getToken(true, true);
     }

     if (token.isSymbol("{") && keyframesRule.name) {
       // ok let's parse keyframe rules now...
       s += " { ";
       token = this.getToken(true, false);
       while (token.isNotNull()) {
         if (token.isComment() && this.mPreserveComments) {
           s += " " + token.value;
           var comment = new jscsspComment();
           comment.parsedCssText = token.value;
           keyframesRule.cssRules.push(comment);
         } else if (token.isSymbol("}")) {
           valid = true;
           break;
         } else {
           var r = this.parseKeyframeRule(token, keyframesRule, true);
           if (r)
             s += r;
         }
         token = this.getToken(true, false);
       }
     }
     if (valid) {
       this.forgetState();
       keyframesRule.currentLine = currentLine;
       keyframesRule.parsedCssText = s;
       aSheet.cssRules.push(keyframesRule);
       return true;
     }
     this.restoreState();
     return false;
   },

   parseKeyframeRule: function(aToken, aOwner) {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     this.preserveState();
     var token = aToken;

     // find the keyframe keys
     var key = "";
     while (token.isNotNull()) {
       if (token.isIdent() || token.isPercentage()) {
         if (token.isIdent()
             && !token.isIdent("from")
             && !token.isIdent("to")) {
           key = "";
           break;
         }
         key += token.value;
         token = this.getToken(true, true);
         if (token.isSymbol("{")) {
           this.ungetToken();
           break;
         }
         else
           if (token.isSymbol(",")) {
             key += ", ";
           }
           else {
             key = "";
             break;
           }
       }
       else {
         key = "";
         break;
       }
       token = this.getToken(true, true);
     }

     var valid = false;
     var declarations = [];
     if (key) {
       var s = key;
       token = this.getToken(true, true);
       if (token.isSymbol("{")) {
         s += " { ";
         token = this.getToken(true, false);
         while (true) {
           if (!token.isNotNull()) {
             valid = true;
             break;
           }
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, declarations, true, true, aOwner);
             s += ((d && declarations.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     else {
       // key is invalid so the whole rule is invalid with it
     }

     if (valid) {
       var rule = new jscsspKeyframeRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.declarations = declarations;
       rule.keyText = key;
       rule.parentRule = aOwner;
       aOwner.cssRules.push(rule);
       return s;
     }
     this.restoreState();
     s = this.currentToken().value;
     this.addUnknownAtRule(aOwner, s);
     return "";
   },

   parseMediaRule: function(aToken, aSheet) {
    this.mScanner.mMediaQueryMode = true;
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     var s = aToken.value;
     var valid = false;
     var mediaRule = new jscsspMediaRule();
     mediaRule.currentLine = currentLine;
     this.preserveState();
     var token = this.getToken(true, true);
     var foundMedia = false;
     while (token.isNotNull()) {
       if (token.isIdent()) {
         foundMedia = true;
         s += " " + token.value;
        mediaRule.media.push(token.value);
         token = this.getToken(true, true);
         if (token.isSymbol(",")) {
           s += ",";
         } else {
           if (token.isSymbol("{"))
             this.ungetToken();
           else {
             // error...
             token.type = jscsspToken.NULL_TYPE;
             break;
           }
         }
       }
       else if (token.isSymbol("{"))
         break;
       else if (foundMedia) {
         token.type = jscsspToken.NULL_TYPE;
         // not a media list
         break;
       }
       token = this.getToken(true, true);
     }
     if (token.isSymbol("{") && mediaRule.media.length) {
       // ok let's parse style rules now...
       s += " { ";
       token = this.getToken(true, false);
       while (token.isNotNull()) {
         if (token.isComment() && this.mPreserveComments) {
           s += " " + token.value;
           var comment = new jscsspComment();
           comment.parsedCssText = token.value;
           mediaRule.cssRules.push(comment);
         } else if (token.isSymbol("}")) {
           valid = true;
           break;
         } else {
           var r = this.parseStyleRule(token, mediaRule, true);
           if (r)
             s += r;
         }
         token = this.getToken(true, false);
       }
     }
    if (valid) {
       this.forgetState();
       mediaRule.parsedCssText = s;
       aSheet.cssRules.push(mediaRule);
       return true;
     }
     this.restoreState();
     return false;
   },


   trim11: function(str) {
     str = str.replace(/^\s+/, '');
     for (var i = str.length - 1; i >= 0; i--) {
       if (/\S/.test( str.charAt(i) )) { // XXX charat
         str = str.substring(0, i + 1);
         break;
       }
     }
     return str;
   },

   parseStyleRule: function(aToken, aOwner, aIsInsideMediaRule)
   {
     var currentLine = CountLF(this.mScanner.getAlreadyScanned());
     this.preserveState();
     // first let's see if we have a selector here...
     var selector = this.parseSelector(aToken, false);
     var valid = false;
     var declarations = [];
     if (selector) {
       selector = this.trim11(selector.selector);
       var s = selector;
       var token = this.getToken(true, true);
       if (token.isSymbol("{")) {
         s += " { ";
         var token = this.getToken(true, false);
         while (true) {
           if (!token.isNotNull()) {
             valid = true;
             break;
           }
           if (token.isSymbol("}")) {
             s += "}";
             valid = true;
             break;
           } else {
             var d = this.parseDeclaration(token, declarations, true, true, aOwner);
             s += ((d && declarations.length) ? " " : "") + d;
           }
           token = this.getToken(true, false);
         }
       }
     }
     else {
       // selector is invalid so the whole rule is invalid with it
     }

     if (valid) {
       var rule = new jscsspStyleRule();
       rule.currentLine = currentLine;
       rule.parsedCssText = s;
       rule.declarations = declarations;
       rule.mSelectorText = selector;
       if (aIsInsideMediaRule)
         rule.parentRule = aOwner;
       else
         rule.parentStyleSheet = aOwner;
       aOwner.cssRules.push(rule);
       return s;
     }
     this.restoreState();
     s = this.currentToken().value;
     this.addUnknownAtRule(aOwner, s);
     return "";
   },

   parseSelector: function(aToken, aParseSelectorOnly) {
     var s = "";
     var specificity = {a: 0, b: 0, c: 0, d: 0}; // CSS 2.1 section 6.4.3
     var isFirstInChain = true;
     var token = aToken;
     var valid = false;
     var combinatorFound = false;
     while (true) {
       if (!token.isNotNull()) {
         if (aParseSelectorOnly)
           return {selector: s, specificity: specificity };
         return "";
       }

       if (!aParseSelectorOnly && token.isSymbol("{")) {
         // end of selector
         valid = !combinatorFound;
    if (valid) this.ungetToken();
         break;
       }

       if (token.isSymbol(",")) { // group of selectors
         s += token.value;
         isFirstInChain = true;
         combinatorFound = false;
         token = this.getToken(false, true);
         continue;
       }
       // now combinators and grouping...
       else if (!combinatorFound
           && (token.isWhiteSpace()
            || token.isSymbol(">")
                     || token.isSymbol("+")
                     || token.isSymbol("~"))) {
    if (token.isWhiteSpace()) {
           s += " ";
      var nextToken = this.lookAhead(true, true);
      if (!nextToken.isNotNull()) {
             if (aParseSelectorOnly)
               return {selector: s, specificity: specificity };
        return "";
      }
      if (nextToken.isSymbol(">")
          || nextToken.isSymbol("+")
          || nextToken.isSymbol("~")) {
             token = this.getToken(true, true);
        s += token.value + " ";
        combinatorFound = true;
      }
    }
         else {
           s += token.value;
      combinatorFound = true;
    }
    isFirstInChain = true;
         token = this.getToken(true, true);
         continue;
       }
       else {
         var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, true);
         if (!simpleSelector)
           break; // error
         s += simpleSelector.selector;
         specificity.b += simpleSelector.specificity.b;
         specificity.c += simpleSelector.specificity.c;
         specificity.d += simpleSelector.specificity.d;
    isFirstInChain = false;
    combinatorFound = false;
       }

       token = this.getToken(false, true);
     }

     if (valid) {
       return {selector: s, specificity: specificity };
     }
     return "";
   },

   isPseudoElement: function(aIdent)
   {
     switch (aIdent) {
       case "first-letter":
       case "first-line":
       case "before":
       case "after":
       case "marker":
         return true;
         break;
       default: return false;
         break;
     }
   },

   parseSimpleSelector: function(token, isFirstInChain, canNegate)
   {
     var s = "";
     var specificity = {a: 0, b: 0, c: 0, d: 0}; // CSS 2.1 section 6.4.3

     if (isFirstInChain
         && (token.isSymbol("*") || token.isSymbol("|") || token.isIdent())) {
       // type or universal selector
       if (token.isSymbol("*") || token.isIdent()) {
         // we don't know yet if it's a prefix or a universal
         // selector
         s += token.value;
         var isIdent = token.isIdent();
         token = this.getToken(false, true);
         if (token.isSymbol("|")) {
           // it's a prefix
           s += token.value;
           token = this.getToken(false, true);
           if (token.isIdent() || token.isSymbol("*")) {
             // ok we now have a type element or universal
             // selector
             s += token.value;
             if (token.isIdent())
               specificity.d++;
           } else
             // oops that's an error...
             return null;
         } else {
           this.ungetToken();
           if (isIdent)
             specificity.d++;
         }
       } else if (token.isSymbol("|")) {
         s += token.value;
         token = this.getToken(false, true);
         if (token.isIdent() || token.isSymbol("*")) {
           s += token.value;
           if (token.isIdent())
             specificity.d++;
         } else
           // oops that's an error
           return null;
       }
     }

     else if (token.isSymbol(".") || token.isSymbol("#")) {
       var isClass = token.isSymbol(".");
       s += token.value;
       token = this.getToken(false, true);
       if (token.isIdent()) {
         s += token.value;
         if (isClass)
           specificity.c++;
         else
           specificity.b++;
       }
       else
         return null;
     }

     else if (token.isSymbol(":")) {
       s += token.value;
       token = this.getToken(false, true);
       if (token.isSymbol(":")) {
         s += token.value;
         token = this.getToken(false, true);
       }
       if (token.isIdent()) {
         s += token.value;
         if (this.isPseudoElement(token.value))
           specificity.d++;
         else
           specificity.c++;
       }
       else if (token.isFunction()) {
         s += token.value;
         if (token.isFunction(":not(")) {
           if (!canNegate)
             return null;
           token = this.getToken(true, true);
           var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, false);
           if (!simpleSelector)
             return null;
           else {
             s += simpleSelector.selector;
             token = this.getToken(true, true);
             if (token.isSymbol(")"))
               s += ")";
             else
               return null;
           }
           specificity.c++;
         }
         else {
           while (true) {
             token = this.getToken(false, true);
             if (token.isSymbol(")")) {
               s += ")";
               break;
             } else
               s += token.value;
           }
           specificity.c++;
         }
       } else
         return null;

     } else if (token.isSymbol("[")) {
       s += "[";
       token = this.getToken(true, true);
       if (token.isIdent() || token.isSymbol("*")) {
         s += token.value;
         var nextToken = this.getToken(true, true);
         if (token.isSymbol("|")) {
           s += "|";
           token = this.getToken(true, true);
           if (token.isIdent())
             s += token.value;
           else
             return null;
         } else
           this.ungetToken();
       } else if (token.isSymbol("|")) {
         s += "|";
         token = this.getToken(true, true);
         if (token.isIdent())
           s += token.value;
         else
           return null;
       }
       else
         return null;

       // nothing, =, *=, $=, ^=, |=
       token = this.getToken(true, true);
       if (token.isIncludes()
           || token.isDashmatch()
           || token.isBeginsmatch()
           || token.isEndsmatch()
           || token.isContainsmatch()
           || token.isSymbol("=")) {
         s += token.value;
         token = this.getToken(true, true);
         if (token.isString() || token.isIdent()) {
           s += token.value;
           token = this.getToken(true, true);
         }
         else
           return null;

         if (token.isSymbol("]")) {
           s += token.value;
           specificity.c++;
         }
         else
           return null;
       }
       else if (token.isSymbol("]")) {
         s += token.value;
         specificity.c++;
       }
       else
         return null;

     }
     else if (token.isWhiteSpace()) {
       var t = this.lookAhead(true, true);
       if (t.isSymbol('{'))
         return ""
     }
     if (s)
       return {selector: s, specificity: specificity };
     return null;
   },

   preserveState: function() {
     this.mPreservedTokens.push(this.currentToken());
     this.mScanner.preserveState();
   },

   restoreState: function() {
     if (this.mPreservedTokens.length) {
       this.mScanner.restoreState();
       this.mToken = this.mPreservedTokens.pop();
     }
   },

   forgetState: function() {
     if (this.mPreservedTokens.length) {
       this.mScanner.forgetState();
       this.mPreservedTokens.pop();
     }
   },

   parse: function(aString, aTryToPreserveWhitespaces, aTryToPreserveComments) {
     if (!aString)
       return null; // early way out if we can

     this.mPreserveWS       = aTryToPreserveWhitespaces;
     this.mPreserveComments = aTryToPreserveComments;
     this.mPreservedTokens = [];
     this.mScanner.init(aString);
     var sheet = new jscsspStylesheet();

     // @charset can only appear at first char of the stylesheet
     var token = this.getToken(false, false);
     if (!token.isNotNull())
       return;
     if (token.isAtRule("@charset")) {
       this.parseCharsetRule(token, sheet);
       token = this.getToken(false, false);
     }

     var foundStyleRules = false;
     var foundImportRules = false;
     var foundNameSpaceRules = false;
     while (true) {
       if (!token.isNotNull())
         break;
       if (token.isWhiteSpace())
       {
         if (aTryToPreserveWhitespaces)
           this.addWhitespace(sheet, token.value);
       }

       else if (token.isComment())
       {
         if (this.mPreserveComments)
           this.addComment(sheet, token.value);
       }

       else if (token.isAtRule()) {
         if (token.isAtRule("@variables")) {
           if (!foundImportRules && !foundStyleRules)
             this.parseVariablesRule(token, sheet);
           else {
             this.reportError(kVARIABLES_RULE_POSITION);
             this.addUnknownAtRule(sheet, token.value);
           }
         }
         else if (token.isAtRule("@import")) {
           // @import rules MUST occur before all style and namespace
           // rules
           if (!foundStyleRules && !foundNameSpaceRules)
             foundImportRules = this.parseImportRule(token, sheet);
           else {
             this.reportError(kIMPORT_RULE_POSITION);
             this.addUnknownAtRule(sheet, token.value);
           }
         }
         else if (token.isAtRule("@namespace")) {
           // @namespace rules MUST occur before all style rule and
           // after all @import rules
           if (!foundStyleRules)
             foundNameSpaceRules = this.parseNamespaceRule(token, sheet);
           else {
             this.reportError(kNAMESPACE_RULE_POSITION);
             this.addUnknownAtRule(sheet, token.value);
           }
         }
         else if (token.isAtRule("@font-face")) {
           if (this.parseFontFaceRule(token, sheet))
             foundStyleRules = true;
           else
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@page")) {
           if (this.parsePageRule(token, sheet))
             foundStyleRules = true;
           else
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@media")) {
           if (this.parseMediaRule(token, sheet))
             foundStyleRules = true;
           else
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@keyframes")) {
           if (!this.parseKeyframesRule(token, sheet))
             this.addUnknownAtRule(sheet, token.value);
         }
         else if (token.isAtRule("@charset")) {
           this.reportError(kCHARSET_RULE_CHARSET_SOF);
           this.addUnknownAtRule(sheet, token.value);
         }
         else {
           this.reportError(kUNKNOWN_AT_RULE);
           this.addUnknownAtRule(sheet, token.value);
         }
       }

       else // plain style rules
       {
         var ruleText = this.parseStyleRule(token, sheet, false);
         if (ruleText)
           foundStyleRules = true;
       }
       token = this.getToken(false);
     }

     return sheet;
   }

 };


 function jscsspToken(aType, aValue, aUnit)
 {
   this.type = aType;
   this.value = aValue;
   this.unit = aUnit;
 }

 jscsspToken.NULL_TYPE = 0;

 jscsspToken.WHITESPACE_TYPE = 1;
 jscsspToken.STRING_TYPE = 2;
 jscsspToken.COMMENT_TYPE = 3;
 jscsspToken.NUMBER_TYPE = 4;
 jscsspToken.IDENT_TYPE = 5;
 jscsspToken.FUNCTION_TYPE = 6;
 jscsspToken.ATRULE_TYPE = 7;
 jscsspToken.INCLUDES_TYPE = 8;
 jscsspToken.DASHMATCH_TYPE = 9;
 jscsspToken.BEGINSMATCH_TYPE = 10;
 jscsspToken.ENDSMATCH_TYPE = 11;
 jscsspToken.CONTAINSMATCH_TYPE = 12;
 jscsspToken.SYMBOL_TYPE = 13;
 jscsspToken.DIMENSION_TYPE = 14;
 jscsspToken.PERCENTAGE_TYPE = 15;
 jscsspToken.HEX_TYPE = 16;

 jscsspToken.prototype = {

   isNotNull: function ()
   {
     return this.type;
   },

   _isOfType: function (aType, aValue)
   {
     return (this.type == aType && (!aValue || this.value.toLowerCase() == aValue));
   },

   isWhiteSpace: function(w)
   {
     return this._isOfType(jscsspToken.WHITESPACE_TYPE, w);
   },

   isString: function()
   {
     return this._isOfType(jscsspToken.STRING_TYPE);
   },

   isComment: function()
   {
     return this._isOfType(jscsspToken.COMMENT_TYPE);
   },

   isNumber: function(n)
   {
     return this._isOfType(jscsspToken.NUMBER_TYPE, n);
   },

   isSymbol: function(c)
   {
     return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
   },

   isIdent: function(i)
   {
     return this._isOfType(jscsspToken.IDENT_TYPE, i);
   },

   isFunction: function(f)
   {
     return this._isOfType(jscsspToken.FUNCTION_TYPE, f);
   },

   isAtRule: function(a)
   {
     return this._isOfType(jscsspToken.ATRULE_TYPE, a);
   },

   isIncludes: function()
   {
     return this._isOfType(jscsspToken.INCLUDES_TYPE);
   },

   isDashmatch: function()
   {
     return this._isOfType(jscsspToken.DASHMATCH_TYPE);
   },

   isBeginsmatch: function()
   {
     return this._isOfType(jscsspToken.BEGINSMATCH_TYPE);
   },

   isEndsmatch: function()
   {
     return this._isOfType(jscsspToken.ENDSMATCH_TYPE);
   },

   isContainsmatch: function()
   {
     return this._isOfType(jscsspToken.CONTAINSMATCH_TYPE);
   },

   isSymbol: function(c)
   {
     return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
   },

   isDimension: function()
   {
     return this._isOfType(jscsspToken.DIMENSION_TYPE);
   },

   isPercentage: function()
   {
     return this._isOfType(jscsspToken.PERCENTAGE_TYPE);
   },

   isHex: function()
   {
     return this._isOfType(jscsspToken.HEX_TYPE);
   },

   isDimensionOfUnit: function(aUnit)
   {
     return (this.isDimension() && this.unit == aUnit);
   },

   isLength: function()
   {
     return (this.isPercentage() ||
             this.isDimensionOfUnit("cm") ||
             this.isDimensionOfUnit("mm") ||
             this.isDimensionOfUnit("in") ||
             this.isDimensionOfUnit("pc") ||
             this.isDimensionOfUnit("px") ||
             this.isDimensionOfUnit("em") ||
             this.isDimensionOfUnit("ex") ||
             this.isDimensionOfUnit("pt"));
   },

   isAngle: function()
   {
     return (this.isDimensionOfUnit("deg") ||
             this.isDimensionOfUnit("rad") ||
             this.isDimensionOfUnit("grad"));
   }
 }

 var kJscsspUNKNOWN_RULE   = 0;
 var kJscsspSTYLE_RULE     = 1
 var kJscsspCHARSET_RULE   = 2;
 var kJscsspIMPORT_RULE    = 3;
 var kJscsspMEDIA_RULE     = 4;
 var kJscsspFONT_FACE_RULE = 5;
 var kJscsspPAGE_RULE      = 6;

 var kJscsspKEYFRAMES_RULE = 7;
 var kJscsspKEYFRAME_RULE  = 8;

 var kJscsspNAMESPACE_RULE = 100;
 var kJscsspCOMMENT        = 101;
 var kJscsspWHITE_SPACE    = 102;

 var kJscsspVARIABLES_RULE = 200;

 var kJscsspSTYLE_DECLARATION = 1000;

 var gTABS = "";

 function jscsspStylesheet()
 {
   this.cssRules = [];
   this.variables = {};
 }

 jscsspStylesheet.prototype = {
   insertRule: function(aRule, aIndex) {
     try {
      this.cssRules.splice(aIndex, 1, aRule);
     }
     catch(e) {
     }
   },

   deleteRule: function(aIndex) {
     try {
       this.cssRules.splice(aIndex);
     }
     catch(e) {
     }
   },

   cssText: function() {
     var rv = "";
     for (var i = 0; i < this.cssRules.length; i++)
       rv += this.cssRules[i].cssText() + "\n";
     return rv;
   },

   resolveVariables: function(aMedium) {

     function ItemFoundInArray(aArray, aItem) {
       for (var i = 0; i < aArray.length; i++)
         if (aItem == aArray[i])
           return true;
       return false;
     }

     for (var i = 0; i < this.cssRules.length; i++)
     {
       var rule = this.cssRules[i];
       if (rule.type == kJscsspSTYLE_RULE || rule.type == kJscsspIMPORT_RULE)
         break;
       else if (rule.type == kJscsspVARIABLES_RULE &&
                (!rule.media.length || ItemFoundInArray(rule.media, aMedium))) {

         for (var j = 0; j < rule.declarations.length; j++) {
           var valueText = "";
           for (var k = 0; k < rule.declarations[j].values.length; k++)
             valueText += (k ? " " : "") + rule.declarations[j].values[k].value;
           this.variables[rule.declarations[j].property] = valueText;
         }
       }
     }
   }
 };

 /* kJscsspCHARSET_RULE */

 function jscsspCharsetRule()
 {
   this.type = kJscsspCHARSET_RULE;
   this.encoding = null;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspCharsetRule.prototype = {

   cssText: function() {
     return "@charset " + this.encoding + ";";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(false, false);
     if (token.isAtRule("@charset")) {
       if (parser.parseCharsetRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.encoding = newRule.encoding;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspUNKNOWN_RULE */

 function jscsspErrorRule(aErrorMsg)
 {
   this.error = aErrorMsg ? aErrorMsg : "INVALID";
   this.type = kJscsspUNKNOWN_RULE;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspErrorRule.prototype = {
   cssText: function() {
     return this.parsedCssText;
   }
 };

 /* kJscsspCOMMENT */

 function jscsspComment()
 {
   this.type = kJscsspCOMMENT;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspComment.prototype = {
   cssText: function() {
     return this.parsedCssText;
   },

   setCssText: function(val) {
     var parser = new CSSParser(val);
     var token = parser.getToken(true, false);
     if (token.isComment())
       this.parsedCssText = token.value;
     else
       throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspWHITE_SPACE */

 function jscsspWhitespace()
 {
   this.type = kJscsspWHITE_SPACE;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspWhitespace.prototype = {
   cssText: function() {
     return this.parsedCssText;
   }
 };

 /* kJscsspIMPORT_RULE */

 function jscsspImportRule()
 {
   this.type = kJscsspIMPORT_RULE;
   this.parsedCssText = null;
   this.href = null;
   this.media = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspImportRule.prototype = {
   cssText: function() {
     var mediaString = this.media.join(", ");
     return "@import " + this.href
                       + ((mediaString && mediaString != "all") ? mediaString + " " : "")
                       + ";";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@import")) {
       if (parser.parseImportRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.href = newRule.href;
         this.media = newRule.media;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspNAMESPACE_RULE */

 function jscsspNamespaceRule()
 {
   this.type = kJscsspNAMESPACE_RULE;
   this.parsedCssText = null;
   this.prefix = null;
   this.url = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspNamespaceRule.prototype = {
   cssText: function() {
     return "@namespace " + (this.prefix ? this.prefix + " ": "")
                         + this.url
                         + ";";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@namespace")) {
       if (parser.parseNamespaceRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.url = newRule.url;
         this.prefix = newRule.prefix;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspSTYLE_DECLARATION */

 function jscsspDeclaration()
 {
   this.type = kJscsspSTYLE_DECLARATION;
   this.property = null;
   this.values = [];
   this.valueText = null;
   this.priority = null;
   this.parsedCssText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspDeclaration.prototype = {
   kCOMMA_SEPARATED: {
     "cursor": true,
     "font-family": true,
     "voice-family": true,
     "background-image": true
   },

   kUNMODIFIED_COMMA_SEPARATED_PROPERTIES: {
     "text-shadow": true,
     "box-shadow": true,
     "-moz-transition": true,
     "-moz-transition-property": true,
     "-moz-transition-duration": true,
     "-moz-transition-timing-function": true,
     "-moz-transition-delay": true
   },

   cssText: function() {
     var prefixes = CssInspector.prefixesForProperty(this.property);

     if (this.property in this.kUNMODIFIED_COMMA_SEPARATED_PROPERTIES) {
       if (prefixes) {
         var rv = "";
         for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
           var property = prefixes[propertyIndex];
           rv += (propertyIndex ? gTABS : "") + property + ": ";
           rv += this.valueText + (this.priority ? " !important" : "") + ";";
           rv += ((prefixes.length > 1 && propertyIndex != prefixes.length -1) ? "\n" : "");
         }
         return rv;
       }
       return this.property + ": " + this.valueText +
              (this.priority ? " !important" : "") + ";"
     }

     if (prefixes) {
       var rv = "";
       for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
         var property = prefixes[propertyIndex];
         rv += (propertyIndex ? gTABS : "") + property + ": ";
         var separator = (property in this.kCOMMA_SEPARATED) ? ", " : " ";
         for (var i = 0; i < this.values.length; i++)
           if (this.values[i].cssText() != null)
             rv += (i ? separator : "") + this.values[i].cssText();
           else
             return null;
         rv += (this.priority ? " !important" : "") + ";" +
               ((prefixes.length > 1 && propertyIndex != prefixes.length -1) ? "\n" : "");
       }
       return rv;
     }

     var rv = this.property + ": ";
     var separator = (this.property in this.kCOMMA_SEPARATED) ? ", " : " ";
     var extras = {"webkit": false, "presto": false, "trident": false, "generic": false }
     for (var i = 0; i < this.values.length; i++) {
       var v = this.values[i].cssText();
       if (v != null) {
         var paren = v.indexOf("(");
         var kwd = v;
         if (paren != -1)
           kwd = v.substr(0, paren);
         if (kwd in kCSS_VENDOR_VALUES) {
           for (var j in kCSS_VENDOR_VALUES[kwd]) {
             extras[j] = extras[j] || (kCSS_VENDOR_VALUES[kwd][j] != "");
           }
         }
         rv += (i ? separator : "") + v;
       }
       else
         return null;
     }
     rv += (this.priority ? " !important" : "") + ";";

     for (var j in extras) {
       if (extras[j]) {
         var str = "\n" + gTABS +  this.property + ": ";
         for (var i = 0; i < this.values.length; i++) {
           var v = this.values[i].cssText();
           if (v != null) {
             var paren = v.indexOf("(");
             var kwd = v;
             if (paren != -1)
               kwd = v.substr(0, paren);
             if (kwd in kCSS_VENDOR_VALUES) {
               functor = kCSS_VENDOR_VALUES[kwd][j];
               if (functor) {
                 v = (typeof functor == "string") ? functor : functor(v, j);
                 if (!v) {
                   str = null;
                   break;
                 }
               }
             }
             str += (i ? separator : "") + v;
           }
           else
             return null;
         }
         if (str)
           rv += str + ";"
         else
           rv += "\n" + gTABS + "/* Impossible to translate property " + this.property + " for " + j + " */";
       }
     }
     return rv;
   },

   setCssText: function(val) {
     var declarations = [];
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (parser.parseDeclaration(token, declarations, true, true, null)
         && declarations.length
         && declarations[0].type == kJscsspSTYLE_DECLARATION) {
       var newDecl = declarations.cssRules[0];
       this.property = newDecl.property;
       this.value = newDecl.value;
       this.priority = newDecl.priority;
       this.parsedCssText = newRule.parsedCssText;
       return;
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspFONT_FACE_RULE */

 function jscsspFontFaceRule()
 {
   this.type = kJscsspFONT_FACE_RULE;
   this.parsedCssText = null;
   this.descriptors = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspFontFaceRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@font-face {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.descriptors.length; i++)
       rv += gTABS + this.descriptors[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@font-face")) {
       if (parser.parseFontFaceRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.descriptors = newRule.descriptors;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspKEYFRAMES_RULE */
 function jscsspKeyframesRule()
 {
   this.type = kJscsspKEYFRAMES_RULE;
   this.parsedCssText = null;
   this.cssRules = [];
   this.name = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspKeyframesRule.prototype = {
   cssText: function() {
     var rv = gTABS
                + "@keyframes "
                + this.name + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.cssRules.length; i++)
       rv += gTABS + this.cssRules[i].cssText() + "\n";
     gTABS = preservedGTABS;
     rv += gTABS + "}\n";
     return rv;
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@keyframes")) {
       if (parser.parseKeyframesRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.cssRules = newRule.cssRules;
         this.name = newRule.name;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspKEYFRAME_RULE */
 function jscsspKeyframeRule()
 {
   this.type = kJscsspKEYFRAME_RULE;
   this.parsedCssText = null;
   this.declarations = []
   this.keyText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspKeyframeRule.prototype = {
   cssText: function() {
     var rv = this.keyText + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++) {
       var declText = this.declarations[i].cssText();
       if (declText)
         rv += gTABS + this.declarations[i].cssText() + "\n";
     }
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (!token.isNotNull()) {
       if (parser.parseKeyframeRule(token, sheet, false)) {
         var newRule = sheet.cssRules[0];
         this.keyText = newRule.keyText;
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspMEDIA_RULE */

 function jscsspMediaRule()
 {
   this.type = kJscsspMEDIA_RULE;
   this.parsedCssText = null;
   this.cssRules = [];
   this.media = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspMediaRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@media " + this.media.join(", ") + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.cssRules.length; i++)
       rv += gTABS + this.cssRules[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@media")) {
       if (parser.parseMediaRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.cssRules = newRule.cssRules;
         this.media = newRule.media;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspSTYLE_RULE */

 function jscsspStyleRule()
 {
   this.type = kJscsspSTYLE_RULE;
   this.parsedCssText = null;
   this.declarations = []
   this.mSelectorText = null;
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspStyleRule.prototype = {
   cssText: function() {
     var rv = this.mSelectorText + " {\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++) {
       var declText = this.declarations[i].cssText();
       if (declText)
         rv += gTABS + this.declarations[i].cssText() + "\n";
     }
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (!token.isNotNull()) {
       if (parser.parseStyleRule(token, sheet, false)) {
         var newRule = sheet.cssRules[0];
         this.mSelectorText = newRule.mSelectorText;
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   },

   selectorText: function() {
     return this.mSelectorText;
   },

   setSelectorText: function(val) {
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (!token.isNotNull()) {
       var s = parser.parseSelector(token, true);
       if (s) {
         this.mSelectorText = s.selector;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspPAGE_RULE */

 function jscsspPageRule()
 {
   this.type = kJscsspPAGE_RULE;
   this.parsedCssText = null;
   this.pageSelector = null;
   this.declarations = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
 }

 jscsspPageRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@page "
                    + (this.pageSelector ? this.pageSelector + " ": "")
                    + "{\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++)
       rv += gTABS + this.declarations[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@page")) {
       if (parser.parsePageRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.pageSelector = newRule.pageSelector;
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 /* kJscsspVARIABLES_RULE */

 function jscsspVariablesRule()
 {
   this.type = kJscsspVARIABLES_RULE;
   this.parsedCssText = null;
   this.declarations = [];
   this.parentStyleSheet = null;
   this.parentRule = null;
   this.media = null;
 }

 jscsspVariablesRule.prototype = {
   cssText: function() {
     var rv = gTABS + "@variables " +
                      (this.media.length ? this.media.join(", ") + " " : "") +
                      "{\n";
     var preservedGTABS = gTABS;
     gTABS += "  ";
     for (var i = 0; i < this.declarations.length; i++)
       rv += gTABS + this.declarations[i].cssText() + "\n";
     gTABS = preservedGTABS;
     return rv + gTABS + "}";
   },

   setCssText: function(val) {
     var sheet = {cssRules: []};
     var parser = new CSSParser(val);
     var token = parser.getToken(true, true);
     if (token.isAtRule("@variables")) {
       if (parser.parseVariablesRule(token, sheet)) {
         var newRule = sheet.cssRules[0];
         this.declarations = newRule.declarations;
         this.parsedCssText = newRule.parsedCssText;
         return;
       }
     }
     throw DOMException.SYNTAX_ERR;
   }
 };

 var kJscsspINHERIT_VALUE = 0;
 var kJscsspPRIMITIVE_VALUE = 1;
 var kJscsspVARIABLE_VALUE = 4;

 function jscsspVariable(aType, aSheet)
 {
   this.value = "";
   this.type = aType;
   this.name  = null;
   this.parentRule = null;
   this.parentStyleSheet = aSheet;
 }

 jscsspVariable.prototype = {
   cssText: function() {
     if (this.type == kJscsspVARIABLE_VALUE)
       return this.resolveVariable(this.name, this.parentRule, this.parentStyleSheet);
     else
       return this.value;
   },

   setCssText: function(val) {
     if (this.type == kJscsspVARIABLE_VALUE)
       throw DOMException.SYNTAX_ERR;
     else
       this.value = val;
   },

   resolveVariable: function(aName, aRule, aSheet)
   {
     if (aName.toLowerCase() in aSheet.variables)
       return aSheet.variables[aName.toLowerCase()];
     return null;
   }
 };

 function ParseURL(buffer) {
   var result = { };
   result.protocol = "";
   result.user = "";
   result.password = "";
   result.host = "";
   result.port = "";
   result.path = "";
   result.query = "";

   var section = "PROTOCOL";
   var start = 0;
   var wasSlash = false;

   while(start < buffer.length) {
     if(section == "PROTOCOL") {
       if(buffer.charAt(start) == ':') {
         section = "AFTER_PROTOCOL";
         start++;
       } else if(buffer.charAt(start) == '/' && result.protocol.length() == 0) {
         section = PATH;
       } else {
         result.protocol += buffer.charAt(start++);
       }
     } else if(section == "AFTER_PROTOCOL") {
       if(buffer.charAt(start) == '/') {
     if(!wasSlash) {
           wasSlash = true;
     } else {
           wasSlash = false;
           section = "USER";
     }
         start ++;
       } else {
         throw new ParseException("Protocol shell be separated with 2 slashes");
       }
     } else if(section == "USER") {
       if(buffer.charAt(start) == '/') {
         result.host = result.user;
         result.user = "";
         section = "PATH";
       } else if(buffer.charAt(start) == '?') {
         result.host = result.user;
         result.user = "";
         section = "QUERY";
         start++;
       } else if(buffer.charAt(start) == ':') {
         section = "PASSWORD";
         start++;
       } else if(buffer.charAt(start) == '@') {
         section = "HOST";
         start++;
       } else {
         result.user += buffer.charAt(start++);
       }
     } else if(section == "PASSWORD") {
       if(buffer.charAt(start) == '/') {
         result.host = result.user;
         result.port = result.password;
         result.user = "";
         result.password = "";
         section = "PATH";
       } else if(buffer.charAt(start) == '?') {
         result.host = result.user;
         result.port = result.password;
         result.user = "";
         result.password = "";
         section = "QUERY";
         start ++;
       } else if(buffer.charAt(start) == '@') {
         section = "HOST";
         start++;
       } else {
         result.password += buffer.charAt(start++);
       }
     } else if(section == "HOST") {
       if(buffer.charAt(start) == '/') {
         section = "PATH";
       } else if(buffer.charAt(start) == ':') {
         section = "PORT";
         start++;
       } else if(buffer.charAt(start) == '?') {
         section = "QUERY";
         start++;
       } else {
         result.host += buffer.charAt(start++);
       }
     } else if(section == "PORT") {
       if(buffer.charAt(start) == '/') {
         section = "PATH";
       } else if(buffer.charAt(start) == '?') {
         section = "QUERY";
         start++;
       } else {
         result.port += buffer.charAt(start++);
       }
     } else if(section == "PATH") {
       if(buffer.charAt(start) == '?') {
     section = "QUERY";
     start ++;
       } else {
     result.path += buffer.charAt(start++);
       }
     } else if(section == "QUERY") {
       result.query += buffer.charAt(start++);
     }
   }

   if(section == "PROTOCOL") {
     result.host = result.protocol;
     result.protocol = "http";
   } else if(section == "AFTER_PROTOCOL") {
     throw new ParseException("Invalid url");
   } else if(section == "USER") {
     result.host = result.user;
     result.user = "";
   } else if(section == "PASSWORD") {
     result.host = result.user;
     result.port = result.password;
     result.user = "";
     result.password = "";
   }

   return result;
 }

 function ParseException(description) {
     this.description = description;
 }

 function CountLF(s)
 {
   var nCR = s.match( /\n/g );
   return nCR ? nCR.length + 1 : 1;
 }


 function FilterLinearGradientForOutput(aValue, aEngine)
 {
   if (aEngine == "generic")
     return aValue.substr(5);

   if (aEngine == "webkit")
     return aValue.replace( /\-moz\-/g , "-webkit-")

   if (aEngine != "webkit20110101")
     return "";

   var g = CssInspector.parseBackgroundImages(aValue)[0];

   var cancelled = false;
   var str = "-webkit-gradient(linear, ";
   var position = ("position" in g.value) ? g.value.position.toLowerCase() : "";
   var angle    = ("angle" in g.value) ? g.value.angle.toLowerCase() : "";
   // normalize angle
   if (angle) {
     var match = angle.match(/^([0-9\-\.\\+]+)([a-z]*)/);
     var angle = parseFloat(match[1]);
     var unit  = match[2];
     switch (unit) {
       case "grad": angle = angle * 90 / 100; break;
       case "rad":  angle = angle * 180 / Math.PI; break;
       default: break;
     }
     while (angle < 0)
       angle += 360;
     while (angle >= 360)
       angle -= 360;
   }
   // get startpoint w/o keywords
   var startpoint = [];
   var endpoint = [];
   if (position != "") {
     if (position == "center")
       position = "center center";
     startpoint = position.split(" ");
     if (angle == "" && angle != 0) {
       // no angle, then we just turn the point 180 degrees around center
       switch (startpoint[0]) {
         case "left":   endpoint.push("right"); break;
         case "center": endpoint.push("center"); break;
         case "right":  endpoint.push("left"); break;
         default: {
             var match = startpoint[0].match(/^([0-9\-\.\\+]+)([a-z]*)/);
             var v     = parseFloat(match[0]);
             var unit  = match[1];
             if (unit == "%") {
               endpoint.push((100-v) + "%");
             }
             else
               cancelled = true;
           }
           break;
       }
       if (!cancelled)
         switch (startpoint[1]) {
           case "top":    endpoint.push("bottom"); break;
           case "center": endpoint.push("center"); break;
           case "bottom": endpoint.push("top"); break;
           default: {
               var match = startpoint[1].match(/^([0-9\-\.\\+]+)([a-z]*)/);
               var v     = parseFloat(match[0]);
               var unit  = match[1];
               if (unit == "%") {
                 endpoint.push((100-v) + "%");
               }
               else
                 cancelled = true;
             }
             break;
         }
     }
     else {
       switch (angle) {
         case 0:    endpoint.push("right"); endpoint.push(startpoint[1]); break;
         case 90:   endpoint.push(startpoint[0]); endpoint.push("top"); break;
         case 180:  endpoint.push("left"); endpoint.push(startpoint[1]); break;
         case 270:  endpoint.push(startpoint[0]); endpoint.push("bottom"); break;
         default:     cancelled = true; break;
       }
     }
   }
   else {
     // no position defined, we accept only vertical and horizontal
     if (angle == "")
       angle = 270;
     switch (angle) {
       case 0:    startpoint= ["left", "center"];   endpoint = ["right", "center"]; break;
       case 90:   startpoint= ["center", "bottom"]; endpoint = ["center", "top"]; break;
       case 180:  startpoint= ["right", "center"];  endpoint = ["left", "center"]; break;
       case 270:  startpoint= ["center", "top"];    endpoint = ["center", "bottom"]; break;
       default:     cancelled = true; break;
     }
   }

   if (cancelled)
     return "";

   str += startpoint.join(" ") + ", " + endpoint.join(" ");
   if (!g.value.stops[0].position)
     g.value.stops[0].position = "0%";
   if (!g.value.stops[g.value.stops.length-1].position)
     g.value.stops[g.value.stops.length-1].position = "100%";
   var current = 0;
   for (var i = 0; i < g.value.stops.length && !cancelled; i++) {
     var s = g.value.stops[i];
     if (s.position) {
       if (s.position.indexOf("%") == -1) {
         cancelled = true;
         break;
       }
     }
     else {
       var j = i + 1;
       while (j < g.value.stops.length && !g.value.stops[j].position)
         j++;
       var inc = parseFloat(g.value.stops[j].position) - current;
       for (var k = i; k < j; k++) {
         g.value.stops[k].position = (current + inc * (k - i + 1) / (j - i + 1)) + "%";
       }
     }
     current = parseFloat(s.position);
     str += ", color-stop(" + (parseFloat(current) / 100) + ", " + s.color + ")";
   }

   if (cancelled)
     return "";
   return str + ")";
 }

 function FilterRadialGradientForOutput(aValue, aEngine)
 {
   if (aEngine == "generic")
     return aValue.substr(5);

   else if (aEngine == "webkit")
     return aValue.replace( /\-moz\-/g , "-webkit-")

   else if (aEngine != "webkit20110101")
     return "";

   var g = CssInspector.parseBackgroundImages(aValue)[0];

   var shape = ("shape" in g.value) ? g.value.shape : "";
   var size  = ("size"  in g.value) ? g.value.size : "";
   if (shape != "circle"
       || (size != "farthest-corner" && size != "cover"))
     return "";

   if (g.value.stops.length < 2
       || !("position" in g.value.stops[0])
       || !g.value.stops[g.value.stops.length - 1].position
       || !("position" in g.value.stops[0])
       || !g.value.stops[g.value.stops.length - 1].position)
     return "";

   for (var i = 0; i < g.value.stops.length; i++) {
     var s = g.value.stops[i];
     if (("position" in s) && s.position && s.position.indexOf("px") == -1)
       return "";
   }

   var str = "-webkit-gradient(radial, ";
   var position  = ("position"  in g.value) ? g.value.position : "center center";
   str += position + ", " +  parseFloat(g.value.stops[0].position) + ", ";
   str += position + ", " +  parseFloat(g.value.stops[g.value.stops.length - 1].position);

   // at this point we're sure to deal with pixels
   var current = parseFloat(g.value.stops[0].position);
   for (var i = 0; i < g.value.stops.length; i++) {
     var s = g.value.stops[i];
     if (!("position" in s) || !s.position) {
       var j = i + 1;
       while (j < g.value.stops.length && !g.value.stops[j].position)
         j++;
       var inc = parseFloat(g.value.stops[j].position) - current;
       for (var k = i; k < j; k++) {
         g.value.stops[k].position = (current + inc * (k - i + 1) / (j - i + 1)) + "px";
       }
     }
     current = parseFloat(s.position);
     var c = (current - parseFloat(g.value.stops[0].position)) /
             (parseFloat(g.value.stops[g.value.stops.length - 1].position) - parseFloat(g.value.stops[0].position));
     str += ", color-stop(" + c + ", " + s.color + ")";
   }
   str += ")"
   return str;
 }

 function FilterRepeatingGradientForOutput(aValue, aEngine)
 {
   if (aEngine == "generic")
     return aValue.substr(5);

   else if (aEngine == "webkit")
     return aValue.replace( /\-moz\-/g , "-webkit-")

   return "";
 }


 /*!
  * css-filters-polyfill.js
  *
  * Author: Christian Schepp Schaefer
  * Summary: A polyfill for CSS filter effects
  * License: MIT
  * Version: 0.22
  *
  * URL:
  * https://github.com/Schepp/
  *
  */
 ;(function(window){
    var polyfilter = {
        // Detect if we are dealing with IE <= 9
        // http://james.padolsey.com/javascript/detect-_ie-in-js-using-conditional-comments/
        _ie:            (function(){
            var undef,
            v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');

            while(
                div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
                all[0]
            );

            return v > 4 ? v : undef;
        }()),

        _svg_cache:         {},

        _create_svg_element: function(tagname,attributes){
            var xmlns = 'http://www.w3.org/2000/svg';
            var elem = document.createElementNS(xmlns,tagname);
            for(key in attributes){
                elem.setAttributeNS(null,key,attributes[key]);
            }

            return elem;
        },

        _create_svg:    function(id,filterelements){
            var xmlns = 'http://www.w3.org/2000/svg';
            var svg = document.createElementNS(xmlns,'svg');
            svg.setAttributeNS(null,'width','0');
            svg.setAttributeNS(null,'height','0');
            svg.setAttributeNS(null,'style','position:absolute');

            var svg_filter = document.createElementNS(xmlns,'filter');
            svg_filter.setAttributeNS(null,'id',id);
            svg.appendChild(svg_filter);

            for(var i = 0; i < filterelements.length; i++){
                svg_filter.appendChild(filterelements[i]);
            }

            return svg;
        },

        _pending_stylesheets: 0,

        _stylesheets:       [],

        _development_mode: (function(){
            if(location.hostname === 'localhost' || location.hostname.search(/.local$/) !== -1 || location.hostname.search(/\d+\.\d+\.\d+\.\d+/) !== -1){
                if(window.console) console.log('Detected localhost or IP address. Assuming you are a developer. Caching of stylesheets is disabled.');
                return true;
            }
            if(window.console) console.log('Caching of stylesheets is enabled. You need to refresh twice to see any changes.');
            return false;
        })(),

        process_stylesheets: function(){
            var xmlHttp = [];

            // Check if path to library is correct, do that 2 secs. after this to not disturb initial processing
            window.setTimeout(function(){
                if (window.XMLHttpRequest) {
                    var xmlHttpCheck = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    var xmlHttpCheck = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlHttpCheck.open('GET', window.polyfilter_scriptpath + 'htc/sepia.htc', true);
                xmlHttpCheck.onreadystatechange = function(){
                    if(xmlHttp.readyState == 4 && xmlHttp.status != 200){
                        alert('The configured path \r\rvar polyfilter_scriptpath = "' + window.polyfilter_scriptpath + '"\r\rseems wrong!\r\rConfigure the polyfill\'s correct absolute(!) script path before referencing the css-filters-polyfill.js, like so:\r\rvar polyfilter_scriptpath = "/js/css-filters-polyfill/";\r\rLeaving IE dead in the water is no option. You damn Mac user... ;)');
                    }
                };
                try{
                    xmlHttpCheck.send(null);
                } catch(e){}
            },2000);


            var stylesheets = document.querySelectorAll ? document.querySelectorAll('style,link[rel="stylesheet"]') : document.getElementsByTagName('*');

            for(var i = 0; i < stylesheets.length; i++){
                (function(i){
                    switch(stylesheets[i].nodeName){
                        default:
                        break;

                        case 'STYLE':
                            polyfilter._stylesheets.push({
                                media:      stylesheets[i].media || 'all',
                                content:    stylesheets[i].innerHTML
                            });
                        break;

                        case 'LINK':
                            if(stylesheets[i].rel === 'stylesheet'){
                                var index = polyfilter._stylesheets.length;

                                polyfilter._stylesheets.push({
                                    media:      stylesheets[i].media || 'all'
                                });

                                polyfilter._pending_stylesheets++;

                                // Fetch external stylesheet
                                var href = stylesheets[i].href;

                                // Use localStorage as cache for stylesheets, if available
                                if(!polyfilter._development_mode && window.localStorage && window.localStorage.getItem('polyfilter_' + href)){
                                    polyfilter._pending_stylesheets--;
                                    polyfilter._stylesheets[index].content = localStorage.getItem('polyfilter_' + href);
                                    if(polyfilter._pending_stylesheets === 0){
                                        polyfilter.process();
                                    }
                                }

                                // Always fetch stylesheets to reflect possible changes
                                try{
                                    if(window.XMLHttpRequest) {
                                        var xmlHttp = new XMLHttpRequest();
                                    } else if(window.ActiveXObject) {
                                        var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
                                    }
                                    xmlHttp.open('GET', href, true);
                                    xmlHttp.onreadystatechange = function(){
                                        if(xmlHttp.readyState === 4){
                                            if(xmlHttp.status === 0){
                                                if(window.console) console.log('Could not fetch external CSS via HTTP-Request ' + href + '. Probably because of cross origin.');
                                                if(!polyfilter._stylesheets[index].content){
                                                    polyfilter._pending_stylesheets--;
                                                    polyfilter._stylesheets[index].content = xmlHttp.responseText;
                                                    if(polyfilter._pending_stylesheets === 0){
                                                        polyfilter.process();
                                                    }
                                                }
                                            } else {
                                                if(!polyfilter._stylesheets[index].content){
                                                    polyfilter._pending_stylesheets--;
                                                    polyfilter._stylesheets[index].content = xmlHttp.responseText;
                                                    if(polyfilter._pending_stylesheets === 0){
                                                        polyfilter.process();
                                                    }
                                                }
                                                // Cache stylesheet in localStorage, if available
                                                if(!polyfilter._development_mode && window.localStorage){
                                                    try{
                                                        window.localStorage.setItem('polyfilter_' + href,polyfilter._stylesheets[index].content)
                                                    }
                                                    catch(e){
                                                        if(window.console) console.log('Local storage quota have been exceeded. Caching of stylesheet ' + href + ' is not possible');
                                                    }
                                                }
                                            }
                                        }
                                    };
                                    try{
                                        xmlHttp.send(null);
                                    } catch(e){
                                        if(window.console) console.log('Could not fetch external CSS via HTTP-Request ' + href + '. Are you maybe testing using the file://-protocol?');
                                        if(!polyfilter._stylesheets[index].content){
                                            polyfilter._pending_stylesheets--;
                                            if(polyfilter._pending_stylesheets === 0){
                                                polyfilter.process();
                                            }
                                        }
                                    }
                                } catch(e){}
                            }
                        break;
                    }
                })(i);
            }
            if(this._pending_stylesheets === 0){
                this.process();
            }
        },

        _processDeclarations:   function(rule){
            var newstyles = '';
            for(var k in rule.declarations){
                var declaration = rule.declarations[k];

                if(declaration.property === 'filter'){

                    if(document.querySelectorAll){
                        var elems = document.querySelectorAll(rule.mSelectorText);
                        for(var k = 0; k < elems.length; k++){
                            elems[k].style.polyfilterStore = declaration.valueText;
                        }
                    }

                    var gluedvalues = declaration.valueText;
                    var values = gluedvalues.split(/\)\s+/),
                        properties = {
                            filtersW3C:     [],
                            filtersWebKit:  [],
                            filtersSVG:     [],
                            filtersIE:      [],
                            behaviorsIE:    []
                        };

                    for(idx in values){
                        var value = values[idx] + ')';

                        currentproperties = polyfilter.convert(value);

                        for(key in currentproperties){
                            if(typeof properties[key] !== 'undefined'){
                                properties[key] = properties[key].concat(currentproperties[key]);
                            }
                        }
                    }

                    newstyles += rule.mSelectorText + '{';
                    if(properties['filtersW3C'].length > 0){
                        var filter =
                        webkitFilter =
                        mozFilter =
                        oFilter =
                        msFilter =
                        properties['filtersW3C'].join(' ');

                        if(properties['filtersWebKit'] && properties['filtersWebKit'].length > 0){
                            webkitFilter = properties['filtersWebKit'].join(' ');
                        }

                        if(typeof this._ie === 'undefined'){
                            newstyles += '-ms-filter:' + msFilter + ';';
                        }

                        newstyles += '-webkit-filter:' + webkitFilter + ';';
                        newstyles += '-moz-filter:' + mozFilter + ';';
                        newstyles += '-o-filter:' + oFilter + ';';
                    }
                    if(properties['filtersSVG'].length > 0){
                        if(properties['filtersSVG'][0] != 'none'){
                            var id = gluedvalues.replace(/[^a-z0-9]/g,'');

                            if(typeof this._svg_cache[id] === 'undefined'){
                                this._svg_cache[id] = this._create_svg(id,properties['filtersSVG']);

                                if(typeof XMLSerializer === 'undefined'){
                                    document.body.appendChild(this._svg_cache[id]);
                                }
                                else {
                                    var s = new XMLSerializer();
                                    var svgString = s.serializeToString(this._svg_cache[id]);
                                    if(svgString.search('SourceGraphic') != -1){
                                        document.body.appendChild(this._svg_cache[id]);
                                    }
                                }
                            }

                            if(typeof XMLSerializer === 'undefined'){
                                newstyles += 'filter: url(#' + id + ')';
                            }
                            else {
                                var s = new XMLSerializer();
                                var svgString = s.serializeToString(this._svg_cache[id]);

                                if(svgString.search('SourceGraphic') != -1){
                                    newstyles += 'filter: url(#' + id + ')';
                                }
                                else {
                                    newstyles += 'filter: url(\'data:image/svg+xml;utf8,' + svgString + '#' + id + '\')';
                                }
                            }
                        }
                        else {
                            newstyles += 'filter: none;';
                        }
                    }
                    if(typeof this._ie !== 'undefined'){
                        if(properties['filtersIE'].length > 0){
                            var filtersIE = properties['filtersIE'].join(' ');

                            newstyles += 'filter:' + filtersIE + ';';
                        }
                        if(properties['behaviorsIE'].length > 0){
                            var behaviorsIE = properties['behaviorsIE'].join(' ');

                            newstyles += 'behavior:' + behaviorsIE + ';';
                        }
                    }
                    newstyles += '}\r\n';
                }
            }
            return newstyles;
        },

        // Absolute path to the .htc-files
        scriptpath:
            window.polyfilter_scriptpath ? window.polyfilter_scriptpath : (function(){
                alert('Please configure the polyfill\'s absolute(!) script path before referencing the css-filters-polyfill.js, like so:\r\nvar polyfilter_scriptpath = "/js/css-filters-polyfill/";');
                return './'
            })(),

        // process stylesheets
        process:        function(){
            var parser = new CSSParser();

            for(var i = 0; i < this._stylesheets.length; i++){
                var newstyles = '';
                var sheet = parser.parse(this._stylesheets[i].content, false, true);
                if(sheet !== null) for(var j in sheet.cssRules){
                    var rule = sheet.cssRules[j];

                    switch(rule.type){
                        default:
                        break;

                        case 1:
                            newstyles += this._processDeclarations(rule);
                        break;

                        case 4:
                            newstyles += '@media ' + rule.media.join(',') + '{';
                            for(var k in rule.cssRules){
                                var mediarule = rule.cssRules[k];

                                newstyles += this._processDeclarations(mediarule);
                            }
                            newstyles += '}';
                        break;
                    }
                }
                var newstylesheet = document.createElement('style');
                newstylesheet.setAttribute('media',this._stylesheets[i].media);

                if(typeof polyfilter._ie === 'undefined'){
                    newstylesheet.innerHTML = newstyles;
                    document.getElementsByTagName('head')[0].appendChild(newstylesheet);
                }
                else {
                    document.getElementsByTagName('head')[0].appendChild(newstylesheet);
                    newstylesheet.styleSheet.cssText = newstyles;
                }
            }
        },

        init:               function(){
            if(Object.defineProperty){
                Object.defineProperty(CSSStyleDeclaration.prototype, 'polyfilter', {
                    get:    function(){
                        return this.polyfilterStore;
                    },
                    set:    function(gluedvalues){
                        values = gluedvalues.split(/\)\s+/);
                        var properties = {
                            filtersW3C:     [],
                            filtersWebKit:  [],
                            filtersSVG:     [],
                            filtersIE:      [],
                            behaviorsIE:    []
                        }

                        for(idx in values){
                            var value = values[idx] + ')';

                            currentproperties = polyfilter.convert(value);

                            for(key in currentproperties){
                                if(typeof properties[key] !== 'undefined'){
                                    properties[key] = properties[key].concat(currentproperties[key]);
                                }
                            }
                        }

                        if(properties['filtersW3C'].length > 0){
                            if(typeof polyfilter._ie === 'undefined'){
                                this.msFilter =
                                    properties['filtersW3C'].join(' ');
                            }

                            this.webkitFilter =
                            this.mozFilter =
                            this.oFilter =
                                properties['filtersW3C'].join(' ');
                        }
                        if(properties['filtersWebKit'].length > 0){
                            this.webkitFilter = properties['filtersWebKit'].join(' ');
                        }
                        if(properties['filtersSVG'].length > 0){
                            if(properties['filtersSVG'][0] != 'none'){
                                var id = gluedvalues.replace(/[^a-z0-9]/g,'');

                                if(typeof polyfilter._svg_cache[id] === 'undefined'){
                                    polyfilter._svg_cache[id] = polyfilter._create_svg(id,properties['filtersSVG']);

                                    if(typeof XMLSerializer === 'undefined'){
                                        document.body.appendChild(polyfilter._svg_cache[id]);
                                    }
                                    else {
                                        var s = new XMLSerializer();
                                        var svgString = s.serializeToString(polyfilter._svg_cache[id]);
                                        if(svgString.search('SourceGraphic') != -1){
                                            document.body.appendChild(polyfilter._svg_cache[id]);
                                        }
                                    }
                                }

                                if(typeof XMLSerializer === 'undefined'){
                                    this.filter = 'url(#' + id + ')';
                                }
                                else {
                                    var s = new XMLSerializer();
                                    var svgString = s.serializeToString(polyfilter._svg_cache[id]);
                                    if(svgString.search('SourceGraphic') != -1){
                                        this.filter = 'url(#' + id + ')';
                                    }
                                    else {
                                        this.filter = 'url(\'data:image/svg+xml;utf8,' + svgString + '#' + id + '\')';
                                    }
                                }
                            }
                            else {
                                this.filter = 'none';
                            }
                        }
                        if(typeof polyfilter._ie !== 'undefined'){
                            if(properties['filtersIE'].length > 0){
                                this.filter =
                                    properties['filtersIE'].join(' ');
                            }
                            else {
                                this.filter = '';
                            }
                            if(properties['behaviorsIE'].length > 0){
                                this.behavior =
                                    properties['behaviorsIE'].join(' ');
                            }
                            else {
                                this.behavior = '';
                            }
                        }
                        this.polyfilterStore = gluedvalues;
                    }
                });
            }
        },

        convert:            function(value){
            // None
            var fmatch = value.match(/none/i);
            if(fmatch !== null){
                var properties = this.filters.none();
            }
            // Grayscale
            var fmatch = value.match(/(grayscale)\(([0-9\.]+)\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.grayscale(amount);
            }
            // Sepia
            var fmatch = value.match(/(sepia)\(([0-9\.]+)\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.sepia(amount);
            }
            // Blur
            var fmatch = value.match(/(blur)\(([0-9]+)[px]*\)/i);
            if(fmatch !== null){
                var amount = parseInt(fmatch[2],10),
                    properties = this.filters.blur(amount);
            }
            // Invert
            var fmatch = value.match(/(invert)\(([0-9\.]+)\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.invert(amount);
            }
            // Brightness
            var fmatch = value.match(/(brightness)\(([0-9\.]+)%\)/i);
            if(fmatch !== null){
                var amount = parseFloat(fmatch[2],10),
                    properties = this.filters.brightness(amount);
            }
            // Drop Shadow
            var fmatch = value.match(/(drop\-shadow)\(([0-9]+)[px]*\s+([0-9]+)[px]*\s+([0-9]+)[px]*\s+([#0-9]+)\)/i);
            if(fmatch !== null){
                var offsetX = parseInt(fmatch[2],10),
                    offsetY = parseInt(fmatch[3],10),
                    radius = parseInt(fmatch[4],10),
                    color = fmatch[5],
                    properties = this.filters.dropShadow(offsetX,offsetY,radius,color);
            }

            return properties;
        },

        // EFFECTS SECTION -------------------------------------------------------------------------------------------------------------

        filters:        {
            // None
            none:           function(){
                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['none'];

                    // Firefox
                    properties['filtersSVG'] = ['none'];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['none'];
                }

                return properties;
            },

            // Grayscale
            grayscale:          function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['grayscale(' + amount + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feColorMatrix',{
                        type:   'matrix',
                        values: (0.2126 + 0.7874 * (1 - amount)) + ' '
                            + (0.7152 - 0.7152 * (1 - amount)) + ' '
                            + (0.0722 - 0.0722 * (1 - amount)) + ' 0 0 '
                            + (0.2126 - 0.2126 * (1 - amount)) + ' '
                            + (0.7152 + 0.2848 * (1 - amount)) + ' '
                            + (0.0722 - 0.0722 * (1 - amount)) + ' 0 0 '
                            + (0.2126 - 0.2126 * (1 - amount)) + ' '
                            + (0.7152 - 0.7152 * (1 - amount)) + ' '
                            + (0.0722 + 0.9278 * (1 - amount)) + ' 0 0 0 0 0 1 0'
                    });
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = amount >= 0.5 ? ['gray'] : [];
                }

                return properties;
            },

            // Sepia
            sepia:          function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){

                    // Proposed spec
                    properties['filtersW3C'] = ['sepia(' + amount + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feColorMatrix',{
                        type:   'matrix',
                        values: (0.393 + 0.607 * (1 - amount)) + ' '
                            + (0.769 - 0.769 * (1 - amount)) + ' '
                            + (0.189 - 0.189 * (1 - amount)) + ' 0 0 '
                            + (0.349 - 0.349 * (1 - amount)) + ' '
                            + (0.686 + 0.314 * (1 - amount)) + ' '
                            + (0.168 - 0.168 * (1 - amount)) + ' 0 0 '
                            + (0.272 - 0.272 * (1 - amount)) + ' '
                            + (0.534 - 0.534 * (1 - amount)) + ' '
                            + (0.131 + 0.869 * (1 - amount)) + ' 0 0 0 0 0 1 0'
                    });
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = amount >= 0.5 ? ['gray','progid:DXImageTransform.Microsoft.Light()'] : [];
                    properties['behaviorsIE'] = amount >= 0.5 ? ['url("' + polyfilter.scriptpath + 'htc/sepia.htc")'] : [];
                }

                return properties;
            },

            // Blur
            blur:           function(amount){
                amount = Math.round(amount) || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['blur(' + amount + 'px)'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feGaussianBlur',{
                        'in':           'SourceGraphic',
                        stdDeviation: amount
                    });
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Blur(pixelradius=' + amount + ')'];
                }

                return properties;
            },

            // Invert
            invert:         function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['invert(' + amount + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feComponentTransfer',{});
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncR',{
                        type:   'table',
                        tableValues: amount + ' ' + (1 - amount)
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncG',{
                        type:   'table',
                        tableValues: amount + ' ' + (1 - amount)
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncB',{
                        type:   'table',
                        tableValues: amount + ' ' + (1 - amount)
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = amount >= 0.5 ? ['invert'] : [];
                }

                return properties;
            },

            // Brightness
            brightness:         function(amount){
                amount = amount || 0;

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['brightness(' + amount + '%)'];

                    // WebKit "specialty"
                    properties['filtersWebKit'] = ['brightness(' + (amount - 100) + '%)'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feComponentTransfer',{});
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncR',{
                        type:   'linear',
                        slope:  amount / 100
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncG',{
                        type:   'linear',
                        slope:  amount / 100
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    var svg_fe1sub = polyfilter._create_svg_element('feFuncB',{
                        type:   'linear',
                        slope:  amount / 100
                    });
                    svg_fe1.appendChild(svg_fe1sub);
                    properties['filtersSVG'] = [svg_fe1];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Light()'];
                    properties['behaviorsIE'] = ['url("' + polyfilter.scriptpath + 'htc/brightness.htc")'];
                }

                return properties;
            },

            // Drop Shadow
            dropShadow:         function(offsetX,offsetY,radius,color){
                offsetX = Math.round(offsetX) || 0;
                offsetY = Math.round(offsetY) || 0;
                radius = Math.round(radius) || 0;
                color = color || '#000000';

                var properties = {};

                if(typeof polyfilter._ie === 'undefined'){
                    // Proposed spec
                    properties['filtersW3C'] = ['drop-shadow(' + offsetX + 'px ' + offsetY + 'px ' + radius + 'px ' + color + ')'];

                    // Firefox
                    // https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
                    var svg_fe1 = polyfilter._create_svg_element('feGaussianBlur',{
                        'in':       'SourceAlpha',
                        stdDeviation: radius
                    });
                    var svg_fe2 = polyfilter._create_svg_element('feOffset',{
                        dx:     offsetX + 1,
                        dy:     offsetY + 1,
                        result: 'offsetblur'
                    });
                    var svg_fe3 = polyfilter._create_svg_element('feFlood',{
                        'flood-color': color
                    });
                    var svg_fe4 = polyfilter._create_svg_element('feComposite',{
                        in2:    'offsetblur',
                        operator: 'in'
                    });
                    var svg_fe5 = polyfilter._create_svg_element('feMerge',{});
                    var svg_fe5sub = polyfilter._create_svg_element('feMergeNode',{});
                    svg_fe5.appendChild(svg_fe5sub);
                    var svg_fe5sub = polyfilter._create_svg_element('feMergeNode',{
                        'in':       'SourceGraphic'
                    });
                    svg_fe5.appendChild(svg_fe5sub);
                    properties['filtersSVG'] = [svg_fe1,svg_fe2,svg_fe3,svg_fe4,svg_fe5];
                }
                else {
                    // IE
                    properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Glow(color=' + color + ',strength=0)','progid:DXImageTransform.Microsoft.Shadow(color=' + color + ',strength=0)'];
                    properties['behaviorsIE'] = ['url("' + polyfilter.scriptpath + 'htc/drop-shadow.htc")'];
                }

                return properties;
            }
        }
    }

    // Inialize, either via jQuery...
    if(window.jQuery){
        window.jQuery(document).ready(function(e) {
            polyfilter.process_stylesheets();
        });
    }
    // or via contentLoaded...
    else if(window.contentLoaded){
        contentLoaded(window,function(){
            polyfilter.process_stylesheets();
        });
    }
    // or on DOM ready / load
    else {
        if(window.addEventListener) // W3C standard
        {
            document.addEventListener('DOMContentLoaded', function(){
                polyfilter.process_stylesheets();
            }, false);
        }
        else if(window.attachEvent) // Microsoft
        {
            window.attachEvent('onload', function(){
                polyfilter.process_stylesheets();
            });
        }
    }

    // Install style setters and getters
    polyfilter.init();
 })(window);


 /*
  * Izilla touchMenuHover jQuery plugin v1.6
  * Allows ULs (or any element of your choice) that open on li:hover to open on tap/click on mobile platforms such as iOS, Android, WP7, WP8, BlackBerry, Bada, WebOS, 3DS & WiiU
  *
  * Copyright (c) 2013 Izilla Partners Pty Ltd
  *
  * http://izilla.com.au
  *
  * Licensed under the MIT license
  */
 ;(function(a){a.fn.touchMenuHover=function(j){var f=a.extend({childTag:"ul",closeElement:"",forceiOS:false,openClass:"tmh-open"},j);var d=a(this).find("a"),i="3ds|android|bada|bb10|hpwos|iemobile|kindle fire|opera mini|opera mobi|opera tablet|rim|silk|wiiu",c="|ipad|ipod|iphone",b,g="aria-haspopup",e="html",h;if(f.childTag.toString().toLowerCase()!=="ul"||f.forceiOS){i+=c}b=new RegExp(i,"gi");if(d.length>0&&b.test(navigator.userAgent)){d.each(function(){var m=a(this),l=m.parent("li"),k=l.siblings().find("a");if(m.next(f.childTag).length>0){l.attr(g,true)}m.click(function(o){var n=a(this);o.stopPropagation();k.removeClass(f.openClass);if(!n.hasClass(f.openClass)&&n.next(f.childTag).length>0){o.preventDefault();n.addClass(f.openClass)}})});if(f.closeElement.length>1){e+=","+f.closeElement}h=a(e);if("ontouchstart" in window){h.css("cursor","pointer")}h.click(function(){d.removeClass(f.openClass)})}return this}})(jQuery);
