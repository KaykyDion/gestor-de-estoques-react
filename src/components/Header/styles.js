import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  nav {
    display: flex;
    gap: 20px;
    align-items: center;

    a {
      color: #eee;
    }

    button {
      font-size: 14px;
    }
  }
`;
