import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer/Trailer";

const Contact = () => {

    const handlefunkyWidths = words => {
        const spans = document.querySelectorAll("#root span.not__funky")

        spans.forEach(el => {
            words.forEach(word => {
                if (el.textContent === word.value) {
                    el.style.width = word.width + "px"
                    // el.style.height = word.height + "px"
                }
            })
            
        })
    }
    
  return (
    <div className="group/screen px-[2.1875rem] py-8">
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
            WE EMBRACE THE <span className="not__funky">ART</span> OF THE <span className="not__funky">UNSEEN</span>
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true <span className="not__funky">magic</span> of web <span className="not__funky">design</span> and <span className="not__funky">development</span> lies beneath the surface. While others may only
            see the final results, we take pride in the <span className="not__funky">dedication,</span> the intricate <span className="not__funky">process,</span> and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify">
            Our approach revolves around a commitment to understanding and constructing <span className="not__funky">value</span> by immersing ourselves in
            our customers&#39; <span className="not__funky">unique</span> needs. For us, <span className="not__funky">design</span> transcends mere aesthetics; it&#39;s a profound connection
            rooted in <span className="not__funky">empathy,</span> <span className="not__funky">compassion,</span> and an authentic concern for the individuals we serve.
        </p>
        
        <DotsLink />
        <Trailer
            handlefunkyWidths={handlefunkyWidths}
            content="ContactPageContent"
        />
    </div>
  );
}

export default Contact;
