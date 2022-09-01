import styled from "styled-components";
import backgroundImg from '../../assets/NotesImageSignUp.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1{
    font-size: 4.8rem;
    line-height: 6.3rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  
  > p{
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    margin-bottom: 3rem;
  }

  > h2{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 3rem;
  }

  > a{
    margin-top: 4rem;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  opacity: 0.4;

  border-right: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`