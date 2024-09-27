// chứa cate + số bài (1 hoặc nhiều cate)
const cateSearch = [
    {
        cate: 'cắt mí',
        per: 30,
    },
    {
        cate: 'nâng mũi',
        per: 30,
    },
    {
        cate: 'hàm mặt',
        per: 30,
    },
    {
        cate: 'nâng ngực',
        per: 30,
    },
    {
        cate: 'hành trình lột xác',
        per: 30,
    },
];
// call api
async function fetchSearchHandler(value, per) {
    const trimValue = value.split(' ');
    const joinValue = trimValue.join('+');
    let response = await fetch(`https://benhvienthammykangnam.vn/wp-json/wp/v2/posts?search=${joinValue}&per_page=${per}&page=1`);
    let posts = await response.json();
    return posts;
}
// func reset định dạng text về chữ thường + không dấu
function removeAccents(str) {
    const string = str || "";
    return string
        .normalize("NFD")
        .toLowerCase()
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}
// func xóa phần tử rỗng trong array
function removeEmpty(array) {
    const index = array.indexOf('');
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
// func debounce
function debounce(fn, ms) {
    let timer;
    
    return function() {
        // Nhận các đối số
        const args = arguments;
        const context = this;
        
        if(timer) clearTimeout(timer);
        
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, ms)
    }
}
// func sắp xếp từ nhiều đến ít
function compare( a, b ) {
    if ( a.length < b.length ){
        return 1;
    }
    if ( a.length > b.length ){
        return -1;
    }
    return 0;
}
const clickClose = (elm, input, tippy) => {
    elm.addEventListener('click', () => {
        input.value = '';
        elm.style.display = 'none';
        tippy.style.display = 'none';
    })
}
const changeSearch = (input, tippy, close, data, className) => {
    // select tới input + gọi sự kiện input + thêm debounce để nhân giá trị input
    // băm chuỗi từ khóa thành mảng rồi sắp xếp theo thứ tự từ khóa có nhiều bài viết nhất rồi tìm kiếm theo từng từ khóa
    input.addEventListener('input', debounce(e => {
        const arrayText = [];
        let dataSearch = data;
        // băm chuỗi từ khóa thành mảng
        let textTrim = removeAccents(e.target.value).split(' ');
        textTrim = removeEmpty(textTrim);
        // gán mảng từ khóa + số lượng bài viết đi kèm
        textTrim.forEach(text => {
            const dataText = data.filter(item => {
                return removeAccents(item.title.rendered).includes(removeAccents(text))
            });
            arrayText.push(
                {
                    text: text,
                    length: dataText.length
                }
            )
        })
        // sắp xếp
        arrayText.sort(compare);
        textTrim = arrayText.map(item => item.text);
        // tìm kiếm theo từ khóa
        textTrim.forEach(text => {
            dataSearch = dataSearch.filter(item => {
                return removeAccents(item.title.rendered).includes(removeAccents(text))
            });
        });
    
        dataSearch = dataSearch.splice(0, 5);
    
        if(e.target.value){
            close.style.display = 'block';
        } else {
            close.style.display = 'none';
        }
        if(dataSearch.length > 0 && e.target.value){
            const html = dataSearch.map((item, index) => `
            <div class="${className}__item">
                <span class="${className}__icon ${className}__iconNumber">${index + 1}</span>
                <a href="${item.link}" class="${className}__link" title="${item.title.rendered}">${item.title.rendered}</a>
            </div>
            `)
            // đổ dữ liệu và hiển thị suggest
            tippy.innerHTML = html.join('');
            tippy.style.display = 'block';
        } else {
            // xóa dữ liệu và đóng suggest
            tippy.innerHTML = '';
            tippy.style.display = 'none';
        }
        clickClose(close, input, tippy);
    }, 500))
}