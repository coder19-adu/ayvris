const CLOTHING = ["S", "M", "L", "XL"];
const ONE = ["One size"];

export const categories = ["Dresses", "Tops"];

// `type` and `color` drive the temporary illustrations in ProductImage.
// Replace them with an `image` URL when you have real photos.
export const products = [
  // Photo products: drop new images into /public/products and add an entry here.
  { id: "coastline-sundress", name: "Coastline Sundress", category: "Dresses", price: 3499, image: "/products/coastline-sundress.png", sizes: CLOTHING, isNew: true },
  { id: "picnic-panic-dress", name: "Picnic Panic Dress", category: "Dresses", price: 3299, image: "/products/picnic-panic-dress.png", sizes: CLOTHING, isNew: true },
  { id: "bow-mance-top", name: "Bow-Mance Top", category: "Tops", price: 1999, image: "/products/bow-mance-top.png", sizes: CLOTHING, isNew: true },
  { id: "kiss-and-tell", name: "Kiss & Tell", category: "Tops", price: 1799, image: "/products/kiss-and-tell.png", sizes: CLOTHING, isNew: true },
];
