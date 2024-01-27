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

    .img-autofalante{
        width: '498.675px'; 
        height: "579.933px";
        transform: rotate(11.461deg);
        flex-shrink: 0;
    }

    .div-main{
        display: flex;
        align-items: center;
        
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
    justify-content: flex-start;
    align-items: start;
    gap: 22px;
    position: relative;
    margin-top:39px;
    width: 1345px;
    height: 700px;
    padding: 24px;
    flex-direction: column;
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
    flex-direction: column;
    justify-content: end;
    align-items: self-start;
    gap: 16px;

  
`;

export const ButtonEnviar = styled.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    border-radius: 6px;
    background: var(--slate-900, #023059);
    color: #FFF;
    cursor: pointer;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 140% */
    letter-spacing: -0.1px;
    `;


export const Input = styled.input`
    display: flex;
    padding: 8px 56px 8px 12px;
    align-self: stretch;
    align-items: center;
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

export const Label = styled.label`
    color: var(--slate-900, #023059);
    /* h3 */
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.144px;
`; 

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    flex: 1 0 0;

`; 

export const ConteinerInf = styled.div`

    display: flex;
    width: 467px;
    height: 92px;
    padding: 16px;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #E5E7EB;
    background: #FFF;

    color: var(--slate-900, #023059);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px; /* 137.5% */
`;

export const ConteinerPlayer = styled.div`

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

export const DivEnviar = styled.div`
    display: flex;
    width: 606px;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
  `;
