import { Container } from './style';

export function TextSection({ title, children }){
  return(<Container>
    <h1>{ title }</h1>
    { children }
  </Container>
  )
}