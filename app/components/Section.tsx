import {ReactNode} from "react";
import SectionButton from "@/app/components/SectionButton";


type SectionProps = {
    id: string;
    name: string;
    children: ReactNode;
};

export default function Section(props: SectionProps) {

    const {id, name, children} = props;

    return (
        <section id={id} className="h-screen py-[5rem] snap-start flex">
            <div className="flex flex-col justify-between items-center h-full w-full max-w-2xl mx-auto pt-32 pb-40">
                <SectionButton section={name} />

                {children}

            </div>
        </section>
    )
}