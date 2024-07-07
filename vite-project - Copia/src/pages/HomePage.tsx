import { Link } from "react-router-dom";
import usePokeList from "../hooks/usePokeList";

const HomePage = () => {
    const { pokemon, isLoading } = usePokeList();
    if (isLoading) return <h1 className="text-center mt-4">Loading...</h1 >;
    if (pokemon?.results) return (
        <div className="container">
            <h1 className="text-center my-4">Pokemon List</h1>
            <div className="row">
                <div className="col-6">
                    <h2 className="text-center mb-4">Default</h2>
                    {pokemon.results.map((poke) => (
                        <div className="list-group-item text-center mb-3">
                            <Link to={'/' + poke.name}>{poke.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="col-6">
                    <h2 className="text-center mb-4">Shiny</h2>
                    {pokemon.results.map((poke) => (
                        <div className="list-group-item text-center mb-3">
                            <Link to={'/shiny/' + poke.name}>{poke.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage; 