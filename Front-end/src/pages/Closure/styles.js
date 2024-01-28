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
    flex-direction: column;
    justify-content: flex-start; /* Alterado de center para flex-start */
    align-items: flex-start;
    gap: 16px;
    width: 795px;
    height: 647px;
    padding: 24px;
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

export const TileWrapper = styled.div`
  color: var(--slate-900, #023059);
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 120% */
  letter-spacing: -0.225px;
`;
export const ThemeWrapper = styled.div`
  
`;
export const User = styled.div`
  color: var(--slate-900, #023059);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AudioWrapper = styled.div`
  
`;

export const Theme = styled.div`
  display: inline-flex;
  height: 82px;
  padding: 16px;
  width: 470px;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 6px;
  background: var(--amber-900, #F2B705);
  box-shadow: 0px 4px 4px 0px rgba(174, 174, 174, 0.25);
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: -0.576px;
  color: var(--slate-900, #023059);

`;

export const Audio = styled.div`
  display: flex;
  width: 610px;
  height: 92px;
  padding: 17px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #E5E7EB;
  background: #FFF;
`;
