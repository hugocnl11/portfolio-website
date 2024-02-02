import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, Image, Link, List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { Meta } from '../components/work' 

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
            Hello, I&apos;m a backend developer based in Spain!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h3" variant="page-tittle">
                        Hugo Gómez López
                    </Heading>
                    <p>Back-end Dev (Student / Developer / Designer)</p>
                </Box>
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0}}
                ml={{ md:6}}
                align="center"
                >
                        <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/hugo.jpg"
                        alt="Profile Image">

                        </Image>
                </Box>
            </Box>

        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Work
            </Heading>
            <Paragraph>
                
                    Hugo, a 20-year-old junior backend developer based in Valencia,
                    Spain, is passionate about crafting web and desktop applications,
                    as well as video games. His journey has taken him through various
                    roles, including developer, designer, and multimedia manager in different companies.
                    With a diverse skill set, Hugo is dedicated to honing his talents and contributing
                    to innovative projects in the dynamic field of software development. Get to know my {''}

                
                <NextLink as={NextLink} href="/works" passHref scroll={false}>
                    <Link>experience</Link>
                </NextLink>
                .
            </Paragraph>
            <Box align="center" my={4}>
            <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
            >
                My portfolio
            </Button>
        </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>2003</BioYear>
                Born in Alzira (Valencia), Spain.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                I graduated as intermediate degree in Microcomputer Systems and Networks, Systems.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                I worked as an intern making manuals and documentation of the operation of financial and real estate applications, technical support and software installation and configuration.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Erasmus+ mid-level internship program in Perugia, Italy where I was able to work as a web page developer and translate, graphic designer and multimedia manager for two companies Ventievènti and Solar Cash S.r.l.
            </BioSection>
            <BioSection>
                <BioYear>2023</BioYear>
                I graduated as senior technician in multiplatform application development.
            </BioSection>
            <BioSection>
                <BioYear>2023</BioYear>
                Working at Mercadona IT Developing and performing maintenance on internal analytical accounting and cost distribution applications.
            </BioSection>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                I ❤
            </Heading>
            <Paragraph>
                <p>
                    Music, Manga, Games, Coding, Pc Assembly and Arrange with friends.
                </p>
            </Paragraph>
        </Section>
        </Container>
    )
}

export default Page

