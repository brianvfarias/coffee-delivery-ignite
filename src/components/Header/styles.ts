import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 10rem;
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

export const CartWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;
