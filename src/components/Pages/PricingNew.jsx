import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    slots: '3 Plätze',
    name: 'Standard',
    id: 'tier-hobby',
    href: 'https://buy.stripe.com/6oE6pP0Vs611gXCfZ6',
    priceMonthly: `3955.-`,
    description: 'Eine Anfrage gleichzeitig. Jederzeit pausieren oder kündigen.',
    features: ['Eine Anfrage gleichzeitig', 'Lieferzeit von 24-48 Stunden', 'Unbegrenzte Marken', 'React (Java Script) Entwicklung', 'Unbegrenzte Stockfotos', 'Unbegrenzte Benutzer', 'Jederzeit pausieren oder kündigen'],
  },
  {
    slots: '1 Platz',
    name: 'Pro',
    id: 'tier-team',
    href: 'https://buy.stripe.com/cN2aG57jQ0GH6iYbIR',
    priceMonthly: `4955.-`,
    description: 'Zwei Anfragen gleichzeitig. Jederzeit pausieren oder kündigen.',
    features: [
      'Zwei Anfragen gleichzeitig', 'Lieferzeit von 24-48 Stunden', 'Unbegrenzte Marken', 'React (Java Script) Entwicklung', 'Unbegrenzte Stockfotos', 'Unbegrenzte Benutzer', 'Jederzeit pausieren oder kündigen'
    ],
  },
]

export default function PricingNew() {
  return (

    <div className="isolate overflow-hidden bg-darkBlue " id='pricing'>
      <div className=''>
        <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 pb-96 pt-24 text-start sm:pt-32 lg:px-8 ">
          <div className="mx-auto max-w-7xl">

            <p className="text-small font-semibold  text-indigo-400">Wähle deinen Plan – Investiere in deine Vision</p>
            <h3 className="mt-2 text-h3 font-bold tracking-tight text-white leading-10">
              Entdecke unsere Preismodelle
            </h3>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-7xl text-sup  text-white/60">
              Bei TillTech verstehen wir, dass jedes Projekt einzigartig ist – genau wie dein Budget. Deshalb bieten wir maßgeschneiderte Abonnements, die dir die Freiheit geben, deine Designs nach Bedarf zu skalieren. Wähle den Plan, der am besten zu deinen aktuellen Anforderungen passt, und erlebe, wie einfach und vorhersehbar die Kostenkontrolle sein kann.
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
              <defs>
                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root pattern-bg-white pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className=" bg-transparent mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-2">
                {tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                  >
                    <div>

                      <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                        {tier.name}
                      </h3>

                      <div className="inline-flex space-x-2  p-2.5 rounded-lg max-w-xl mx-0 px-0 ">
                        <div className='flex flex-col content-center justify-center align-middle'>
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-textBlue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-textBlue"></span>
                          </span>
                        </div>
                        <span className="  text-small font-semibold  text-darkBlue ">
                          Nur noch {tier.slots} verfügbar
                        </span>


                      </div>
                      <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-h1 font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                        <span className="text-base font-semibold leading-7 text-gray-600">/monat</span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                      <hr
                        className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-darkBlue via-textBlue to-darkBlue opacity-25 dark:opacity-100"
                      />
                      <ul role="list" className="mt-10 space-y-4 text-small leading-6 text-gray-600">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2 text-center text-small font-semibold  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Jetzt Starten
                    </a>
                  </div>
                ))}
                <div id='call' className=" bg-white flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-h6 font-semibold  tracking-tight text-indigo-600">(Gratis) Buche ein 15min. Einführungsgespräch</h3>
                    <p className="mt-1 text-base  text-gray-600">
                      Erfahre mehr darüber, wie TillTech funktioniert und wie es dir helfen kann.
                    </p>
                  </div>
                  <a
                    href="https://calendly.com/tilltech/tilltech-infogesprach"
                    className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2 text-center text-small font-semibold  text-white shadow-sm"
                  >
                    Call buchen <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
                <div className=" bg-white flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-h6 font-semibold tracking-tight text-indigo-600">Empfehlen einen Freund und verdiene</h3>
                    <p className="mt-1 text-base  text-gray-600">
                      Verdiene 5 % monatlich wiederkehrende Provisionen für jede Empfehlung
                    </p>
                  </div>
                  <a
                    href="#"
                    className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2 text-center text-small font-semibold  text-white shadow-sm"
                  >
                    Freund empfehlen <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
