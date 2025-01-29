interface ProductData {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  descriptions?: {
    size: string; // assuming size will be represented as a string, e.g., "2ft x 3ft"
    description: string;
    appSupport: boolean;
  }[];
  alt?: string;
}

const productData: ProductData[] = [
  {
    id: 1001,
    imageUrl:
      "https://mercury-star-cdn.s3.ap-south-1.amazonaws.com/products/img4.png",
    title: "Clock 1",
    subtitle: "Description 1",
    alt: "Clock Image 1",
    descriptions: [
      {
        size: "1ft x 1ft",
        description: "Description 1",
        appSupport: true,
      },
      // Add more descriptions as needed
    ],
  },
  {
    id: 1002,
    imageUrl:
      "https://mercury-star-cdn.s3.ap-south-1.amazonaws.com/products/img2.jpg",
    title: "Clock 2",
    subtitle: "Description 2",
    alt: "Clock Image 2",
    descriptions: [
      {
        size: "2ft x 3ft",
        description: "Description 2",
        appSupport: true,
      },
      // Add more descriptions as needed
    ],
  },
  {
    id: 1003,
    imageUrl:
      "https://mercury-star-cdn.s3.ap-south-1.amazonaws.com/products/img3.jpg",
    title: "Clock 3",
    subtitle: "Description 3",
    alt: "Clock Image 3",
    descriptions: [
      {
        size: "4ft x 4ft",
        description: "Description 3",
        appSupport: true,
      },
      // Add more descriptions as needed
    ],
  },
  {
    id: 1001,
    imageUrl:
      "https://mercury-star-cdn.s3.ap-south-1.amazonaws.com/products/img1.jpg",
    title: "Clock 4",
    subtitle: "Description 4",
    alt: "Clock Image 4",
    descriptions: [
      {
        size: "3ft x 4ft",
        description: "Description 4",
        appSupport: true,
      },
      // Add more descriptions as needed
    ],
  },
];

export default productData;
