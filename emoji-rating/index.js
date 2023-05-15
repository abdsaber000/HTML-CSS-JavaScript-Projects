const starsEl = document.querySelectorAll(".fa-star");

const emojisEl = document.querySelectorAll(".fa-regular");

const colors = ["red" , "orange" , "lightblue" , "lightgreen" , "green"];

updateRating(0); // just to make an initial coloring

starsEl.forEach((starEl , index)=>{
    starEl.addEventListener("click" , 
    ()=>{
        updateRating(index)
    });
});

function updateRating(index){
    starsEl.forEach((starEl , idx) =>{
        if(idx <= index){
            starEl.classList.add("active");
        }else{
            starEl.classList.remove("active");
        }
    });
    emojisEl.forEach((emojiEl) =>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colors[index];
    });
}
