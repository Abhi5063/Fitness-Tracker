import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "./Button";
import Typography from "./Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const styles = (theme) => ({
  background: {
    background: "linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)",
    backgroundSize: "400% 400%",
    animation: "$gradientShift 15s ease infinite",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.3), transparent 50%)",
      animation: "$pulse 4s ease-in-out infinite",
    },
  },
  "@keyframes gradientShift": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  "@keyframes pulse": {
    "0%, 100%": {
      opacity: 0.5,
    },
    "50%": {
      opacity: 0.8,
    },
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  contentWrapper: {
    animation: "$fadeIn 0.8s ease-out",
    background: "rgba(30, 41, 59, 0.4)",
    backdropFilter: "blur(12px)",
    padding: theme.spacing(6),
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
  },
  button: {
    minWidth: 220,
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: 600,
    background: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(236, 72, 153, 0.4)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 25px rgba(236, 72, 153, 0.6)",
      background: "linear-gradient(135deg, #f472b6 0%, #fb923c 100%)",
    },
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
    },
  },
  more: {
    marginTop: theme.spacing(3),
    opacity: 0.9,
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <div className={classes.contentWrapper}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Stay Fit With Us
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          className={classes.h5}
        >
          Record your fitness activities and stay consistent in your journey.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/exercise"
        >
          Record Activity
        </Button>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Start Your Journey Today
        </Typography>
      </div>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
