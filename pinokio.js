const path = require('path')

module.exports = {
  version: "1.0.1",
  title: "OpenClaw",
  description: "OpenClaw (formerly ClawdBot) - Personal AI Assistant",
  icon: "icon.png",

  menu: async (kernel, info) => {
    let installing = info.running("install.js")
    let running = info.running("start.js")
    let updating = info.running("update.js")

    // Better detection for globally installed npm package
    let installed = false
    try {
      installed = await kernel.shell.run({
        message: "openclaw --version",
        silent: true
      }).then(() => true).catch(() => false)
    } catch (e) {}

    if (installing) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing OpenClaw...",
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
        href: local?.url || "#",
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
    else if (installed) {
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
    else {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Install OpenClaw",
        href: "install.js",
      }]
    }
  }
}
