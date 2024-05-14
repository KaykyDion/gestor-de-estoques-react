import styled from "styled-components";

export const Form = styled.form`
  display: block;

  .inputsContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    color: #eee;
    background-color: #000;
    border-radius: 4px;
    border: none;
    resize: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
  }

  select {
    background-color: #000;
    color: #eee;
    padding: 8px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;
