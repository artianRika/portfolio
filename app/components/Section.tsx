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
        <section id={id} className="h-screen py-[1rem] snap-start flex">
            <div className="flex flex-col justify-start gap-32 items-center h-full w-full max-w-3xl mx-auto pt-32">
                <SectionButton section={name} />

                {children}

            </div>
        </section>
    )
}