import React from "react";
import Detail from "../../../components/Project/Detail";
import { Link } from "react-router";

export default function ProjectGilui() {
  const project = {
    title: "Gilui ai",
    images: [
      "img/img-12.jpg",
      "img/img-13.jpg",
      "img/img-14.jpg",
      "img/img-15.jpg",
    ],
    projectDetails: {
      createdBy: "CorreIA LLC",
      completedOn: "Décembre 2024",
      skills: "Numérique, Energie, sobriété énergétique",
      client: "Compagnie Ivoirienne d’Electricité (CIE)",
      path: "#",
      description:
        "Le projet Gilui.ai, développé par CorreIA LLC, est une solution technologique visant à révolutionner la gestion énergétique en Côte d’Ivoire. En digitalisant les compteurs d’électricité, Gilui.ai permet de collecter, analyser et exploiter les données de consommation électrique de manière plus efficace et transparente.         ",
    },
    objectives: [
      {
        title: "Précision et transparence :",
        description:
          "Améliorer la fiabilité des relevés électriques pour garantir une facturation juste et sans erreurs.",
      },
      {
        title: "Optimisation énergétique :",
        description:
          "Offrir des outils pour une gestion plus efficiente des ressources énergétiques, permettant de mieux anticiper et répondre aux besoins des consommateurs.",
      },
      {
        title: "Empowerment des utilisateurs :",
        description:
          "Fournir aux consommateurs un suivi en temps réel de leur consommation, favorisant des comportements plus responsables et durable.",
      },
    ],
    caracteristiques: [
      {
        title: "Suivi en temps réel :",
        description:
          "Les utilisateurs peuvent visualiser leur consommation énergétique via une interface intuitive et accessible, facilitant la gestion personnelle de leur usage.",
      },
      {
        title: "Prédiction et optimisation :",
        description:
          "Grâce à l’intelligence artificielle, le système anticipe les pics de consommation et optimise la répartition des ressources.",
      },
      {
        title: "Détection proactive :",
        description:
          "Gilui.ai identifie rapidement les anomalies, telles que les pannes ou pertes énergétiques, réduisant ainsi les interruptions de service.",
      },
    ],
    impact: [
      {
        title: "Pour les consommateurs :",
        description:
          "Une meilleure maîtrise de leurs dépenses énergétiques grâce à une facturation précise et à des outils de gestion adaptés.",
      },
      {
        title: "Pour les opérateurs :",
        description:
          "Une réduction des pertes techniques et commerciales, tout en améliorant la satisfaction des clients.",
      },
      {
        title: "Pour le pays :",
        description:
          "Une transition énergétique accélérée, contribuant au développement durable et à une utilisation optimisée des infrastructures existantes.",
      },
    ],
    conclusion:
      "En combinant innovation technologique et engagement pour la durabilité, Gilui.ai reflète la mission de CorreIA LLC : fournir des solutions concrètes pour relever les défis énergétiques et améliorer la qualité de vie en Côte d’Ivoire. Ce projet s’inscrit comme un levier essentiel pour la modernisation des infrastructures énergétiques et la promotion de comportements écoresponsables.",
    contact: [
      {
        icon: (
          <Link to={`mailto:rd@correia.ai`} target="_blank">
            <img src="/img/envelope.svg" alt="whatsapp" width={35}/>
            </Link>
                  
        ),
        // email: "rd@correia.ai",
      },
      {
        icon: (
          <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
            <img src="/img/whatsapp.svg" alt="whatsapp" width={30}/>
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
