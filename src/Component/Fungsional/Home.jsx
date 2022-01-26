import React from "react";
import Produk from "../Class/Produk";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Produk nama="Macbook Pro 2020" stock="10" harga="33000000" />
      <Produk nama="Macbook Pro 2021" stock="15" harga="53000000" />
      <Produk nama="Macbook Pro 2022" stock="13" harga="33000000" />
      <Produk nama="Macbook Pro 2023" stock="100" harga="63000000" />
      <Produk nama="Macbook Pro 2024" stock="120" harga="33000000" />
      {/* <Blog
        tanggal="25 Januari 2021"
        judul="Internet of Things"
        summary="Penatibus sem pharetra arcu quisque tincidunt per ad sed eget sollicitudin nunc ridiculus tortor vel ante vivamus fames taciti lorem pellentesque neque sit mi cursus elit erat pretium nulla conubia"
      />
      <Blog
        tanggal="28 Januari 2021"
        judul="Web Development"
        summary="Letius hac ac elementum volutpat placerat class laoreet consectetuer curae tincidunt eu parturient libero tristique sollicitudin pulvinar mattis nisl lacus molestie sociosqu et dolor vehicula a integer congue natoque ultricies"
      />
      <Blog
        tanggal="15 Februari 2021"
        judul="Mobile Development"
        summary="Morbi nam pretium litora primis mollis odio ac tellus mattis vel fermentum phasellus suscipit ipsum risus consectetuer nec adipiscing porttitor turpis molestie per platea sem erat senectus dapibus ut malesuada"
      />
      <Blog
        tanggal="30 Mei 2021"
        judul="DevOps"
        summary="Ipsum diam dis integer parturient dictumst vivamus pede volutpat orci pretium dolor tristique nunc euismod mattis sapien massa eu non cras natoque scelerisque maximus morbi vitae sit nisi montes suspendisse"
      /> */}
    </div>
  );
};

export default Home;
