"use client";

import { useState } from "react";

const titre = "font-[family-name:var(--font-archivo-black)]";

type Option = { label: string; value: string | number };
type Question = { id: string; question: string; options: Option[] };

const questions: Question[] = [
  {
    id: "metier",
    question: "Quel est ton métier ?",
    options: [
      { label: "Maçon", value: "maçon" },
      { label: "Plombier", value: "plombier" },
      { label: "Électricien", value: "électricien" },
      { label: "Peintre", value: "peintre" },
      { label: "Couvreur", value: "couvreur" },
      { label: "Autre métier du BTP", value: "artisan" },
    ],
  },
  {
    id: "messages",
    question: "Combien de messages de clients reçois-tu par jour ?",
    options: [
      { label: "Environ 5", value: 5 },
      { label: "Environ 10", value: 10 },
      { label: "Environ 15", value: 15 },
      { label: "25 ou plus", value: 25 },
    ],
  },
  {
    id: "part",
    question: "Parmi eux, combien reposent sur les mêmes questions ?",
    options: [
      { label: "Moins de la moitié", value: 0.3 },
      { label: "La moitié", value: 0.5 },
      { label: "Les trois quarts", value: 0.75 },
      { label: "Presque tous", value: 0.9 },
    ],
  },
  {
    id: "minutes",
    question: "Combien de minutes te prend chaque réponse ?",
    options: [
      { label: "2 minutes", value: 2 },
      { label: "3 minutes", value: 3 },
      { label: "5 minutes", value: 5 },
      { label: "10 minutes", value: 10 },
    ],
  },
  {
    id: "taux",
    question: "Combien vaut une heure de ton travail ?",
    options: [
      { label: "30 € de l’heure", value: 30 },
      { label: "45 € de l’heure", value: 45 },
      { label: "60 € de l’heure", value: 60 },
      { label: "80 € de l’heure ou plus", value: 80 },
    ],
  },
  {
    id: "sujet",
    question: "Quelle question revient le plus souvent ?",
    options: [
      { label: "Le devis (gratuit ou non)", value: "le devis" },
      { label: "Les délais", value: "les délais" },
      { label: "La zone d’intervention", value: "la zone d’intervention" },
      { label: "La décennale", value: "la décennale" },
      { label: "Les tarifs", value: "les tarifs" },
      { label: "Ta disponibilité", value: "ta disponibilité" },
    ],
  },
];

function formatHeures(h: number) {
  const m = Math.round(h * 60);
  return `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")}`;
}

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const total = questions.length;

  function choisir(id: string, value: string | number) {
    setAnswers({ ...answers, [id]: value });
    setStep(step + 1);
  }

  const bande =
    "h-3 bg-[repeating-linear-gradient(45deg,#F5B700,#F5B700_16px,#161616_16px,#161616_32px)]";

  if (step < total) {
    const q = questions[step];
    return (
      <main className="min-h-screen bg-[#F4F3F0] font-[family-name:var(--font-archivo)] text-[#161616]">
        <div className={bande} />
        <section className="mx-auto max-w-xl px-5 py-8">
          <div className="flex items-center justify-between text-sm font-bold">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} className="py-2 underline">
                Retour
              </button>
            ) : (
              <a href="/" className="py-2 underline">
                Accueil
              </a>
            )}
            <span>
              {step + 1} / {total}
            </span>
          </div>
          <div className="mt-2 h-3 bg-[#161616]/15">
            <div
              className="h-3 bg-[#F5B700]"
              style={{ width: `${((step + 1) / total) * 100}%` }}
            />
          </div>
          <h1 className={`${titre} mt-8 text-3xl leading-tight`}>{q.question}</h1>
          <div className="mt-6 space-y-3">
            {q.options.map((o) => (
              <button
                key={o.label}
                onClick={() => choisir(q.id, o.value)}
                className="block w-full border-2 border-[#161616] bg-white px-5 py-4 text-left text-lg font-bold active:bg-[#F5B700]"
              >
                {o.label}
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  const messages = Number(answers.messages);
  const part = Number(answers.part);
  const minutes = Number(answers.minutes);
  const taux = Number(answers.taux);
  const repetitifs = messages * part * 22;
  const heuresPerdues = (repetitifs * minutes) / 60;
  const heuresRendues = (repetitifs * Math.max(minutes - 0.5, 0)) / 60;
  const euros = Math.round(heuresRendues * taux);

  return (
    <main className="min-h-screen bg-[#161616] font-[family-name:var(--font-archivo)] text-[#F4F3F0]">
      <div className={bande} />
      <section className="mx-auto max-w-xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-[#F5B700]">
          Ton calcul, {String(answers.metier)}
        </p>
        <p className="mt-4 text-lg">Aujourd’hui, tu passes</p>
        <p className={`${titre} text-6xl leading-none text-[#F5B700]`}>
          {formatHeures(heuresPerdues)}
        </p>
        <p className="mt-2 text-lg">
          par mois à répondre aux mêmes questions, surtout sur{" "}
          {String(answers.sujet)}.
        </p>

        <div className="mt-8 border-l-8 border-[#F5B700] pl-4">
          <p className="text-lg">Avec Standard, tu récupères environ</p>
          <p className={`${titre} text-4xl text-[#F5B700]`}>
            {formatHeures(heuresRendues)} par mois
          </p>
          <p className="mt-1 text-lg">
            soit environ <strong>{euros} €</strong> de temps facturable.
          </p>
        </div>

        <p className="mt-6 text-sm opacity-80">
          Estimation faite avec tes réponses : {repetitifs.toFixed(0)} réponses
          répétitives par mois, une réponse en un clic estimée à 30 secondes.
          Standard coûte 35 € par mois.
        </p>

        <a
          href="#"
          className={`${titre} mt-8 block bg-[#F5B700] px-6 py-5 text-center text-lg uppercase text-[#161616]`}
        >
          Voir ma première réponse
        </a>
        <p className="mt-3 text-center text-sm">Gratuit, sans carte bancaire.</p>
      </section>
    </main>
  );
}