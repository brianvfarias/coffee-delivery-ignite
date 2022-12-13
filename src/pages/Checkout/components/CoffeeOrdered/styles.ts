import styled from "styled-components";

export const CoffeeOrderedContainer = styled.div`
  display: grid;
  grid-template-areas:
    "img productInfo price"
    "img updateOrder .";
  gap: 1.25rem;
  grid-template-columns: 4rem 1fr 3.4rem;
  grid-template-rows: 4fr 2rem;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  color: ${(props) => props.theme["base-text"]};

  & .imgArea {
    grid-area: img;
  }

  & .imgArea img {
    width: 4rem;
  }

  & .productInfo {
    grid-area: productInfo;
  }

  & .price {
    grid-area: price;

    font-size: 1rem;
    font-weight: bold;
  }

  & .updateOrder {
    display: flex;
    grid-area: updateOrder;
    align-items: center;
    justify-content: space-around;
  }

  & .updateOrder .addOrSubtract {
    display: flex;
    width: 4.5rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;

    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-title"]};
    border-radius: 6px;

    & button {
      border: none;
      outline: none;
      background-color: ${(props) => props.theme["base-button"]};
    }
  }

  & .updateOrder .remove {
    display: flex;
    width: 5.7rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: none;
    border-radius: 6px;

    padding: 0 0.5rem;
    font-size: 0.75rem;

    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    border-radius: 6px;
  }
`;
