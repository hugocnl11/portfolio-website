import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbHexagon from '../public/images/posts/hexagon.jpg'


const posts = () => (
<Layout title = "Hexagon">


    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
                <WorkGridItem id="hexagon" title="Hexagonal Architecture" thumbnail={thumbHexagon}>
                As a scalable design pattern
                </WorkGridItem>
            </Section>
            </SimpleGrid>
        
    </Container>
    </Layout>
)
export default Hexagon