// TODO: izbaci framer motion
import { forwardRef } from 'react'
import '../../assets/Contact.scss';

const Contact = (props, contactRef) => {

  return (
    <div ref={contactRef} className="contact-section">
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
            WE EMBRACE THE <span className="word">ART</span> OF THE <span className="word">UNSEEN</span>
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true <span className="word">magic</span> of web <span className="word">design</span> and <span className="word">development</span> lies beneath the surface. While others may only
            see the final results, we take pride in the <span className="word">dedication</span>, the intricate <span className="word">process</span>, and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify mb-12">
            Our approach revolves around a commitment to understanding and constructing <span className="word">value</span> by immersing ourselves in
            our customers&#39; <span className="word">unique</span> needs. For us, <span className="word">design</span> transcends mere aesthetics; it&#39;s a profound connection
            rooted in <span className="word">empathy</span>, <span className="word">compassion</span>, and an authentic concern for the individual we work with.
        </p>
        <p className="links text-[2.5rem] text-justify">
          linkovi 
          {/* TODO: staviti linkove za kontakt */}
        </p>
    </div>
  );
}

export default forwardRef(Contact);
