import {
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Heading,
    
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ExperienceImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import Section from '../../components/section'

const Use = () => (
    <Layout title="Mercadona">
    <Container>
    
    <Section delay={0.2}>
        
        <Title>
            Mercadona
        </Title>
        <P>
            I entered the company through internships as part of my higher education in Multiplatform Application Development. During this time, I underwent training, developed applications using microservices, and handled maintenance and incident resolution tasks.
        </P>
    <List ml={4} my={4}>
        <ListItem>
            <Meta>Position</Meta>
            <span>BackEnd Developer</span>
        </ListItem>
        <ListItem>
            <Meta>Web</Meta>
            <Link href="https://info.mercadona.es/es/mercadonait">
            https://info.mercadona.es/es/mercadonait <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Location</Meta>
            <span>Albalat dels Sorells, Valencia</span>
        </ListItem>
        <ListItem>
            <Meta>Time working</Meta>
            <span>9 Months</span>
        </ListItem>
                
    </List>
    </Section>

    <Section delay={0.4}>
        <ExperienceImage src="/images/experience/oficinas-albalat.png" alt="Plaza Verde" />
    </Section>
    

    
    <Section delay={0.8}>
        <Heading as="h3" variant="section-title">
                Events
        </Heading>

        <SimpleGrid columns={1} gap={2}  my={4}>
        <P >
            I participated in Mercadona first internal Hackathon, where we developed a Spring Boot application over the course of 2 days. While we didnt win, I learned a lot from my colleagues and thoroughly enjoyed the experience.
        </P>
        
        <ExperienceImage src="/images/experience/topicFillers.jpg" alt="Plaza Verde" />
        </SimpleGrid>
    </Section>
    <Section delay={1.2}>
        <P>
        Attached is a picture of all the participants in the event:</P>
        <br></br>

        <ExperienceImage src="/images/experience/hackaton.jpeg" alt="Plaza Verde" />
    </Section>
    </Container>
    </Layout>
)

export default Use
