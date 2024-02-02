import {
    Container,
    Badge,
    Link,
    List,
    SimpleGrid,
    ListItem
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  //import WorkVideo from '../../components/workVideo';
  const Work = () => (
    <Layout title="MyWardrobe">
      <Container>
        <Title>
        MyWardrobe <Badge>2022</Badge>
        </Title>
        <P>
        App to save the garments in your wardrobe, and the ones you desire for creating outfit combinations
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://MyWardrobe.es">
            https://MyWardrobe.es <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>
         
        </List>
        <WorkImage src="/images/myWorks/myWardrobe_eyecatch4.png" alt="MyWardrobe" />

        
        <SimpleGrid columns={2} gap={2} my={4}>
            <WorkImage src="/images/myWorks/MyWardrobe1.jpg"  alt="MyWardrobe" />
            <WorkImage src="/images/myWorks/MyWardrobe2.jpg" alt="MyWardrobe" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  