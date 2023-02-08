import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class RootIndex extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
