import styled from "styled-components";

export const InfoBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;
