import React, { memo } from "react";
import * as S from './styles';
import logo from './../../assets/Logo-symphonIA.svg'

// import Icon from "./Icon.jsx"
const Home = () => {
  
    return (
      <S.Conteiner>
      <S.WrapperLogo>
        <img src={logo} alt="logo"></img>
      </S.WrapperLogo>
      <S.WrapperMain>
        <S.WrapperAvatar>
          
        </S.WrapperAvatar>
        <S.WrapperUser>
        <S.ConteinerText>
            <S.TitleH2>
            Perfil anônimo
            </S.TitleH2>
            <S.subtle>
            Escolha seu username e seu avatar e comece a jogar!
            </S.subtle>
            <S.Input/>
            <S.ContainerButtonCriarSala>
              <S.ButtonCriarSala>
                Criar Sala
              </S.ButtonCriarSala>
            </S.ContainerButtonCriarSala>
          </S.ConteinerText>
          
        </S.WrapperUser>
      </S.WrapperMain>
      <S.WrapperAction>
        <S.ButtonLogar>
          Logar
        </S.ButtonLogar>
        <S.ButtonCadastrar>
          Cadastre-se
        </S.ButtonCadastrar>
      </S.WrapperAction>
      </S.Conteiner>
    );
  }

export default memo(Home);