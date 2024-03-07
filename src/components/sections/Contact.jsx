import Word from "../../components/Word";
import '../../assets/Contact.scss';

const Contact = (props) => {

  return (
    <div className="contact-section">
        <h1 className="title uppercase text-[6rem] tracking-[0.2rem] text-justify mb-[6.25rem]">
            WE <Word text="EMBRACE" /> THE <Word text="ART" /> OF THE <Word text="UNSEEN" />
        </h1>
        <p className="text-[2.5rem] text-justify mb-12">
            We believe that the true magic" of web design" and development" lies beneath the surface. While others may only
            see the final results, we take pride in the dedication", the intricate process", and the creative gymnastics
            that unfold within our team.
        </p>
        <p className="text-[2.5rem] text-justify mb-12">
            Our approach revolves around a commitment to understanding and constructing value" by immersing ourselves in
            our customers&#39; unique" needs. For us, design" transcends mere aesthetics; it&#39;s a profound connection
            rooted in empathy", compassion", and an authentic concern for the individual we work with.
        </p>
        <p className="links text-[2.5rem] text-justify">
          linkovi 
          {/* TODO: staviti linkove za kontakt */}
        </p>
    </div>
  );
}

export default Contact;
