import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
        width: 100,
        height: 50,
        padding: 0,
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(50px)',
            color: theme.palette.common.white,
            '& + $track': {
                background: 'linear-gradient(37deg, rgb(32, 218, 233),rgb(40, 21, 236))',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 50,
        height: 50,
    },
    track: {
        borderRadius: 100 / 2,
        background: 'linear-gradient(37deg, rgb(32, 218, 233),rgb(0, 0, 0))',
        opacity: 1,
        transition: theme.transitions.create(['background']),
    },
    checked: {},
    focusVisible: {},
}))


export default (props) => {
    const classes = useStyles();
    return (
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={classes}
          {...props}
        />
      );}