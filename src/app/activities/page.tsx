"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Cards";

export default function Actividades() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <Navbar />

      <main className="flex h-[150vh] w-full max-w-xl md:max-w-5xl flex-col items-start py-10 px-10 gap-5">
        <h1 className="text-4xl">
          Modo historia
        </h1>
      
        <p className="text-lg">
          Prueba nuestra actividad interactiva para mejorar tu entendimiento acerca de las mas recientes y populares metodologias de administración de proyectos de software.
        </p>

        <div className="flex flex-col gap-5">
          <Card
            header="Historia 1"
            content="En esta historia simulas ser el nuevo practicante en la empresa. El encargado del area de product managment se presenta contigo y te da una introducción a acerca de como trabaja la empresa con SCRUM."
            image="/scrum.png"
            url="/activities/act1"
          />

          <Card
            header="Historia 2"
            content="Ponte en los zapatos del director de una empresa y aprende acerca de la metodologia de administración de proyectos PMBOK en esta corta e interactiva historia."
            image="/pmbok.png"
            url="/activities/act2"
          />

          <Card
            header="Historia 3"
            content="En esta historia trabajaras en la planeación de un proyecto en su totalidad con la tecnica One page planning. Pon manos a la obra y empieza este proyecto para ver los requerimientos necesarios para la planeación."
            image="/onepage.png"
            url="/activities/act3"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
