import React, { useState } from 'react'
import { MoonIcon, SunIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, HStack, IconButton, Link, Spacer } from '@chakra-ui/react'


export default ({ children }) => {
    const [status, setStatus] = useState("light")

    const toggleTheme = () => {
        if (status === "light") {
            setStatus("dark")
        } else {
            setStatus("light")
        }
    }

    return (
        < >
            <Box p="4" bg="red.400">
                <Flex align="center">
                    <Spacer />
                    <HStack>
                        <Link href="https://drive.google.com/file/d/1o9y4RrzdHgCP2R4puVBEYJCRxqnZyJH0/view?usp=sharing" isExternal>
                            <Heading as="h6" size="xs"> Resume <ExternalLinkIcon mx="2px" /></Heading>
                            {/* <Heading size="md" as="h6">IN ENGLISH</Heading> */}
                        </Link>
                        <IconButton
                            onClick={toggleTheme}
                            aria-label="Search database"
                            icon={
                                status === "dark" ? <SunIcon /> : <MoonIcon />
                            }
                        />
                    </HStack>
                </Flex>
            </Box>
            {children}
        </>
    )
}






