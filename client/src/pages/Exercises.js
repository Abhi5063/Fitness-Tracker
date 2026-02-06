import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Exercises() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    axios
      .get("https://fitness-tracker-backend-vizz.onrender.com/users")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post(
        "https://fitness-tracker-backend-vizz.onrender.com/exercises/add/",
        exercise
      )
      .then((res) => {
        console.log(res.data);
        alert("Activity recorded successfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Error recording activity");
      });

    setDescription("");
    setDuration(0);
    setDate(new Date().toISOString().split('T')[0]);
  };

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
    formControl: {
      "& .MuiOutlinedInput-root": {
        color: "#f1f5f9",
        "& fieldset": {
          borderColor: "rgba(148, 163, 184, 0.3)",
        },
        "&:hover fieldset": {
          borderColor: "rgba(99, 102, 241, 0.5)",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#6366f1",
        },
      },
      "& .MuiInputLabel-root": {
        color: "#cbd5e1",
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
            Record Fitness Activity
          </Typography>
          <form onSubmit={onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="user-select-label">Select User</InputLabel>
                  <Select
                    labelId="user-select-label"
                    required
                    value={username}
                    onChange={onChangeUsername}
                    label="Select User"
                    MenuProps={{
                      PaperProps: {
                        style: {
                          backgroundColor: '#1e293b',
                          color: '#f1f5f9',
                        },
                      },
                    }}
                  >
                    {users.map((user) => (
                      <MenuItem
                        key={user}
                        value={user}
                        style={{
                          color: '#f1f5f9',
                          '&:hover': {
                            backgroundColor: 'rgba(99, 102, 241, 0.2)',
                          },
                        }}
                      >
                        {user}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="activity"
                  name="activity"
                  label="Activity Name"
                  fullWidth
                  variant="outlined"
                  value={description}
                  onChange={onChangeDescription}
                  className={classes.textField}
                  placeholder="e.g., Running, Yoga, Weightlifting"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="duration"
                  name="duration"
                  label="Duration (minutes)"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={duration}
                  onChange={onChangeDuration}
                  className={classes.textField}
                  inputProps={{ min: 1 }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={date}
                  onChange={onChangeDate}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={classes.button}
                >
                  Add Activity Record
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
