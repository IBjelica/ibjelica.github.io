import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer/Trailer";

const Contact = () => {

    const handleFancyWidths = words => {
        const spans = document.querySelectorAll("#root span.not__fancy")

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
            WE EMBRACE THE <span className="not__fancy">ART</span> OF THE <span className="not__fancy">UNSEEN</span>
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true <span className="not__fancy">magic</span> of web <span className="not__fancy">design</span> and <span className="not__fancy">development</span> lies beneath the surface. While others may only
            see the final results, we take pride in the <span className="not__fancy">dedication,</span> the intricate <span className="not__fancy">process,</span> and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify">
            Our approach revolves around a commitment to understanding and constructing <span className="not__fancy">value</span> by immersing ourselves in
            our customers&#39; <span className="not__fancy">unique</span> needs. For us, <span className="not__fancy">design</span> transcends mere aesthetics; it&#39;s a profound connection
            rooted in <span className="not__fancy">empathy,</span> <span className="not__fancy">compassion,</span> and an authentic concern for the individuals we serve.
        </p>
        
        <DotsLink />
        <Trailer
            handleFancyWidths={handleFancyWidths}
            content="ContactPageContent"
        />
    </div>
  );
}

export default Contact;
