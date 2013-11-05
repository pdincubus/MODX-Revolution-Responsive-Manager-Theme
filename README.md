#MODX Revolution Manager Re-work and Style

[Demo of current state](http://pdincubus.github.io/MODX-Revolution-Responsive-Manager-Theme/)

##WTF, why?

I love MODX, I use it all the time. I wrote a couple of [useful](https://github.com/pdincubus/JSONDerulo) [things](https://github.com/pdincubus/MODX-Revo-Boilerplate) for it and everything.

Thing is, right. The "Manager" backend is so *slow*. GAH! And to top it off, it's not responsive, adaptive, friendly to use, logically or simply laid out, and it uses EXTjs to lay out everything.

It's [tag soup](http://en.wikipedia.org/wiki/Tag_soup) special. It's awful.

And the worst part is, I really, really *really* want it to work so much better and actually _feel_ like it _works_ well.

So that's what this is. I took a dev 2.3 build from GitHub and set it up. I realised loads had changed, some things for better - some for worse. But nothing lined up and nothing was consistently designed.

There was square bit, rounded corner with flat colour bits, rounded corner buttons, sometimes gradients, sometimes not. Sometimes things lined up, sometimes things made sense that they were where they were. Sometimes though, not at all.

I started work on a Fireworks PNG file and worked on top of a screenshot of the dev build and re-worked things so they lined up better, made more sense and were sensibly organised.

At least, that was the plan.


##OK, fair enough. So what's here then?

Well at the moment, there's the PNG mockup and a bunch of static markup, jQuery, LESS and ideas for what I think would make MODX work and feel better. None of it works, it's just a mockup.

To give you a better idea what I mean, see this little comparison of the dev build, parts of the design re-vamp and the current static working mockup:

![visual comparison](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/comparison.png "Visual comparison")


##Feedback and discussion

Whole point is really to get people talking about it I guess. What do you think to the direction I've gone? What's good? What's bad? What's stupid? What's important? What's not? You get where I'm going.

Let's bash heads and come up with somehting a bit more elegant and thought-out.


##TODO / Stuff I know isn't working quite right

* <del>Fix dropdownatron to calculate width properly on screen resize/refresh</del>
* <del>Fix top and bottom menus for mobile devices that can't use the hover menus properly</del>
* IE testing
* Windows Firefox/Chrome testing
* Opera testing
* iPhone/iPad/Android testing
* Everything else I've not yet written down.
* The modal seems to cause a weird scroll bug sometimes in Chrome on Mac.
* Looks like CKEditor is having some overlappy issues in places, you can't click the top row of buttons. No idea why and I don't even care because this is just a placeholder RTE and isn't meant to do anything other than appear and look like an RTE.
* The window resize function isn't perfect yet, and scaling from desktop to mobile then back to desktop again can cause you to need to refresh to make menus work. No biggy.
* There's no way at the moment to access the context menu on touch devices, I'm sure a bit of jQuery can sort that though. Maybe.


##What is in this thing?

* Adaptive/responsive layout, should work from large desktop all the way down to 320px for iPhones
* Maximum limited width 1280px. Much wider than this and the user experience is bad. *Bad*
* Attempt at _consistent_ colours/layout/styles
    * buttons have three default options: warning/irreversible action (red), information/action (blue), complete/save action type buttons (green)
    * Uses a bunch of shades of grey (Not quite 50 though), red, green and blue from the MODX logo to keep in feel of brand
    * Designed to a grid so everything should line up nicely.
    * Sensible default font sizes and spacing. (Not all elements have size set yet though as I've not used them all in the build at the moment)
    * NOT helvetica or arial as the default font. Currently set to use Roboto from Google Web Fonts
    * Since 2.3 dev is using Font Awesome in places, I've tried to consistently use icons for buttons, menu items and wherever else seems appropriate
    * More obvious published/unpublished/deleted states for resources
    * More obvious and spacious layout for tree accordion sections - dark background/light foreground makes things more obvious it's a header for a new context/section etc
    * Added an *actual* footer to the theme. Why is there no footer currently? I've no idea. It kind of needs it so the page feels properly finished
    * Beginnings of re-organising menus and positions of menus to make them feel more sensibly organised and logical
    * Modals that use RTE and have same style as actual edit forms
* Some new ideas
    * Alerts menu - the MODX error log is very useful. It's just a bit verbose. Sometimes very verbose. Users need a quick overview of important things that aren't working and have been logged. This menu could provide that.
    * Put nearly everything in a "settings" menu. Users DO NOT need to access MOST functions in MODX. Just show them easily and obviously what they're going to use and put the rest aside for power users who know what they're doing.
    * LINE THINGS UP!
    * Tablet and mobile users SHOULD be able to do at least the basics of editing parts of their site. The current manager is so heavy and slow it runs badly a lot of the time on Chrome or Firefox / Windows 8.1 Pro / 16GB RAM / 8-core 4GHz CPU. Really. WTF.
    * HTML elements
    * No tag soup where at all possible
    * Content first. Soon as the header bar is out the way... CONTENT. Tree nav, etc moved to after the content so that it's not in the way for mobile users.
    * Awesome-bar-search-thing in header <del>and footer</del> as per dev 2.3. <ins>Decided against footer search bar and nav, combined again in header. Seems logical users should find all navigation/search in the header like it is now</ins>.
    * NO FIXED PANELS. Not even the header. Because:
        1. iOS doesn't handle fixed positioning all that well.
        2. We're not trying to create framesets! STOP IT! IT IS NOT The 1990s any more. PEOPLE UNDERSTAND THE CONCEPT OF SCROLLING. The rest of the web does it, why shouldn't the Manager work properly?!
        3. It's nicer this way.
        4. Really.
    * Nicer modal style and animation. Thanks to [this article on Codrops](http://tympanus.net/Development/ModalWindowEffects/)
    * Page title and description fields warn you when you pass the suggested character limit (70 chars for title, 160 for description)
    * Styled dropdowns that use proper selects, using jQuery plugin. Can be styled EXACTLY how you want.
    * Attempted to style checkboxes (works properly in chrome, not in FF - I can fix this using :before or :after and hide the actual checkbox but not had chance yet)
* Consistent widths for input/select/textarea (50% of block width)
* Tab nav is now less tabby and more flatly styled
* Current MODX 2.3 dev build has bad combinations of rounded/square corners, flat/not flat, icons/no icons elements. I've tried to keep everything flat, square and icons where appropriate. Everything should feel like it ties together properly.
* For mobile sized devices, and those I don't think are big enough for two or three columns, The theme should start to collapse nicely. Menus should get mostly out of the way and the content should appear before the tree nav.


##What works where?

Since this is just a static mockup, not everything does something, so here's an overview

* The accordion sections in the tree nav open and close.
* You can right click for a context menu on "Home" in the "Main" context. If you click on "Quick edit" you'll get the modal window example.
* The "Content", "Files", "Templates" tab nav works and changes the control nav underneath it depending on what choose.
* The other accorions on these tabs open/close too
* The main content tab nav "Page settings", "Page extras", etc works but no other tab has content at the moment.
* The pagetitle and descriptions form fields have working counters
* The select for page style is styled and drops down
* The CKEditor instances sort of work but not set up to save (obviously)
* Clicking in the search box will show you a preview of how type ahead results would look. This isn't hooked into anything to fetch results though
* None of the menus/dropdowns in the header go anywhere, but they do look nice.
* Hover over control nav in the sidebar just under the tab nav to see an idea for showing/hiding labels for things
* Resize your browser window. I've spent a fair bit of time trying to figure out the best way to make the Manager work on smaller screens, tablets and mobiles. The nav collapses completely at mobile size and is opened using a button top right. Sub nav items are opened by tapping the menu item. Fairly obvious really.

##Visual stuff. Like pictures and things of stuff

###Tree view

![Tree view documents closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-documents-closed.png "Tree view documents closed")
![Tree view documents open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-documents-open.png "Tree view documents open")
![Tree view documents open - page over](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-documents-open-page-over.png "Tree view documents open - page over")
![Tree view templates closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-templates-closed.png "Tree view templates closed")
![Tree view templates open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-templates-open.png "Tree view templates open")
![Tree view files open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-files-open.png "Tree view files open")

###Menus

![Apps menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/apps-menu.png "apps menu")
![Help menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/help-menu.png "help menu")
![Settings menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/settings-menu.png "settings menu")
![System alerts menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/system-alerts-menu.png "system alerts menu")
![User menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/user-menu-1.png "user menu")
![User menu logout](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/user-menu-logout.png "user menu - logout")
![Search results](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/search-results.png "search results")

###Resource editing

![Empty description](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/description-empty.png "Empty description")
![Description](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/description-typed.png "Description")
![Description too long](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/description-over.png "Description too long")
![Select closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/select-closed.png "Select closed")
![Select open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/select-open.png "Select open")


###Mobile stuff

![Mobile header and nav closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav-closed "Mobile header and nav closed")
![Mobile header and nav open (2)](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav-open-2 "Mobile header and nav open (2)")
![Mobile header and nav open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav-open "Mobile header and nav open")
![Mobile header and nav](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav "Mobile header and nav")
![Mobile resource edit](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-resource-edit "Mobile resource edit")
