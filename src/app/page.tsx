import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sidebar }  from "../components/Sidebar";
import { Footer } from "../components/Footer";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Playlist from "../components/Playlist";
import Mix from "../components/Mix";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 hover:bg-zinc">
              <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>

          <Title titulo="Let's listen to the playlists"/>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <Playlist srcImagem="/thats-the-spirit.jpg" playlistName="That's the spirit"/>
            <Playlist srcImagem="/wasting-light.jpg" playlistName="Wasting Light"/>
            <Playlist srcImagem="/minutes-to-midnight.jpg" playlistName="Minutes To Midnight"/>
            <Playlist srcImagem="/living-things.jpg" playlistName="Living Things"/>
            <Playlist srcImagem="/night-visions.jpeg" playlistName="Night Visions"/>
            <Playlist srcImagem="/evolve.jpg" playlistName="Evolve"/>
          </div>

          <Subtitle subtitulo="Made for " userName="João Victor Cavalcante Lima"/>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <Mix srcImagem1="/classic2.jpg" srcImagem2="/classic5.jpg" srcImagem3="/classic3.jpg" srcImagem4="/classic4.jpg" mixName="Daily Mix 1" spanMix="The best classical songs of the 1970s"/>
            <Mix srcImagem1="/rock1.jpg" srcImagem2="/rock2.jpg" srcImagem3="/rock3.jpg" srcImagem4="/rock4.jpg" mixName="Daily Mix 2" spanMix="Rock HITS of the week"/>
            <Mix srcImagem1="/indie1.jpg" srcImagem2="/indie2.jpg" srcImagem3="/indie3.jpg" srcImagem4="/indie4.jpg" mixName="Daily Mix 3" spanMix="Indie chills for you"/>
          </div>

        </main>
      </div>
        <Footer />
    </div>
  )
}
