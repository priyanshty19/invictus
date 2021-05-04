import React from 'react'
import classNames from 'classnames';
import { Grid, Box } from '@material-ui/core';
import { useStyles } from './FooterStyles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

const Footer = () => {
  const classes = useStyles();

    return (
        <footer> 
        <Grid container className={classes.root}>
        <Grid item xs={4} className={classes.findus}>
          <Box className={classes.header}>FOLLOW US</Box>
          <Box className={classes.socialLinksContainer}>
            <Box className={classes.section}>
              <a className={classes.findusLink} href="https://www.facebook.com/InvictusDtu/" target="_blank">
              <FacebookIcon fontSize="large" />
              </a>
            </Box>
            <Box className={classes.section}>
            <a className={classes.findusLink} href="https://www.instagram.com/invictusdtu/" target="_blank">
             <InstagramIcon fontSize="large"/>
            </a>
            </Box>
            <Box className={classes.section}>
            <a className={classes.findusLink} href="https://www.linkedin.com/company/invictus-dtu/" target="_blank">
             <LinkedInIcon fontSize="large"/>
            </a>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={4} className={classes.sitemap}>
          <Box className={classes.header}>SITEMAP</Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/">
              About
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/events">
              Events
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/team">
              Team
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/sponsors">
              Sponsors
            </Link>
          </Box>
          <Box className={classNames(classes.subtext, classes.section)}>
            <Link className={classes.sitemapLink} to="/faq">
              FAQ
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.helpCenterContainer}
        >
        <Box className={classes.header}>CONTACTS</Box>
        <Box className={classNames(classes.subtext, classes.help)}>
          +91-9891416666
        </Box>
        <Box className={classNames(classes.subtext, classes.help)}>
        New Delhi
        </Box>    
        </Grid>
      </Grid>
        </footer>
    )
}

export default Footer