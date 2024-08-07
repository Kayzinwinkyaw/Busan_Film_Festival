$(document).ready(function () {
  AOS.init();
  $(".all_search_input").hide();

  var main_Swiper = new Swiper(".mainSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: "#slider-next5",
      prevEl: "#slider-prev5",
    },
  });

  $(".btn_menu").click(function () {
    $(this).toggleClass("active");

    if ($(window).width() < 1260) {
      $(".menu_wrap").toggleClass("active");
      console.log("toggle active");
    } 
  });
  $(".mo_list.depth3").click(function () {
    var $siblings = $(this).siblings();
    $siblings.removeClass("open").find(".depth5").hide();
    // 클릭한 depth1 요소의 하위 요소인 mo_snb를 토글합니다.
    $(this).toggleClass("open").find(".depth5").toggle();
  });
  
  const menuItems = document.querySelectorAll("#gnbmenuids > li");
  const currentUrl = window.location.pathname;

  console.log("Current URL:", currentUrl); // Debug log

  menuItems.forEach((item) => {
    const anchor = item.querySelector("a");
    console.log(
      "Checking:",
      anchor ? anchor.getAttribute("href") : "no anchor"
    ); // Debug log
    if (anchor && anchor.getAttribute("href") === currentUrl) {
      console.log("Match found:", anchor.getAttribute("href")); // Debug log
      item.classList.add("active2");
    } else {
      item.classList.remove("active2");
    }

    item.addEventListener("click", function (event) {
      // Remove the 'active2' class from all items
      menuItems.forEach((el) => el.classList.remove("active2"));

      // Add the 'active2' class to the clicked item
      this.classList.add("active2");

      // Allow the link to work by navigating to the href of the clicked item
      const targetUrl = this.querySelector("a").getAttribute("href");
      window.location.href = targetUrl;
    });
  });

  const spotlight_swiper = new Swiper(".spotlight-swiper", {
    slidesPerView: 4,
    initialSlide: 0,
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    navigation: {
      nextEl: "#slider-next4",
      prevEl: "#slider-prev4",
    },
    breakpoints: {
      300:{
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 50,
      }
    },
  });

  const mmedia_swiper = new Swiper(".mmedia-swiper", {
    slidesPerView: 4,
    initialSlide: 0,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: "#slider-next3",
      prevEl: "#slider-prev3",
    },
    breakpoints: {
      300:{
        slidesPerView: 1,
        spaceBetween: 20,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  const poster_swiper = new Swiper(".poster-swiper", {
    slidesPerView: 7,
    initialSlide: 0,
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    navigation: {
      nextEl: "#slider-next2",
      prevEl: "#slider-prev2",
    },
    breakpoints: {
      300:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1800: {
        slidesPerView: 7,
        spaceBetween: 30,
      }
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

gsap.defaults({ overwrite: "auto" });

gsap.set(".left-content > *", { xPercent: -50, yPercent: -50 });

// Set up our scroll trigger
const ST = ScrollTrigger.create({
  trigger: ".content-container",
  start: "top top",
  end: "bottom bottom",
  onUpdate: getCurrentSection,
  pin: ".left-content",
});

const contentMarkers = gsap.utils.toArray(".contentMarker");

// Set up our content behaviors
contentMarkers.forEach((marker) => {
  marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

  if (marker.content.tagName === "IMG") {
    gsap.set(marker.content, { transformOrigin: "center" });

    marker.content.enter = function () {
      gsap.fromTo(
        marker.content,
        { autoAlpha: 0, rotateY: -30 },
        { duration: 0.3, autoAlpha: 1, rotateY: 0 }
      );
    };
  } else if (marker.content.tagName === "BLOCKQUOTE") {
    gsap.set(marker.content, { transformOrigin: "left center" });

    marker.content.enter = function () {
      gsap.fromTo(
        marker.content,
        { autoAlpha: 0, rotateY: 50 },
        { duration: 0.3, autoAlpha: 1, rotateY: 0 }
      );
    };
  }

  marker.content.leave = function () {
    gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
  };
});

// Handle the updated position
let lastContent;
function getCurrentSection() {
  let newContent;
  const currScroll = scrollY;

  // Find the current section
  contentMarkers.forEach((marker) => {
    if (currScroll > marker.offsetTop) {
      newContent = marker.content;
    }
  });

  // If the current section is different than that last, animate in
  if (
    newContent &&
    (lastContent == null || !newContent.isSameNode(lastContent))
  ) {
    // Fade out last section
    if (lastContent) {
      lastContent.leave();
    }

    // Animate in new section
    newContent.enter();

    lastContent = newContent;
  }
}

const media = window.matchMedia("screen and (max-width: 600px)");
ScrollTrigger.addEventListener("refreshInit", checkSTState);
checkSTState();

function checkSTState() {
  if (media.matches) {
    ST.disable();
  } else {
    ST.enable();
  }
}
