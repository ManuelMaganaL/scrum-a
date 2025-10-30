"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export default function Actividad3() {
  const router = useRouter();
  const activityNumber = 3;

  // Estado de la historia / One Page Planning
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [vision, setVision] = useState<string>("");
  const [horizon, setHorizon] = useState<string>("");
  const [metricName, setMetricName] = useState<string>("");
  const [metricTarget, setMetricTarget] = useState<number | "">("");
  const [risk, setRisk] = useState<string>("");
  const [mitigation, setMitigation] = useState<string>("");
  const [owner, setOwner] = useState<string>("");

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Resumen simple (puedes adaptarlo para persistir o generar PDF)
  const summary = {
    responsable: name,
    proyecto: projectName,
    vision,
    horizon,
    metric: `${metricName} → ${metricTarget}`,
    riesgo: `${risk} — Mitigación: ${mitigation}`,
    owner,
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main className="flex h-[85vh] w-full max-w-xl md:max-w-5xl flex-col items-start py-10 px-10 bg-white dark:bg-black gap-8 rounded-2xl shadow-lg">
        {/* Barra de progreso */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-5 dark:bg-gray-700">
          <div
            className="bg-red-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Contenido por pasos */}
        {step === 1 ? (
          <section className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Bienvenido a la historia: <span>{activityNumber}</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300">
              Para crear un plan de una página necesitamos algunos datos básicos. Empieza por
              presentarte y nombra el proyecto.
            </p>

            <input
              type="text"
              placeholder="Tu nombre (responsable del plan)"
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Nombre del proyecto"
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <div className="flex gap-2">
              <Button
                type="button"
                style="main"
                content="Continuar"
                onClick={() =>
                  name && projectName ? setStep(step + 1) : alert("Ingresa tu nombre y el nombre del proyecto")
                }
              />
            </div>
          </section>
        ) : step === 2 ? (
          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Visión y Horizonte
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Define en una frase la <strong>visión</strong> del proyecto y el <strong>horizonte</strong>
              (periodo objetivo) del plan.
            </p>

            <label className="text-sm text-gray-600 dark:text-gray-300">Visión (1 frase)</label>
            <input
              type="text"
              placeholder="Ej. Aumentar la satisfacción del cliente mediante una nueva app"
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={vision}
              onChange={(e) => setVision(e.target.value)}
            />

            <label className="text-sm text-gray-600 dark:text-gray-300">Horizonte</label>
            <select
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={horizon}
              onChange={(e) => setHorizon(e.target.value)}
            >
              <option value="">Selecciona un horizonte</option>
              <option value="30 días">30 días</option>
              <option value="90 días">90 días</option>
              <option value="6 meses">6 meses</option>
            </select>

            <div className="flex gap-2">
              <Button
                type="button"
                style="secondary"
                content="Atrás"
                onClick={() => setStep(step - 1)}
              />
              <Button
                type="button"
                style="main"
                content="Continuar"
                onClick={() =>
                  vision && horizon ? setStep(step + 1) : alert("Define la visión y el horizonte")
                }
              />
            </div>
          </section>
        ) : step === 3 ? (
          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Métrica clave y Objetivo
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Elige una <strong>métrica</strong> que refleje el éxito del proyecto y fija un objetivo
              numérico para el horizonte seleccionado.
            </p>

            <input
              type="text"
              placeholder="Nombre de la métrica (ej. Net Promoter Score, Conversiones)"
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={metricName}
              onChange={(e) => setMetricName(e.target.value)}
            />

            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-600 dark:text-gray-300">Objetivo numérico</label>
              <input
                type="number"
                placeholder="Ej. 20 (aumentar 20 puntos)"
                className="border rounded-lg px-3 py-2 w-36 dark:bg-gray-800 dark:text-white"
                value={metricTarget}
                onChange={(e) => setMetricTarget(e.target.value === "" ? "" : Number(e.target.value))}
              />
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Consejo: la métrica debe ser accionable y medible al final del horizonte.
            </p>

            <div className="flex gap-2">
              <Button
                type="button"
                style="secondary"
                content="Atrás"
                onClick={() => setStep(step - 1)}
              />
              <Button
                type="button"
                style="main"
                content="Continuar"
                onClick={() =>
                  metricName && metricTarget !== "" ? setStep(step + 1) : alert("Define la métrica y un objetivo numérico")
                }
              />
            </div>
          </section>
        ) : (
          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Riesgos, Mitigación y Dueño
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Identifica el riesgo más crítico para lograr la métrica y propone una mitigación.
              Finalmente asigna un dueño responsable del seguimiento.
            </p>

            <label className="text-sm text-gray-600 dark:text-gray-300">Riesgo principal</label>
            <input
              type="text"
              placeholder="Ej. Retraso del proveedor, baja adopción por usuarios..."
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={risk}
              onChange={(e) => setRisk(e.target.value)}
            />

            <label className="text-sm text-gray-600 dark:text-gray-300">Mitigación</label>
            <textarea
              placeholder="Acciones para reducir el impacto o la probabilidad"
              className="border rounded-lg px-3 py-2 w-full h-24 dark:bg-gray-800 dark:text-white"
              value={mitigation}
              onChange={(e) => setMitigation(e.target.value)}
            />

            <label className="text-sm text-gray-600 dark:text-gray-300">Dueño (responsable)</label>
            <input
              type="text"
              placeholder="Nombre del responsable (ej. María, Equipo X)"
              className="border rounded-lg px-3 py-2 w-full dark:bg-gray-800 dark:text-white"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />

            {/* Resumen final */}
            {risk && mitigation && owner && (
              <div className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Resumen rápido</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Proyecto:</strong> {summary.proyecto}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Visión:</strong> {summary.vision} ({summary.horizon})</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Métrica:</strong> {summary.metric}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Riesgo:</strong> {summary.riesgo}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Dueño:</strong> {summary.owner}</p>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                type="button"
                style="main"
                content="Finalizar plan"
                onClick={() => {
                  if (!risk || !mitigation || !owner) {
                    alert("Completa el riesgo, la mitigación y asigna un dueño antes de finalizar");
                    return;
                  }
                  // Aquí puedes persistir summary a localStorage o backend si lo deseas:
                  try {
                    localStorage.setItem("onePagePlan", JSON.stringify(summary));
                  } catch (e) {
                    // ignore
                  }
                  router.push("/activities");
                }}
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
