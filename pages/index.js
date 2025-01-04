import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FaLinkedin } from 'react-icons/fa';
import NextLink from 'next/link';
import { BioSection, BioYear } from '../components/bio';
import Paragraph from '../components/paragraph';
import Section from '../components/section';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
                Hello, I&apos;m a software developer based in Spain!
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box textAlign="center" mb={4}>
                    <Heading as="h3" variant="page-tittle">
                        Hugo Gómez López
                    </Heading>
                    <p>Software Craftsman (Student / Developer / Designer)</p>
                </Box>
                <Box>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="200px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/hugo3.jpg"
                        alt="Profile Image"
                        objectFit="cover"
                        objectPosition="top"
                        height="180px"
                        width="180px"
                    />
                </Box>
                <Link 
                    href="https://www.linkedin.com/in/hugo-g%C3%B3mez-l%C3%B3pez-71445b1b1/" 
                    isExternal 
                    display="flex" 
                    alignItems="center" 
                    mb={4}
                    color="blue.500" 
                    _hover={{ textDecoration: 'underline', color: 'blue.600' }}
                >
                    <FaLinkedin style={{ marginRight: '8px' }} />
                    <Text>LinkedIn</Text>
                </Link>      
            </Box>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    My name is Hugo, im 21  and i am a software developer based in Valencia, Spain.
                    I am passionate about creating web, desktop applications, and video games.
                    My career path has led me to take on various roles, including backend developer, designer, and multimedia manager in different companies.
                    With a diverse set of skills, I am dedicated to perfecting my talents and contributing to innovative projects in the dynamic field of software development.
                    Get to know my {''}

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
                <Heading as={"h3"} variant="section-title">
                    Stack
                </Heading>
                <BioSection>
                    <BioYear>Programming languages</BioYear>
                </BioSection>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 4 }}
                    ml={{ md: 10 }}>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={0}
                        borderStyle="solid"
                        padding={2}
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/python.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={0}
                        borderStyle="solid"
                        padding={2}
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/java.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="80px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/html.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="80px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/css.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/js.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/c++.png"
                        alt="Profile Image">

                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/csharp.png"
                        alt="Profile Image">
                    </Image>
                </Box>

                <BioSection>
                    <BioYear>Frameworks</BioYear>
                </BioSection>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 4 }}
                    ml={{ md: 10 }}>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="70px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/dj.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/spring-boot.png"
                        alt="Profile Image">
                    </Image>

                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/odoo.png"
                        alt="Profile Image">
                    </Image>


                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/angular.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/javafx.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/unity.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/android.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/nextjs.png"
                        alt="Profile Image">
                    </Image>



                </Box>
                <BioSection>
                    <BioYear>Database</BioYear>
                </BioSection>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 4 }}
                    ml={{ md: 10 }}>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/postgresql.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/mysql.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/sqlite.png"
                        alt="Profile Image">
                    </Image>
                </Box>
                <BioSection>
                    <BioYear>Others Hardskills</BioYear>
                </BioSection>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 4 }}
                    ml={{ md: 10 }}>

                    <Image
                        borderColor="whiteAlpha.800"
                        padding={1}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/Git.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/lombok.jpeg"
                        alt="Profile Image">
                    </Image>
                    
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/JWT.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/docker.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/postman.png"
                        alt="Profile Image">
                    </Image>
                    <Image
                        borderColor="whiteAlpha.800"
                        padding={2}
                        borderWidth={0}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="20"
                        src="/images/index/agile.png"
                        alt="Profile Image">
                    </Image>

                </Box>
            </Section>


            <Section delay={0.7}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2024 - Present</BioYear>
                    Working at Navima Calzados providing solutions, improvements, and automations to internal processes from design to sales, implementing management and analytics applications in Django and Odoo.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Working at Mercadona IT Developing and performing maintenance on internal analytical accounting and cost distribution applications.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    I graduated as advanced specific vocational training in multiplatform application development.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Erasmus+ mid-level internship program in Perugia, Italy where I was able to work as a web page developer and translate, graphic designer and multimedia manager for two companies Ventievènti and Solar Cash S.r.l.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    I worked as an intern making manuals and documentation of the operation of financial and real estate applications, technical support and software installation and configuration.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    I graduated as intermediate degree in Microcomputer Systems and Networks, Systems.
                </BioSection>
                <BioSection>
                    <BioYear>2003</BioYear>
                    Born in Alzira (Valencia), Spain.
                </BioSection>





            </Section>
            <Section delay={1}>
                <Heading as="h3" variant="section-title">
                    I ❤
                </Heading>
                <Paragraph>

                    <p>
                        <Link href="https://open.spotify.com/user/hugocnl11" target="_blank">
                            Music
                        </Link>, Manga, Games, Coding, Pc Assembly and Arrange with friends.
                    </p>
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page

