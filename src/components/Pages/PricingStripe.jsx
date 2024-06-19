import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useEffect } from 'react';

const tiers = [
    {
        slots: '3 Plätze',
        name: 'Standard',
        id: 'tier-hobby',
        href: 'https://buy.stripe.com/6oE6pP0Vs611gXCfZ6',
        priceMonthly: `3955.-`,
        description: 'Eine Anfrage auf einmal. Jederzeit pausieren oder kündigen.',
        features: ['Eine Anfrage auf einmal', 'Lieferzeit von 24-48 Stunden', 'Unbegrenzte Designs', 'React (Java Script) Entwicklung', 'Unbegrenzte Stockfotos', 'Unbegrenzte Teams', 'Jederzeit pausieren oder kündigen'],
    },
    {
        slots: '1 Platz',
        name: 'Pro',
        id: 'tier-team',
        href: 'https://buy.stripe.com/cN2aG57jQ0GH6iYbIR',
        priceMonthly: `4955.-`,
        description: 'Zwei Anfragen auf einmal. Jederzeit pausieren oder kündigen.',
        features: [
            'Zwei Anfragen auf einmal', 'Lieferzeit von 24-48 Stunden', 'Unbegrenzte Designs', 'React (Java Script) Entwicklung', 'Unbegrenzte Stockfotos', 'Unbegrenzte Teams', 'Jederzeit pausieren oder kündigen'
        ],
    },
]



export default function PricingStripe() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/pricing-table.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (





        <div className="pattern-bg-primary  " id='pricing'>

            <div className='mx-auto max-w-4xl lg:max-w-7xl px-6 pb-12 pt-24 text-start sm:pt-32 lg:px-8'>
                <p className="text-small font-semibold  text-indigo-400">Wähle deinen Plan – Investiere in deine Vision</p>
                <h3 className="mt-2 text-h3 font-bold tracking-tight text-gray leading-10">
                    Entdecke unsere Preismodelle
                </h3>
            
            <div className="relative my-4 ">
                <p className="mx-auto max-w-7xl text-base sm:text-sup  text-gray/60 mb-6">
                    Jedes Projekt ist einzigartig! Desswegen bieten wir maßgeschneiderte Abonnements, die dir die Freiheit geben, deine Designs nach Bedarf zu skalieren. Wähle den Plan, der am besten zu deinen aktuellen Anforderungen passt.
                </p>

                <div className='pb-4'>
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1PTKJdHv9PKFXa7kgtm7lD7s"
                        publishable-key="pk_live_51NAssRHv9PKFXa7kJnGHocdnbE5RZ3ZuUKNpixKaiI8nKTchw1eMufNWgUojJGmlTFesb9c7DTSW4yy7YYiYrXT6004kJyAWwd"
                    ></stripe-pricing-table>
                </div>
                <div id='call' className=" bg-white flex flex-col items-start my-4 gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
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
                            Verdiene 5 % monatlich wiederkehrende Provisionen für jede Empfehlung!
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
    )
}
