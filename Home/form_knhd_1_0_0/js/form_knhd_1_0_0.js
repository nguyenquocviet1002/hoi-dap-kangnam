document.addEventListener("DOMContentLoaded", function() {
    const removeA = (arr, a) => {
        let what, ax;
        while ((ax= arr.indexOf(a)) !== -1) {
            arr.splice(ax, 1);
        }
        return arr;
    }
    
    document.getElementById("uploadBtn1") && (document.getElementById("uploadBtn1").onchange = function () {
        document.getElementById("uploadFile1").value = this.value.replace("C:\\fakepath\\", "");
    });
    
    const queryForm_knhd_1_0_0 = async () => {
        const response = await fetch('https://hoidap.benhvienthammykangnam.vn/wp-json/wp/v2/categories');
        const data = await response.json();
        const cate = data.map(item => item.name);
        const cateConvert = removeA(cate, 'Chưa phân loại');
        return cateConvert;
    }
    
    Validator({
        form: '#form-question',
        errorSelector: '.form-message',
        formGroupSelector: '.form-group',
        rules: [
            Validator.isRequired('input[name="isubject"]'),
            Validator.isRequired('input[name="iname"]'),
            Validator.isRequired('select[name="icate"]'),
            Validator.isRequired('textarea[name="iquestion"]'),
        ],
    });
    
    window.onload = async() => {
        const cate = await queryForm_knhd_1_0_0();
        let html = '<option value="">Chọn chuyên mục</option>';
        cate.map(item => {
            html += `<option value="${item}">${item}</option>`;
        });
        document.querySelector('select[name="icate"]').innerHTML = html;
    }
});