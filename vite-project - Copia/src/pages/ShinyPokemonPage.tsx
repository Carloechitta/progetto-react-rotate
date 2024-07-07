import { useState } from "react";
import usePokeDetail from "../hooks/usePokeDetail";

const ShinyPokemonPage = () => {
    const { pokemon, isLoading } = usePokeDetail();
    const [showFront, setShowFront] = useState<boolean>(true);

    if (isLoading) return <h1>Loading...</h1>
    if (pokemon) {

        const imageUrl = showFront ? pokemon.sprites.front_shiny : pokemon.sprites.back_shiny;

        const toggleImage = () => {
            setShowFront(!showFront);
        }

        return (
            <div className="container">
                <h1 className="text-center my-5">SHINY {pokemon.name.toUpperCase()} DETAIL</h1>
                <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        {imageUrl && (<img src={imageUrl} className="card-img-top" alt={pokemon.name} />)}
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
                            <p className="card-text">
                                {pokemon.abilities.map((ability) => (
                                    <li className="list-group-item text-center">{ability.ability.name.toUpperCase()}</li>
                                ))}
                            </p>
                            <button className="btn btn-primary" onClick={toggleImage}>
                                Rotate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShinyPokemonPage; 