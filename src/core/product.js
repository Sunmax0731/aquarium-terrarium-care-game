export const product = {
  "repo": "aquarium-terrarium-care-game",
  "domain": "Game",
  "rank": 69,
  "tier": "P3",
  "score": 48,
  "ideaNo": 8,
  "ideaName": "アクアリウム・テラリウム育成ゲーム",
  "field": "ゲーム・育成シミュレーション",
  "publicTarget": "GitHub Pages / BOOTH",
  "overview": "水槽とテラリウムの水質、光、温度、生体相性を日々のケアで整える。",
  "problem": "育成シミュレーションは魅力があるが、長期バランスとコンテンツ量が必要。",
  "differentiation": "水質・湿度・光を見える化し、短時間のケア判断で状態が変わる。",
  "audience": "小さな育成シムをブラウザで継続したいプレイヤー",
  "requiredInputs": [
    "tankId",
    "waterQuality",
    "speciesNeeds",
    "careAction"
  ],
  "modules": [
    "game-loop",
    "balancer",
    "web-game",
    "scenario-validator"
  ],
  "accent": "#0284c7",
  "secondary": "#65a30d",
  "scenarioNouns": [
    "水質",
    "光量",
    "ケア判断"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === "mixed-batch") {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + "-" + index, inputs, flags: index === 2 ? ["needsReview"] : [] }));
    const accepted = results.filter((r) => r.status !== "error").length;
    const warnings = results.filter((r) => r.status !== "pass").length;
    return { id: scenario.id, status: warnings ? "warning" : "pass", accepted, warnings, missing: results.flatMap((r) => r.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === "");
  if (missing.length) return { id: scenario.id, status: "error", accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((v) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown/i.test(String(v)));
  const warnings = (scenario.flags || []).includes("needsReview") || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? "warning" : "pass", accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, releaseTarget: product.publicTarget, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
