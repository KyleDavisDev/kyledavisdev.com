import Image from "next/image";
import Link from "next/Link";
import styled from "../../theme/styled-components";

export const StyledContainer = styled.div`
  padding: 2em;
`;

export const StyledProjectsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const StyledGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const StyledProject = styled.div`
  padding: 5px 10px 15px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  position: relative;

  // tablets
  @media (min-width: ${props => props.theme.exToSm}) {
    max-width: 50%;
  }

  // desktop
  @media (min-width: ${props => props.theme.mdToLg}) {
    max-width: 33%;
  }
`;

export const StyledAnchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  margin-bottom: 5px;
  padding: 10px !important;
  border: 1px solid rgba(0, 0, 0, 0.125) !important;
  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: transparent;
    opacity: 0.8;
  }
`;
