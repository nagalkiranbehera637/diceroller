var num1=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;
var image1=document.querySelector(".image1");
var image2=document.querySelector(".image2");
var header=document.querySelector(".title>h1");
if(num1>num2){
    header.textContent="Player1 Win";
}
else if(num2>num1){
    header.textContent="Player2 Win";
}else{
    header.textContent="Draw";
}

if(num1===1){
    image1.setAttribute("src","./assets/one.png");
}
else if(num1===2){
    image1.setAttribute("src","./assets/two.png");
}else if(num1===3){
    image1.setAttribute("src","./assets/three.png");
}else if(num1===4){
    image1.setAttribute("src","./assets/four.png");
}else if(num1===5){
    image1.setAttribute("src","./assets/five.png");
}else {
    image1.setAttribute("src","./assets/six.png");
}
if(num2===1){
image2.setAttribute("src","./assets/one.png");
}
else if(num2===2){
image2.setAttribute("src","./assets/two.png");
}else if(num2===3){
image2.setAttribute("src","./assets/three.png");
}else if(num2===4){
image2.setAttribute("src","./assets/four.png");
}else if(num2===5){
    image2.setAttribute("src","./assets/five.png");
}else {
    image2.setAttribute("src","./assets/six.png");
}