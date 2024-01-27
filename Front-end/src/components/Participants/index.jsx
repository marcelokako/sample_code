import React, { memo } from "react";
import * as S from './styles';
import Avatar from './../../assets/avatar-cacti-cactus-svgrepo-com.svg'

const Participants = () => {
  console.log("333333333333333")
  return (
    <S.Conteiner>
      <S.TitleWrapper>
      PARTICIPANTES
      </S.TitleWrapper>
      <S.ParticipantsWrapper>
        <S.CardParticipants className="active-participant">
          <S.Avatar>
            <img src={Avatar}  alt="avatar" style={{width:'56px', height: '56px' }}></img>
          </S.Avatar>
          <S.WrapperPlayerInfo>
            <S.Player>
              ABOBRINHA
            </S.Player>
            <S.typeOfPlayer>
              Host
            </S.typeOfPlayer>
          </S.WrapperPlayerInfo>
        </S.CardParticipants>
        <S.CardParticipants>
        </S.CardParticipants>
        <S.CardParticipants>
        </S.CardParticipants>
        <S.CardParticipants>
        </S.CardParticipants>
        <S.CardParticipants>
        </S.CardParticipants>

      </S.ParticipantsWrapper>
    </S.Conteiner>
  );
}

export default memo(Participants);
