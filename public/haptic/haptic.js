class Haptic {
  constructor() {
    console.log("haptic is here...")
  }

  async init(locationName) {
    await haptic.renderNav()
    await haptic.render(locationName)
  }

  async render(viewName) {
    console.log(viewName)

    haptic.currentView = viewName
    
    window.location.hash = `#${viewName}`
    haptic.clearContent()

    haptic.view = eval(`new ${viewName}()`)
    await haptic.view.render()
    if(haptic.view.animate) {
     await haptic.view.animate()
    }
  }

  async renderNav() {
    haptic.nav = new Nav()
    await haptic.nav.render()
  }
  
  clearContent() {
    const content = document.getElementById("content")
    content.innerHTML = ""
  }

  async fetchHtml(url) {
    const response = await fetch(url)
    return await response.text()
  }
}

let haptic = new Haptic()

let locationName = location.hash.replace("#", "")
if(!locationName) {
  locationName = "DashboardView"
}

haptic.init(locationName)

// Detect hash change
window.onhashchange = () => {
  let locationName = location.hash.replace("#", "")
  if(haptic.currentView != locationName) {
    haptic.render(locationName)
  }
}