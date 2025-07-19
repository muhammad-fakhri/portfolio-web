import React, { useContext } from 'react';
import { AppBar, Container, IconButton, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { ThemeContext } from '../src/theme';
import Landing from '../src/Landing';
import Skills from '../src/Skills';
import Projects from '../src/Projects';
import Experience from '../src/Experience';
import About from '../src/About';
import { name, projects } from '../data.json';

export async function getStaticProps() {
  const baseURI = projects.baseURI
  const repos = projects.repositories
  const reqInit = {
    headers: { 
      'Authorization': `token ${process.env.PAT}`
    }
  }
  const fullRepoData = await Promise.allSettled(
    repos.map(
      async name => {
        const repo = await fetch(baseURI + name, reqInit).then(res => res.json());
        const langs = await fetch(baseURI + name + "/languages", reqInit).then(res => res.json())
        return {
          ...repo,
          languages: Object.getOwnPropertyNames(langs)
        };
      }
    )
  );

  return {
    props: {
      projects: fullRepoData
    },
    revalidate: 60
  }
}

export default function Index({ projects }) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const trigger = useScrollTrigger({ disableHysteresis: true })

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar 
        color={!trigger ? "transparent" : "inherit"} 
        sx={{ boxShadow: "none" }} 
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            { name }
          </Typography>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme.palette.mode === "dark" ? "☀️" : "🌑"}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Landing />
        <Skills />
        <Projects data={projects}/>
        <Experience/>
        <About/>
      </Container>
    </div>
  );
}
