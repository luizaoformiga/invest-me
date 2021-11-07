import React, { useEffect, useState } from "react";

import { api } from "../../../services/axios";
import { IProduct } from "../../../store/modules/cart/types";
import { CatalogItem } from "./Catalog-Item";

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};
