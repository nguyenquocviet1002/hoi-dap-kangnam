const inputHeader_knhd_1_0_0 = document.querySelector('.header_knhd_1_0_0__input input[type="text"]');
const dropdownHeader_knhd_1_0_0 = document.querySelector('.header_knhd_1_0_0__dropdown');
const closeHeader_knhd_1_0_0 = document.querySelector('.header_knhd_1_0_0__close');
inputHeader_knhd_1_0_0.addEventListener('input', e => {
    let value = e.target.value;
    if (value.length > 0) {
        closeHeader_knhd_1_0_0.style.display = 'block';
        dropdownHeader_knhd_1_0_0.style.display = 'block';
    } else {
        closeHeader_knhd_1_0_0.style.display = 'none';
        dropdownHeader_knhd_1_0_0.style.display = 'none';
    }

});
closeHeader_knhd_1_0_0.addEventListener('click', () => {
    inputHeader_knhd_1_0_0.value = '';
    closeHeader_knhd_1_0_0.style.display = 'none';
    dropdownHeader_knhd_1_0_0.style.display = 'none';
})