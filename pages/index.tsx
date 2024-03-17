import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";
import HomeBrandStory from "@/sections/home/HomeBrandStory";
import HomeCollections from "@/sections/home/HomeCollections";
import "swiper/css/bundle";

const occasionData = [
    {
        name: "Wedding Wonders",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/bridal.jpg",
        path: "/",
    },
    {
        name: "Party Perfection",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/jqambkyokje4jdbevmml.jpg",
        path: "/",
    },
    {
        name: "Festival Favorites",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/kvo2f21o0vplxcllyvb8.jpg",
        path: "/",
    },
    {
        name: "Traditional Treasures",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/traditional.jpg",
        path: "/",
    },
    {
        name: "Casual Comforts",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899692/elegasilk/collections/boxd6vi2smzdziosydzk.jpg",
        path: "/",
    },
    {
        name: "Bridal Beauties",
        img: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "/",
    },
];

const fabricsData = [
    {
        name: "Cotton",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197861/elegasilk/avatars/gxsoycvl4m8sxjukakm5.jpg",
    },

    {
        name: "Silk",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197368/elegasilk/avatars/jaeq1xc3qrkrcfiglktn.jpg",
    },
    {
        name: "Georgette",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197480/elegasilk/avatars/kvmfemd7mtugd5albsdp.jpg",
    },
    {
        name: "Chiffon",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197550/elegasilk/avatars/dh0k4wkuit0gjdbx8lgr.jpg",
    },
    {
        name: "Linen",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702197933/elegasilk/avatars/vyjs56etaxfe0mutfbab.jpg",
    },
    {
        name: "Organza",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1702198486/elegasilk/avatars/qu5yaqnfitedc4hiaqt4.jpg",
    },
    {
        name: "Crepe",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1709905654/elegasilk/avatars/yitxr1xenhdqbplozfjs.jpg",
    },
    {
        name: "Eri",
        image: "http://res.cloudinary.com/desihzeid/image/upload/v1709905662/elegasilk/avatars/g1oanq75k8tqifzaddyb.jpg",
    },
];

const collectionsData = [
    {
        name: "Banarasi Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Kanjivaram Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Leheriya Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Bandhani Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Pochampalli Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Chikankari Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Paithani Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Uppada Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Ikat Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Chanderi Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Sambalpuri Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
    {
        name: "Maheshwari Sarees",
        image: "https://res.cloudinary.com/desihzeid/image/upload/v1709899691/elegasilk/collections/fmh2s2pu9pqoisufhac7.jpg",
        path: "",
    },
];

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <HomeCollections collectionsData={collectionsData} fabricsData={fabricsData} occasionData={occasionData} />
            <HomeBrandStory />
        </>
    );
};

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
