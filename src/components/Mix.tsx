import Image from 'next/image'

const Mix = (props: {srcImagem1: string,
                      srcImagem2: string,
                      srcImagem3: string,
                      srcImagem4: string,
                      mixName: string, spanMix: string}) => {
    return(
        <a href="#" className="bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10">
        <div className='grid grid-cols-2'>
          <Image src={ props.srcImagem1 } className="w-full" width={120} height={120} alt="Capa do Álbum That's The Spirit da banda Bring Me The Horizon"/>
          <Image src={ props.srcImagem2 } className="w-full" width={120} height={120} alt="Capa do Álbum That's The Spirit da banda Bring Me The Horizon"/>
          <Image src={ props.srcImagem3 } className="w-full" width={120} height={120} alt="Capa do Álbum That's The Spirit da banda Bring Me The Horizon"/>
          <Image src={ props.srcImagem4 } className="w-full" width={120} height={120} alt="Capa do Álbum That's The Spirit da banda Bring Me The Horizon"/>
        </div>
        <strong className="font-semibold">{ props.mixName }</strong>
        <span className="text-sm text-zinc-400">{ props.spanMix }</span>
      </a>
    )
}

export default Mix;