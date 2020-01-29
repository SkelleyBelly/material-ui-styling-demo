import TextField from "@material-ui/core/TextField";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
});

export default props => {
  const classes = useStyles();
  return (
    <TextField
      classes={classes}
      label="CSS validation style"
      required
      variant="outlined"
      defaultValue="Success"
      id="validation-outlined-input"
      {...props}
    />
  );
};
