const cohortCode = "2401-FTB-MT-WEB-PT"
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`

const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}/players`);
      const result = await response.json();
      
      if(result.error) throw result.error;

      return result.data.players
  
    } catch (err) {
      console.error("Uh oh, trouble fetching players!", err);
    }
  };

  const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const result = await response.json();

        if (result.error) throw result.error;
        return result.data.player;
        
    } catch (err) {
        console.error('Uh oh, trouble fetching player!', err);
    }
};

const playerTeam = async () => {
  try {
    const response = await fetch(`${API_URL}/teams`);
    const result = await response.json();

    console.log(result);

  } catch (err) {
    console.error(err);
  }
};


export {fetchAllPlayers, fetchSinglePlayer, playerTeam}