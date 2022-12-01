import React from 'react';

import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header id="header"
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>
        <div id="img-voiture"></div>
        <div id="paragraphe"><p>▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).<br></br>
          Notre expérience est à votre service pour répondre à toutes vos demandes</p></div>
        <hr></hr>
        <div id="INSCRIPTION"><h1>INSCRIPTION</h1></div>
        <div id="before-button-radio">Je suis :</div>
        <div id="entreprise-input"><input type="radio" value="entreprise" name="entreprise" /> Une entreprise</div>
        <div id="particulier-input"><input type="radio" value="particulier" name="particulier" /> Un particulier</div>
      </section>
    </article>
  );
};
