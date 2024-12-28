import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
// import "./assets/styles/font-awesome.css";
// import "./assets/styles/bootstrap.css";
// import "./assets/styles/styles.css";
// import "./assets/styles/animatestyle.css";
// import "./assets/styles/adminstyle.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./Screens/HomeScreen";
import LogInScreen from "./Screens/LogInScreen";
import SignUp from "./Screens/SignUp";
import Methodology from "./Screens/Methodology";
import AboutMeScreen from "./Screens/AboutMeScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Assesments from "./Screens/Assesments";
import BlogSingle from "./components/BlogSingle";

// Admin Dashboard
import Dashboard from "./Screens/Admin/Dashboard";
import ProfileScreen from "./Screens/Admin/ProfileScreen";
import ArticleEditor from "./Screens/Admin/Article/ArticleEditor";

// Protect Route
import ViewArticle from "./components/ViewArticle";
import AddCategory from "./Screens/Admin/AddCategory";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/aboutme" element={<AboutMeScreen />} />
      <Route path="/login" element={<LogInScreen />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/assesments" element={<Assesments />} />
      <Route path="/metodology" element={<Methodology />} />
      <Route path="/blogsingle" element={<BlogSingle />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/Låtdiginspireras/:id" element={<ViewArticle />} />
        {/* <Route path='/search' element={ <SearchScreen /> } /> */}
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/adminprofile" element={<ProfileScreen />} />
        <Route path="/adminarticleeditor" element={<ArticleEditor />} />
        <Route path="/admincategory" element={<AddCategory />} />
        {/* <Route path='/admin/contact' element */}
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PrimeReactProvider> */}
        <RouterProvider router={router} />
      {/* </PrimeReactProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
