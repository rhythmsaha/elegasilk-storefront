const API_URLs = {
    // Auth
    register: "/user/register",
    verifyaccount: "/user/verifyaccount",
    resendverification: "/user/resendverificationlink",
    login: "/user/login",
    refreshSession: "user/refresh-session",

    // User
    user: {
        updateEmail: (id: string) => `/user/email/${id}`,
        verifyEmail: (id: string) => `/user/email/verify/${id}`,
        updateProfile: (id: string) => `/user/${id}`,
        getProfile: (id: string) => `/user/${id}`,
    },

    address: {
        create: "/address/create",
        update: (id: string) => `/address/${id}`,
        delete: (id: string) => `/address/${id}`,
        get: (id: string) => `/address/${id}`,
        getAll: "/address",
        setDefault: (id: string) => `/address/default/${id}`,
        getDefault: "/address/default",
    },

    // products
    products: {
        filters: "/products/filters",
        all: "/products",
        paths: "/products/paths",
        getProduct: (slug: string) => `/products/${slug}`,
    },
};

export default API_URLs;
