import styled from 'styled-components';


export const Conteiner = styled.div`
    display: flex;
    width: 512px;
    height: 647px;
    padding: 24px;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: flex-start;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #CBD5E1;
    background: rgba(255, 255, 255, 0.50);
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    font-family: Inter;
    color: #024A59;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px; 
`;

export const ParticipantsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
    align-items: center;

    .active-participant{
        display:flex;
        flex-direction: row; 
        gap: 16px;
        border-radius: 6px;
        border: 4px solid var(--amber-900, #F2B705);
        background: #FFF;
    }
`;

export const CardParticipants= styled.div`
    width: 464px;
    height: 92px;
    padding: 16px;
    border-radius: 6px;
    background: #BFCDDD;
    box-shadow: 0px 4px 4px 0px rgba(174, 174, 174, 0.25);
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

export const WrapperPlayerInfo = styled.div`
    display:flex;
    flex-direction: column;
    gap:4px;

`;

export const Player = styled.div`
    color: var(--slate-900, #023059);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
`;

export const typeOfPlayer = styled.div`
    color: #0F172A;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
`;