import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

export default function User() {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: 40, opacity: 0.7 }}>
        {"Copyright © "}
        <Link color="inherit" href="/">
          Fitkit
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
    };
    console.log(user);
    axios
      .post("https://fitness-tracker-mern.herokuapp.com/users/add/", user)
      .then((res) => {
        console.log(res.data);
        alert("User created successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Error creating user");
      });

    setUsername("");
  };

  const useStyles = makeStyles((theme) => ({
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
        width: 700,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(4),
      background: "rgba(30, 41, 59, 0.7)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(148, 163, 184, 0.1)",
      boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      borderRadius: "16px",
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(5),
      },
    },
    title: {
      marginBottom: theme.spacing(4),
      fontWeight: 700,
      background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    textField: {
      "& .MuiOutlinedInput-root": {
        color: "#f1f5f9",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "& fieldset": {
          borderColor: "rgba(148, 163, 184, 0.3)",
        },
        "&:hover fieldset": {
          borderColor: "rgba(99, 102, 241, 0.5)",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#6366f1",
          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
        },
      },
      "& .MuiInputLabel-root": {
        color: "#cbd5e1",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#818cf8",
      },
    },
    button: {
      marginTop: theme.spacing(4),
      padding: "12px 40px",
      fontSize: "16px",
      fontWeight: 600,
      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      color: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)",
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(99, 102, 241, 0.6)",
      },
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            Create User
          </Typography>
          <form onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="username"
                  name="username"
                  label="Username"
                  fullWidth
                  variant="outlined"
                  value={username}
                  onChange={handleChange}
                  className={classes.textField}
                  placeholder="Enter a unique username"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  className={classes.button}
                >
                  Create User
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
      <Copyright />
    </React.Fragment>
  );
}
