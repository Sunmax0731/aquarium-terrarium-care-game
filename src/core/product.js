export const product = {
  "repo": "aquarium-terrarium-care-game",
  "domain": "Game",
  "rank": 69,
  "tier": "P3",
  "score": 48,
  "ideaNo": 8,
  "ideaName": "アクアリウム・テラリウム育成ゲーム",
  "field": "育成ゲーム",
  "publicTarget": "GitHub Pages / BOOTH",
  "platformScope": "static Web care game prototype / GitHub Pages",
  "overview": "水質、種、ケア行動を選び、短い育成結果を確認できるブラウザ育成ゲーム検証。",
  "problem": "育成シミュレーションは長期バランスとコンテンツ量が必要で、初期実装だけでは完成度を判断しにくい。",
  "differentiation": "水質リスクとケア行動を代表シナリオ化し、短時間でも育成判断を確認できる。",
  "audience": "育成ゲーム好き、アクアリウム愛好者、癒やし系ゲーム試作者",
  "requiredInputs": [
    "tankState",
    "speciesPlan",
    "careAction",
    "waterQuality"
  ],
  "modules": [
    "game-loop",
    "care-balancer",
    "web-game",
    "scenario-validator"
  ],
  "accent": "#0284c7",
  "secondary": "#14532d",
  "scenarioNouns": [
    "水槽",
    "生体計画",
    "ケア行動"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === 'mixed-batch') {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + '-' + index, inputs, flags: index === 2 ? ['needsReview'] : [] }));
    const accepted = results.filter((result) => result.status !== 'error').length;
    const warnings = results.filter((result) => result.status !== 'pass').length;
    return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted, warnings, missing: results.flatMap((result) => result.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === '');
  if (missing.length) return { id: scenario.id, status: 'error', accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((value) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown|overflow|rush|storm|fatigue|unstable|crowded|high/i.test(String(value)));
  const warnings = (scenario.flags || []).includes('needsReview') || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, domain: product.domain, releaseTarget: product.publicTarget, platformScope: product.platformScope, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
