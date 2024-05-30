import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { motion, useScroll, useSpring } from "framer-motion";

const features = [
  {
    name: "Plan aussuchen",
    description: "Wähle den perfekten Plan für deine Bedürfnisse. Stöbere durch unsere flexiblen Optionen und finde die ideale Lösung, die deinen Anforderungen und Budget entspricht.",
    icon: '/icons/plan.svg',
  },
  {
    name: "Bezahlen",
    description: " Nutze unser geschütztes Zahlungssystem, um deinen gewählten Plan schnell und unkompliziert zu aktivieren. Du hast die möglichkeit zwischen verschiedenen Zahlungsmöglichkeiten zu bezahlen (Kreditkarte, Klarna, etc.)",
    icon: '/icons/bezahlen.svg',
  },
  {
    name: "Loslegen",
    description: "Jetzt bist du startklar! Folge dem Link in deiner Bestätigungsmail, um dein erstes Designprojekt einzureichen und direkt loszulegen. PS: Du kannst so viele Design's wie du möchtest während deiner Zeit anfragen.",
    icon: '/icons/start.svg',
  }
]


const features1 = [
  {
    name: "Email erhalten",
    description: "Sobald du dich entschieden hast, erhältst du eine Bestätigungs-E-Mail mit allen Details deines Plans und Tipps, wie du das Beste aus deinem Abonnement herausholen kannst.",
    icon: '/icons/email.svg',
  },
  {
    name: "Bei Trello anmelden",
    description: "Über den Link kannst du dich bei Trello anmelden, um deinen Workflow zu organisieren und zu optimieren. Hier kannst du deine Projekte verwalten und den Fortschritt deiner Designanfragen in Echtzeit verfolgen.",
    icon: '/icons/login.svg',
  },
  {
    name: "Designanfrage einreichen",
    description: "In Trello kannst du dann deine Anfrage, obs mit Text, Loom oder wie es dir am liebsten ist, einreichen. Du kannst so viele Anfragen wie du möchtest rein tuhen, und wir arbeiten die stück für stück ab",
    icon: '/icons/nachricht.svg',
  }
]



const Process = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className='pattern-bg'>
      <motion.div className="fixed z-10 top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-fuchsia-400 to-sky-400 origin-left" style={{ scaleX }} />
      <Header />


      <div className="overflow-hidden bg-transparent py-24 sm:py-32">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2    items-center">
            {/*Step 1*/}

            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-lg ">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Schritt 1</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ein einfacher Start, der alles verändert</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Im ersten schritt, wählst du einen Plan, der zu dir passt, und schon bist du bereit, die Grenzen deiner Kreativität neu zu definieren. Dies ist der Moment, in dem alles beginnt – mit nur einem Klick.
                </p>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                  Plan auswählen
                </button>
                <dl className="mt-10 max-w-4xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-12">
                      <dt className="inline font-semibold text-gray-900">
                        <img className='absolute left-1 h-10 w-10' src={feature.icon} alt="asdf" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <video
              src="/Step1.mp4"
              alt="Schritt 6"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />



            {/*Step 1 End*/}





          </div>
        </div>
      </div>

      {/*Step 2*/}
      <div className="overflow-hidden   py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg   ">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Schritt 2</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sichere und flexible Zahlungsabwicklung</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Deine finanzielle Sicherheit ist uns ebenso wichtig wie deine kreative Zufriedenheit. Mit Stripe garantieren wir eine sichere und reibungslose Zahlungsabwicklung, die dir volle Kontrolle und Freiheit bietet. Hier kannst du ohne Sorgen investieren, denn deine Sicherheit und Flexibilität stehen an erster Stelle. Im Kundenportal, kannst du dein Abo ändern, pausieren oder kündigen und das jederzeit.
                </p>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                  Kundenportal
                </button>
              </div>
            </div>
            <div className="flex items-start justify-center lg:order-first">
              <img
                src="/CreditCard.svg"
                alt="Product screenshot"
                className="w-[24rem] md:max-w-none rounded-xl    ring-gray-400/10 "
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>


      {/*Step 2 End*/}
      {/*Step 3*/}
      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">


            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Schritt 3</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dein Design-Briefing – ein Dialog, der inspiriert</p>

                <dl className="mt-10 max-w-4xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features1.map((feature) => (
                    <div key={feature.name} className="relative pl-12">
                      <dt className="inline font-semibold text-gray-900">
                        <img className='absolute left-1 h-10 w-10' src={feature.icon} alt="asdf" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                  Trello demonstartion
                </button>
              </div>
            </div>
            <video
              src="/Step3.mp4"
              alt="Schritt 3"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />

            {/*Step 3 End*/}





          </div>
        </div>
      </div>



      {/*Step 4*/}
      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg  ">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Schritt 4</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kreative Entfaltung in Echtzeit</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Unsere talentierten Designer nehmen deine Inspiration und formen daraus etwas Magisches. Innerhalb von 24-48 Stunden beginnt deine Idee, Gestalt anzunehmen – eine schnelle Transformation, die dennoch tief auf deine persönlichen Anforderungen eingeht.
                </p>

              </div>
            </div>
            <div className="flex items-center justify-center lg:items-start lg:justify-end lg:order-first">
            <video
              src="/Step4.mp4"
              alt="Schritt 3"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />

            </div>
          </div>
        </div>
      </div>


      {/*Step 4 End*/}

      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">


            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Schritt 5</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Deine Design-Vorschau – Du hast das letzte Wort</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Die erste Vorschau deines Designs erreicht dich schnell und ermöglicht es dir, Änderungen vorzuschlagen, die wir gerne umsetzen. Deine vollständige Zufriedenheit ist unser Endziel, und wir sind nicht fertig, bis dein Design genau so ist, wie du es dir vorgestellt hast.
                </p>

              </div>
            </div>
            <video
              src="/Step5.mp4"
              alt="Schritt 5"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />
            {/*Step 5 End*/}





          </div>
        </div>
      </div>




      {/*Step 6*/}
      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg  ">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Schritt 6</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vollendung und neue Möglichkeiten</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Mit jedem abgeschlossenen Design öffnet sich ein neues Kapitel für deine Projekte. Die Dateien gehören dir – eine Sammlung von Werken wird grösser. Und wenn du bereit für mehr bist, steht die nächste Seite deiner kreativen Reise schon bereit. Du hast die möglichkeit in einem Monat so viele Design's wie du möchtest erstellen zu lassen. Du kannst auch mehrer Design's in die Warteschlange stecken und wir erledigen sie nach und nach. Bereit deine Reise zu Starten?
                </p>
                <button
                  type="button"
                  className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                >
                  Jetzt Starten
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:items-start lg:justify-end lg:order-first">
            <video
              src="/Step6.mp4"
              alt="Schritt 6"
              className="w-full md:w-[48rem] md:max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-400/10 mx-auto"
              autoPlay
              loop
              muted
            />
            </div>
          </div>
        </div>
      </div>


      {/*Step 6 End*/}

      <Footer />

    </div>
  )
}

export default Process