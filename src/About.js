import { Grid, Typography, Tooltip, Avatar } from "@mui/material";
import { about } from '../data.json'
import * as simpleIcons from 'simple-icons'
import clsx from "clsx";
import Image from 'next/image'
import { iconify } from "./util";
import Cancel from "@mui/icons-material/Cancel";

const dpx = about.social.length*10 - 2

const socialDetails = about.social.map(({ alt, icon, link }) => {
    const iconKey = iconify(icon);
    const ic = simpleIcons[iconKey] || {
        hex: '424242',
        component: <Cancel color="white" sx={{ fontSize: 36 }}/>
    }
    return {
        alt,
        backgroundColor: '#' + ic.hex,
        icon: ic.component || <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{icon}</title>
            <path d={ic.path} fill="white"/>
        </svg>,
        link
    }
})

export default function About() {
    return(
        <Grid 
            direction="row" 
            container 
            justifyContent="center" 
            alignItems="center" 
            sx={{
                minHeight: 'calc(100vh - 32px)',
                alignSelf: 'center',
                justifySelf: 'center'
            }}
        >
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom component="p">
                    About me
                </Typography>
                <Typography variant="h5" gutterBottom component="p">
                    {about.description}
                </Typography>                
            </Grid>
            <Grid container direction="column" item xs={12} lg={6} spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Avatar 
                        variant="rounded" 
                        sx={{
                            height: Math.max(dpx * 8, 224),
                            width: Math.max(dpx * 8, 224)
                        }}
                    >
                        <Image
                            alt="Display Picture"
                            src={about.picture}
                            layout="fill"
                        />
                    </Avatar>
                </Grid>
                <Grid container item xs={12} spacing={2} justifyContent="center">
                {
                    socialDetails.map(({ alt, icon, link, backgroundColor }, i) =>
                        <Grid item key={i}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
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
                            </a> 
                        </Grid>
                    )
                }
                </Grid>                
            </Grid>
        </Grid>
    )
}