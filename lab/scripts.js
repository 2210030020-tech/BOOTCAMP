let data=[]

const getAnime = async () => {
    const response = await fetch("https://api.jikan.moe/v4/anime");
    console.log(response);
    data = await response.json();
    console.log(data);
    const animeHTML = data.data.map((anime)=>{
        return `
            <div>
                <h3>${anime.title}</h3>
                <img src=${anime.images.jpg.image_url} />
            </div>
        `
    })
    return animeHTML;
}

const renderAnime = async () => {
    document.getElementById("animeList").innerHTML = await getAnime();
}

const filterAnime = () => {
    const getQuery = document.getElementById("searchBox").value;
    console.log(getQuery);
    console.log(data);
    const filteredAnime = data.data.filter((anime) => 
        anime.title.toLowerCase().includes(getQuery.toLowerCase())
    );

    const animeHTML = filteredAnime.map((anime) => `
        <div>
            <h3>${anime.title}</h3>
            <img src=${anime.images.jpg.image_url} />
        </div>
    `).join('');
    document.getElementById("animeList").innerHTML = animeHTML;
}

renderAnime();