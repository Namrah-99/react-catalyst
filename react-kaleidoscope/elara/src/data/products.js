const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    category: ["Clothing"],
    color: ["Red", "Blue"],
    size: "M",
    brand: ["Brand A"],
    price: { maxPrice: "30", minPrice: "20" },
  },
  {
    id: 2,
    name: "Running Shoes",
    category: ["Shoes"],
    color: ["Black", "White"],
    size: "10",
    brand: ["Brand B"],
    price: { maxPrice: "100", minPrice: "80" },
  },
  {
    id: 3,
    name: "Leather Bag",
    category: ["Bags"],
    color: ["Brown"],
    size: "",
    brand: ["Brand C"],
    price: { maxPrice: "150", minPrice: "120" },
  },
  {
    id: 4,
    name: "Formal Shirt",
    category: ["Clothing"],
    color: ["White"],
    size: "L",
    brand: ["Brand A"],
    price: { maxPrice: "40", minPrice: "30" },
  },
  {
    id: 5,
    name: "Sneakers",
    category: ["Shoes"],
    color: ["Blue"],
    size: "9",
    brand: ["Brand B"],
    price: { maxPrice: "90", minPrice: "70" },
  },
  {
    id: 6,
    name: "Backpack",
    category: ["Bags"],
    color: ["Black"],
    size: "",
    brand: ["Brand D"],
    price: { maxPrice: "80", minPrice: "60" },
  },
  {
    id: 7,
    name: "Summer Dress",
    category: ["Clothing"],
    color: ["Yellow", "Green"],
    size: "S",
    brand: ["Brand A"],
    price: { maxPrice: "50", minPrice: "40" },
  },
  {
    id: 8,
    name: "Flip Flops",
    category: ["Shoes"],
    color: ["Pink"],
    size: "7",
    brand: ["Brand B"],
    price: { maxPrice: "20", minPrice: "15" },
  },
  {
    id: 9,
    name: "Crossbody Bag",
    category: ["Bags"],
    color: ["Red", "Black"],
    size: "",
    brand: ["Brand C"],
    price: { maxPrice: "100", minPrice: "80" },
  },
  {
    id: 10,
    name: "Jeans",
    category: ["Clothing"],
    color: ["Blue"],
    size: "32",
    brand: ["Brand A"],
    price: { maxPrice: "60", minPrice: "40" },
  },
];

export const sizeGuides = [
  {
    id: 1,
    size: "xsmall",
    ukSize: 6,
    description: "x small is equivalent to a UK 6",
    sizeguide: [
      {
        countryCode: "AU",
        countrySize: "6",
      },
      {
        countryCode: "DE",
        countrySize: "32",
      },
      {
        countryCode: "DK",
        countrySize: "32",
      },
      {
        countryCode: "FR",
        countrySize: "34",
      },
      {
        countryCode: "IT",
        countrySize: "38",
      },
      {
        countryCode: "JP",
        countrySize: "5",
      },
      {
        countryCode: "Jeans",
        countrySize: "24-25",
      },
      {
        countryCode: "KR",
        countrySize: "44",
      },
      {
        countryCode: "RU",
        countrySize: "40",
      },
      {
        countryCode: "SML",
        countrySize: "XS",
      },
      {
        countryCode: "US",
        countrySize: "2",
      },
    ],
  },
  {
    id: 2,
    size: "small",
    ukSize: 8,
    description: "small is equivalent to a UK 8",
    sizeguide: [
      {
        countryCode: "AU",
        countrySize: "8",
      },
      {
        countryCode: "DE",
        countrySize: "34",
      },
      {
        countryCode: "DK",
        countrySize: "34",
      },
      {
        countryCode: "FR",
        countrySize: "36",
      },
      {
        countryCode: "IT",
        countrySize: "40",
      },
      {
        countryCode: "JP",
        countrySize: "7",
      },
      {
        countryCode: "Jeans",
        countrySize: "26-27",
      },
      {
        countryCode: "KR",
        countrySize: "55",
      },
      {
        countryCode: "RU",
        countrySize: "42",
      },
      {
        countryCode: "SML",
        countrySize: "S",
      },
      {
        countryCode: "US",
        countrySize: "4",
      },
    ],
  },
  {
    id: 3,
    size: "medium",
    ukSize: 10,
    description: "medium is equivalent to a UK 10",
    sizeguide: [
      {
        countryCode: "AU",
        countrySize: "10",
      },
      {
        countryCode: "DE",
        countrySize: "36",
      },
      {
        countryCode: "DK",
        countrySize: "36",
      },
      {
        countryCode: "FR",
        countrySize: "38",
      },
      {
        countryCode: "IT",
        countrySize: "42",
      },
      {
        countryCode: "JP",
        countrySize: "9",
      },
      {
        countryCode: "Jeans",
        countrySize: "27-28",
      },
      {
        countryCode: "KR",
        countrySize: "66",
      },
      {
        countryCode: "RU",
        countrySize: "44",
      },
      {
        countryCode: "SML",
        countrySize: "M",
      },
      {
        countryCode: "US",
        countrySize: "6",
      },
    ],
  },
  {
    id: 4,
    size: "large",
    ukSize: 12,
    description: "large is equivalent to a UK 12",
    sizeguide: [
      {
        countryCode: "AU",
        countrySize: "12",
      },
      {
        countryCode: "DE",
        countrySize: "38",
      },
      {
        countryCode: "DK",
        countrySize: "38",
      },
      {
        countryCode: "FR",
        countrySize: "40",
      },
      {
        countryCode: "IT",
        countrySize: "44",
      },
      {
        countryCode: "JP",
        countrySize: "11",
      },
      {
        countryCode: "Jeans",
        countrySize: "29-30",
      },
      {
        countryCode: "KR",
        countrySize: "77",
      },
      {
        countryCode: "RU",
        countrySize: "46",
      },
      {
        countryCode: "SML",
        countrySize: "L",
      },
      {
        countryCode: "US",
        countrySize: "8",
      },
    ],
  },
  {
    id: 5,
    size: "x large",
    ukSize: 14,
    description: "x large is equivalent to a UK 14",
    sizeguide: [
      {
        countryCode: "AU",
        countrySize: "14",
      },
      {
        countryCode: "DE",
        countrySize: "40",
      },
      {
        countryCode: "DK",
        countrySize: "40",
      },
      {
        countryCode: "FR",
        countrySize: "42",
      },
      {
        countryCode: "IT",
        countrySize: "46",
      },
      {
        countryCode: "JP",
        countrySize: "13",
      },
      {
        countryCode: "Jeans",
        countrySize: "31-32",
      },
      {
        countryCode: "KR",
        countrySize: "88",
      },
      {
        countryCode: "RU",
        countrySize: "48",
      },
      {
        countryCode: "SML",
        countrySize: "XL",
      },
      {
        countryCode: "US",
        countrySize: "10",
      },
    ],
  },
];
