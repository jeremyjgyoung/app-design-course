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
        <Link className={mSty.card} to="/overview/goals-grades">
          <div className={mSty.cardContainer}>
            <h2>Course Overview</h2>
            <h3>Learn more about this class and how to get set up.</h3>
          </div>
        </Link>
        <h1 className={mSty.subTitle}>Design Thinking</h1>
        <div className={mSty.sectionCardContainer}>
        <Link className={mSty.card} to="/design-thinking/overview/design-thinking-overview">
          <div className={mSty.cardContainer}>
            <h2>Design Thinking Overview</h2>
            <h3>Learn more about design thinking.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/design-thinking/empathize/what-is-empathize">
          <div className={mSty.cardContainer}>
            <h2>Empathize</h2>
            <h3>Build empathy for the user of your app.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/design-thinking/define/what-is-define">
          <div className={mSty.cardContainer}>
            <h2>Define</h2>
            <h3>Define who your user is, what they need, and uncover insights.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/design-thinking/ideate/what-is-ideate">
          <div className={mSty.cardContainer}>
            <h2>Ideate</h2>
            <h3>Come up with app ideas based on your user.</h3>
          </div>
        </Link>
        <Link className={mSty.card} to="/design-thinking/prototype-test/what-is-prototype-test">
          <div className={mSty.cardContainer}>
            <h2>Prototype & Test</h2>
            <h3>Design and develop your app testing it to make you are on the right track.</h3>
          </div>
        </Link>
        </div>
        <h1 className={mSty.subTitle}>Build Apps</h1>
        <div className={mSty.sectionCardContainer}>
        <Link className={mSty.card} to="/tech-overview/setup">
          <div className={mSty.cardContainer}>
            <h2>Tech Overview</h2>
            <h3>Learn about style by building an app.</h3>
          </div>
        </Link>
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
        </div>
        <h1 className={mSty.subTitle}>References & Resources</h1>
        <div className={mSty.sectionCardContainer}>
        <Link className={mSty.card} to="/references-resources/app-recipes/font-recipe">
          <div className={mSty.cardContainer}>
            <h2>App Recipes</h2>
            <h3>Lessons on how to implement app features.</h3>
          </div>
        </Link>
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
        <Link className={mSty.card} to="/design-thinking-resources/design-thinking-resource-list">
          <div className={mSty.cardContainer}>
            <h2>Design Thinking Resources</h2>
            <h3>
              More resources to learn about design thinking.
            </h3>
          </div>
        </Link>
      </div>
      </div>
    </div>
    </React.Fragment>
  );
}
