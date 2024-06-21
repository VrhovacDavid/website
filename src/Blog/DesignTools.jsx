
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const tools = [
  {
    "id": 1,
    "title": "Figma",
    "description": "Design Tool für Vektor Grafiken",
    "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Pinimg-Bild.jpg",
    "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Figma.jpg.webp",
    "f1": "Sehr viele Gratis Plugins",
    "f2": "Plattformübergreifende Nutzung",
    "f3": "Umfassende Design- und Prototyping-Tools",
    "f4": "Riesige Community für Templates",
    "cta": "Gratis Benutzen",
    "link": "https://www.figma.com",
    "urteil": "Figma ist ein führendes Grafik Design Tool, das speziell für die Erstellung von Vektorgrafiken und Benutzeroberflächen entwickelt wurde. Es bietet beeindruckende Funktionen wie Echtzeit-Kollaboration, plattformübergreifende Nutzung und umfassende Design- und Prototyping-Tools. Mit integrierten Designbibliotheken und einer benutzerfreundlichen Oberfläche ermöglicht Figma Designern, effizient und kreativ zu arbeiten. Es ist ein unverzichtbares Werkzeug für moderne Designer, die nahtlos in Teams arbeiten und hochwertige Designs erstellen möchten."
},



{
    "id": 2,
    "title": "Blender",
    "description": "Ein 3D Grafikprogramm",
    "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Blender-Logo-ohne-Text.png",
    "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Modellierung-02-1280x720-1.jpg",
    "f1": "Umfangreiche 3D-Modellierungswerkzeuge",
    "f2": "Erweiterte Rendering-Funktionen",
    "f3": "Animierungs- und Rigging-Tools",
    "f4": "Kostenlos und Open-Source",
    "cta": "Kostenlos Nutzen",
    "link": "https://www.blender.org",
    "urteil": "Blender ist ein hochentwickeltes 3D-Grafikprogramm, das eine breite Palette von Funktionen für 3D-Modellierung, Rendering, Animation und Rigging bietet. Es ist sowohl bei Profis als auch bei Hobbyisten beliebt und zeichnet sich durch seine leistungsstarken Werkzeuge und seine Flexibilität aus. Als Open-Source-Software ist Blender kostenlos verfügbar und wird kontinuierlich weiterentwickelt. Es ist eine hervorragende Wahl für alle, die in die Welt der 3D-Grafik und Animation einsteigen möchten oder nach einer vielseitigen Lösung für professionelle Projekte suchen."
},

{
  "id": 3,
  "title": "Canva",
  "description": "Die größte Bibliothek visueller Elemente",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Canva-Logo.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Canva-Insider.webp",
  "f1": "Unzählige Kostenlose Vorlagen für alle Desig",
  "f2": "Speichert Farbpaletten",
  "f3": "Geeignet für Teamwork",
  "f4": "Animations- und Videoerstellung",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.canva.com",
  "urteil": "Canva ist ein äußerst beliebtes Online-Design-Tool, das eine riesige Bibliothek visueller Elemente bietet. Es verfügt über zahlreiche Vorlagen, speichert Farbpaletten und ist ideal für die Zusammenarbeit im Team geeignet. Neben der Erstellung von Grafiken können auch Animationen und Videos leicht erstellt werden. Canva ist besonders nützlich für Benutzer, die schnell und effizient beeindruckende Designs erstellen möchten, ohne umfassende Designkenntnisse zu benötigen. Es ist eine ausgezeichnete Wahl für Einzelpersonen und Teams, die ansprechende visuelle Inhalte für verschiedene Zwecke erstellen möchten."
},
{
  "id": 4,
  "title": "Adobe Firefly",
  "description": "Ein AI Grafik Programm",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Adobe-Firefly-Logo.svg_.png.webp",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Adobe-Firefly-1.webp",
  "f1": "Intuitive Funktionen",
  "f2": "Vektor-orientierte Werkzeuge",
  "f3": "Zeichenoptionen",
  "f4": "Detailliertes Tutorial",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.adobe.com/firefly",
  "urteil": "Adobe Firefly ist ein innovatives AI-gestütztes Grafikprogramm, das durch intuitive Funktionen und vektor-orientierte Werkzeuge besticht. Es bietet vielseitige Zeichenoptionen und ein detailliertes Tutorial, das Benutzern hilft, das Beste aus der Software herauszuholen. Firefly ermöglicht es Designern, kreative Bildbearbeitungen nahtlos und effizient durchzuführen. Dank der benutzerfreundlichen Oberfläche und den leistungsstarken Funktionen ist es eine ausgezeichnete Wahl für sowohl Anfänger als auch erfahrene Grafikdesigner, die hochwertige und kreative Designs erstellen möchten."
},

{
  "id": 5,
  "title": "Adobe Express",
  "description": "Eine einfache Version von ACS",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Adobe-Express-Logo-256px.png.webp",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Adobe-Express-Media.png",
  "f1": "Benutzerfreundliche Oberfläche",
  "f2": "Cloud-basierte Plattform",
  "f3": "App-Analytics und Berichte",
  "f4": "Echtzeit-Updating",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.adobe.com/express",
  "urteil": "Adobe Express, früher bekannt als Adobe Spark, ist ein einfach zu bedienendes Grafikdesign-Tool, das eine benutzerfreundliche Oberfläche und eine Cloud-basierte Plattform bietet. Es ermöglicht Nutzern, schnell und effizient beeindruckende Designs zu erstellen, ohne umfassende Designkenntnisse zu benötigen. Mit Funktionen wie App-Analytics und Berichten sowie Echtzeit-Updating ist Adobe Express eine hervorragende Wahl für kleine Unternehmen und Einzelpersonen, die professionelle Grafiken und Inhalte erstellen möchten. Es ist besonders praktisch für die schnelle Erstellung von Marken- und Werbegrafiken."
}
,
{
  "id": 6,
  "title": "Vectr",
  "description": "Für Kollaborationen",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Vectr-Logo.jpg",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Vectr.png",
  "f1": "Plattformübergreifende und Browser-Versionen",
  "f2": "Intuitive, leicht zu bedienende Oberfläche",
  "f3": "Einfaches Teilen von Projekten",
  "f4": "WordPress-Integration",
  "cta": "Kostenlos Nutzen",
  "link": "https://vectr.com",
  "urteil": "Vectr ist ein vielseitiges Design-Tool, das sich ideal für die Erstellung verschiedenster Projekte eignet, sei es für T-Shirt-Drucke oder umfangreiche Webseiten-Grafiken. Es bietet eine plattformübergreifende Nutzung und Browser-Versionen, eine intuitive Benutzeroberfläche und einfache Projektfreigabe. Besonders praktisch ist die WordPress-Integration, die das Einbinden von Grafiken auf Webseiten erleichtert. Vectr hat eine flache Lernkurve und bietet etwa 30 verschiedene Tutorials auf seiner Website, um den Einstieg zu erleichtern. Es ist eine hervorragende, kostenlose Alternative zu Adobe Illustrator, die sich perfekt für Teamarbeit eignet."
}
,
{
  "id": 7,
  "title": "Renderforest",
  "description": "Design- und Marketing-Tools",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Renderforest-Logo.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Renderforest-Big.webp",
  "f1": "Alle Arten von Grafiken erstellen",
  "f2": "Integrierte Marketing-Tools",
  "f3": "Ohne Installation",
  "f4": "Sammlung von Design-Vorlagen",
  "cta": "Kostenlos Nutzen",
  "link": "https://renderforest.com",
  "urteil": "Renderforest ist ein Online-Service, mit dem Sie hochwertige grafische Designs erstellen können. Der Prozess ist dank der zahlreichen anpassbaren Vorlagen sehr intuitiv. Sie finden in diesem Grafikprogramm verschiedene Optionen für die Erstellung von Logos, Mockups, SMM- und Promo-Grafiken sowie Drucksachen. Eine passende Vorlage finden Sie ganz einfach – entweder gehen Sie über die Liste oder Sie geben Ihr entsprechendes Schlagwort in die Suchfunktion ein. Zudem können Sie sich anzeigen lassen, wie eine bestimmte Vorlage in einer Instagram-Story, einem Post oder als YouTube-Thumbnail aussehen wird. Wenn Sie ihre gewählte Vorlage personalisieren wollen, können Sie das direkt im Programm tun, ohne weitere Tools von Drittanbietern verwenden zu müssen. Sie können zum Beispiel Text hinzufügen und formatieren, Elemente, Symbole und Formen einfügen und Bilder hochladen."
},

{
  "id": 8,
  "title": "Corel Vector",
  "description": "Für Anfänger",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Corel-Vector-Logo.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/CorelBig.webp",
  "f1": "Riesige Bibliothek an Vektorelementen",
  "f2": "Intuitiver Benutzerbereich und Workflow",
  "f3": "Mit AI und Sketch-Dateien kompatibel",
  "f4": "Nur 15-tägige kostenlose Probeversion",
  "cta": "Kostenlos Nutzen",
  "link": "https://coreldraw.com",
  "urteil": "Die Entwickler des Grafikprogramms Corel Vector (früher Gravit Designer) bieten viele Möglichkeiten. Dieses Design-Programm liegt irgendwo zwischen Inkscape und Vectr. Es besitzt mehr Funktionen als Vectr und ist so intuitiv wie Inkscape. Sie können damit alles machen, was Sie von einer Vektor-Software erwarten würden, und bekommen ein paar Tools, die üblicherweise in Digital-Asset-Management-Software enthalten sind. Sie können Kurven erstellen, Pfade bearbeiten, mit Ebenen arbeiten und die Messerfunktion verwenden. SVG, PDF, JPEG, SKETCH werden unterstützt und seit neuestem auch EPS-Formate zum Importieren und Exportieren. Zudem können Sie auf verschiedenen Plattformen an Ihren Projekten arbeiten. Gravit Cloud bietet einen reibungslosen Dateitransfer zwischen den Desktop- und Online-Versionen."
},

{
  "id": 9,
  "title": "Klaviyo",
  "description": "E-Mail-Marketing-Plattform",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Klaviyo-Logo.webp",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Klaviyo-Banner.webp",
  "f1": "Automatisierte E-Mail-Kampagnen",
  "f2": "Integration mit E-Commerce-Plattformen",
  "f3": "Detaillierte Analysen und Berichte",
  "f4": "Personalisierte Marketingstrategien",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.klaviyo.com",
  "urteil": "Klaviyo ist eine leistungsstarke E-Mail-Marketing-Plattform, die speziell für E-Commerce-Unternehmen entwickelt wurde. Sie bietet automatisierte E-Mail-Kampagnen, die sich nahtlos in verschiedene E-Commerce-Plattformen integrieren lassen. Mit detaillierten Analysen und Berichten können Sie den Erfolg Ihrer Kampagnen genau verfolgen und optimieren. Klaviyo ermöglicht es Ihnen, personalisierte Marketingstrategien zu entwickeln und umzusetzen, um Ihre Kunden auf einer tieferen Ebene zu erreichen und zu binden. Die Benutzeroberfläche ist intuitiv und einfach zu bedienen, was sie zu einer idealen Wahl für Unternehmen jeder Größe macht."
},

{
  "id": 10,
  "title": "Easelly",
  "description": "Für Infografiken",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Easelly-Logo.jpg",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Easelly-Visuals.png",
  "f1": "Diagramme online erstellen",
  "f2": "Sofortiger Upload und leichtes Teilen",
  "f3": "Tolle Bibliothek visueller Elemente",
  "f4": "Keine automatische Speicherung",
  "cta": "Kostenlos Nutzen",
  "link": "https://easel.ly",
  "urteil": "Die nächste Option könnte zu kreativ für diejenigen erscheinen, die noch nicht mit Infografiken gearbeitet haben, besonders wenn es um eine Auswahl verschiedener Elemente in Form sich bewegender Menschen, diversen Linien und Diagrammen geht. Sie können mit diesem Grafikprogramm kostenlos verschiedene Infografiken erstellen und bearbeiten und im Format PDF oder JPG darstellen. Die Grundversion des Grafikprogramms ist kostenlos, es sind aber zusätzliche Elemente für eine kleine Gebühr verfügbar. Allerdings ist Easelly im Vergleich zu anderen Grafikprogrammen weitaus günstiger."
},

{
  "id": 11,
  "title": "Inkscape",
  "description": "Für Vektorgrafiken",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Inkscape-Logo.svg_.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Inkscape-Big.png",
  "f1": "Komplett kostenlos",
  "f2": "Viele Filter",
  "f3": "Umfasst neue Tools für schöne Effekte",
  "f4": "Viele Lehrinhalte",
  "cta": "Kostenlos Nutzen",
  "link": "https://inkscape.org",
  "urteil": "Dieses kostenlose Open-Source-Programm für Vektorgrafiken ist allgemein als kostenloses Pendant zu Adobe Illustrator bekannt. Der Unterschied besteht darin, dass Inkscape Scalable Vector Graphic (SVG) als Hauptformat verwendet. Designer, die sich bereits mit Vektorgrafiken auskennen, beherrschen dieses Grafikprogramm schnell. Mit ihm können Sie Projekte jeglicher Komplexitätsstufen erstellen. Im Wettkampf zwischen Inkscape und Photoshop gewinnt das Programm für angehende Grafikdesigner, da es eine Vielzahl an modernen Werkzeugen und Effekten bietet, darunter komplexe Pfadbearbeitung, Node-Editing, Bitmap-Tracing und pfadbasierter Text. Beim Blick auf die Website wird sofort klar, dass es sich um ein professionelles Tool für Windows, Mac OS X und Linux handelt. Auf einer separaten Seite finden sich Anleitungen und Hinweise zum Download."
},

{
  "id": 12,
  "title": "DesignHill",
  "description": "Schnelles Tempo",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Designhill-Editor-Bild.jpg",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Designhill-Editor-Bild.jpg",
  "f1": "Keine Design-Vorerfahrung erforderlich",
  "f2": "Klickbasierte übersichtliche & einfache Oberfläche",
  "f3": "Kreative Freiheit",
  "f4": "Vorgefertigte Layouts",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.designhill.com",
  "urteil": "Designhill Studio ist ein leistungsstarkes Programm, um Fotos zu bearbeiten, und bietet eine innovative und benutzerfreundliche Oberfläche. Es wird weltweit von Millionen von Unternehmen und Menschen genutzt. Sie können damit nicht nur kostenlos ein Bild bearbeiten, sondern auch Ihr Logo erstellen & personalisieren. Die Software bietet eine umfassende Sammlung an Vorlagen, Elementen und Effekten, mit der die Bearbeitung ein Kinderspiel ist. Noch interessanter ist die Tatsache, dass das Grafikprogramm kostenlos ist. Designer und Einsteiger können damit verschiedenste Fotos bearbeiten und mit dem Programm Grafiken erstellen."
},

{
  "id": 13,
  "title": "GIMP",
  "description": "Leistungsstarkes Toolset",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/GIMP-Icon.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Gimp-featured.webp",
  "f1": "Lebendige und moderne UI",
  "f2": "Einfach zu bedienen",
  "f3": "Anpassbare Oberfläche",
  "f4": "Vielfältig nutzbar",
  "cta": "Kostenlos Herunterladen",
  "link": "https://www.gimp.org",
  "urteil": "GIMP ist ein Grafikprogramm, das sehr gut durchdacht und überraschenderweise als eines der besten Bildbearbeitungsprogramme kostenlos verfügbar ist. Es bietet vielfältige Funktionen, um Fotos zu bearbeiten, und das Programm läuft auf allen populären Betriebssystemen. GIMP eignet sich für Leute, die nach einem soliden Grafikprogramm suchen, mit dem sich verschiedenste Grafiken erstellen, Fotos bearbeiten, Bilder oder Mock-ups gestalten lassen. Beim Vergleich GIMP vs. Photoshop wird schnell klar, dass die Benutzeroberflächen sehr ähnlich sind. Einige Werkzeugsymbole sind gleich und der Ebenenaufbau ist nicht schlechter als der von Photoshop. Die Entwickler berücksichtigen die Wünsche der Nutzer und tun alles, um die Funktionen der Software zu verbessern."
},

{
  "id": 14,
  "title": "DesignCap",
  "description": "Grafikdesign für Anfänger",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Designcap-Logo.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/DesignCap-Screenshot.webp",
  "f1": "Benutzerfreundliche Oberfläche",
  "f2": "Viele Vorlagen und Elemente",
  "f3": "Einfache Anpassung",
  "f4": "Breite Palette an Designmöglichkeiten",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.designcap.com",
  "urteil": "DesignCap ist eine benutzerfreundliche Online-Plattform für Grafikdesign, die sich perfekt für Anfänger eignet. Es bietet eine Vielzahl von Vorlagen und Designelementen, die leicht anpassbar sind, um verschiedene kreative Projekte zu realisieren. Von Postern und Flyern bis hin zu Infografiken und sozialen Medien bietet DesignCap eine breite Palette an Designmöglichkeiten. Mit seiner intuitiven Benutzeroberfläche ermöglicht es DesignCap den Nutzern, schnell und einfach beeindruckende Designs zu erstellen, ohne dass umfangreiche Vorkenntnisse erforderlich sind."
},

{
  "id": 15,
  "title": "Lunacy",
  "description": "Bietet Echtzeit-Kollaborationen",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Lunacy.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Lunacy.jpg",
  "f1": "Geringe Hardware-Anforderungen",
  "f2": "Enthält KI-gestützte Funktionen",
  "f3": "Flache Lernkurve",
  "f4": "Kann online und offline verwendet werden",
  "cta": "Kostenlos Nutzen",
  "link": "https://icons8.com/lunacy",
  "urteil": "Mit Lunacy können Sie Vektorgrafiken für UI/UX und Webdesign gestalten. Es bietet eine bessere Leistung als Figma und ist besser aufgebaut als Sketch! Nutzer können zudem in Echtzeit zusammen an einem Projekt arbeiten, selbst wenn unterschiedliche Plattformen verwendet werden. Diese Software hat geringe technische Anforderungen und reagiert selbst auf mittelstarken Laptops sehr gut. Mit Lunacy können Sie Projekte erstellen und bearbeiten und diese sowohl in der Cloud als auch lokal speichern, da bei Bedarf einfach zwischen den beiden Modi gewechselt werden kann. Die Software unterstützt auch das Sketch-Format, Sie können also die wichtigsten Übergabe- und Versionskontrollfunktionen wie Avocode, Zeplin, Abstract, Simplie und andere nutzen. Praktischerweise können Sie bei Bedarf .sketch-Projekte auch bequem in Figma und XD öffnen."
},

{
  "id": 16,
  "title": "SVG-Edit",
  "description": "Für einfache Aufgaben",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/SVG-Edit-Avatar.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/SVG-Edit-Screenshot.png",
  "f1": "Einfache Benutzeroberfläche",
  "f2": "Open-Source Webcode",
  "f3": "Schnelles Tempo",
  "f4": "Node-Management ist nicht ideal",
  "cta": "Kostenlos Nutzen",
  "link": "https://svgedit.netlify.app/editor/index.html",
  "urteil": "SVG-Edit ist ein einfaches Grafikprogramm, das genau das tut, was der Name sagt: Sie können damit SVG-Dateien erstellen und bearbeiten. Das Grafikprogramm ist kostenlos in den meisten Browsern nutzbar und umfasst die Standardfunktionen. Sie können es als Online-Zeichenprogramm nutzen und mit dem Stift kreativ werden, Formen erstellen, Linien in Pfade umwandeln sowie Farben und Bilder hinzufügen. Das fertige Projekt können Sie in gängige Formate wie WMP, JPG, BMP, GIF, TIFF und natürlich SVG exportieren. Die Benutzeroberfläche ist recht einfach zu bedienen und erinnert an ein Programm zum Zeichnen aus den frühen 2000ern."
},

 
{
  "id": 17,
  "title": "Daz 3D",
  "description": "Für die Erstellung von 3D-Grafiken",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/DAZ-3D-Logo.jpg",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Genesis-DAZ3D-iRender-02.jpg",
  "f1": "Figuren sehen realistisch aus",
  "f2": "Bietet Morphing-Tools, Gesichtsausdrücke, Bewegungen",
  "f3": "Ermöglicht 3D-Content-Modeling, Animation, Rendering",
  "f4": "Hat ein 3D-Gestaltungstool",
  "cta": "Kostenlos Nutzen",
  "link": "https://www.daz3d.com",
  "urteil": "Dies ist das beste kostenlose Grafikprogramm für Animatoren, Illustratoren und Designer für die Gestaltung von 3D-Animationen, Figuren-Posing und Rendering. Die Software stellt eine Kombination verschiedener Grafikdesign-Plattformen, Lösungen und Ergänzungen dar, wie Hexagon, Genesis 8 und Daz Studio. Mit Daz 3D lassen sich überzeugende digitale Lokalitäten, Animationen und Illustrationen gestalten. Die universell einsetzbare Software umfasst viele Funktionen, mit denen Sie Szenen und Figuren bearbeiten und zu einem Meisterwerk machen können. Mit der Figurenplattform und dem Charakter-Engine von Daz 3D können detaillierte Figuren geschaffen werden."
},
{
  "id": 18,
  "title": "Krita",
  "description": "Zum Zeichnen",
  "imageProgramm": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Krita-Logo.png",
  "img": "https://backend.dv-it.ch/wp-content/uploads/2024/06/Krita-5.0.0-Screenshot.png",
  "f1": "Enthält eine Fülle von Illustrationen und Beispielen",
  "f2": "Nicht schwer zu bedienen",
  "f3": "Hell und interessant",
  "f4": "Zeigt grundlegende sowie fortgeschrittene Methoden",
  "cta": "Kostenlos Herunterladen",
  "link": "https://krita.org",
  "urteil": "Krita ist eines der besten Bildbearbeitungsprogramme, das kostenlos als Open Source für Illustratoren und Concept Artists verfügbar ist. Gerade für Comiczeichner ist es nützlich, da eine Reihe an Werkzeugen für genau deren Bedürfnisse enthalten ist, wie Halbtöne und vorgefertigte Vorlagen. Die Software eignet sich aber auch für andere Formen des Zeichnens. Krita umfasst eine große Auswahl an Zeichenwerkzeugen, darunter Fluchtpunkte, glatte Formen, Ebenen-Masken und vieles mehr. Das Programm stellt außerdem eine gute Alternative zu Adobe PS dar und in Vergleichsrezensionen Krita vs. Photoshop werden die Ähnlichkeiten und Unterschiede ersichtlich."
},


];

