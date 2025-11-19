"use client"
import { motion } from "framer-motion"
import {Button} from "@/components/ui/button";
import {GithubIcon, Instagram, Linkedin} from "lucide-react";

export function Hero() {
    return (
        <div className={"flex items-space-between"}>

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
                    <Button className={"w-[55] h-[55]"}>
                        <Linkedin className={"h-12 w-12"}/>
                    </Button>

                    <Button className={"w-[55] h-[55]"}>
                        <GithubIcon className={"h-12 w-12"}/>
                    </Button>

                    <Button className={"w-[55] h-[55]"}>
                        <Instagram className={"h-12 w-12"}/>
                    </Button>
                </div>
            </section>

            <section className="min-h-screen flex flex-col justify-center items-center text-center">

                <p>photo section</p>
            </section>

        </div>
    )
}
