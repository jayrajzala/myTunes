//Global Slide Config
var auto = true;
var intervalTime = 5000;
//General Variables
var num = 0;
var imagesHtml = "";

//view port h & w
var viewPortWidth = document.documentElement.clientWidth;
var viewPortheight = document.documentElement.clientHeight;

// Get number when submit
function handleClick() {
  // document.querySelector("#slideSubmit").click();
  console.log("clickevent");
}
// function altHandleClick() {
//   document.querySelector("#slideSubmit").click();
// }

function getData() {
  var submit = document.querySelector("#slideSubmit");
  submit.addEventListener("click", function() {
    var slide_k = document.querySelector("#slideKeyword").value;
    var slideCount = document.querySelector("#slideCount").value;
    if (slideCount) {
    } else {
      slideCount = 30;
    }
    // if (slideCount) {
    // } else {
    //   var slideCount = document.querySelector("#altSlideNumber").value;
    // }

    if (slide_k) {
      // console.log("didn't worked");
      function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
      }
      // url = `https://api.unsplash.com/photos/random/?count=${slideCount}&client_id=9a6e0729702602ae1d78aa3300524f7e6d9a1c1bc3616d7e4a40509225ce3cc1`;
      url = `https://api.unsplash.com/search/photos?per_page=${slideCount}&query=${slide_k}&orientation=landscape&client_id=9a6e0729702602ae1d78aa3300524f7e6d9a1c1bc3616d7e4a40509225ce3cc1`;

      var data = httpGet(url);
      obj = JSON.parse(data);

      imagesObj = [];
      var i = 0;
      if (imagesObj !== null) {
        imagesObj = [];
      }

      for (i = 0; i < obj.results.length; i++) {
        imagesObj.push(
          obj.results[i].urls.regular.replace(
            "crop=entropy",
            `crop&h=${viewPortheight}&w=${viewPortWidth}`
          )
        );
        imagesHtml += `<img class="images img${i}" src="0">`;
        // imagesHtml += `<img class="img" src=${imagesObj[i]}>`;
      }

      if (obj.results.length < 2) {
        alert("Nothing Found! Try Another Keyword");
      } else {
        var container = document.querySelector("#container").innerHTML;
        document.querySelector("#container").innerHTML = "";
        document.querySelector("#container").innerHTML =
          '<div id="slider">' + imagesHtml + "</div>";
        document.getElementById("container").style.backgroundColor = "#323333";
        var image_query = document.querySelectorAll(".images");
        for (i = 0; i < 11; i++) {
          image_query[i].setAttribute("src", `${imagesObj[i]}`);
        }
        for (i = imagesObj.length - 1; i > imagesObj.length - 6; i--) {
          image_query[i].setAttribute("src", imagesObj[i]);
        }

        setTimeout(function() {
          document.querySelectorAll(".images")[5].classList.add("active");
          document.getElementById("prev").style.display = "initial";
          document.getElementById("next").style.display = "initial";
        }, 2000);
      }
    }

    //Auto Slider
    if (auto) {
      //run next  slide at interval timeout
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    // console.log(imagesObj);
  }); //Event Lister Ends
}
getData();

// var img1 = obj[0].urls.thumb.replace("crop=entropy", "crop&h=500&w=800");
// var info1 = obj[0].description;
// if (info1 == null) {
//   var info1 = obj[0].alt_description;
// }
// document.getElementsByClassName("slide")[0].style.background =
//   "url(" + img1 + ") no-repeat center fixed";
// document.getElementById("para1").innerHTML = info1;
// getMeta(img1, 0);

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let slideInterval;
var buttonCounter = 0;

function nextSlide() {
  var images = document.querySelectorAll(".images");
  //Get active Class
  const active = document.querySelector(".active");
  //Select active
  active.classList.remove("active");
  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    //Add active to start
    // images[0].classList.add("active");
    images[0].classList.add("active");
    buttonCounter = 0;
  }
  //setTimeout(() => active.classList.remove("active"));

  //Check for next slider
  var img_n = parseInt(active.classList[1].replace(/img(.?.?.?.?)/, "$1"));
  // console.log(img_n + 3);
  if (active.nextElementSibling.nextElementSibling.nextElementSibling) {
    if (
      active.nextElementSibling.nextElementSibling.nextElementSibling.attributes.src.value === "0"
    ) {
      // prettier-ignore
      document.getElementsByClassName("images")[img_n + 3].setAttribute("src", imagesObj[img_n + 3]);
      // console.log("worked");
      // for (i = img_n + 3; i < img_n + 13; i++) {
      //   document.getElementsByClassName("images")[i].setAttribute("src", imagesObj[i]);
      // }
    }
  }
  //Add active to next nextElementSibling
}

function prevSlide() {
  var images = document.querySelectorAll(".images");
  //Get active Class
  const active = document.querySelector(".active");
  //Select active
  active.classList.remove("active");
  //Check for previous slider
  if (active.previousElementSibling) {
    //Add active to previous nextElementSibling
    active.previousElementSibling.classList.add("active");
  } else {
    //Add active to last
    images[images.length - 1].classList.add("active");
  }
  // setTimeout(() => active.classList.remove('active'));

  // buttonCounter = buttonCounter - 1;
  var img_n = parseInt(active.classList[1].replace(/img(.?.?.?.?)/, "$1"));

  // prettier-ignore
  if (document.querySelector(".active").previousElementSibling.previousElementSibling.previousElementSibling) {
    if (document.querySelector(".active").previousElementSibling.previousElementSibling.previousElementSibling.attributes.src.value === "0") {
      document.getElementsByClassName("images")[img_n-4].setAttribute("src", imagesObj[img_n-4]);
    } 
    else {

    }
} else {
    
    // images.length - (img_n - 3);
    // prettier-ignore
    // if(img_n<3){
    // document.getElementsByClassName("images")[(images.length-1) - Math.abs(3 - img_n)].setAttribute("src", imagesObj[img_n + 3]);
    // }
    // else{

    // if(img_n<3){
    //   console.log("index if img_n < 3", (images.length + (img_n-4)));
    // document.getElementsByClassName("images")[(images.length+(img_n-4))].setAttribute("src", imagesObj[(images.length+(img_n-4))]);
    // }
    // else{
      // if(img_n>3){
      // console.log("index", img_n - 3);
      // document.getElementsByClassName("images")[img_n-3].setAttribute("src", imagesObj[img_n-3]);
      // }

  // }
  }
}

//

//Button events
next.addEventListener("click", function() {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", function() {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
