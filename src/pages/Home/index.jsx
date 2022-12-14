import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
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
       {id: "2", name:"Front-End"}]}}>              
     </Note>
     <Note data={{title:"NodeJS",
       tags:[
       {id: "3", name:"Node"},
       {id: "4", name:"Back-End"}]}}>              
     </Note>
     <Note data={{title:"CSS-in-JS",
       tags:[
       {id: "5", name:"JavaScript"},
       {id: "2", name:"Front-End"}]}}>              
     </Note>
    </Section>
   </Content>
   <NewNote to="newnote">
   <FiPlus />
   <p>Create Note</p>
   </NewNote>
  </Container>
  )
}