// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://f4cu.github.io',
	base: '/ds101',
	// Old page URLs from before file names were unified with page titles
	redirects: {
		'/multi-platform-component-specs/': '/ds101/specifications/',
		'/adoption-measurement/': '/ds101/adoption-metrics/',
		'/ai-context-and-readiness/': '/ds101/ai-readiness/',
		'/component-building/': '/ds101/figma-composition/',
		'/component-architecture/': '/ds101/figma-composition/',
		'/component-taxonomy/': '/ds101/code-composition/',
		'/contextual-component-performance/': '/ds101/system-performance/',
		'/feedback-loops/': '/ds101/generative-loops/',
		'/foundations/': '/ds101/core-concepts/',
		'/governance-under-ai-consumption/': '/ds101/ai-governance/',
		'/scaling-ai-effort/': '/ds101/risk-management/',
		'/component-governance/': '/ds101/decision-governance/',
		'/inheriting-a-legacy-system/': '/ds101/system-takeover/',
		'/design-system-maturity/': '/ds101/system-maturity/',
		'/what-a-design-system-is/': '/ds101/core-concepts/',
		'/accessible-color-palettes/': '/ds101/accessible-colors/',
		'/component-specs/': '/ds101/specifications/',
		'/component-composition-in-figma/': '/ds101/figma-composition/',
		'/component-composition-in-code/': '/ds101/code-composition/',
		'/component-api-design/': '/ds101/api-design/',
		'/component-property-naming/': '/ds101/property-naming/',
		'/component-usability/': '/ds101/usability/',
		'/component-accessibility/': '/ds101/accessibility/',
		'/scaling-across-decades/': '/ds101/long-term-scale/',
		'/governance-case-studies/': '/ds101/case-studies/',
		'/measuring-adoption/': '/ds101/adoption-metrics/',
		'/performance-in-context/': '/ds101/system-performance/',
		'/governance-for-ai/': '/ds101/ai-governance/',
		'/scaling-ai-effort-to-risk/': '/ds101/risk-management/',
		'/figma-access-for-agents/': '/ds101/figma-agent-access/',
		'/agentic-workflow-design/': '/ds101/agentic-workflows/',
		'/ci-for-agentic-workflows/': '/ds101/agent-ci-pipelines/',
		'/references/': '/ds101/citations/',
	},
	integrations: [
		mermaid({
			theme: 'neutral',
		}),
		starlight({
			title: 'DS101',
			description:
				'A field guide to running design systems — token architecture, governance, adoption, and AI-readiness.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4cu/ds101' }],
			customCss: ['./src/styles/custom.css'],
			// Wrap long code lines instead of scrolling sideways on phones
			expressiveCode: { defaultProps: { wrap: true } },
			sidebar: [
				{ label: 'Start Here', link: '/' },
				{
					label: '01. Strategy',
					items: ['ui-audit', 'pilot-strategy', 'system-takeover', 'system-maturity'],
				},
				{
					label: '02. Foundations',
					items: [
						'core-concepts',
						'token-architecture',
						'token-naming',
						'accessible-colors',
						'design-to-code-contract',
						'platform-divergence',
					],
				},
				{
					label: '03. Components',
					items: [
						'specifications',
						'figma-composition',
						'code-composition',
						'api-design',
						'property-naming',
						'usability',
						'accessibility',
						'layout-accessibility',
					],
				},
				{
					label: '04. Governance',
					items: [
						'team-models',
						'decision-governance',
						'contribution-models',
						'fostering-contribution',
						'component-lifecycle',
						'system-inventory',
						'release-management',
						'operating-cadence',
						'onboarding-adopters',
						'long-term-scale',
						'case-studies',
					],
				},
				{
					label: '05. Health',
					items: [
						'adoption-metrics',
						'system-performance',
						'dependency-observability',
						'documentation-coverage',
					],
				},
				{
					label: '06. Business',
					items: [
						'communicating-value',
						'estimating-roi',
						'brand-alignment',
						'stakeholder-alignment',
					],
				},
				{
					label: '07. AI Integration',
					items: [
						'ai-readiness',
						'context-engineering',
						'documentation-for-agents',
						'ai-governance',
						'risk-management',
						'figma-agent-access',
						'agentic-workflows',
						'generative-loops',
						'agent-ci-pipelines',
						'ai-output-discipline',
						'agentic-ui-patterns',
					],
				},
				{
					label: 'Reference',
					items: ['glossary', 'citations'],
				},
			],
		}),
	],
});
