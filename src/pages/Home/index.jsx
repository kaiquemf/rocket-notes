import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header';
import { AiOutlinePlus } from 'react-icons/ai';
import { ButtonText } from '../../components/ButtonText';

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

      </Search>

      <Content>

      </Content>
      <NewNote>
      <AiOutlinePlus />
      <p>Create Note</p>
      </NewNote>
    </Container>
  )
}