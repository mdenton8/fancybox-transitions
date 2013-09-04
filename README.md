fancybox-transitions
====================

Adds new transitions to the jQuery plugin fancybox. Choose which ones you want and minimize with UglifyJS.

So far adds the dropIn, dropOut, slideIn, slideOut, curtainIn, and curtainOut open and close methods, used like:

```javascript
$('.fancybox').fancybox({
    openMethod:'curtainIn',
    openSpeed:400,
    closeMethod:'curtainOut',
    closeSpeed:400
});
```

The first four transitions are by the fancybox plugin's author at http://jsfiddle.net/xZBBS/.

TODO:
- add new open and close transitions
- add other transitions
- add CSS3 support
