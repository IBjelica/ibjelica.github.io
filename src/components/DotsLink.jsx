//Todo: direction aware hover effect
//Todo: link to contact page?
import { Link } from "react-router-dom";

const DotsLink = (props) => {
    const { link } = props;

    return (
        <Link className='fixed bottom-[16px] right-[16px] z-20' to={link}>
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <circle cx="7.13543" cy="7.13518" r="7.13543" fill="#495199"/>
            <circle cx="7.13543" cy="24.4997" r="7.13543" fill="#495199"/>
            <circle cx="7.13543" cy="41.8642" r="7.13543" fill="#495199"/>
            <circle cx="24.4997" cy="7.13518" r="7.13543" fill="#495199"/>
            <circle cx="24.4997" cy="24.4997" r="7.13543" fill="#495199"/>
            <circle cx="24.4997" cy="41.8642" r="7.13543" fill="#495199"/>
            <circle cx="41.8644" cy="7.13518" r="7.13543" fill="#495199"/>
            <circle cx="41.8644" cy="24.4997" r="7.13543" fill="#495199"/>
            <circle cx="41.8644" cy="41.8642" r="7.13543" fill="#495199"/>
          </svg>
        </Link>
    )
};

export default DotsLink;