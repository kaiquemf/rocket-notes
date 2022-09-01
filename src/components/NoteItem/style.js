import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.GRAY_300};
  border: ${({theme, isNew}) => isNew ? `1px dashet ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button{
    border: none;
    background: none;
  }
  
  > input{
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    background: transparent;
    border: none;

    &::placeholder{
      ${({theme}) => theme.COLORS.GRAY_300}
    }

    color: ${({theme}) => theme.COLORS.WHITE};

  }
`