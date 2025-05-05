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
import { PostHogProvider } from "posthog-js/react";
import { Company } from "./pages/Company.tsx";
import Resources from "./pages/Resources.tsx";

const options = {
  api_host: import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST,
};

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
    path: "/company",
    Component: Company,
  },
  {
    path: "/resources",
    Component: Resources,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {/* <App /> */}
        </QueryClientProvider>
      </Provider>
    </PostHogProvider>
  </React.StrictMode>
);
