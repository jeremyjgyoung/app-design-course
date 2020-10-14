const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const lessonPost = path.resolve(`./src/templates/lesson-layout.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: frontmatter___order, order: ASC }
        ) {
          edges {
            node {
              slug
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the lessons`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMdx.edges;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previous = index === 0 ? null : posts[index - 1];
      const next = (index === posts.length - 1) ? null : posts[index + 1];
      createPage({
        path: post.node.slug,
        component: lessonPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}