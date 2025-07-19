import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../src/createEmotionCache';
import { ThemeContext, ThemeProvider } from '../src/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function ThemeConsumer({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  const { theme } = useContext(ThemeContext)
  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </CacheProvider>
  )
}

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  return (
    <React.Fragment>
      <Head>
        <title>Muhammad Fakhri</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        <ThemeConsumer Component={Component} pageProps={pageProps} emotionCache={emotionCache} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
