import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
  query {
    file(relativePath: { eq: "orijinal P1160684.JPG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = ({ children }) => {
  const { file } = useStaticQuery(query)

  return (
    <BackgroundImage
      Tag="section"
      fluid={file.childImageSharp.fluid}
      className="background"
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
