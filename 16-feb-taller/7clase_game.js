class Game {
    constructor(title, minPlayers, maxPlayers) {
        this.title = title;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
    }

    describe() {
        return `Juego: ${this.title} (${this.minPlayers}-${this.maxPlayers} jugadores)`;
    }
}

class VideoGame extends Game {
    constructor(title, minPlayers, maxPlayers, platform) {
        super(title, minPlayers, maxPlayers);
        this.platform = platform;
    }

    describe() {
        return `${super.describe()} - Plataforma: ${this.platform}`;
    }

    isMultiplayer() {
        return this.maxPlayers > 1;
    }
}

const fifa = new VideoGame("EA FC 24", 1, 4, "PlayStation 5");
console.log(fifa.describe());
console.log("Es multiplayer: " + fifa.isMultiplayer());