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
		'/adoption-measurement/': '/ds101/measuring-adoption/',
		'/ai-context-and-readiness/': '/ds101/ai-readiness/',
		'/component-building/': '/ds101/component-composition-in-figma/',
		'/component-architecture/': '/ds101/component-composition-in-figma/',
		'/component-taxonomy/': '/ds101/component-composition-in-code/',
		'/contextual-component-performance/': '/ds101/performance-in-context/',
		'/feedback-loops/': '/ds101/generative-loops/',
		'/foundations/': '/ds101/what-a-design-system-is/',
		'/governance-under-ai-consumption/': '/ds101/governance-for-ai/',
		'/scaling-ai-effort/': '/ds101/scaling-ai-effort-to-risk/',
		'/component-governance/': '/ds101/decision-governance/',
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
				{ label: 'Start here', link: '/' },
				{
					label: 'Getting started',
					items: [
						'ui-audit',
						'pilot-strategy',
						'inheriting-a-legacy-system',
						'design-system-maturity',
					],
				},
				{
					label: 'Foundations',
					items: [
						'what-a-design-system-is',
						'token-architecture',
						'accessible-color-palettes',
						'design-to-code-contract',
						'multi-platform-component-specs',
						'platform-divergence',
					],
				},
				{
					label: 'Components',
					items: [
						'component-composition-in-figma',
						'component-composition-in-code',
						'component-api-design',
						'component-property-naming',
						'component-accessibility',
						'layout-accessibility',
					],
				},
				{
					label: 'Governance',
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
						'scaling-across-decades',
						'governance-case-studies',
					],
				},
				{
					label: 'Metrics',
					items: [
						'measuring-adoption',
						'performance-in-context',
						'dependency-observability',
						'documentation-coverage',
					],
				},
				{
					label: 'Business alignment',
					items: [
						'business-alignment',
						'communicating-value',
						'estimating-roi',
						'brand-alignment',
						'stakeholder-alignment',
					],
				},
				{
					label: 'Agentic AI',
					items: [
						'ai-readiness',
						'context-engineering',
						'documentation-for-agents',
						'governance-for-ai',
						'scaling-ai-effort-to-risk',
						'figma-access-for-agents',
						'agentic-workflow-design',
						'generative-loops',
						'ci-for-agentic-workflows',
						'ai-output-discipline',
						'agentic-ui-patterns',
					],
				},
				{ label: 'Tooling', link: '/tooling/' },
				{ label: 'Glossary', link: '/glossary/' },
				{ label: 'References', link: '/references/' },
			],
		}),
	],
});
