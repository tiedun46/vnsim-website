window.addEventListener("load", function()
{
const slider = this.document.querySelector(".slider");
const sliderMain = this.document.querySelector(".slider-main");
const sliderItems = this.document.querySelectorAll(".slider-item");
const nextBtn = this.document.querySelector(".slider-next");
const preBtn = this.document.querySelector(".slider-prev");
const dotItem = this.document.querySelectorAll(".slider-dot-item");
const sliderWith = sliderItems[0].offsetWidth;
const sildesLength = sliderItems.length;
const dodai = sildesLength*sliderWith;
let positionX = 0;

nextBtn.addEventListener("click", function(){
changeSlide(1);
});

preBtn.addEventListener("click", function(){
changeSlide(-1);
});

function changeSlide(cl){
  if(cl==1){
    positionX = positionX - sliderWith;
    console.log("PositionX: ", positionX);
    if(positionX > -1*dodai){
    console.log("Do Dai: ", positionX);
    sliderMain.style = `transform: translateX(${positionX}px)`;
    console.log("Tong do dai: ", dodai);
    } else{
      console.log("Tong do dai quá dài ");
      positionX = 0;
      sliderMain.style = `transform: translateX(${positionX}px)`;
    }
    
  }
  if(cl==-1){
    positionX = positionX  + sliderWith;
    console.log("PositionX: ", positionX);
    if(positionX < dodai){
    console.log("Do Dai: ", positionX);
    console.log("Tong do dai: ", dodai);
    sliderMain.style = `transform: translateX(${-positionX}px)`;
    } else {
      console.log("Tong do dai quá dài ");
      positionX = 0;
      sliderMain.style = `transform: translateX(${-positionX}px)`;
    }
    
  }
}
});