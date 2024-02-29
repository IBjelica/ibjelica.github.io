const Letter = (props) => {
    const { char } = props;
    
    const classes = char !== ' ' ?
    "group/letter hover:font-['RabbitHole'] letter uppercase w-[calc(14vw)] h-full flex-grow text-[min(31vh,_14vw)] text-center cursor-pointer"
    : "w-[calc(14vw)] h-full flex-grow text-[min(31vh,_14vw)]"

    return (
        <span className={classes}>
            { char }
        </span>
    )
};

export default Letter;