import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";


export default function contact() {
    return (
        <div className='whole-class'>
            <h1 className='text-2xl lg:text-4xl text-blue-500 font-semibold'>CONTACT</h1>
            <div className="my-5 text-xl ">
                <div className="flex flex-wrap flex-row items-center mb-2">
                    <AiOutlineMail className="text-2xl mr-2" />
                    <a className="block before:content-['Email']" href="#!"> : abxx@gmail.com</a>
                </div>

                <div className="flex flex-wrap flex-row items-center mb-2">
                    <AiOutlinePhone className="text-2xl mr-2" />
                    <a className="block before:content-['Phone']" href='tel:+918011082257'> : 8011082257</a>
                </div>
            </div>
        </div>
    )
}
