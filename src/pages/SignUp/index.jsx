import { FiUser,FiMail, FiLock} from 'react-icons/fi'

import { Link } from 'react-router-dom';
import { Container, Form, Background } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
 
export function SignUp(){
  return(
  <Container>
    <Background />
   <Form>
    <h1>Rocket Notes</h1>
    <p>Application to save and manage your useful links.</p>

    <h2>Create your account!</h2>

    <Input placeholder="Name" type="text" icon={FiUser} />
    <Input placeholder="E-mail" type="text" icon={FiMail} />
    <Input placeholder="Password" type="password" icon={FiLock} />

    <Button title="Create account"/>
    <Link to="/">
    <ButtonText title="Return to login" isActive></ButtonText>
    </Link>
   </Form>
  </Container>
  );
}