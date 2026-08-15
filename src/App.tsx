import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { KeyStats } from '@/components/KeyStats';
import { WhyRaid } from '@/components/WhyRaid';
import { Parcours } from '@/components/Parcours';
import { Velo } from '@/components/Velo';
import { Galerie } from '@/components/Galerie';
import { WhySaid } from '@/components/WhySaid';
import { Tarifs } from '@/components/Tarifs';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-sable-50">
      <Header />
      <main>
        <Hero />
        <KeyStats />
        <WhyRaid />
        <Parcours />
        <Velo />
        <Galerie />
        <WhySaid />
        <Tarifs />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
