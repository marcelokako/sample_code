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

    .refrao-game{
        border-radius: 6px;
        border: 8px solid var(--slate-900, #023059);
        background: #FFF;
    }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 53.19px;

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

  .button-position {
    position: absolute;
    top: -60px; // Ajuste este valor conforme necessário
    left: 0;   // Ajuste este valor conforme necessári
    background: #023059;
    color: #ffff;
  }
`;
export const WrapperAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 18px;
  margin-top: 45px;
  margin-bottom: 90px;

  @media (max-width: 1439px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

  