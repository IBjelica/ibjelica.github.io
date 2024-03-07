import '../assets/Socials.scss';

const Socials = () => {
    return (
        <div className='socials'>
            <h2 className="socials__title text-[2.5rem] text-justify">
                WE ARE JUST A FEW MORE CLICKS AWAY
            </h2>
            <div className="socials__links text-[6rem] tracking-[0.2rem] text-justify">
                {/* TODO: try sticky mouse trailer on links */}
                <a href="">Instagram</a>
                <a href="">LinkedIn</a>
                <a href="">Email</a>
            </div>
        </div>
    )
}

export default Socials;