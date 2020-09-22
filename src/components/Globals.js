const Globals = {
  api: {
    env: process.env.NODE_ENV, // env (CHANGE HERE FOR TESTS)
    // env: "production", // env (CHANGE HERE FOR TESTS)
    apiGithubUser: "https://api.github.com/users/", // github API
    apiMockUser: "https://api.github.com/users/", // github API
    localhostClient: "http://localhost:3000" // localhost running
  },
  colors: {
    lighterPurple: "#ac53f2",
    black: "#000000",
    white: "#ffffff",
    brownishGrey: "#5c5c5c"
  },
  fonts: {
    Monaco: "Monaco, Arial, MS Trebuchet, sans-serif",
    Raleway: "Raleway, Arial, MS Trebuchet, sans-serif"
  },
  testUsers: {
    usuario_existente: "danvitoriano",
    outro_usuario_existente1: "matheusml",
    usuario_inexistente: "user not found",
    usuario_inexistente_url: "user%20not%20found",
    usuario_inexistente_url_dupla: "limit%20requests",
    outro_usuario_inexistente: "limit requests",
    outro_usuario_existente2: "sophiebits",
    outro_usuario_existente3: "gaearon"
  }
};

export default Globals;
