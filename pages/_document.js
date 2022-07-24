// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="/favicon.png" rel="icon" />
                <link type="text/css" rel="stylesheet" href="/stylesheets/featherlight.css" />
                <link href="https://fonts.googleapis.com/css?family=Enriqueta:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Share+Tech:regular,bold" rel="stylesheet" type="text/css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}