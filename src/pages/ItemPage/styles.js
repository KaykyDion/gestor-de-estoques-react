import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  fler-wrap: wrap;
  gap: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  background-color: #000;
  padding: 16px;
  text-align: center;
  border-radius: 4px;
`;

export const Description = styled.p`
  color: #a7a6a6;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
