// func move item
const funcDragTopic_knhd_1_0_0 = (element) => {
    let mouseDown = false;
    let startX, scrollLeft;
   
    const slider = document.querySelector(element);
    const next = document.querySelector('.topic_knhd_1_0_0__arrow--2');
    const prev = document.querySelector('.topic_knhd_1_0_0__arrow--1');

    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const stopDragging = (e) => {
        mouseDown = false;
        document.querySelector('.topic_knhd_1_0_0__scroll').classList.remove('hide');
    }

    const checkArrow = (value = 0) => {
        let maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        let minScrollLeft = 0;
        if(slider.scrollLeft + value <= minScrollLeft){
            prev.style.visibility = 'hidden';
        } else {
            prev.style.visibility = 'visible';
        }
        if(slider.scrollLeft + value >= maxScrollLeft){
            next.style.visibility = 'hidden';
        } else {
            next.style.visibility = 'visible';
        }
    }

    const move = (e) => {
        slider.classList.remove('smooth');
        if (!mouseDown) { return; }
        document.querySelector('.topic_knhd_1_0_0__scroll').classList.add('hide');
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
        checkArrow();
    }
    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
    next.addEventListener('click', () => {
        slider.classList.add('smooth');
        slider.scrollLeft += (slider.clientWidth / 2);
        checkArrow(slider.clientWidth / 2);
    });
    prev.addEventListener('click', () => {
        slider.classList.add('smooth');
        slider.scrollLeft -= (slider.clientWidth / 2);
        checkArrow(-slider.clientWidth / 2);
    });
    checkArrow();
};
funcDragTopic_knhd_1_0_0('.topic_knhd_1_0_0__list');