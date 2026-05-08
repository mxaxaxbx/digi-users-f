export async function getFingerprint(): Promise<Record<string, unknown>> {
  const fp: Record<string, unknown> = {};

  // basic info
  fp.userAgent = navigator.userAgent;
  fp.platform = navigator.platform;
  fp.language = navigator.language;
  fp.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  fp.doNotTrack = navigator.doNotTrack;

  // device
  fp.screen = {
    width: window.screen.width,
    height: window.screen.height,
    availwidth: window.screen.availWidth,
    availheight: window.screen.availHeight,
    colorDepth: window.screen.colorDepth,
    pixelRatio: window.devicePixelRatio,
  };

  fp.hardware = {
    memory: (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 'unknown',
    cpuCores: navigator.hardwareConcurrency || 'unknown',
    touchPoints: navigator.maxTouchPoints || 'unknown',
  };

  // canvas fingerprint
  fp.canvas = (() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px "Arial"';
      ctx.fillText('dg_fingerprint', 2, 2);
      ctx.fillRect(100, 10, 50, 50);
    }

    return canvas.toDataURL();
  })();

  // WebGL fingerprint
  fp.webgl = (() => {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return 'unsupported';

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    return {
      vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'unknown',
      renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'unknown',
      version: gl.getParameter(gl.VERSION),
    };
  })();

  // audio fingerprint
  fp.audio = await (async () => {
    try {
      const AudioCtx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return 'unsupported';
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const analyser = ctx.createAnalyser();

      osc.connect(analyser);
      osc.start(0);

      const data = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(data);

      osc.stop();
      await ctx.close();

      return Array.from(data).slice(0, 30);
    } catch {
      return 'unsupported';
    }
  })();

  // media devices count
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    fp.mediaDevices = {
      audioinput: devices.filter((d) => d.kind === 'audioinput').length,
      audiooutput: devices.filter((d) => d.kind === 'audiooutput').length,
      videoinput: devices.filter((d) => d.kind === 'videoinput').length,
    };
  }

  return fp;
}
