import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { ExperienceGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import thumbBluePlanet from '../public/images/experience/bluplanet.jpg'
import thumbVenti from '../public/images/experience/20eventi.jpg'
import thumbSolar from '../public/images/experience/solarCash.jpg'
import thumbMercadona from '../public/images/experience/mercadona.png'
import thumbNavima from '../public/images/experience/Navima.png'
const Experience = () => (
<Layout title = "Expericence">


    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Jobs
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
            <Section>
                <ExperienceGridItem id="navima" title="Navima" thumbnail={thumbNavima}>
                    Development and upkeep of applications for analytical accounting and cost distribution in Django and Odoo.

                </ExperienceGridItem>
            </Section>
            <Section>
                <ExperienceGridItem id="mercadona" title="Mercadona" thumbnail={thumbMercadona}>
                    Development and maintenance of analytical
                    accounting applications and cost allocation.

                </ExperienceGridItem>
            </Section>
            <Section>
                <ExperienceGridItem id="bluPlanet" title="BluPlanet" thumbnail={thumbBluePlanet}>
                Internship for the middle-grade level in Hospitalet
                (Barcelona). Computer technician.

                </ExperienceGridItem>
            </Section>
            <Divider my={6} />

        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Heading as="h3" fontSize={20} mb={2}>
        Erasmus+ Perugia (Italia)
        </Heading>
        <p>Development and translation of websites,
multimedia content management, and graphic
design.</p>
            <Section>
                <ExperienceGridItem id="solarCash" title="SolarCash" thumbnail={thumbSolar}>
                    

                </ExperienceGridItem>
            </Section>
            <Section>
                <ExperienceGridItem id="20eventi" title="20Evènti" thumbnail={thumbVenti}>
                    

                </ExperienceGridItem>
            </Section>


    </SimpleGrid>

        
    </Container>
    </Layout>
)
export default Experience