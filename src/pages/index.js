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
  SimpleGrid,
  HStack,
} from "@chakra-ui/react"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      attentionVsInfo: file(relativePath: { eq: "attention-vs-info.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      instagramAlgo: file(relativePath: { eq: "instagram-algo.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      fbCountries: file(relativePath: { eq: "fb-countries.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      techMarketcap: file(relativePath: { eq: "tech-marketcap.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      pushNotifications: file(relativePath: { eq: "push-notifications.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      internetMinute2020: file(
        relativePath: { eq: "internet-minute-2020.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      emailsSentWorldwide: file(
        relativePath: { eq: "emails-sent-worldwide.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      paradox: file(relativePath: { eq: "paradox.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
          }
        }
      }
      twitch: file(relativePath: { eq: "twitch.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
          original {
            src
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

      <Stack
        direction={{ base: "column", md: "row" }}
        align={{ base: "-moz-initial", md: "top" }}
        spacing="4"
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
          <Text>Content is generated at an unbelievable rate.</Text>
        </Stack>
        <Stack flex="0 3 100%">
          <Box>
            <a href={data.internetMinute2020.childImageSharp.original.src}>
              <Img
                fluid={data.internetMinute2020.childImageSharp.fluid}
                objectFit="scale"
              />
            </a>
          </Box>
        </Stack>
      </Stack>
      <Text>
        Attention is a limited resource. You only have so much time to browse
        social media, yet there is essentially infinite content to consume. As
        the power of creation is put in more people's hands, the amount of
        content there is will continue to grow.
      </Text>
      <Box pr="8">
        <a href={data.attentionVsInfo.childImageSharp.original.src}>
          <Img
            fluid={data.attentionVsInfo.childImageSharp.fluid}
            objectFit="scale"
          />
        </a>
      </Box>

      <Text>
        So, companies need to figure out what you want. Around 2015, social
        media platforms began to use algorithms instead of a reverse
        chronological timeline, and they've continued refining their
        recommendation algorithms since.
      </Text>

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

      <Stack
        spacing="8"
        direction={{ base: "column-reverse", md: "row" }}
        // alignItems="center"
        width="100%"
      >
        <Box flex="0 1 100%">
          <a href={data.instagramAlgo.childImageSharp.original.src}>
            <Img
              fluid={data.instagramAlgo.childImageSharp.fluid}
              objectFit="scale"
            />
          </a>
        </Box>
        <Stack flex="0 1 auto">
          <Heading as="h3">
            <s>Addiction</s> Engagement 101
          </Heading>

          <Text>Customizing content to users is extremely effective.</Text>
          <Text>
            Instagram has seen view rates increase by 50% after switching to an
            algorithmic feed. That's right, 50%.
          </Text>
          <Text>
            Furthermore, a research paper published by YouTube engineers say
            they explicitly target high watch times in their machine learning
            algorithms.
          </Text>
          <Text>
            Clearly, the attention economy has encouraged companies to focus on
            keeping users in their app for as long as possible.
          </Text>
        </Stack>
      </Stack>

      <Stack>
        <Heading as="h3">
          Targeted Advertisements, or how to make money from users
        </Heading>
        <Text>
          The whole point of getting users to use a platform is so you can
          monetize them, through ads. However, we also have a bunch of user data
          to play with, why not use it to make the advertisements more
          effective? Ever notice how after you search for products, ads for that
          product appear? That's no mistake, that's targeted advertising.
        </Text>
        <Stack spacing="4" direction="row" alignItems="center">
          <Flex
            flex="0 0 auto"
            boxSize="7rem"
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
          <Text flex="0 1 auto">
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
      <Heading as="h3">Society and Cultures</Heading>
      <SimpleGrid minChildWidth="400px" spacing="4">
        <Stack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="green.50"
          flexDir="column"
        >
          <Stack flex="0 1 100%">
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
          <Box flex="0 1 auto" w="100%">
            <a href={data.fbCountries.childImageSharp.original.src}>
              <Img
                fluid={data.fbCountries.childImageSharp.fluid}
                objectFit="scale-down"
              />
            </a>
          </Box>
        </Stack>
        <Stack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="red.50"
        >
          <Text>
            Aside from the targeted content designed to keep you coming back,
            companies encourage a steady stream of positive rewards, even when
            you're not using the app. Like and comment notifications are all
            hooks designed to get you re-engaged with the app.
          </Text>
          <Box flex="0 1 auto" w="100%">
            <a href={data.pushNotifications.childImageSharp.original.src}>
              <Img
                fluid={data.pushNotifications.childImageSharp.fluid}
                objectFit="scale-down"
              />
            </a>
          </Box>
        </Stack>
        <Stack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="red.50"
        >
          <Text flex="0 1 100%">
            The cost of sending emails has dropped dramatically since the early
            days of the internet, a fact which marketers have taken advantage
            of. Today, around 300 billion emails are sent, a good number of
            which are marketing emails. This leads to overcrowded inboxes and a
            worse experience for consumers.
          </Text>
          <Box flex="0 1 auto" w="100%">
            <a href={data.emailsSentWorldwide.childImageSharp.original.src}>
              <Img
                fluid={data.emailsSentWorldwide.childImageSharp.fluid}
                objectFit="scale-down"
              />
            </a>
          </Box>
        </Stack>
        <Stack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="red.50"
        >
          <Text>
            Consumers want both personalized content, but also want their data
            to be private and inaccessible by corporations. Unless all
            recommendation algorithms are run locally, which is still
            infeasible, there is no way for both these desires to be fulfilled.
            This concept is known as the{" "}
            <b>Personalization vs. Privacy Paradox</b>
          </Text>
          <Box flex="0 1 auto" w="100%">
            <a href={data.paradox.childImageSharp.original.src}>
              <Img
                fluid={data.paradox.childImageSharp.fluid}
                objectFit="scale-down"
              />
            </a>
          </Box>
        </Stack>
        <Box
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="red.50"
        >
          <Text>
            Aside from advertising and social media, even traditional media have
            had to adapt. Headlines have moved towards more clickbait titles to
            attract more attention, which will likely lead towards more extreme
            content and viewpoints dominating media.
          </Text>
        </Box>
      </SimpleGrid>
      {/* TODO: Add some images here or smth idk */}

      <Heading as="h3">Economy</Heading>
      <Text>
        The attention economy won't replace the traditional economy anytime
        soon. However, it's impacts can be seen across not just the tech sector,
        but across all businesses.
      </Text>
      <SimpleGrid minChildWidth="400px" spacing="4">
        <Stack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="green.50"
        >
          <Text flex="0 1 auto" pb="4">
            Companies that have been able to capitalize on this have turned
            great profits. Out of the top 10 tech companies by market cap, over
            half of them directly profit in some way through the collection of
            user data.
          </Text>

          <Box flex="0 1 auto" w="100%">
            <a href={data.techMarketcap.childImageSharp.original.src}>
              <Img
                fluid={data.techMarketcap.childImageSharp.fluid}
                objectFit="scale-down"
              />
            </a>
          </Box>
        </Stack>
        <Stack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="green.50"
        >
          <Text>
            The influencer culture grew from the increasing accessibility of
            media creation tools, combined with the excellent monetization tools
            that platforms like YouTube and Twitch provide for their creators.
            This has created many job opportunities and has opened up a new
            field of employment and entrepreneurship.
          </Text>
          <Text as="b">Twitch Viewership from 2012-2020:</Text>
          <Box flex="0 1 auto" w="100%">
            <a href={data.twitch.childImageSharp.original.src}>
              <Img
                fluid={data.twitch.childImageSharp.fluid}
                objectFit="scale-down"
              />
            </a>
          </Box>
        </Stack>
        <HStack
          borderWidth="1px"
          borderRadius="10px"
          shadow="md"
          p="4"
          bgColor="green.50"
          spacing="4"
        >
          <Flex
            flex="0 0 auto"
            boxSize="7rem"
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
            bgColor="white"
          >
            <Text fontSize="4xl">79%</Text>
          </Flex>

          <Text>
            Targeted advertisements are around 79% more effective than
            traditional ads, and thus allow for companies to promote their
            products to a wider audience without spending as much money. This is
            especially important for newer businesses who have a smaller
            advertising budget.
          </Text>
        </HStack>
      </SimpleGrid>

      <Heading as="h2" size="2xl">
        Why should I care?
      </Heading>
      <Text>We have a fundamental right to privacy.</Text>

      <Text borderWidth="1px" borderRadius="10px" p="4" shadow="md">
        <b>Article 12</b> <br />
        No one shall be subjected to arbitrary interference with his privacy,
        family, home or correspondence, nor to attacks upon his honour and
        reputation. Everyone has the right to the protection of the law against
        such interference or attacks.
      </Text>

      <Text>
        Companies should be the ones explaining why they are infringing on our
        rights, not the other way around.
      </Text>

      <Text>
        The problem is, we as consumers don't have any say in the matter, aside
        from not using the internet.
      </Text>

      <Text>
        Companies need to be more transparent with the data they're collecting,
        and should allow consumers to turn off personalization and data
        collection if they wish. Stronger legislation like the GDPR laws in
        Europe would force companies to respect user privacy more.
      </Text>

      <Divider />
      <Link href="bib.html" color="blue.500">
        Link to bibliography
      </Link>
    </Layout>
  )
}

export default IndexPage
