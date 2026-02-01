import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home" className="hero-section min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Testimonials />
      <section id="about">
        <About />
      </section>
      <Footer />
    </main>
  );
}
