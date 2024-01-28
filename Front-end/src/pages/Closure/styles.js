import styled from 'styled-components';


export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; 
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
        height: 475px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #024A59;
    }
        
    &::-webkit-scrollbar-track {
      background: white; // Fundo branco para a trilha da barra de rolagem
      border-radius: 5px; // Bordas arredondadas para a trilha (opcional)
    }
    

  .button-style {
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #023059;
    border-radius: 6px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    cursor: pointer;
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 22px;
  position: relative;
  margin-top:39px;
`;


export const ResultConteiner = styled.div`
    display: flex;
    width: 795px;
    height: 647px;
    padding: 24px;
    flex-direction: column;
    justify-content: flex-start; /* Alterado de center para flex-start */
    align-items: flex-end;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #CBD5E1;
    background: rgba(255, 255, 255, 0.50);
`;

export const WrapperAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 18px;
  margin-top: 45px;

  @media (max-width: 1439px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;