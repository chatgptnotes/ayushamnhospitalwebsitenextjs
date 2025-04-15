module.exports = {
  apps: [
    {
      name: "ayushman-hospital",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      instances: "max",
      exec_mode: "cluster"
    }
  ]
}; 