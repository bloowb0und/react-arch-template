import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext, store } from "@src/contexts/authContext.js";
import App from "./App.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ store }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContext.Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
