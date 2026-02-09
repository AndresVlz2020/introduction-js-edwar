// Metodos de propiedad

const player = {
    play : function(id){
        console.log("playing song...", id )
    },

    pause: function(id){
        console.log(`Pausing...., ${id}`)

    },
    delete: function(id){
        console.log(`delete...., ${id}`)
    },

    playlist: function(id){
        console.log(`Creating a playlist..., ${id}`)
    }
}

 
console.log(player);
player.play(217);
player.pause(217);
player.delete(217);
player.playlist(218);