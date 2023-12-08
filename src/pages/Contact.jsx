import DotsLink from "../components/DotsLink";
import Trailer from "../components/Trailer/Trailer";

const Contact = () => {
  return (
    <div className="group/screen px-[2.1875rem] py-8">
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] leading-[7.15rem] text-justify mb-[6.25rem]">
            WE EMBRACE THE <span className="w-[209px] h-[95px] text-center">ART</span> OF THE UNSEEN
        </h1>
        <p className="text-[2.5rem] leading-[3rem] text-justify mb-12">
            We believe that the true magic of web design and development lies beneath the surface. While others may only
            see the final results, we take pride in the dedication, the intricate process, and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] leading-[3rem] text-justify">
            Our approach revolves around a commitment to understanding and constructing value by immersing ourselves in
            our customers&#39; unique needs. For us, design transcends mere aesthetics; it&#39;s a profound connection
            rooted in empathy, compassion, and an authentic concern for the individuals we serve.
        </p>
        
        <DotsLink />
        <Trailer
            content="ContactPageContent"
        />
    </div>
  );
}

export default Contact;
