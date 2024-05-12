import { Outlet, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HeaderComponent from "./components/HeaderComponent"
import HomePage from "./pages/HomePage"
import FooterComponent from "./components/FooterComponent"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import NotificationForgotPasswordPage from "./pages/NotificationForgotPasswordPage"


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route exact path="/notificationForgotPassword" element={<NotificationForgotPasswordPage />} />
        <Route element={<>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </>} >
          <Route path="/" element={<HomePage />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
