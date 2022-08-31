import { Tag } from '../../components/Tags';
import { Container, Links, Content } from './style';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header';
import { TextSection } from '../../components/TextSection';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return (
    <Container>
    <Header/>

  <main>
    <Content>
    <ButtonText title="Delete note" isActive></ButtonText>

    <TextSection title="Introdução ao React">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Unde numquam animi inventore mollitia molestias, 
        maxime similique, provident voluptatem omnis autem 
        temporibus saepe recusandae rerum dolorem ex voluptates enim magni possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Unde numquam animi inventore mollitia molestias, 
        maxime similique, provident voluptatem omnis autem 
        temporibus saepe recusandae rerum dolorem ex voluptates enim magni possimus.
      </p>
    </TextSection>

    <Section title="Links">
    <Links>
      <li><a href="@">https://rocketseat.com.br</a></li>
      <li><a href="@">http://rocketseat.com.br</a></li>
    </Links>
    </Section>

    <Section title="Markers">
    <Tag title="express"></Tag>
    <Tag title="nodejs"></Tag>
    </Section>

    <Button title="Return" ></Button>

    </Content>
  </main>
    </Container>
)
}