import AuthForm from "@/components/Auth/AuthForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHeroBanner from "@/components/MainHeroBanner/MainHeroBanner";
import ProductListing from "@/components/ProductListing/ProductListing";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <MainHeroBanner />
      <main className="flex flex-1 w-full flex-col items-center gap-16 py-12 px-4">
        <section className="w-full max-w-5xl">
          <Slider />
        </section>
        <section className="w-full max-w-6xl">
          <ProductListing />
        </section>
        <section className="w-full flex justify-center">
          <AuthForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
