export const allfilters = [
  {
    id: "color",
    name: "Color",
    options: [
      {
        value: "all",
        label: "All",
        className: "",
        checked: true,
      },
      {
        value: "black",
        label: "Black",
        className: "bg-black text-black",
        checked: false,
      },
      {
        value: "white",
        label: "Yellow",
        className: "bg-yellow-400 text-yellow-400",
        checked: false,
      },
      {
        value: "blue",
        label: "Blue",
        className: "bg-blue-400 text-blue-400",
        checked: false,
      },
      {
        value: "brown",
        label: "Purple",
        className: "bg-purple-400 text-purple-400",
        checked: false,
      },
      {
        value: "green",
        label: "Green",
        className: "bg-green-400 text-green-400",
        checked: false,
      },
      {
        value: "purple",
        label: "Red",
        className: "bg-red-400 text-red-400",
        checked: false,
      },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS", checked: false },
      { value: "SM", label: "SM", checked: false },
      { value: "M", label: "M", checked: false },
      { value: "L", label: "L", checked: false },
      { value: "XL", label: "XL", checked: false },
      { value: "XXL", label: "XXL", checked: true },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "Buliclo", label: "Buliclo", checked: false },
      { value: "Carlotin", label: "Carlotin", checked: false },
      { value: "Merguinez", label: "Merguinez", checked: false },
      { value: "Swifty", label: "Swifty", checked: true },
      { value: "TamTam", label: "TamTam", checked: false },
      { value: "wakaFlaca", label: "WakaFlaca", checked: false },
      { value: "Zaram", label: "Zaram", checked: false },
      { value: "Zebulus", label: "Zebulus", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "All", label: "All", checked: true },
      { value: "Shoulder Bags", label: "Shoulder Bags", checked: false },
      { value: "Bucket Bags", label: "Bucket Bags", checked: false },
      { value: "Clutch Bags", label: "Clutch Bags", checked: false },
      { value: "Cross Body Bags", label: "Cross Body Bags", checked: false },
      {
        value: "Luggage and Travel",
        label: "Luggage and Travel",
        checked: false,
      },
      { value: "Mini Bags", label: "Mini Bags", checked: false },
      { value: "Rafffia Bags", label: "Rafffia Bags", checked: false },
    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      // { value: 500, label: "$500 - $1,000" },
      // { value: 1000, label: "$1,000 - $2,000" },

      { value: { maxPrice: 500, minPrice: 1000 }, label: "$500 - $1,000" },
      { value: { maxPrice: 1000, minPrice: 2000 }, label: "$1,000 - $2,000" },
      { value: { maxPrice: 2000, minPrice: 5000 }, label: "$2,000 - $5,000" },
      {
        value: { maxPrice: 5000, minPrice: 10000 },
        label: "$5,000 - $10,000",
      },
    ],
  },
];
export const filters = [
  {
    title: "Category",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    filterApplied: ["Shoulder Bags"],
  },
  {
    title: "Designer",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    filterApplied: ["ALAÏA"],
  },
  {
    title: "Color",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    filterApplied: ["Black"],
  },
  {
    title: "Price",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    filterApplied: ["£500 - £1,000"],
  },
];

export const subCategories = [
  { name: "Sneaker", href: "#" },
  { name: "Mocassins", href: "#" },
  { name: "Flip flop", href: "#" },
  { name: "Running", href: "#" },
  { name: "Black Friday", href: "#" },
];
