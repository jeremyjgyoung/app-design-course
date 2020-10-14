import React from "react";
import { Link } from "gatsby";
import { Helmet } from 'react-helmet';

import mSty from "./main.module.scss";

export default function Home({ data }) {
  return (
    <React.Fragment>
    <Helmet>
      <title>Home | App Design</title>
      <meta name="title" content="App Design Course" />
      <meta name="description" content="Learn to design and develop cross-platform apps." />
    </Helmet>
    <div className={mSty.main}>
      <div className={mSty.container}>
        <h1 className={mSty.title}>App Design</h1>
        <h1 className={mSty.subTitle}>Overview</h1>
        <Link className={mSty.card} to="/overview/setup">
          <div className={mSty.cardContainer}>
            <h2>Overview</h2>
            <h3>Learn more about this class and how to get set up.</h3>
          </div>
        </Link>
        <h1 className={mSty.subTitle}>Build Apps</h1>
        <Link className={mSty.card} to="/first-app/first-overview">
          <div className={mSty.cardContainer}>
            <h2>First App: Style</h2>
            <h3>Learn about style by building an app.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/second-app/second-overview">
          <div className={mSty.cardContainer}>
            <h2>Second App: Routes</h2>
            <h3>Learn about navigation by building an app.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/third-app/third-app-overview">
          <div className={mSty.cardContainer}>
            <h2>Third App: Data</h2>
            <h3>Learn how to work with data through building an app.</h3>
          </div>
        </Link>
        <h1 className={mSty.subTitle}>References & Resources</h1>
        <Link className={mSty.card} to="/style-reference/colors">
          <div className={mSty.cardContainer}>
            <h2>Style Reference</h2>
            <h3>Here are resources for colors and positioning.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/javascript-reference/js-basics">
          <div className={mSty.cardContainer}>
            <h2>JavaScript Reference</h2>
            <h3>
              Here are resources for the main programing language in Expo.
            </h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/react/components">
          <div className={mSty.cardContainer}>
            <h2>React Reference</h2>
            <h3>
              Here are resources for React, React Native, Expo, and JSX.
            </h3>
          </div>
        </Link>
      </div>
    </div>
    </React.Fragment>
  );
}
