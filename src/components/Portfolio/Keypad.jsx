import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Header from '../Header'
import Footer from '../Footer'
import React from 'react'



const data = [

    {
        imgelink:
            "/KeyPadPreview.webp",
    },
    {
        imgelink:
            "/KeyPadBullshot.webp",
    },
    {
        imgelink:
            "/KeyPadClodeSide.webp",
    },
    {
        imgelink:
            "/KeyPadTopDown.webp",
    },
    {
        imgelink:
            "/KeyPadFrontSide.webp",
    },
    {
        imgelink:
            "/KeyPadClose.webp",
    },


];





export default function Keypad() {

    const [active, setActive] = React.useState(
        "/KeyPadPreview.webp",
    );



    return (
        <div className="pattern-bg  " >
            <Header />

            <div className="py-8 sm:py-16 ">

                <div className="relative isolate overflow-hidden   px-6  sm:py-32 lg:overflow-visible lg:px-0">

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-4xl">
                                    <p className="text-small font-semibold leading-7 text-indigo-600">Concept Work</p>
                                    <h1 className="mt-2 text-h2 leading-10 font-bold tracking-tight text-gray-900 ">3D Modell DPOFIRS KEYPAD</h1>
                                    <p className="mt-6 text-base sm:text-sup text-gray-700">
                                        In diesem Projekt habe ich ein realistisches 3D Modell eines Keypads in Blender erstellt. Der Weg von einer einfachen Referenz zu einem hochauflösenden Produktfoto war spannend und herausfordernd.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                className="w-[40rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
                                src="/Notepad.webp"
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  max-w-4xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-4xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <h2 className="text-h4 font-semibold mb-4">Einführung</h2>
                                    <p className="mb-8 text-base sm:text-sup">
                                        Auf dieser Seite erhältst du einen detaillierten Einblick in meinen Arbeitsprozess, begleitet von hochwertigen
                                        Produktfotos und einem abschliessenden YouTube-Video.
                                    </p>

                                    <h3 className="text-h5 font-semibold mb-4">Prozess</h3>
                                    <ul className="list-disc list-inside mb-8 text-base sm:text-sup">
                                        <li>Beschreibung der Herangehensweise an das Projekt</li>
                                        <li>Detaillierte Schritte von der Modellierung über das Texturieren und Beleuchten bis hin zur finalen Renderung</li>
                                        <li>Herausforderungen und Lösungen</li>
                                    </ul>

                                    <h3 className="text-h5 font-semibold mb-4">Produktfotos</h3>
                                    <ul className="list-disc list-inside mb-8 text-base sm:text-sup">
                                        <li>Hochauflösende Bilder des finalen 3D Modells</li>
                                        <li>Verschiedene Ansichten und Perspektiven</li>
                                    </ul>

                                    <h3 className="text-h5 font-semibold mb-4">YouTube-Video</h3>
                                    <ul className="list-disc list-inside mb-8 text-base sm:text-sup">
                                        <li>Dokumentation des gesamten Prozesses</li>
                                        <li>Einblicke hinter die Kulissen und Erklärungen der einzelnen Schritte</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="overflow-hidden py-12">
                    <div className="mx-auto lg:max-w-7xl  max-w-4xl px-6 lg:px-8">
                        <div className="lg:max-w-4xl pb-6 ">

                        </div>
                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 pt-4 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center mt-4">
                            <div className="lg:ml-auto lg:pl-4 lg:pt-4">

                                <div className="lg:max-w-lg">

                                    <p className="text-small font-semibold  text-indigo-600">Konzept</p>
                                    <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 ">Recherche</h3>
                                    <p className="mt-2 text-base sm:text-sup text-gray-600">
                                        Im ersten Schritt meines Projekts zur Erstellung eines 3D-Modells eines Keypads begann ich mit der Konzeption. Zunächst suchte ich auf Google nach Referenzbildern von existierenden Keypads. Diese halfen mir, verschiedene Designs und Funktionen zu verstehen.


                                    </p>
                                    <p className="mt-4 text-base sm:text-sup text-gray-600">
                                        Anschließend erstellte ich eigene Skizzen, wobei ich die Anordnung der Tasten und die Ergonomie des Keypads berücksichtigte. Diese Kombination aus Recherche und Skizzieren diente als Grundlage für die nächste Phase: die Modellierung in Blender. </p>
                                    <div className='my-8'>
                                        <a
                                            href='/#pricing'
                                            className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                                        >
                                            YouTube Video anschauen
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:items-start lg:justify-end ">
                                <img src="/NotePadStep1.webp" alt="TillTech Searching an Image" className='rounded-xl' />
                            </div>
                        </div>
                    </div>
                </div>










                <div className="overflow-hidden pb-12 ">
                    <div className="mx-auto lg:max-w-7xl  max-w-4xl px-6 lg:px-8">

                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center mt-4">
                            <div className="lg:ml-auto lg:pl-4 lg:pt-4">

                                <div className="lg:max-w-lg">

                                    <p className="text-small font-semibold  text-indigo-600">Blender</p>
                                    <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10">Erstellung des 3D Modells</h3>
                                    <p className="mt-6 text-base sm:text-sup text-gray-600">
                                        Im nächsten Schritt begann ich mit der detaillierten Modellierung des Keypads in Blender. Ich formte das Gehäuse, platzierte die Tasten und fügte feine Details hinzu, um das Modell so realistisch wie möglich zu gestalten.


                                    </p>
                                    <p className="mt-6 text-base sm:text-sup text-gray-600">
                                        Nach der Modellierung ging ich zum Texturieren über. Ich wählte passende Materialien und Texturen aus, um die Oberflächen authentisch wirken zu lassen.
                                    </p>
                                    <p className="mt-6 text-base sm:text-sup text-gray-600">
                                        Anschließend setzte ich die Beleuchtung, um das Keypad optimal in Szene zu setzen und die verschiedenen Materialien hervorzuheben.
                                    </p>
                                    <p className="mt-6 text-base sm:text-sup text-gray-600">
                                        Zum Schluss renderte ich das Modell, um hochwertige Bilder zu erzeugen, die die Details und das Design des Keypads perfekt darstellen.</p>
                                    <div className='my-4'>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:items-start lg:justify-end lg:order-first">

                                <img src="/BlenderIMG.webp" alt="TillTech Searching an Image" className='rounded-xl' />

                            </div>
                        </div>
                    </div>
                </div>




                <div className="mx-auto lg:max-w-7xl  max-w-4xl px-6 lg:px-8 pb-12 ">
                    <div className="lg:max-w-4xl  ">
                        <h2 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 sm:text-4xl">Materialien</h2>
                        <p className="mt-6 text-base sm:text-sup text-gray-700">
                            Ich habe für mein Projekt hochwertige Texturen verwendet und deren Form und Farbe angepasst, um sie perfekt auf das Design und die Atmosphäre des KeyPads abzustimmen.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">

                        <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                            <img className="h-48  self-center" src="SuzanneGold.webp" alt="" />
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <h3 className='text-h5 font-semibold pb-4 text-center'>Brushed Gold</h3>
                                <blockquote className="text-base sm:text-sup text-gray-900">
                                    <p>
                                        Für das Keypad habe ich die Textur "Brushed Gold" verwendet, um eine luxuriöse und edle Oberfläche der Knöpfe zu erzeugen. Diese Textur verleiht dem Keypad eine realistische Metalloptik mit feinen, gebürsteten Linien, die das Licht elegant reflektieren und eine hochwertige Anmutung schaffen.
                                    </p>
                                </blockquote>

                            </figure>
                        </div>
                        <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">

                            <img className="h-48  self-center" src="/SuzanneBumpedMetal.webp" alt="" />
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <h5 className='text-h5 font-semibold pb-4 text-center'>Bumped Metal</h5>
                                <blockquote className="text-base sm:text-sup  text-gray-900">
                                    <p>
                                        Die Textur "Bumped Metal" kam zum Einsatz, um dem Keypad eine robuste und industrielle Ausstrahlung bei den Tasten zu geben. Diese Textur sorgt für eine strukturierte Oberfläche mit erhabenen Bereichen, die dem Modell Tiefe und Charakter verleihen und gleichzeitig die Funktionalität und Haltbarkeit des Designs betonen.
                                    </p>
                                </blockquote>

                            </figure>
                        </div>
                    </div>
                </div>


                <div className="overflow-hidden py-4s">
                    <div className="mx-auto lg:max-w-7xl  max-w-4xl px-6 lg:px-8">

                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                            <div className="lg:ml-auto lg:pl-4 lg:pt-4">

                                <div className="lg:max-w-lg">

                                    <p className="text-small font-semibold  text-indigo-600">Rendering</p>
                                    <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10">Abschluss</h3>
                                    <p className="mt-6 text-base sm:text-sup text-gray-600">
                                        Zum Abschluss habe ich das Modell in 4K gerendert, um die feinen Details und die hohe Qualität der Texturen perfekt zur Geltung zu bringen. Das Projekt war ein voller Erfolg und das Keypad sieht sowohl realistisch als auch beeindruckend aus.
                                    </p>

                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:items-start lg:justify-end ">
                            <ReactCompareSlider className='rounded-xl'
      itemOne={<ReactCompareSliderImage src="/KeyPadWhite.webp"  alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src="/Notepad.webp"  alt="Image two" />}
    />
                               
                            </div>

                        </div>
                    </div>
                </div>


                <div className="overflow-hidden pt-16 ">
                    <div className="mx-auto lg:max-w-7xl  max-w-4xl px-6 lg:px-8">

                        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
                            <div className="lg:ml-auto lg:pl-4 lg:pt-4">

                                <div className="lg:max-w-lg">

                                    <p className="text-small font-semibold  text-indigo-600">Schwierigkeiten

                                    </p>
                                    <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray-900 leading-10">Herausforderungen</h3>
                                    <p className="mt-6 text-base sm:text-sup text-gray-600">
                                        Eine der Herausforderungen war, dass ich nur ein einziges Referenzbild zur Verfügung hatte. Um dies zu kompensieren, musste ich kreativ werden und viel Zeit in die Recherche ähnlicher Designs investieren, um fehlende Informationen zu ergänzen. </p>
                                        <p className="mt-6 text-base sm:text-sup text-gray-600">
                                            Zusätzlich war die Erstellung realistischer Texturen und Materialien eine Herausforderung. Es erforderte mehrere Iterationen und Anpassungen, um die gewünschten Effekte zu erzielen und sicherzustellen, dass die Texturen nahtlos und authentisch wirkten.</p>

                                        <p className="mt-6 text-base sm:text-sup text-gray-600">
                                            Trotz dieser Herausforderungen konnte ich das Projekt erfolgreich abschließen und ein beeindruckendes 3D-Modell des Keypads erstellen.</p>
                                    

                                </div>
                            </div>
                            <div className="flex items-center justify-center lg:items-start lg:justify-end lg:order-first ">
                                <img src="/NotePadStep1.webp" alt="TillTech Searching an Image" className='rounded-xl' />
                            </div>
                        </div>
                    </div>
                </div>











                <div className="mx-auto lg:max-w-7xl  max-w-4xl px-4 pt-16 sm:px-6 sm:py-24  lg:px-8">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Produktfotos</h1>

                    <div className="flex flex-col gap-4">
                        <div>
                            <img
                                className="h-full w-full max-w-full rounded-lg object-cover object-center "
                                src={active}
                                alt=""
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {data.map(({ imgelink }, index) => (
                                <div key={index} className="flex-shrink-0">
                                    <img
                                        onClick={() => setActive(imgelink)}
                                        src={imgelink}
                                        className="h-20 w-20 md:w-24 md:h-24 cursor-pointer rounded-lg object-cover object-center"
                                        alt="gallery-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>



                </div>

                <div className=' aspect-video mx-auto lg:max-w-7xl  max-w-4xls px-4 py-16 sm:px-6 sm:py-24  lg:px-8' >
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">YouTube Video</h1>

                    <iframe
                        className=' rounded-2xl h-56 w-full '
                        src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
                        width="100%"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>

            </div>



            <Footer />
        </div>
    )
}