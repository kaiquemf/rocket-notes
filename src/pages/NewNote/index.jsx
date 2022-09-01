import { Container, Form } from './style';
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"

export function NewNote(){
  return(
   <Container>
    <Header />

    <main>
     <Form>
      <header>
      <h1>New note</h1>
      <a href="/"><ButtonText title="return"/></a>
      </header>

      <Input placeholder="Title"/>
      <TextArea placeholder="Write your notes..."/>
     </Form>
    </main>
   </Container>
  )
}