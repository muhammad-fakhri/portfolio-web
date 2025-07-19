import { Avatar, Fade, Grid, Hidden, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import clsx from "clsx";
import Image from 'next/image'
import * as simpleIcons from 'simple-icons'
import { landing } from '../data.json'
import { iconify } from "./util";
import Cancel from "@mui/icons-material/Cancel";

const professionalDetails = landing.professionalDetails.map(({ alt, icon, link }) => {
    const iconKey = iconify(icon);
    const ic = simpleIcons[iconKey] || {
        hex: '424242',
        component: <Cancel color="white" sx={{ fontSize: 36 }} />
    }
    return {
        alt,
        backgroundColor: '#' + ic.hex,
        icon: ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{icon}</title>
            <path d={ic.path} fill="white" />
        </svg>,
        link
    }
})

function TypedText({ strings, typeSpeed = 40, backSpeed = 50, loop = true }) {
    const el = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        
        const typed = new Typed(el.current, {
            strings,
            typeSpeed,
            backSpeed,
            loop
        });

        return () => {
            typed.destroy();
        };
    }, [strings, typeSpeed, backSpeed, loop, isClient]);

    return <span ref={el}>{!isClient ? strings[0] : ""}</span>;
}

export default function Landing() {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            sx={{
                minHeight: 'calc(100vh - 32px)',
                paddingBottom: 10
            }}
        >
            <Grid item xs={12} lg={6}>
                <Typography variant={mdDown ? "h2" : "h1"}>
                    {landing.title}
                </Typography>
                <Typography 
                    variant={mdDown ? "h5" : "h4"} 
                    component="h2" 
                    sx={{
                        marginTop: 3,
                        marginBottom: 5
                    }}
                >
                    <TypedText
                        strings={landing.subtitles}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </Typography>
                <Grid container direction="row" spacing={2}>
                    {
                        professionalDetails.map(({ alt, icon, link, backgroundColor }, i) =>
                            <Grid item key={i}>
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                    <Zoom in={true} style={{ transitionDelay: `${100 * i}ms` }}>
                                        <Tooltip title={alt} placement="top">
                                            <Avatar 
                                                variant="rounded" 
                                                sx={{
                                                    height: 64,
                                                    width: 64,
                                                    padding: 2,
                                                    backgroundColor
                                                }}
                                            >
                                                {icon}
                                            </Avatar>
                                        </Tooltip>
                                    </Zoom>
                                </a>
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>

            <Hidden mdDown>
                <Fade in={true} style={{ transitionDelay: '100ms' }}>
                    <Grid item lg={6}>
                        <Image
                            src="/landing.svg"
                            alt="Landing"
                            width={901}
                            height={787}
                        />
                    </Grid>
                </Fade>
            </Hidden>
        </Grid>
    )
}