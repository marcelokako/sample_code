import styled from 'styled-components';


export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  overflow-y: auto;
  padding:25px;

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
  margin-top: 30.17px;
  margin-bottom:27px;

  @media (max-width: 1439px) {
    display: none;
  }
`;


export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinha os itens no final do container */
  align-items: center;
  width: 1445px;
  height: 740px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #CBD5E1;
  background: rgba(255, 255, 255, 0.50);
`;

export const Timer = styled.div`
  /* Estilos para o Timer */
`;

export const Mixer = styled.div`
  display: flex;

  width: 1370px;
  height: 400px;
  border-radius: 6px;
  border: 1px solid #E5E7EB;
  background: #FFF;
  margin-top: auto; /* Empurra o componente para a parte inferior */
`;

export const MixerSection1 = styled.div`
  color: var(--slate-400, #4B749F);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.1px;
  padding: 22px;


  .ant-slider-rail, .ant-slider-track {
    width: 7px;
  }
  .ant-slider-track {
    background: var(--slate-400, #4B749F);
    color: var(--slate-400, #4B749F);
  }


  div{
    display: flex;
    flex-direction: row;
    justify-content: center; /* Alinha os itens no final do container */
    align-items: center;
    position: relative;
  }
`;

export const Pitch = styled.div`
  bottom:-10px;
  position: absolute;
  left:-10px ;
`;

export const Spreed = styled.div`
  bottom:-10px;
  position: absolute;
  right:20px ;
`;

export const Volume = styled.div`
  bottom:-10px;
  position: absolute;
  right:20px ;
`;

export const Autotune = styled.div`
  bottom:-10px;
  position: absolute;
  right:33px ;
`;
export const MixerSection2 = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.1px;
  color: var(--slate-900, #023059);
`;

export const AudioPlayer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top:10px;

  img{
    &:hover {
      cursor: pointer;
     }
  }
`;

