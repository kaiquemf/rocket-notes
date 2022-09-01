import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header{
    width: 100%;
    height: 14.4rem;
    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg{
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }

`;
export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  >div:nth-child(4){
    margin-top: 2.4rem;
  }
  
`;
export const Avatar = styled.div`
  position: relative;
  margin: -13rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img{
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  > label{
    width: 4rem;
    height: 4rem;

    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 4rem;
    right: 4rem;
    cursor: pointer;

    input{
      display: none;
    }
    svg{
      width: 1.8rem;
      height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;