import React from "react";
import Detail from "../../../components/Project/Detail";
import { Link } from "react-router";

export default function ProjectCorreIALLM() {
  const project = {
    title: "CorreIA LLM",
    images: [
      "img/img-12.jpg",
      "img/img-13.jpg",
      "img/img-14.jpg",
      "img/img-15.jpg",
    ],
    projectDetails: {
      createdBy: " CorreIA LLC",
      completedOn: " Septembre 2024",
      skills: "Intelligence Artificielle",
      client: " CorreIA LLC",
      description:
        "Le projet CorreIA LLM vise à construire un modèle d’intelligence artificielle innovant pour centraliser, analyser et rendre accessibles les données publiques. En réponse aux défis sociétaux et aux besoins des entreprises, ce modèle a pour mission d’aider divers acteurs à exploiter les données pour innover et prendre des décisions stratégiques.",
    },
    objectives: [
      {
        title: "Accessibilité des données publiques:",
        description:
          "Faciliter l’accès à des informations gouvernementales essentielles pour améliorer les relations entre citoyens, entreprises et administrations.",
      },
      {
        title: "Support à l’innovation et à la prise de décision :",
        description:
          "Mettre à disposition des entrepreneurs et entreprises des informations commerciales stratégiques pour les aider à relever leurs défis et stimuler la croissance économique",
      },
    ],
    caracteristiques: [
      {
        title: "Précision :",
        description:
          "Les données fournies seront rigoureusement collectées et vérifiées pour garantir leur pertinence et leur fiabilité.",
      },
      {
        title: "Personnalisation :",
        description:
          "Les utilisateurs recevront des informations adaptées à leurs besoins spécifiques, optimisant ainsi leur utilisation des données pour atteindre leurs objectifs.",
      },
      {
        title: "Crédibilité :",
        description:
          "Chaque donnée sera authentifiée, et sa source clairement référencée pour assurer une transparence totale.",
      },
    ],
    impact: [
      {
        title: "Soutien aux entreprises et entrepreneurs :",
        description:
          "CorreIA LLM fournira des informations commerciales précieuses, permettant une prise de décision plus rapide, plus éclairée et mieux informée.",
      },
      {
        title: "Renforcement de l’interaction citoyenne :",
        description:
          "En rendant les données gouvernementales accessibles et exploitables, le projet renforcera les échanges entre les citoyens, les organisations et les administrations, contribuant à une gouvernance plus participative et transparente.",
      },
    ],
    conclusion:"CorreIA LLM est conçu pour transformer l'accès et l'exploitation des données en Afrique, permettant de créer des solutions innovantes et de relever des défis économiques et sociaux. Ce projet incarne l'engagement de CorreIA LLC à utiliser l'intelligence artificielle comme levier d'innovation et de progrès.",
    contact: [
      {
        icon: (
          <Link to={`mailto:rd@correia.ai`} target="_blank">
            <img src="/img/envelope.svg" alt="whatsapp" width={35} />
          </Link>
        ),
        // email: "rd@correia.ai",
      },
      {
        icon: (
          <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
            <img src="/img/whatsapp.svg" alt="whatsapp" width={30} />
          </Link>
        ),
        // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
      },
    ],
  };

  return (
    <>
      <Detail project={project} />
    </>
  );
}
