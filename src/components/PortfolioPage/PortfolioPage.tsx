import { artworks } from "@/app/data/artworks";
function PortfolioPage() {
    return (
      <div className="flex flex-col  w-screen h-full bg-[#fafafa] overflow-x-hidden !pt-40 !mr-[21rem]">
        <h1 className="text-center text-3xl font-bold !mr-[21rem]">Artworks</h1>
        <div className="grid grid-cols-3 gap-8 !mr-[21rem] !pt-40 !p-3">
          {artworks.map((artwork, idx) => (
            <div className="bg-[#ffffff] border !p-3 rounded" key={idx}>
              <div className="h-[400px] flex items-center justify-center">
                <img className="rounded" src={artwork.painting} alt="" />
              </div>
              <div>
                <p className="italic">{`${artwork.name} (${artwork.year})`}</p>
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
  