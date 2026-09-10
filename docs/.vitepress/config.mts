import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    lang: 'th-TH',
    title: 'TTB Copilot Studio 2026',
    description: 'แบบฝึกหัดสร้าง AI Agent ด้วย Microsoft Copilot Studio',
    base: '/ttb-copilot-studio-2026/',
    cleanUrls: true,
    ignoreDeadLinks: [/^\/files\//, /^\/downloads\//],
    lastUpdated: true,
    head: [
      ['meta', { name: 'theme-color', content: '#0050c8' }],
      ['meta', { name: 'color-scheme', content: 'light dark' }]
    ],
    themeConfig: {
      logo: {
        light: '/mark-light.svg',
        dark: '/mark-dark.svg',
        alt: 'TTB AI Agent Day'
      },
      siteTitle: 'Copilot Studio 2026',
      nav: [
        { text: 'หน้าแรก', link: '/' },
        { text: 'แบบฝึกหัด', link: '/exercises/exercise-01-create-agent' },
        {
          text: 'ไฟล์ประกอบ',
          items: [
            { text: 'ดาวน์โหลดทั้งหมด', link: '/downloads/ttb-ai-agent-day-sample-files.zip' },
            { text: 'ข้อเสนอ Vendor A', link: '/files/fictional-vendor-a-scanner-proposal.pdf' },
            { text: 'ข้อเสนอ Vendor B', link: '/files/fictional-vendor-b-scanner-proposal.pdf' },
            { text: 'ข้อเสนอ Vendor C', link: '/files/fictional-vendor-c-scanner-proposal.pdf' },
            { text: 'ชุดทดสอบ', link: '/resources/service-request-test-cases' },
            { text: 'Readiness Checklist', link: '/resources/agent-readiness-checklist' }
          ]
        }
      ],
      sidebar: [
        {
          text: 'TTB AI Agent Day',
          items: [{ text: 'ภาพรวมการเรียน', link: '/' }]
        },
        {
          text: 'เส้นทางแบบฝึกหัด',
          collapsed: false,
          items: [
            { text: '1 · เปรียบเทียบ Vendor', link: '/exercises/exercise-01-create-agent' },
            { text: '2 · Knowledge และ RAG', link: '/exercises/exercise-02-add-knowledge' },
            { text: '3 · Customer Follow-up Flow', link: '/exercises/exercise-03-add-agent-flow' },
            { text: '4 · ทดสอบและ Publish', link: '/exercises/exercise-04-publish-and-review' }
          ]
        },
        {
          text: 'ทรัพยากร',
          items: [
            { text: 'ชุดทดสอบ', link: '/resources/service-request-test-cases' },
            { text: 'Agent Readiness Checklist', link: '/resources/agent-readiness-checklist' }
          ]
        }
      ],
      outline: { level: [2, 4], label: 'ในหน้านี้' },
      docFooter: { prev: 'ก่อนหน้า', next: 'ถัดไป' },
      lastUpdated: { text: 'อัปเดตล่าสุด', formatOptions: { dateStyle: 'medium', timeStyle: 'short' } },
      search: { provider: 'local', options: { translations: { button: { buttonText: 'ค้นหา', buttonAriaLabel: 'ค้นหาเอกสาร' }, modal: { noResultsText: 'ไม่พบผลลัพธ์', resetButtonTitle: 'ล้างการค้นหา', footer: { selectText: 'เลือก', navigateText: 'เลื่อน', closeText: 'ปิด' } } } } },
      socialLinks: [{ icon: 'github', link: 'https://github.com/teerasej/ttb-copilot-studio-2026' }],
      footer: {
        message: 'เนื้อหาจำลองสำหรับการฝึกอบรม Microsoft Copilot Studio',
        copyright: 'TTB AI Agent Day · 2026'
      }
    },
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#e8f2ff',
        primaryTextColor: '#102a43',
        primaryBorderColor: '#0050c8',
        lineColor: '#52738f',
        secondaryColor: '#fff3df',
        tertiaryColor: '#f5f8fc'
      }
    }
  })
)
