import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(56, 120, 78)"
    },
    secondary: {
      main: "rgb(175, 255, 102)"
    },
    error: {
      main: "rgb(217, 134, 15)"
    }
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "20px 40px",
        fontWeight: 700,
        borderRadius: 3
      },
      contained: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        "&:hover": {
          boxShadow: "0 6px 5px 2px rgba(255, 105, 135, .35)"
        }
      },
      outlined: {
        border: "solid 2px #FE6B8B",
        borderRadius: "50px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "#FE6B8B",
        "&:hover": {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: "white"
        }
      },
      text: {
        color: "#FE6B8B"
      }
    }
  }
});

export default theme;
