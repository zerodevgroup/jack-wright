class DiscordBotView {
  constructor() {
  }
 
 async render() {
    let content = document.getElementById("content")
    content.innerHTML = await haptic.fetchHtml("/views/discord-bot/discord-bot-view.html")
  }

  async animate() {
    let view = document.getElementById("discordBotView")

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