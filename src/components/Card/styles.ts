import styled from "styled-components";

export const CardStyles = styled.div`
  .contentWrapper {
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 400px;
    transition: all 0.3s ease-out;

    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
    }

    p {
      color: #a3a5ae;
      font-size: 16px;
    }

    img {
      border-radius: 0.2rem;
      max-width: 164px;
      max-height: 164px;
    }
  }
`;
