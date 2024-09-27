const inputHeader_knhd_1_0_0 = document.querySelector('.header_knhd_1_0_0__input input[type="text"]');
const dropdownHeader_knhd_1_0_0 = document.querySelector('.header_knhd_1_0_0__dropdown');
const closeHeader_knhd_1_0_0 = document.querySelector('.header_knhd_1_0_0__close');

let dataHeader_knhd_1_0_0 = [];

window.onload = async () => {
    if(cateSearch.length > 1) {
        cateSearch.forEach(async item => {
            const dataCate = await fetchSearchHandler(item.cate, item.per);
            dataHeader_knhd_1_0_0 = [...dataHeader_knhd_1_0_0, ...dataCate];
            changeSearch(inputHeader_knhd_1_0_0, dropdownHeader_knhd_1_0_0, closeHeader_knhd_1_0_0, dataHeader_knhd_1_0_0, "header_knhd_1_0_0");
        })
    } else {
        dataHeader_knhd_1_0_0 = await fetchSearchHandler(cateSearch[0].cate, 100);
        changeSearch(inputHeader_knhd_1_0_0, dropdownHeader_knhd_1_0_0, closeHeader_knhd_1_0_0, dataHeader_knhd_1_0_0, "header_knhd_1_0_0");
    }
}