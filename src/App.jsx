import { Outlet, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HeaderComponent from "./components/HeaderComponent"
import HomePage from "./pages/HomePage"
import FooterComponent from "./components/FooterComponent"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import NotificationForgotPasswordPage from "./pages/NotificationForgotPasswordPage"
import EditProfilePage from "./pages/EditProfilePage"
import GantiKataSandiPage from "./pages/GantiKataSandiPage"
import EdukasiPage from "./pages/EdukasiPage"
import KlasifikasiSampahAnorganikPage from "./pages/KlasifikasiSampahAnorganikPage"
import KlasifikasiSampahOrganikPage from "./pages/KlasifikasiSampahOrganikPage"
import DaurUlangPage from "./pages/DaurUlangPage"
import KontakKamiPage from "./pages/KontakKamiPage"
import ForumKomunitasPage from "./pages/ForumKomunitasPage"
import KomunitasOrganikPage from "./pages/KomunitasOrganikPage"
import KomunitasKertasPage from "./pages/KomunitasKertasPage"
import KomunitasTekstilPage from "./pages/KomunitasTekstilPage"
import KomunitasKacaPage from "./pages/KomunitasKacaPage"


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
          <Route path="/editProfil" element={<EditProfilePage />} />
          <Route path="/gantiPassword" element={<GantiKataSandiPage />} />
          <Route path="/edukasi" element={<EdukasiPage />} />
          <Route path="/edukasi/klasifikasiAnorganik" element={<KlasifikasiSampahAnorganikPage />} />
          <Route path="/edukasi/klasifikasiOrganik" element={<KlasifikasiSampahOrganikPage />} />
          <Route path="/edukasi/daurUlang" element={<DaurUlangPage />} />
          <Route path="/kontak" element={<KontakKamiPage />} />
          <Route path="/komunitas" element={<ForumKomunitasPage />} />
          <Route path="/komunitas/plastik" element={<ForumKomunitasPage />} />
          <Route path="/komunitas/organik" element={<KomunitasOrganikPage />} />
          <Route path="/komunitas/kertas" element={<KomunitasKertasPage />} />
          <Route path="/komunitas/tekstil" element={<KomunitasTekstilPage />} />
          <Route path="/komunitas/kaca" element={<KomunitasKacaPage />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
