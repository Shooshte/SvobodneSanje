import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CVPageTemplate = ({ name, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {name}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CVPageTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  portrait: PropTypes.any.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const CVPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CVPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

CVPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CVPage;

export const cvPageQuery = graphql`
  query CVPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        portrait
      }
    }
  }
`;
