import { AppType, Provider as GadgetProvider, useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { NavigationMenu } from "@shopify/app-bridge-react";
import { Page, Spinner, Text } from "@shopify/polaris";
import { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AboutPage from "./AboutPage";
import ShopPage from "./ShopPage";
import ProductListPage from "./pages/Product/List";
import AddProductPage from "./pages/Product/Add";
import ProductDetailPage from "./pages/Product/Detail";
import OrderListPage from "./pages/Order/List";
import AddDraftOrderPage from "./pages/Order/AddDraft";
import OrderDetailPage from "./pages/Order/Detail";
import InventoryPage from "./pages/Inventory";
import StoresPage from "./pages/Stores";
import AssignOrdersPage from "./pages/AssignOrders";
import ReportsPage from "./pages/Reports";
import SettingsPage from "./pages/Settings";
import StaffPage from "./pages/Staff";
import { api } from "./api";
import {
  SignedInOrRedirect,
  SignedOut,
  SignedOutOrRedirect,
  Provider,
} from "@gadgetinc/react";
import { Suspense } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
} from "react-router-dom";
import "./ExternalApp.css";
import Index from "./routes/index";
import SignedInPage from "./routes/signed-in";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import ResetPasswordPage from "./routes/reset-password";
import VerifyEmailPage from "./routes/verify-email";
import ChangePassword from "./routes/change-password";
import ForgotPassword from "./routes/forgot-password";

const Error404 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === new URL(process.env.GADGET_PUBLIC_SHOPIFY_APP_URL).pathname) return navigate("/", { replace: true });
  }, [location.pathname]);
  return <div>404 not found</div>;
};

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useMemo(() => ({ replace: (path) => navigate(path, { replace: true }) }), [navigate]);

  const appBridgeRouter = useMemo(
    () => ({
      location,
      history,
    }),
    [location, history]
  );

  return (
    <GadgetProvider type={AppType.Embedded} shopifyApiKey={window.gadgetConfig.apiKeys.shopify} api={api} router={appBridgeRouter}>
      <AuthenticatedApp />
    </GadgetProvider>
  );
};

function AuthenticatedApp() {
  // we use `isAuthenticated` to render pages once the OAuth flow is complete!
  const { isAuthenticated, loading } = useGadget();
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Spinner accessibilityLabel="Spinner example" size="large" />
      </div>
    );
  }
  return isAuthenticated ? <EmbeddedApp /> : <UnauthenticatedApp />;
}

function EmbeddedApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/new" element={<AddProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/orders" element={<OrderListPage />} />
        <Route path="/draft_orders/new" element={<AddDraftOrderPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/assign-orders" element={<AssignOrdersPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <NavigationMenu
        navigationLinks={[
          {
            label: "Shop Information",
            destination: "/",
          },
          {
            label: "About",
            destination: "/about",
          },
          {
            label: "Products",
            destination: "/products",
          },
          {
            label: "Orders",
            destination: "/orders",
          },
          {
            label: "Inventory",
            destination: "/inventory",
          },
          {
            label: "Stores",
            destination: "/stores",
          },
          {
            label: "Assign Orders",
            destination: "/assign-orders",
          },
          {
            label: "Reports",
            destination: "/reports",
          },
          {
            label: "Settings",
            destination: "/settings",
          },
          {
            label: "Staff",
            destination: "/staff",
          },
        ]}
      />
    </>
  );
}
const Layout = () => {
  const navigate = useNavigate();

  return (
    <Provider
      api={api}
      navigate={navigate}
      auth={window.gadgetConfig.authentication}
    >
      <Header />
      <div className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </Provider>
  );
};

const Header = () => {
  return (
    <div className="header">
      <a
        href="/"
        target="_self"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="logo">{process.env.GADGET_PUBLIC_APP_SLUG}</div>
      </a>
      <div className="header-content">
        <SignedOut>
          <Link to="/sign-in" style={{ color: "black" }}>
            Sign in
          </Link>
          <Link to="/sign-up" style={{ color: "black" }}>
            Sign up
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

function UnauthenticatedApp() {
  return (
   <Routes>
     <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="signed-in"
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="change-password"
          element={
            <SignedInOrRedirect>
              <ChangePassword />
            </SignedInOrRedirect>
          }
        />
        <Route
          path="forgot-password"
          element={
            <SignedOutOrRedirect>
              <ForgotPassword />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-in"
          element={
            <SignedOutOrRedirect>
              <SignInPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path="sign-up"
          element={
            <SignedOutOrRedirect>
              <SignUpPage />
            </SignedOutOrRedirect>
          }
        />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="verify-email" element={<VerifyEmailPage />} />
      </Route>
   
   </Routes>
    
  );
}

export default App;
