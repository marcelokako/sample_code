
import styled from 'styled-components';

export const ProgressBar = styled.div`
    cursor: pointer;
    width: 414px;
    height: 16px;
    background: var(--slate-100, #BFCDDD);
    border-radius: 40px;
    
    flex-shrink: 0;

    .progress {
        height: 16px;
        border-radius: 40px;
        background: var(--amber-900, #F2B705);
        
    }
`;

export const AudioPlayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 16px;
  margin-top:10px;

  img{
    &:hover {
      cursor: pointer;
     }
  }
`;
    
