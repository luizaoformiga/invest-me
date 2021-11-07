import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CardStyles = styled.div`
  .contentWrapper {
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: auto;
    margin: 30px;
    
    width: 400px;
    height: 300px;
    
    transition: all 0.3s ease-out;

    &:hover {
      transform: translateY(-5px);
      cursor: pointer;
    }

    p {
      color: ${colors.grey};
      font-size: 16px;
      margin-bottom: 6px;
    }

    img {
      border-radius: 0.2rem;
      width: 140px;
      height: 160px;
      margin: 4px 4px 4px 4px;
    }
  }
`;
