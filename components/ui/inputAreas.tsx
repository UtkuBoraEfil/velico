import { Car } from "lucide-react";
import { CircleX } from "lucide-react";
import { X } from "lucide-react";
import { CalendarArrowDown } from "lucide-react";
import { CalendarArrowUp } from "lucide-react";
import { Calendar } from 'lucide-react';


 
export function InputAreas() {
  return (
    <section className="flex w-full justify-center items-center gap-4 pb-10">
      <div className="">
        <div className="flex gap-2 items-center pl-4 ">
          <Car />
          <p>PICK-UP</p>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2 w-[240px]">
          <div className="bg-lightgreen rounded-3xl flex items-center gap-1 py-1 px-2 w-fit">
            <p className="text-black text-xs">DUBAI</p>
            <div className="bg-greenpart rounded-full p-1  text-lightgreen ">
              <X className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-white pt-2">
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            DUBAI
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            ANKARA
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            ISTANBUL
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            DUBAI
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 items-center pl-4 ">
          <Car />
          <p>RETURN</p>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2 w-[240px]">
          <div className="bg-lightgreen rounded-3xl flex items-center gap-1 py-1 px-2 w-fit">
            <p className="text-black text-xs">DUBAI</p>
            <div className="bg-greenpart rounded-full p-1  text-lightgreen ">
              <X className="w-3 h-3" />
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-white pt-2">
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            DUBAI
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            ANKARA
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            ISTANBUL
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            DUBAI
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 items-center pl-4 ">
          <CalendarArrowDown />
          <p>PICK-UP DATE</p>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2 w-[240px] flex justify-between items-center text-black">
          <p>12/07/2024</p>
          <Calendar className="text-black"/>
        </div>
        <div className="flex gap-2 text-white pt-2">
        <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            TODAY
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            TOMORROW
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            AFTER TOMORROW
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-2 items-center pl-4 ">
          <CalendarArrowUp />
          <p>RETURN DATE</p>
        </div>
        <div className="bg-white rounded-2xl px-3 py-2 w-[240px] flex justify-between items-center text-black">
          <p>12/07/2024</p>
          <Calendar className="text-black"/>
        </div>
        <div className="flex gap-2 text-white pt-2">
        <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            TODAY
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            TOMORROW
          </div>
          <div className="bg-othergreen rounded-lg py-1 px-1 text-[11px]">
            AFTER TOMORROW
          </div>
        </div>
      </div>
    </section>
  );
}
