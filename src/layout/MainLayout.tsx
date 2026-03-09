import Footer from "../components/main/Footer";
import Header1 from "../components/main/Header1";
import Qsomos from "../components/section/Qsomos";
import Formacion from "../components/section/Formacion";
import Servicios from "../components/section/Servicios";

export const MainLayout = () => {
    return(
        <div className="min-h-screen w-full bg-slate-900 text-white">
            <Header1 />
            <main>
                <Qsomos />
                <Formacion />
                <Servicios />
            </main>
            <Footer />
        </div>
    )
}