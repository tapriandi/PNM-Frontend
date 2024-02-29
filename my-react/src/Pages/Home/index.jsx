import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Slider } from "../../Components/Atoms";
import { ProductSection } from "../../Components/Molecules";

export default function Home() {
  let navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const clickMoreTerlaris = () => {
    navigate("/products/terlaris");
  };

  const clickMoreFavorit = () => {
    navigate("/products/favorit");
  };

  return (
    <div className="px-[10%] pb-20 w-full min-h-screen">
      <div className="pt-32"></div>
      <Slider />


      <ProductSection
        titleSection="Produk Terlaris"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreTerlaris()}
      />
      <ProductSection
        titleSection="Produk Favorit"
        titleMore="Lihat Semua >"
        data={products}
        clickMore={() => clickMoreFavorit()}
      />
    </div>
  );
}
