import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link, graphql } from "gatsby";
import { Helmet } from 'react-helmet';

import lSty from "./lesson.module.scss";
import "./lesson-style.scss";
import SideNavBar from "../components/SideNavBar";

export default function Lesson(props) {
  const { data } = props;
  let lessonArr = data.allMdx.edges.filter(
    (item) => item.node.frontmatter.topic === data.mdx.frontmatter.topic
  );

  let prevButton;
  if (props.pageContext.previous === null) {
    prevButton = (
      <Link to="/">
        <div className={lSty.cardContainer}>
          <h4>PREVIOUS</h4>
          <h4 className={lSty.pnTitle}>
            Home
          </h4>
        </div>
      </Link>
    );
  } else {
    prevButton = (
      <Link to={`/${props.pageContext.previous.node.slug}`}>
        <div className={lSty.cardContainer}>
          <h4>PREVIOUS</h4>
          <h4 className={lSty.pnTitle}>
            {props.pageContext.previous.node.frontmatter.title}
          </h4>
        </div>
      </Link>
    );
  }

  let nextButton;
  if (props.pageContext.next === null) {
    nextButton = (
      <Link to="/">
        <div className={lSty.cardContainer}>
          <h4>NEXT</h4>
          <h4 className={lSty.pnTitle}>
            Home
          </h4>
        </div>
      </Link>
    );
  } else {
    nextButton = (
      <Link to={`/${props.pageContext.next.node.slug}`}>
        <div className={lSty.cardContainer}>
          <h4>NEXT</h4>
          <h4 className={lSty.pnTitle}>
            {props.pageContext.next.node.frontmatter.title}
          </h4>
        </div>
      </Link>
    );
  }

  return (
    <React.Fragment>
    <Helmet>
    <title>{data.mdx.frontmatter.title} | App Design</title>
    </Helmet>
    <div className={lSty.main}>
      <div className={lSty.lessonSection}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <div className={lSty.pnLessonNav}>
          {prevButton}
          {nextButton}
        </div>
      </div>
      <SideNavBar lessonArr={lessonArr} title={data.mdx.frontmatter.title} />
    </div>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    allMdx(sort: { fields: frontmatter___order, order: ASC }) {
      edges {
        node {
          slug
          id
          frontmatter {
            title
            topic
          }
        }
      }
    }
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        topic
      }
    }
  }
`;
