$(document).ready(function () {
  AOS.init();
  $(".all_search_input").hide();

  const navLinks = document.querySelectorAll('.nav_link');
  const subNavLinks = document.querySelectorAll('.sub_navLinks a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      navLinks.forEach(nav => nav.classList.remove('active'));
      document.querySelectorAll('.sub_navLinks').forEach(subNav => subNav.classList.remove('active'));

      this.classList.add('active');

      const subNav = this.nextElementSibling;
      if (subNav && subNav.classList.contains('sub_navLinks')) {
        subNav.classList.add('active');
      }
    });
  });

  subNavLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove the 'active' class from all sub-nav links
      subNavLinks.forEach(subLink => subLink.classList.remove('active'));

      // Add the 'active' class to the clicked sub-nav link
      this.classList.add('active');

    });
  });

  const spotlight_swiper = new Swiper(".spotlight-swiper", {
    slidesPerView: 4,
    initialSlide: 0,
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: "#slider-next4",
      prevEl: "#slider-prev4",
    },
  });

  const mmedia_swiper = new Swiper(".mmedia-swiper", {
    slidesPerView: 4,
    initialSlide: 0,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: "#slider-next3",
      prevEl: "#slider-prev3",
    },
  });

  const poster_swiper = new Swiper(".poster-swiper", {
    slidesPerView: 7,
    initialSlide: 0,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: "#slider-next2",
      prevEl: "#slider-prev2",
    },
  });
  $(".qna ul li").click(function () {
    $(this).toggleClass("on");
    $(this).find(".answer").slideToggle();
  });
  var commonCates = document.querySelectorAll(".common_cate");
  var lastOpenedMenu = null;
  var lastActiveCate = null;
  commonCates.forEach(function (cate) {
    cate.addEventListener("click", function () {
      var cate1Gp = cate.nextElementSibling;

      if (lastOpenedMenu && lastOpenedMenu !== cate1Gp) {
        lastOpenedMenu.classList.add("hidden");
      }

      if (cate1Gp && cate1Gp.classList.contains("common_cate1_gp")) {
        cate1Gp.classList.toggle("hidden");

        if (!cate1Gp.classList.contains("hidden")) {
          lastOpenedMenu = cate1Gp;
        } else {
          lastOpenedMenu = null;
        }
      }

      var subCategories = cate1Gp.querySelectorAll(".common_cate1");
      subCategories.forEach(function (subCate) {
        subCate.addEventListener("click", function (e) {
          e.stopPropagation();

          var id =
            subCate.getAttribute("data_id") || subCate.getAttribute("data-id");
          var parentCate = document.querySelector(`#blah${id}`);

          if (parentCate) {
            parentCate.textContent = subCate.textContent;
          }

          // Close the subcategory menu
          cate1Gp.classList.add("hidden");
          lastOpenedMenu = null;

          if (lastActiveCate) {
            lastActiveCate.classList.remove("has-active");
          }
          cate.classList.add("has-active");
          lastActiveCate = cate;
        });
      });
    });
  });
});
