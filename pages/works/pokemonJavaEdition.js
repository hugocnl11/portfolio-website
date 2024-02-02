import {
    Container,
    Badge,
    Link,
    List,
    SimpleGrid,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  const Work = () => (
    <Layout title="Pokemon Java Edition">
      <Container>
        <Title>
        Pokemon Java Edition <Badge>2022</Badge>
        </Title>
        <P>
        High school-level Pokémon battle project implemented in Java Swing.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/hugocnl11/Pokemon-Java-Edition">
            github.com/hugocnl11/Pokemon-Java-Edition <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java Swing, Photoshop</span>
          </ListItem>
         
        </List>
        <WorkImage src="/images/myWorks/pokemon_eyecatch.png" alt="Pokemon Java Edition" />
        <Badge >Gameplay</Badge>
        <SimpleGrid columns={2} gap={2} ml={4} my={4}>
            <WorkImage src="/images/myWorks/Pokemon_Java_Edition_01.jpg" alt="Pokemon Java Edition" />
            <WorkImage src="/images/myWorks/Pokemon_Java_Edition_02.jpg" alt="Pokemon Java Edition" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  