const regis_knhd_1_0_0Btn = document.querySelector('.knhd_tv');

const regis_knhd_1_0_0Html = `
<div class="regis_knhd_1_0_0 modal" id="regis_knhd_1_0_0" style="display: flex;">
    <div class="modal-bg" onclick="regis_knhd_1_0_0Remove()"></div>
    <div class="modal-box animate-opacity">
        <div class="regis_knhd_1_0_0__close modal-close" onclick="regis_knhd_1_0_0Remove()">×</div>
        <div class="regis_knhd_1_0_0__body">
            <div class="regis_knhd_1_0_0__title">Quý khách để lại thông tin để nhận ưu đãi tốt nhất</div>
            <form class="regis_knhd_1_0_0__form">
                <div style="display: none;">
                    <input name="referred" value="">
                    <input name="code_campaign" value="584304803">
                    <input name="name_campaign" value="[Kangnam] Thẩm Mỹ Mắt">
                    <input name="first_link" value="">
                    <input name="website" value="">
                    <input name="location" value="">
                    <input name="itext" value="">
                </div>
                <div class="regis_knhd_1_0_0__control form-group">
                    <input type="text" name="iname" class="regis_knhd_1_0_0__input" placeholder="Họ tên">
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_0_0__control form-group">
                    <input type="text" name="imob" class="regis_knhd_1_0_0__input" placeholder="Số điện thoại">
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_0_0__control form-group">
                    <select class="regis_knhd_1_0_0__input">
                        <option value="">Dịch vụ</option>
                    </select>
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_0_0__submit">
                    <input type="submit" value="Nhận ưu đãi">
                </div>
            </form>
        </div>
    </div>
</div>
`;

const regis_knhd_1_0_0Remove = () => {
    document.querySelector('#regis_knhd_1_0_0').remove();
}

regis_knhd_1_0_0Btn.addEventListener('click', () => {
    document.body.insertAdjacentHTML('beforeend', regis_knhd_1_0_0Html);

    document.querySelector('#regis_knhd_1_0_0__form input[name="first_link"]').value = document.URL;
    document.querySelector('#regis_knhd_1_0_0__form input[name="website"]').value = document.referrer;
    getLocation().then((data) => {
        document.querySelector('#regis_knhd_1_0_0__form input[name="location"]').value = data.city;
    });
    Validator({
        form: '#regis_knhd_1_0_0__form',
        errorSelector: '.form-message',
        formGroupSelector: '.form-group',
        rules: [
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('input[name="iname"]'),
        ],
        onSubmit: function (data) {
            const resultInput = document.querySelector('#form-question .form_knhd_1_0_0__result').value;
            if (!resultInput || Number(resultInput) !== numbers[0] + numbers[1]) {
                alert('Đáp án chưa chính xác. Vui lòng thử lại');
            } else {
                console.log(data);
            }
        }
    });
})