export default function DesignTools() {
  return (
    <div className='pattern-bg'>
      <Header />
      <div className=" px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-small font-semibold leading-7 text-indigo-600">Grafik Design</p>
          <h1 className="mt-2 text-h4 leading-7 font-bold tracking-tight text-gray-900 sm:text-4xl">DIE 18 BESTEN KOSTENLOSEN GRAFIKPROGRAMME</h1>

          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover my-4"
            src="https://backend.dv-it.ch/wp-content/uploads/2024/06/Thumbnail-Blog.webp"
            alt=""
          />

          <p className="mt-8 text-sup">
          Du glaubst, dass kostenlose Grafik Programme nichts taugen? Lass dich vom Gegenteil überzeugen! In der heutigen Zeit bieten viele Gratisprogramme für Bildbearbeitung Funktionen, die den kostenpflichtigen Alternativen ebenbürtig sind. Diese kostenlosen Tools überzeugen nicht nur mit ihren grundlegenden Features, sondern bieten oft auch fortgeschrittene Optionen. Um dir die Auswahl zu erleichtern, habe ich eine Übersicht der besten kostenlosen Grafik Design Programme erstellt. Diese Programme erfüllen deine kreativen Ansprüche und schonen gleichzeitig dein Budget.


          </p>
          <h2 className=" mt-12 text-h4 leading-7 font-semibold tracking-tight text-gray-900 sm:text-4xl">Top 18 unter den Programmen zur Erstellung kostenloser Grafiken</h2>


          <div className="py-6">
            <ol className="list-decimal text-base  ml-5">
              {tools.map((tool) => (
                <li key={tool.id}>
                  <a href={`#tool-${tool.id}`} className="text-blue-500 hover:underline">
                    {tool.title}
                  </a> - {tool.description}
                </li>
              ))}
            </ol>

            <p className='mt-6 text-base'>
            Bevor du ein für dich passendes kostenloses Grafik Programm auswählst, solltest du zuerst deinen Kenntnisstand und deine Fähigkeiten einschätzen. Für Einsteiger ist es sinnvoll, ein benutzerfreundliches Produkt zu wählen, das Drag-and-Drop unterstützt und eine große Auswahl an fertigen Vorlagen bietet. Erfahrene Benutzer hingegen bevorzugen oft Programme, die eine vollständige Projekterstellung von A bis Z ermöglichen. Achte auch darauf, ob das Bearbeitungsprogramm online oder offline genutzt wird, damit es deinen Bedürfnissen entspricht. Meine Liste berücksichtigt auch die technischen Anforderungen an deinen PC, sodass du alle vorgestellten kostenlosen Grafik Programme problemlos nutzen kannst, selbst wenn du keinen High-End-Computer besitzt.
            </p>


            {tools.map((tool) => (
              <div id={`tool-${tool.id}`} key={tool.id} className="my-12">
                <h3 className="text-2xl font-bold">{tool.title}</h3>
                <p className="mt-2"> {tool.description}
                </p>

                <div className='flex sm:flex-row flex-col justify-between items-center'>

                  <div className=' mt-4 rounded-xl p-2  border-2'>
                    <div className="flex flex-row justify-start align-middle items-center content-center">
                      <CheckBadgeIcon className="h-5 w-5 text-sky-500 stroke-white" />
                      <p className="ml-2 text-gray-500 text-base">{tool.f1}</p>
                    </div>
                    <div className="flex flex-row justify-start align-middle items-center content-center">
                      <CheckBadgeIcon className="h-5 w-5 text-sky-500 stroke-white" />
                      <p className="ml-2 text-gray-500 text-base">{tool.f2}</p>
                    </div>
                    <div className="flex flex-row justify-start align-middle items-center content-center">
                      <CheckBadgeIcon className="h-5 w-5 text-sky-500 stroke-white" />
                      <p className="ml-2 text-gray-500 text-base">{tool.f3}</p>
                    </div>
                    <div className="flex flex-row justify-start align-middle items-center content-center">
                      <CheckBadgeIcon className="h-5 w-5 text-sky-500 stroke-white" />
                      <p className="ml-2 text-gray-500 text-base">{tool.f4}</p>
                    </div></div>
                  <div className='bg-white p-4 items-center justify-center flex flex-col rounded-xl'>
                    <img src={tool.imageProgramm} alt={tool.title} className='my-2 w-40 rounded-xl ' />
                    <a
                      href={tool.link}
                      className="rounded-md bg-indigo-500 border-2 border-indigo-500 px-3.5 py-1.5 text-small font-semibold text-white shadow-sm ">{tool.cta}</a>
                    <a  ></a>
                  </div>

                </div>
                <p className='py-4'> <span className='text-sup font-semibold'>Urteil:</span> {tool.urteil}</p>
                <img src={tool.img} alt={tool.title} className='my-2 w-full shadow-xl rounded-xl ' />
              </div>
            ))}
          </div>

























          
          </div>      
          </div>

      <Footer />
    </div>
  )
}
