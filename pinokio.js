const path = require('path')

module.exports = {
  version: "1.0.0",
  title: "OpenClaw",
  description: "Open source Clawd / OpenClaw installer for Pinokio",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installing = info.running("install.js")
    let installed = info.exists("app")  // Change this if needed
    let running = info.running("start.js")
    let updating = info.running("update.js")

    if (installing) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing...",
        href: "install.js",
      }]
    } else if (installed) {
      if (running) {
        return [{
          default: true,
          popout: true,
          icon: "fa-solid fa-rocket",
          text: "Open OpenClaw",
          href: "start.js",           // or the actual URL if it opens in browser
        }, {
          icon: "fa-solid fa-terminal",
          text: "Terminal",
          href: "start.js",
        }, {
          icon: "fa-solid fa-arrows-rotate",
          text: "Update",
          href: "update.js",
        }]
      } else {
        return [{
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start OpenClaw",
          href: "start.js",
        }, {
          icon: "fa-solid fa-arrows-rotate",
          text: "Update",
          href: "update.js",
        }, {
          icon: "fa-solid fa-plug",
          text: "Reinstall",
          href: "install.js",
        }]
      }
    } else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install OpenClaw",
        href: "install.js",
      }]
    }
  }
}
