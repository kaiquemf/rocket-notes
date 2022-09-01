import { Container, Form } from './style';

import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link } from 'react-router-dom';


export function NewNote(){
  return(
   <Container>
    <Header />

    <main>
     <Form>
      <header>
      <h1>New note</h1>
      <Link to="/"> <ButtonText title="return" /> </Link>
      </header>

      <Input placeholder="Title"/>
      <TextArea placeholder="Write your notes..."/>

      <Section title="Links">
        <NoteItem value="https://rocketseat.com.br"/>
        <NoteItem isNew placeholder="New link"/>
      </Section>

      <Section title="Markers">
        <div className="tags">
          <NoteItem value="react"/>
          <NoteItem isNew placeholder="New tag"/>
        </div>
      </Section>

      <Button title="Save"/>
     </Form>
    </main>
   </Container>
  )
}