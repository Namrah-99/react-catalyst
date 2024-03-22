import PropTypes from "prop-types";
import editorialImg from "../../assets/images/navbar/story-metadata-image-1707926198318.jpeg";
import shopByImg from "../../assets/images/navbar/shop-by-promo-image-data.jpg";
import storiesImg1 from "../../assets/images/navbar/2024-02-28-ww-3-app-ss24-main-rtw-trend-multibrand-multicategory-cover-img.jpeg";
import storiesImg2 from "../../assets/images/navbar/2024-02-28-ww-6-webapp-dries-van-noten-ds-dries-van-noten-vip-multicategory-img.jpeg";
import storiesImg3 from "../../assets/images/navbar/2024-02-28-ww-6-webapp-ramadan-exclusives-reg-multibrand-multicategory-img.jpeg";
import designerImg from "../../assets/images/navbar/designer-promo-image-data.jpg";
import shoesImg from "../../assets/images/navbar/shoes-promo-image-data.jpg";
import bagsImg from "../../assets/images/navbar/bags-promo-image-data.jpg";
import beautyImg from "../../assets/images/navbar/beauty-promo-image-data.jpg";
import accessoriesImg from "../../assets/images/navbar/accessories-promo-image-data.jpg";
import jewelryWatchesImg from "../../assets/images/navbar/fjw-image-data.jpg";
import homegiftsImg from "../../assets/images/navbar/home-and-gifting-promo-image-data.jpg";

export default function MegaMenuContent({ tag }) {
  let content;
  switch (tag.toLowerCase()) {
    case "new in":
      content = <NewIn />;
      break;
    case "sale":
      content = (
        <span>
          <a href="#">Sale</a>
        </span>
      );
      break;
    case "shop by":
      content = <ShopBy />;
      break;
    case "designers":
      content = <Designers />;
      break;
    case "clothing":
      content = <Clothing />;
      break;
    case "shoes":
      content = <Shoes />;
      break;
    case "bags":
      content = <Bags />;
      break;
    case "jewelry & watches":
      content = <JewelryWatches />;
      break;
    case "accessories":
      content = <Accessories />;
      break;
    case "beauty":
      content = <Beauty />;
      break;
    case "home & gifts":
      content = <HomeGifts />;
      break;
    default:
      content = null; // or some other default content
      break;
  }
  return (
    <div className="flex flex-col md:flex-row justify-around theme-color2 w-full">
      {content}
    </div>
  );
}
MegaMenuContent.propTypes = {
  tag: PropTypes.string.isRequired,
};

const ImageTextLink = ({ image, text, link }) => {
  return (
    <div className="w-72 flex flex-col">
      <img className="w-full object-cover object-center" src={image} alt="" />
      <div className="w-full text-start">
        <p className="text-p-sm font-medium">{text}</p>
        <a href="#" className="text-p-sm underline text-gray-600">
          {link}
        </a>
      </div>
    </div>
  );
};
ImageTextLink.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

const ImageLinkWithDescription = ({ image, text, title, time }) => {
  return (
    <>
      <div className="flex flex-row items-start gap-4">
        <img
          src={image}
          className="w-28 h-32 object-cover object-center"
          alt="img"
        />
        <div className="flex flex-col justify-between w-80 h-32">
          <p className="text-p-xs text-gray-400 uppercase">{title}</p>
          <p className="text-p-md font-normal text-gray-800 text-wrap">
            {text}
          </p>
          <span className="text-p-xs font-medium text-black dark:text-primary uppercase">
            {time}
          </span>
        </div>
      </div>
    </>
  );
};
ImageLinkWithDescription.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
};

