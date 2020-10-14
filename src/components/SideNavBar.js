import React from "react";
import { Link } from "gatsby";
import siSty from "./sidebar.module.scss";

export default function SideNavBar({ lessonArr, title }) {
  console.log(title);
  
  return (
    <div className={siSty.sideNav}>
      <div className={siSty.sideTitles}>
        <Link to={`/`}>
          <h2 className={siSty.siteTitle}>App Design</h2>
        </Link>
        <h1 className={siSty.sideBarTopic}>{lessonArr[0].node.frontmatter.topic}</h1>
      </div>
      {lessonArr.map(({ node }) => (
        <div key={node.id}>
        {title === node.frontmatter.title
          ? (<div className={siSty.activeDiv}>
            <Link to={`/${node.slug}`}>
              <h2 className={siSty.activeSideBarTitle}>{node.frontmatter.title}</h2>
            </Link>
            </div>)
          : (<Link to={`/${node.slug}`}>
              <h2 className={siSty.sideBarTitles}>{node.frontmatter.title}</h2>
            </Link>)
        }
        </div>
      ))}
    </div>
  );
}
