import { useState } from "react";

function App() {
  //Mes variables d'état
  const [tirage, setTirage] = useState(0);
  const [historiqueTirage, setHistoriqueTirage] = useState([]);
  const [bigNumber, setBigNumber] = useState(0);

  // ma fonction va me permettre de changer l'état de tirage en utilisant ma variable d'état setTirage
  const handleButton = () => {
    setTirage(Math.floor(Math.random() * 90));

    // si mon tableau inclu tirage alors je retourne null sinon je le pousse dans mon tableau tirage
    if (historiqueTirage.includes(tirage)) {
      return null;
    } else {
      setHistoriqueTirage([...historiqueTirage, tirage]);
    }

    //si mon tableau contient des nombres alors je lance ma fonction de vérification du plus grand nombre. Sinon je n'ai pas besoin, j'optimise mon code
    if (historiqueTirage.length > 0) {
      handleBigNumber();
    }
    console.log("historique", historiqueTirage);
  };

  //boucle sur mon tableau de tirage
  const renderMyTirage = () => {
    if (historiqueTirage.length >= 0) {
      return historiqueTirage.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      });
    }
  };

  //fonction pour trouver le plus grand nombre de mon tableau

  const handleBigNumber = () => {
    let largest = 0;

    for (let i = 0; i < historiqueTirage.length; i++) {
      if (largest < historiqueTirage[i]) {
        largest = historiqueTirage[i];
      }
    }
    setBigNumber(largest);
  };

  // permet de changer ma variable d'état grace à mon input
  const handleChange = (e) => {
    setBigNumber(e.target.value);
  };

  return (
    <div className="App">
      <h1> Jouons au loto</h1>
      <button onClick={handleButton}>JOUER</button>
      <h5>Le numéro complémentaire est {tirage}</h5>
      <input onChange={handleChange} placeholder="changer mon tirage" />
      {bigNumber > 0 ? (
        <h5>Votre plus gros numéro est le {bigNumber}</h5>
      ) : (
        <h5>Vous n'avez pas de numéros</h5>
      )}

      <h5>Mes numéros tirés</h5>
      {renderMyTirage()}
    </div>
  );
}

export default App;
