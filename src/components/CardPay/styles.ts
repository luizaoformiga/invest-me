import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CardPayStyles = styled.div`
  border-bottom: 2px solid rgba(50, 50, 50, 0.22);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin: 10px;
  padding: 10px;

  .contentImage {
    margin: 10px;
    img {
      width: 100px;
      height: 100px;
    }
  }

  .contentDescription {
    display: flex;
    flex-direction: column;
    text-align: left;

    h3 {
      width: 50%;
    }
  }

  .aiFillDelete {
    font-size: 30px;
    color: ${colors.grey};
  }
`;
