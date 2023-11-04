const plans = [
    {
        "name": "Tadpole",
        "priceEur": "2",
        "memoryGB": "1",
        "iconUrl": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5b/TadpoleFace.png/revision/latest?cb=20220119232846",
    },
    {
        "name": "Puffer Fish",
        "priceEur": "4",
        "memoryGB": "2",
        "iconUrl": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fe/PufferfishFace.png/revision/latest?cb=20180313115655",
    },
    {
        "name": "Glow Squid",
        "priceEur": "6",
        "memoryGB": "3",
        "iconUrl": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/GlowSquidFace.png/revision/latest?cb=20200804202459",
    },
    {
        "name": "Turtle",
        "priceEur": "8",
        "memoryGB": "4",
        "iconUrl": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8b/TurtleFace.png/revision/latest?cb=20180313114814",
    },
    {
        "name": "Axolotl",
        "priceEur": "10",
        "memoryGB": "5",
        "iconUrl": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4a/AxolotlFace.png/revision/latest?cb=20201216195034",
    },
    {
        "name": "Allay",
        "priceEur": "12",
        "memoryGB": "6",
        "iconUrl": "https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/81/AllayFace.png/revision/latest?cb=20221117111431",
    },
]

export async function GET(request) {
    return Response.json({ plans })
}
