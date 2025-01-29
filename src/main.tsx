import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import ProductDetailPage from "./pages/ProductDetails.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/products",
    Component: Products,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
