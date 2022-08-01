   
		var preloader = document.getElementById("loading");
		function myFunction(){
			preloader.style.display = 'none'
		};
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play()
  ; 
} 
const downloadBtn = document.querySelector(".download-btn");
  const countdown = document.querySelector(".countdown");
  const pleaseWaitText = document.querySelector(".pleaseWait-text");
  const manualDownloadText = document.querySelector(".manualDownload-text");
  const manualDownloadLink = document.querySelector(".manualDownload-link");
  var timeLeft = 5;

  downloadBtn.addEventListener("click", () => {
    downloadBtn.style.display = "none";
    countdown.innerHTML = " <span>" + timeLeft + "</span> seconds."  //for quick start of countdown

    var downloadTimer = setInterval(function timeCount() {
      timeLeft -= 1;
      countdown.innerHTML = " <span>" + timeLeft + "</span> seconds.";

      if(timeLeft <= 0){
        clearInterval(downloadTimer);
        pleaseWaitText.style.display = "block";
        let download_href = "ffmax/index.html"; //enter the downlodable file link here
        window.location.href = download_href;
        manualDownloadLink.href = download_href;
        setTimeout(() => {
          pleaseWaitText.style.display = "none";
        manualDownloadText.style.display = "block"
        }, 4000);
      }
    }, 1000);
  });
  function btn1() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  }
var indexValue = 1;
      showImg(indexValue);
      function btm_slide(e){showImg(indexValue = e);}
      function side_slide(e){showImg(indexValue += e);}
      function showImg(e){
        var i;
        const img = document.querySelectorAll('img');
        const slider = document.querySelectorAll('.btm-slides span');
        if(e > img.length){indexValue = 1}
        if(e < 1){indexValue = img.length}
        for(i = 0; i < img.length; i++){
          img[i].style.display = "none";
        }
        for(i = 0; i < slider.length; i++){
          slider[i].style.background = "rgba(255,0,0,0.1)";
        }
        img[indexValue-1].style.display = "block";
        slider[indexValue-1].style.background = "red";
      }
 var indexValue = 0;
      function slideShow(){
        setTimeout(slideShow, 10);
        var x;
        const img = document.querySelectorAll("img");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }
      slideShow();