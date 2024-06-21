import { Outlet, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HeaderComponent from "./components/HeaderComponent"
import HomePage from "./pages/HomePage"
import TentangKami from "./pages/TentangKami"
import FooterComponent from "./components/FooterComponent"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import NotificationForgotPasswordPage from "./pages/NotificationForgotPasswordPage"
import EditProfilePage from "./pages/EditProfilePage"
import GantiKataSandiPage from "./pages/GantiKataSandiPage"
import EdukasiPage from "./pages/education/EdukasiPage"
import KlasifikasiSampahAnorganikPage from "./pages/education/KlasifikasiSampahAnorganikPage"
import KlasifikasiSampahOrganikPage from "./pages/education/KlasifikasiSampahOrganikPage"
import DaurUlangPage from "./pages/education/DaurUlangPage"
import KontakKamiPage from "./pages/KontakKamiPage"
import ForumKomunitasPage from "./pages/komunitas/ForumKomunitasPage"
import KomunitasOrganikPage from "./pages/komunitas/KomunitasOrganikPage"
import KomunitasKertasPage from "./pages/komunitas/KomunitasKertasPage"
import KomunitasTekstilPage from "./pages/komunitas/KomunitasTekstilPage"
import KomunitasKacaPage from "./pages/komunitas/KomunitasKacaPage"
import AdminPage from "./pages/admin/AdminPage"
import AdminHeaderComponent from "./components/AdminHeaderComponent"
import AdminSidebarComponent from "./components/AdminSidebarComponent"
import UserManagementPage from "./pages/admin/UserManagementPage"
import KomunitasManagementPage from "./pages/admin/KomunitasManagementPage"
import ProtectedRoute from "./ProtectedRoute"
import JenisSampahPage from "./pages/admin/JenisSampahPage"
import ContentDaurUlangPage from "./pages/admin/ContentDaurUlangPage"


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route exact path="/notificationForgotPassword" element={<NotificationForgotPasswordPage />} />
        <Route element={<ProtectedRoute role={"Admin"} />}>
          <Route element={
            <>
              <AdminHeaderComponent />
              <AdminSidebarComponent />
              <Outlet />
            </>
          }>
            <Route path="/dashboard" element={<AdminPage />} />
            <Route path="/dashboard/content" element={<AdminPage />} />
            <Route path="/dashboard/jenisSampah" element={<JenisSampahPage />} />
            <Route path="/dashboard/daurUlang" element={<ContentDaurUlangPage />} />
            <Route path="/dashboard/user" element={<UserManagementPage />} />
            <Route path="/dashboard/komunitas" element={<KomunitasManagementPage />} />

          </Route>
        </Route>

        <Route element={
          <>
            <HeaderComponent />
            <ProtectedRoute role={"User"} />
            <FooterComponent />
          </>
        }>
          <Route path="/editProfil" element={<EditProfilePage />} />
          <Route path="/gantiPassword" element={<GantiKataSandiPage />} />
          <Route path="/edukasi" element={<EdukasiPage />} />
          <Route path="/edukasi/klasifikasiAnorganik" element={<KlasifikasiSampahAnorganikPage />} />
          <Route path="/edukasi/klasifikasiOrganik" element={<KlasifikasiSampahOrganikPage />} />
          <Route path="/edukasi/daurUlang" element={<DaurUlangPage />} />
          <Route path="/komunitas" element={<ForumKomunitasPage />} />
          <Route path="/komunitas/plastik" element={<ForumKomunitasPage />} />
          <Route path="/komunitas/organik" element={<KomunitasOrganikPage />} />
          <Route path="/komunitas/kertas" element={<KomunitasKertasPage />} />
          <Route path="/komunitas/tekstil" element={<KomunitasTekstilPage />} />
          <Route path="/komunitas/kaca" element={<KomunitasKacaPage />} />
        </Route>
        <Route element={<>
          <HeaderComponent />
          <Outlet />
          <FooterComponent />
        </>} >
          <Route path="/" element={<HomePage />} />

          <Route path="/kontak" element={<KontakKamiPage />} />
          <Route path="/tentang" element={<TentangKami />} />
        </Route>

      </Routes>

    </>
  )
}

export default App


