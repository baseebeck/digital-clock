
function clockWork () {
// CLOCK
  let clock = document.querySelector(".clock");

  let fullDate = new Date();
  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  let second = fullDate.getSeconds();
  let meridian = "AM";

  if (hour >= 12) {
    meridian = "PM";
  }

  if (hour > 12) {
    hour = hour - 12;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

// CLOCK DISPLAY
  let clockTime = hour + " : " + minute + " : " + second + " " + meridian;
  clock.innerHTML = clockTime;

// DATE
  let date = document.querySelector(".date");

  let month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  let n = month[fullDate.getMonth()];
  let day = fullDate.getDay() + 1;
  let year = fullDate.getFullYear();

// DATE DISPLAY
  let dateDisplay = n + " " + day + ", " + year;
  date.innerHTML = dateDisplay;


  // Messages associated with times
  let showMessages = function() {
    if (meridian == "PM") {
      hour = hour + 12;
    }

    let message = document.querySelector(".message");

    let wakeUpAudioBtn = document.querySelector(".wakeUpAudioBtn");
    let dinnerAudioBtn = document.querySelector(".dinnerAudioBtn");

    // let hourValue = document.querySelector(".clock").innerHTML.substring(0,2);

    let wakeUpTime = document.querySelector(".wakeUpTime").value;
    let lunchTime = document.querySelector(".lunchTime").value;
    let dinnerTime = document.querySelector(".dinnerTime").value;
    let bedTime = document.querySelector(".bedTime").value;

    if (wakeUpTime == hour) {
      message.innerHTML = "It's time to wake up!"
      message.classList.remove("hidden");
      wakeUpAudioBtn.classList.remove("hidden");
      dinnerAudioBtn.classList.add("hidden");
    }

    else if (lunchTime == hour) {
      message.innerHTML = "It's lunch time!"
      message.classList.remove("hidden");
      wakeUpAudioBtn.classList.add("hidden");
      dinnerAudioBtn.classList.add("hidden");
    }

    else if (dinnerTime == hour) {
      message.innerHTML = "It's dinner time!";
      message.classList.remove("hidden");
      dinnerAudioBtn.classList.remove("hidden");
      wakeUpAudioBtn.classList.add("hidden");
    }

    else if (bedTime == hour) {
      message.innerHTML = "It's bed time!";
      message.classList.remove("hidden");
      wakeUpAudioBtn.classList.add("hidden");
      dinnerAudioBtn.classList.add("hidden");
    }

    else if (wakeUpTime != hour && lunchTime != hour && dinnerTime != hour && bedTime != hour) {
      message.classList.add("hidden");
      wakeUpAudioBtn.classList.add("hidden");
      dinnerAudioBtn.classList.add("hidden");
    }

  }
  showMessages();

}

setInterval(clockWork, 1000);


// Wake up Audio
let wakeUpTimeAudio = new Audio("sounds/good-morning-vietnam.mp3");

document.querySelector(".wakeUpAudioBtn").addEventListener("click", function() {
  wakeUpTimeAudio.play();
});

// Dinner time Audio
let dinnerTimeAudio = new Audio("sounds/dinner-time.mp3");

document.querySelector(".dinnerAudioBtn").addEventListener("click", function() {
  dinnerTimeAudio.play();
});
