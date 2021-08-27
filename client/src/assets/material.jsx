// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

export const cardFoodCSS = makeStyles((theme) => ({
    root: {
        width: '40vw',
        height: '50vh',
        borderRadius: 40,
        backgroundColor: "#1d7dc2",
        boxShadow: '0px 2px 8px #333432',
    },
    media: {
        height: '30vh',
    },
    button: {
        color: '#f8f7ff',
    },
    link: {
        textDecoration: 'none',
    },
    text: {
        color: '#f8f7ff',
    }
}));

export const commentCardCSS = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        color: '#f8f7ff',
        width: 50,
        height: 20,
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
}));

export const navHamburgerCSS = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        margin: '2px',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    link: {
        color: '#1d7dc2',
        textDecoration: 'none',
    },
    linkBar: {
        color: '#f8f7ff',
        marginRight: 20,
    }
}));



// ICONHOME
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import SvgIcon from '@material-ui/core/SvgIcon';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > svg': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

// export default function SvgIconsColor() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <HomeIcon />
//       <HomeIcon color="primary" />
//       <HomeIcon color="secondary" />
//       <HomeIcon color="action" />
//       <HomeIcon color="disabled" />
//       <HomeIcon style={{ color: green[500] }} />
//     </div>
//   );
// }

// Iconmenu
// import MenuIcon from '@material-ui/icons/Menu';

// iconminimize
// import MinimizeIcon from '@material-ui/icons/Minimize';

// iconsort
// import SortIcon from '@material-ui/icons/Sort';

// icongithub
// import GitHubIcon from '@material-ui/icons/GitHub';

// iconlinkedin
// import LinkedInIcon from '@material-ui/icons/LinkedIn';