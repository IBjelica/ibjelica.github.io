const Letter = (props) => {
    const { char } = props;
    
    const classes = char !== ' ' ?
    "group/letter letter uppercase text-[min(31vh,_14vw)] text-center min-w-[210px]"
    : "text-[min(31vh,_14vw)] min-w-[100px]"

    return (
        <div className="letter-wrapper hover:font-['RabbitHole'] h-full flex justify-center items-center flex-grow cursor-pointer">
            <span className={classes}>
                { char }
            </span>
        </div>
    )
};

export default Letter;