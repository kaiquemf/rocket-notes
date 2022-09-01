import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  &:hover{
    color: ${({ theme }) => theme.COLORS.ORANGE}
  }

  border: none;
  font-size: 1.6rem;
  font-family: 'Roboto Slab', serif;
`;