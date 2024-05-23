import Header from "../Header"
import Footer from "../Footer"
export default function Impressum() {
  return (
    <div className="pattern-bg">
        <Header/>
    
    <div className="overflow-hidden bg-transparent px-6 py-16 sm:py-32 lg:overflow-visible lg:px-0">
    
      <div className="absolute inset-0 -z-10 overflow-hidden">

      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Letztes Update 01.01.2024</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Impressum</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 font-bold">
               Verantwortliche Instanz
              </p>
              <p>
TillTech GmbH <br />
St. Leonhard-Strasse 75<br />
9000 St. Gallen<br />
Schweiz<br />
E-Mail: <strong>hello@tilltech.ch</strong>

              </p>

              <p className="mt-6 text-xl leading-8 text-gray-700 font-bold">
              Vertretungsberechtigte Personen
              </p>
              <p>
              David Vrhovac <br />
          <strong>Name des Unternehmens:</strong> TillTech GmbH<br />
              <strong>Registrationsnummer (UID):</strong> CHE-211.561.580<br />


              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
   
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Haftungsausschluss</h2>
              <p className="mt-8">
              Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
<br />
<br />
Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Haftungsausschluss für Inhalte und Links</h2>
              <p className="mt-8">
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.
              </p>
              
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Urheberrechtserklärung</h2>
              <p className="mt-6">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich TillTech GmbH oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/></div>
  )
}
