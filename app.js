const content = document.querySelector('.content');

const fetchPokemon = async () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    for (let i = 1; i <= 151; i++) {

        const fetchData = await fetch(getPokemonUrl(i));
        const pokemonData = await fetchData.json();

        const container = document.createElement('div');
        container.className = 'container';

        const circle = document.createElement('div');
        circle.className = 'circle';

        const img = document.createElement('img');
        img.src = pokemonData.sprites.other['official-artwork'].front_default;

        const h2 = document.createElement('h2');
        h2.textContent = pokemonData.name;

        const types = document.createElement('div');


        content.append(container);
        container.append(circle);
        container.append(img);
        container.append(h2);

        for (let i = 0; i <= pokemonData.types.length - 1; i++) {
            const span = document.createElement('span');
            span.textContent = pokemonData.types[i].type.name;
            span.className = pokemonData.types[i].type.name;
            types.append(span);
            container.append(types);
        }
    }
}

fetchPokemon();