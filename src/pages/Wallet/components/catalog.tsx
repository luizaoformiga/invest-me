import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import api from "../../../services/api";
import { IProduct } from "../../../store/cart/types";
import { CatalogItem } from "./Catalog-item";
import { Header } from "./header";

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/").then((response: AxiosResponse<any>) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      <main>
        {catalog.map((product) => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};
