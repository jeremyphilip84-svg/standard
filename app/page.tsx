export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F3F0] text-[#161616]">
      <div className="h-3 bg-[repeating-linear-gradient(45deg,#F5B700,#F5B700_16px,#161616_16px,#161616_32px)]" />
      <section className="mx-auto max-w-xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide">
          Pour artisans et entreprises du BTP
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight">
          Arrête de répondre aux mêmes questions de clients.
        </h1>
        <p className="mt-4 text-lg">
          Dix questions reviennent chaque jour : devis, délais, zone, décennale.
          Standard répond pour toi en un clic.
        </p>
        <a
          href="#"
          className="mt-8 block bg-[#F5B700] px-6 py-4 text-center text-lg font-black uppercase"
        >
          Commencer
        </a>
        <p className="mt-3 text-center text-sm">Gratuit, sans carte bancaire.</p>
      </section>
    </main>
  );
}
