import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Header from '../Header'
import Footer from '../Footer'
import React from 'react'




const data = [
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/49bd0e159243191.639a7f04f0174.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a5f61d194318529.65fa2a44aa603.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/70cfc9194318529.65fa2a44a5d14.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/af2b4d194318529.65fa2a44a7a91.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a6d396194318529.65fa2a44a8b95.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/70f11f194318529.65fa2a44ad456.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf1071194318529.65fa2a44a4cb5.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3188d4194318529.65fa2a44a991c.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a54bd194318529.65fa2a44a6b45.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5d07a1194318529.65fa2a44ae13a.jpg",
    },
    {
        imgelink:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c07002194318529.65fa2a44a3d1d.jpg",
    },

];





export default function Nike() {

    const [active, setActive] = React.useState(
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    );

    

    return (
        <div className="pattern-bg " >
            <Header />

            <div className="py-8 sm:py-16">

                <div className="relative isolate overflow-hidden  px-6  sm:py-32 lg:overflow-visible lg:px-0">

                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-4xl">
                                    <p className="text-base font-semibold leading-7 text-indigo-600">Concept Work</p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nike Think BIG</h1>
                                    <p className="mt-6 text-xl leading-8 text-gray-700">
                                        Das ist eine Kollektion für Nike für eine Arbeit die sich "THINK BIG" nennt. Es soll aufzeigen wie in einer Welt von kleinen Design's Nike gross denkt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
                            <img
                                className="w-[48rem]  rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5334fe159243191.639a7f04eaf30.jpg"
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-4xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <p>
                                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                        vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                        erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                        semper sed amet vitae sed turpis id.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                                                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                                                blanditiis ratione.
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                                                ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                                                vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">
                                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                        fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                        adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                                    <p className="mt-6">
                                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                        Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                                        tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                        turpis ipsum eu a sed convallis diam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <iframe className='rounded-xl shadow-2xl ring-1 ring-gray-900/10' width="1200" height="630" src="https://www.youtube.com/embed/xNRJwmlRBNU?si=o2UJahw5OME-YAys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                </div>

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24  lg:px-8">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Prozess</h1>

                    <div className="flex flex-col gap-4">
    <div>
        <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center "
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
                

            </div>
            
            <Footer />
        </div>
    )
}
