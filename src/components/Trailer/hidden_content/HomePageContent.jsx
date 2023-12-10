import Letter from "../../Letter";
import Word from "../../Word";

const HomePageContent = () => {
    return (
        <>
            <h1 className="row max-w-full w-full flex justify-start align-baseline">
                <Word fancy={true} str="Nothing" />
            </h1>

            <h1 className="row max-w-full w-3/4 flex justify-start align-baseline">
                <Word fancy={true} str="to&nbsp;see" />
            </h1>

            <h1 className="row max-w-full w-2/4 flex justify-start align-baseline">
                <Word fancy={true} str="here" />
            </h1>
        </>
    )
}

export default HomePageContent;