import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("", "components/MarketingLayout.tsx", [
    index("routes/home.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
  route("", "account/auth/AuthLayout.tsx", [
    route("signin", "account/auth/pages/SignInPage.tsx"),
    route("signup", "account/auth/pages/SignUpPage.tsx"),
  ]),
  route("", "account/auth/ProtectedRoute.tsx", [route("account", "account/pages/AccountPage.tsx")]),
] satisfies RouteConfig;
