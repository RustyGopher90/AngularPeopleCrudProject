const PROXY_CONFIG = [
  {
    context: [
      "/api/people"
      
    ],
    target: "https://localhost:7220",
    secure: false,
  }
]

module.exports = PROXY_CONFIG;
