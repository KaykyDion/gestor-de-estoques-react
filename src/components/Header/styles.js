import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  a {
    color: #eee;
  }

  @media (max-width: 375px) {
    align-items: start;
  }

  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      gap: 20px;
      align-items: center;

      @media (max-width: 375px) {
        flex-direction: column;
        gap: 10px;
      }
    }

    button {
      font-size: 14px;
    }
  }
`;
