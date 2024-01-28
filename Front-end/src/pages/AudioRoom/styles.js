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

    .div-inf-next{
        display: flex;
        width: 1144px;
        height: 92px;
        padding: 16px;
        align-items: center;
        gap: 16px;
        flex-shrink: 0;
        border-radius: 6px;
        border: 1px solid #E5E7EB;
        background: #FFF;
    }
    .p-inf{
        width: 282px;
        color: var(--slate-900, #023059);
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 33px; /* 103.125% */
    }
    .p-tema{
        width: 100%;
        color: var(--slate-900, #023059);
        /* h1 */
        font-family: Inter;
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        line-height: 48px; /* 100% */
        letter-spacing: -0.576px;
    }

    .p-inf-next{
        width: 1095px;
        color: var(--slate-900, #023059);
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 33px; /* 137.5% */
    }

    .btn-proximo{
        display: inline-flex;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 6px;
        background: var(--amber-900, #F2B705);
        color: #033059;

        /* large */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 155.556% */
        margin-top: 14.91px;

            }

`;

export const WrapperLogo = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 7.19px;

    @media (max-width: 1439px) {
        display: none;
    }
     
  
`;
export const WrapperMain = styled.div`
    display: flex;
    justify-content: space-between;
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


export const ConteinerInf = styled.div`

    display: flex;
    width: 261px;
    height: 92px;
    padding: 16px;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #E5E7EB;
    background: #FFF;

`;

export const ConteinerPlayer = styled.div`
    display: flex;
    width: 610px;
    height: 92px;
    padding: 17px;
    justify-content: start;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #E5E7EB;
    background: #FFF;
`;

export const ConteinerTema = styled.div`
    display: flex;
    height: 92px;
    padding: 16px;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(--amber-900, #F2B705);
    box-shadow: 0px 4px 4px 0px rgba(174, 174, 174, 0.25);

`;
export const AudioPlayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 16px;
  margin-top:10px;

  img{
    &:hover {
      cursor: pointer;
     }
  }
`;



