import { useState } from 'react';
import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [type, setType] = useState("normalShortSleeve")
  const [color, setColor] = useState("yellow")
  const [print, setPrint] = useState("Ahoj světe")

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type="normalShortSleeve" color="yellow" print="Ahoj světe" />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup />
        </div>
      </div>
    </div>
  );
};
