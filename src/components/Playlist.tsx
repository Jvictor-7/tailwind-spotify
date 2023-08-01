import { Play } from "lucide-react";
import Image from 'next/image'

const Playlist = (props: { srcImagem: string, playlistName: string }) => {
    return(
        <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20">
            <Image src={ props.srcImagem } width={104} height={104} alt="Capa do Álbum That's The Spirit da banda Bring Me The Horizon"/>
            <strong> { props.playlistName } </strong>
            
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play/>
            </button>
        </a>
    )
}

export default Playlist;