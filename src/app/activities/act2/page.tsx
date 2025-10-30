"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function ActividadPMBOK() {
  const router = useRouter();
  const activityNumber = 2;

  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [riskResponse, setRiskResponse] = useState<string>("");

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex h-[85vh] w-full max-w-xl md:max-w-5xl flex-col items-start py-10 px-10 bg-white dark:bg-black gap-8 rounded-2xl shadow-lg">
        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-5 dark:bg-gray-700">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Contenido dinámico */}
        {step === 1 ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Bienvenido a la historia: <span>{activityNumber}</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300">
              Eres el nuevo <strong>Director de Proyecto</strong> en la empresa{" "}
              <strong>ProManage</strong>. Estás a punto de liderar un proyecto
              importante, pero primero necesito saber tu nombre para asignarte oficialmente.
            </p>

            <input
              type="text"
              name="name"
              id="name"
              placeholder="Tu nombre..."
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button
              type="button"
              style="main"
              content="Comenzar historia"
              onClick={() =>
                name ? setStep(step + 1) : alert("Por favor, ingresa tu nombre")
              }
            />
          </div>
        ) : step === 2 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              ¡Excelente, {name}!
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Según el <strong>PMBOK</strong>, un proyecto se gestiona a través de{" "}
              <strong>áreas de conocimiento</strong> que permiten planificar,
              ejecutar y controlar cada fase del trabajo.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Elige una de las siguientes áreas en la que te gustaría especializarte:
            </p>

            <select
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Selecciona un área</option>
              <option value="Gestión del Alcance">Gestión del Alcance</option>
              <option value="Gestión del Tiempo">Gestión del Tiempo</option>
              <option value="Gestión de Riesgos">Gestión de Riesgos</option>
              <option value="Gestión de la Calidad">Gestión de la Calidad</option>
            </select>

            {area && (
              <p className="text-gray-600 dark:text-gray-300 italic">
                Has elegido <strong>{area}</strong>. Esta área será clave para el
                éxito de tu proyecto.
              </p>
            )}

            <Button
              type="button"
              style="main"
              content="Continuar"
              onClick={() =>
                area
                  ? setStep(step + 1)
                  : alert("Selecciona un área antes de continuar")
              }
            />
          </div>
        ) : step === 3 ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Definamos las prioridades del proyecto
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              En la gestión de proyectos, uno de los mayores retos es equilibrar el{" "}
              <strong>alcance, tiempo y costo</strong>. Si tuvieras que priorizar uno,
              ¿cuál elegirías para garantizar el éxito del proyecto?
            </p>

            <select
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Selecciona una prioridad</option>
              <option value="Alcance">Alcance</option>
              <option value="Tiempo">Tiempo</option>
              <option value="Costo">Costo</option>
            </select>

            {priority && (
              <p className="text-gray-600 dark:text-gray-300 italic">
                Buena elección. Priorizar <strong>{priority}</strong> puede marcar la
                diferencia en los resultados finales del proyecto.
              </p>
            )}

            <Button
              type="button"
              style="main"
              content="Continuar"
              onClick={() =>
                priority
                  ? setStep(step + 1)
                  : alert("Selecciona una prioridad antes de continuar")
              }
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Gestión de Riesgos
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Durante la ejecución del proyecto, identificas que el proveedor principal
              podría retrasar una entrega crítica. Según PMBOK, debes definir una{" "}
              <strong>respuesta al riesgo</strong>.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              ¿Qué estrategia aplicarías?
            </p>

            <select
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={riskResponse}
              onChange={(e) => setRiskResponse(e.target.value)}
            >
              <option value="">Selecciona una respuesta</option>
              <option value="Evitar el riesgo">Evitar el riesgo</option>
              <option value="Transferir el riesgo">Transferir el riesgo</option>
              <option value="Mitigar el riesgo">Mitigar el riesgo</option>
              <option value="Aceptar el riesgo">Aceptar el riesgo</option>
            </select>

            {riskResponse && (
              <p className="text-gray-600 dark:text-gray-300 italic">
                Has elegido <strong>{riskResponse}</strong>. Una decisión estratégica
                que refleja tu entendimiento del enfoque PMBOK.
              </p>
            )}

            <Button
              type="button"
              style="main"
              content="Finalizar historia"
              onClick={() =>
                riskResponse
                  ? router.push("/activities")
                  : alert("Selecciona una respuesta antes de finalizar")
              }
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
