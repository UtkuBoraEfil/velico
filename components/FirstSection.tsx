import Image from "next/image";
import { Navbar } from "./ui/navbar";
import { InputAreas } from "./ui/inputAreas";
import image1 from "@/public/images/Image1.png";
import image2 from "@/public/images/Image2.png";
import image3 from "@/public/images/Image3.png";
import image4 from "@/public/images/Image4.png";
import { OctagonAlert } from "lucide-react";

export function FirstSection() {
  return (
    <div className="bg-greenpart px-6 pb-10">
      <Navbar />
      <div className="w-full pb-10">
        <h1 className=" text-[100px] font-bold flex  items-center gap-4">
          TRAVEL <Image src={image1} alt={"image1"} /> THE{" "}
          <Image src={image2} alt={"image2"} /> WHOLE
        </h1>
        <div className="flex items-center w-full justify-between">
          <div className=" text-[100px] font-bold flex  items-center gap-4">
            <Image src={image3} alt={"image3"} /> DUBAI
          </div>
          <div className="flex gap-5 items-center">
            <p className="px-8 py-3 border border-white rounded-xl text-2xl">
              GET A QUOTE NOW
            </p>
            <div className=" bg-white rounded-full p-2 text-black">
              <OctagonAlert />
            </div>
            <Image src={image4} alt={"image4"} />
          </div>
        </div>
      </div>
      <InputAreas/>
      <div className="w-full flex justify-center items-center">
        <button className="bg-lightgreen text-greenpart py-4 px-20 text-2xl rounded-xl font-bold">SHOW CARS</button>
      </div>
    </div>
  );
}
