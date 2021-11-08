import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import api from "../../../services/api";
import { IProduct } from "../../../store/cart/types";
import { CatalogItem } from "./Catalog-item";

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/").then((response: AxiosResponse<any>) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <header>
        <div>
          <a href="/pay">
            <AiOutlineArrowLeft style={{ fontSize: "40px", color: "#fff" }} />
          </a>
        </div>
        <div>
          <h1>CATALOGO</h1>
        </div>
        <div></div>
      </header>

      <main>
        {catalog.map((product) => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};
