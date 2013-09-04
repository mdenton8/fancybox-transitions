(function ($, F) {
    /*var Detect = (function () { 
        function cssTransitions () { 
            this.div = document.createElement("div"); 
            var p, ext, pre = ["ms", "O", "Webkit", "Moz",""]; 
            for (p in pre) {
                if (this.div.style[ pre[p] + "Transition" ] !== undefined) {
                    ext = pre[p]; 
                    break; 
                } 
            } 
            delete this.div; 
            return ext;
        }; 
        return { 
              "cssTransitions" : cssTransitions 
        }; 
    }());
    
    var ext = Detect.cssTransitions();
    Detect.cssTransitions = function() {return ext;};*/
    
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);

        endPos.top = (parseInt(endPos.top, 10) - 500) + 'px';

        F.wrap.css(endPos).show().animate({
            top: '+=500px'
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            top: '-=350px'
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };
	// Next gallery item - fly from left side to the center
    F.transitions.slideIn = function() {
        var endPos = F._getPosition(true);

        endPos.left = (parseInt(endPos.left, 10) - 200) + 'px';
        endPos.opacity = 0;
        
        F.wrap.css(endPos).show().animate({
            left: '+=200px',
            opacity: 1
        }, {
            duration: F.current.nextSpeed,
            complete: F._afterZoomIn
        });
    };
    
    // Current gallery item - fly from center to the right
    F.transitions.slideOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            left: '+=200px',
            opacity: 0
        }, {
            duration: F.current.prevSpeed,
            complete: function () {
                $(this).trigger('onReset').remove();
            }
        });
    };
    F.transitions.curtainIn = function() {
	var endHeight = F.wrap.height();
        /*
        if(Detect.cssTransitions()) {
            alert("here we go");
            F.wrap.css({height:0});
            alert("hi");
            F.wrap.css({"transition":"height " + F.current.openSpeed + "ms linear"});
            alert("here we go");
            setTimeout(function() {
                    F.wrap.css("height",endHeight);
                },2);
        }
        else {*/
	    F.wrap.css({height:0}).show().animate({
            height: '+=' + endHeight + 'px'
            }, {
                duration: F.current.openSpeed,
                complete: F._afterZoomIn
            });
        //}
    };

    F.transitions.curtainOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            height : '0px'
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };
}(jQuery, jQuery.fancybox));