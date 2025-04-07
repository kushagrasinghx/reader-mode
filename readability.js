class Readability {
    constructor(doc) {
      this._doc = doc;
    }
  
    parse() {
      const articleNode = this._doc.querySelector("article") || this._doc.body;
      const title = this._doc.title || "Reader Mode";
      const content = articleNode ? articleNode.innerHTML : this._doc.body.innerHTML;
  
      return {
        title,
        content,
        length: content.length,
        excerpt: content.slice(0, 100),
        byline: null
      };
    }
  }
  