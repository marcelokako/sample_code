import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%; 
    height: 100%;
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
    

`;

export const WrapperLogo = styled.div`
    
    width: 903px;
    height: 162px;
    flex-shrink: 0;
     
  
`;
export const WrapperMain = styled.div`
    margin-top: 81px;
    display: flex;
    width: 727px;
    height: 308px;
    padding: 24px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #CBD5E1;
    background: rgba(255, 255, 255, 0.50);
  
`;

export const WrapperAction = styled.div`
    margin-top: 16px;
    display: flex;
    width: 727px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: self-end;
    gap: 16px;

  
`;

export const ButtonCadastrar = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #96ADC6;
    border-radius: 6px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    cursor: pointer;
`;

export const WrapperUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

export const WrapperAvatar = styled.div`
    display: flex;
    width: 260px;
    height: 260px;
    flex-direction: column;
    align-items: center;
    position: relative;
    

`;

export const Avatar = styled.div`
    display: flex;
    width: 260px;
    height: 260px;
    padding: 8.813px 24.445px 0px 24.45px;
    justify-content: center;
    align-items: center;
    border-radius: 100000000px;
    border: 5px solid #033059;
    background: #B9C1CA;
    flex-shrink: 0;
    
    
`;

export const ContainerSetas = styled.div`
    width: 260px;
    height: 260px;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    bottom: 25px;
`;

export const Seta = styled.img`
    cursor: pointer;
    width: 46.667px;
    height: 46.667px;
    flex-shrink: 0;
`;


export const ConteinerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`;

export const TitleH2 = styled.h2`
    color: var(--slate-900, #023059);
    /* h2 */
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; /* 120% */
    letter-spacing: -0.225px;
`;

export const Subtle = styled.b`
    width: 377px;
    color: #033059;

    /* subtle-medium */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
`;

export const Input = styled.input`
    display: flex;
    padding: 8px 12px;
    align-items: center;
    flex: 1 0 0;
    border-radius: 6px;
    border: 1px solid #CBD5E1;
    background: #FFF;
    width: 100%;
    color: #0F172A;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */

    &:focus {
        border: 1px solid #CBD5E1; // Mantém a mesma borda ao focar
        outline: none; // Remove qualquer contorno de foco adicional
    }
`;
export const ContainerButtonCriarSala = styled.div`
    display: flex;
    width: 377px;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

`;
export const ButtonCriarSala = styled.button`
   display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #023059;
    border-radius: 6px;
    background: var(--slate-900, #023059);
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    cursor: pointer;
`;
