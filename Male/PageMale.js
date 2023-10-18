document.body.onload = function() {
    text_animation();
    change_language();
    close_post();
    hidden_title();
    button_animation(); 
 }
 // tạo hiệu ứng chuyển đổi dòng text
 function text_animation() {
     let list = [
         "HÀNG VIỆT NAM CHẤT LƯỢNG CAO ",
         "ADDIAS - ĐỒNG HÀNH TRÊN CON ĐƯỜNG CHINH PHỤC",
         "GIAO HÀNG MIỄN PHÍ CHO CÁC THÀNH VIÊN ADICLUB"
     ];
     var i = 0;
 
     setInterval(()=> {
         let text = document.querySelector(".text_animation>p");
         var newText = list[i];
         text.classList.add("animate");
         text.innerHTML = newText + '&nbsp&nbsp<i class="fa-solid fa-chevron-down"></i>';
         text.addEventListener("animationend", function() {
             text.classList.remove("animate");
         });  
         i++;
         if(i > 2) {
             i = 0;
         }  
     },5000);
 }
 
 // gọi hàm chuyển ngôn ngữ
 function change_language() {
     var language = document.querySelector(".language_select>i");
     language.addEventListener("click",function() {
         var el = document.querySelector(".language_select>div");
         if(el.className == "_language_change") {
             el.classList.remove("_language_change");
             el.classList.add("language_change");
         } else {
             el.classList.remove("language_change");
             el.classList.add("_language_change")
         }
     });
 }
 
 // đóng quảng cáo
 function close_post() {
     var close = document.querySelector(".post>i");
     close.addEventListener("click", function() {
         var div = document.querySelector(".post");
         if(div.style.display = "block") {
             div.style.display = "none";
         } 
     });
 }
 
 // ẩn thanh title
 function hidden_title() {
     var previousScrollPosition = window.scrollY;
     var Title = document.querySelector(".title");
 
     // Đăng ký sự kiện scroll
     window.addEventListener("scroll", function() {
         var currentScrollPosition = window.scrollY;
 
         if (currentScrollPosition < previousScrollPosition) {
             if(Title.style.top != "0px") {
                 // Scroll lên (scroll up)
                 Title.classList.add("scroll_up");
                 Title.style.top = "0px";
                 Title.addEventListener("animationend", function() {
                     Title.classList.remove("scroll_up");
             });
             }
         } else if (currentScrollPosition >= previousScrollPosition) {
             // Scroll xuống (scroll down)
             if(Title.style.top != "-120px") {
                 Title.classList.add("scroll_down");
                 Title.style.top= "-120px"; // Ẩn thanh tiêu đề bằng cách đặt top âm
                 Title.addEventListener("animationend", function() {
                     Title.classList.remove("scroll_down");
             });
             }
         }
         previousScrollPosition = currentScrollPosition;
     });
 }
 // tạo hiệu ứng cho button

function button_animation() {
    let a = document.querySelector("._main_button");
    a.addEventListener("mouseover", function() {
        a.classList.add("button_animation");
        a.style.top = "0px";
        a.style.left = "0px";
    });
    a.addEventListener("mouseout", function() {
        a.style.top = "-2px";
        a.style.left = "-2px";
        a.classList.remove("button_animation");

    });
}
