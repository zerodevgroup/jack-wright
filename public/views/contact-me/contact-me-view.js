class ContactMeView {
  constructor() {
  }
 
 async render() {
    let content = document.getElementById("content")
    content.innerHTML = await haptic.fetchHtml("/views/contact-me/contact-me-view.html")
  }

  async animate() {
    let view = document.getElementById("contactMeView")

    let opacity = 0
    let interval = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(interval);
      }
      else {
        opacity += .05
        view.style.opacity = opacity
      }
    }, 20)
  }
}