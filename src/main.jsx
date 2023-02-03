import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";

import App from './App'
import Store from "@/contexts/store/index.js";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const store = new Store();
export const AuthContext = createContext({ store });

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthContext.Provider value={{store}}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthContext.Provider>
		</QueryClientProvider>
	</React.StrictMode>
);