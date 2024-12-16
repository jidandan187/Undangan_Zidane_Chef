const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const song = document.getElementById('song');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
let isPlaying = false;
function playAudio(){
    song.volume = 0.1;
    song.play();
    isPlaying = true;
}

audioIconWrapper.onclick = function(){
    if(isPlaying){
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    }else{
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
}
// /Cover/
document.getElementById('view-invitation').addEventListener('click', function() {
    const main = document.getElementById('main');
    main.style.display = 'block';
    main.scrollIntoView({behavior: 'smooth'});
    playAudio();});

/DATE/

var CountDownDate = new Date ("june 06, 2025 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = CountDownDate - now;

    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
},1000);

/UCAPAN/
document.addEventListener('DOMContentLoaded', loadMessages);
document.getElementById('messageForm').addEventListener('submit', addMessage);

function addMessage(event) {
    event.preventDefault();
    
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const messageList = document.getElementById('messageList');
        const newMessage = document.createElement('li');
        newMessage.textContent = messageText;

        messageList.appendChild(newMessage);

        saveMessage(messageText);
        messageInput.value = '';
    }
}

document.addEventListener('DOMContentLoaded', loadRSVPData);
function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    const messageList = document.getElementById('messageList');
    messages.forEach(message => {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        messageList.appendChild(listItem);
    });
}

// /RSVP/
function submitForm(event) {
    event.preventDefault();  

    var name = document.getElementById("name").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var attendance = document.querySelector('input[name="attendance"]:checked').value;
    var comment = document.getElementById("comment").value;
    var vehicle = document.getElementById("vehicle").value;
    var reminder = document.getElementById("reminder").checked;

    console.log({
        name: name,
        whatsapp: whatsapp,
        attendance: attendance,
        comment: comment,
        vehicle: vehicle,
        reminder: reminder
    });

    document.getElementById("rsvp-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

// story
let slideIndex = 0;
    
function moveSlide(n) {
  const slide = document.getElementById("storySlide");
  const items = document.querySelectorAll(".story-item");
  slideIndex += n;

  if (slideIndex >= items.length) {
    slideIndex = 0; 
  } else if (slideIndex < 0) {
    slideIndex = items.length - 1; 
  }
  
  const offset = -slideIndex * 100;
  slide.style.transform = `translateX(${offset}%)`;
}

//galeri/
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('lightbox');
    modal.innerHTML = `<img src="${image.src}" alt="Expanded Image" />`;
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
  });
});
