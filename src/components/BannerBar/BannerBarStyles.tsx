import styled from "../../theme/styled-components";

export const BackgroundContainer = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: ${(x) => x.theme.lightBlue};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  font-family: DroidSansBold, Helvetica, Arial, sans-serif;
`;
