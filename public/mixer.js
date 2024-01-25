$(document).ready(function() {
   
    console.log(users);
    // Add the user to the database here

    const player = new Tone.Player(`stems/${userId}/vlc-record-2024-01-24-17h34m27s-Careless Whisper-.mp3`);

    const pitch_shift = new Tone.PitchShift({
        pitch: 0
    }).toDestination();

    $("#btn_start_audio").on("click", function() {
        if(player.context.state == "suspended"){

            let pitch_val = $("#input_pitch_value").val();
            pitch_shift.pitch = pitch_val;
            player.disconnect();
            player.connect(pitch_shift);
            player.start();
        } else if (player.context.state == "running"){
           let offset = $("#btn_start_audio").data("pausado");
           player.start(0, offset)
        }
    })
    
    $("#input_pitch_value").on("change", function(){
        pitch_shift.pitch = $(this).val();
    })

    $("#btn_pause_audio").on("click", function() {
        if(player.context.state == "running"){
            player.stop();
            $("#btn_start_audio").data("pausado", player.now());
        }
    })

    $("#check_context").on("click", function() {
        console.log(player.context.state);
    })
})
