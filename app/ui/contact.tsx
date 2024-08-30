import Link from 'next/link'
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <div id="contact" className="text-white flex justify-center text-left my-20">
            <div className="w-5/6 justify-center flex items-center px-20 py-8 rounded-lg">
                <div>
                    <div className="w-full text-3xl font-bold mb-4">
                        Get in touch
                    </div>
                    <div className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, neque ut faucibus pharetra, ante ipsum vulputate orci, at aliquam urna massa eu ex. Aliquam id libero id justo pulvinar eleifend eget a neque. Praesent arcu purus, efficitur eu nunc sit amet, congue aliquet quam. Ut ut dapibus ante, eu luctus ipsum. Cras vitae blandit velit. Fusce elit risus, viverra vitae tortor blandit, sodales interdum ante. Nulla convallis interdum laoreet. Morbi accumsan rhoncus ex, eget tincidunt leo varius ut.
                    </div>
                    <div className="flex">
                        <IconContext.Provider value={{ className:'h-10 mr-2'}}>
                            <div className="flex">
                                <Link href="https://github.com/saulomarc" target='_blank'>
                                    <FaGithub size={'h-10'} className="mr-2" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/saulomarc/" target='_blank'>
                                    <FaLinkedin size={'h-10'} />
                                </Link>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}