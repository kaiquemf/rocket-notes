import { FiMail, FiLock} from 'react-icons/fi'

import { Link } from 'react-router-dom';
import { Container, Form, Background } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
 
export function SignIn(){
  return(
  <Container>
   <Form>
    <h1>Rocket Notes</h1>
    <p>Application to save and manage your useful links.</p>

    <Input placeholder="E-mail" type="text" icon={FiMail} />
    <Input placeholder="Password" type="password" icon={FiLock} />

    <Button title="login"/>
    <Link to="/register">
    <ButtonText title="Create Account" isActive></ButtonText>
    </Link>
   </Form>
    <Background />
  </Container>
  );
}