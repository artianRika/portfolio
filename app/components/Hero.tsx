"use client"
import { motion } from "framer-motion"
import {Button} from "@/components/ui/button";
import {GithubIcon, Instagram, Linkedin} from "lucide-react";
import {MdOutlineEmail} from "react-icons/md";

export function Hero() {
    return (
        <div className={"flex justify-between gap-20"}>

            <section className="min-h-screen flex flex-col justify-center items-start text-center">

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="text-xl text-gray-400 mt-4 max-w-xl"
                >
                    Hi there, I am
                </motion.p>

                <motion.h1
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    className="text-5xl font-bold mt-7"
                >
                    Artian RIKA
                </motion.h1>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="text-lg text-gray-400 mt-2 max-w-xl"
                >
                    Software Developer & Photographer
                </motion.p>

                <div className={"flex gap-3 mt-20"}>
                    <a
                        href="mailto:artianrika@gmail.com"
                        rel="noopener noreferrer"
                    >
                        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-md hover:scale-110">
                            <MdOutlineEmail className="h-8 w-8" />
                        </button>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/artianrika/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-md hover:scale-110">
                            <Linkedin className="h-8 w-8" />
                        </button>
                    </a>


                    <a
                        href="https://github.com/artianRika"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-md hover:scale-110">
                            <GithubIcon className="h-8 w-8" />
                        </button>
                    </a>


                    <a
                        href="https://www.instagram.com/artian__ri/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-white hover:text-gray-800 transition-all duration-300 shadow-md hover:scale-110">
                            <Instagram className="h-8 w-8" />
                        </button>
                    </a>
                </div>
            </section>

            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
                <div className="relative w-80 h-96 rounded-full overflow-hidden shadow-2xl ring-4  ring-offset-4">
                    <img
                        src="photo.jpg"
                        alt="My photo"
                        className="w-full h-full scale-110 object-cover object-center transform translate-x-1 transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </section>

        </div>
    )
}
