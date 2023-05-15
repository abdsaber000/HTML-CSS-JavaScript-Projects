const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");

const nextEl = document.getElementById("next");

var degree = 0; // initially zero degrees
var timer = 0; 
prevEl.addEventListener("click" , ()=>{
    degree += 45;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click" , ()=>{
    degree -= 45;
    clearTimeout(timer);

    updateGallery();
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${degree}deg)`;

    timer = setTimeout(()=>{
        degree += 45;

        updateGallery();
    } , 3000);
}

updateGallery(); // call it atleast once to make slideshow