$(document).ready(function() {
    let current_users = {};
    
    get_user_url_song()
    function get_user_url_song(){

        fetch(`/song/user/${1}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao obter dados do banco');
          }
          return response.json();
        })
        .then(data => {
            console.log('Dados recebidos:', data);

            data.map((r)=>{
                const player = new Tone.Player(`stems/${r.userid}/resultado_user_1.wav`);
    
                const pitch_shift = new Tone.PitchShift({
                    pitch: 0
                }).toDestination();
    
                current_users[r.userid] = {
                    "player": player,
                    "pitch_shift": pitch_shift
                }
            })

        })
        .catch(error => {
          console.error('Erro:', error.message);
        });
    }


    $("#btn_start_audio").on("click", function() {
        if(current_users["1"]["player"].context.state == "suspended"){
        // player -> current_users["1"]["player"] 
        // pitch_shift -> current_users["1"]["pitch_shift"] 
        
            let pitch_val = $("#input_pitch_value").val();
            current_users["1"]["pitch_shift"].pitch = pitch_val;
            current_users["1"]["player"].disconnect();
            current_users["1"]["player"].connect(current_users["1"]["pitch_shift"]);
            current_users["1"]["player"].start();
        } else if (current_users["1"]["player"].context.state == "running"){
           let offset = $("#btn_start_audio").data("pausado");
           current_users["1"]["player"].start(0, offset)
        }
    })
    
    $("#input_pitch_value").on("change", function(){
        current_users["1"]["pitch_shift"].pitch = $(this).val();
    })

    $("#btn_pause_audio").on("click", function() {
        if(current_users["1"]["player"].context.state == "running"){
            current_users["1"]["player"].stop();
            $("#btn_start_audio").data("pausado", current_users["1"]["player"].now());
        }
    })

    $("#check_context").on("click", function() {
        console.log(current_users["1"]["player"].context.state);
        send_user_result(Object.keys(current_users)[0]);
    })

    async function send_user_result(user_id){
        obj_resultado = {
            user_id,
            pitch_shift_value: "",
            speed_value: "",
            auto_tune_value: "",
            volume_value: "",
        }
        await fetch(`/user/result`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(obj_resultado)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro enviar arquivos para juntar');
          }
          window.location.href = '/result.html';//redirect
        })
        .catch(error => {
          console.error('Erro:', error.message);
        });
    }
})
