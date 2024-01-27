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

            const player = new Tone.Player(`stems/${data[0].userid}/vocal-isolado.wav`);

            const pitch_shift = new Tone.PitchShift({
                pitch: 0
            }).toDestination();

            current_users[data[0].userid] = {
                "player": player,
                "pitch_shift": pitch_shift
            }

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
    })
})
