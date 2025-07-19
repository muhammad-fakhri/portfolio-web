import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, Fade, Grid, Hidden, Typography } from "@mui/material";
import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";

export default function Projects({ data }) {
    const [animate, setAnimate] = useState(false)
    const animRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting))
                setAnimate(true)
        })
        observer.observe(animRef.current)
        return () => observer.unobserve(animRef.current)
    }, [])

    return (
        <Grid 
            direction="row-reverse" 
            container 
            justifyContent="center" 
            alignItems="center" 
            spacing={10} 
            sx={{ minHeight: 'calc(100vh - 32px)' }}
        >
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom align="center" ref={animRef}>
                    Projects
                </Typography>
                <Hidden mdDown>
                    <Fade in={animate} style={{ transitionDelay: '250ms' }}>
                        <div>
                            <Image
                                alt="Projects"
                                src="/projects.svg"
                                width={1144}
                                height={617}
                            />
                        </div>
                    </Fade>
                </Hidden>
            </Grid>
            <Grid container item xs={12} lg={6} direction="row" spacing={1}>
                {
                    !!data && data.map((v, i) =>
                        <Grid item sm={6} xs={12} key={i}>
                            <Fade in={animate} style={{ transitionDelay: `${200 * i}ms` }}>
                                <Card sx={{ height: '100%' }}>
                                    <CardActionArea
                                        sx={{ height: '100%' }}
                                        href={v.value.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardHeader
                                            title={<><RepoIcon verticalAlign='middle' /> {v.value.name}</>}
                                            subheader={
                                                <>
                                                    {
                                                        !!v.value.stargazers_count &&
                                                        <>
                                                            <StarIcon verticalAlign='middle' />
                                                            {v.value.stargazers_count}
                                                        </>
                                                    }
                                                    {
                                                        !!v.value.forks &&
                                                        <>
                                                            <RepoForkedIcon verticalAlign='middle' />
                                                            {v.value.forks}
                                                        </>
                                                    }
                                                </>
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {v.value.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="row" spacing={1}>
                                                {
                                                    !!v.value.languages &&
                                                    v.value.languages.map((lang, i) =>
                                                        <Grid item key={i}>
                                                            <Chip
                                                                key={i}
                                                                label={lang}
                                                                size="small"
                                                            />
                                                        </Grid>
                                                    )
                                                }
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}