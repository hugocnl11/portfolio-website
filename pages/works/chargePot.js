import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Charge Pot">
      <Container>
        <Title>
        Charge Pot <Badge>2023</Badge>
        </Title>
        <P>
        Expense management application with built-in filters by category and date, featuring a user login and database functionality.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://chargePot.es">
            https://chargePot.es <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://https://github.com/hugocnl11/chargePot.es">
            https://https://github.com/hugocnl11/chargePot.es <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaFX</span>
          </ListItem>
         
        </List>
        <WorkImage src="/images/myWorks/ChargePot1.jpg"/>
        <WorkImage src="/images/myWorks/ChargePot2.jpg"/>
        <WorkImage src="/images/myWorks/ChargePot3.jpg"/>
        <WorkImage src="/images/myWorks/ChargePot4.jpg"/>
        
        
        
        
      </Container>
    </Layout>
  )
  
  export default Work
  