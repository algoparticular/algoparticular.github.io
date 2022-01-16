
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

/////////////////////////////////////////////////////////////////////
///////////////////  + Grain background effect  /////////////////////
/////////////////////////////////////////////////////////////////////
    let grainAnim = anime({
                        targets: '#grain',
                        keyframes: [
                            {backgroundPosition: '-1px bottom'},
                            {backgroundPosition: 'left .5px'}, 
                            {backgroundPosition: '0px top'}, 
                            {backgroundPosition: 'right -1px'}
                            ],
                        duration: 600,
                        easing: 'steps(4)',
                        loop: true,
                        autoplay: true
                    });
    
    function zoomAnim(element) {
        anime({
            targets: element,
            scale: 1.1
        });
    }
    
    function leaveZoomAnim(element) {
        anime({
            targets: element,
            scale: 1
        });
    }
    
    function animPath(path) {
        var tl = anime.timeline();
        tl.add({
          targets: path,
          strokeDashoffset: [0, anime.setDashoffset],
          easing: 'easeInOutQuint',
          duration: 1200,
          delay: function(el, i) { return i * 150 },          
        })       
        .add({
          targets: path,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 1000,
          easing: 'easeInExpo'       
        }, '+=1000');            
    }    
    
    /*HEART ICON*/
    let heart = document.querySelector(".heart");
    
//    heart.addEventListener("mouseenter", function () {
//        zoomAnim(this);
//    });
//    
//    heart.addEventListener("mouseleave", function () {
//        leaveZoomAnim(this);
//    });
    
//    heart.addEventListener("click", function () {
    heart.addEventListener("mouseenter", function () {
        animPath('.heart path'); 
        
        //toggle grain animation
        if(grainAnim.paused){
            grainAnim.play();    
        } else {
            grainAnim.pause();   
        }  
    });
    
/////////////////////////////////////////////////////////////////////
///////////////////  - Grain background effect  /////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
///////////////////  + particular button effect  ////////////////////
/////////////////////////////////////////////////////////////////////

    let seed = document.querySelector(".seed");
    
    /*Seed ANIMATION*/
    seed.addEventListener("mouseenter", function () {
        anime({
            targets: this,
            scale: 1.1,
            fill: '#FBB189'
        });
    });
    
    seed.addEventListener("mouseleave", function () {
        anime({
            targets: this,
            scale: 1,
            fill: '#10100F'
        });
    });
    
    seed.addEventListener("click", function () {
        
    });
    
/////////////////////////////////////////////////////////////////////
///////////////////  + particular button effect  ////////////////////
/////////////////////////////////////////////////////////////////////
    
/////////////////////////////////////////////////////////////////////
////////////////////  + link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////    
    
    function underlineAnim(link, e, index) {
        let underline = link.querySelector(".underline");

        anime({
            targets: underline,
            width: "100%",
            left: "0%",
            easing: 'easeOutQuint'
        });
    }

    function leaveUnderlineAnim(link, e) {
        let underline = link.querySelector(".underline");

        anime({
            targets: underline,
            width: "0%",
            left: "0%",
            easing: 'easeInQuint'
        });
    }

    // Get all links
    let workLinks = document.querySelectorAll(".link");
    
    workLinks.forEach(activateLinks);
        
    function activateLinks(link, index, value) {
        
        link.addEventListener("mouseenter", function(e) {
            underlineAnim(link, e);
        });

        link.addEventListener("mouseleave", function(e) {
            leaveUnderlineAnim(link, e);
        });
    }
/////////////////////////////////////////////////////////////////////
////////////////////  - link underline effect  //////////////////////
/////////////////////////////////////////////////////////////////////
    
    
    // window load event makes sure image is 
    // loaded before running animation
    window.onload = function() {
         $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
    };
    
    
});