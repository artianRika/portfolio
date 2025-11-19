type SectionButtonProps = {
    section: string;
};


export default function SectionButton (props: SectionButtonProps) {
    const { section } = props;
    return(
        <div className={"border-[.35rem] border-gray-500 w-[300px] h-[70px] flex items-center justify-center text-center"}>
            <h1 className={"p-1 text-xl font-bold"}>{section}</h1>
        </div>
    )
}