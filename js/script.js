
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


$(document).on('click', function(){
    document.getElementById('my_audio').play();
});

// Set the date we're counting down to
var countDownDate = new Date('2022-07-03T07:00:00.000Z').getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const pluralize = (time, interval) => (time > 1 ? `${interval}s` : interval);
    
    const counterHtml = `<div class="countdown">
    <div class="container-day">
      <h3 class="day">${days}</h3>
      <span>${pluralize(days, 'Day')}</span>
    </div>
    <div class="container-hour">
      <h3 class="hour">${hours}</h3>
      <span>${pluralize(hours, 'Hour')}</span>
    </div>
    <div class="container-minute">
      <h3 class="minute">${minutes}</h3>
      <span>${pluralize(minutes, 'Minute')}</span>
    </div>
    <div class="container-second">
      <h3 class="second">${seconds}</h3>
      <span>${pluralize(seconds, 'Second')}</span>
    </div>
  </div>`
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = counterHtml;
    
    // If the count down is over, write some text 
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 3rd July, 2022!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Ajay M Bhat', styles1, styles2);
