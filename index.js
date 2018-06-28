// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }


let lincolnButton = document.querySelector('#save_lincoln')

lincolnButton.addEventListener('click', (e) => {
  const intervalInput = document.getElementById('interval').value
  if(intervalInput) {
    const zombiePic = document.getElementById('foreground')
    fadeOutAndCallback(zombiePic, intervalInput);
  }
})

function fadeOutAndCallback(image, interval){
    var opacity = 1;
    var timer = setInterval(function(){
        if(opacity < 0.1){
            clearInterval(timer);
        }
        image.style.opacity = opacity;
        opacity -=  0.1;
    }, interval/10);
}
