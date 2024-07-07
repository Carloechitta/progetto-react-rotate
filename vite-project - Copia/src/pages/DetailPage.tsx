import { useState } from "react";
import usePokeDetail from "../hooks/usePokeDetail";

const DetailPage = () => {
    const { pokemon, isLoading } = usePokeDetail();
    const [showFront, setShowFront] = useState<boolean>(true);

    if (isLoading) return <h1 className="text-center">Loading...</h1>;
    if (pokemon) {

        const toggleImage = () => {
            setShowFront(!showFront);
        }

        const imageUrl = showFront ? pokemon.sprites.front_default : pokemon.sprites.back_default;

        return (
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                <h1 className="mb-5">{pokemon.name.toUpperCase()} DETAIL</h1>
                <div className="card" style={{ width: "18rem" }}>
                    {imageUrl && (<img src={imageUrl} alt={pokemon.name} />)}
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
                        <p className="card-text">
                            {pokemon.abilities.map((ability) => (
                                <li className="text-center" style={{ listStyle: "none" }} key={ability.ability.name}>{ability.ability.name.toUpperCase()}
                                </li>
                            ))}
                        </p>
                        <button className="btn btn-primary" onClick={toggleImage}>
                            Rotate
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPage;