// Array of games
let games = [
    {
        id: "1",
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"]
    },
    {
        id: "2",
        title: "God of War",
        platform: ["PlayStation 4"]
    },
    {
        id: "3",
        title: "Halo Infinite",
        platform: ["Xbox Series X", "Xbox One"]
    }
];

// Array of reviews
let reviews = [
    {
        id: "1",
        rating: 5,
        content: "An incredible adventure that redefined the open-world genre.",
        author_id: "1",
        game_id: "1"
    },
    {
        id: "2",
        rating: 4,
        content: "Great story and characters, but some gameplay elements feel dated.",
        author_id: "2",
        game_id: "2"

    },
    {
        id: "3",
        rating: 3,
        content: "Solid mechanics, but it lacks depth in the narrative.",
        author_id: "3",
        game_id: "3"
    },
    {
        id: "4",
        rating: 7,
        content: "Solid mechanics, but it lacks depth in the narrative.",
        author_id: "3",
        game_id: "3"
    }
];

// Array of authors
let authors = [
    {
        id: "1",
        name: "Jane Doe",
        verified: true
    },
    {
        id: "2",
        name: "John Smith",
        verified: false
    },
    {
        id: "3",
        name: "Alice Johnson",
        verified: true
    }
];

export default {games, authors, reviews}