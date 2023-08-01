const Subtitle = (props: { subtitulo:string, userName: string }) => {
    return(
        <h1 className="font-semibold text-2xl mt-10">{ props.subtitulo }<span className="text-green-500 font-bold"> { props.userName } </span></h1>
    )
}

export default Subtitle;