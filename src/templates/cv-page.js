import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const CVPageTemplate = ({
  name,
  portrait,
  categories,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  console.log(categories);

  return (
    <div>
      <img src={portrait} alt="portrait" />
      <h3>{name}</h3>
      <PageContent content={content} />
    </div>
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
        name={post.frontmatter.name}
        portrait={post.frontmatter.portrait}
        categories={post.frontmatter.categories}
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
        categories
      }
    }
  }
`;
