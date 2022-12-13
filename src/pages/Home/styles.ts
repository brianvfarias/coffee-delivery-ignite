import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 7.5rem;
`;

export const Intro = styled.div`
  display: grid;
  padding-block: 5.75rem;
  justify-items: center;
  align-items: center;
  grid-template-areas: "text img";
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  div {
    grid-area: text;
    h1 {
      font-family: "Baloo 2", cursive;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    ul {
      list-style-type: none;
      color: ${(props) => props.theme["base-text"]};
      margin-top: 4.125rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;

      li {
        margin-bottom: 1.6rem;
      }

      li span {
        height: 2rem;
        width: 2rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        color: ${(props) => props.theme.white};

        &.shoppingCart {
          background-color: ${(props) => props.theme["yellow-dark"]};
        }

        &.timer {
          background-color: ${(props) => props.theme["yellow"]};
        }
        &.package {
          background-color: ${(props) => props.theme["base-text"]};
        }
        &.coffee {
          background-color: ${(props) => props.theme["purple"]};
        }
      }
    }
  }

  img {
    grid-area: img;
    width: 100%;
  }
`;

export const DisplayList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    margin-top: 2rem;
    margin-bottom: 3.375rem;
  }
`;

export const ListOfCoffes = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 18rem);
`;
