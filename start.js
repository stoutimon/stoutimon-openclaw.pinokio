module.exports = async (kernel) => {
  return {
    "daemon": true,
    "run": [{
      "method": "shell.run",
      "params": {
        "path": ".",
        "message": "openclaw start",
        "on": [
          { "event": "/Gateway running|server started/i", "done": true }
        ]
      }
    }, {
      "method": "local.set",
      "params": {
        "url": "http://127.0.0.1:3000"   // Change if OpenClaw uses a different default port
      }
    }]
  }
}
