const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPage = path.resolve(`./src/templates/project-page.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title,
                date
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create markdown pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    const isBlogURL = /\/blog\//;
    const isProjectURL = /\/projects\//;

    let component = blogPost;
    if (isBlogURL.test(post.node.fields.slug)) {
      component = blogPost;
    } else if (isProjectURL.test(post.node.fields.slug)) {
      component = projectPage;
    }

    createPage({
      path: post.node.fields.slug,
      component: component,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  });

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `${node.frontmatter.path}${value}`,
    })
  }
}
