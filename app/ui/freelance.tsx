import Image from "next/image";

const features = [
    {
        name: 'Mid-level Full-Stack Web Developer',
        stack: [],
        description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable. Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
        imageSrc: '/images/doctrax-main.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Junior Full-Stack Web Developer',
        stack: [],
        description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
        imageSrc: '/images/amis-main.png',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Junior Web Developer',
        stack: [],
        description:
            'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
        imageSrc: '/images/amis-main.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
]

function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Freelance() {
    return (
        <div className="bg-white" data-next-animation>
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Freelance</h2>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, neque ut faucibus pharetra, ante ipsum vulputate orci, 
                        at aliquam urna massa eu ex. Aliquam id libero id justo pulvinar eleifend eget a neque. Praesent arcu purus, efficitur eu nunc sit amet, 
                        congue aliquet quam. Ut ut dapibus ante, eu luctus ipsum. Cras vitae blandit velit. Fusce elit risus, viverra vitae tortor blandit, 
                        sodales interdum ante. Nulla convallis interdum laoreet. Morbi accumsan rhoncus ex, eget tincidunt leo varius ut.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-4">
                    {features.map((feature, featureIdx) => (
                    <div className="mb-6" key={featureIdx}>
                        <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                            <Image
                                src={feature.imageSrc}
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="h-full w-full object-cover object-center"
                                fill={true}
                            />
                        </div>
                        <p className="mt-8 text-base text-gray-500">
                            { feature.name }
                        </p>
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