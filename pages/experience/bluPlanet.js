import {
    Container,
    Link,
    List,
    ListItem,
   
    
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ExperienceImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Use = () => (
    <Layout title="BluPlanet ">
    <Container>
    

    <Section delay={0.2}>
        <Title>BluPlanet</Title>
        <P>
            During my tenure at the company, I provided technical support, which involved tasks such as installing and configuring software, diagnosing and resolving issues, as well as creating manuals and documentation for the operation of financial and real estate applications.
        </P>
    
    <List ml={4} my={4}>
        <ListItem>
            <Meta>Position</Meta>
            <span>Computer Technician (Intern)</span>
        </ListItem>
        <ListItem>
            <Meta>Web</Meta>
            <Link href="https://bluplanetweb.com/">
            https://bluplanetweb.com/ <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Location</Meta>
            <span>Barcelona</span>
        </ListItem>
        <ListItem>
            <Meta>Time working</Meta>
            <span>2 Months</span>
        </ListItem>
                
    </List>
    </Section>

    <Section delay={0.5}>
            <ExperienceImage src="/images/experience/blueplanetOffice.jpg" alt="Plaza Verde" />
    </Section>
    </Container>
    </Layout>
)

export default Use
