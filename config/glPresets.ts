export type GLVariant = 'home' | 'about' | 'manifest';

export interface GLPreset {
  speed: number;
  noiseScale: number;
  noiseIntensity: number;
  timeScale: number;
  focus: number;
  aperture: number;
  pointSize: number;
  opacity: number;
  planeScale: number;
  vignetteDarkness: number;
  vignetteOffset: number;
}

export const glPresets: Record<GLVariant, GLPreset> = {
  // ✅ Original home settings (unchanged from your first request)
  home: {
    speed: 1.0,
    noiseScale: 0.6,
    noiseIntensity: 0.52,
    timeScale: 1,
    focus: 3.8,
    aperture: 1.79,
    pointSize: 10.0,
    opacity: 0.8,
    planeScale: 10.0,
    vignetteDarkness: 1.5,
    vignetteOffset: 0.4,
  },

  about: {
    speed: 0.51,
    noiseScale: 0.8,
    noiseIntensity: 0.74,
    timeScale: 0.70,
    focus: 6.6,
    aperture: 1.36,
    pointSize: 10.0,
    opacity: 0.80,
    planeScale: 10.0,
    vignetteDarkness: 1.5,
    vignetteOffset: 0.4,
  },
  
  // 🚀 Manifest page - customize however you want
  manifest: {
    speed: 0.7,
    noiseScale: 0.8,
    noiseIntensity: 0.6,
    timeScale: 0.8,
    focus: 5.0,
    aperture: 1.5,
    pointSize: 12.0,
    opacity: 0.9,
    planeScale: 12.0,
    vignetteDarkness: 1.7,
    vignetteOffset: 0.3,
  },
};