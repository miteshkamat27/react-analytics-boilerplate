import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <p className={classes.root}>&copy; {new Date().getFullYear()} Copyright</p>
  );
}