import PokemonsComp from "@/components/pokemonsComp";
import PokeNavBar from "@/components/pokeNavBarComp";
import PokemonCard from "@/model/pokemonCard";

export default function Home() {

  const testData: PokemonCard[] = [{
    pokemonNumber: 2,
    pokemonName: "Ivysaur",
    pokemonType: ["Grass", "Poison"],
    mainImage: "https://pokemon-aub-awe-workshop.s3.eu-west-2.amazonaws.com/2/mainImage.png"
  },
  {
    pokemonNumber: 7,
    pokemonName: "Squirtle",
    pokemonType: ["Water"],
    mainImage: "https://pokemon-aub-awe-workshop.s3.eu-west-2.amazonaws.com/7/mainImage.png"
  },
];


  return (
    <>
      <PokeNavBar></PokeNavBar>
      <PokemonsComp pokemons={testData}></PokemonsComp>
    </>
  );
}
