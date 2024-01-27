import styled from 'styled-components';

export const Conteiner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    padding: 24px;
    flex-direction: column;
    justify-content: center; /* Alterado de center para flex-start */
    align-items: center;
    

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

export const ButtonLogar = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: var(--slate-900, #023059);
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    cursor: pointer;
`;
export const ButtonCadastrar = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid var(--slate-200, #96ADC6);
    background: var(--slate-50, #E6EBF1);
    color: #0F172A;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
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
    z-index: 1;
    position: absolute;
    top: 255px;

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
    font-family: Inter;
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
    font-family: Inter;
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

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
`;
export const ContainerButtonCriarSala = styled.div`
    display: flex;
    width: 377px;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;

`;
export const ButtonCriarSala = styled.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    background: var(--slate-900, #023059);
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    cursor: pointer;
`;
