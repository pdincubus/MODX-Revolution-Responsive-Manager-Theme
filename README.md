#MODX Revolution Manager Re-work and Style

##tl;dr

Here's a demo of where I'm currently at: [Demo of current state](http://pdincubus.github.io/MODX-Revolution-Responsive-Manager-Theme/)

[Jump down the page to see some screenshots](#visual-stuff-like-pictures-and-things-of-stuff) of it with some words about what stuff is and things.

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

I've attempted to keep as much of the tree view as possible familar for existing users. I think the general idea and what's there is not far off to be honest. It just doesn't feel like it all ties together quite right to me.

![Tree view documents closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-documents-closed.png "Tree view documents closed")

![Tree view documents open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-documents-open.png "Tree view documents open")

![Tree view documents open - page over](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-documents-open-page-over.png "Tree view documents open - page over")

![Tree view templates closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-templates-closed.png "Tree view templates closed")

![Tree view templates open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-templates-open.png "Tree view templates open")

![Tree view files open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/tree-view-files-open.png "Tree view files open")

###Menus

Since Font Awesome is being introduced in the 2.3 dev builds I decided to use this instead of just using CSS background images for each icon type. I would suggest that even though I think the icons make the menus easier to read at a glance that there should be a system setting in a similar vein to the "Show descriptions in menus" for "Hide icons from menus"

"Apps" would contain links to Package Management and anything that would usually only appear currently under "Components" so that things are logically kept together.

![Apps menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/apps-menu.png "apps menu")

The 2.3 dev build has a help icon link, I think that an actual menu here is perfect for both new and seasoned MODX users. The premise is simple - is a link useful/important for users? Yes? Stick it in the help menu. That way you don't have to think about where the forums/blog/GitHub repo is etc.

![Help menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/help-menu.png "help menu")

Everything that is a site setting or configuration menu option should probably be in here, exceptions only really include Media Sources and App related things.

![Settings menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/settings-menu.png "settings menu")

The error log is really useful, isn't it? So why is it out of the way and formatted so badly? Because only tech peeps need to read it, right? NO! The error log does actually hold a lot of useful information that Manager users might want to know about, such as phpThumb errors. This friendly menu would show x number of recent entries in the log and provide info for users to act upon. No need to wait and check through a MASSIVE error log for a couple of simple errors that users could fix themselves if they were made aware of it!

![System alerts menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/system-alerts-menu.png "system alerts menu")

Grouping all the user options and logout together, other options might be in here too, such as a Gravatar link (since the Manager is pulling in Gravatar images if the registered email address has one - speaking of which, is there a default profile pic if someone is NOT on Gravatar?)

I've highighted the logout button too. Just because then you don't have to search for it so much.

![User menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/user-menu-1.png "user menu")

![User menu logout](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/user-menu-logout.png "user menu - logout")

I quite like the new Firefox "awesome bar" type rip off search box. It's useful, speeds things up and seems to work. More stuff like this. Much more nice stuff please.

![Search results](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/search-results.png "search results")


###Resource editing

There are sensible limits for things like pagetitle and meta description. Adding something as simple as a counter to these fields shows the user how much SHOULD be there and lets them know when they're at the limit. Simple and pretty obvious.

![Empty description](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/description-empty.png "Empty description")

![Description](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/description-typed.png "Description")

![Description too long](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/description-over.png "Description too long")

Select styles to closely match the text input styles. I don't think the current "up+down" type icon on selects makes much sense. People call selects "drop downs" for a reason. Maybe in that case the icon should point down to denote it opens like that?

![Select closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/select-closed.png "Select closed")

![Select open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/select-open.png "Select open")

The right click context menu is awesomely useful. Keep it. Do stuff with it.

![Quick edit menu](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/quick-edit-menu.png "Quick edit menu")

Modal windows should grab attention. The current ones don't so much. Also - why can't you have RTE in quick edit? And why are so many items from full edit missing?!? Let me do stuff!!

![Quick edit modal](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/quick-edit-modal.png "Quick edit modal")


###Mobile stuff

Ok, there's a lot of people who think the admin area of a site should be accessible to admins wherever they are. Yes, even off a tiddly phone screen. And why shouldn't they? Even if it's not fully featured, why can't the still log in a be able to easily move around the Manager and make changes?

That's right. They should be able to. Here's a quick view of how some of the things in the mock up look when you smoosh the screen size down small. The "resource tree" buggers off to the bottom under the main content area. Sure, it's useful and vital to the site. Maybe I'll move it back above and have a toggle to open/close it. Really though, once I get to the page I want to edit/add I want the editing facilities right up there in my face. IN MY FACE. So they are.

![Mobile resource edit](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-resource-edit.png "Mobile resource edit")

Also, you don't need menus there all the while. Hide that stuff. Get it out of the way. Provide an obvious menu button to get to it though. So here it is.

![Mobile header and nav](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav.png "Mobile header and nav")

![Mobile header and nav closed](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav-closed.png "Mobile header and nav closed")

When it opens, the sub menus are hidden...

![Mobile header and nav open](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav-open.png "Mobile header and nav open")

...until you tap a section to open it.

![Mobile header and nav open (2)](https://github.com/pdincubus/MODX-Revolution-Responsive-Manager-Theme/raw/master/docs/mobile-header-and-nav-open-2.png "Mobile header and nav open (2)")


