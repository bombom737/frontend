import React from 'react';

function AboutPage() {
  return (
    <div className="flex bg-[url('/shimon-about-page.jpg')] bg-cover bg-no-repeat w-[100vw] h-[100vh] bg-[#fafafa] flex-row items-center justify-left !p-10">
      <div className="flex flex-row w-full max-w-6xl items-start space-x-10">
        {/* <div className="w-1/2">
          <div className="!pt-5">
            <p className="!pl-5 w-[500px] text-[#303030] leading-7">
              For over three decades, the extensive work of Pinto raises
              fundamental questions. The artist is constantly in action and work
              in the studio, facing the relevance of the painting medium in the
              field and in the market. These fundamental questions place art and
              the artist on a significant symbolic scale against the viewer and
              society - the artist operates autonomously, a social samurai.
              <br />
              <br />
              Gradually and persistently, Pinto reveals himself as "the Count of
              Monte Cristo".
            </p>
          </div>
        </div> */}
        <div className="!pl-20 flex flex-col">
          <h1 className="text-[4vw] text-[#ffffff] font-bold drop-shadow-2xl font-[Playfair_Display] !pb-5">
            About Shimon
          </h1>
          <p className="w-[28vw]  text-[#ffffff] leading-7">
            Shimon Pinto is an individual who carved his path independently;
            his mentors did not sit on awards committees as is customary in
            the selection of artists. In his paintings and works, the mature
            artist moves like a child aware of market forces but, at the same
            time, adheres to the power of art to illuminate hearts. Pinto is
            not a classic romantic "Cinderella story" but a product of an
            exposed fate aware of the forces of demand and publicity within
            it, he developed a unique language oscillating between abstract
            and figurative, between modernism and post-modernism, and between
            the particular and the universal.
          </p>
          <div className="!pt-24">
            Contact Info Here
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
