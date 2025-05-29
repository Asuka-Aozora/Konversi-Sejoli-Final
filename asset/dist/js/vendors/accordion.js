(() => {
  // node_modules/@left4code/tw-starter/dist/js/accordion.js
  (function() {
    "use strict";
    $("body").on("click", "[data-tw-toggle='collapse']", function() {
      toggle(this);
    });
    function toggle(el, event = "toggle") {
      $(el).closest(".accordion").find("[data-tw-toggle='collapse']").each(function() {
        if (!$(this).hasClass("collapsed") && this !== el && (event == "toggle" || event == "hide")) {
          const event2 = new Event("hide.tw.accordion");
          $(this).closest(".accordion-header")[0].dispatchEvent(event2);
        }
        if ($(this).hasClass("collapsed") && this === el && (event == "toggle" || event == "show")) {
          const event2 = new Event("show.tw.accordion");
          $(this).closest(".accordion-header")[0].dispatchEvent(event2);
        }
      });
      const collapsed = $(el).hasClass("collapsed");
      $(el).closest(".accordion").find(".accordion-collapse").slideUp(300, (el2) => {
        $(el2).removeClass("show");
        $(el2).closest(".accordion-item").find("[data-tw-toggle='collapse']").addClass("collapsed").attr("aria-expanded", false);
      });
      setTimeout(() => {
        const accordionCollapse = $(el).closest(".accordion-item").find(".accordion-collapse");
        const hide = () => {
          $(accordionCollapse).removeClass("show");
          $(el).addClass("collapsed").attr("aria-expanded", false);
          $(el).closest(".accordion-item").find(".accordion-collapse").slideUp();
        };
        const show = () => {
          $(accordionCollapse).addClass("show");
          $(el).removeClass("collapsed").attr("aria-expanded", true);
          $(el).closest(".accordion-item").find(".accordion-collapse").slideDown();
        };
        if (event === "toggle") {
          !collapsed ? hide() : show();
        } else if (event === "show") {
          show();
        } else {
          hide();
        }
      }, 300);
    }
    function createInstance(el) {
      return {
        show() {
          toggle(el, "show");
        },
        hide() {
          toggle(el, "hide");
        },
        toggle() {
          toggle(el);
        }
      };
    }
    (function init() {
      $("[data-tw-toggle='collapse']").each(function() {
        $(this).closest(".accordion-header")[0]["__accordion"] = createInstance(this);
      });
      if (window.tailwind === void 0)
        window.tailwind = {};
      window.tailwind.Accordion = {
        getInstance(el) {
          return el.__accordion;
        },
        getOrCreateInstance(el) {
          return el.__accordion === void 0 ? createInstance(el) : el.__accordion;
        }
      };
    })();
  })();
})();
