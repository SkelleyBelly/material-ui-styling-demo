import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      padding: "20px 40px",
      fontWeight: 700,
      borderRadius: 3,
    },
    contained: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      '&:hover': {
          boxShadow: "0 6px 5px 2px rgba(255, 105, 135, .35)"
      }
    },
    outlined: {
      border: 'solid 2px #FE6B8B',
      borderRadius: '50px',
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "#FE6B8B",
      '&:hover': {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          color: 'white'
      }},
      text: {
          color: "#FE6B8B"
    }
  })

export default ({ children, ...props }) => {
  const classes = useStyles(props);

  return (
    <Button classes={classes} {...props}>
      {children}
    </Button>
  );
};


// ========== Simple root styling
// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 40px',
//     },
//   });

// ========== Variant based styling
// const useStyles = makeStyles({
//     root: {
//       padding: "20px 40px",
//       fontWeight: 700,
//       borderRadius: 3,
//     },
//     contained: {
//       background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       color: "white",
//       '&:hover': {
//           boxShadow: "0 6px 5px 2px rgba(255, 105, 135, .35)"
//       }
//     },
//     outlined: {
//       border: 'solid 2px #FE6B8B',
//       borderRadius: '50px',
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       color: "#FE6B8B",
//       '&:hover': {
//           background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//           color: 'white'
//       }},
//       text: {
//           color: "#FE6B8B"
//     }
//   })

// ========== Variant + Prop based styling
// const useStyles = makeStyles({
//     root: {
//       padding: "20px 40px",
//       fontWeight: 700,
//       borderRadius: 3
//     },
//     contained: {
//       background: props =>
//         props.blue
//           ? "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
//           : "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//       boxShadow: props =>
//         props.blue
//           ? "0 3px 5px 2px rgba(100, 105, 255, .3)"
//           : "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       color: "white",
//       "&:hover": {
//         boxShadow: props =>
//         props.blue
//           ? "0 3px 5px 2px rgba(100, 105, 255, .3)"
//           : "0 3px 5px 2px rgba(255, 105, 135, .3)"
//       }
//     },
//     outlined: {
//       border: "solid 2px #FE6B8B",
//       borderRadius: "50px",
//       boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       color: "#FE6B8B",
//       "&:hover": {
//         background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//         color: "white"
//       }
//     },
//     text: {
//       color: "#FE6B8B"
//     }
//   });
