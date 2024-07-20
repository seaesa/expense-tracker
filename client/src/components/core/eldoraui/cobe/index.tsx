import { useTheme } from "@/providers/theme";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

let phi = 0;
function Cobe() {
  const { theme } = useTheme();
  const canvasRef = useRef<any>();
  useEffect(() => {
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    onResize()
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: (theme === 'light') ? [0, 0, 0] : [1, 1, 1],
      markers: [],
      onRender: (state) => {
        state.width = width * 2
        state.height = width * 2
        state.phi = phi
        phi += 0.005;
      }
    })
    setTimeout(() => canvasRef.current.style.opacity = '1')
    window.addEventListener('resize', onResize)
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize)
    }
  }, [theme])
  return <div style={{
    width: '100%',
    maxWidth: 600,
    aspectRatio: 1,
    margin: 'auto',
    position: 'relative',
  }}>
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout paint size',
        opacity: 0,
        transition: 'opacity 1s ease',
      }}
    />
  </div>
}
export default Cobe