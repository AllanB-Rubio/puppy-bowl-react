import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API";
import PlayerCard from "./PlayerCard";


export default function SinglePlayer () {
    const [player, setPlayer] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const {playerId} = useParams();


    useEffect(() => {
        const getPlayerByID = async () => {
            const player = await fetchSinglePlayer(playerId);
            setPlayer(player);
            setIsLoading(false);
        }
        getPlayerByID()
        
    }, [])

    if (isLoading) return <h3>Loading...</h3>

    if(!player) return <h3>404: Player not found</h3>

    return <PlayerCard key={player.id} player={player} />
}