const titre = "font-[family-name:var(--font-archivo-black)]";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F3F0] font-[family-name:var(--font-archivo)] text-[#161616]">
      <div className="h-3 bg-[repeating-linear-gradient(45deg,#F5B700,#F5B700_16px,#161616_16px,#161616_32px)]" />

      <section className="mx-auto max-w-xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide">
          Pour artisans et entreprises du BTP
        </p>
        <h1 className={`${titre} mt-4 text-4xl leading-tight`}>
          Arrête de répondre aux mêmes questions de clients.
        </h1>
        <p className="mt-4 text-lg">
          Devis, délais, zone d’intervention, décennale : Standard répond pour
          toi en un clic.
        </p>
        <a
          href="/questionnaire"
          className={`${titre} mt-8 block bg-[#F5B700] px-6 py-5 text-center text-lg uppercase`}
        >
          Commencer
        </a>
        <p className="mt-3 text-center text-sm">Gratuit, sans carte bancaire.</p>
      </section>

      <section className="bg-[#161616] text-[#F4F3F0]">
        <div className="mx-auto max-w-xl px-5 py-10">
          <p className="text-sm font-bold uppercase tracking-wide text-[#F5B700]">
            Ce que ça te coûte
          </p>
          <p className={`${titre} mt-3 text-5xl leading-none text-[#F5B700]`}>
            16 h 30
          </p>
          <p className="mt-3 text-lg">
            par mois, c’est le temps que tu passes à retaper les mêmes réponses.
          </p>
          <p className="mt-3 text-sm opacity-80">
            Estimation : environ 15 messages par jour, 3 minutes par réponse,
            22 jours ouvrés. Personne ne te paie ce temps-là.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-5 py-10">
        <h2 className={`${titre} text-2xl`}>Comment ça marche</h2>
        <ol className="mt-6 space-y-6">
          <li className="border-l-8 border-[#F5B700] pl-4">
            <p className="font-black">1. Ta base en dix minutes</p>
            <p className="mt-1">
              Tu écris une fois tes réponses types : tarifs, délais, zone,
              décennale.
            </p>
          </li>
          <li className="border-l-8 border-[#F5B700] pl-4">
            <p className="font-black">2. Une réponse en un clic</p>
            <p className="mt-1">
              Un client écrit, Standard propose la bonne réponse. Tu la modifies
              si besoin, puis tu l’envoies.
            </p>
          </li>
          <li className="border-l-8 border-[#F5B700] pl-4">
            <p className="font-black">3. Tu vois le temps gagné</p>
            <p className="mt-1">
              Les nouvelles questions sont repérées pour enrichir ta base, et tu
              suis tes heures économisées.
            </p>
          </li>
        </ol>
      </section>

      <section className="mx-auto max-w-xl px-5 pb-10">
        <div className="border-2 border-dashed border-[#161616] p-5">
          <p className="text-sm font-bold uppercase">
            [Emplacement témoignage : à remplir avec un vrai avis client]
          </p>
        </div>
      </section>

      <section className="bg-[#F5B700]">
        <div className="mx-auto max-w-xl px-5 py-10">
          <h2 className={`${titre} text-2xl leading-tight`}>
            Récupère tes 16 heures.
          </h2>
          <a
            href="/questionnaire"
            className={`${titre} mt-6 block bg-[#161616] px-6 py-5 text-center text-lg uppercase text-[#F5B700]`}
          >
            Commencer
          </a>
          <p className="mt-3 text-center text-sm">Gratuit, sans carte bancaire.</p>
        </div>
      </section>

      <footer className="mx-auto max-w-xl px-5 py-8 text-sm">
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-bold underline">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/cgv">CGV</a>
          <a href="/confidentialite">Confidentialité</a>
        </nav>
        <p className="mt-4">© 2026 Standard</p>
      </footer>
    </main>
  );
}
