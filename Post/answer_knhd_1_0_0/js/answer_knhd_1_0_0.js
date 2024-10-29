let text = document.querySelector('.answer_knhd_1_0_0__content').innerText;
text = text.replace(/(\r\n|\n|\r)/gm, "");
const title = document.querySelector('.question_knhd_1_0_1__title').innerText;
const desc = document.querySelector('.question_knhd_1_0_1__content').innerText;
const total = `${title}. ${desc}. ${text}`;
fetch(`https://viettelai.vn/tts/speech_synthesis`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        speed: 1.0,
        text: total,
        token: "54e875a4445f760ce65010e90c21c315",
        tts_return_option: 3,
        voice: "hn-thaochi",
        without_filter: false
    })
})
    .then(res => res.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        answer_knhd_1_0_0Func(audio);
    });

const answer_knhd_1_0_0Func = audio => {
    const playIconContainer = document.getElementById('play-icon');
    const audioPlayerContainer = document.getElementById('audio-player-container');
    const seekSlider = document.getElementById('seek-slider');
    let playState = 'play';
    
    audioPlayerContainer.classList.remove('hide');
    playIconContainer.addEventListener('click', () => {
        if (playState === 'play') {
            audio.play();
            requestAnimationFrame(whilePlaying);
            playState = 'pause';
            playIconContainer.children[0].classList.replace('answer_knhd_1_0_0__playPause', 'answer_knhd_1_0_0__playPlay')

        } else {
            audio.pause();
            cancelAnimationFrame(raf);
            playState = 'play';
            playIconContainer.children[0].classList.replace('answer_knhd_1_0_0__playPlay', 'answer_knhd_1_0_0__playPause')
        }
    });
    const showRangeProgress = (rangeInput) => {
        if (rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    }
    seekSlider.addEventListener('input', (e) => {
        showRangeProgress(e.target);
    });

    const durationContainer = document.getElementById('duration');
    const currentTimeContainer = document.getElementById('current-time');
    let raf = null;
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    const displayDuration = () => {
        durationContainer.textContent = calculateTime(audio.duration);
    }

    const setSliderMax = () => {
        seekSlider.max = Math.floor(audio.duration);
    }

    const displayBufferedAmount = () => {
        const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
        audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
    }

    const whilePlaying = () => {
        seekSlider.value = Math.floor(audio.currentTime);
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
        if (seekSlider.value / seekSlider.max * 100 >= 100) {
            playState = 'play';
            playIconContainer.children[0].classList.replace('answer_knhd_1_0_0__playPlay', 'answer_knhd_1_0_0__playPause')
        }
        raf = requestAnimationFrame(whilePlaying);
    }

    if (audio.readyState > 0) {
        displayDuration();
        setSliderMax();
        displayBufferedAmount();
    } else {
        audio.addEventListener('loadedmetadata', () => {
            displayDuration();
            setSliderMax();
            displayBufferedAmount();
        });
    }

    audio.addEventListener('progress', displayBufferedAmount);

    seekSlider.addEventListener('input', () => {
        currentTimeContainer.textContent = calculateTime(seekSlider.value);
        if (!audio.paused) {
            cancelAnimationFrame(raf);
        }
    });

    seekSlider.addEventListener('change', () => {
        audio.currentTime = seekSlider.value;
        if (!audio.paused) {
            requestAnimationFrame(whilePlaying);
        }
    });
}