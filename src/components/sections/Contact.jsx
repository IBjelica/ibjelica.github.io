import Word from "../../components/Word";
import '../../assets/Contact.scss';

const Contact = (props) => {

  return (
    <div className="contact-section">
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
            WE EMBRACE THE <Word text="ART" /> OF THE <Word text="UNSEEN" />
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true <Word text="magic" /> of web <Word text="design" /> and <Word text="development" /> lies beneath the surface. While others may only
            see the final results, we take pride in the <Word text="dedication" />, the intricate <Word text="process" />, and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify mb-12">
            Our approach revolves around a commitment to understanding and constructing <Word text="value" /> by immersing ourselves in
            our customers&#39; <Word text="unique" /> needs. For us, <Word text="design" /> transcends mere aesthetics; it&#39;s a profound connection
            rooted in <Word text="empathy" />, <Word text="compassion" />, and an authentic concern for the individual we work with.
        </p>
        <p className="links text-[2.5rem] text-justify">
          linkovi 
          {/* TODO: staviti linkove za kontakt */}
        </p>
    </div>
  );
}

export default Contact;
