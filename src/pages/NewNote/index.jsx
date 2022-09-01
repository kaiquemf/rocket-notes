import { Container, Form } from './style';
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"

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
     </Form>
    </main>
   </Container>
  )
}