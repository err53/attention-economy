import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  FaHeart,
  FaLocationArrow,
  FaPhone,
  FaSms,
  FaAd,
  FaUserTag,
  FaGlobe,
} from "react-icons/fa"
import IconHighlight from "../components/iconHighlight"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Text, Flex, Box, Stack, Link } from "@chakra-ui/react"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      attentionVsInfo: file(relativePath: { eq: "attention-vs-info.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Heading as="h2" size="lg" mb="2"></Heading>
      <Text>
        Phones are addictive, social media is taking over our lives, and we seem
        to be less able to pay attention.
      </Text>
      <Text>
        <b>How did we get here?</b>
      </Text>
      <Flex direction={{ base: "column", md: "row" }}>
        <Stack width={{ base: "100%", md: "40%" }}>
          <Heading as="h2" size="lg" mb="2">
            A quick introduction
          </Heading>
          <Text>
            An attention economy is based around the idea that we only have a
            limited amount of attention, but there is an endless amount of
            information to consume.
          </Text>
          <Text>
            So, companies have become much better at giving you exactly what you
            want
          </Text>
        </Stack>
        <Box width={{ base: "100%", md: "60%" }} mx="auto">
          <Img fluid={data.attentionVsInfo.childImageSharp.fluid} />
        </Box>
      </Flex>
      <Heading as="h3" size="md" mb="2">
        So, what's the problem?
      </Heading>
      <Text>
        To figure out what you want, companies need data. A <lot>lot</lot> of
        data.
      </Text>
      <Text>
        For example, these are some of the things Facebook has been known to
        track:
      </Text>
      <Flex justify="center" align="space-around" wrap="wrap">
        <IconHighlight icon={FaGlobe} text="Websites Visited" />
        <IconHighlight icon={FaLocationArrow} text="Location Data" />
        <IconHighlight icon={FaHeart} text="Interests" />
        <IconHighlight icon={FaAd} text="Advertisement Interactions" />
        <IconHighlight icon={FaUserTag} text="Demographics" />
        <IconHighlight icon={FaPhone} text="Call Logs" />
        <IconHighlight icon={FaSms} text="SMS Logs" />
      </Flex>
      <Text>
        What do they do with that data? Well what else than target
        advertisements.
      </Text>
      <Text>
        It's no mistake that you'll see advertisements for items you've recently
        searched for, or
      </Text>

      <Link href="/bib">Link to bibliography</Link>
    </Layout>
  )
}

export default IndexPage
