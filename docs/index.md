---
layout: home

hero:
  name: "TTB AI Agent Day"
  text: "สร้าง AI Agent ที่ช่วยงานได้ทันที"
  tagline: "สร้าง Agent สามรูปแบบใน Microsoft Copilot Studio: เปรียบเทียบ vendor, ตอบจาก Knowledge และสร้างร่างติดตามลูกค้าด้วย Agent flow"
  actions:
    - theme: brand
      text: เริ่มแบบฝึกหัดที่ 1
      link: /exercises/exercise-01-create-agent
    - theme: alt
      text: ดาวน์โหลดไฟล์ประกอบ
      link: /ttb-copilot-studio-2026/downloads/ttb-ai-agent-day-sample-files.zip

features:
  - icon: 📊
    title: เปรียบเทียบ Vendor
    details: ให้ Agent อ่านข้อเสนอจำลองสามไฟล์ จัดข้อมูลที่มี และชี้สิ่งที่ต้องถามเพิ่มก่อนคนตัดสินใจ
  - icon: 📚
    title: ตอบจาก Knowledge
    details: สร้าง Loan Application Policy Assistant ที่ตอบจากเอกสารจำลองและไม่คาดการณ์ผลอนุมัติ
  - icon: ⚙️
    title: ทำงานด้วย Agent flow
    details: เปลี่ยนข้อมูลจากบทสนทนาเป็นร่างข้อความติดตามที่มีรูปแบบสม่ำเสมอและพร้อมให้พนักงาน Review
  - icon: 🛡️
    title: ทดสอบก่อน Publish
    details: ตรวจข้อมูลอ่อนไหว ขอบเขต Authentication และความพร้อมก่อนทดลอง Agent เวอร์ชัน Published
---

## เส้นทางการเรียนรู้

แบบฝึกหัดที่ 1-3 เริ่มแยกกันได้ แต่ละช่วงมี **Practice** และ **Checkpoint** เพื่อให้ตรวจความก้าวหน้าได้ด้วยตนเอง

<div class="exercise-grid">
  <a class="exercise-card" href="./exercises/exercise-01-create-agent">
    <span class="step">01</span>
    <h3>Vendor Comparison Assistant</h3>
    <p>สร้าง Agent ด้วยภาษาธรรมชาติ แล้วเปรียบเทียบข้อเสนอเครื่องสแกนเอกสารจำลองสามราย</p>
  </a>
  <a class="exercise-card" href="./exercises/exercise-02-add-knowledge">
    <span class="step">02</span>
    <h3>Loan Policy Knowledge</h3>
    <p>เพิ่มเอกสาร Knowledge จำลอง ทดสอบคำตอบแบบ Grounded และส่งกรณีที่ข้อมูลขัดแย้งให้คน Review</p>
  </a>
  <a class="exercise-card" href="./exercises/exercise-03-add-agent-flow">
    <span class="step">03</span>
    <h3>Customer Follow-up Agent flow</h3>
    <p>สร้าง Flow แบบ real-time สำหรับจัดร่างข้อความ และทดลองสร้าง Outlook Draft เมื่อ Environment พร้อม</p>
  </a>
  <a class="exercise-card" href="./exercises/exercise-04-publish-and-review">
    <span class="step">04</span>
    <h3>ทดสอบและ Publish</h3>
    <p>ตรวจ Authentication, Publishing และการเชื่อมต่อ Teams ตามสิทธิ์ของ Environment</p>
  </a>
</div>

::: warning ข้อมูลสำหรับการอบรม
ชื่อบุคคล ผู้สมัคร เหตุการณ์ vendor ราคา นโยบาย และข้อมูลสินเชื่อทั้งหมดในชุดนี้เป็นข้อมูลสมมติ ไม่ใช่นโยบาย กระบวนการ เกณฑ์อนุมัติ หรือข้อเสนอจริงของ ttb ห้ามใช้ข้อมูลลูกค้า ข้อมูลส่วนบุคคล หรือข้อมูลภายในจริงในการอบรม
:::

## ก่อนเริ่ม

- มีประสบการณ์ใช้งาน Microsoft 365 และ Chatbot เบื้องต้น
- มีบัญชีที่เข้าใช้ Microsoft Copilot Studio ได้
- มี Developer หรือ Trial Environment ของ Microsoft Power Platform ที่มี Dataverse พร้อมใช้งาน
- ผู้ดูแลเปิด Dataverse search สำหรับการใช้ไฟล์เป็น Knowledge
- การ Publish ต้องมี license และ Copilot Credits/capacity ตามที่องค์กรกำหนด; Trial อาจสร้างและทดสอบได้ แต่ไม่รับรองว่าสามารถ Publish
- การสร้าง Outlook Draft เป็น Optional Extension และต้องใช้ Office 365 Outlook connector ที่องค์กรอนุญาต

## ไฟล์ประกอบ

<div class="download-row">
  <a href="./downloads/ttb-ai-agent-day-sample-files.zip">⬇ ดาวน์โหลดไฟล์ทั้งหมด</a>
  <a href="./files/fictional-vendor-a-scanner-proposal.pdf">📄 ข้อเสนอ Vendor A</a>
  <a href="./files/fictional-vendor-b-scanner-proposal.pdf">📄 ข้อเสนอ Vendor B</a>
  <a href="./files/fictional-vendor-c-scanner-proposal.pdf">📄 ข้อเสนอ Vendor C</a>
  <a href="./resources/service-request-test-cases">🧪 ชุดทดสอบ</a>
  <a href="./resources/agent-readiness-checklist">✅ Readiness Checklist</a>
</div>

## ขอบเขต

แบบฝึกหัดนี้ใช้ Copilot Studio standard harness และครอบคลุม Agent, Instructions, Knowledge, Agent flow, Tool, การทดสอบ, Authentication และ Teams and Microsoft 365 Copilot channel ไม่ครอบคลุม custom Topic, Prompt node, REST API, MCP, custom connector, automated loan decision, credit scoring, production deployment หรือการส่ง Agent เข้าสู่ Agent Store ของทั้งองค์กร

## เอกสารอ้างอิง

- [Create and delete agents](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot)
- [Upload files as a knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-file-upload)
- [Create an agent flow as a tool](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create)
- [Add an agent flow as a tool to an agent](https://learn.microsoft.com/microsoft-copilot-studio/flow-agent)
- [Configure user authentication](https://learn.microsoft.com/microsoft-copilot-studio/configuration-end-user-authentication)
- [Connect an agent to Teams and Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)
- [Copilot Studio billing and licensing FAQ](https://learn.microsoft.com/microsoft-copilot-studio/faq-billing-licensing)
