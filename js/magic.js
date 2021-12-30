var slideScene,horizontalSlide,controller;
var sceneState=['BEFORE','DURING','AFTER'];
$(function () { // wait for document ready
    // init
controller = new ScrollMagic.Controller();

// scrollPage();

 horizontalSlide = new TimelineMax().to("#pinContainer", 1, { x: "0%" })
    .to("#pinContainer", 1, { x: "-15%" })
    .to("#pinContainer", 1, { x: "-32%" })
    .to("#pinContainer", 1, { x: "-50%" })
    .to("#pinContainer", 1, { x: "-66%" })
    .to("#pinContainer", 1, { x: "-83.5%" });


    // create scene to pin and link animation
    slideScene= new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
    }).setPin("#pinContainer")
        .setTween(horizontalSlide)
        .addTo(controller)
        .on("enter", function (event) {
            if(curPage ==2 || curPage ==3) scrollLock=true;
        })
        .on("leave", function (event) {
            if ( scrollLock  ) {
                if(event.scrollDirection =='FORWARD'){
                   if(curPage==3){
                    $body.stop().animate({
                        scrollTop: $section.eq(3).offset().top
                    }, 1000, 'swing', function () {
                        scrollLock = false;
                    });
                   }else if(curPage==2){
                    curPage++;
                    $body.stop().animate({
                        scrollTop: $section.eq(3).offset().top
                    }, 1000, 'swing', function () {
                        scrollLock = false;
                    });
                   }
                }else if (event.scrollDirection =='REVERSE'){
                    if(curPage==3){
                        curPage--;
                        $body.stop().animate({
                            scrollTop: $section.eq(2).offset().top
                        }, 1000, 'swing', function () {
                            scrollLock = false;
                        });
                       }else if(curPage==2){
                        $body.stop().animate({
                            scrollTop: $section.eq(2).offset().top
                        }, 1000, 'swing', function () {
                            scrollLock = false;
                        });
                       }
                }
               
            }
        });

    controller.scrollTo(function (newpos) {
		TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	});



    
    $(document).on("click", "a[href^='#']", function (e) {
        
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();
			// trigger scroll
			controller.scrollTo(id);
            if(id.startsWith('#page')){
                const page =id.replace('#page','');
                if(!isNaN(page)){
                    curPage=parseInt(page-1);
                }
            }
				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});



   
   


});


 // scroll page 
 const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
 $section = $('#fullpage>.section');
var numOfPages = $section.length - 1, // 取得section
curPage = 0, //起始頁
scrollLock = false; //滾動開關
sliding=false,isScrollUp=false;
// 上滾動
function navigateUp() {
    if (curPage === 0) {
        $body.stop().animate({
            scrollTop: $section.eq(0).offset().top
        }, 1000, 'swing', function () {
        });
        return;}
    if (curPage == 3&& slideScene.state() == sceneState[2]) {
        $body.stop().animate({
            scrollTop: $('.slide-1').offset().top + (curPage == 2 ? 10 : -10)
        }, 1000, 'swing', function () {
            scrollLock = true;
        });
        return;
    }
    curPage--;
    pagination();
};
// 下滾動
function navigateDown() {
    if (curPage === numOfPages ) return;
    if (curPage == 2 && slideScene.state() == sceneState[0]) {
        $body.stop().animate({
            scrollTop: $('.slide-1').offset().top + (curPage == 2 ? 10 : -10)
        }, 1000, 'swing', function () {
            scrollLock = true;
        });
        return;
    }
    curPage++;
    pagination();
};
// 滾動至上/下區塊
function pagination() {
        scrollLock = true;
        $body.stop().animate({
            scrollTop: $section.eq(curPage).offset().top
        }, 1000, 'swing', function () {
            scrollLock = false;
        });
};
function scrollPage() {
    //滑鼠滾動
     $(document).on("mousewheel DOMMouseScroll", function (e) {
        // $(document).on("scroll", function (e) {
        if (scrollLock) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
            navigateUp();
        else
            navigateDown();
    });
    // $(document).on("scroll", function (e) {
    //     last_known_scroll_position = window.scrollY;
    //     if (!ticking) {
    //       window.requestAnimationFrame(function(e) {
    //           if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
    //               navigateUp();
    //           else
    //               navigateDown();
    //         ticking = false;
    //       });
    //     }
    //     ticking = true;
    //   });
   
    //鍵盤上下鍵
    $(document).on("keydown", function (e) {
        if (scrollLock) return;
        if (e.which === 38)
            navigateUp();
        else if (e.which === 40)
            navigateDown();
    });


}

function checkOnView(pageLoc){
    var p = pageLoc+1;
    var top_of_element = $("#page"+p).offset().top;
    var left_of_element = $("#page"+p).offset().left;
    var bottom_of_element = $("#page"+p).offset().top + $("#page"+p).outerHeight();


    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if (bottom_of_screen > top_of_element){
        // the element is visible, do something

    } else if(top_of_screen < bottom_of_element){
         // the element is visible, do something

    }else{
        // the element is not visible, do something else
    }
}