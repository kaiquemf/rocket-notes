import styled from "styled-components";

export const Container = styled.section`
h1{
   font-size: 3.6rem;
   line-height: 4.7rem;
   
   font-weight: 500;
   color: ${({ theme }) => theme.COLORS.WHITE};

   margin-top: 6.4rem;
}
p{
  margin-top: 1.6rem;
  text-align: justify;
}
`