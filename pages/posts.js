import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { PostGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbHexagon from '../public/images/posts/hexagon.jpg'
import thumbCrud from '../public/images/myWorks/backEnd/crud.png'

const Posts = () => (
<Layout title = "Posts">


    <Container>
        <Heading as="h3" fontSize={20} mb={4}>
            Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
            <Section>
                <PostGridItem id="crud" title="CRUD" thumbnail={thumbCrud}>
                    Data management with basic creation, reading, updating and deleting operations.
                </PostGridItem>
            </Section>
            <Section>
                    <PostGridItem id="hexagonalArch" title="Hexagonal Architecture" thumbnail={thumbHexagon}>
                        As a scalable design pattern
                    </PostGridItem>
            </Section>
        </SimpleGrid>
    </Container>
    </Layout>
)
export default Posts