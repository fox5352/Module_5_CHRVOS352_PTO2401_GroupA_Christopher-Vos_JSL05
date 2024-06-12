// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "abracadabra", artist: "steve miller band", genre:"Rock" },
    { title: "Youth8500", artist: "DROIDS OSAKA", genre: "Rock"},
    { title: "White Lights", artist: "Me My Head", genre: "Rock"},
    { title: "Sway", artist: "Anita Kelsey", genre: "Pop" },
    { title: "The Night Has A Thousand Eyes", artist: "Anita Kelsey", genre:"Pop"}
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = [];

    for (const key in guardians) {
        const genre = guardians[key];
        // filters out non matching genres
        const playlist = songs.filter(song => song.genre === genre);
        
        playlists.push({guardian: key, playlist: playlist,});
    }

    // gets playlistTag 
    const playlistTag = document.getElementById("playlists");

    // maps playlists into divs for each guardian with there prefered genres
    playlists.map(playlist =>{

        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");
        
        playlistDiv.innerHTML = `
            <h2>${playlist.guardian}</h2>

            ${playlist.playlist.map(song => 
                `<p class="song">
                    <span class="song-title">${song.title}</span> - ${song.artist}
                </p>`
            ).join("")}
        `;
        
        playlistTag.appendChild(playlistDiv);
    })
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
