import localFont from 'next/font/local';

/**
 * POPULAR by El Conuco — the client's own brand system, used only inside its
 * case study. Values come from the client's brand manual (palette.json,
 * approved phrases, official logo PNGs, illustration ink masks); the phrases
 * are the approved brand copy and stay in Spanish in every locale.
 */

/** Anton — the brand's headline face (OFL), scoped to this case. */
export const anton = localFont({
  src: '../../../assets/fonts/Anton-Regular.ttf',
  variable: '--font-popular',
  display: 'swap',
});

export const POP = {
  rojo: '#DA1E1E',
  crema: '#F6EBD7',
  amarillo: '#F4B400',
  azul: '#0F3D5B',
  verde: '#2E5E3A',
  negro: '#1A1A1A',
} as const;

/** Chromatic hierarchy from the manual (share of each colour, in %). */
export const PALETTE = [
  { name: 'Crema Conuco', hex: POP.crema, share: 60 },
  { name: 'Rojo Popular', hex: POP.rojo, share: 30 },
  { name: 'Amarillo Maduro', hex: POP.amarillo, share: 5 },
  { name: 'Azul Caribe', hex: POP.azul, share: 3 },
  { name: 'Verde Cilantro', hex: POP.verde, share: 2 },
  { name: 'Negro Carbón', hex: POP.negro, share: 1 },
] as const;

export const PHRASES = [
  'LO BUENO SE VUELVE POPULAR.',
  'MUCHOS LUGARES. UNA MESA.',
  'PIDE ESTE. PRUEBA AQUEL.',
  'DE AQUÍ Y DE ALLÁ.',
  'PARA COMPARTIR. UNO MÁS.',
  'TODO SABE MEJOR AQUÍ.',
] as const;

const DIR = '/assets/images/work/popular';

export const ASSETS = {
  logoCrema: { src: `${DIR}/logo-crema.png`, width: 2000, height: 1215 },
  logoRojo: { src: `${DIR}/logo-rojo.png`, width: 2000, height: 1215 },
  isoRojo: { src: `${DIR}/iso-rojo.png`, width: 1850, height: 3273 },
  isoCrema: { src: `${DIR}/iso-crema.png`, width: 1850, height: 3273 },
  videoDesktop: '/assets/videos/work/popular-web-desktop',
  videoMobile: '/assets/videos/work/popular-web-mobile',
} as const;

/** Illustration ink masks (alpha only); tinted with any brand colour via CSS mask. */
export type InkName =
  | 'aji'
  | 'ajo'
  | 'arroz'
  | 'botella'
  | 'camaron'
  | 'ceviche'
  | 'chinola'
  | 'cilantro'
  | 'coctel'
  | 'exprimir'
  | 'hojas'
  | 'limon'
  | 'maiz'
  | 'mofongo'
  | 'molcajete'
  | 'paella'
  | 'pasta'
  | 'patacones'
  | 'pescado'
  | 'platano'
  | 'salsa'
  | 'servir'
  | 'taco-mano'
  | 'tacos'
  | 'tomate'
  | 'tostones'
  | 'totopos'
  | 'vaso';

export const inkSrc = (name: InkName) => `${DIR}/ink/${name}.webp`;
