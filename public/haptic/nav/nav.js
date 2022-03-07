class Nav {
  constructor() {
  }

  async render() {
    let content = document.getElementById("nav")
    content.innerHTML = await haptic.fetchHtml("/haptic/nav/nav.html")

    let projectsButton = document.getElementById("projectsButton")
    projectsButton.onclick = () => {
      haptic.render("ProjectsView")
    }
    
    let dashboardButton = document.getElementById("dashboardButton")
    dashboardButton.onclick = () => {
      haptic.render("DashboardView")
    }
    
     let contactMeButton = document.getElementById("contactMeButton")
     contactMeButton.onclick = () => {
      haptic.render("ContactMeView")
    }
  }
}