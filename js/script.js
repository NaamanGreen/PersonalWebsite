
// Tabs
(function(){
    "use strict";

    $('#tabs > ul > li > a').click(function(){
        $('#tabs > ul > li > a').css({background: '#dedfc0', color: 'black'});
        $(this).css({background: '#f0f0e2'});
        const thisTab = $(this).attr('href');
        console.log(thisTab);
        $('#tabs > div:visible').fadeOut(200, function(){
            $(thisTab).fadeIn(200);
        });
    });
})();

// Smooth Scroll
(function(){
    $('nav ul li a').click(function(){
        const thisSection = $(this).attr('href');
        const thisLink = $(this);
        
        $('html, body').stop().animate({scrollTop: $(thisSection).offset().top-150}, 600, 'easeOutCirc');
        return false;
    });

    $('.logo').click(function(){
        
        $('html, body').stop().animate({
            scrollTop: 0
        }, 600, 'easeOutCirc');
    
        return false;
    });
    
    $(window).on('load', function(){
        var allLinks = $('nav ul li a');
        var posts = $('section');
        var pageTop;
        var postPos;
        var counter = 0;
        var postTops = [];
        var prevCounter = 0;
        var doneResizing;
        
        resetPagePosition();
    
        $(window).scroll(function(){
            pageTop = $(window).scrollTop() + 150;
            if(pageTop > postTops[counter+1]){
                counter++;
            } else if( counter > 0 && pageTop < postTops[counter]) {
                counter--;
            } 
    
            if( counter != prevCounter){
                $(allLinks).removeAttr('class');
                $('nav ul li a').eq(counter).addClass('selected');
                prevCounter = counter;
            }
        });
    
        $(window).on('resize', function(){
            clearTimeout(doneResizing);
            doneResizing = setTimeout(function(){
                resetPagePosition();
            }, 500);
        });
    
        function resetPagePosition(){
            postTops = [];
            posts.each( function(){
                postTops.push( Math.floor($(this).offset().top ));
            });
            
            var pagePosition = $(window).scrollTop()+210;
            counter = 0;
    
            for(var i=0; i < postTops.length; i++){
                if(pagePosition > postTops[i]){counter++;}
            }
            counter--;
    
            $(allLinks).removeAttr('class');
            $('nav ul li a').eq(counter).addClass('selected');
        }
    
    });
})();


// Flexslider
$(window).on('load', function(){
    $('.flexslider').flexslider(
        {
            animation: "slide",
            slideshowSpeed: 2000,
            direction: "horizontal",
            reverse: true,
            pauseOnHover: true,
            directionNav: true
        });
});