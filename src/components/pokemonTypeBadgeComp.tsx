"use client";

import { Badge } from "react-bootstrap";

interface PokemonCardCompProps {
    pokemonTypes: String[];
}

export default function PokemonTypeBadgeComp(props: PokemonCardCompProps) {
    return (
        <>
            {props.pokemonTypes.map((pokemonType, index) => {
                if (pokemonType === "Water") {
                    return <Badge key={index} bg="primary">{pokemonType}</Badge>
                } else if (pokemonType === "Fire") {
                    return <Badge key={index} bg="danger">{pokemonType}</Badge>
                } else {
                    return <Badge key={index} bg="secondary">{pokemonType}</Badge>
                }
            })}
        </>
    );
}
