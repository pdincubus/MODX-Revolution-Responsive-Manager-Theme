#MODX Revolution Manager Re-work and Style

##WTF, why?

I love MODX, I use it all the time. I wrote a couple of [useful](https://github.com/pdincubus/JSONDerulo) [things](https://github.com/pdincubus/MODX-Revo-Boilerplate) for it and everything.

Thing is, right. The "Manager" backend is so *slow*. I am running on a machine with 16GB RAM, quad core hyperthreaded CPU and in Firefox it's _still_ slow! What I'm saying is that it's not very unversally friendly.

GAH! And to top it off, it's not responsive, adaptive, friendly to use, logically or simply laid out, and it uses EXTjs to lay out everything. It's [tag soup](http://en.wikipedia.org/wiki/Tag_soup) special. It's awful.

And the worst part is, I really, really *really* want it to work so much better and actually _feel_ like it _works_ well.

So that's what this is. I took a dev 2.3 build from GitHub and set it up. I realised loads had changed, some things for better - some for worse. But nothing lined up and nothing was consistently designed.

There was square bit, rounded corner with flat colour bits, rounded corner buttons, sometimes gradients, sometimes not. Sometimes things lined up, sometimes things made sense that they were where they were. Sometimes though, not at all.

I started work on a Fireworks PNG file and worked on top of a screenshot of the dev build and re-worked things so they lined up better, made more sense and were sensibly organised.

At least, that was the plan.

##OK, fair enough. So what's here then?

Well at the moment, there's the PNG mockup and a bunch of static markup, jQuery, LESS and ideas for what I think would make MODX work and feel better. None of it works, it's just a mockup.

##Feedback and discussion

Whole point is really to get people talking about it I guess. What do you think to the direction I've gone? What's good? What's bad? What's stupid? What's important? What's not? You get where I'm going.

Let's bash heads and come up with somehting a bit more elegant and thought-out.

##TODO

* <del>Fix dropdownatron to calculate width properly on screen resize/refresh</del>
* <del>Fix top and bottom menus for mobile devices that can't use the hover menus properly</del>
* IE testing
* Windows Firefox/Chrome testing
* Opera testing
* iPhone/iPad/Android testing
* Everything else I've not yet written down.
