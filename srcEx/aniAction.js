let mainText=document.querySelector("h1")

window.addEventListener('scroll',function(){
//스크롤 높이
let value=window.scrollY;
console.log("scrolly",value);
if(value>400){
 //forwards돌아오지않음~ 고정
 mainText.style.animation="disappear 1s ease-out forwards ";
}else{
 mainText.style.animation="kslide 1s ease-out";

}

})