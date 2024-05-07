import styled from "styled-components";

export const TabContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
  padding-left: 16px;
  border-bottom: 1px solid #a7a7a7;

  a {
    color: #eee;
  }

  .is-active {
    border-bottom: 1px solid #eee;
  }
`;
