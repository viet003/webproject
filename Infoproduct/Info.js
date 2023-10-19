document.body.onload = function () {
    text_animation();
    open_ship();
    change_language();
    close_post();
    hidden_title();
}

// tạo hiệu ứng chuyển đổi dòng text
function text_animation() {
    let list = [
        "HÀNG VIỆT NAM CHẤT LƯỢNG CAO ",
        "ADDIAS - ĐỒNG HÀNH TRÊN CON ĐƯỜNG CHINH PHỤC",
        "GIAO HÀNG MIỄN PHÍ CHO CÁC THÀNH VIÊN ADICLUB"
    ];
    var i = 0;

    setInterval(() => {
        let text = document.querySelector(".text_animation>p");
        var newText = list[i];
        text.classList.add("animate");
        text.innerHTML = newText + '&nbsp&nbsp<i class="fa-solid fa-chevron-down"></i>';
        text.addEventListener("animationend", function () {
            text.classList.remove("animate");
        });
        i++;
        if (i > 2) {
            i = 0;
        }
    }, 5000);
}
// open ship
function open_ship() {
    var p = document.querySelector(".text_animation>p");
    var block_scroll = document.getElementById("body");
    var div_hidden = document.querySelector(".no");
    var bar = document.querySelector(".ship");
    var close = document.querySelector(".x");
    p.addEventListener("click", () => {
        div_hidden.style.display = "block";
        block_scroll.style.overflow = "hidden";
        bar.classList.add("ani");
        bar.style.top = "0px";
        bar.addEventListener("animationend", function () {
            bar.classList.remove("ani");
        });
    });

    div_hidden.addEventListener("click", () => {
        div_hidden.style.display = "none";
        block_scroll.style.overflow = "scroll";
        bar.classList.add("ani_out");
        bar.style.top = "-300px";;
        bar.addEventListener("animationend", function () {
            bar.classList.remove("ani_out");
        });
    })

    close.addEventListener("click", () => {
        div_hidden.style.display = "none";
        block_scroll.style.overflow = "scroll";
        bar.classList.add("ani_out");
        bar.style.top = "-300px";
        bar.addEventListener("animationend", function () {
            bar.classList.remove("ani_out");
        });
    })
}
// gọi hàm chuyển ngôn ngữ
function change_language() {
    var language = document.querySelector(".language_select>i");
    //var isblock = false;
    language.addEventListener("click", function () {
        var el = document.querySelector(".language_select>div");
        if (el.className == "_language_change") {
            el.classList.remove("_language_change");
            el.classList.add("language_change");
            language.style.transform = "rotate(-180deg)";
        } else {
            el.classList.remove("language_change");
            el.classList.add("_language_change");
            language.style.transform = "rotate(0)"
        }
    });
}

// đóng quảng cáo
function close_post() {
    var close = document.querySelector(".post>i");
    close.addEventListener("click", function () {
        var div = document.querySelector(".post");
        if (div.style.display = "block") {
            div.style.display = "none";
        }
    });
}

$(document).ready(function () {
    $(".show_more").click(function () {
        $(".toggle").slideToggle(500); // Toggles the visibility of the element with id "toggleMe"
    });

    $(".title_1").click(function () {
        $(".Ds_info_1").slideToggle(500); // Toggles the visibility of the element with id "toggleMe"
    });

    $(".title_2").click(function () {
        $(".Ds_info_2").slideToggle(500); // Toggles the visibility of the element with id "toggleMe"
    });
});

//slick-slider


$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4, // slide hiển thị
        slidesToScroll: 4, // slide sau mỗi lần cuộn
        infinite: false,  // set chế độ chạy slide
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
        dots: true,
    });
});
