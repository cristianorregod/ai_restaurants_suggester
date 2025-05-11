import type { Restaurant } from "@/types";

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Platillos Voladores",
    category: "Fusión",
    stars: 4.5,
    description:
      "Innovadora cocina que fusiona sabores del Pacífico colombiano con técnicas internacionales.",
    price: "$$$",
    image: "URL_imagen_Platillos_Voladores",
    reviews: [
      {
        autor: "Crítico Gastronómico",
        texto:
          "Una explosión de sabores locales con presentaciones de alta cocina.",
      },
      {
        autor: "Comensal Feliz",
        texto: "El ambiente es encantador y cada plato una sorpresa deliciosa.",
      },
    ],
    schedule:
      "Lun-Vie: 12:00-15:00, 19:00-23:00; Sab: 13:00-16:00, 19:00-00:00; Dom: Cerrado",
    menu: [
      {
        plato: "Cazuela de Mariscos con Coco",
        precio: "$68000",
      },
      {
        plato: "Lomo de Res en Salsa de Café",
        precio: "$62000",
      },
      {
        plato: "Atún Sellado con Chontaduro",
        precio: "$65000",
      },
      {
        plato: "Risotto de Calamar en su Tinta",
        precio: "$59000",
      },
      {
        plato: "Carpaccio de Pulpo",
        precio: "$55000",
      },
    ],
    address: "Av. 3 Norte #7-19, Granada",
    phone: "+57 2 6687750",
  },
  {
    id: 2,
    name: "Restaurante Ringlete",
    category: "Vallecaucana",
    stars: 4.6,
    description:
      "Cocina tradicional del Valle del Cauca con recetas auténticas de la región.",
    price: "$$",
    image: "URL_imagen_Ringlete",
    reviews: [
      {
        autor: "Amante de lo Típico",
        texto: "El auténtico sabor valluno, como cocinar en casa de la abuela.",
      },
      {
        autor: "Visitante",
        texto: "Porciones generosas y excelente sazón criolla.",
      },
    ],
    schedule: "Lun-Sab: 12:00-22:00; Dom: 12:00-16:30",
    menu: [
      {
        plato: "Arroz Atollado",
        precio: "$42000",
      },
      {
        plato: "Chuleta Valluna",
        precio: "$38000",
      },
      {
        plato: "Sancocho de Gallina",
        precio: "$35000",
      },
      {
        plato: "Marranitas con Hogao",
        precio: "$16000",
      },
      {
        plato: "Aborrajados con Queso",
        precio: "$15000",
      },
    ],
    address: "Calle 15A Norte #9N-31, Granada",
    phone: "+57 2 6601177",
  },
  {
    id: 3,
    name: "Antigua Contemporanea Cafe",
    category: "Café / Internacional",
    stars: 4.4,
    description:
      "Un espacio bohemio y artístico que ofrece desde cafés especiales hasta platos fuertes con influencias mediterráneas.",
    price: "$$$",
    image: "URL_imagen_Antigua_Contemporanea",
    reviews: [
      {
        autor: "Cliente Habitual",
        texto:
          "Perfecto para trabajar, reunirse o simplemente disfrutar de un buen café y ambiente.",
      },
      {
        autor: "Turista",
        texto:
          "La decoración es fascinante y la comida acompaña muy bien la experiencia.",
      },
    ],
    schedule: "Lun-Jue: 09:00-21:00; Vie-Sab: 09:00-22:00; Dom: 10:00-17:00",
    menu: [
      {
        plato: "Brunch Especial",
        precio: "$45000",
      },
      {
        plato: "Lasaña de Vegetales",
        precio: "$35000",
      },
      {
        plato: "Sándwich Gourmet",
        precio: "$30000",
      },
      {
        plato: "Torta de la Casa",
        precio: "$19000",
      },
      {
        plato: "Cappuccino",
        precio: "$9000",
      },
    ],
    address: "Calle 2 #9-08B, San Antonio",
    phone: "+57 2 8936809",
  },
  {
    id: 4,
    name: "El Falso Olivo",
    category: "Mediterránea",
    stars: 4.3,
    description:
      "Especializado en cocina mediterránea con énfasis en productos frescos y de mar.",
    price: "$$$",
    image: "URL_imagen_El_Falso_Olivo",
    reviews: [
      {
        autor: "Fan del Mediterráneo",
        texto:
          "Ingredientes de calidad y preparaciones que resaltan el sabor original.",
      },
      {
        autor: "Cena Romántica",
        texto:
          "Un lugar elegante con excelente servicio para una ocasión especial.",
      },
    ],
    schedule: "Lun-Sab: 12:00-15:00, 19:00-23:00; Dom: Cerrado",
    menu: [
      {
        plato: "Pulpo a la Parrilla con Papas",
        precio: "$63000",
      },
      {
        plato: "Arroz Caldoso de Mariscos",
        precio: "$58000",
      },
      {
        plato: "Calamari a la Romana",
        precio: "$39000",
      },
      {
        plato: "Ensalada Griega",
        precio: "$32000",
      },
      {
        plato: "Lomo Salteado Estilo Mediterráneo",
        precio: "$56000",
      },
    ],
    address: "Calle 16 #103-00, Ciudad Jardín",
    phone: "+57 2 5558250",
  },
  {
    id: 5,
    name: "La Hacienda Del Bosque",
    category: "Típica Colombiana",
    stars: 4.5,
    description:
      "Disfruta de platos típicos colombianos en el entorno histórico y natural de una hacienda.",
    price: "$$$$",
    image: "URL_imagen_Hacienda_Del_Bosque",
    reviews: [
      {
        autor: "Familia",
        texto:
          "Un lugar hermoso para compartir en familia y disfrutar de la comida tradicional.",
      },
      {
        autor: "Turista",
        texto: "La experiencia de la hacienda es única y la comida deliciosa.",
      },
    ],
    schedule: "Mar-Dom: 12:00-17:00",
    menu: [
      {
        plato: "Bandeja Paisa Completa",
        precio: "$48000",
      },
      {
        plato: "Sancocho Trifásico",
        precio: "$45000",
      },
      {
        plato: "Frijolada con Chicharrón",
        precio: "$40000",
      },
      {
        plato: "Posta Negra",
        precio: "$46000",
      },
      {
        plato: "Tamal Valluno",
        precio: "$25000",
      },
    ],
    address: "Avenida 2 Oeste #14-250",
    phone: "+57 3187117755",
  },
];

export const images = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556745763-1a6f0ddb0250?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1679434184720-f729541052eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/f4/c2/4a/el-mejor-restaurante.jpg?w=600&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f1/bf/40/visitanos-y-enamorate.jpg?w=600&h=400&s=1",
  "https://cdn.elborondo.com/wp-content/uploads/2023/10/Banner-4-movil.jpg",
  "https://www.livevalledelcauca.com/assets/images/jamundi/restaurante-fogon-de-le%C3%B1a.jpg",
  "https://www.qhubocali.com/wp-content/uploads/2024/01/d-toluca-granada-01.jpg",
  "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/01/30/17/16/muesli-617686_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/03/27/14/18/roasted-asparagus-4973720_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/03/29/02/54/grilled-beef-7098655_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/27/14/14/sojoq-platter-7414559_1280.jpg",
  "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
