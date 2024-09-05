class Content {
    constructor(type, title, text, breaking = false) {
      this.title = breaking && type === "breaking" ? "BREAKING: " + title : title;
      this.text = type === "ad" ? text.toUpperCase() : text;
      this.text = type === "vacancy" ? text + " - apply now!" : this.text;
    }
  
    displayContent() {
      console.log(`Title: ${this.title}`);
      console.log(`Text: ${this.text}`);
    }
  }
  
  // Utilisation pour différents types de contenu
  let article1 = new Content("breaking", "Ceci est le premier article", "Ceci est le texte du premier article", true);
  let article2 = new Content("breaking", "Ceci est le second article", "Ceci est le texte du second article");
  let ad1 = new Content("ad", "Ceci est une pub", "Ceci est le texte de la pub");
  let vacancy1 = new Content("vacancy", "Ceci est le titre du poste vacant", "Ceci est le texte du poste vacant");
  
  // Affichage
  article1.displayContent();
  article2.displayContent();
  ad1.displayContent();
  vacancy1.displayContent();