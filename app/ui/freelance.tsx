import Image from "next/image";

const features = [
    {
        name: 'Full-Stack Web Developer',
        company: 'Office of the Vice Chancellor for Community Affairs, UPLB',
        system: 'UPLB Tour Reservation and Information Processing System',
        stack: [],
        description:
        "My capstone project for my Master's Degree. I took this project because of its unique nature, a never before project of UP - having it's own tourism application.",
        imageSrc: '/images/doctrax-main.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Amazon Web Service Migration Consultant',
        company: 'Auspex Research Group, UPLB',
        stack: [],
        description:
        "Now I'll be honest, I have no idea how to use the AWS platform then, let alone use it to deploy an application. Still, I accepted the job and took it as a challenge to learn a new technology.",
        imageSrc: '/images/amis-main.png',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Backend Web Developer',
        company: 'Office of the Vice Chancellor for Research and Extension, UPLB',
        stack: [],
        description:
        "This project was the very first project I ever did for the university, and it wasn't the last. Initially a master's course project which turned to a freelance opportunity for me and my teammates.",
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, neque ut faucibus pharetra, ante ipsum vulputate orci, 
                        at aliquam urna massa eu ex. Aliquam id libero id justo pulvinar eleifend eget a neque. Praesent arcu purus, efficitur eu nunc sit amet, 
                        congue aliquet quam. Ut ut dapibus ante, eu luctus ipsum. Cras vitae blandit velit. Fusce elit risus, viverra vitae tortor blandit, 
                        sodales interdum ante. Nulla convallis interdum laoreet. Morbi accumsan rhoncus ex, eget tincidunt leo varius ut.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-4">
                    {features.map((feature, featureIdx) => (
                    <div className="mb-6 rounded-lg p-2" key={featureIdx}>
                        <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-md border-4 border-palette-red">
                            <Image
                                src={feature.imageSrc}
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="object-center object-cover"
                                fill={true}
                            />
                        </div>
                        <h3 className="mt-8 text-lg text-gray-900">
                            { feature.name }
                        </h3>
                        <h5 className="text-sm  text-gray-600">
                            { feature.company }
                        </h5>
                        <p className="mt-4 text-base text-gray-500">
                            { feature.description }
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}