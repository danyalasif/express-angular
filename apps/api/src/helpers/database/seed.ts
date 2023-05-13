import { Product } from './schema/product.schema';

const sampleProducts = [
  {
    name: 'Cozy Blanket',
    price: 39.99,
    stock: 10,
    description: 'Wrap yourself in warmth with this cozy blanket.',
    imageUrl: 'https://example.com/cozy-blanket.jpg',
  },
  {
    name: 'Retro Camera',
    price: 99.99,
    stock: 5,
    description:
      'Capture moments with style using this vintage-inspired camera.',
    imageUrl: 'https://example.com/retro-camera.jpg',
  },
  {
    name: 'Soothing Candle',
    price: 14.99,
    stock: 20,
    description:
      'Create a calming ambiance with the gentle glow and aroma of this soothing candle.',
    imageUrl: 'https://example.com/soothing-candle.jpg',
  },
  {
    name: 'Wireless Headphones',
    price: 79.99,
    stock: 15,
    description:
      'Enjoy your favorite music without the hassle of wires with these wireless headphones.',
    imageUrl: 'https://example.com/wireless-headphones.jpg',
  },
  {
    name: 'Coffee Maker',
    price: 49.99,
    stock: 8,
    description:
      'Start your day with a perfect cup of coffee using this advanced coffee maker.',
    imageUrl: 'https://example.com/coffee-maker.jpg',
  },
  {
    name: 'Fitness Tracker',
    price: 69.99,
    stock: 12,
    description:
      'Monitor your fitness goals and track your progress with this feature-rich fitness tracker.',
    imageUrl: 'https://example.com/fitness-tracker.jpg',
  },
  {
    name: 'Leather Wallet',
    price: 29.99,
    stock: 18,
    description:
      'Keep your essentials organized and secure with this stylish leather wallet.',
    imageUrl: 'https://example.com/leather-wallet.jpg',
  },
  {
    name: 'Portable Bluetooth Speaker',
    price: 59.99,
    stock: 6,
    description:
      'Experience high-quality sound on the go with this portable Bluetooth speaker.',
    imageUrl: 'https://example.com/portable-speaker.jpg',
  },
  {
    name: 'Stainless Steel Watch',
    price: 129.99,
    stock: 4,
    description:
      'Elevate your style with this sleek and durable stainless steel watch.',
    imageUrl: 'https://example.com/stainless-watch.jpg',
  },
  {
    name: 'Air Purifier',
    price: 149.99,
    stock: 10,
    description:
      'Breathe cleaner air and create a healthier environment with this advanced air purifier.',
    imageUrl: 'https://example.com/air-purifier.jpg',
  },
];

export const seedProducts = async () => {
  const products = await Product.find({});
  if (products.length === 0) {
    await Product.insertMany(sampleProducts);
  }
};
