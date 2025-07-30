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
        url: 'images/Pic5.jpeg',
        caption: 'just stunning.'
    }, {
        url: 'images/Pic8.jpeg',
        caption: '&#128525;'
    }, {
        url: 'images/Pic9.jpeg',
        caption: 'Need i say more?'
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
let slideInterval = null; // For automatic sliding

// Function to start automatic sliding
function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds
}

// Function to stop automatic sliding
function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

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
    slider.innerHTML = '';
    sliderImages.forEach((img, index) => {
        const slide = document.createElement('div');
        let slideClass = 'slide';
        if (index === currentSlide) {
            slideClass += ' active';
        } else if (index === (currentSlide - 1 + sliderImages.length) % sliderImages.length) {
            slideClass += ' prev';
        }
        slide.className = slideClass;
        slide.innerHTML = `
            <img src="${img.url}" alt="${img.caption}" class="w-full h-auto object-cover" onerror="this.onerror=null;this.src='https://placehold.co/400x400/E0E0E0/333333?text=Image+Not+Found';">
            <p class="title-font text-center mt-4 text-lg text-gray-700">${img.caption}</p>
        `;
        slider.appendChild(slide);
    });
    renderDots();
}

// Re-render slider on resize to update transition style
window.addEventListener('resize', () => {
    renderSlider();
});

function goToSlide(index) {
    currentSlide = index;
    renderSlider();
    // Reset auto-slide timer when manually navigating
    startAutoSlide();
}

function changeSlide(n) {
    currentSlide = (currentSlide + n + sliderImages.length) % sliderImages.length;
    renderSlider();
    // Reset auto-slide timer when manually navigating
    if (n !== 1 || !slideInterval) { // Don't reset if it's an auto-slide
        startAutoSlide();
    }
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
    id: '2bpMSpFTdzM',
    title: 'Ceilings',
    artist: 'Lizzy McAlpine'
}, {
    id: 'MiAoetOXKcY',
    title: 'Say yes to heaven',
    artist: 'Lana Del Rey'
}, {
    id: 'OohPKqzNZP0',
    title: 'Essence',
    artist: 'Wizkid ft. Tems & Justin Bieber'
}, {
    id: 'V1Pl8CzNzCw',
    title: 'Lovely',
    artist: 'Billie Eilish & Khalid'
}, {
    id: 'uAYG46w1SCA',
    title: 'Say So',
    artist: 'Doja Cat'
}, {
    id: 'QZp2biJul1c',
    title: 'Vegas',
    artist: 'Doja Cat'
}, {
    id: 'USb5JBhZed0',
    title: 'Need to Know',
    artist: 'Doja Cat'
}, {
    id: 'o5WIOcPLUU4',
    title: 'OverCome',
    artist: 'Skott'
}, {
    id: '84yTsE4eNYQ',
    title: 'Kiki Do You Love Me',
    artist: 'Drake'
}, {
    id: 'y9qO_xgE34Q',
    title: 'Wait for you',
    artist: 'Future ft. Drake & Tems'
}, {
    id: 'ZqSlV5LmrTg',
    title: 'Snooze',
    artist: 'SZA'
}, {
    id: 'esKJ8BbauGk',
    title: 'Sure Thing',
    artist: 'Miguel'
}, {
    id: 'viimfQi_pUw',
    title: 'Ocean Eyes',
    artist: 'Billie Eilish'
}, {
    id: 'BY_XwvKogC8',
    title: 'Chihiro',
    artist: 'Billie Eilish'
}, {
    id: 'VaKzNtwPQxE',
    title: `Let's fall in love for the night`,
    artist: 'FINNEAS'
}, {
    id: 'Pkh8UtuejGw',
    title: 'Senorita',
    artist: 'Shawn Mendes & Camila Cabello'
}, {
    id: 'tt2k8PGm-TI',
    title: 'Dusk Till Dawn',
    artist: 'Zayn ft. Sia'
}, {
    id: '5Xtvxn9myus',
    title: 'Trip',
    artist: 'Ella Mai'
}, {
    id: '6YNZlXfW6Ho',
    title: `Boo'd Up`,
    artist: 'Ella Mai'
}, {
    id: 'o5thu6-7y3Q',
    title: 'Made for Me',
    artist: 'Muni Long'
}, {
    id: '4D89Qr5vH6U',
    title: 'Favorite Song',
    artist: 'Toosii'
}, {
    id: 'RHUUy3acptk',
    title: 'At My Worst',
    artist: 'Pink Sweat$'
}, {
    id: 'RsELrcVNzG0',
    title: 'Your Song',
    artist: 'Rita Ora'
}, {
    id: 'XVveECQmiAk',
    title: 'Luther',
    artist: 'Kendrick Lamar & SZA'
}, {
    id: 'ox7RsX1Ee34',
    title: 'LOVE',
    artist: 'Kendrick Lamar'
}, {
    id: 'iSgUMPHQEWw',
    title: 'Pretty Little Fears (Bet she from the westside)',
    artist: '6LACK ft. J Cole'
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
    id: 'YpEvcBVBA1o',
    title: 'S.M.K',
    artist: 'Fave'
}, {
    id: 'Bx5JZNoz-KY',
    title: 'Favorite Psycho',
    artist: 'Qing Madi'
}, {
    id: 'Tb4X1BWNO5k',
    title: 'Mad Over You',
    artist: 'Runtown'
}, {
    id: 'ABy7v4MSKqs',
    title: 'Fever',
    artist: 'Wizkid'
}, {
    id: 'WH-M6W2778E',
    title: 'Particula',
    artist: 'Major Lazer ft. Nasty C, Ice Prince, Patoranking & Jidenna'
}, {
    id: 'eVli-tstM5E',
    title: 'Espresso',
    artist: 'Sabrina Carpenter'
}, {
    id: 'kOkQ4T5WO9E',
    title: 'This is what you came for',
    artist: 'Calvin Harris ft. Rihanna'
}, {
    id: '2PGa_0A--RI',
    title: 'Wakikuba (Used to be my favorite UG song)',
    artist: 'Pia Pounds'
}];

