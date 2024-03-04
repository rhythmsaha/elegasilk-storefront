import React from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/layouts/MainLayout";

const HomePage: NextPageWithLayout = () => {
    return <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem recusandae labore in ut ad possimus culpa eligendi perferendis pariatur voluptatum harum, rerum tempora quos totam voluptatem, atque animi obcaecati vitae?</div>;
};

HomePage.getLayout = (page) => {
    return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
