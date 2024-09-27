const inputSearch_knhd_1_0_0 = document.querySelector('.search_knhd_1_0_0__input input[type="text"]');
const dropdownSearch_knhd_1_0_0 = document.querySelector('.search_knhd_1_0_0__dropdown');
const closeSearch_knhd_1_0_0 = document.querySelector('.search_knhd_1_0_0__close');

let dataSearch_knhd_1_0_0 = [];

window.onload = async () => {
    if(cateSearch.length > 1) {
        cateSearch.forEach(async item => {
            const dataCate = await fetchSearchHandler(item.cate, item.per);
            dataSearch_knhd_1_0_0 = [...dataSearch_knhd_1_0_0, ...dataCate];
            changeSearch(inputSearch_knhd_1_0_0, dropdownSearch_knhd_1_0_0, closeSearch_knhd_1_0_0, dataSearch_knhd_1_0_0, "search_knhd_1_0_0");
        })
    } else {
        dataSearch_knhd_1_0_0 = await fetchSearchHandler(cateSearch[0].cate, 100);
        changeSearch(inputSearch_knhd_1_0_0, dropdownSearch_knhd_1_0_0, closeSearch_knhd_1_0_0, dataSearch_knhd_1_0_0, "search_knhd_1_0_0");
    }
}