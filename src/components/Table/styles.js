import styled from "styled-components";

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

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 10px;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
