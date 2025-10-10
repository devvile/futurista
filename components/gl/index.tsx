import { Perf } from "r3f-perf";
import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls, folder } from "leva";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";
import { GLVariant, glPresets } from "@/config/glPresets";
import { useMemo, useEffect } from "react";

export const GL = ({ hovering, variant = 'home' }: { hovering: boolean; variant?: GLVariant }) => {
  const preset = useMemo(() => {
    console.log('🎨 GL Variant:', variant, 'Preset:', glPresets[variant]);
    return glPresets[variant];
  }, [variant]);

  useEffect(() => {
    console.log('✨ GL mounted with variant:', variant);
  }, [variant]);

  const [values, set] = useControls("Particle System", () => ({
    speed: { value: preset.speed, min: 0, max: 2, step: 0.01 },
    noiseScale: { value: preset.noiseScale, min: 0.1, max: 5, step: 0.1 },
    noiseIntensity: { value: preset.noiseIntensity, min: 0, max: 2, step: 0.01 },
    timeScale: { value: preset.timeScale, min: 0, max: 2, step: 0.01 },
    focus: { value: preset.focus, min: 0.1, max: 20, step: 0.1 },
    aperture: { value: preset.aperture, min: 0, max: 2, step: 0.01 },
    pointSize: { value: preset.pointSize, min: 0.1, max: 20, step: 0.1 },
    opacity: { value: preset.opacity, min: 0, max: 1, step: 0.01 },
    planeScale: { value: preset.planeScale, min: 0.1, max: 20, step: 0.1 },
    size: {
      value: 512,
      options: [256, 512, 1024],
    },
    showDebugPlane: { value: false },
    vignetteDarkness: { value: preset.vignetteDarkness, min: 0, max: 2, step: 0.1 },
    vignetteOffset: { value: preset.vignetteOffset, min: 0, max: 2, step: 0.1 },
    useManualTime: { value: false },
    manualTime: { value: 0, min: 0, max: 50, step: 0.01 },
  }));

  // Update Leva values when preset changes
  useEffect(() => {
    console.log('🔄 Updating Leva values for variant:', variant);
    set({
      speed: preset.speed,
      noiseScale: preset.noiseScale,
      noiseIntensity: preset.noiseIntensity,
      timeScale: preset.timeScale,
      focus: preset.focus,
      aperture: preset.aperture,
      pointSize: preset.pointSize,
      opacity: preset.opacity,
      planeScale: preset.planeScale,
      vignetteDarkness: preset.vignetteDarkness,
      vignetteOffset: preset.vignetteOffset,
    });
  }, [variant, preset, set]);

  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={["#000"]} />
        <Particles
          speed={values.speed}
          aperture={values.aperture}
          focus={values.focus}
          size={values.size}
          noiseScale={values.noiseScale}
          noiseIntensity={values.noiseIntensity}
          timeScale={values.timeScale}
          pointSize={values.pointSize}
          opacity={values.opacity}
          planeScale={values.planeScale}
          useManualTime={values.useManualTime}
          manualTime={values.manualTime}
          introspect={hovering}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={values.vignetteDarkness}
            uniforms-offset-value={values.vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  );
};