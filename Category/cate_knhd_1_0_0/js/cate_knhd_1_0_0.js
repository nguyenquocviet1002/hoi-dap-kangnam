const activeCate_knhd_1_0_0 = 'Giảm mỡ';
const btnsCate_knhd_1_0_0 = document.querySelectorAll('.cate_knhd_1_0_0__item');
btnsCate_knhd_1_0_0.forEach(item => {
    item.classList.remove('active');
    const id = item.getAttribute('data-id');
    if (id === activeCate_knhd_1_0_0) {
        item.classList.add('active');
    };
});

const activeMobile = () => {
    const windowWidth = window.innerWidth;
    if(windowWidth < 768){
        btnsCate_knhd_1_0_0.forEach(btn => {
            btn.addEventListener('click', e => {
                if(btn.classList.contains('active')){
                    e.preventDefault();
                }
                btnsCate_knhd_1_0_0.forEach(item => {
                    item.classList.toggle('show');
                })
            })
        })
    }
};
activeMobile();
window.addEventListener('resize', () => activeMobile())