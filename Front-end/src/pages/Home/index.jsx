import React, { memo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import logo from './../../assets/Logo-symphonIA.svg'
import SD from './../../assets/Seta-direita.svg'
import SE from './../../assets/Seta-esquerda.svg'
import Avatar from './../../assets/avatar-cacti-cactus-svgrepo-com.svg'
// import Icon from "./Icon.jsx"
const Home = () => {

  const [username, setUsername] = useState(null);
  const [ placeholderText, setPlaceholder]= useState("Ex: Abobrinha");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };
  const ButtonCriarSala = () => {
    if (username && username.trim() !== "") {
      localStorage.setItem('user', username.trim());
      setTimeout(() => {
        navigate('/waiting-room');
      }, 500);
    } else {
      setPlaceholder("Nome de usuário está vazio");
    }
  };

  const ButtonSetaDireita = () =>{
    console.log('seta direita');
  }
  
    return (
      <S.Conteiner>

      <S.WrapperLogo>
        <img src={logo} alt="logo"></img>
      </S.WrapperLogo>

      <S.WrapperMain>

        <S.WrapperAvatar>
          
          <S.Avatar>
            <img src={Avatar}  alt="avatar"></img>
          </S.Avatar>

          <S.ContainerSetas>
            <S.Seta src={SE} alt="logbotão esquerda"/>
            <S.Seta onClick={ButtonSetaDireita} src={SD} alt="botão direita"/>
          </S.ContainerSetas>
          
        </S.WrapperAvatar>

        <S.WrapperUser>
        <S.ConteinerText>
            <S.TitleH2>
            Perfil anônimo
            </S.TitleH2>
            <S.Subtle>
            Escolha seu username e seu avatar e comece a jogar!
            </S.Subtle>
            <S.Input value={username} onChange={handleInputChange} placeholder={placeholderText} />
            <S.ContainerButtonCriarSala>
              <S.ButtonCriarSala onClick={ButtonCriarSala}>
                Criar Sala
              </S.ButtonCriarSala>
            </S.ContainerButtonCriarSala>
          </S.ConteinerText>
          
        </S.WrapperUser>

      </S.WrapperMain>

      <S.WrapperAction>

        <S.ButtonCriarSala >
            Logar
        </S.ButtonCriarSala>
    

        <S.ButtonCadastrar>
          Cadastre-se
        </S.ButtonCadastrar>

      </S.WrapperAction>

      </S.Conteiner>
    );
  }

export default memo(Home);