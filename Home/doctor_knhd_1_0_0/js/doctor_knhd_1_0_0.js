// func move item
const funcDragDoctor_knhd_1_0_0 = (element) => {
    let mouseDown = false;
    let startX, scrollLeft;
    const slider = document.querySelector(element);

    const startDragging = (e) => {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const stopDragging = (e) => {
        mouseDown = false;
        document.querySelector('.doctor_knhd_1_0_0__scroll').classList.remove('hide');
    }

    const move = (e) => {
        if (!mouseDown) { return; }
        document.querySelector('.doctor_knhd_1_0_0__scroll').classList.add('hide');
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    }
    // Add the event listeners
    slider.addEventListener('mousemove', move, false);
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
};

funcDragDoctor_knhd_1_0_0('.doctor_knhd_1_0_0__list');