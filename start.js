module.exports = async (kernel) => {
  return {
    "daemon": true,
    "run": [{
      "method": "shell.run",
      "params": {
        "path": ".",
        "message": "openclaw gateway start",
        "on": [
          { "event": "/Gateway online|gateway started|online|listening/i", "done": true }
        ]
      }
    }, {
      "method": "local.set",
      "params": {
        "url": "http://127.0.0.1:18789"
      }
    }]
  }
}
