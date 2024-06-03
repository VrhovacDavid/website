


const features = [
  {
    name: 'Unbegrenzte Designfreiheit',
    description: 'Erweitere deine kreativen Horizonte. Füge deinem Design-Board so viele Anfragen hinzu, wie du möchtest, und sieh zu, wie deine Ideen lebendig werden.',
    icon: '/icons/neu_unbegrenzt.svg',
  },
  {
    name: 'Transparente Kostenkontrolle',
    description: 'Mit unserem festen monatlichen Preis bleibst du immer im Budget. Keine Überraschungen, keine versteckten Kosten – nur klare, einfache Abrechnung.',
    icon: '/icons/transparent_kosten.svg',
  },
  {
    name: 'Erstklassige Designqualität',
    description: 'Jedes Mal. Zugriff auf erstklassige Designs, wann immer du sie benötigst. Unsere Experten stehen bereit, um dir jederzeit die höchste Qualität zu liefern.',
    icon: '/icons/quality.svg',
  },
  {
    name: 'Absolute Flexibilität',
    description: 'Dein Business ändert sich, und deine Designbedürfnisse auch. Skaliere deinen Bedarf hoch oder runter, pausiere dein Abonnement oder kündige es jederzeit – ohne Komplikationen.',
    icon: '/icons/flexibel.svg',
  },
  {
    name: 'Exklusiv für dich',
    description: 'Jedes Design, das wir erstellen, wird speziell für dich angefertigt und ist zu 100% dein Eigentum. Genieße die Sicherheit, dass deine Kreationen einzigartig und ganz allein dein sind.',
    icon: '/icons/exklusiv.svg',
  },
  {
    name: 'Blitzschnelle Umsetzung',
    description: 'Die Zeit drängt? Kein Problem. Unsere Prozesse garantieren, dass du deine Designs nicht nur in Top-Qualität, sondern auch in Rekordzeit erhältst. Im schnitt zwischen 24-48 Stunden',
    icon: '/icons/blitzschnell.svg',
  },
]

export default function Mitgliedschaftsvorteile() {
  return (

    <div id="vorteile">
      <img src="/LeftForm.svg" alt="LeftForm"    width={410}
               height={128} className=" -skew-y-3 md:-mb-8  sm:-mb-8" />

      <div className="relative isolate overflow-hidden pattern-bg-primary py-24 sm:py-32 -skew-y-3">



        <div className="mx-auto  max-w-7xl px-6 lg:px-8 skew-y-3">
          <div className="mx-auto max-w-4xl lg:max-w-2xl lg:mx-0">
            <p className="text-small font-semibold leading-7 text-indigo-500">Deine Vorteile</p>
            <h3 className="mt-2 text-h3 leading-10 font-bold tracking-tight text-black ">Vorteile einer Mitgliedschaft bei TillTech</h3>
            <p className="mt-6 text-base sm:text-sup text-black">
              So überzeugend, dass du nie wieder woanders hingehen wirst – garantiert.          </p>

          </div>
          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 text-base  text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {features.map((feature) => (

              <div key={feature.name} className="flex flex-col items-start">
                <div className="flex items-center">
                  <img className=' h-10 w-10 mr-2' src={feature.icon} alt="asdf" />



                  <dt className="font-semibold text-sup text-black">
                    {feature.name}
                  </dt>
                </div>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>

              </div>
            ))}
          </dl>
        </div>
      </div>    </div>

  )
}