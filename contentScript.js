(async () => {
    const articleDoc = document.cloneNode(true);
  
    // Remove unwanted navbars, sidebars, menus, footers
    const navSelectors = [
      "nav",
      "footer",
      "#footer",
      ".footer",
      "#sidebar",
      ".sidebar",
      ".navigation",
      ".nav",
      ".menu",
      ".mw-sidebar",
      ".mw-portlet",
      ".portal",
      "#mw-navigation",
      "#siteSub",
      "#p-navigation"
    ];
    navSelectors.forEach(selector => {
      articleDoc.querySelectorAll(selector).forEach(el => el.remove());
    });
  
    // Remove inputs, forms, images, search boxes, etc.
    const noisyElements = ["input", "textarea", "form", "button", "select", "img", "aside"];
    noisyElements.forEach(selector => {
      articleDoc.querySelectorAll(selector).forEach(el => el.remove());
    });
  
    const article = new Readability(articleDoc).parse();
  
    if (!article || !article.content) {
      alert("Could not extract article content.");
      return;
    }
  
    const params = new URLSearchParams();
    params.set("title", article.title);
    params.set("content", article.content);
  
    const readerURL = chrome.runtime.getURL("reader.html") + "?" + params.toString();
    window.open(readerURL, "_blank");
  })();
  