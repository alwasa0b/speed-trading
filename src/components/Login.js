import React from "react";
import TextField from "material-ui/TextField";
import { FormControl, FormHelperText } from "material-ui/Form";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";

const styles = theme => ({
  root: {
    display: "grid",
    "grid-template-columns": "repeat(3, 1fr)",
    "grid-gap": "10px",
    "grid-auto-rows": "100px",
    "grid-template-areas": `"a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d"`,
  },
  form: {
    "grid-area": "c",
    "justify-self": "center"

  },
  textField: {
    margin: theme.spacing.unit,
    width: 300
  },
  button: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(
  ({
    username,
    password,
    update_username,
    update_password,
    login,
    classes
  }) => (
    <div className={classes.root}>
      <FormControl onSubmit={e => e.preventDefault()} className={classes.form}>
        <TextField
          label="Username"
          type={"text"}
          onChange={({ target }) => update_username({ username: target.value })}
        />
        <TextField
          label="Password"
          type={"password"}
          onChange={({ target }) => update_password({ password: target.value })}
        />
        <Button variant="raised" color="primary" className={classes.button} onClick={login}>
          LOG IN
        </Button>
      </FormControl>
    </div>
  )
);
