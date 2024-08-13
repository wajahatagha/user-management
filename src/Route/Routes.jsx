// dashbaord
import Default from "../Components/Dashboard/Default";
import GlobalDash from "../Components/Pages/GlobalDash";
import LiveReports from "../Components/Pages/LiveReports";
import MonthlyReports from "../Components/Pages/MonthlyReports";
import SuperAdmin from "../Components/Pages/SuperAdmin";
import WeeklyReports from "../Components/Pages/WeeklyReports";


export const routes = [
  { path: `${process.env.PUBLIC_URL}/dashboard/default/:layout`, Component: <Default /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/Super/:layout`, Component: <SuperAdmin /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/Dashboard/:layout`, Component: <GlobalDash /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/LiveReports/:layout`, Component: <LiveReports /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/WeeklyReports/:layout`, Component: <WeeklyReports /> },
  { path: `${process.env.PUBLIC_URL}/dashboard/MonthlyReports/:layout`, Component: <MonthlyReports /> },





];
