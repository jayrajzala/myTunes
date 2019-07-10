function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
url = "https://api.unsplash.com/photos/random/?count=3&client_id=9a6e0729702602ae1d78aa3300524f7e6d9a1c1bc3616d7e4a40509225ce3cc1";

var data = httpGet(url);
obj = JSON.parse(data);
// if(obj.Poster="N/A"){
// var data = httpGet(url());
// obj =JSON.parse(data);
// }
// if(obj.Poster="N/A"){
// var data = httpGet(url());
// obj =JSON.parse(data);
// }
function getMeta(url, n) {
    var img = new Image();
    img.onload = function () {
        // alert( this.width+' '+ this.height );
        document.getElementsByClassName("content")[n].style.width = this.width + "px";
        // console.log(this.width);
    };
    img.src = url;
}


var img1 = obj[0].urls.small.replace("crop=entropy", "crop&h=500&w=800");
var info1 = obj[0].description;
if (info1 == null) { var info1 = obj[0].alt_description; }
document.getElementsByClassName("slide")[0].style.background = 'url(' + img1 + ') no-repeat center fixed';
//document.getElementsByClassName("slide")[0].style.backgroundSize = "800px 500px";
document.getElementById('para1').innerHTML = info1;
getMeta(img1, 0);



//document.getElementByClassName('slide').style.background = 'url('+img1+') no-repeat center top/cover';

console.log(info1);

// document.getElementById('slide1').style.background = 'no-repeat';
// document.getElementById('slide1').style.background = 'top/cover';

// // document.getElementById('slide1').style.background = 'url('+img1+')';
//
//
var img2 = obj[1].urls.small.replace("crop=entropy", "crop&h=500&w=800");
var info2 = obj[1].description;
if (info2 == null) { var info2 = obj[1].alt_description; }
document.getElementsByClassName("slide")[1].style.background = 'url(' + img2 + ') no-repeat center fixed';
document.getElementById('para2').innerHTML = info2;
getMeta(img2, 1);


var img3 = obj[2].urls.small.replace("crop=entropy", "crop&h=500&w=800");
var info3 = obj[2].description;
if (info3 == null) { var info3 = obj[2].alt_description; }
document.getElementsByClassName("slide")[2].style.background = 'url(' + img3 + ') no-repeat center fixed';
document.getElementById('para3').innerHTML = info3;
getMeta(img3, 2);

// // console.log(obj[0]);
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //Get Current Class
    const current = document.querySelector('.current');
    //Select Current
    current.classList.remove('current');
    //Check for next slider
    if (current.nextElementSibling) {
        //Add current to next nextElementSibling
        current.nextElementSibling.classList.add('current');
    }
    else {
        //Add Current to start yi
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));

}

const prevSlide = () => {
    //Get Current Class
    const current = document.querySelector('.current');
    //Select Current
    current.classList.remove('current');
    //Check for previous slider
    if (current.previousElementSibling) {
        //Add current to previous nextElementSibling
        current.previousElementSibling.classList.add('current');
    }
    else {
        //Add Current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//Auto Slider
if (auto) {
    //run next  slide at interval timeout
    slideInterval = setInterval(nextSlide, intervalTime);

}

//     url
