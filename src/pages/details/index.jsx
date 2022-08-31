import { Container, Links } from './style';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

export function Details() {

  return (
    <Container>
    <Header/>
    <Section title="Links">
    <Links>
      <li><a href="@">https://rocketseat.com.br</a></li>
      <li><a href="@">http://rocketseat.com.br</a></li>
    </Links>
    {/* Title passed in a  property but children capture everything is inside of Section*/}
    </Section>
    <Section title="Markers">
    
    </Section>
    <Button title="Return" ></Button>
    </Container>
)
}