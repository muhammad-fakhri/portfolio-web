import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';
import React, { useContext } from 'react';
import data from '../data.json';
import About from '../src/About';
import Experience from '../src/Experience';
import Landing from '../src/Landing';
import Projects from '../src/Projects';
import Skills from '../src/Skills';
import { ThemeContext } from '../src/theme';

const name = data.name;
const projects = data.projects;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
  },
}));

export async function getStaticProps() {
  const baseURI = projects.baseURI;
  const repos = projects.repositories;
  const reqInit = {
    headers: {
      Authorization: `token ${process.env.PAT}`,
    },
  };
  const fullRepoData = await Promise.allSettled(
    repos.map(async (name) => {
      const repo = await fetch(baseURI + name, reqInit).then((res) =>
        res.json()
      );
      const langs = await fetch(baseURI + name + '/languages', reqInit).then(
        (res) => res.json()
      );
      return {
        ...repo,
        languages: Object.getOwnPropertyNames(langs),
      };
    })
  );

  return {
    props: {
      projects: fullRepoData,
    },
    revalidate: 60,
  };
}

export default function Index({ projects }) {
  const classes = useStyles();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <div className={classes.root}>
      <AppBar
        color={!trigger ? 'transparent' : 'inherit'}
        className={classes.appBar}
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            {name}
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.type === 'dark' ? '☀️' : '🌑'}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Landing />
        <Skills />
        <Projects data={projects} />
        <Experience />
        <About />
      </Container>
    </div>
  );
}
