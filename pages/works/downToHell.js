import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'
  const Work = () => (
    <Layout title="Down To Hell">
      <Container>
        <Title>
        Down To Hell <Badge>2022</Badge>
        </Title>
        <P>
            Metroidvania-style game developed in Unity as the final project for a higher-level vocational training in multimedia development.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/hugocnl11/Down-To-Hell">
            https://github.com/hugocnl11/Down-To-Hell <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C#, Unity, Photoshop</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://#">
              How i made my project game Metroidvania in Unity <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/myWorks/PortadaDTH.png" alt="Down To Hell" ml={4} my={4}/>
        <Badge >Character</Badge>
        <SimpleGrid columns={2} gap={8} my={2}>
            <h4>From this gif, I put together the video game character and devised how the combat system would be,
              with a shield and incorporating different sword strikes.</h4>
            <WorkImage src="/images/myWorks/videos/warriorMovements.gif" alt="Down To Hell" />
        </SimpleGrid>
        <SimpleGrid columns={2} gap={2} my={2}>
            <WorkImage src="/images/myWorks/videos/showingMovements.gif" alt="Down To Hell" />
            <h4>As you can see here, I demonstrate how I assembled the character&aposs animation tree and showcase how the movement looks.</h4>
        </SimpleGrid>
        <Badge  my={4}>Gameplay (Alpha Version)</Badge>
 
        <WorkImage src="/images/myWorks/videos/gameplay.gif" alt="Down To Hell"  />
        
        
      </Container>
    </Layout>
  )
  
  export default Work
  