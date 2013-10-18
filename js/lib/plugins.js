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
                 .attr('data-val', $toDisplay.data('val')).css('width', this.$options.width()+'px')
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
