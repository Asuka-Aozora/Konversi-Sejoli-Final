(() => {
  // src/js/components/base/balloon-block-editor.js
  (function() {
    "use strict";
    $(".editor").each(function() {
      const el = this;
      BalloonBlockEditor.create(el).catch((error) => {
        console.error(error);
      });
    });
  })();
})();
