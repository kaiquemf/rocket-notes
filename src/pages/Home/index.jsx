import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Header } from '../../components/Header';
import { FiPlus } from 'react-icons/fi';
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
      <FiPlus />
      <p>Create Note</p>
      </NewNote>
    </Container>
  )
}