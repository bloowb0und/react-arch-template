import {Outlet} from "react-router-dom";

import LoginRequired from "@/components/LoginRequired.jsx";

const MainLayout = () => {
	return (
		<LoginRequired>
            <Outlet />
		</LoginRequired>
	);
};

export default MainLayout;