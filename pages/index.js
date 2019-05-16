import Head from 'next/head';
import '../styles/styles.scss';

export default () => (
  <div className="app">
    <Head>
      <title>Danny McClain</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../static/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../static/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="../static/favicon/favicon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Overpass+Mono:400,700"
        rel="stylesheet"
      />
    </Head>
    <header>
      <h1>Danny McClain</h1>
      <p />
    </header>
    <section className="about">
      <h2>About</h2>
      <p />
      <p />
    </section>
    <section className="projects">
      <h2>Misc. Projects</h2>
    </section>
    <section className="currently">
      <h2>Currently</h2>
      <p />
    </section>
    <section className="links">
      <h2>Links</h2>
      <ul />
    </section>
  </div>
);
