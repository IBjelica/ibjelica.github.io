import Letter from "../components/Letter";
import Word from "../components/Word";
import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer/Trailer";

const Home = () => {

    return (
        <div className="group/screen w-screen h-screen p-4 flex flex-col justify-between">
    {/* Todo: height for smaller screens */}
            
            <div className="row max-w-full w-full flex justify-start align-baseline">
                <Word str="Nothing" />
            </div>

            <div className="row max-w-full w-3/4 flex justify-start align-baseline">
                <Word str="to&nbsp;see" />
            </div>

            <div className="row max-w-full w-2/4 flex justify-start align-baseline">
                <Word str="here" />
            </div>
            
            <DotsLink />

            <Trailer
                content="HomePageContent"
            />
        </div>
    )
}

export default Home;