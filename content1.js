const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const CT1 = $('.content');
const app = {

    listcarss: [
        {
            name: 'lamborghini - Aventador-SVJ',
            path: './lamborghini-Aventador/lamborghini-aventador-1.jpg',
            price: '24.000.000.000',
            script: 'Xe sử dụng động cơ V12 hút khí tự nhiên , dung tích 6,5 lít như bản coupe, công suất tối đa 700 mã lực tại 8.250 vòng/phút, mô-men xoắn cực đại 690 Nm tại 5.500 vòng/phút, có khả năng tăng tốc 0-100 km/h trong 2,9 giây, tốc độ tối đa đạt 349 km/h',
            listImage: {
                img1: './lamborghini-Aventador/lamborghini-aventador-1.jpg',
                img2: './lamborghini-Aventador/lamborghini-aventador-2.jpg',
                img3: './lamborghini-Aventador/lamborghini-aventador-3.jpg',
                img4: './lamborghini-Aventador/lamborghini-aventador-4.jpg',
                img5: './lamborghini-Aventador/lamborghini-aventador-5.jpg',
                img6: './lamborghini-Aventador/lamborghini-aventador-6.jpg',
                img7: './lamborghini-Aventador/lamborghini-aventador-7.jpg',
            }
        },
        {
            name: 'Porsche-911 Targa 4',
            path: './Porsche-911/porsche-911-1.jpg',
            price: '6.000.000.000',
            script: 'Porsche 911 Targa 4 2022 được trang bị động cơ 6 xy-lanh phẳng 3.0 lít tăng áp kép, và có sức mạnh tương đương 2 phiên bản Coupe và Cabriolet. Sức mạnh tạo ra cho phiên bản Targa 4 là 379 mã lực và 450 Nm, tăng tốc từ 0 – 100 Km/h trong 4,2 giây với gói Sport Chrono',
            listImage: {
                img1: './Porsche-911/porsche-911-1.jpg',
                img2: './Porsche-911/porsche-911-2.jpg',
                img3: './Porsche-911/porsche-911-3.jpg',
                img4: './Porsche-911/porsche-911-4.jpg',
                img5: './Porsche-911/porsche-911-5.jpg',
                img6: './Porsche-911/porsche-911-6.jpg',
                img7: './Porsche-911/porsche-911-7.jpg',
            }
        },
        {
            name: 'ROLLS-ROYCE Phantom Lửa Thiêng',
            path: './ROLLS-ROYCE/RR-3.jpg',
            price: '40.000.000.000',
            script: 'Rolls Royce Phantom Lửa Thiêng (Sacred Fire) là mẫu xe đầu tiên thuộc bộ sưu tập Đông Sơn, bao gồm Lửa Thiêng, Thủy Triều (Wave), Thần Núi (God of Mountain), Ngân Vũ (The Money Rain), Phù Sa (Red River – Alluvium) và Mẹ Âu Cơ (Au Co Mother). Mỗi mẫu xe trong bộ sưu tập này đều lấy cảm hứng từ các thần thoại và lịch sử Việt Nam, nhằm mục đích giới thiệu giá trị văn hóa, lịch sử của dân tộc Việt Nam.',
            listImage: {
                img1: './ROLLS-ROYCE/RR-1.jpg',
                img2: './ROLLS-ROYCE/RR-2.jpg',
                img3: './ROLLS-ROYCE/RR-3.jpg',
                img4: './ROLLS-ROYCE/RR-4.jpg',
                img5: './ROLLS-ROYCE/RR-5.jpg',
                img6: './ROLLS-ROYCE/RR-6.jpg',
                img7: './ROLLS-ROYCE/RR-7.jpg',
            }
        },
        {
            name: 'Mclaren-650s',
            path: './Mclaren-650s/mc-laren-1.jpg',
            price: '50.000.000.000',
            script: 'Sự kết hợp giữa McLaren 650S và bộ body kit Liberty Walk đã tạo ra một tác phẩm nghệ thuật di động đẳng cấp. Với thiết kế mang đậm phong cách đường phố Nhật Bản, bộ body kit Liberty Walk mang đến một diện mạo mới cho McLaren 650S, tạo nên một sự kết hợp hoàn hảo giữa thể thao và sự cá nhân hóa.',
            listImage: {
                img1: './Mclaren-650s/mc-laren-1.jpg',
                img2: './Mclaren-650s/porsche-911-2.jpg',
                img3: './Mclaren-650s/porsche-911-3.jpg',
                img4: './Mclaren-650s/porsche-911-4.jpg',
                img5: './Mclaren-650s/porsche-911-5.jpg',

            }
        },
        {
            name: 'Lamborghini Aventador Roadster',
            path: './lamborghini-Aventador/lamborghini-aventador-6.jpg',
            price: '50.000.000.000',
            script: 'Xe sử dụng động cơ V12 hút khí tự nhiên , dung tích 6,5 lít như bản coupe, công suất tối đa 700 mã lực tại 8.250 vòng/phút, mô-men xoắn cực đại 690 Nm tại 5.500 vòng/phút, có khả năng tăng tốc 0-100 km/h trong 2,9 giây, tốc độ tối đa đạt 349 km/h',
            listImage: {
                img1: './lamborghini-Aventador/lamborghini-aventador-1.jpg',
                img2: './lamborghini-Aventador/lamborghini-aventador-2.jpg',
                img3: './lamborghini-Aventador/lamborghini-aventador-3.jpg',
                img4: './lamborghini-Aventador/lamborghini-aventador-4.jpg',
                img5: './lamborghini-Aventador/lamborghini-aventador-5.jpg',
                img6: './lamborghini-Aventador/lamborghini-aventador-6.jpg',
                img7: './lamborghini-Aventador/lamborghini-aventador-7.jpg',
            }
        },
        {
            name: 'BMW 730i SẢN XUẤT NĂM 2020',
            path: './BMW/BMW-1.jpeg',
            price: '50.000.000.000',
            script: 'Xe sử dụng động cơ V12 hút khí tự nhiên , dung tích 6,5 lít như bản coupe, công suất tối đa 700 mã lực tại 8.250 vòng/phút, mô-men xoắn cực đại 690 Nm tại 5.500 vòng/phút, có khả năng tăng tốc 0-100 km/h trong 2,9 giây, tốc độ tối đa đạt 349 km/h',
            listImage: {
                img1: './BMW/BMW-1.jpeg',
                img2: './BMW/BMW-2.jpeg',
                img3: './BMW/BMW-3.jpeg',
            }
        },
        {
            name: 'Mclaren-650',
            path: './Mclaren-650s/porsche-911-2.jpg',
            price: '42.000.000.000',
            script: 'Sự kết hợp giữa McLaren 650S và bộ body kit Liberty Walk đã tạo ra một tác phẩm nghệ thuật di động đẳng cấp. Với thiết kế mang đậm phong cách đường phố Nhật Bản, bộ body kit Liberty Walk mang đến một diện mạo mới cho McLaren 650S, tạo nên một sự kết hợp hoàn hảo giữa thể thao và sự cá nhân hóa.',
            listImage: {
                img1: './Mclaren-650s/mc-laren-1.jpg',
                img2: './Mclaren-650s/porsche-911-2.jpg',
                img3: './Mclaren-650s/porsche-911-3.jpg',
                img4: './Mclaren-650s/porsche-911-4.jpg',
                img5: './Mclaren-650s/porsche-911-5.jpg',

            }
        },
        {
            name: 'Vinfast VF 9 Plus 2023',
            path: './vinfast-vf9/vf9-1.jpg',
            price: '1.239.000.000',
            script: 'Có thể dễ dàng thấy được mục tiêu mà VinFast hướng đến là hướng dòng xe điện VinFast VF9 có thể sánh ngang với những mẫu SUV hạng sang cỡ lớn như Mercedes-Benz GLS hay BMW X7',
            listImage: {
                img1: './vinfast-vf9/vf9-1.jpg',
                img2: './vinfast-vf9/vf9-2.jpg',
            }
        },
        {
            name: 'Porsche-911 2023',
            path: './Porsche-911/porsche-911-5.jpg',
            price: '7.239.000.000',
            script: 'Porsche 911 Targa 4 2022 được trang bị động cơ 6 xy-lanh phẳng 3.0 lít tăng áp kép, và có sức mạnh tương đương 2 phiên bản Coupe và Cabriolet. Sức mạnh tạo ra cho phiên bản Targa 4 là 379 mã lực và 450 Nm, tăng tốc từ 0 – 100 Km/h trong 4,2 giây với gói Sport Chrono',
            listImage: {
                img1: './Porsche-911/porsche-911-1.jpg',
                img2: './Porsche-911/porsche-911-2.jpg',
                img3: './Porsche-911/porsche-911-3.jpg',
                img4: './Porsche-911/porsche-911-4.jpg',
                img5: './Porsche-911/porsche-911-5.jpg',
                img6: './Porsche-911/porsche-911-6.jpg',
                img7: './Porsche-911/porsche-911-7.jpg',
            }
        },
    ],

    handleRender: function () {
        const content1 =
            (` <div class="content-search">
         <h1>TÌM XE NHANH</h1>
         <div class="SearchBox">
             <input type="text" class="SearchBox-input" placeholder="nhập tên xe">
             <button class="SearchBox-button">
                 <i class="SearchBox-icon  material-icons">search</i>
             </button>
         </div>
         </div>
         <div class="image-animation">
         <div class="image-animation-wrapp-buton">
            <div class="image-animation-buton">
                <i class="fas fa-chevron-left"></i>
            </div>
         </div>
         <div class="image-animation-container">
             <img class="image-replace" src="./ROLLS-ROYCE/RR-3.jpg" />
             <img class="image-replace" src="./Porsche-911/porsche-911-1.jpg" />
             <img class="image-replace" src="./Mclaren-650s/mc-laren-1.jpg" />
             <img class="image-replace" src="./lamborghini-Aventador/lamborghini-aventador-1.jpg" />
         </div>
         <div class="image-animation-wrapp-buton">
            <div class="image-animation-buton">
            <i class="fas fa-chevron-right"></i>
            </div>
         </div>
         </div>
         <div class="list-car">
         <div class="list-car-container">
             <div class="option-list-car">
                 <h3>XE ĐANG BÁN</h3>
             </div>
                 <div class="container-car">
                 ${this.listcarss.map((value, index) => (`
                 <a onclick="handleEventClick(${index})" class="card-car">
                 <img src="${value.path}" alt="">
                 <div class="name-car">${value.name}</div>
                 <div class="price">
                     <div class="Number">
                         ${value.price}
                         <span>₫</span>
                     </div>
                 </div>
                 </a>
                 `)).join('')}
                 </div>
             <div class="footer-list-car">
                 <div class="wrap-button">
                     <button class="button-page"><i class="fas fa-chevron-left"></i></button>
                     <button class="button-page">1</button>
                     <button class="button-page">2</button>
                     <button class="button-page">3</button>
                     <button class="button-page">...</button>
                     <button class="button-page"><i class="fas fa-chevron-right"></i></button>
                 </div>
             </div>
         </div>
         </div>
         
         `)
        const content2 = (` <div class="introduce">
        <h1>UTC AUTO - LỰA CHỌN SỐ 1 CỦA NGƯỜI ĐAM MÊ XE</h1>
        <div class="img-introduce">
            <img src="https://sontungauto.vn/wp-content/uploads/2022/09/son-tung-auto-8-1.jpg" alt="">
        </div>
        <span>UTC Auto được Vũ UTC (Bảo Tín Mạnh Hải) thành lập từ năm 2007. Sau đã được ông trương xuân lộc
            mua lại thương hiệu và làm Chủ tịch hội đồng quản trị UTC Auto. Với nhiệt huyết yêu nghề
            của chủ tịch cùng với thương hiệu đã có hơn 10 năm kinh nghiệm kinh doanh xe hơi nhập khẩu, đặc biệt
            là những dòng xe siêu sang như Bentley, Rolls-Royce hay những dòng siêu xe tốc độ như Lamborghini,
            Ferrari, thì UTC Auto luôn là điểm đến hàng đầu của khách hàng và các tín đồ mê xe.</span>
        <h1>KHÁM PHÁ SHOWROOM</h1>
        <iframe width="1200" height="700" src="https://www.youtube.com/embed/JJtka_UqDT4?si=_sYuUyXBA0KnhnbC"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>`)
        const content3 = (` <div class="product">
        <div class="wrapp-product">
        ${this.listcarss.map((value) => (`
            <div class="card-product">
                <img src="${value.path}" alt="" width="100%" height="80%">
                <div class="name-car">${value.name}</div>
                <div class="price">
                    <div class="Number">
                        ${value.price}
                        <span>₫</span>
                    </div>
                </div>
            </div>
        `)).join('')}
        </div>
    </div>`)
        const comingsoon = (`<div class="comingsoon">
                <div class="wrapp-content-commingsoon">
                <h1>COMING SOON</h1>
                <span>Hãy là người đầu tiên sở hữu chiếc xe ...</span>
                <span>liên hệ ngay để được biết thêm chi tiết</span>
            </div>
        </div>`)
        CT1.innerHTML = content1;
        const btnPage1 =  $('.button-page1');
        const btnPage2 = $('.button-page2');
        const btnPage3 = $('.button-page3');
        const btnPage4 = $('.button-page4');
        const btnPage5 = $('.button-page5');
        const btnPage6 = $('.button-page6');
        const btnPage7 = $('.button-page7');
        const btnPage1_RP = $('.button-page1-rp');
        const btnPage2_RP = $('.button-page2-rp');
        const btnPage3_RP = $('.button-page3-rp');
        const btnPage4_RP = $('.button-page4-rp');
        const btnPage5_RP = $('.button-page5-rp');
        let currentPage = btnPage1

        currentPage.style.backgroundColor = '#ccc';
        btnPage1_RP.onclick=btnPage1.onclick = () => {
            CT1.innerHTML = content1;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage1.style.backgroundColor = '#ccc';
            currentPage = btnPage1;
        }
        btnPage2_RP.onclick=btnPage2.onclick = () => {
            CT1.innerHTML = content2;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage2.style.backgroundColor = '#ccc';
            currentPage = btnPage2;
        }
        btnPage3_RP.onclick=btnPage3.onclick = () => {
            CT1.innerHTML = content3;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage3.style.backgroundColor = '#ccc';
            currentPage = btnPage3;
        }
        btnPage4_RP.onclick=btnPage4_RP.onclick=btnPage4.onclick = () => {
            CT1.innerHTML = comingsoon;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage4.style.backgroundColor = '#ccc';
            currentPage = btnPage4;
        }
        btnPage5_RP.onclick=btnPage5.onclick = () => {
            CT1.innerHTML = content2;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage5.style.backgroundColor = '#ccc';
            currentPage = btnPage5;
        }
        btnPage6.onclick = () => {
            CT1.innerHTML = comingsoon;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage6.style.backgroundColor = '#ccc';
            currentPage = btnPage6;
        }
        btnPage7.onclick = () => {
            CT1.innerHTML = comingsoon;
            currentPage.style.backgroundColor = 'rgba(234,237,240,0.8)';
            btnPage7.style.backgroundColor = '#ccc';
            currentPage = btnPage7;
        }
        // handleEventClick

        handleEventClick = (i) => {
            const currentValue = this.listcarss[i];
            // ${Object.keys(currentValue.listImage).forEach((value,prop)=>
            //     [...prop,`<img src="${value}" alt="" width="500" height="300">`])}
            const detail = (`<div class="detail-car">
            <div class="wrapp-detail-car">
                <h1>${currentValue.name}</h1>
                <img src="${currentValue.path}" alt="" width="500" height="300">
                <div class="script-detail">
                    <span>${currentValue.script}</span>
                </div>
            ${Object.entries(currentValue.listImage).map(value => (`<img src="${value[1]}" alt="" width="500" height="300">`))}
            </div>
        </div>`);
            console.log(this.listcarss[i])
            CT1.innerHTML = detail;
        }
    },

    start: function () {
        this.handleRender();
        // this.handleEvent();
    }
}
app.start()

