import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home(){
 return(
  <Container>
   <Brand>
   <h1>RocketNotes</h1>
   </Brand>
   <Header />
   <Menu>
   <li><ButtonText title="All" isActive/></li>
   <li><ButtonText title="FrontEnd" /></li>
   <li><ButtonText title="NodeJs" /></li>
   </Menu>
   <Search>
   <Input placeholder="Search By title" icon={FiSearch}/>
   </Search>
   <Content>
    <Section title="My Notes">
     <Note data={{title:"React Modal",
       tags:[
       {id: "1", name:"React Modal"},
       {id: "2", name:"React Modal2"}]}}>              
     </Note>
    </Section>
   </Content>
   <NewNote>
   <FiPlus />
   <p>Create Note</p>
   </NewNote>
  </Container>
  )
}