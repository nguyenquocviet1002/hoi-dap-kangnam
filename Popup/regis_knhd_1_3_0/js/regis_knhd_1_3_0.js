const htmlRegis_knhd_1_3_0 = `
<div class="regis_knhd_1_3_0 modal" id="regis_knhd_1_3_0__modal" style="display: flex;">
    <div class="modal-bg" onclick="removeRegis_knhd_1_3_0()"></div>
    <div class="modal-box animate-opacity">
        <div class="regis_knhd_1_3_0__close modal-close" onclick="removeRegis_knhd_1_3_0()">×</div>
        <div class="regis_knhd_1_3_0__body">
            <div class="regis_knhd_1_3_0__banner">
                <img width="423" height="112" src="images/banner.jpg" alt="">
            </div>
            <div class="regis_knhd_1_3_0__form">
                <form id="regis_knhd_1_3_0__form">
                    <div style="display: none;">
                        <input type="text" placeholder="Họ và tên (*)" value="Yêu Cầu Gọi Lại" name="iname">
                        <input name="iemail" value="no@email.benhvienthammykangnam.vn">
                        <input type="email" name="email">
                        <input name="referred" value="">
                        <input name="code_campaign" value="533588630">
                        <input name="name_campaign" value="[Kangnam] Yêu Cầu Gọi Lại">
                        <input name="first_link" value="">
                        <input name="website" value="">
                        <input name="location" value="">
                    </div>
                    <div class="regis_knhd_1_3_0__control form-group">
                        <input type="text" name="imob" class="regis_knhd_1_3_0__input" placeholder="Số điện thoại">
                        <div class="form-message"></div>
                    </div>
                    <div class="regis_knhd_1_3_0__control form-group" style="display: none">
                        <input type="text" name="itext" class="regis_knhd_1_3_0__input">
                        <div class="form-message"></div>
                    </div>
                    <div class="regis_knhd_1_3_0__submit">
                        <input type="submit" value="gửi sđt">
                    </div>
                </form>
                <div class="regis_knhd_1_3_0__or">Hoặc</div>
                <a href="tel:19006466" class="regis_knhd_1_3_0__phone">
                    Liên hệ
                    <img width="26" height="26" src="images/icon-call.svg" alt="">
                    1900.6466
                </a>
            </div>
        </div>
    </div>
</div>
`;

const removeRegis_knhd_1_3_0 = () => {
    document.querySelector('#regis_knhd_1_3_0__modal').remove();
}

const btnRegis_knhd_1_3_0 = document.querySelectorAll('.knhd_call');
btnRegis_knhd_1_3_0.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.insertAdjacentHTML("beforeend", htmlRegis_knhd_1_3_0);
        // thao tác form
        document.querySelector('#regis_knhd_1_3_0__form input[name="first_link"]').value = document.URL;
        document.querySelector('#regis_knhd_1_3_0__form input[name="website"]').value = document.referrer;
        getLocation().then((data) => {
            document.querySelector('#regis_knhd_1_3_0__form input[name="location"]').value = data.city;
        });
        Validator({
            form: "#regis_knhd_1_3_0__form",
            errorSelector: ".form-message",
            formGroupSelector: ".form-group",
            rules: [
                Validator.isRequired('input[name="imob"]'),
                Validator.isMobile('input[name="imob"]'),
            ],
            onSubmit: function (data) {
                if (getValue('#regis_knhd_1_3_0__form input[name="email"]') === '') {
                    console.log(data);
                    sendForm(data, "/dang-ky-thanh-cong");
                }
                // parame: Form, Input
                disableButton('#regis_knhd_1_3_0__form', '#regis_knhd_1_3_0__form input[type="submit"]');
            },
        });
    })
})