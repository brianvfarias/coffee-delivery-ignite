import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 10rem;
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
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;

  &:nth-child(even) {
    margin-left: 1.5rem;
  }
`;

export const CoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 19.75rem;
  width: 16rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px 36px 6px 36px;
  margin-bottom: 2.5rem;
  padding-inline: 1.25rem;
  gap: 0.25rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    position: relative;
    top: -1rem;
  }

  .categories {
    padding: 0;
    margin: -0.5rem;
  }

  span.category {
    display: inline-block;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    font-weight: bold;
    font-size: 0.625rem;
    line-height: 130%;
  }

  h3 {
    margin-top: 1rem;
    font-family: "Baloo 2", cursive;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.625rem;
  }

  span.description {
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    line-height: 1.15625rem;
  }
`;

export const BuyingInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1.75rem;
  input {
    width: 4.5rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme["base-hover"]};
    border-radius: 6px;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
    border: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 2.375rem;

    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["base-card"]};
  }
`;
