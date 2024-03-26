import { threecard } from "../data/header";
import {
  ElaraOffers,
  ImageGallery,
  NewArrivals,
  Slider,
  SlidersSlide,
  ThreeCards,
  TopStories,
  TwoCards,
  VideoOverlayText,
} from "../ui/components/home/home";
import { PiCoatHangerBold } from "react-icons/pi";
import { GrCircleQuestion } from "react-icons/gr";
import { VscComment } from "react-icons/vsc";

import Header from "../ui/components/common/Header";

export default function Home() {
  return (
    <>
      {/* <div className="container mx-auto md:container md:mx-auto space-y-16"> */}
      <Header />
      <div className="container mx-auto space-y-16 mt-16">
        <NewArrivals />
        <VideoOverlayText />
        <ThreeCards />
        <TwoCards />
        <SlidersSlide />
        <ImageGallery />
        <ElaraOffers />
        <Slider />
        <TopStories threecard={threecard} />

        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 text-gray-600 py-8">
          <div className="hover:bg-[#f0f0f0] px-4 py-8 border border-gray-200 space-y-2">
            <PiCoatHangerBold className="font-semibold size-6" />
            <p>how to make an order</p>
            <p>Detailed instructions for new clients</p>
          </div>
          <div className="hover:bg-[#f0f0f0] px-4 py-8 border border-gray-200 space-y-2">
            <GrCircleQuestion className="font-semibold size-6" />
            <p>Questions and answers</p>
            <p>All about shipping, returns and duties</p>
          </div>
          <div className="hover:bg-[#f0f0f0] px-4 py-8 border border-gray-200 space-y-2">
            <VscComment className="font-semibold size-6" />
            <p>help is needed?</p>
            <p>Contact our customer service</p>
          </div>
        </div>
      </div>
    </>
  );
}
