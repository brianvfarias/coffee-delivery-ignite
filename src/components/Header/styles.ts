import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  padding-inline: 10rem;
  align-items: center;
`;

export const DisplayInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LocationWrapper = styled.div`
  height: 2.5rem;
  width: fit-content;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
`;

export const CartWrapper = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  position: absolute;

  & .shoppingCart {
    position: absolute;
  }
`;

export const OrderAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  border-radius: 100%;
  background-color: ${(props) => props.theme["yellow-dark"]};
  width: 1.25rem;
  height: 1.25rem;
  top: -0.75rem;
  left: 1.5rem;

  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;
