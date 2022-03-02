class Nav {
  constructor() {
  }

  async render() {
    let content = document.getElementById("nav")
    content.innerHTML = await haptic.fetchHtml("/haptic/nav/nav.html")

    let discordBotButton = document.getElementById("discordBotButton")
    discordBotButton.onclick = () => {
      haptic.render("DiscordBotView")
    }
    
    let dashboardButton = document.getElementById("dashboardButton")
    dashboardButton.onclick = () => {
      haptic.render("DashboardView")
    }
  }
}