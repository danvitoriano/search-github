const Globals = {
  api: {
    env: process.env.NODE_ENV, // env (CHANGE HERE FOR TESTS)
    // env: "production", // env (CHANGE HERE FOR TESTS)
    apiGithubUser: "https://api.github.com/users/", // github API
    apiMockUser: "http://localhost:5000/users/" // github mocked API
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
  }
};

export default Globals;
