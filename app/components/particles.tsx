"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // versão slim, leve
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="relative w-full h-full">
      {init && (
        <Particles
          id="tsparticles"
          options={require("@/lib/particles.json")} // pode importar JSON direto
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
