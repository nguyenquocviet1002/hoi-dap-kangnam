const inputSearch_knhd_1_0_0 = document.querySelector('.search_knhd_1_0_0__input input[type="text"]');
const dropdownSearch_knhd_1_0_0 = document.querySelector('.search_knhd_1_0_0__dropdown');
const closeSearch_knhd_1_0_0 = document.querySelector('.search_knhd_1_0_0__close');
inputSearch_knhd_1_0_0.addEventListener('input', e => {
    let value = e.target.value;
    if (value.length > 0) {
        closeSearch_knhd_1_0_0.style.display = 'block';
        dropdownSearch_knhd_1_0_0.style.display = 'block';
    } else {
        closeSearch_knhd_1_0_0.style.display = 'none';
        dropdownSearch_knhd_1_0_0.style.display = 'none';
    }

});
closeSearch_knhd_1_0_0.addEventListener('click', () => {
    inputSearch_knhd_1_0_0.value = '';
    closeSearch_knhd_1_0_0.style.display = 'none';
    dropdownSearch_knhd_1_0_0.style.display = 'none';
})