import styled from 'styled-components';


export const Conteiner = styled.div`
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

export const TitleWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    color: #024A59;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; 
`;

export const GamesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    max-height: 570px;
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
    p{
        color: var(--slate-900, #023059);
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 36px; /* 120% */
    }

    .refrao-game {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:15px;

        &:hover {
            cursor: pointer;
        }

        p {
            color: var(--slate-900, #023059);
            font-size: 30px;
            font-style: normal;
            font-weight: 900;
            line-height: 36px; /* 120% */
        }
    }
`;


export const CardGame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center; 
    width: 359px; 
    height: 303px;
    padding: 16px;
    border-radius: 6px;
    background: #BFCDDD;
    box-shadow: 0px 4px 4px 0px rgba(174, 174, 174, 0.25);
    
`;


