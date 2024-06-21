import Header from "../components/Header"
import Footer from "../components/Footer"



const posts = [
    {
      id: 1,
      title: '18 Kostenlose Grafik Programme',
      href: '/beste-kostenlose-grafikprogramme',
      description:
        'Du glaubst, dass kostenlose Grafik Programme nichts taugen? Lass dich vom Gegenteil überzeugen!',
      imageUrl:
        'https://backend.dv-it.ch/wp-content/uploads/2024/06/Thumbnail-Blog.webp',
      date: '20.06.2024',
      datetime: '2024-06-20',
      author: {
        name: 'TillTech',
        imageUrl:
          'https://backend.dv-it.ch/wp-content/uploads/2024/06/TillTechLogoRound.webp',
      },
    },
    {
      id: 2,
      title: 'Logo erstellen lassen ',
      href: '/logo-erstellen-lassen',
      description:
        'Das ideale Firmenlogo? Das ist das Logo, das perfekt zu dir passt.',
      imageUrl:
        'https://backend.dv-it.ch/wp-content/uploads/2024/06/Hand-Holding-Notebook-Logo.jpg',
      date: '21.06.2024',
      datetime: '2024-06-21',
      author: {
        name: 'TillTech',
        imageUrl:
          'https://backend.dv-it.ch/wp-content/uploads/2024/06/TillTechLogoRound.webp',
      },
    },
    // More posts...
  ]
  
  export default function Blog() {
    return (
        <div className="pattern-bg">
 <Header/>
     
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
             Alles zum Thema Grafik Design, Software Entwicklung & Optimierung
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
      </div>

    )
  }
  