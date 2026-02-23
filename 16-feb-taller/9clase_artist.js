class Artist {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }

    describe() {
        return `Artista: ${this.name} - Género: ${this.genre}`;
    }
}

class Singer extends Artist {
    constructor(name, genre, albums) {
        super(name, genre);
        this.albums = albums;
    }

    describe() {
        return `${super.describe()} - Álbumes: ${this.albums}`;
    }

    addAlbum() {
        this.albums++;
        return `¡Álbum agregado! Total: ${this.albums}`;
    }
}

const singer = new Singer("Shakira", "Pop", 11);
console.log(singer.describe());
console.log(singer.addAlbum());