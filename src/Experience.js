import { Avatar, Card, CardActionArea, CardHeader, Fade, Grid, Hidden, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from 'next/image'
import { DateRange, LocationCity } from '@mui/icons-material';
import { experience } from '../data.json'
import { useEffect, useRef, useState } from "react";

const getHumanDiff = (startDate, endDate) => {
    let str = ""
    const start = new Date(startDate)
    const end = !!endDate ? new Date(endDate) : new Date()
    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if (years > 0) {
        str += years + " year"
        if (years > 1)
            str += "s"
    }

    if (str.length > 0)
        str += ", "

    if (months > 0) {
        str += months + " month"
        if (months > 1)
            str += "s"
    }

    return str;
}

export default function Experience() {
    const theme = useTheme()
    const mdDown = useMediaQuery(theme.breakpoints.down('md'))
    const align = mdDown ? "center" : "flex-end"
    const textAlign = mdDown ? "center" : "right"

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
            direction="row" 
            container 
            justifyContent="center" 
            alignItems="center" 
            spacing={10} 
            sx={{ minHeight: 'calc(100vh - 32px)' }}
        >
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom align="center">
                    Experience
                </Typography>
                <Hidden mdDown>
                    <Fade in={animate} style={{ transitionDelay: '250ms' }}>
                        <div>
                            <Image
                                alt="Experience"
                                src="/experience.svg"
                                width={996}
                                height={828}
                            />
                        </div>
                    </Fade>
                </Hidden>
            </Grid>
            <Grid container item xs={12} lg={6} direction="column" spacing={1} alignItems={align}>
                {
                    Object.getOwnPropertyNames(experience).map((title, id) =>
                        <Grid item key={id} sx={{ marginBottom: 4 }}>
                            <Typography variant="h4" align={textAlign} gutterBottom component="p">
                                {title}
                            </Typography>
                            <Grid container item direction="row" spacing={1} justifyContent="center">
                                {
                                    experience[title].map(({
                                        organization,
                                        role,
                                        type,
                                        startDate,
                                        endDate,
                                        city,
                                        state,
                                        country,
                                        url,
                                        thumbnail
                                    }, i) =>
                                        <Grid item xs={12} sm key={i}>
                                            <Fade in={animate} style={{ transitionDelay: `${200 * i}ms` }}>
                                                <Card sx={{ height: '100%' }}>
                                                    <CardActionArea
                                                        sx={{ height: '100%' }}
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <CardHeader
                                                            avatar={
                                                                <Avatar variant="rounded">
                                                                    <Image
                                                                        alt={`${organization} logo`}
                                                                        src={thumbnail}
                                                                        layout="fill"
                                                                    />
                                                                </Avatar>
                                                            }
                                                            title={organization}
                                                            subheader={role + " - " + type}
                                                        />
                                                        <CardHeader
                                                            avatar={<DateRange />}
                                                            title={getHumanDiff(startDate, endDate)}
                                                            subheader={`${startDate} - ${endDate}`}
                                                            sx={{ paddingTop: 0 }}
                                                        />
                                                        <CardHeader
                                                            avatar={<LocationCity />}
                                                            subheader={`${city}, ${state}, ${country}`}
                                                            sx={{ paddingTop: 0 }}
                                                        />
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
            </Grid>
            <div ref={animRef}></div>
        </Grid>
    )
}