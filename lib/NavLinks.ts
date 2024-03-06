export interface ISubmenu {
    _id: string;
    title: string;
    status: boolean;
    path: string;
    slug?: string;
}

export interface ISubmenuGroup {
    _id: string;
    title: string;
    subMenu: ISubmenu[];
}

export interface INavLink {
    _id: string;
    title: string;
    status: boolean;
    hasSubmenu: "GROUPED" | "SINGLE" | "NONE";
    path?: string;
    subMenu?: ISubmenuGroup[] | ISubmenu[];
}

const NAV_LINKS: INavLink[] = [
    {
        _id: "65706f8e3d9601c4f9cb5eb9",
        title: "Home",
        status: true,
        hasSubmenu: "NONE",
        path: "/",
    },

    {
        _id: "657070813d9601c4f9cb5ebb",
        title: "Fabric",
        status: true,
        hasSubmenu: "GROUPED",
        subMenu: [
            {
                _id: "NaturalFabrics",
                title: "Natural Fabrics",
                subMenu: [
                    {
                        _id: "657348b78840612d2a0a8c6a",
                        title: "Cotton Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659308f32784df2d7ed925de",
                        title: "Khadi Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "657379ec7c5a3cb5bae715b3",
                        title: "Linen Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "657375a87c5a3cb5bae7152c",
                        title: "Silk Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "6593091e2784df2d7ed9261d",
                        title: "Tussar Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659308ee2784df2d7ed925d7",
                        title: "Eri Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659309042784df2d7ed925fa",
                        title: "Muga Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "6593090c2784df2d7ed92601",
                        title: "Mulmul Sarees",
                        status: true,
                        path: "",
                    },
                ],
            },
            {
                _id: "SyntheticFabrics",
                title: "Synthetic Fabrics",
                subMenu: [
                    {
                        _id: "657378dc7c5a3cb5bae7156f",
                        title: "Chiffon Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659308eb2784df2d7ed925d0",
                        title: "Crepe Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "657378977c5a3cb5bae71565",
                        title: "Georgette Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "65737ab17c5a3cb5bae715bd",
                        title: "Organza Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659309172784df2d7ed9260f",
                        title: "Tissue Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659309252784df2d7ed9262b",
                        title: "Viscose Sarees",
                        status: true,
                        path: "",
                    },
                ],
            },
            {
                _id: "BlendedFabrics",
                title: "Blended Fabrics",
                subMenu: [
                    {
                        _id: "659309132784df2d7ed92608",
                        title: "Cotton Silk Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659309212784df2d7ed92624",
                        title: "Tussar Silk Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659308fa2784df2d7ed925ec",
                        title: "Luxe Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659308ff2784df2d7ed925f3",
                        title: "Modal Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "6593091a2784df2d7ed92616",
                        title: "Tencel Sarees",
                        status: true,
                        path: "",
                    },
                ],
            },
        ],
    },

    {
        _id: "657070933d9601c4f9cb5ebe",
        title: "Occassion",
        status: true,
        hasSubmenu: "SINGLE",
        subMenu: [
            {
                _id: "65737b5d7c5a3cb5bae715e5",
                title: "Wedding Sarees",
                status: true,
                path: "",
                // slug: "wedding",
            },
            {
                _id: "65737b657c5a3cb5bae715ef",
                title: "Festival Sarees",
                status: true,
                path: "",
                // slug: "festival",
            },
            {
                _id: "65737b958c8011c9be0b17b6",
                title: "Partywear Sarees",
                status: true,
                path: "",
                // slug: "party-wear",
            },
            {
                _id: "6574a0f9f4d661716ad959e6",
                title: "Bridal Sarees",
                status: true,
                path: "",
                // slug: "bridal",
            },
        ],
    },

    {
        _id: "657079723d9601c4f9cb5ec4",
        title: "Collection",
        status: true,
        hasSubmenu: "GROUPED",
        subMenu: [
            {
                _id: "classicSilkSarees",
                title: "Classic Silk",
                subMenu: [
                    {
                        _id: "659300dc6933dc3de5e5c7a3",
                        title: "Banarasi Sarees",
                        status: true,
                        path: "",
                        // "slug": "banarasi-sarees"
                    },
                    {
                        _id: "659303d32784df2d7ed92516",
                        title: "Chanderi Sarees",
                        status: true,
                        path: "",
                        // "slug": "chanderi-sarees"
                    },
                    {
                        _id: "659307752784df2d7ed92562",
                        title: "Kanjivaram Sarees",
                        status: true,
                        path: "",
                        // "slug": "kanjivaram-sarees"
                    },
                    {
                        _id: "659307bb2784df2d7ed9257e",
                        title: "Uppada Sarees",
                        status: true,
                        path: "",
                        // "slug": "uppada-sarees"
                    },
                    {
                        _id: "6593081a2784df2d7ed925af",
                        title: "Paithani Sarees",
                        status: true,
                        path: "",
                        // "slug": "paithani-sarees"
                    },
                    {
                        _id: "6593081f2784df2d7ed925b6",
                        title: "Patola Sarees",
                        status: true,
                        path: "",
                        // "slug": "patola-sarees"
                    },
                ],
            },
            {
                _id: "EthnicRegionalSarees",
                title: "Ethnic Regional",
                subMenu: [
                    {
                        _id: "659307362784df2d7ed92546",
                        title: "Bengali Sarees",
                        status: true,
                        path: "",
                        // slug: "bengali-sarees",
                    },
                    {
                        _id: "6593074f2784df2d7ed9255b",
                        title: "Odisha Sarees",
                        status: true,
                        path: "",
                        // slug: "odisha-sarees",
                    },
                    {
                        _id: "659307462784df2d7ed92554",
                        title: "Bhagalpuri Sarees",
                        status: true,
                        path: "",
                        // slug: "bhagalpuri-sarees",
                    },
                    {
                        _id: "659303f22784df2d7ed92532",
                        title: "Rajasthani Sarees",
                        status: true,
                        path: "",
                        // slug: "rajasthani-sarees",
                    },
                    {
                        _id: "6593073a2784df2d7ed9254d",
                        title: "Jamdani Sarees",
                        status: true,
                        path: "",
                        // slug: "jamdani-sarees",
                    },
                    {
                        _id: "659307892784df2d7ed92570",
                        title: "Pochampalli Sarees",
                        status: true,
                        path: "",
                        // slug: "pochampalli-sarees",
                    },
                ],
            },
            {
                _id: "ArtisanalCraftedSarees",
                title: "Artisanal Crafted",
                subMenu: [
                    {
                        _id: "659304072784df2d7ed9253d",
                        title: "Chikankari Sarees",
                        status: true,
                        path: "",
                        // slug: "chikankari-sarees",
                    },
                    {
                        _id: "65930e8c2784df2d7ed92663",
                        title: "Hand Embroidery Sarees",
                        status: true,
                        path: "",
                        // slug: "hand-embroidery-sarees",
                    },
                    {
                        _id: "65930e722784df2d7ed92639",
                        title: "Brocade Sarees",
                        status: true,
                        path: "",
                        // slug: "brocade-sarees",
                    },
                    {
                        _id: "65930e772784df2d7ed92640",
                        title: "Bandhani Sarees",
                        status: true,
                        path: "",
                        // slug: "bandhani-sarees",
                    },
                    {
                        _id: "65930e7f2784df2d7ed9264e",
                        title: "Ikat Sarees",
                        status: true,
                        path: "",
                        // slug: "ikat-sarees",
                    },
                    {
                        _id: "65930e832784df2d7ed92655",
                        title: "Leheriya Sarees",
                        status: true,
                        path: "",
                        // slug: "leheriya-sarees",
                    },
                    {
                        _id: "65930e922784df2d7ed9266a",
                        title: "Shibori Sarees",
                        status: true,
                        path: "",
                        // slug: "shibori-sarees",
                    },
                    {
                        _id: "65930eb82784df2d7ed92694",
                        title: "Block Printed sarees",
                        status: true,
                        path: "",
                        // slug: "block-printed-sarees",
                    },
                ],
            },
            {
                _id: "ContemporaryDesignerSarees",
                title: "Contemporary Designer",
                subMenu: [
                    {
                        _id: "659307c72784df2d7ed9258b",
                        title: "Soft Silk Sarees",
                        status: true,
                        path: "",
                        // "slug": "soft-silk-sarees"
                    },
                    {
                        _id: "659307812784df2d7ed92569",
                        title: "Kalamkari Sarees",
                        status: true,
                        path: "",
                        // "slug": "kalamkari-sarees"
                    },

                    {
                        _id: "65930ee62784df2d7ed926a9",
                        title: "Tie & Dye Sarees",
                        status: true,
                        path: "",
                        // "slug": "tie-and-dye-sarees"
                    },
                    {
                        _id: "65930e7b2784df2d7ed92647",
                        title: "Gotapatti Sarees",
                        status: true,
                        path: "",
                        // "slug": "gotapatti-sarees"
                    },
                    {
                        _id: "65930e9b2784df2d7ed92678",
                        title: "Tanchoi Sarees",
                        status: true,
                        path: "",
                        // "slug": "tanchoi-sarees"
                    },
                    {
                        _id: "65930ebf2784df2d7ed9269b",
                        title: "Embroidery Sarees",
                        status: true,
                        path: "",
                        // "slug": "embroidery-sarees"
                    },
                ],
            },
        ],
    },
    {
        _id: "6593112d441a1a934e178a87",
        title: "Origin",
        status: true,
        hasSubmenu: "GROUPED",
        subMenu: [
            {
                _id: "NorthIndia",
                title: "North India",
                subMenu: [
                    {
                        _id: "659320eee600b8b93d027f5c",
                        title: "Banaras Sarees",
                        slug: "banaras",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f65",
                        title: "Lucknow Sarees",
                        slug: "lucknow",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f6f",
                        title: "Rajasthan Sarees",
                        slug: "rajasthan",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f70",
                        title: "Rajkot Sarees",
                        slug: "rajkot",
                        status: true,
                        path: "",
                    },
                ],
            },
            {
                _id: "SouthIndia",
                title: "South India",
                subMenu: [
                    {
                        _id: "659320eee600b8b93d027f58",
                        title: "Andhra and Telangana Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f64",
                        title: "Kanjivaram Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f66",
                        title: "Machilipatnam Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f69",
                        title: "Mangalgiri Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f6b",
                        title: "Narayanpet Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f6e",
                        title: "Pochampalli Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f72",
                        title: "Srikalahasti Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f74",
                        title: "Uppada Sarees",
                        status: true,
                        path: "",
                    },
                ],
            },
            {
                _id: "EastIndia",
                title: "East India",
                subMenu: [
                    {
                        _id: "659320eee600b8b93d027f59",
                        title: "Assam Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f5d",
                        title: "Bengal Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f5e",
                        title: "Bhagalpur Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f6a",
                        title: "Murshidabad Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f6c",
                        title: "Odisha Sarees",
                        status: true,
                        path: "",
                    },
                ],
            },
            {
                _id: "WestAndCentralIndia",
                title: "West & Central India",
                subMenu: [
                    {
                        _id: "659320eee600b8b93d027f5a",
                        title: "Bagh Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f5b",
                        title: "Bagru Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f5f",
                        title: "Chanderi Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f62",
                        title: "Gujarat Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f67",
                        title: "Maharashtra (including Maheshwar) Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f60",
                        title: "Chattisgarh Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f67",
                        title: "Madhya Pradesh (excluding Maheshwar) Sarees",
                        status: true,
                        path: "",
                    },
                    {
                        _id: "659320eee600b8b93d027f73",
                        title: "Ujjain Sarees",
                        status: true,
                        path: "",
                    },
                ],
            },
        ],
    },
];

export default NAV_LINKS;
