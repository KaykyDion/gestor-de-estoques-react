import styled from "styled-components";

export const HomeStyle = styled.main`
  background-color: #363636;
  padding: 30px;
  border-radius: 8px;
  h1 {
    font-weight: normal;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

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

export const Table = styled.table`
  width: 49%;
  margin-top: 20px;
  border-collapse: collapse;

  thead {
    background-color: #000;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  th,
  td {
    text-align: left;
    padding: 15px;
    font-size: 18px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;
