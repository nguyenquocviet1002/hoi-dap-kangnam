const htmlPopup_knhd_1_0_0 = `
<div class="popup_knhd_1_0_0 modal" id="popup_knhd_1_0_0__modal" style="display: flex;">
    <div class="modal-bg" onclick="removePopup_knhd_1_0_0()"></div>
    <div class="popup_knhd_1_0_0__box modal-box animate-opacity">
        <div class="popup_knhd_1_0_0__close modal-close" onclick="removePopup_knhd_1_0_0()">×</div>
        <div class="popup_knhd_1_0_0__body">
            <div class="popup_knhd_1_0_0__title">Chào bạn!</div>
            <div class="popup_knhd_1_0_0__sub">Bạn cần chúng tôi tư vấn về vấn đề gì?</div>
            <form id="popup_knhd_1_0_0__form" action="https://hoidap.benhvienthammykangnam.vn/cau-hoi/" method="post" enctype="multipart/form-data" role="form">
                <div style="display: none;">
                    <input name="avatar" value="/wp-content/themes/KnAnser2024/Module/Category/cateList_knhd_1_0_0/images/avatar.png">
                </div>
                <div class="popup_knhd_1_0_0__control form-group">
                    <label class="popup_knhd_1_0_0__label">Tiêu đề <span>*</span></label>
                    <input type="text" class="popup_knhd_1_0_0__input" name="isubject" placeholder="Nhập tiêu đề câu hỏi">
                    <div class="form-message"></div>
                </div>
                <div class="popup_knhd_1_0_0__control form-group">
                    <label class="popup_knhd_1_0_0__label">Nội dung câu hỏi <span>*</span></label>
                    <textarea class="popup_knhd_1_0_0__note" name="iquestion" placeholder="Tôi muốn hỏi..." rows="4"></textarea>
                    <div class="form-message"></div>
                </div>
                <div class="popup_knhd_1_0_0__control form-group">
                    <label class="popup_knhd_1_0_0__label">Chuyên mục tư vấn online <span>*</span></label>
                    <select class="popup_knhd_1_0_0__input" name="icate">
                        <option value="">Chọn chuyên mục</option>
                    </select>
                    <div class="form-message"></div>
                </div>
                <div class="popup_knhd_1_0_0__control form-group">
                    <label class="popup_knhd_1_0_0__label">Họ và tên <span>*</span></label>
                    <input type="text" class="popup_knhd_1_0_0__input" name="iname" placeholder="Nhập họ tên">
                    <div class="form-message"></div>
                </div>
                <div class="popup_knhd_1_0_0__submit">
                    <input type="submit" value="ĐẶT CÂU HỎI">
                </div>
            </form>
        </div>
    </div>
</div>
`;

const removePopup_knhd_1_0_0 = () => {
    document.querySelector('#popup_knhd_1_0_0__modal').remove();
}

const removeAPopup_knhd_1_0_0 = (arr, a) => {
    let what, ax;
    while ((ax= arr.indexOf(a)) !== -1) {
        arr.splice(ax, 1);
    }
    return arr;
}

const queryPopup_knhd_1_0_0 = async () => {
    const response = await fetch('https://hoidap.benhvienthammykangnam.vn/wp-json/wp/v2/categories');
    const data = await response.json();
    const cate = data.map(item => item.name);
    const cateConvert = removeAPopup_knhd_1_0_0(cate, 'Chưa phân loại');
    return cateConvert;
}

const btnPopup_knhd_1_0_0 = document.querySelector('.popup_knhd_1_0_0__btn');
let catePopup_knhd_1_0_0;
btnPopup_knhd_1_0_0.addEventListener('click', async () => {
    document.body.insertAdjacentHTML('beforeend', htmlPopup_knhd_1_0_0);
    // thao tác form    
    if(!catePopup_knhd_1_0_0) {
        catePopup_knhd_1_0_0 = await queryPopup_knhd_1_0_0();
    }
    let html = '<option value="">Chọn chuyên mục</option>';
    catePopup_knhd_1_0_0.map(item => {
        html += `<option value="${item}">${item}</option>`;
    });
    document.querySelector('select[name="icate"]').innerHTML = html;

    Validator({
        form: '#popup_knhd_1_0_0__form',
        errorSelector: '.form-message',
        formGroupSelector: '.form-group',
        rules: [
            Validator.isRequired('input[name="isubject"]'),
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('select[name="icate"]'),
            Validator.isRequired('textarea[name="iquestion"]'),
        ],
    });
})