import {
    Container,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, UseImage, Meta } from '../../components/use'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
const Use = () => (
    <Layout title="Razer Viper V2 Pro">
    <Container>
        <Title>
        Razer Viper V2 Pro
        </Title>
        <P>
        The Razer Viper V2 Pro is, without a doubt, the best mouse I&aposve ever had in my hands. Its sleek aesthetics and the RGB-lit charging dock create a captivating ambiance on my desktop, something I truly appreciate. 
        </P>
        <br></br>
        <P>
            While there are other mice that offer a better bang for the buck, spending €160 on this one may not be necessary. I previously owned the Razer Viper Mini, which cost me €25, and I believe it offers a better quality-to-price ratio than the V2 Pro. However, if you can afford it, the upgrade is quite noticeable.
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.razer.com/pc/gaming-mice/viper-line">
            https://www.razer.com/viper <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Platform</Meta>
            <span>Windows, Linux, IOS</span>
        </ListItem>
        <ListItem>
            <Meta>Specifications</Meta>
            <span>Weight: 58.5 g, 30.000 DPI</span>
        </ListItem>
        
        <ListItem>
            <Meta>Price</Meta>
            <span>160€</span>
        </ListItem>
        <ListItem>
            <Meta>Personal puntuation</Meta>
            <span>9/10</span>
        </ListItem>
        </List>
        <UseImage src="/images/uses/viper-v2.png" alt="KIYO" />
    </Container>
    </Layout>
)

export default Use
