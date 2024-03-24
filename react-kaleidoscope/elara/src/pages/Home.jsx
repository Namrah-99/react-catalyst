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
import Header from "../ui/components/common/Header";

export default function Home() {
  return (
    <>
      <div className="container mx-auto md:container md:mx-auto space-y-16">
        <Header />
        <NewArrivals />
        <VideoOverlayText />
        <ThreeCards />
        <TwoCards />
        <SlidersSlide />
        <ImageGallery />
        <ElaraOffers />
        <Slider />
        <TopStories threecard={threecard} />
      </div>
    </>
  );
}
