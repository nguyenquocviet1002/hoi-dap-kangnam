const htmlRegis_knhd_1_2_0 = `
<div class="regis_knhd_1_2_0 modal" id="regis_knhd_1_2_0__modal" style="display: flex;">
    <div class="modal-bg" onclick="removeRegis_knhd_1_2_0()"></div>
    <div class="modal-box animate-opacity">
        <div class="regis_knhd_1_2_0__close modal-close" onclick="removeRegis_knhd_1_2_0()">×</div>
        <div class="regis_knhd_1_2_0__body">
            <div class="regis_knhd_1_2_0__banner">
                <img width="423" height="112" src="Popup/regis_knhd_1_2_0/images/banner.jpg" alt="">
            </div>
            <form class="regis_knhd_1_2_0__form" id="regis_knhd_1_2_0__form">
                <div style="display: none;">
                    <input name="iemail" value="no@email.benhvienthammykangnam.vn">
                    <input type="email" name="email">
                    <input name="referred" value="">
                    <input name="code_campaign" value="533588672">
                    <input name="name_campaign" value="[Kangnam] Kangnam hỏi đáp tư vấn">
                    <input name="first_link" value="">
                    <input name="website" value="">
                    <input name="location" value="">
                </div>
                <div class="regis_knhd_1_2_0__control form-group">
                    <input type="text" name="iname" class="regis_knhd_1_2_0__input" placeholder="Họ tên">
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_2_0__control form-group">
                    <input type="text" name="imob" class="regis_knhd_1_2_0__input" placeholder="Số điện thoại">
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_2_0__control form-group" style="display: none">
                    <input type="text" name="itext" class="regis_knhd_1_2_0__input">
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_2_0__control form-group">
                    <select class="regis_knhd_1_2_0__input" name="iservice">
                        <option value="">Dịch vụ</option>
                        <option value="nâng mũi">Nâng mũi</option>
                        <option value="cắt mí">Cắt mí</option>
                        <option value="nâng vòng 1">Nâng vòng 1</option>
                        <option value="hàm mặt">Hàm mặt</option>
                        <option value="trẻ hóa">Trẻ hóa</option>
                        <option value="điều trị da">Điều trị da</option>
                        <option value="hút mỡ">Hút mỡ</option>
                        <option value="khác">Khác</option>
                    </select>
                    <div class="form-message"></div>
                </div>
                <div class="regis_knhd_1_2_0__submit">
                    <input type="submit" value="ĐẶT LỊCH TƯ VẤN NGAY">
                </div>
            </form>
        </div>
    </div>
</div>
`;

const removeRegis_knhd_1_2_0 = () => {
    document.querySelector('#regis_knhd_1_2_0__modal').remove();
}

const btnRegis_knhd_1_2_0 = document.querySelector('.knhd_regis');
btnRegis_knhd_1_2_0.addEventListener('click', () => {
    document.body.insertAdjacentHTML("beforeend", htmlRegis_knhd_1_2_0);
    // thao tác form
    document.querySelector('#regis_knhd_1_2_0__form input[name="first_link"]').value = document.URL;
    document.querySelector('#regis_knhd_1_2_0__form input[name="website"]').value = document.referrer;
    getLocation().then((data) => {
        document.querySelector('#regis_knhd_1_2_0__form input[name="location"]').value = data.city;
    });
    Validator({
        form: "#regis_knhd_1_2_0__form",
        errorSelector: ".form-message",
        formGroupSelector: ".form-group",
        rules: [
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('input[name="imob"]'),
            Validator.isMobile('input[name="imob"]'),
            Validator.isRequired('select[name="iservice"]'),
            Validator.addInput("#regis_knhd_1_2_0__form input[name='itext']", () => "Dịch vụ quan tâm: " + document.querySelector('#regis_knhd_1_2_0__form select[name="iservice"]').value),
        ],
        onSubmit: function (data) {
            if (getValue('#regis_knhd_1_2_0__form input[name="email"]') === '') {
                console.log(data);
                sendForm(data, "/dang-ky-thanh-cong");
            }
            // parame: Form, Input
            disableButton('#regis_knhd_1_2_0__form', '#regis_knhd_1_2_0__form input[type="submit"]');
        },
    });
})