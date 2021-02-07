import React from 'react';
import { useStaticQuery } from 'gatsby';
import { Link as ReachLink } from "@reach/router"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, HStack, Link, Spacer, } from '@chakra-ui/react'

export default function () {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
  } = site.siteMetadata

  return (
    <Flex align="center">
      <Box p="2" >
        <Link as={ReachLink} to="/" >
          <Heading size="md" as="h3">{defaultTitle}</Heading>
        </Link>
      </Box>
      <Spacer />
      <Box>
        <HStack>
          {
            site.siteMetadata.social.map((social) => (
              <Link href={social.url} key={social.name}>
                <Heading as="h6" size="xs">{social.name} <ExternalLinkIcon mx="2px" /></Heading>
              </Link>
            ))
          }
        </HStack>
      </Box>
    </Flex>
  )
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      defaultTitle: title
      social {
        name
        url
      }
    }
  }
}
`