let player;
let currentVideoIndex = 0;
let progressInterval = null;
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const playPauseBtn = document.querySelector('.play-pause');
const progressBar = document.querySelector('.progress-bar');
const progressIndicator = document.querySelector('.progress');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');

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

    // Set up progress bar interaction
    progressBar.addEventListener('click', (e) => {
        if (!player || !player.getDuration) return;

        const progressBarRect = progressBar.getBoundingClientRect();
        const clickPosition = e.clientX - progressBarRect.left;
        const percentage = (clickPosition / progressBarRect.width);
        const seekTime = player.getDuration() * percentage;
        player.seekTo(seekTime, true);
        updateProgress(); // Update immediately for responsive feel
    });
}

function onPlayerReady(event) {
    updateSongInfo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        nextVideo();
    } else if (event.data === YT.PlayerState.PLAYING) {
        startProgressUpdate();
        updateProgress(); // Update immediately when playing starts
    } else {
        stopProgressUpdate();
    }
    updatePlayPauseButton(event.data);
}

function updatePlayPauseButton(state) {
    playPauseBtn.textContent = state === YT.PlayerState.PLAYING ? '⏸' : '▶';
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

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgress() {
    try {
        if (!player || !player.getCurrentTime || !player.getDuration) return;

        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();

        if (isNaN(currentTime) || isNaN(duration)) return;

        const progressPercent = (currentTime / duration) * 100;

        // Update progress bar
        progressIndicator.style.width = `${progressPercent}%`;

        // Update time display
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    } catch (error) {
        console.error('Error updating progress:', error);
    }
}

// Start progress update interval when video starts playing
function startProgressUpdate() {
    stopProgressUpdate();
    progressInterval = setInterval(updateProgress, 250); // Update every 250ms for smoother progress
}

// Stop progress update interval
function stopProgressUpdate() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

// --- INITIALIZE EVERYTHING ON LOAD ---
window.onload = function() {
    renderSlider();
    createTextRotator(reasonTextElement, reasons);
    createTextRotator(todoTextElement, thingsToDo);

    // Start automatic sliding
    startAutoSlide();

    // Initialize scroll reveal
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
}