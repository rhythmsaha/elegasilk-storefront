const API_URLs = {
    // Auth
    register: "/user/register",
    verifyaccount: "/user/verifyaccount",
    resendverification: "/user/resendverificationlink",
    login: "/user/login",
    refreshSession: "user/refresh-session",

    // products
    products: {
        filters: "/products/filters",
        all: "/products",
        paths: "/products/paths",
        getProduct: (slug: string) => `/products/${slug}`,
    },
};

export default API_URLs;
