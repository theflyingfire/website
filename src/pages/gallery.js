
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Img from "gatsby-image"

import styled from "styled-components"
import BackgroundCover from '../components/BackgroundCover';
const Section = styled.div`
  width: 80%;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto auto auto;
  grid-gap: 1%;
  
@media only screen and (max-width: 900px) {
  width: 95%;
  grid-template-columns: auto;
}
`

const ImageDiv = styled.div`
  position: relative;
  
  width: 100%;
  height: fit-content;

  filter: drop-shadow(0 0 1vw black);

  img {
    border-radius: 20px;
  }

  @keyframes on-hover {
    0% {
      transform: none;
    }
    100% {
      transform: scale( 101%, 101% );
    }
  }

  :hover {
    animation: on-hover 0.2s;
    transform: scale( 101%, 101% );
  }
`

const Gallery = ({data}) => {    
    
    return (
        
    <Layout>
        <Seo title="Gallery" />
        <BackgroundCover>
        <div style={{marginBottom:`3.5vw`}}></div>

        <Section>

            {data.allMarkdownRemark.nodes.map( image => (
              <ImageDiv>
              <Link to={image.frontmatter.slug} >
              <img src={image.frontmatter.img.publicURL} style={{width:`100%`, minWidth:`300px`}}></img>
              </Link>
              </ImageDiv>
            ))}
        </Section>
        <div style={{marginBottom:`10vh`}}></div>
        </BackgroundCover>

    </Layout>
    )
}

export default Gallery

/*export const query = graphql`
    query test2 {
        allImageSharp {
            nodes {
              fluid {
                src
                originalName
              }
            }
          }
    }
`*/
export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Image post"}}},sort: {fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          title
          img {
            publicURL
          }
        }
      }
    }
  }
`