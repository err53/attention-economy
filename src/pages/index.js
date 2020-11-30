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
import {
  Heading,
  Text,
  Flex,
  Box,
  Stack,
  Link,
  Divider,
  Wrap,
} from "@chakra-ui/react"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      attentionVsInfo: file(relativePath: { eq: "attention-vs-info.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      instagramAlgo: file(relativePath: { eq: "instagram-algo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      fbCountries: file(relativePath: { eq: "fb-countries.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="The Attention Economy" />
      <Text fontSize="3xl">Or, why social media is the way it is</Text>

      <Divider />

      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "-moz-initial", md: "center" }}
      >
        <Stack flex="0 4 100%">
          <Heading as="h2" size="2xl">
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
        <Box flex="0 1 100%" pr="8">
          <Img
            fluid={data.attentionVsInfo.childImageSharp.fluid}
            objectFit="scale"
          />
        </Box>
      </Flex>

      <Stack>
        <Heading as="h3">So, what's the problem?</Heading>
        <Text>
          To figure out what you want, companies need data. A <lot>lot</lot> of
          data.
        </Text>
        <Text>
          For example, these are some of the things Facebook has been known to
          track:
        </Text>
        <Wrap justify="center" align="space-around" spacing="4">
          <IconHighlight icon={FaGlobe} text="Websites Visited" />
          <IconHighlight icon={FaLocationArrow} text="Location Data" />
          <IconHighlight icon={FaHeart} text="Interests" />
          <IconHighlight icon={FaAd} text="Advertisement Interactions" />
          <IconHighlight icon={FaUserTag} text="Demographics" />
          <IconHighlight icon={FaPhone} text="Call Logs" />
          <IconHighlight icon={FaSms} text="SMS Logs" />
        </Wrap>
        <Text>
          What do they do with that data? Two things: <br /> They keep you on
          their platform for longer, and they target advertisements towards you.
        </Text>
      </Stack>

      <Stack>
        <Heading as="h3">
          <s>Addiction</s> Engagement 101
        </Heading>

        <Text>Customizing content to users is extremely effective.</Text>
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
          width="100%"
        >
          <Box flex="0 1 100%" pr="8">
            <Img
              fluid={data.instagramAlgo.childImageSharp.fluid}
              objectFit="scale"
            />
          </Box>
          <Text flex="0 2 auto">
            That's right, 50%. This increased reach obviously means that
            Instagram has gotten people to use their platform more through the
            algorithm. How much has usage increased? Instagram doesn't say.
          </Text>
        </Stack>
      </Stack>

      <Stack>
        <Heading as="h3">
          Advertisements, or how to make money from users
        </Heading>
        <Text>
          Ever notice how after you search for products, ads for that product
          appear? Or how ads seem to follow you around the internet? That's no
          mistake. That's targeted advertising.
        </Text>
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
        >
          <Flex
            flex="0 0 7rem"
            h="7rem"
            borderWidth="1px"
            borderRadius="10px"
            transition="transform 0.2s"
            transitionTimingFunction="ease"
            _hover={{
              transform: "scale(1.10)",
            }}
            justify="center"
            align="center"
            shadow="md"
          >
            <Text fontSize="4xl">3&times;</Text>
          </Flex>
          <Text>
            That's how much more money companies can charge for target
            advertising. There's a lot of money go be gained from knowing
            exactly what you want.
          </Text>
        </Stack>
      </Stack>

      <Divider />

      <Heading as="h2" size="2xl">
        How does this affect the world?
      </Heading>
      <Stack>
        <Heading as="h3">Society and Cultures</Heading>
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          alignItems="center"
          width="100%"
        >
          <Stack flex="0 2 100%">
            <Text>
              There are benefits to the use of your attention as an economical
              resource. Attention does not require payment, and so, social media
              companies are able to provide their services without any monetary
              cost to the user.
            </Text>
            <Text>
              For example, developing countries like India make up a significant
              amount of Facebook users, since it's a free, easy way to keep in
              touch with family members.
            </Text>
          </Stack>
          <Box flex="0 1 100%" pr="8">
            <Img
              fluid={data.fbCountries.childImageSharp.fluid}
              objectFit="scale"
            />
          </Box>
        </Stack>
      </Stack>

      <Heading as="h2" size="2xl">
        Why should I care?
      </Heading>
      <Text>We have a fundamental right to freedom.</Text>

      <Text borderWidth="1px" borderRadius="10px" p="4">
        <b>Article 12</b> <br />
        No one shall be subjected to arbitrary interference with his privacy,
        family, home or correspondence, nor to attacks upon his honour and
        reputation. Everyone has the right to the protection of the law against
        such interference or attacks.
      </Text>

      <Text>
        Companies should be the ones explaning why they are infringing on our
        rights, not the other way around.
      </Text>

      <Divider />
      <Link href="bib.html">Link to bibliography</Link>
    </Layout>
  )
}

export default IndexPage
