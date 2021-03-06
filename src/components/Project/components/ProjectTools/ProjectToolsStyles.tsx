import styled from "../../../../theme/styled-components";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;

  a {
    &:hover,
    &:focus {
      background-color: transparent;
    }
  }

  img {
    max-height: 40px;
    margin-right: 10px;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;
