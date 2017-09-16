import React from "react";
import MainMission from "../abstracts/MainMission";

class MainOmnilog extends React.Component {
  render() {
    return (
      <MainMission title="Mission : L'Equipe">
        <dl>
          <dt>
            <strong>
              Développement d'une application serverless d'upload video:
            </strong>
          </dt>
          <dd>
            <p>
              Développement d'une application relai vidéo<br />
              Récupération et dispatch de vidéos vers des providers multiples
              (Dailymotion et YouTube)<br />
              Gestion et enregistrement des metadonnées<br />
              Développement et conception effectués en solitaire
            </p>
            <em>Stack technique : </em>
            <ul>
              <li>Amazon Web Services (AWS) Lambda, Node.JS 6</li>
            </ul>
          </dd>
          <dt>
            <strong>Support applicatif :</strong>
          </dt>
          <dd>
            <p>
              Amélioration de l'outil d'upload interne<br />
              Préparation à l'export de statistiques vidéos<br />
            </p>
          </dd>
        </dl>
      </MainMission>
    );
  }
}

export default MainOmnilog;