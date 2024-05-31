


const features = [
  {
    name: 'Unbegrenzte Möglichkeiten',
    description: 'Schließe dich uns an und fordere so viele Designs an, wie dein Herz begehrt.',
    icon: 'icons/neu_unbegrenzt.svg',
    href: '/section1page'
  },
  {
    name: 'Blitzschnelle Umsetzung',
    description: 'Dein Design landet in Rekordzeit auf deinem Schreibtisch – zuverlässig und effizient von Montag bis Freitag.',
    icon: 'icons/neu_blitz.svg',

    href: '/section1page'

  },
  {
    name: '100% Zufriedenheitsgarantie',
    description: 'Wir feilen an deinen Entwürfen, bis sie genau deinen Vorstellungen entsprechen. Deine Zufriedenheit ist unser Versprechen.',
    icon: 'icons/neu_garantie.svg',

    href: '/section1page'

  },
]

export default function FeatureSection1() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:max-w-7xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 ">
          Verwandle deine Vision in Wirklichkeit – schneller als je zuvor.
          </h2>
          <p className="mt-6 mb-8 text-base  text-gray-600">
          Wir haben das Design nicht neu erfunden – wir haben es für dich optimiert. <br />Vergiss teure Agenturen und langwierige Prozesse. Mit TillTech erhältst du genau das Design, das du brauchst, genau dann, wenn du es brauchst.
<br />Mit TillTech wird jedes Design zu einem Baustein deines Erfolgs. Starte jetzt und erlebe Design neu – schneller, einfacher und genau auf deine Bedürfnisse zugeschnitten."
          </p>
          <a
              href="#pricing"
              className="rounded-md bg-indigo-500 border-2 border-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "
            >
              Jetzt Starten
            </a>
         
        </div>
        <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex  items-start justify-start rounded-lg ">
                    <img className=' h-12 w-12' src={feature.icon} alt="asdf" />
                  </div>
                 <p className='text-lg'>{feature.name}</p>
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base  text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
