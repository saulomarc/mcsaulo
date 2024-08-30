import Image from "next/image";

const freelance_main = {
        name: 'Full-Stack Web Developer',
        company: 'Office of the Vice Chancellor for Community Affairs, UPLB',
        system: 'Tour Reservation and Information Processing System (TRIPS)',
        date: 'December 2023 - Present',
        stack: [],
        description:
        "My capstone project for my Master's Degree. I took this project because of its unique nature, a never before project of UP - having it's own tourism application.",
        imageSrc: '/images/doctrax-main.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
}

const freelance_sub = [
    {
        name: 'Amazon Web Service Migration Consultant',
        company: 'Auspex Research Group, UPLB',
        system: '',
        date: 'January 2023 - June 2023',
        stack: [],
        description:
        "You'd think that when I took this job that I have an idea how to use the AWS platform, well you're wrong. Back then have no idea how to use the AWS platform, let alone use it to deploy an application. Still, I accepted this and took it as a challenge to learn a new technology, and I did.",
        imageSrc: '/images/amis-main.png',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Backend Web Developer',
        company: 'Office of the Vice Chancellor for Research and Extension, UPLB',
        system: 'Document Tracking System (Doctrax)',
        date: 'September 2019 - May 2021',
        stack: [],
        description:
        "This project was the very first project I ever did for the university, and it wasn't the last. Doctrax was actually a final output for one of my master's courses, which eventually became the university's official document tracking system.",
        imageSrc: '/images/amis-main.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
]

function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Freelance() {
    return (
        <div id="freelance" className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-full lg:px-16" data-next-animation>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Freelance</h2>
                    <p className="mt-4 text-gray-500">
                        Aside from my full-time job, I also take side-hustles, consultancy or system projects to learn new technologies and build my portfolio. So far, I have these three unique projects and consultancy gigs on my slate
                    </p>
                </div>

                <div className="mt-16 flex justify-center">
                    <div className="mb-6 rounded-lg p-2 w-full md:w-3/4">
                        <div className="h-96 w-full relative rounded-md border-4 border-palette-red">
                            <Image
                                src={freelance_main.imageSrc}
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                layout="fill"
                                className="object-cover"
                            />
                        </div>
                        <div className="mt-4">
                            {
                                freelance_main.system ? (
                                    <h3 className="text-base text-palette-very-light-blue rounded-md bg-palette-red px-2 py-1 w-fit mt-2">{freelance_main.system}</h3>
                                ) : ''
                            }
                            <h3 className="mt-2 text-lg text-gray-900">
                                { freelance_main.name }
                            </h3>
                            <h5 className="text-xs text-gray-800">
                                at { freelance_main.company } <span className="italic text-gray-600">({freelance_main.date})</span>
                            </h5>
                            <p className="mt-4 text-sm text-gray-500">
                                { freelance_main.description }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    {freelance_sub.map((freelanceSub, freelanceSubIdx) => (
                    <div className="mb-6 rounded-lg p-2" key={freelanceSubIdx}>
                        <div className="aspect-w-2 aspect-h-1 rounded-md border-4 border-palette-red">
                            <Image
                                src={freelanceSub.imageSrc}
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="h-20 w-20 object-center object-cover"
                                fill={true}
                            />
                        </div>
                        <div className="mt-4">
                            {
                                freelanceSub.system ? (
                                    <h3 className="text-base text-palette-very-light-blue rounded-md bg-palette-red px-2 py-1 w-fit mt-2">{freelanceSub.system}</h3>
                                ) : ''
                            }
                            <h3 className="mt-2 text-lg text-gray-900">
                                { freelanceSub.name }
                            </h3>
                            <h5 className="text-xs text-gray-600">
                                at { freelanceSub.company } <span className="italic text-gray-600">({freelanceSub.date})</span>
                            </h5>
                            <p className="mt-4 text-sm text-gray-500">
                                { freelanceSub.description }
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}