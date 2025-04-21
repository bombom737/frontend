import { artworks } from "@/app/data/artworks";
import { ZoomableImageComponent } from "../ZoomableImage/ZoomableImage";
function PortfolioPage() {
    return (
      <div className="flex flex-col  w-screen h-full bg-[#fafafa] overflow-x-hidden !pt-15 !mr-[21rem] !pb-20">
        <h1 className="text-center text-3xl font-bold !mr-[21rem]">Artworks</h1>
        <div className="grid grid-cols-3 gap-8 !mr-[21rem] !pt-15 !p-3">
          {artworks.map((artwork, idx) => (
            <div className="flex flex-col bg-[#ffffff] border !p-3 rounded" key={idx}>
              <div className="h-full flex items-center justify-center">
                <ZoomableImageComponent className="rounded cursor-pointer" url={artwork.painting} artwork={artwork}/>
              </div>
              <div>
                <p className="italic !pt-5">{`${artwork.name} (${artwork.year})`}</p>
                <p>{artwork.type}</p>
                <p>{artwork.dimensions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PortfolioPage;
  