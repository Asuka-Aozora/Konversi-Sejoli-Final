(() => {
  // node_modules/@left4code/tw-starter/dist/js/tab.js
  (function() {
    "use strict";
    $("body").on("click", "[role='tab']", function() {
      show(this);
    });
    function show(el) {
      $(el).closest("[role='tablist']").find("[role='tab']").each(function() {
        if ($(this).hasClass("active") && this !== el) {
          const event = new Event("hide.tw.tab");
          $(this)[0].dispatchEvent(event);
        }
        if (!$(this).hasClass("active") && this === el) {
          const event = new Event("show.tw.tab");
          $(this)[0].dispatchEvent(event);
        }
      });
      $(el).closest("[role='tablist']").find("[role='tab']").removeClass("active").attr("aria-selected", false);
      $(el).addClass("active").attr("aria-selected", true);
      let elementId = $(el).attr("data-tw-target");
      let tabContentWidth = $(elementId).closest(".tab-content").width();
      $(elementId).closest(".tab-content").children(".tab-pane").removeAttr("style").removeClass("active");
      $(elementId).css("width", tabContentWidth + "px").addClass("active");
    }
    (function onResized(el) {
      addEventListener("resize", (event) => {
        $("[role='tabpanel']").each(function() {
          if ($(this).hasClass("active")) {
            let tabContentWidth = $(this).closest(".tab-content").width();
            $(this).css("width", tabContentWidth + "px");
          }
        });
      });
    })();
    function createInstance(el) {
      return {
        show() {
          show(el);
        }
      };
    }
    (function init() {
      $("[role='tab']").each(function() {
        this["__tab"] = createInstance(this);
      });
      if (window.tailwind === void 0)
        window.tailwind = {};
      window.tailwind.Tab = {
        getInstance(el) {
          return el.__tab;
        },
        getOrCreateInstance(el) {
          return el.__tab === void 0 ? createInstance(el) : el.__tab;
        }
      };
    })();
  })();
})();
