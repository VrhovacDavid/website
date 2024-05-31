import React from 'react';

const testimonials = [
  {
    body: 'Wir haben begonnen Meta Kampagnen mit TillTech zu schalten und sehr gute Ergebnisse erzielt. Darüber hinaus waren auch Produktfotos und Filmschnitte mit dabei, diese wurden dann für die Kampagnen verwendet und können auch anderswo eingesetzt werden. Einfache und zuverlässige Zusammenarbeit. Danke dir David 😉',
    author: {
      name: 'Jessica Zeder',
      handle: 'dipon',
      imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjVroJtArLw1PnQ0LegEiKCFnKi03D6xBl1vlW0N-8xTJanBjkO9=w60-h60-p-rp-mo-br100',
    },
  }  ,{
    body: 'Habe eine sehr gute Zusammenarbeit mit der Firma Till Tech. Ihr macht das super gut, weiter so.... M. Kathriner aus Luzern',
    author: {
      name: 'Markus Kathriner',
      handle: 'derschrankspezialist',
      imageUrl: '/Markus.avif',
    },
  } , {
    body: `David von Tilltech hat uns Schritt für Schritt in die Welt der Meta-Anzeigen für unseren Onlineshop eingeführt. Er hat grosse Geduld in seinen Coachings gezeigt, und die beeindruckenden Ergebnisse sprechen für sich.`,
    author: {
      name: 'Stephan Hauser',
      handle: 'stephanH',
      imageUrl: 'https://lh3.googleusercontent.com/a/ACg8ocJbGfENdQqtTcPLf7kK3bnr8YaW4k-_QZHU4U0e8vnZCRwCpg=w60-h60-p-rp-mo-br100',
    },
  }
];

export default function Testimonials() {
  return (
    <div className=" relative isolate overflow-hidden pattern-bg-primary py-24 sm:py-32 " id='bewertungen'>
     
      <div className="mx-auto max-w-4xl lg:max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-4xl text-start">
          <p className="text-sm font-semibold leading-8 tracking-tight text-indigo-600">Kunden Feedback</p>
          <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wir hatten das Möglichkeit, mit vielen inspirierenden Menschen zusammenzuarbeiten.
          </h3>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-none sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-8">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt={testimonial.author.name} />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
