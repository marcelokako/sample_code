import React, { memo, useState, useEffect, useRef } from "react";
import * as S from './styles';


const AudioPlayer = ({ audioURL }) => {
   
    const progresssRef = useRef();
    const [audio, setAudio] = useState(new Audio(audioURL));
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        setAudio(new Audio(audioURL));
        return () => {
          audio.pause();
          audio.src = '';
        };
      }, [audioURL]);

      useEffect(() => {
        const updateTime = () => {
          setCurrentTime((audio.currentTime/audio.duration)*progresssRef.current.offsetWidth);
          setDuration(audio.duration);
        };
    
        audio.addEventListener('timeupdate', updateTime);
    
        return () => {
          audio.removeEventListener('timeupdate', updateTime);
        };
      }, [audio]);
      
    const onClickProgress = (e) => {
        const seekTime = (e.nativeEvent.offsetX / progresssRef.current.offsetWidth) * duration;
        audio.currentTime = seekTime;
        setCurrentTime(seekTime);
        
      };
      

    

    return (
        <S.AudioPlayer>
            {/* <audio ref={audioRef} className="player" src="/user_1_resultado_trim_unmixed.wav"></audio> */}
            <img src="/play-circle.svg" onClick={()=>audio.play()} alt="mesinha de dj"  style={{ width: '53px', height: '53px'}}/>
            <img src="/pause.svg" alt="mesinha de dj" onClick={()=>audio.pause()}  style={{ width: '53px', height: '53px'}}/>
            <S.ProgressBar ref={progresssRef} onClick={onClickProgress}>
                <div className="progress" style={{width: `${currentTime}px`}}></div>
            </S.ProgressBar>
        </S.AudioPlayer>
      
    );
  }

export default memo(AudioPlayer);