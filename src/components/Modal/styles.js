import styled from "styled-components";

export const ModalStyle = styled.div`
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49, 49, 49, 0.8);
  }

  .modalContent {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    background-color: #363636;
    padding: 14px 28px;
    border-radius: 4px;
    max-width: 600px;
    min-width: 300px;
  }
`;
