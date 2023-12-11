import ClientLayout from "@/components/common/ClientLayout";
import PrintProfileImage from "@/components/common/PrintProfileImage";

const page = () => {
  return (
    <ClientLayout>
      <section>
        <div className="grid place-items-center pt-10">
          <PrintProfileImage />
        </div>
        <div className="text-center mt-6">
          <h2>Hi,</h2>
          <h1>I am Jhon Limon</h1>
          <p>Professional Photographer</p>
          <br />
          <p className="text-left font-light text-sm">
            I'm a photographer based in Los Angeles, California who specializes
            in photographing architecture; I also have a mild airplane
            obsession. I grew up in Ipswich, Massachusetts: a small coastal town
            that's one part postcard and one part dramatic Boston movie. <br />{" "}
            Here I was lucky enough to meet a number of amazing teachers who
            opened my eyes to the world of art and design; this would alter the
            path of my life in more ways than I could ever imagine. After
            studying studio art and environmental science at the University of
            Vermont, I moved to Lake Tahoe, California, in hopes of becoming a
            professional snowboarder (graduating right after the '08 recession
            made this seem like a great idea). <br /> A couple of years and too
            many injuries later, I found myself taking up an offer to photograph
            a few homes for a client I'd met while recuperating. What started by
            chance turned out to be the perfect mix of technical challenge and
            creative outlet, and I decided right there and then that it
            absolutely must be my career. In 2018, I founded the Architectural
            Photography Almanac, a resource for architecture photographers and
            those in the architecture industry seeking to learn about the craft
            and theory of architectural photography.
          </p>
        </div>
        <br />
        <ul className="font-light text-sm">
          <li className="font-bold">Advertising clients include:</li>
          <li>Tesla Motors</li>
          <li>FedEx</li>
          <li>Discovery Networks</li>
          <li>HGTV</li>
        </ul>
        <br />
        <ul className="font-light text-sm">
          <li className="font-bold">Recent Awards + Exhibits:</li>
          <li>
            2021: MUCEM, Marseilles: Civilization, The Way we Live Now,
            Airportraits
          </li>
          <li>
            2021: Swedish Centre for Architecture and Design (ArkDes): Stockholm
            Design Lab, Airportraits
          </li>
          <li>
            2020: Auckland Art Gallery Toi o Tamaki: Civilization, The Way we
            Live Now, Airportraits
          </li>
          <li>
            2020: Museum of Design, Zurich: Knowledge in Images – Information
            Design Today, Airportraits
          </li>
        </ul>
      </section>
    </ClientLayout>
  );
};

export default page;