const NewIn = () => {
  return (
    <>
      <li className="space-y-8">
        <div className="flex flex-col items-start">
          <p className="uppercase">New Season</p>
          <ul>
            <li>
              <a>Classic</a>
            </li>
            <li>
              <a>Elegance</a>
            </li>
            <li>
              <a>Streetwear</a>
            </li>
            <li>
              <a>Minimalism</a>
            </li>
            <li>
              <a>Femininity</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <p className="uppercase">Trends</p>
          <ul>
            <li>
              <a>Stylish ballet shoes</a>
            </li>
            <li>
              <a>New look at preppy</a>
            </li>
            <li>
              <a>Young brands</a>
            </li>
            <li>
              <a>Best sellers</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <p className="uppercase">Editorial</p>
        <ImageTextLink
          image={editorialImg}
          text="Your daily dose of style inspiration, Incredible Women and more"
          link="Discover PORTER"
        />
      </li>
      <li>
        <p className="uppercase">Latest Stories</p>
        <ul>
          <li>
            <ImageLinkWithDescription
              image={storiesImg1}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
              dolor sit amet, consectetur adipiscing elit."
              title="Fashion"
              time="5 HRS AGO"
            />
          </li>
          <li>
            <ImageLinkWithDescription
              image={storiesImg2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
              dolor sit amet, consectetur adipiscing elit."
              title="Incredible Women"
              time="6 HRS AGO"
            />
          </li>
          <li>
            <ImageLinkWithDescription
              image={storiesImg3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
              dolor sit amet, consectetur adipiscing elit."
              title="Beauty"
              time="4 HRS AGO"
            />
          </li>
        </ul>
      </li>
    </>
  );
};
const ShopBy = () => {
  return (
    <>
      <li>
        <p className="uppercase">our picks</p>
        <ul>
          <li>
            <a>Bestsellers</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Runway</a>
          </li>
          <li>
            <a>Back in Stock</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>New Designers</a>
          </li>
          <li>
            <a>New Season</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">EveryDay</p>
        <ul>
          <li>
            <a>Wardrobe Staples</a>
          </li>
          <li>
            <a>Workwear</a>
          </li>
          <li>
            <a>Weekend</a>
          </li>
          <li>
            <a>At-Home</a>
          </li>
          <li>
            <a>Skiwear</a>
          </li>
          <li>
            <a>Streetwear</a>
          </li>
          <li>
            <a>Vacation</a>
          </li>
          <li>
            <a>Winter</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Events</p>
        <ul>
          <li>
            <a>Wedding Guest</a>
          </li>
          <li>
            <a>Bridal</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Evening</a>
          </li>
          <li>
            <a>Finishing Touches</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={shopByImg}
          text="The trans-seasonal shift"
          link="Shop the edit"
        />
      </li>
    </>
  );
};
const Designers = () => {
  return (
    <>
      <li>
        <p className="uppercase">featured designers</p>
        <ul className="grid grid-cols-3 gap-x-12">
          <li>
            <a>Bestsellers</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Runway</a>
          </li>
          <li>
            <a>Back in Stock</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>New Designers</a>
          </li>
          <li>
            <a>New Season</a>
          </li>
          <li>
            <a>Back in Stock</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>New Designers</a>
          </li>
          <li>
            <a>New Season</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">trending designers</p>
        <ul>
          <li>
            <a>Wedding Guest</a>
          </li>
          <li>
            <a>Bridal</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Evening</a>
          </li>
          <li>
            <a>Finishing Touches</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={designerImg}
          text="Brunello Cucinelli's effortless refinement"
          link="Shop the new collection"
        />
      </li>
    </>
  );
};
const Clothing = () => {
  return (
    <>
      <li>
        <p className="uppercase">clothing</p>
        <ul className="grid grid-cols-3 gap-x-12">
          <li>
            <a>Coats & Jackets</a>
          </li>
          <li>
            <a>Denim</a>
          </li>
          <li>
            <a>Dresses</a>
          </li>
          <li>
            <a>Jeans</a>
          </li>
          <li>
            <a>Jumpsuits</a>
          </li>
          <li>
            <a>Knitwear</a>
          </li>
          <li>
            <a>Loungewear</a>
          </li>
          <li>
            <a>Matching Separates</a>
          </li>
          <li>
            <a>Shorts</a>
          </li>
          <li>
            <a>Skirts</a>
          </li>
          <li>
            <a>Skiwear</a>
          </li>
          <li>
            <a>Sport</a>
          </li>
          <li>
            <a>Suits</a>
          </li>
          <li>
            <a>Swimwear</a>
          </li>
          <li>
            <a>Tops</a>
          </li>
          <li>
            <a>Pants</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">winter style</p>
        <ul>
          <li>
            <a>Faux Fur & Shearling</a>
          </li>
          <li>
            <a>Leather Jackets</a>
          </li>
          <li>
            <a>Midi Dresses</a>
          </li>
          <li>
            <a>Denim</a>
          </li>
          <li>
            <a>Knitwear</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={designerImg}
          text="Just in: Nili Lotan"
          link="Shop the edit"
        />
      </li>
    </>
  );
};
const Shoes = () => {
  return (
    <>
      <li>
        <p className="uppercase">shoes</p>
        <ul>
          <li>
            <a>Boots</a>
          </li>
          <li>
            <a>Flat Shoes</a>
          </li>
          <li>
            <a>Loafers</a>
          </li>
          <li>
            <a>Pumps</a>
          </li>
          <li>
            <a>Sandals</a>
          </li>
          <li>
            <a>Sneakers</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Designers</p>
        <ul>
          <li>
            <a>Amina Mauddi</a>
          </li>
          <li>
            <a>Aquazzura</a>
          </li>
          <li>
            <a>Chloe</a>
          </li>
          <li>
            <a>Christian Louboutin</a>
          </li>
          <li>
            <a>Gianvito Rossi</a>
          </li>
          <li>
            <a>Gucci</a>
          </li>
          <li>
            <a>Jimmy Choo</a>
          </li>
          <li>
            <a>Manolo Blahnik</a>
          </li>
          <li>
            <a>SAINT LAURENT</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Events</p>
        <ul>
          <li>
            <a>Wedding Guest</a>
          </li>
          <li>
            <a>Bridal</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Evening</a>
          </li>
          <li>
            <a>Finishing Touches</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={shoesImg}
          text="New in: Aquazzura"
          link="Shop the collection"
        />
      </li>
    </>
  );
};
const Bags = () => {
  return (
    <>
      <li>
        <p className="uppercase">Bags</p>
        <ul>
          <li>
            <a>Clutch Bags</a>
          </li>
          <li>
            <a>Cross-Body Bags</a>
          </li>
          <li>
            <a>Evening Bags</a>
          </li>
          <li>
            <a>Luggage and Travel</a>
          </li>
          <li>
            <a>Mini Bags</a>
          </li>
          <li>
            <a>Shoulder Bags</a>
          </li>
          <li>
            <a>Tote Bags</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Designers</p>
        <ul>
          <li>
            <a>Balenciaga</a>
          </li>
          <li>
            <a>Bottega Veneta</a>
          </li>
          <li>
            <a>Chloe</a>
          </li>
          <li>
            <a>Gucci</a>
          </li>
          <li>
            <a>Loewe</a>
          </li>
          <li>
            <a>SAINT LAURENT</a>
          </li>
          <li>
            <a>The Row</a>
          </li>
          <li>
            <a>Valentino Garavani</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Shop By</p>
        <ul>
          <li>
            <a>Icons</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Vacation</a>
          </li>
          <li>
            <a>Essentials</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Resell your pre-loved bags</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={bagsImg}
          text="Loewe's new 'Pebble' bag"
          link="Shop the collection"
        />
      </li>
    </>
  );
};
const JewelryWatches = () => {
  return (
    <>
      <li>
        <p className="uppercase">Bags</p>
        <ul>
          <li>
            <a>Clutch Bags</a>
          </li>
          <li>
            <a>Cross-Body Bags</a>
          </li>
          <li>
            <a>Evening Bags</a>
          </li>
          <li>
            <a>Luggage and Travel</a>
          </li>
          <li>
            <a>Mini Bags</a>
          </li>
          <li>
            <a>Shoulder Bags</a>
          </li>
          <li>
            <a>Tote Bags</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Designers</p>
        <ul>
          <li>
            <a>Balenciaga</a>
          </li>
          <li>
            <a>Bottega Veneta</a>
          </li>
          <li>
            <a>Chloe</a>
          </li>
          <li>
            <a>Gucci</a>
          </li>
          <li>
            <a>Loewe</a>
          </li>
          <li>
            <a>SAINT LAURENT</a>
          </li>
          <li>
            <a>The Row</a>
          </li>
          <li>
            <a>Valentino Garavani</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Shop By</p>
        <ul>
          <li>
            <a>Icons</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Vacation</a>
          </li>
          <li>
            <a>Essentials</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Resell your pre-loved bags</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={jewelryWatchesImg}
          text="Loewe's new 'Pebble' bag"
          link="Shop the collection"
        />
      </li>
    </>
  );
};
const Accessories = () => {
  return (
    <>
      <li>
        <p className="uppercase">Bags</p>
        <ul>
          <li>
            <a>Clutch Bags</a>
          </li>
          <li>
            <a>Cross-Body Bags</a>
          </li>
          <li>
            <a>Evening Bags</a>
          </li>
          <li>
            <a>Luggage and Travel</a>
          </li>
          <li>
            <a>Mini Bags</a>
          </li>
          <li>
            <a>Shoulder Bags</a>
          </li>
          <li>
            <a>Tote Bags</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Designers</p>
        <ul>
          <li>
            <a>Balenciaga</a>
          </li>
          <li>
            <a>Bottega Veneta</a>
          </li>
          <li>
            <a>Chloe</a>
          </li>
          <li>
            <a>Gucci</a>
          </li>
          <li>
            <a>Loewe</a>
          </li>
          <li>
            <a>SAINT LAURENT</a>
          </li>
          <li>
            <a>The Row</a>
          </li>
          <li>
            <a>Valentino Garavani</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Shop By</p>
        <ul>
          <li>
            <a>Icons</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Vacation</a>
          </li>
          <li>
            <a>Essentials</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Resell your pre-loved bags</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={accessoriesImg}
          text="Loewe's new 'Pebble' bag"
          link="Shop the collection"
        />
      </li>
    </>
  );
};
const Beauty = () => {
  return (
    <>
      <li>
        <p className="uppercase">Bags</p>
        <ul>
          <li>
            <a>Clutch Bags</a>
          </li>
          <li>
            <a>Cross-Body Bags</a>
          </li>
          <li>
            <a>Evening Bags</a>
          </li>
          <li>
            <a>Luggage and Travel</a>
          </li>
          <li>
            <a>Mini Bags</a>
          </li>
          <li>
            <a>Shoulder Bags</a>
          </li>
          <li>
            <a>Tote Bags</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Designers</p>
        <ul>
          <li>
            <a>Balenciaga</a>
          </li>
          <li>
            <a>Bottega Veneta</a>
          </li>
          <li>
            <a>Chloe</a>
          </li>
          <li>
            <a>Gucci</a>
          </li>
          <li>
            <a>Loewe</a>
          </li>
          <li>
            <a>SAINT LAURENT</a>
          </li>
          <li>
            <a>The Row</a>
          </li>
          <li>
            <a>Valentino Garavani</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Shop By</p>
        <ul>
          <li>
            <a>Icons</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Vacation</a>
          </li>
          <li>
            <a>Essentials</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Resell your pre-loved bags</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={beautyImg}
          text="Loewe's new 'Pebble' bag"
          link="Shop the collection"
        />
      </li>
    </>
  );
};
const HomeGifts = () => {
  return (
    <>
      <li>
        <p className="uppercase">Bags</p>
        <ul>
          <li>
            <a>Clutch Bags</a>
          </li>
          <li>
            <a>Cross-Body Bags</a>
          </li>
          <li>
            <a>Evening Bags</a>
          </li>
          <li>
            <a>Luggage and Travel</a>
          </li>
          <li>
            <a>Mini Bags</a>
          </li>
          <li>
            <a>Shoulder Bags</a>
          </li>
          <li>
            <a>Tote Bags</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Designers</p>
        <ul>
          <li>
            <a>Balenciaga</a>
          </li>
          <li>
            <a>Bottega Veneta</a>
          </li>
          <li>
            <a>Chloe</a>
          </li>
          <li>
            <a>Gucci</a>
          </li>
          <li>
            <a>Loewe</a>
          </li>
          <li>
            <a>SAINT LAURENT</a>
          </li>
          <li>
            <a>The Row</a>
          </li>
          <li>
            <a>Valentino Garavani</a>
          </li>
        </ul>
      </li>
      <li>
        <p className="uppercase">Shop By</p>
        <ul>
          <li>
            <a>Icons</a>
          </li>
          <li>
            <a>Exclusives</a>
          </li>
          <li>
            <a>Vacation</a>
          </li>
          <li>
            <a>Essentials</a>
          </li>
          <li>
            <a>Trending Now</a>
          </li>
          <li>
            <a>Party</a>
          </li>
          <li>
            <a>Resell your pre-loved bags</a>
          </li>
        </ul>
      </li>
      <li>
        <ImageTextLink
          image={homegiftsImg}
          text="Loewe's new 'Pebble' bag"
          link="Shop the collection"
        />
      </li>
    </>
  );
};
