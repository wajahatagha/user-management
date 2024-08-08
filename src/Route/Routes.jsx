// dashbaord
import Default from "../Components/Dashboard/Default";
import GlobalDash from "../Components/Pages/GlobalDash";
import SuperAdmin from "../Components/Pages/SuperAdmin";


export const routes = [
  { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/Super/:layout`, Component: <SuperAdmin /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/global/:layout`, Component: <GlobalDash /> },


];
