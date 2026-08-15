import { useState, useEffect, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

// À CONFIGURER AVANT MISE EN PROD :
// Remplacez l'ID Formspree ci-dessous par celui de votre formulaire
// (créez-en un sur https://formspree.io et collez votre identifiant).
// Solution de repli : si FORMSPREE_ID est vide, un mailto: est utilisé.
const FORMSPREE_ID = '';

type Status = 'idle' | 'loading' | 'success' | 'error';

const PARTICIPANTS = ['1 personne', '2 personnes', '3 personnes', '4 personnes', '5 à 11 personnes'];

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [messagePreset, setMessagePreset] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sujet = params.get('sujet');
    if (sujet) setMessagePreset(`${sujet} — `);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Repli mailto si Formspree non configuré
    if (!FORMSPREE_ID) {
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
      window.location.href = `mailto:contact@saidmountainbike.com?subject=Réservation Raid Gravel Maroc&body=${encodeURIComponent(body)}`;
      setStatus('success');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-ocre-300/60 bg-white/80 px-4 py-3 text-sm text-kasbah-900 placeholder:text-kasbah-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';
  const labelClass =
    'block text-xs font-semibold uppercase tracking-wider text-kasbah-600';

  return (
    <section id="contact" className="gradient-orange-soft py-20 md:py-28">
      <div className="berber-filigree absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">
            Réservation & contact
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Réserver votre place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-kasbah-700">
            Quelques informations, nous revenons vers vous sous 48h.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-5 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-brand-600/10 backdrop-blur-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="raid" className={labelClass}>
                Raid gravel
              </label>
              <select id="raid" name="raid" className={`${inputClass} mt-2`} defaultValue="Raid Gravel Maroc — 8 jours">
                <option>Raid Gravel Maroc — 8 jours</option>
              </select>
            </div>
            <div>
              <label htmlFor="participants" className={labelClass}>
                Nombre de participants
              </label>
              <select id="participants" name="participants" className={`${inputClass} mt-2`}>
                {PARTICIPANTS.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="periode" className={labelClass}>
              Période demandée
            </label>
            <input
              id="periode"
              name="periode"
              type="text"
              placeholder="ex. mars 2026"
              className={`${inputClass} mt-2`}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nom" className={labelClass}>
                Nom *
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="prenom" className={labelClass}>
                Prénom
              </label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                className={`${inputClass} mt-2`}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="adresse" className={labelClass}>
                Adresse
              </label>
              <input
                id="adresse"
                name="adresse"
                type="text"
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="ville" className={labelClass}>
                Ville
              </label>
              <input
                id="ville"
                name="ville"
                type="text"
                className={`${inputClass} mt-2`}
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label htmlFor="cp" className={labelClass}>
                Code postal
              </label>
              <input
                id="cp"
                name="cp"
                type="text"
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="pays" className={labelClass}>
                Pays
              </label>
              <input
                id="pays"
                name="pays"
                type="text"
                className={`${inputClass} mt-2`}
              />
            </div>
            <div>
              <label htmlFor="telephone" className={labelClass}>
                Téléphone
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                className={`${inputClass} mt-2`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="rappel" className={labelClass}>
              Appelez-moi… (jour / heure)
            </label>
            <input
              id="rappel"
              name="rappel"
              type="text"
              placeholder="ex. mardi, entre 14h et 17h"
              className={`${inputClass} mt-2`}
            />
          </div>

          <div>
            <label htmlFor="mail" className={labelClass}>
              Mail *
            </label>
            <input
              id="mail"
              name="mail"
              type="email"
              required
              className={`${inputClass} mt-2`}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              defaultValue={messagePreset}
              className={`${inputClass} mt-2 resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all duration-300 hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === 'loading' ? 'Envoi…' : 'Envoyer'}
          </button>

          {status === 'success' && (
            <p className="flex items-center justify-center gap-2 text-sm text-success-500">
              <CheckCircle2 className="h-4 w-4" />
              Message envoyé. Nous revenons vers vous sous 48h.
            </p>
          )}
          {status === 'error' && (
            <p className="flex items-center justify-center gap-2 text-sm text-error-500">
              <AlertCircle className="h-4 w-4" />
              Échec de l’envoi. Réessayez ou écrivez-nous directement.
            </p>
          )}

          <p className="text-center text-xs text-kasbah-500">
            Avant la mise en production, une adresse email de destination devra
            être configurée (Formspree ou mailto).
          </p>
        </form>
      </div>
    </section>
  );
}
