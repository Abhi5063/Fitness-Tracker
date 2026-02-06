import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
  head: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 15,
    borderBottom: "none",
  },
  body: {
    fontSize: 14,
    color: theme.palette.text.primary,
    borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(51, 65, 85, 0.3)",
    },
    "&:hover": {
      backgroundColor: "rgba(99, 102, 241, 0.15)",
      transform: "scale(1.01)",
      boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
    },
  },
}))(TableRow);

function Dashboard() {
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
    appBar: {
      position: "relative",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
        width: 900,
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
    tableContainer: {
      background: "rgba(15, 23, 42, 0.5)",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    },
    title: {
      marginBottom: theme.spacing(3),
      fontWeight: 700,
      background: "linear-gradient(135deg, #667eea 0%, #f093fb 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    deleteButton: {
      background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
      color: "white",
      fontWeight: 600,
      padding: "6px 20px",
      borderRadius: "8px",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        background: "linear-gradient(135deg, #f472b6 0%, #fb923c 100%)",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(236, 72, 153, 0.4)",
      },
    },
    loading: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: 200,
    },
    emptyState: {
      textAlign: "center",
      padding: theme.spacing(6),
      color: theme.palette.text.secondary,
    },
  }));

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    axios
      .get("https://fitness-tracker-mern.herokuapp.com/exercises")
      .then((response) => {
        setExercises(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("https://fitness-tracker-mern.herokuapp.com/exercises/" + id)
      .then((response) => {
        console.log(response.data);
      });
    const del = exercises.filter((el) => el._id !== id);
    setExercises(del);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            Fitness Dashboard
          </Typography>
          {loading ? (
            <div className={classes.loading}>
              <CircularProgress style={{ color: "#6366f1" }} />
            </div>
          ) : exercises.length === 0 ? (
            <div className={classes.emptyState}>
              <Typography variant="h6">No activities recorded yet</Typography>
              <Typography variant="body2">Start tracking your fitness journey!</Typography>
            </div>
          ) : (
            <TableContainer component={Paper} className={classes.tableContainer} elevation={0}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>User</StyledTableCell>
                    <StyledTableCell align="right">Activity</StyledTableCell>
                    <StyledTableCell align="right">Duration (min)</StyledTableCell>
                    <StyledTableCell align="right">Date</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exercises.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {row.username}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.description}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.duration}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.date.substring(0, 10)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Button
                          className={classes.deleteButton}
                          onClick={() => deleteExercise(row._id)}
                        >
                          Delete
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </main>
      <Copyright />
    </React.Fragment>
  );
}
export default Dashboard;
