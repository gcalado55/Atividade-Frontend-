import type { Product } from "../types/Product";

export const products = [
  {
    id: 1,
    name: "Headphones",
    category: "headphones",
    image: "/HeadPhones.png",
  },
  {
    id: 2,
    name: "Monitors",
    category: "monitors",
    image: "/Monitor.png",
  },
  {
    id: 3,
    name: "Gaming Chairs",
    category: "gaming-chairs",
    image: "/Chair.png",
  },
  {
    id: 4,
    name: "Keyboards",
    category: "keyboards",
    image: "/Keyboard.png",
  },
  {
    id: 5,
    name: "Smartwatches",
    category: "smartwatches",
    image: "/SmartWatch.png",
  },
  {
    id: 6,
    name: "Televisions",
    category: "televisions",
    image: "/Television.png",
  },
  {
    id: 7,
    name: "Notebooks",
    category: "notebooks",
    image: "/Notebook.png",
  },
  {
    id: 8,
    name: "Smartphones",
    category: "smartphones",
    image: "/S25.png",
  },
];

export const generateProductsForCategory = (category: string) => {
  switch (category) {
    case "headphones":
      return [
        {
          id: 1,
          name: "H3 NOISE CANCELLING",
          price: 299.99,
          description: "Our breakthrough headphone that breaks down barriers. The new generation of headphones that for the first time combines perfect high-quality sound, ANC, and performance with all our best technology.",
          categoryImage: "/Headphones/H3_Preto_Prod_shop2_9c02e02c-1831-4837-a885-aac66d5dd3b4_750x750-removebg-preview.png",
          images: [
            "/Headphones/H3_Preto_Prod_shop2_9c02e02c-1831-4837-a885-aac66d5dd3b4_750x750-removebg-preview.png",
            "/Headphones/H3_Preto_Prod_shop_13907b6b-5968-4f46-92dd-ae09fbe9f606_750x750-removebg-preview.png",
            "/Headphones/H3_blue_Prod_shop2_10532756-0fb2-409f-9792-8e1db8ed19b7_750x750-removebg-preview.png",
            "/Headphones/H3_blue_Prod_shop_750x750-removebg-preview.png",
          ],
        },
        {
          id: 2,
          name: "ASTRO A30 LIGHTSPEED",
          price: 399.99,
          description: "A30 Wireless combines maximum flexibility, mobility, style and comfort in a LIGHTSPEED and Bluetooth® gaming headset that can play everything on any platform. *A30 for Xbox is compatible with Xbox Series X|S and PC/MAC. A30 for PlayStation is compatible with PlayStation 5 and PC/MAC. Additional transmitters available for LIGHTSPEED connection to second console or USB-C devices.",
          categoryImage: "/public/Headphones/image-removebg-preview.png", // Category page image
          images: ["/public/Headphones/image-removebg-preview.png", "/public/Headphones/image-removebg-preview(1).png", "/public/Headphones/image-removebg-preview(2).png", "/public/Headphones/image-removebg-preview(3).png"],
        },
        {
          id: 3,
          name: "DISCO 2 CLASSIC KUBA AUDIO",
          price: 259.99,
          description: "A headphone built to last. With high-fidelity sound quality, replaceable parts, and analog bass selector, this headphone provides an immersive listening experience, surprising the most demanding music lovers. Perfect for all styles, from classic to contemporary. Your definitive headphone, developed and manufactured in Brazil.",
          categoryImage: "/public/Headphones/image-removebg-preview(4).png", // Category page image
          images: ["/public/Headphones/image-removebg-preview(4).png", "/public/Headphones/image-removebg-preview(5).png", "/public/Headphones/image-removebg-preview(6).png", "/public/Headphones/image-removebg-preview(7).png"],
        },
        {
          id: 4,
          name: "SENNHEISER HD 200 PRO",
          price: 429.99,
          description: "Bring studio sound to your home. The HD 200 PRO delivers powerful, detailed sound for all monitoring activities at a price that fits your budget. It combines ambient noise reduction with high resolution. Focus on your mix - at home, in the studio, or during live events.",
          categoryImage: "/public/Headphones/image-removebg-preview(8).png", // Category page image
          images: ["/public/Headphones/image-removebg-preview(8).png", "/public/Headphones/image-removebg-preview(9).png", "/public/Headphones/image-removebg-preview(10).png", "/public/Headphones/image-removebg-preview(11).png"],
        },
        {
          id: 5,
          name: "Logitech G335 Black",
          price: 429.99,
          description: "Logitech presents the incredible G335 gaming headset that promises to be one of the most flexible equipment in the market, as it allows you to enjoy maximum game audio through a single 3.5mm audio input. The combination of powerful 40mm drivers with the highest technology and Discord certification ensures clear sound and elevates communication quality to another level. Besides high performance, the G335 offers extra comfort with its soft cushions and an elastic band that adapts to head shape, causing a sensation of lightness even after hours of use.",
          categoryImage: "/public/Headphones/image-removebg-preview(12).png", // Category page image
          images: ["/public/Headphones/image-removebg-preview(12).png", "/public/Headphones/image-removebg-preview(13).png", "/public/Headphones/image-removebg-preview(14).png"],
        },
        {
          id: 6,
          name: "TRUTHEAR ZERO:BLUE2",
          price: 179.99,
          description: "The ZERO:BLUE2 features a design with dual-cavity internal magnetic circuit dynamic drivers, incorporating a 10mm liquid crystal dome with solid silica gel suspension and N52 magnet, plus a 7.8mm liquid crystal dome with enhanced polyurethane suspension and N55 magnet.",
          categoryImage: "/public/Headphones/truthear1.jpg", // Category page image
          images: ["/public/Headphones/truthear1.jpg" , "/public/Headphones/truthear2.jpg", "/public/Headphones/truthear3.jpg", "/public/Headphones/truthear4.jpg"],
        },
        {
          id: 7,
          name: "GALAXY BUDS3 PRO",
          price: 179.99,
          description: "Check out our completely new design engineered for optimal sound. Our reimagined Galaxy Buds3 Pro features small, angled heads for comfortable fit and to simplify your audio experience, while the highlighted Blade Lights allow you to express yourself. To highlight the Blade Lights design, the modern case has a transparent cover and delicate curved shape, equipped with USB-C and wireless charging capabilities.",
          categoryImage: "/public/Headphones/image-removebg-preview(15).png", // Category page image
          images: ["/public/Headphones/image-removebg-preview(15).png" , "/public/Headphones/image-removebg-preview(16).png", "/public/Headphones/image-removebg-preview(17).png", "/public/Headphones/image-removebg-preview(18).png"],
        },
        {
          id: 8,
          name: "EDIFIER HI-RES W830NB",
          price: 279.99,
          description: "Check out our completely new design engineered for optimal sound. Our reimagined headphones feature small, angled drivers for comfortable fit and simplified audio experience, while the highlighted design elements allow you to express yourself. To enhance the design aesthetics, the modern case has a transparent cover and delicate curved shape, equipped with USB-C and wireless charging capabilities.",
          categoryImage: "/public/Headphones/image-removebg-preview(19).png", // Category page image
          images: ["/public/Headphones/image-removebg-preview(19).png" , "/public/Headphones/image-removebg-preview(20).png", "/public/Headphones/image-removebg-preview(21).png", "/public/Headphones/image-removebg-preview(22).png"],
        },
      ];

    case "monitors":
      return [
        {
          id: 1,
          name: "SuperFrame Elegance Series",
          price: 899.99,
          description: "The SuperFrame Elegance Series monitor, with high-performance features like 200Hz, 1ms, 99% sRGB, curved screen, and FreeSync, is an excellent choice for gamers seeking the best gaming experience possible. Available in black and white colors, it offers a competitive advantage and superior image quality, transforming any gaming session into an immersive and unforgettable experience.",
          categoryImage: "/public/Monitors/image-removebg-preview(23).png",
          images: [
            "/public/Monitors/image-removebg-preview(23).png",
            "/public/Monitors/image-removebg-preview(24).png",
            "/public/Monitors/image-removebg-preview(25).png",
            "/public/Monitors/image-removebg-preview(26).png",
          ],
        },
        {
          id: 2,
          name: "Dell 27\" Monitor - S2725H",
          price: 1299.99,
          description: "Made to be seen. And heard. With crisp Full HD resolution, high 100 Hz refresh rate, integrated 5W dual speakers, and subtle texture on the back inspired by Japanese garden sands, any activity becomes an immersive experience.",
          categoryImage: "/public/Monitors/image-removebg-preview(31).png",
          images: [
            "/public/Monitors/image-removebg-preview(31).png",
            "/public/Monitors/image-removebg-preview(32).png",
            "/public/Monitors/image-removebg-preview(33).png",
            "/public/Monitors/image-removebg-preview(34).png",
          ],
        },
        {
          id: 3,
          name: "SAMSUNG Odyssey 27\"",
          price: 1299.99,
          description: "React in real-time with 165Hz refresh rate. Defeat all enemies, even at high speeds. The 165Hz refresh rate eliminates lag and motion blur for stimulating gameplay with ultra-smooth action. Ultra-fast 1ms response time (MPRT). Make every movement count with 1ms response time. Screen pixels respond almost instantly, allowing fast action to flow with real-world precision. Your on-screen performance is as fast as your own reflexes.",
          categoryImage: "/public/Monitors/image-removebg-preview(35).png",
          images: [
            "/public/Monitors/image-removebg-preview(35).png",
            "/public/Monitors/image-removebg-preview(36).png",
            "/public/Monitors/image-removebg-preview(37).png",
            "/public/Monitors/image-removebg-preview(38).png",
          ],
        },
        {
          id: 4,
          name: "Alienware 32 4K QD-OLED",
          price: 1299.99,
          description: "An unparalleled viewing experience in all scenes with our 32-inch QD-OLED monitor, featuring 4K resolution, curved panel, Dolby Vision, and 240 Hz refresh rate.",
          categoryImage: "/public/Monitors/image-removebg-preview(27).png",
          images: [
            "/public/Monitors/image-removebg-preview(27).png",
            "/public/Monitors/image-removebg-preview(28).png",
            "/public/Monitors/image-removebg-preview(29).png",
            "/public/Monitors/image-removebg-preview(30).png",
          ],
        },
        {
          id: 5,
          name: "MONITOR 21.5 AOC 22B30HM2",
          price: 1299.99,
          description: "Gaming shouldn't be a choice between unstable gameplay or broken frames. Get smooth, artifact-free performance at virtually any framerate with Adaptive-Sync technology, fast and smooth refresh, and ultra-fast response time. More gaming power with ideal game settings provide an instant advantage. Detect enemies hidden in the shadows through ideal contrast, sharpness, and vibrant color scenes.",
          categoryImage: "/public/Monitors/image-removebg-preview(39).png",
          images: [
            "/public/Monitors/image-removebg-preview(39).png",
            "/public/Monitors/image-removebg-preview(40).png",
            "/public/Monitors/image-removebg-preview(41).png",
            "/public/Monitors/image-removebg-preview(42).png",
          ],
        },
        {
          id: 6,
          name: "Portable Monitor 15.6\"",
          price: 1299.99,
          description: "Full HD Portable Monitor - 18.5-inch portable monitor for notebook with 1920 x 1080 resolution, advanced IPS bright screen with full 178° viewing angle support, rendering accurate and brilliant colors, drawing you into video or gaming with realistic colors and incredible details. It effectively reduces blue light radiation damage, is flicker-free, protects eyes, and makes it easier to watch for long periods. A second monitor for working from home.",
          categoryImage: "/public/Monitors/image-removebg-preview(43).png",
          images: [
            "/public/Monitors/image-removebg-preview(43).png",
            "/public/Monitors/image-removebg-preview(44).png",
            "/public/Monitors/image-removebg-preview(45).png",
            "/public/Monitors/image-removebg-preview(46).png",
          ],
        },
        {
          id: 7,
          name: "Monitor Samsung Viewfinity S6",
          price: 1299.99,
          description: "Enjoy smooth visuals and performance. The visual excellence that professionals demand. QHD resolution (2560x1440) and 100 Hz refresh rate work together to reveal hidden details through a dense amount of pixels, reducing motion blur. Immerse yourself in delicate design projects, complex diagrams, and dynamic videos with a smoother workflow.",
          categoryImage: "/public/Monitors/image-removebg-preview(47).png",
          images: [
            "/public/Monitors/image-removebg-preview(47).png",
            "/public/Monitors/image-removebg-preview(48).png",
            "/public/Monitors/image-removebg-preview(49).png",
            "/public/Monitors/image-removebg-preview(50).png",
          ],
        },
        {
          id: 8,
          name: "Monitor 23.8\" Pivot Rotative",
          price: 1299.99,
          description: "Enjoy smooth visuals and performance. The visual excellence that professionals demand. QHD resolution (2560x1440) and 100 Hz refresh rate work together to reveal hidden details through a dense amount of pixels, reducing motion blur. Immerse yourself in delicate design projects, complex diagrams, and dynamic videos with a smoother workflow.",
          categoryImage: "/public/Monitors/image-removebg-preview(51).png",
          images: [
            "/public/Monitors/image-removebg-preview(51).png",
            "/public/Monitors/image-removebg-preview(52).png",
            "/public/Monitors/image-removebg-preview(53).png",
          ],
        },
      ];

    case "smartwatch":
      return [
        {
          id: 1,
          name: "QCY GT S8 Watch Model WA23S8A",
          price: 499.99,
          description: "With a classic round watch design, the QCY Watch GT S8 features a retina-level AMOLED display, providing a vivid and clear visual experience. Its refresh rate of up to 60 Hz offers super smooth touch control, making interaction with the watch even more intuitive. Built-in microphone and speaker allow you to answer or decline calls directly from your wrist.",
          categoryImage: "/public/Smartwatches/image-removebg-preview(115).png",
          images: [
            "/public/Smartwatches/image-removebg-preview(115).png",
            "/public/Smartwatches/image-removebg-preview(116).png",
            "/public/Smartwatches/image-removebg-preview(117).png",
          ],
        },
        {
          id: 2,
          name: "SmartWatch Amazfit GTR 4",
          price: 899.99,
          description: "The Amazfit GTR 4 is an advanced smartwatch that combines style and functionality. With a high-resolution AMOLED display, it offers an impressive visual experience. The watch features health monitoring capabilities, including heart rate measurement, sleep monitoring, and activity tracking. Additionally, it's water-resistant and has long battery life, making it ideal for active users.",
          categoryImage: "/public/Smartwatches/image-removebg-preview(118).png",
          images: [
            "/public/Smartwatches/image-removebg-preview(118).png",
            "/public/Smartwatches/image-removebg-preview(119).png",
            "/public/Smartwatches/image-removebg-preview(120).png",
            "/public/Smartwatches/image-removebg-preview(121).png",
          ],
        },
        {
          id: 3,
          name: "Samsung Galaxy Watch 5 Pro",
          price: 1299.99,
          description: "The Samsung Galaxy Watch 5 Pro is a premium smartwatch that combines advanced technology with elegant design. With a vibrant AMOLED display, it offers an exceptional visual experience. The watch features advanced health monitoring capabilities, including ECG, blood oxygen measurement, and activity tracking. Additionally, it's water-resistant and has long battery life, making it ideal for demanding users.",
          categoryImage: "/public/Smartwatches/image-removebg-preview(127).png",
          images: [
            "/public/Smartwatches/image-removebg-preview(127).png",
            "/public/Smartwatches/image-removebg-preview(126).png",
            "/public/Smartwatches/image-removebg-preview(128).png",
            "/public/Smartwatches/image-removebg-preview(129).png",
          ],
        },
        {
          id: 4,
          name: "Smartwatch Apple Watch Series 8",
          price: 1499.99,
          description: "The Apple Watch Series 8 is Apple's most advanced smartwatch yet. With an always-on Retina display, it offers an impressive visual experience. Featuring cutting-edge technology and comprehensive health monitoring capabilities, it sets a new standard for smartwatches.",
          categoryImage: "/public/Smartwatches/image-removebg-preview(122).png",
          images: [
            "/public/Smartwatches/image-removebg-preview(122).png",
            "/public/Smartwatches/image-removebg-preview(123).png",
            "/public/Smartwatches/image-removebg-preview(124).png",
            "/public/Smartwatches/image-removebg-preview(125).png",
          ],
        },
      ];

    case "gaming-chairs":
      return [
        {
          id: 1,
          name: "TGT Heron TC Gaming Chair",
          price: 799.99,
          description: "The Heron TC chair gives you customizable recline from 90° to 135° to adjust as you see fit. Maximum recommended user height 180cm, supported weight up to 120kg. PU finish, metal structure and base, and 50mm diameter PU wheels.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(54).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(54).png",
            "/public/Gaming Chairs/image-removebg-preview(55).png",
            "/public/Gaming Chairs/image-removebg-preview(56).png",
            "/public/Gaming Chairs/image-removebg-preview(57).png",
          ],
        },
        {
          id: 2,
          name: "Fox Racer Gaming Chair",
          price: 999.99,
          description: "E-sports Design Featuring a 'diamond' style design with clear, three-dimensional contours, this gaming chair is perfect for both home offices and gaming use. Robust Load Capacity Built to support up to 150KG, offering durability and stability for users of various weights. Optimized Back Support Designed with an oversized backrest that perfectly aligns with your head, providing superior comfort and ergonomic support for chairs.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(58).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(58).png",
            "/public/Gaming Chairs/image-removebg-preview(59).png",
            "/public/Gaming Chairs/image-removebg-preview(60).png",
          ],
        },
        {
          id: 3,
          name: "ThunderX3 TGC12 Gaming Chair",
          price: 1199.99,
          description: "The ThunderX3 TGC12 gaming chair is the perfect choice for those seeking comfort and style during long gaming sessions. With an ergonomic design, it provides ideal support for spine and neck, ensuring hours of gaming without discomfort. Its high-quality synthetic leather upholstery is easy to clean and wear-resistant, while the adjustable armrests provide total customization.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(61).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(61).png",
            "/public/Gaming Chairs/image-removebg-preview(62).png",
            "/public/Gaming Chairs/image-removebg-preview(63).png",
            "/public/Gaming Chairs/image-removebg-preview(64).png",
          ],
        },
        {
          id: 4,
          name: "Corsair T3 Rush Gaming Chair",
          price: 1399.99,
          description: "The Corsair T3 Rush gaming chair is the perfect combination of comfort and performance. With an ergonomic design, it provides ideal support for long gaming sessions, while the breathable fabric upholstery keeps you cool and comfortable. The adjustable armrests and reclining backrest ensure you can customize your position for maximum comfort.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(65).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(65).png",
            "/public/Gaming Chairs/image-removebg-preview(66).png",
            "/public/Gaming Chairs/image-removebg-preview(67).png",
            "/public/Gaming Chairs/image-removebg-preview(68).png",
          ],
        },
        {
          id: 5,
          name: "DXRacer Formula Series",
          price: 1599.99,
          description: "The DXRacer Formula Series gaming chair is designed to offer maximum comfort and support during long gaming sessions. With an ergonomic design, it perfectly adapts to your body, providing an immersive gaming experience. Its high-quality synthetic leather upholstery is durable and easy to clean, while the adjustable armrests ensure total customization.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(69).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(69).png",
            "/public/Gaming Chairs/image-removebg-preview(70).png",
            "/public/Gaming Chairs/image-removebg-preview(71).png",
            "/public/Gaming Chairs/image-removebg-preview(72).png",
          ],
        },
        {
          id: 6,
          name: "Secretlab Titan Evo 2022",
          price: 1999.99,
          description: "The Secretlab Titan Evo 2022 gaming chair is the ultimate choice for gamers seeking comfort and style. With an ergonomic design, it provides ideal support for long gaming sessions, while the premium synthetic leather upholstery offers durability and easy cleaning. The adjustable armrests and reclining backrest ensure you can customize your position for maximum comfort.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(73).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(73).png",
            "/public/Gaming Chairs/image-removebg-preview(74).png",
            "/public/Gaming Chairs/image-removebg-preview(75).png",
          ],
        },
        {
          id: 7,
          name: "Anda Seat Jungle Series",
          price: 2199.99,
          description: "The Anda Seat Jungle Series gaming chair is designed to offer maximum comfort and support during long gaming sessions. With an ergonomic design, it perfectly adapts to your body, providing an immersive gaming experience. Its breathable fabric keeps you cool and comfortable, while the adjustable armrests ensure total customization.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(76).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(76).png",
            "/public/Gaming Chairs/image-removebg-preview(77).png",
            "/public/Gaming Chairs/image-removebg-preview(78).png",
          ],
        },
        {
          id: 8,
          name: "Noblechairs Hero Gaming Chair",
          price: 2499.99,
          description: "The Noblechairs Hero gaming chair is the perfect choice for those seeking comfort and style during long gaming sessions. With an ergonomic design, it provides ideal support for spine and neck, ensuring hours of gaming without discomfort. Its high-quality synthetic leather upholstery is easy to clean and wear-resistant, while the adjustable armrests provide total customization.",
          categoryImage: "/public/Gaming Chairs/image-removebg-preview(79).png",
          images: [
            "/public/Gaming Chairs/image-removebg-preview(79).png",
            "/public/Gaming Chairs/image-removebg-preview(80).png",
            "/public/Gaming Chairs/image-removebg-preview(81).png",
            "/public/Gaming Chairs/image-removebg-preview(82).png",
          ],
        },
      ];

    case "keyboards":
      return [
        {
          id: 1,
          name: "MADLIONS MAD68 HE",
          price: 199.99,
          description: "Introducing the MADLIONS MAD68HE Series: The Ultimate Gaming Mechanical Keyboard. In today's competitive gaming landscape, choosing a high-performance keyboard is crucial. The MADLIONS MAD68 HE series mechanical keyboards are specifically designed for players who demand excellence, making them the ideal choice for mainstream gamers.",
          categoryImage: "/public/Keyboard.png",
          images: [
            "/public/Keyboards/image-removebg-preview(83).png",
            "/public/Keyboards/image-removebg-preview(84).png",
            "/public/Keyboards/image-removebg-preview(85).png",
            "/public/Keyboards/image-removebg-preview(86).png",
          ],
        },
        {
          id: 2,
          name: "Logitech G413 SE Keyboard",
          price: 299.99,
          description: "The Logitech G413 SE mechanical keyboard is the perfect choice for gamers seeking performance and durability. With high-quality mechanical switches, it offers a precise and responsive typing experience. Its minimalist design and white backlighting ensure an elegant look, while the aluminum construction provides strength and stability.",
          categoryImage: "/public/Keyboards/image-removebg-preview(87).png",
          images: [
            "/public/Keyboards/image-removebg-preview(87).png",
            "/public/Keyboards/image-removebg-preview(88).png",
            "/public/Keyboards/image-removebg-preview(89).png",
            "/public/Keyboards/image-removebg-preview(90).png",
          ],
        },
        {
          id: 3,
          name: "Corsair K55 RGB Keyboard",
          price: 349.99,
          description: "The Corsair K55 RGB mechanical keyboard is designed to offer an immersive gaming experience. With customizable RGB backlighting, you can create dynamic lighting effects that sync with your games. The mechanical switches offer precise tactile response, while dedicated media controls allow you to easily adjust volume and media playback.",
          categoryImage: "/public/Keyboards/image-removebg-preview(91).png",
          images: [
            "/public/Keyboards/image-removebg-preview(91).png",
            "/public/Keyboards/image-removebg-preview(92).png",
            "/public/Keyboards/image-removebg-preview(93).png",
            "/public/Keyboards/image-removebg-preview(94).png",
          ],
        },
        {
          id: 4,
          name: "Razer BlackWidow V3",
          price: 399.99,
          description: "The Razer BlackWidow V3 mechanical keyboard is the ultimate choice for gamers seeking performance and style. With Razer Green mechanical switches, it offers precise tactile response and satisfying typing sound. The Chroma RGB backlighting allows you to customize each key with millions of colors, creating an impressive look.",
          categoryImage: "/public/Keyboards/image-removebg-preview(95).png",
          images: [
            "/public/Keyboards/image-removebg-preview(95).png",
            "/public/Keyboards/image-removebg-preview(96).png",
            "/public/Keyboards/image-removebg-preview(97).png",
            "/public/Keyboards/image-removebg-preview(98).png",
          ],
        },
      ];

    case "televisions":
      return [
        {
          id: 1,
          name: "Smart TV 4K Ultra HD",
          price: 2999.99,
          description: "Smart TV with 4K resolution and HDR support, offering stunning image quality and immersive viewing experience with advanced smart features.",
          categoryImage: "/public/Televisions/image-removebg-preview(99).png",
          images: [
            "/public/Televisions/image-removebg-preview(99).png",
            "/public/Televisions/image-removebg-preview(100).png",
            "/public/Televisions/image-removebg-preview(101).png",
            "/public/Televisions/image-removebg-preview(102).png",
          ],
        },
        {
          id: 2,
          name: "Smart TV OLED 55\"",
          price: 3499.99,
          description: "OLED Smart TV featuring vibrant colors and deep blacks, delivering exceptional picture quality and superior contrast for an unmatched viewing experience.",
          categoryImage: "/public/Televisions/image-removebg-preview(103).png",
          images: [
            "/public/Televisions/image-removebg-preview(103).png",
            "/public/Televisions/image-removebg-preview(104).png",
            "/public/Televisions/image-removebg-preview(105).png",
            "/public/Televisions/image-removebg-preview(106).png",
          ],
        },
        {
          id: 3,
          name: "Smart TV QLED 65\"",
          price: 4499.99,
          description: "QLED Smart TV with Quantum Dot technology, providing brilliant colors and exceptional brightness for a truly immersive entertainment experience.",
          categoryImage: "/public/Televisions/image-removebg-preview(107).png",
          images: [
            "/public/Televisions/image-removebg-preview(107).png",
            "/public/Televisions/image-removebg-preview(108).png",
            "/public/Televisions/image-removebg-preview(109).png",
            "/public/Televisions/image-removebg-preview(110).png",
          ],
        },
        {
          id: 4,
          name: "Smart TV 8K Ultra HD",
          price: 5999.99,
          description: "8K Smart TV with advanced upscaling technology, delivering unprecedented detail and clarity with four times the resolution of 4K.",
          categoryImage: "/public/Televisions/image-removebg-preview(111).png",
          images: [
            "/public/Televisions/image-removebg-preview(111).png",
            "/public/Televisions/image-removebg-preview(112).png",
            "/public/Televisions/image-removebg-preview(113).png",
            "/public/Televisions/image-removebg-preview(114).png",
          ],
        }
      ];

    case "notebooks":
      return [
        {
          id: 1,
          name: "Apple 2025 MacBook Air",
          price: 3999.99,
          description: "SUPERPOWER M4 — Apple's M4 processor brings even more speed and fluidity to everything you do, like working with many apps, editing videos, or playing graphics-intensive games. UP TO 18 HOURS OF BATTERY LIFE — MacBook Air's performance is phenomenal, even when not plugged in.",
          categoryImage: "/public/Notebooks/image-removebg-preview(130).png",
          images: [
            "/public/Notebooks/image-removebg-preview(130).png",
            "/public/Notebooks/image-removebg-preview(131).png",
            "/public/Notebooks/image-removebg-preview(132).png",
            "/public/Notebooks/image-removebg-preview(133).png",
          ],
        },
        {
          id: 2,
          name: "Dell Inspiron 15 Notebook",
          price: 2999.99,
          description: "The Dell Inspiron 15 is a versatile and powerful notebook, ideal for daily use and entertainment. With a 15.6-inch Full HD screen, it offers sharp and vibrant images. Equipped with Intel Core i5 processor, 8GB RAM, and 256GB SSD, it ensures fast and efficient performance. Its sleek and lightweight design makes it perfect for people on the move.",
          categoryImage: "/public/Notebooks/image-removebg-preview(134).png",
          images: [
            "/public/Notebooks/image-removebg-preview(134).png",
            "/public/Notebooks/image-removebg-preview(135).png",
            "/public/Notebooks/image-removebg-preview(136).png",
            "/public/Notebooks/image-removebg-preview(137).png",
          ],
        },
        {
          id: 3,
          name: "Notebook Lenovo IdeaPad 3",
          price: 2499.99,
          description: "The Lenovo IdeaPad 3 is an affordable and reliable notebook, perfect for students and professionals. With a 15.6-inch screen, it offers a comfortable visual experience. Equipped with AMD Ryzen 5 processor, 8GB RAM, and 512GB SSD, it ensures solid performance for daily tasks. Its compact and lightweight design makes it easy to carry.",
          categoryImage: "/public/Notebooks/image-removebg-preview(138).png",
          images: [
            "/public/Notebooks/image-removebg-preview(138).png",
            "/public/Notebooks/image-removebg-preview(139).png",
            "/public/Notebooks/image-removebg-preview(140).png",
            "/public/Notebooks/image-removebg-preview(141).png",
          ],
        },
        {
          id: 4,
          name: "Notebook HP Pavilion x360",
          price: 3499.99,
          description: "The HP Pavilion x360 is a convertible notebook that combines style and functionality. With a 14-inch touchscreen, it can be used as a laptop or tablet. Equipped with Intel Core i5 processor, 8GB RAM, and 512GB SSD, it offers agile performance for multitasking. Its elegant and foldable design makes it ideal for those seeking versatility.",
          categoryImage: "/public/Notebooks/image-removebg-preview(142).png",
          images: [
            "/public/Notebooks/image-removebg-preview(142).png",
            "/public/Notebooks/image-removebg-preview(143).png",
            "/public/Notebooks/image-removebg-preview(144).png",
            "/public/Notebooks/image-removebg-preview(145).png",
          ],
        },
      ];

    case "smartphones":
      return [
        {
          id: 1,
          name: "SAMSUNG Galaxy S25 Ultra",
          price: 1999.99,
          description: "Samsung presents the newest launch in the S line. Your true AI ally, the Galaxy S25 is the new phone with next-generation artificial intelligence power. Experience Galaxy AI with its new features. Elevate your daily life with quick and complete assistance through the most advanced AI features, such as real-time translations, text and image generation, all with greater speed and privacy, thanks to on-device task execution.",
          categoryImage: "/Smartphones/image-removebg-preview(146).png",
          images: [
            "/Smartphones/image-removebg-preview(146).png",
            "/Smartphones/image-removebg-preview(147).png",
            "/Smartphones/image-removebg-preview(148).png",
            "/Smartphones/image-removebg-preview(149).png"
          ],
        },
        {
          id: 2,
          name: "Apple iPhone 15 Pro Max",
          price: 2499.99,
          description: "The iPhone 15 Pro Max is Apple's most advanced smartphone, featuring an elegant titanium design and a 6.7-inch Super Retina XDR display. Powered by the A17 Pro chip, it delivers exceptional performance and energy efficiency. The triple 48 MP camera allows capturing stunning photos and videos, while 5G connectivity ensures ultra-fast download speeds.",
          categoryImage: "/Smartphones/image-removebg-preview(150).png",
          images: [
            "/Smartphones/image-removebg-preview(150).png",
            "/Smartphones/image-removebg-preview(151).png",
            "/Smartphones/image-removebg-preview(152).png",
            "/Smartphones/image-removebg-preview(153).png"
          ],
        },
        {
          id: 3,
          name: "Xiaomi Redmi Note 13 Pro",
          price: 1399.99,
          description: "The Xiaomi 13 Pro is a smartphone with a 6.73-inch AMOLED display and 120 Hz refresh rate. Equipped with the Snapdragon 8 Gen 2 processor, it offers exceptional performance for gaming and multitasking. The triple 50 MP camera allows capturing stunning photos, while the long-lasting battery ensures you stay connected all day.",
          categoryImage: "/Smartphones/image-removebg-preview(154).png",
          images: [
            "/Smartphones/image-removebg-preview(154).png",
            "/Smartphones/image-removebg-preview(155).png",
            "/Smartphones/image-removebg-preview(156).png",
          ],
        },
        {
          id: 4,
          name: "Motorola Edge 40 Pro",
          price: 1199.99,
          description: "The Motorola Edge 40 Pro is a smartphone with a 6.67-inch OLED display and 165 Hz refresh rate. Equipped with the Snapdragon 8 Gen 2 processor, it offers exceptional performance for gaming and multitasking. The triple 50 MP camera allows capturing stunning photos, while the long-lasting battery ensures you stay connected all day.",
          categoryImage: "/Smartphones/image-removebg-preview(157).png",
          images: [
            "/Smartphones/image-removebg-preview(157).png",
            "/Smartphones/image-removebg-preview(158).png",
            "/Smartphones/image-removebg-preview(159).png",
            "/Smartphones/image-removebg-preview(160).png"
          ],
        },

      ];

    default:
      return [];
  }
};