module.exports = {
  "run": [
    {
      "method": "shell.run",
      "params": {
        "message": "npm install -g openclaw@latest"
      }
    },
    {
      "method": "shell.run",
      "params": {
        "input": true,
        "message": "openclaw onboard --skip-ui",
        "on": [
          {
            "event": "/.*onboarding complete.*/i",
            "kill": true
          },
          {
            "event": "/.*onboarded successfully.*/i",
            "kill": true
          }
        ]
      }
    },
    {
      "method": "modal",
      "params": {
        "title": "✅ OpenClaw Onboarding Complete",
        "description": "Installation finished!\n\nClick the **Start** button to launch OpenClaw."
      }
    }
  ]
}
