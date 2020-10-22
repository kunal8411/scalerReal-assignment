const SHOP_DATA = {
  mobile: {
    id: 1,
    title: 'Mobile',
    routeName: 'mobile',
    items: [
      {
        id: 1,
        name: 'iPhone XR',
        imageUrl: 'https://wallpapershome.com/images/wallpapers/iphone-xr-3840x2160-red-black-5k-smartphone-apple-september-2018-event-20350.jpg',
        price: 4899
      },
      {
        id: 2,
        name: 'Samsung M21',
        imageUrl: 'https://sm.mashable.com/t/mashable_in/photo/default/galaxy-m21-edit01_wxv1.960.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Oppo F11 pro',
        imageUrl: 'https://static.hub.91mobiles.com/wp-content/uploads/2019/03/Oppo-F11-Pro-Feature-Image.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Vivo A5',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_SPTP8LHTPOchC18cx0rxZ7Xnfcl0A_-HSQ&usqp=CAU',
        price: 25
      },
      {
        id: 5,
        name: 'One plus',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6msYfo2GHYbZkSXlhS8UawP1wyfCkx8tG5Q&usqp=CAU',
        price: 18
      },
      {
        id: 6,
        name: 'iPhone 11 ',
        imageUrl: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-54718/Apple-iPhone-11-Pro-Max-Midnight-Green-frontimage-1-1024x768.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'Samsung Note 4',
        imageUrl: 'https://drop.ndtv.com/TECH/product_database/images/942014103859AM_635_samsung_galaxy_note_4.jpeg',
        price: 18
      },
      {
        id: 8,
        name: 'Samsung pad',
        imageUrl: 'https://9to5mac.com/wp-content/uploads/sites/6/2019/04/Which-iPad-Should-You-Buy-iPad-Pro-11.jpg?quality=82&strip=all&w=1600',
        price: 14
      },
      {
        id: 9,
        name: 'iPad',
        imageUrl: 'https://sm.pcmag.com/t/pcmag_in/review/a/apple-ipad/apple-ipad-pro-129-inch-2018-review_jh8r.1024.jpg',
        price: 16
      }
    ]
  },
  laptops: {
    id: 2,
    title: 'Laptops',
    routeName: 'laptops',
    items: [
      {
        id: 10,
        name: 'MacBook Pro',
        imageUrl: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/149132-laptops-review-macbook-pro-13-inch-2019-review-business-as-usual-image1-mjmo9napgu.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Dell Lattitude',
        imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/14_7400/global-spi/ng/notebook_latitude_14_7400_campaign_hero_504x350_ng.psd?fmt=jpg&wid=570&hei=400',
        price: 280
      },
      {
        id: 12,
        name: 'HP ',
        imageUrl: 'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/03/hp-spectre-x360-13-late-2019-1.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Mi laptop ',
        imageUrl: 'https://static.digit.in/default/5512ed3ac9f8d075e66a1ba42bddf9d613019e60.jpeg',
        price: 160
      },
      {
        id: 14,
        name: 'Dell XPS',
        imageUrl: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/13_9380/global_spi/notebook-xps-13-9380-whl-silver-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400',
        price: 160
      },
      {
        id: 15,
        name: 'Asus',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9CNsKaFzlg4k3QdCt5eCQt8SF4Tdb1zrZ3Q&usqp=CAU',
        price: 160
      },
      {
        id: 16,
        name: 'Lenovo',
        imageUrl: 'https://www.lenovo.com/medias/ThinkPad-T490.png?context=bWFzdGVyfHJvb3R8ODI0NjR8aW1hZ2UvcG5nfGg3MC9oNzAvMTExMjYyNjE5MDc0ODYucG5nfGJlZWM1NjcyMDI4MWQ5OWQ3NjQxMWVlMDliMzcxMjg1MGQ1ZjQ1Nzc1ZDhiZmIxZjBjNTBjZTA3NmI2YTJiNDY',
        price: 190
      },
      {
        id: 17,
        name: 'Dell Inspirion',
        imageUrl: 'https://sm.pcmag.com/t/pcmag_in/guide/t/the-best-d/the-best-dell-laptops-for-2020_sq9n.1200.jpg',
        price: 200
      }
    ]
  },
  sports: {
    id: 3,
    title: 'Sports',
    routeName: 'sports',
    items: [
      {
        id: 18,
        name: 'Badminton',
        imageUrl: 'https://comps.canstockphoto.com/badminton-racket-and-shuttlecock-stock-image_csp59722766.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Table Tennis',
        imageUrl: 'https://www.india.com/wp-content/uploads/2020/05/table-tennis.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Football',
        imageUrl: 'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0319%2Fr681030_1296x729_16%2D9.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Cricket Bat',
        imageUrl: 'https://contents.mediadecathlon.com/p1708139/368d1e2c43d9b3fdc39060e8ab982013/p1708139.jpg?f=650x650&format=auto',
        price: 165
      },
      {
        id: 22,
        name: 'Ball',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuSa7dPgv5QtMEQo-8JYOdj7s3gZR-DZuW8A&usqp=CAU',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;