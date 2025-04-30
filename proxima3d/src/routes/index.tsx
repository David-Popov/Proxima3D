import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import HomePage from "../pages/HomePage";
import SignIn from "../pages/auth/Sign-in";
import Layout from "../layouts/layout";
import SignUp from "../pages/auth/Sign-up";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Route>,
  ])
);
