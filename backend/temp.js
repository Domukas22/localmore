//

const categories = [
  {
    new: false,
    city: "65e831a37934e9a02f2aeae5",
    slug: "places",
    icon: "https://cdn-icons-png.freepik.com/512/6767/6767307.png",
    name: { en: "Places", de: "Plätze" },
    child_CATEG: [],
  },
  {
    new: false,
    city: "65e831a37934e9a02f2aeae5",
    slug: "sportsfields",
    icon: "https://cdn-icons-png.freepik.com/512/2817/2817691.png",
    name: { en: "Sports fields", de: "Sportplätze" },
    parent_CATEG: "",
    ancestor_CATEG: [""],
  },
];

const cities = [
  {
    _id: ObjectId("65e21a04910cf96739bbf08b"),
    name: "Heidelberg",
    createdAt: ISODate("2024-03-01T17:59:13.816Z"),
    updatedAt: ISODate("2024-03-01T17:59:13.816Z"),
  },
];

const profilesStatic = [
  {
    new: true,
    city: "65e831a37934e9a02f2aeae5",
    category: "65e855aa505edbd5f6e0ca19",
    category_PATH: ["65e8552cd3d74ab79fc6dbbb", "65e855aa505edbd5f6e0ca19"],
    tags: [
      "65e849898a18d3039e02477a",
      "65e84a736cf7974fdda0b5c5",
      "65e84ad471d9b7ca610bdb30",
      "65e84afa71d9b7ca610bdb33",
    ],
    text: "65e86490094f2a5d57b3009b",
    img: {
      desk_FRONT:
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
      mob_FRONT:
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
      desk_ALL: [
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
      ],
      mob_ALL: [
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
        "https://media.istockphoto.com/id/503333948/photo/basketball-court-after-the-rain.jpg?s=612x612&w=0&k=20&c=J7SlrVy24iJd5seu_JEFwqj3EYQIUfvqDH1BLhzarwI=",
      ],
    },
    adress: {
      gMaps:
        "https://www.google.com/maps/place/Basketballplatz+an+der+Neckarwiese/@49.4295545,8.6501008,17.62z/data=!4m6!3m5!1s0x4797c6b8ead19349:0x825c8c723c590364!8m2!3d49.430267!4d8.6492678!16s%2Fg%2F11hc_1jgbt?entry=ttu",
      street: "Neckarhamm 41",
      region: "Wieblingen",
      plz: "69123",
      coords: {
        type: "Point",
        coordinates: ["49.430081472531825", "8.649050995881968"],
      },
    },
  },
];

const tags = [
  {
    slug: "basketball",
    icon: "https://cdn-icons-png.flaticon.com/512/889/889455.png",
    name: { en: "Basketball", de: "Basketball" },
    createdAt: Timestamp({ t: 1709319976, i: 9 }),
    updatedAt: Timestamp({ t: 1709319976, i: 10 }),
  },
  {
    slug: "wieblingen",
    icon: "https://static.vecteezy.com/system/resources/previews/009/267/042/original/location-icon-design-free-png.png",
    name: { en: "Wieblingen", de: "Wieblingen" },
    createdAt: Timestamp({ t: 1709319976, i: 9 }),
    updatedAt: Timestamp({ t: 1709319976, i: 10 }),
  },
  {
    slug: "1basket",
    icon: "https://cdn-icons-png.flaticon.com/512/1645/1645768.png",
    name: { en: "1 Basket", de: "1 Korb" },
    createdAt: Timestamp({ t: 1709319976, i: 9 }),
    updatedAt: Timestamp({ t: 1709319976, i: 10 }),
  },
  {
    slug: "nonet",
    icon: "https://cdn-icons-png.flaticon.com/512/5517/5517956.png",
    name: { en: "No net", de: "Kein Netz" },
    createdAt: Timestamp({ t: 1709319976, i: 9 }),
    updatedAt: Timestamp({ t: 1709319976, i: 10 }),
  },
];

const translationsStatic = [
  {
    name: { en: "River Hoops", de: "Fluss Hoops" },
    subName: { en: "Basketball court", de: "Basketballplatz" },
    pros: [
      { en: "Frequently cleaned", de: "Wird häufig geputzt" },
      { en: "Quiet surroundings", de: "Ruhige Umgebung" },
    ],
    cons: [
      {
        en: "Slippery ground after rain",
        de: "Rutschiger Boden nach Regen",
      },
    ],
    about_TITLE: {
      en: "A quiet basketball court by the river in Wieblingen",
      de: "Ein ruhiger Basketballplatz am Fluss in Wieblingen",
    },
    about_PARAG: {
      en: "Right next to a soccer field and a volleyball field. The entrance is located in front of the gates of the TSG Rohrbach sports club. The course is well maintained and has chain nets. The floor is made of durable rubber and it is difficult to slip on it unless you play after rain. The downside is that the gates are often closed and you need a permit to play there unless you are a member of the sports club. The location is far enough away from roads to not hear cars or road construction.",
      de: "Direkt neben einem Fußball- und einem Volleyballfeld. Der Eingang befindet sich vor den Toren des Sportvereins TSG Rohrbach. Der Platz ist gut gepflegt und verfügt über Kettennetze. Der Boden besteht aus strapazierfähigem Gummi und es ist schwierig, darauf auszurutschen, es sei denn, man spielt nach Regen. Der Nachteil ist, dass die Tore oft geschlossen sind und man eine Erlaubnis braucht, um dort zu spielen, es sei denn, man ist Mitglied im Sportverein. Der Ort ist weit genug von Straßen entfernt, um weder Autos noch Straßenbauarbeiten zu hören.",
    },
  },
];

const tr_ui = [
  {
    name: "Box - Pros & Cons",
    title: { en: "Pros and Cons", de: "Vor- und Nachteile" },
  },
  {
    name: "Box - Profile Tags",
    title: { en: "Tag of ", de: "Tags von" },
  },
  {
    name: "Btn - Save",
    title: { en: "Save", de: "Merken" },
  },
  {
    name: "Btn - More",
    title: { en: "More", de: "Mehr" },
  },
  {
    name: "Btn - Maps",
    title: { en: "Maps", de: "Landkarte" },
  },
  {
    name: "Box - Short Infos",
    title: { en: "Short Infos", de: "Kurze Infos" },
    adress: { en: "Adress", de: "Adresse" },
  },
  {
    name: "Btn - See All Images",
    pre: { en: "See all ", de: "Alle " },
    post: { en: "images", de: "Bilder sehen" },
  },
];
