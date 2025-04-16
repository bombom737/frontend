import { artworks } from "@/app/data/artworks";
function PortfolioPage() {
    return (
      <div className="flex flex-col  w-screen h-full bg-[#fafafa] overflow-x-hidden !pt-40 !mr-[19rem]">
        <h1 className="text-center text-3xl font-bold !mr-[19rem]">Artworks</h1>
        <div className="grid grid-cols-3 gap-8 !mr-[19rem]">
          {artworks.map((artwork, idx) => (
            <div key={idx}>
              <img src={artwork.painting} alt="" />
              <p className="italic">{artwork.name}</p>
              <p>{artwork.type}</p>
              <p>{artwork.dimensions}</p>
              <p>{artwork.year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PortfolioPage;
  