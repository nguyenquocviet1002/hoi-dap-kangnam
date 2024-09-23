const queryDoctor_knhd_1_0_0 = async () => {
    const response = await fetch('https://hoidap.benhvienthammykangnam.vn/wp-json/api/v1/doctor/');
    const data = await response.json();
    return data.doctor;
}

let dataDoctor_knhd_1_0_0;

// func hiện item
const renderDoctor_knhd_1_0_0 = () => {
    const html = dataDoctor_knhd_1_0_0.map(item => {
        return `
        <div class="doctor_knhd_1_0_0__item">
            <div class="doctor_knhd_1_0_0__avt"><img width="100" height="100" src="https://hoidap.benhvienthammykangnam.vn/${item.image}" alt=""></div>
            <div class="doctor_knhd_1_0_0__info">
                <div class="doctor_knhd_1_0_0__position">${item.degree}</div>
                <div class="doctor_knhd_1_0_0__name">${item.name}</div>
                <div class="doctor_knhd_1_0_0__desc">${item.position}</div>
            </div>
            <div class="doctor_knhd_1_0_0__btn">
                <a href="#">Gửi câu hỏi</a>
            </div>
        </div>
        `
    })
    document.querySelector('.doctor_knhd_1_0_0__scroll').innerHTML = html.join('');
}

// func gán height
const setHeightDoctor_knhd_1_0_0 = () => {
    const elm = document.querySelector('.doctor_knhd_1_0_0');
    elm.style.minHeight = `${elm.clientHeight}px`;
}

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

window.addEventListener('resize', () => {
    setHeightDoctor_knhd_1_0_0();
});

window.addEventListener('load', async () => {
    dataDoctor_knhd_1_0_0 = await queryDoctor_knhd_1_0_0();
    setHeightDoctor_knhd_1_0_0();
    renderDoctor_knhd_1_0_0();
});

