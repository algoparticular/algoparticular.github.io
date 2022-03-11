
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

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
///////////////////  - particular button effect  ////////////////////
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

/////////////////////////////////////////////////////////////////////
////////////////////  + Gallery implementation  /////////////////////
/////////////////////////////////////////////////////////////////////

const images = [
    {
        "id": 0,
        "title": "Nekkhamma",
        "image": "/assets/gallery/1 Nekkhamma.jpg",
        "description": "",
    },
    {
        "id": 1,
        "title": "Sila",
        "image": "/assets/gallery/2 Sila.jpg",
        "description": "",
    },
    {
        "id": 2,
        "title": "Dana",
        "image": "/assets/gallery/3 Dana.jpg",
        "description": "",
    },
    {
        "id": 3,
        "title": "Pañña",
        "image": "/assets/gallery/4 Pañña.jpg",
        "description": "",
    },
    {
        "id": 4,
        "title": "Viriya",
        "image": "/assets/gallery/5 Viriya.jpg",
        "description": "",
    },
    {
        "id": 5,
        "title": "Kshanti",
        "image": "/assets/gallery/6 Kshanti.jpg",
        "description": "",
    },
    {
        "id": 6,
        "title": "Sacca",
        "image": "/assets/gallery/7 Sacca.jpg",
        "description": "",
    },
    {
        "id": 7,
        "title": "Addhitthana",
        "image": "/assets/gallery/8 Addhitthana.jpg",
        "description": "",
    },
    {
        "id": 8,
        "title": "Metta",
        "image": "/assets/gallery/9 Metta.jpg",
        "description": "",
    },
    {
        "id": 9,
        "title": "Upekka",
        "image": "/assets/gallery/10 Upekka.jpg",
        "description": "",
    },
];

//MODAL +
var modal = document.getElementById("gallery-modal");

var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

modal.onclick = function() { 
  modal.style.display = "none";
}
//MODAL -

//Create gallery
let listHTML = document.getElementById("gallery");

for (let item of images) {
    let itemHTML = document.createElement("div");
    itemHTML.classList.add("gallery-item");

    //add image
    let imageHTML = document.createElement("img");
    imageHTML.src = item.image;    
    imageHTML.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = item.title;
    };

    itemHTML.appendChild(imageHTML);

    listHTML.appendChild(itemHTML);
}

/////////////////////////////////////////////////////////////////////
////////////////////  - Gallery implementation  /////////////////////
/////////////////////////////////////////////////////////////////////    

/////////////////////////////////////////////////////////////////////
/////////////////////////  + Shop Gallery  //////////////////////////
/////////////////////////////////////////////////////////////////////    

//Create Flashcookie slides
let fcGallery = document.getElementById("flashcookie");
const fcImages = fcGallery.getElementsByTagName('img');
let fcIndex = 0;

//Create Threadless slides
let tlGallery = document.getElementById("threadless");
const tlImages = tlGallery.getElementsByTagName('img');
let tlIndex = 0;

function updateShops() {
    fcImages[fcIndex].classList.add('hidden');
    fcIndex < fcImages.length-1 ? fcIndex++ : fcIndex = 0;
    fcImages[fcIndex].classList.remove('hidden');

    tlImages[tlIndex].classList.add('hidden');
    tlIndex < tlImages.length-1 ? tlIndex++ : tlIndex = 0;
    tlImages[tlIndex].classList.remove('hidden');
}

setInterval(updateShops, 3000);


/////////////////////////////////////////////////////////////////////
/////////////////////////  - Shop Gallery  //////////////////////////
/////////////////////////////////////////////////////////////////////    

    
    // window load event makes sure image is 
    // loaded before running animation
    window.onload = function() {        
//         $('.navbar-nav>li>a').on('click', function(){
//            $('.navbar-collapse').collapse('hide');
//        });
    };
    
    
});