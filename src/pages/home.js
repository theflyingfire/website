
// Step 1: Import React
import * as React from 'react'
import { withPrefix ,Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout';
import Seo from '../components/seo';
import Gallery from './gallery';
import BackgroundCover from '../components/BackgroundCover';
import Video from '../components/video';
import styled from "styled-components";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const HomePage = ({data}) => {

    React.useLayoutEffect(() => {
        
    let handle = window.setInterval(update_featured_entry, 3000);
    let currentIndex = -1
    let featured = document.getElementById("featured");
    let entries = document.getElementsByClassName("featured-entry")

    function update_featured_entry() {
        currentIndex = (currentIndex + 1) % entries.length
        featured.style.left = "-"+currentIndex*100+'vw';
        for(var i = 0; i < entries.length; i++)
        {
            //entries.item(i).style.display = i==currentIndex?`block`:`none`
        }
    }

    update_featured_entry()

    return () => {window.clearInterval(handle)};
    });

    return (
    <>
        <Seo title="Home" />
            <BackgroundCover>
            <div  class="featured" >
                <div id="featured">
                    {
                        data.allMdx.nodes.map(featured => {
                            return <div key={featured.id} class="featured-entry">
                                <Link to={featured.frontmatter.slug}>
                                    <GatsbyImage
                                    style={{
                                        display: (featured.frontmatter.videoSourceURL!="") ? "none" : "block",
                                    }}
                                    image={getImage(featured.frontmatter.img[0].childImageSharp)} />
                                    <Video
                                    videoSrcURL={featured.frontmatter.videoSourceURL}
                                    videoTitle={featured.frontmatter.title}
                                    ></Video>
                                    <div class="featured-title">
                                        <h1>{featured.frontmatter.title}</h1>
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                </div>
            </div>

            <div class="About-section" style={{textAlign:`center`}}>
                <Link to="/about">
                <h1>
                    About
                </h1>
                </Link>

                <p>
                    Welcome to my website, I am a programmer and digital artist and most of the stuff I make in either medium goes up here. <br></br>
                    You can also find me on <a href="https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ">YouTube</a>, <a href="https://github.com/theflyingfire">GitHub</a> and <a href="https://thefireflyer.itch.io/">Itch.io</a>.
                </p>
            </div>
            
            </BackgroundCover>
    </>
    )
}

export default HomePage

export const featuredPostsQuery = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      limit: 3
      filter: {frontmatter: {slug: {in: ["/images/img6", "/blog/test1"]}}}
    ) {
      nodes {
          id
        frontmatter {
          title
          slug
          img {
            publicURL
            childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
          }
          videoSourceURL
        }
      }
    }
  }
  `