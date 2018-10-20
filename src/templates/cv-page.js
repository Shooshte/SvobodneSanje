import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import "../styles/cv.sass";

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
    <div className="cv-container">
      <img className="portrait" src={portrait} alt="portrait" />
      <h1>{name}</h1>
      <PageContent content={content} />
      {categories.map(category => {
        return (
          <div className="category-container">
            <h3 className="category-title">{category.title}</h3>
            <PageContent className="category-content" content={category.body} />
          </div>
        );
      })}
    </div>
  );
};

CVPageTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  portrait: PropTypes.any.isRequired,
  categories: PropTypes.array,
  contentComponent: PropTypes.func
};

const CVPage = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log(data);

  return (
    <Layout>
      <CVPageTemplate
        contentComponent={HTMLContent}
        name={post.frontmatter.name}
        portrait={post.frontmatter.portrait}
        categories={post.frontmatter.categories}
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
      frontmatter {
        name
        portrait
        categories {
          title
          body
        }
      }
    }
  }
`;
