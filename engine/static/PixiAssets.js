const svgToDataUri = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const PLAYER_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" shape-rendering="crispEdges">
  <rect width="64" height="64" fill="transparent"/>
  <path d="M32 4 L50 30 L41 30 L41 56 L23 56 L23 30 L14 30 Z" fill="#ffffff" stroke="#d8d8d8" stroke-width="2"/>
  <rect x="26" y="18" width="12" height="14" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
</svg>
`);

const PLAYER_IMG = new Image();
PLAYER_IMG.src = 'engine/static/assets/pixi/player.png';
const MONSTER_IMG = 'engine/static/assets/pixi/monster_transparent.png'
const MONSTER_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" shape-rendering="crispEdges">
  <rect width="64" height="64" fill="transparent"/>
  <rect x="8" y="8" width="48" height="48" fill="#e72323" stroke="#5a0000" stroke-width="4"/>
  <rect x="18" y="23" width="10" height="8" fill="#ffe53a"/>
  <rect x="36" y="23" width="10" height="8" fill="#ffe53a"/>
  <rect x="19" y="38" width="26" height="10" fill="#280000"/>
  <rect x="22" y="38" width="4" height="6" fill="#ffffff"/>
  <rect x="38" y="38" width="4" height="6" fill="#ffffff"/>
</svg>
`);

const CLOUD_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" width="96" height="48" viewBox="0 0 96 48" shape-rendering="crispEdges">
  <rect width="96" height="48" fill="transparent"/>
  <ellipse cx="28" cy="30" rx="20" ry="12" fill="#cbe7ff" stroke="#6d9ddb" stroke-width="2"/>
  <ellipse cx="48" cy="22" rx="22" ry="14" fill="#e6f3ff" stroke="#6d9ddb" stroke-width="2"/>
  <ellipse cx="68" cy="30" rx="18" ry="11" fill="#d5ecff" stroke="#6d9ddb" stroke-width="2"/>
</svg>
`);

class PixiAssets {
  static registered = false;

  static async load() {
    const { Assets } = window.PIXI;

    if (!PixiAssets.registered) {
      Assets.add("player", PLAYER_SVG);
      Assets.add("player_img", PLAYER_IMG.src);
      Assets.add("monster", MONSTER_SVG);
      Assets.add("monster_img", MONSTER_IMG);
      Assets.add("cloud", CLOUD_SVG);
      PixiAssets.registered = true;
    }

    await Assets.load(["player", "player_img", "monster", "monster_img", "cloud"]);
  }
}

window.PixiAssets = PixiAssets;
export default PixiAssets;
