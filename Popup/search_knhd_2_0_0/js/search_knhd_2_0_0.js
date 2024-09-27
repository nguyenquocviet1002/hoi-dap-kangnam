const htmlSearch_knhd_2_0_0 = `
<div class="search_knhd_2_0_0 modal" id="search_knhd_2_0_0__modal" style="display: flex;">
        <div class="modal-bg" onclick="closeSearch_knhd_2_0_0()"></div>
        <div class="search_knhd_2_0_0__box modal-box animate-opacity">
            <div class="search_knhd_2_0_0__close modal-close" onclick="closeSearch_knhd_2_0_0()">×</div>
            <div class="search_knhd_2_0_0__body">
                <div class="search_knhd_2_0_0__title">Tìm kiếm</div>
                <div class="search_knhd_2_0_0__search">
                    <div class="search_knhd_2_0_0__input">
                        <input type="text" placeholder="Gõ câu hỏi...">
                        <div class="search_knhd_2_0_0__iconClose"><img width="12" height="12" src="/Popup/search_knhd_2_0_0/images/icon-close.svg" alt=""></div>
                        <div class="search_knhd_2_0_0__dropdown">
                            <div class="search_knhd_2_0_0__item">
                                <span class="search_knhd_2_0_0__iconNumber">1</span>
                                <a href="#" class="search_knhd_2_0_0__link">Sau khi thực hiện phẫu thuật nâng, chỉnh sửa mũi bao lâu thì bệnh nhân có thể đi làm bình thường được?</a>
                            </div>
                            <div class="search_knhd_2_0_0__item">
                                <span class="search_knhd_2_0_0__iconNumber">2</span>
                                <a href="#" class="search_knhd_2_0_0__link">Sau khi thực hiện phẫu thuật nâng, chỉnh sửa mũi bao lâu thì bệnh nhân có thể đi làm bình thường được?</a>
                            </div>
                        </div>
                    </div>
                    <button class="search_knhd_2_0_0__btnSearch"><img width="40" height="40" src="/Popup/search_knhd_2_0_0/images/icon-search.svg" alt=""></button>
                </div>
            </div>
        </div>
    </div>
`;

const btnSearch_knhd_2_0_0 = document.querySelector('.search_knhd_2_0_0__pSearch');
let dataHeader_knhd_1_0_0 = [];

const closeSearch_knhd_2_0_0 = () => {
    document.querySelector('#search_knhd_2_0_0__modal').remove();
}

btnSearch_knhd_2_0_0.addEventListener('click', () => {
    document.body.insertAdjacentHTML("beforeend", htmlSearch_knhd_2_0_0);
    const inputSearch_knhd_2_0_0 = document.querySelector('.search_knhd_2_0_0__input input[type="text"]');
    const dropdownSearch_knhd_2_0_0 = document.querySelector('.search_knhd_2_0_0__dropdown');
    const closeSearch_knhd_2_0_0 = document.querySelector('.search_knhd_2_0_0__iconClose');
    changeSearch(inputSearch_knhd_2_0_0, dropdownSearch_knhd_2_0_0, closeSearch_knhd_2_0_0, dataHeader_knhd_1_0_0, "search_knhd_2_0_0");
});


window.onload = async () => {
    if(cateSearch.length > 1) {
        cateSearch.forEach(async item => {
            const dataCate = await fetchSearchHandler(item.cate, item.per);
            dataHeader_knhd_1_0_0 = [...dataHeader_knhd_1_0_0, ...dataCate];
        })
    } else {
        dataHeader_knhd_1_0_0 = await fetchSearchHandler(cateSearch[0].cate, 100);
    }
}