import {
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid,
   
    
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ExperienceImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import Section from '../../components/section'

const Use = () => (
    <Layout title="Erasmus+ ">
    <Container>
    

    <Section delay={0.2}>
        <Title>Solar Chash </Title>
        <P>
            I served as a web developer and translator (for the spanish version of the web), utilizing HTML, CSS and JS for webpage development.
        </P>
        
    
    <List ml={4} my={4}>
        <ListItem>
            <Meta>Position</Meta>
            <span>Developer & Designer (Intern)</span>
        </ListItem>
        <ListItem>
            <Meta>Web</Meta>
            <Link href="https://venti.events">
            https://venti.events <ExternalLinkIcon mx="2px" />
            </Link>
           
            <Link href="https://www.solarcash.eu">
            https://www.solarcash.eu <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Location</Meta>
            <span>Perugia, Italy</span>
        </ListItem>
        <ListItem>
            <Meta>Time working</Meta>
            <span>2 Months</span>
        </ListItem>
                
    </List>
    </Section>
    <Section delay={0.4}>
    <SimpleGrid columns={1} gap={2} my={4}>
            <ExperienceImage src="/images/experience/SolarCash1.png" alt="Solar" />
    </SimpleGrid>
    </Section>
    </Container>
    </Layout>
)

export default Use
