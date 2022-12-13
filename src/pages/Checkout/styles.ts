import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  margin-inline: 10rem;
  grid-template-areas: "form order";
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: bold;
    font-size: 1.125rem;
  }
`;

const BaseCheckoutBox = styled.div`
  display: flex;
  flex-direction: column;

  border: none;
`;

export const ClientForm = styled.div`
  grid-area: form;
  & form {
    display: flex;
    flex-direction: column;
    header {
      display: flex;
      margin-bottom: 1.5rem;
      gap: 0.5rem;
      div {
        display: flex;
        flex-direction: column;
      }
    }

    input {
      border-radius: 4px;
      color: ${(props) => props.theme["base-label"]};
      background-color: ${(props) => props.theme["base-input"]};
      height: 2.625rem;
      border: none;
      margin-bottom: 1rem;
      padding: 0.75rem;

      &[name="CEP"] {
        width: 12.5rem;
      }
    }

    .details-address {
      display: flex;
      gap: 0.75rem;

      input[name="number"] {
        width: 12.5rem;
      }

      input[name="complement"] {
        flex: 1;
      }
    }
  }

  .macro-address {
    display: flex;
    gap: 0.75rem;

    input[name="block"] {
      width: 12.5rem;
    }

    input[name="city"] {
      flex: 1;
    }

    input[name="UF"] {
      width: 3.75rem;
    }
  }
`;

export const PaymentMethods = styled(BaseCheckoutBox)`
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  div.methods {
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      height: 3.1875rem;
      width: 11.125rem;
      padding: 1rem;

      font-size: 0.75rem;

      border-radius: 6px;
      border: none;
      background-color: ${(props) => props.theme["base-button"]};
    }
  }
`;

export const OrderSide = styled(BaseCheckoutBox)`
  grid-area: order;

  & div.displayOrder {
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    height: fit-content;
    padding-inline: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};
  }
  & div.displayOrder .noOrder {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 8rem;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.5rem;

  & div {
    display: flex;
    justify-content: space-between;
  }

  & div.total {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const SubmitOrderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.875rem;
  margin-top: 1.5rem;

  background-color: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
