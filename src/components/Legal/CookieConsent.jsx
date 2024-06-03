import Header from "../Header";
import Footer from "../Footer";

export default function CookieConsent() {
  return (
    <div className="pattern-bg">
      <Header />
    
      <div className="overflow-hidden bg-transparent px-6 py-16 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">Letztes Update 01.01.2024</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cookie-Richtlinie</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700 font-bold">
                  Einführung
                </p>
                <p>
                  Dies ist die Cookie-Richtlinie für TillTech, erreichbar unter tilltech.ch
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700 font-bold">
                  Was sind Cookies
                </p>
                <p>
                  Wie bei fast allen professionellen Websites üblich, verwendet diese Website Cookies, bei denen es sich um kleine Dateien handelt, die auf Ihren Computer heruntergeladen werden, um Ihre Erfahrung zu verbessern. Diese Seite beschreibt, welche Informationen sie sammeln, wie wir sie verwenden und warum wir diese Cookies manchmal speichern müssen. Wir werden auch teilen, wie Sie verhindern können, dass diese Cookies gespeichert werden, was jedoch bestimmte Elemente der Funktionalität der Website herabstufen oder 'brechen' kann.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    <img
        className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 " loading="lazy"
        src="https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Cookie Richtlinien"
    />
</div>

          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Wie wir Cookies verwenden</h2>
                <p className="mt-8">
                  Wir verwenden Cookies aus verschiedenen unten aufgeführten Gründen. Leider gibt es in den meisten Fällen keine branchenüblichen Optionen zum Deaktivieren von Cookies, ohne die Funktionalität und Features, die sie dieser Seite hinzufügen, vollständig zu deaktivieren. Es wird empfohlen, alle Cookies zu belassen, wenn Sie sich nicht sicher sind, ob Sie sie benötigen, falls sie verwendet werden, um einen von Ihnen genutzten Dienst bereitzustellen.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cookies deaktivieren</h2>
                <p className="mt-8">
                  Sie können das Setzen von Cookies verhindern, indem Sie die Einstellungen in Ihrem Browser anpassen (siehe Hilfe Ihres Browsers, um zu erfahren, wie dies funktioniert). Seien Sie sich bewusst, dass das Deaktivieren von Cookies die Funktionalität dieser und vieler anderer Websites, die Sie besuchen, beeinträchtigt. Das Deaktivieren von Cookies führt in der Regel auch dazu, dass bestimmte Funktionen und Merkmale dieser Website deaktiviert werden. Daher wird empfohlen, Cookies nicht zu deaktivieren. Diese Cookie-Richtlinie wurde mit Hilfe des <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookie-Richtlinien-Generators</a> erstellt.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Die von uns gesetzten Cookies</h2>
                <ul className="mt-8 list-disc list-inside">
                  <li>
                    <p className="font-semibold">Login-bezogene Cookies</p>
                    <p>
                      Wir verwenden Cookies, wenn Sie eingeloggt sind, damit wir uns diese Tatsache merken können. Dies verhindert, dass Sie sich jedes Mal erneut einloggen müssen, wenn Sie eine neue Seite besuchen. Diese Cookies werden normalerweise entfernt oder gelöscht, wenn Sie sich ausloggen, um sicherzustellen, dass Sie nur auf eingeschränkte Funktionen und Bereiche zugreifen können, wenn Sie eingeloggt sind.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Cookies für E-Mail-Newsletter</p>
                    <p>
                      Diese Website bietet Newsletter- oder E-Mail-Abonnementdienste an, und Cookies können verwendet werden, um zu speichern, ob Sie bereits registriert sind und ob bestimmte Benachrichtigungen angezeigt werden sollen, die nur für abonnierte/abgemeldete Benutzer gelten könnten.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Formularebezogene Cookies</p>
                    <p>
                      Wenn Sie Daten über ein Formular wie auf Kontaktseiten oder Kommentarformularen übermitteln, können Cookies gesetzt werden, um Ihre Benutzerdaten für zukünftige Korrespondenz zu speichern.
                    </p>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cookies von Drittanbietern</h2>
                <p className="mt-8">
                  In einigen besonderen Fällen verwenden wir auch Cookies, die von vertrauenswürdigen Dritten bereitgestellt werden. Der folgende Abschnitt beschreibt, welche Drittanbieter-Cookies Sie möglicherweise auf dieser Website antreffen.
                </p>
                <ul className="mt-8 list-disc list-inside">
                  <li>
                    <p className="font-semibold">Google Analytics</p>
                    <p>
                      Diese Website verwendet Google Analytics, eine der am weitesten verbreiteten und vertrauenswürdigsten Analyselösungen im Web, die uns hilft zu verstehen, wie Sie die Website nutzen und wie wir Ihre Erfahrung verbessern können. Diese Cookies können Dinge verfolgen, wie lange Sie auf der Website verbringen und die Seiten, die Sie besuchen, damit wir weiterhin ansprechende Inhalte produzieren können.
                    </p>
                    <p>
                      Weitere Informationen zu Google Analytics-Cookies finden Sie auf der offiziellen Google Analytics-Seite.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Drittanbieter-Analysen</p>
                    <p>
                      Drittanbieter-Analysen werden verwendet, um die Nutzung dieser Website zu verfolgen und zu messen, damit wir weiterhin ansprechende Inhalte produzieren können. Diese Cookies können Dinge wie die Zeit, die Sie auf der Website verbringen, oder die Seiten, die Sie besuchen, verfolgen, was uns hilft zu verstehen, wie wir die Website für Sie verbessern können.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Tests von neuen Funktionen</p>
                    <p>
                      Von Zeit zu Zeit testen wir neue Funktionen und nehmen subtile Änderungen an der Art und Weise vor, wie die Website bereitgestellt wird. Wenn wir noch neue Funktionen testen, können diese Cookies verwendet werden, um sicherzustellen, dass Sie eine konsistente Erfahrung auf der Website erhalten, während wir verstehen, welche Optimierungen unsere Benutzer am meisten schätzen.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Verkäufe und Kaufverhalten</p>
                    <p>
                      Da wir Produkte verkaufen, ist es wichtig für uns, Statistiken darüber zu verstehen, wie viele der Besucher unserer Website tatsächlich einen Kauf tätigen, und als solche werden diese Cookies solche Daten verfolgen. Dies ist wichtig für Sie, da es bedeutet, dass wir genaue Geschäftsvorhersagen machen können, die es uns ermöglichen, unsere Werbe- und Produktkosten zu überwachen, um den bestmöglichen Preis zu gewährleisten.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Google AdSense</p>
                    <p>
                      Der von uns verwendete Google AdSense-Dienst zur Schaltung von Werbung verwendet ein DoubleClick-Cookie, um relevantere Anzeigen im Web zu schalten und die Anzahl der Male zu begrenzen, die Ihnen eine bestimmte Anzeige angezeigt wird.
                    </p>
                    <p>
                      Weitere Informationen zu Google AdSense finden Sie in den offiziellen Google AdSense-Datenschutz-FAQs.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Affiliate-Tracking-Cookies</p>
                    <p>
                      Mehrere Partner werben in unserem Namen und Affiliate-Tracking-Cookies ermöglichen es uns einfach zu sehen, ob unsere Kunden über eine unserer Partnerseiten auf die Website gekommen sind, damit wir sie entsprechend gutschreiben können und, wo zutreffend, unseren Affiliate-Partnern erlauben können, Ihnen gegebenenfalls Boni zu gewähren, die sie Ihnen für einen Kauf bereitstellen.
                    </p>
                  </li>
                  <li className="mt-4">
                    <p className="font-semibold">Social-Media-Cookies</p>
                    <p>
                      Wir verwenden auch Social-Media-Buttons und/oder Plugins auf dieser Website, die es Ihnen ermöglichen, sich auf verschiedene Weise mit Ihrem sozialen Netzwerk zu verbinden. Damit diese funktionieren, setzen die folgenden Social-Media-Seiten, einschließlich; Liste der sozialen Netzwerke, deren Funktionen Sie in Ihre Website integriert haben, Cookies über unsere Website, die verwendet werden können, um Ihr Profil auf ihrer Website zu verbessern oder zu den Daten beizutragen, die sie für verschiedene in ihren jeweiligen Datenschutzrichtlinien dargelegte Zwecke halten.
                    </p>
                  </li>
                </ul>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Weitere Informationen</h2>
                <p className="mt-8">
                  Hoffentlich hat das die Dinge für Sie geklärt, und wie bereits erwähnt, wenn es etwas gibt, bei dem Sie sich nicht sicher sind, ob Sie es benötigen oder nicht, ist es in der Regel sicherer, Cookies aktiviert zu lassen, falls es mit einer der Funktionen interagiert, die Sie auf unserer Website verwenden.
                </p>
                <p className="mt-8">
                  Für allgemeinere Informationen zu Cookies lesen Sie bitte den <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">Cookies-Richtlinien-Artikel</a>.
                </p>
                <p className="mt-8">
                  Wenn Sie jedoch noch weitere Informationen suchen, können Sie uns über eine unserer bevorzugten Kontaktmethoden kontaktieren:
                </p>
                <ul className="mt-8 list-disc list-inside">
                  <li> E-Mail: <a className="font-semibold" href="mailto:hello@tilltech.ch">hello@tilltech.ch</a></li>
                  <li>Indem Sie diesen Link besuchen: <a className="font-semibold" href="/kontakt">tilltech.ch/kontakt</a> </li>
                  <li>Telefon:  <a className="font-semibold" href="tel:+41 79 595 0123">+41 79 595 0123</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
