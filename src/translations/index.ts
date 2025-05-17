import { Translations } from "@/types";

export const translations: Record<string, Translations> = {
  en: {
    waitlistTitle: "Join the waitlist for",
    networkTitle: "the Luggage Delivery Network",
    tagline:
      "Kananko connects trusted transporters with people who want to send packages",
    whyJoin: "Why Join Kananko?",
    benefits: {
      earnMoney: {
        title: "Earn Extra Money",
        description:
          "Get paid for the extra space in your luggage every time you travel",
      },
      control: {
        title: "You're In Control",
        description:
          "Decide what you carry, when you travel, and how much you charge",
      },
      verified: {
        title: "Verified Transporters",
        description:
          "Only deal with verified transporters for a secure and trusted experience",
      },
      flexible: {
        title: "Flexible Delivery",
        description:
          "Various package sizes from small documents to medium-sized parcels",
      },
      global: {
        title: "Global Network",
        description:
          "Connect with travelers across multiple countries and continents",
      },
      fast: {
        title: "Fast Delivery",
        description:
          "Often faster than traditional shipping methods between countries",
      },
    },
    form: {
      title: "Join the Waitlist",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email",
      routePlaceholder: "Travel Route (e.g. Cotonou → Paris)",
      companyPlaceholder: "Company Name (optional)",
      incorporatedQuestion: "Is your company incorporated?",
      submitButton: "Join the waitlist",
      submitting: "Submitting...",
      success: {
        title: "Success!",
        message1: "We've added",
        message2: "to our waitlist.",
        anotherResponse: "Submit another response",
      },
      error: "An error occurred while submitting the form. Please try again.",
    },
  },
  fr: {
    waitlistTitle: "Inscrivez-vous à l'avant-première de",
    networkTitle: "Kananko - Le Réseau de Transport Collaboratif",
    tagline:
      "Kananko met en relation des transporteurs fiables avec ceux qui souhaitent expédier des colis",
    whyJoin: "Pourquoi rejoindre Kananko ?",
    benefits: {
      earnMoney: {
        title: "Gagnez un Revenu Complémentaire",
        description:
          "Soyez rémunéré pour l'espace disponible dans vos bagages à chaque voyage",
      },
      control: {
        title: "Gardez le Contrôle",
        description:
          "Choisissez ce que vous transportez, quand vous voyagez et vos tarifs",
      },
      verified: {
        title: "Transporteurs Vérifiés",
        description:
          "Collaborez uniquement avec des transporteurs vérifiés pour une expérience sécurisée",
      },
      flexible: {
        title: "Livraison Adaptable",
        description:
          "Différentes tailles de colis, des petits documents aux paquets de taille moyenne",
      },
      global: {
        title: "Réseau International",
        description:
          "Connectez-vous avec des voyageurs à travers de nombreux pays et continents",
      },
      fast: {
        title: "Livraison Rapide",
        description:
          "Souvent plus rapide que les services de livraison traditionnels entre pays",
      },
    },
    form: {
      title: "Rejoindre la Liste d'Attente",
      namePlaceholder: "Nom Complet",
      emailPlaceholder: "Email",
      routePlaceholder: "Itinéraire de Voyage (ex: Cotonou → Paris)",
      companyPlaceholder: "Nom de l'Entreprise (facultatif)",
      incorporatedQuestion: "Votre entreprise est-elle constituée ?",
      submitButton: "Rejoindre la liste d'attente",
      submitting: "Envoi en cours...",
      success: {
        title: "Inscription réussie !",
        message1: "Nous avons ajouté",
        message2: "à notre liste d'attente.",
        anotherResponse: "Soumettre une autre réponse",
      },
      error:
        "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.",
    },
  },
};
