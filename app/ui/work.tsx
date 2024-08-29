import Image from "next/image";

const features = [
    {
        name: 'Mid-level Full-Stack Web Developer',
        company: 'Digital Transformation Program, UPLB',
        stack: [],
        description:
        "This system, AMIS, was the project I'm most proud of. When I was an undergraduate student then, I wanted to be a part of the development team of our previous enrollment system. Little did I know that I'd be leading the team of our new one.",
        imageSrc: '/images/amis-enrollment.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Junior Full-Stack Web Developer',
        company: 'Office of the Vice Chancellor for Student Affairs, UPLB',
        stack: [],
        description:
        "At the height of the pandemic,  student services in UPLB are needed to be transitioned online - which was the main goal of the job. Working for this office is where the spark began - the spark to serve the University.",
        imageSrc: '/images/ovcsa-home.png',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Junior Web Developer',
        company: 'Docdelta',
        stack: [],
        description:
        "The first company that ever took me was Docdelta. They were the ones who introduced me to PHP which eventually became my main stack.",
        imageSrc: '/images/docdelta-main.png',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
]

function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Work() {
    return (
        <div id="work" className="bg-white overflow-hidden">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8" data-next-animation>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Work Experience</h2>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, neque ut faucibus pharetra, ante ipsum vulputate orci, 
                        at aliquam urna massa eu ex. Aliquam id libero id justo pulvinar eleifend eget a neque. Praesent arcu purus, efficitur eu nunc sit amet, 
                        congue aliquet quam. Ut ut dapibus ante, eu luctus ipsum. Cras vitae blandit velit. Fusce elit risus, viverra vitae tortor blandit, 
                        sodales interdum ante. Nulla convallis interdum laoreet. Morbi accumsan rhoncus ex, eget tincidunt leo varius ut.
                    </p>
                </div>

                <div className="mt-16 space-y-16">
                    {features.map((feature, featureIdx) => (
                    <div
                        key={feature.name}
                        className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        data-next-animation={featureIdx % 2 === 0 ? 'right' : 'left'}
                        >
                        <div
                            className={classNames(
                            featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7 xl:col-start-8',
                            'mt-6 lg:col-span-6 lg:row-start-1 lg:mt-0 xl:col-span-5'
                            )}
                        >
                            <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                            <h5 className="text-base text-gray-600">at {feature.company}</h5>
                            <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        </div>
                        <div
                            className={classNames(
                            featureIdx % 2 === 0 ? 'lg:col-start-7 xl:col-start-6' : 'lg:col-start-1',
                            'flex-auto lg:col-span-6 lg:row-start-1 xl:col-span-7'
                            )}
                        >
                            <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 border-4 border-palette-red">
                            <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center rounded-md" fill={true}/>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}