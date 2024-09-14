import type { PageLoad } from "./$types";

// object type
type ApiMonster = {
	name: string,
	url: string
}
// explain object 'ApiMonster' type 
export type IndexMonster = ApiMonster &{
	id: string,
	image: string
}

export const load =  (async ({fetch}) => {
	// fetch data from pokeapi
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	// convert response to json
	const json = await response.json();
	// map the json to the IndexMonster type
	const monsters: IndexMonster[] = json.results.map((monster: ApiMonster ) => {	
		const splitUrl = monster.url.split('/');
		const id = splitUrl[splitUrl.length - 2];
		return {
			name : monster.name,
			url : monster.url,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
		}
	})

    return {
        monsters
    }

}) satisfies PageLoad