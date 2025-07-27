// --- SLIDER CONFIGURATION ---
const sliderImages = [

    {
        url: 'images/Pic1.jpeg',
        caption: 'Had to save this for later &#128514;'
    }, {
        url: 'images/Pic2.jpeg',
        caption: 'This is just cute.'
    }, {
        url: 'images/Pic3.jpeg',
        caption: 'The skyline and the Japanese sea must have been jealous.'
    }, {
        url: 'images/Pic4.jpeg',
        caption: 'I can stare at this forever.'
    }, {
        url: 'images/Pic0.jpg',
        caption: 'Mbu you still swiped. Yeah i love all of them but unfortunately lost most of them. Is this a sign for you to send them when you get a chance?'
    }
];

let currentSlide = 0;
const slider = document.getElementById('image-slider');
const dotsNav = document.getElementById('dots-nav');
let touchStartX = 0;
let touchEndX = 0;

function renderDots() {
    dotsNav.innerHTML = '';
    sliderImages.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === currentSlide ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dotsNav.appendChild(dot);
    });
}

function renderSlider() {
    slider.innerHTML = ''; // Clear previous slides
    sliderImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === currentSlide ? 'active' : ''}`;
        slide.innerHTML = `
                    <img src="${img.url}" alt="${img.caption}" class="w-full h-auto" onerror="this.onerror=null;this.src='https://placehold.co/400x400/E0E0E0/333333?text=Image+Not+Found';">
                    <p class="title-font text-center mt-4 text-lg text-gray-700">${img.caption}</p>
                `;
        slider.appendChild(slide);
    });
    renderDots();
}

function goToSlide(index) {
    currentSlide = index;
    renderSlider();
}

function changeSlide(n) {
    currentSlide = (currentSlide + n + sliderImages.length) % sliderImages.length;
    renderSlider();
}

// Touch events for mobile swipe
slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left
            changeSlide(1);
        } else {
            // Swiped right
            changeSlide(-1);
        }
    }
}

// --- TEXT ROTATOR CONFIGURATION ---
const reasons = [
    "your incredible kindness.",
    "the way your eyes light up when you smile.",
    "your contagious laughter.",
    "how you always know how to make me feel better.",
    "your passion for the things you love.",
    "our late-night conversations.",
    "the way you look at me.",
    "your strength and resilience.",
    "making the most ordinary days feel extraordinary.",
    "why the fuck you put up with me.",
    "your unwavering support.",
    "the little things you do every day.",
    "your bravery.",
    "your ambition and determination.",
    "your thoughtful gestures.",
    "your ability to listen.",
    "your caring nature."
];

const thingsToDo = [
    "take a long walk together.",
    "hold your hand for the first time.",
    "go on a real date, no screens attached.",
    "cook a meal together.",
    "watch a movie without a 3-second delay.",
    "introduce you to my friends and family.",
    "simply sit in comfortable silence together.",
    "travel the world with you.",
    "to just be in your presence."
];

const reasonTextElement = document.getElementById('reason-text');
const todoTextElement = document.getElementById('todo-text');

function createTextRotator(element, items) {
    let currentIndex = 0;

    function changeText() {
        element.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % items.length;
            element.textContent = items[currentIndex];
            element.style.opacity = 1;
        }, 1000);
    }

    // Initial state
    if (items.length > 0) {
        element.textContent = items[0];
        element.style.opacity = 1;
    }

    // Start rotator
    setInterval(changeText, 4000);
}

// --- SCROLL REVEAL ---
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// --- YOUTUBE MUSIC PLAYER ---
const playlist = [{
    id: '0QO5_QGS5ds',
    title: 'Agora Hills',
    artist: 'Doja Cat'
}, {
    id: 'mjcX-5lKdeg',
    title: 'Young and Beautiful',
    artist: 'Lana Del Rey'
}, {
    id: 'RDAMVM0QO5_QGS5ds',
    title: 'Essence',
    artist: 'Wizkid ft. Tems'
}, {
    id: 'V1Pl8CzNzCw',
    title: 'Lovely',
    artist: 'Billie Eilish & Khalid'
}, {
    id: 'uAYG46w1SCA',
    title: 'Say So',
    artist: 'Doja Cat'
}, {
    id: 'USb5JBhZed0',
    title: 'Need to Know',
    artist: 'Doja Cat'
}, {
    id: 'TBXQu8ORnBQ',
    title: 'Dangerously',
    artist: 'Charlie Puth'
}, {
    id: 'QLCpqdqeoII',
    title: 'die for you',
    artist: 'The Weeknd'
}, {
    id: '450p7goxZqg',
    title: 'All Of Me',
    artist: 'John Legend'
}, {
    id: 'ZqSlV5LmrTg',
    title: 'Snooze',
    artist: 'SZA'
}, {
    id: 'FxIqEW-UqEc',
    title: 'Love On The Brain',
    artist: 'Rihanna'
}, {
    id: 'viimfQi_pUw',
    title: 'Ocean Eyes',
    artist: 'Billie Eilish'
}, {
    id: 'Pkh8UtuejGw',
    title: 'Senorita',
    artist: 'Shawn Mendes & Camila Cabello'
}, {
    id: '5Xtvxn9myus',
    title: 'Trip',
    artist: 'Ella Mai'
}, {
    id: 'RsELrcVNzG0',
    title: 'Your Song',
    artist: 'Rita Ora'
}, {
    id: 'XVveECQmiAk',
    title: 'Luther',
    artist: 'Kendrick Lamar & SZA'
}, {
    id: '5Wiio4KoGe8',
    title: 'What Lovers Do',
    artist: 'Maroon 5 ft. SZA'
}, {
    id: 'zDo0H8Fm7d0',
    title: 'Meant to Be',
    artist: 'Bebe Rexha ft. Florida Georgia Line'
}, {
    id: 'x3bfa3DZ8JM',
    title: 'Better',
    artist: 'Khalid'
}, {
    id: '-8VfKZCOo_I',
    title: 'Bam Bam',
    artist: 'Camila Cabello ft. Ed Sheeran'
}, {
    id: 'RDAMVMIdakuJqdm2M',
    title: 'S.M.K',
    artist: 'Fave'
}];

let player;
let currentVideoIndex = 0;
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const playPauseBtn = document.querySelector('.play-pause');

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Initialize YouTube Player when API is ready
window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: playlist[currentVideoIndex].id,
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'modestbranding': 1,
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    updateSongInfo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        nextVideo();
    }
    updatePlayPauseButton(event.data);
}

function updatePlayPauseButton(state) {
    playPauseBtn.textContent = state === YT.PlayerState.PLAYING ? '&#9208;' : '&#9205;';
}

function togglePlayPause() {
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % playlist.length;
    player.loadVideoById(playlist[currentVideoIndex].id);
    updateSongInfo();
}

function previousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + playlist.length) % playlist.length;
    player.loadVideoById(playlist[currentVideoIndex].id);
    updateSongInfo();
}

function updateSongInfo() {
    const currentSong = playlist[currentVideoIndex];
    songTitle.textContent = 'Now Playing: ' + currentSong.title;
    songArtist.textContent = currentSong.artist;
}

// --- INITIALIZE EVERYTHING ON LOAD ---
window.onload = function() {
    renderSlider();
    createTextRotator(reasonTextElement, reasons);
    createTextRotator(todoTextElement, thingsToDo);

    // Initialize scroll reveal
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
}