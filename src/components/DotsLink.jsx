//Todo: direction aware hover effect
/**
 * 
 * .dots {
 *    svg {
 *      transition: transform 500ms ease;
 
 *      &:hover {
 *        transform: scale(1.4);
 *      }
 *    }
 *  }
 */
const DotsLink = (props) => {
    const { contactIn } = props;

    return (
      <a href="#!" onClick={contactIn} className='dots grid grid-cols-3 gap-[2px] fixed aspect-square bottom-[16px] right-[16px] z-20'>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.49968" cy="7.4996" r="7.13543" fill="#495199"/>
          </svg>
        </a>
    )
};

export default DotsLink;