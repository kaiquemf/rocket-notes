import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './style'

export function Header(){
  return (
    <Container>
      <Profile>
        <img src="https://github.com/kaiquemf.png" alt="Image Profile" />
        <div>
          <span>Welcome,</span>
          <strong>Kaique Martins</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container> 
  );

}