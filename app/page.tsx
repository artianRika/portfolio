import {Hero} from "@/app/components/Hero";
import Section from "@/app/components/Section";

export default function Home() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-none">
            <section className="h-screen flex items-center justify-center snap-start">
                <Hero/>
            </section>


            <Section id={"about-me"} name={"About Me"}>
                <p className="text-gray-400">
                    Me = software developer who enjoys building things that work and make sense. I like exploring how technology simplifies everyday problems - from small tools to full projects. I’m driven by curiosity, consistency, and the process of improving through every build.
                    I also capture moments before they tend to fade.
                </p>
            </Section>

            <Section id={"projects"} name={"Projects"}>
                <p> Projects... horizontal scroll </p>
            </Section>


            <Section id={"gallery"} name={"Gallery"}>
                <p> Slide show </p>
            </Section>


            <Section id={"contact-me"} name={"Contact"}>
                <p> Contacts.. </p>
            </Section>

        </div>
    );
}
