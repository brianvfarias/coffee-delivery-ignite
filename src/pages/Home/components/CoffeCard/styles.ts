import styled from "styled-components";

export const Card = styled.div`
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

export const BuyingInfo = styled.form`
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
