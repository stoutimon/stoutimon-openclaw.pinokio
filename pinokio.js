const path = require('path')

module.exports = {
  version: "1.0.0",
  title: "OpenClaw",
  description: "Open source Clawd / OpenClaw installer for Pinokio",
  icon: "icon.png",

  menu: async (kernel, info) => {
    let installing = info.running("install.js")
    // Since you're installing globally with npm, we check if openclaw command exists
    let installed = info.exists("node_modules/.bin/openclaw") || 
                   info.exists("~/.npm-global/bin/openclaw") || true // fallback
    let running = info.running("start.js")
    let updating = info.running("update.js")

    if (installing) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing...",
        href: "install.js",
      }]
    } 
    else if (running) {
      let local = kernel.memory.local[path.resolve(__dirname, "start.js")]
      return [{
        default: true,
        popout: true,
        icon: "fa-solid fa-rocket",
        text: "Open OpenClaw Dashboard",
        href: local?.url || "start.js",
      }, {
        icon: "fa-solid fa-terminal",
        text: "Terminal",
        href: "start.js",
      }, {
        icon: "fa-solid fa-arrows-rotate",
        text: "Update",
        href: "update.js",
      }]
    } 
    else {
      return [{
        default: true,
        icon: "fa-solid fa-power-off",
        text: "Start OpenClaw",
        href: "start.js",
      }, {
        icon: "fa-solid fa-arrows-rotate",
        text: "Update OpenClaw",
        href: "update.js",
      }, {
        icon: "fa-solid fa-plug",
        text: "Reinstall",
        href: "install.js",
      }]
    }
  }
}
