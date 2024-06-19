import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
const faqs = [
  {
    question: "Warum sollte ich nicht einfach einen festangestellten Designer einstellen?",
    answer: "Gute Frage! Zum Beispiel übersteigen die jährlichen Kosten für einen festangestellten Senior Designer mittlerweile 100'000.-, zuzüglich Nebenleistungen (und viel Glück bei der Suche nach einem verfügbaren). Darüber hinaus hast du vielleicht nicht immer genug Arbeit, um sie ständig zu beschäftigen, sodass du für nicht genutzte Zeit zahlst. Mit dem Monatsplan kannst du dein Abonnement nach Bedarf pausieren und fortsetzen, um sicherzustellen, dass du deinen Designer nur bezahlst, wenn auch Arbeit für ihn vorliegt."
  },
  {
    question: "Gibt es eine Grenze, wie viele Anfragen ich stellen kann?",
    answer: "Sobald du abonniert bist, kannst du so viele Designanfragen in deine Warteschlange aufnehmen, wie du möchtest, und sie werden nacheinander abgearbeitet."
  },
  {
    question: "Wie schnell erhalte ich meine Grafik Designs?",
    answer: "Im Durchschnitt werden die meisten Anfragen in nur zwei Tagen oder weniger bearbeitet. Komplexere Anfragen können jedoch länger dauern (Grössere Webseiten, Mobile Apps, etc.)."
  },
  {
    question: "Wer sind die Designer?",
    answer: "Es mag überraschend sein, aber TillTech ist tatsächlich eine Ein-Mann-Agentur. Das bedeutet, du arbeitest direkt mit mir, dem Gründer von TillTech. Anfragen für Animationen oder benutzerdefinierte Illustrationen werden jedoch von Partnerdesignern bearbeitet."
  },
  {
    question: "Wie funktioniert die Pausierungsfunktion?",
    answer: "Wir verstehen, dass du möglicherweise nicht genug Designarbeit hast, um einen ganzen Monat zu füllen. Vielleicht hast du derzeit nur ein oder zwei Designanfragen. Hier ist die Pausierung deines Abonnements praktisch. Die Abrechnungszyklen basieren auf einem 31-Tage-Zeitraum. Angenommen, du meldest dich an und nutzt den Service 21 Tage lang, und entscheidest dich dann, dein Abonnement zu pausieren. Das bedeutet, dass der Abrechnungszyklus pausiert wird und du 10 Tage des Services übrig hast, die du jederzeit in der Zukunft nutzen kannst."
  },
  {
    question: "In welchen Programmen werden die Designs erstellt?",
    answer: "Die meisten Anfragen werden mit Programmen wie Figma, Adobe Illustrator, Photoshop, Blender, Premiere Pro, After Effects, usw. erstellt."
  },
  {
    question: "Wie kann ich Designs anfordern?",
    answer: "TillTech bietet eine Menge Flexibilität bei der Anforderung von Designs über Trello. Einige gängige Methoden, wie Kunden Designs anfordern, sind direkt über Trello, das Teilen von Google-Docs oder Wireframes oder sogar das Aufnehmen eines kurzen Loom-Videos (für diejenigen, die es vorziehen, ihre Briefings nicht auszuschreiben). Grundsätzlich ist alles, was in Trello verlinkt oder geteilt werden kann, zulässig."
  },
  {
    question: "Was passiert, wenn mir das Design nicht gefällt?",
    answer: "Keine Sorge! Wir werden das Design so lange überarbeiten, bis du zu 100% zufrieden bist."
  },
  {
    question: "Gibt es Designarbeiten, die ihr nicht anbietet?",
    answer: "Absolut. TillTech deckt folgende Designarbeiten nicht ab: Animierte Grafiken (GIFs usw.), Zeichnungen, komplexe Verpackungen und umfangreiche Printdesigns (Magazine, Bücher usw.)."
  },
  {
    question: "Was ist, wenn ich nur eine einzige Anfrage habe?",
    answer: "Das ist in Ordnung. Du kannst dein Abonnement nach Fertigstellung pausieren und zurückkehren, wenn du weitere Designbedürfnisse hast. Es besteht keine Notwendigkeit, den Rest deines Abonnements verfallen zu lassen."
  },
  {
    question: "Gibt es Rückerstattungen, wenn mir der Service nicht gefällt?",
    answer: "Aufgrund der hohen Qualität der Arbeit werden keine Rückerstattungen gewährt."
  }
 
]


export default function FAQ() {
  return (
    <div className="pattern-bg-white " id='faq'>
       
      <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40  ">
        <div className=' '>
        <p className="text-small font-semibold  text-indigo-400">Alles was du wissen musst</p>
            <h3 className="mt-2 text-h3 font-bold leading-10 tracking-tight text-black ">
              Häufig gestellte Fragen
            </h3>
        </div>
    
        <div className="mx-auto max-w-4xl lg:max-w-7xl divide-y divide-gray-900/10">
        
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-sup  ">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
