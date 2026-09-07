---
layout: home

hero:
  name: "TTB AI Agent Day"
  text: "สร้าง AI Agent ที่พร้อมทดสอบ"
  tagline: "ในการฝึกอบรมนี้ พลจะพาพวกเราสร้าง ใน Microsoft Copilot Studio ตั้งแต่กำหนดโจทย์ เพิ่ม Knowledge สร้าง Agent Flow ไปจนถึงทดสอบและเผยแพร่ Agent กันครับ"
  actions:
    - theme: brand
      text: เริ่มแบบฝึกหัดที่ 1
      link: /exercises/exercise-01-create-agent
    - theme: alt
      text: ดาวน์โหลดไฟล์ประกอบ
      link: /ttb-copilot-studio-2026/downloads/ttb-ai-agent-day-sample-files.zip

features:
  - icon: 🎯
    title: สร้างจากโจทย์จริง
    details: เปลี่ยนงานรับคำขอบริการที่ทำซ้ำให้เป็น Agent ที่มีเป้าหมายและขอบเขตชัดเจน
  - icon: 📚
    title: ตอบจาก Knowledge
    details: ฝึก Grounding จากคู่มือจำลอง พร้อมตรวจคำตอบเมื่อข้อมูลไม่พอหรืออยู่นอกขอบเขต
  - icon: ⚙️
    title: ทำงานด้วย Agent Flow
    details: แยกบทสนทนาที่ยืดหยุ่นออกจากงานที่ต้องมีรูปแบบและผลลัพธ์สม่ำเสมอ
  - icon: 🛡️
    title: ทดสอบก่อน Publish
    details: ตรวจ Happy path, Failure path, Authentication และความพร้อมก่อนเปิดให้ผู้อื่นใช้งาน
---

## เส้นทางการเรียนรู้

ทำแบบฝึกหัดตามลำดับ แต่ละช่วงมี **Practice**, **Checkpoint** และ **Expected Output** เพื่อให้ตรวจความก้าวหน้าได้ด้วยตนเอง

<div class="exercise-grid">
  <a class="exercise-card" href="./exercises/exercise-01-create-agent">
    <span class="step">01</span>
    <h3>สร้าง Agent ตัวแรก</h3>
    <p>กำหนดงานน่าเบื่อ ขอบเขต Instructions และ Smoke test ให้ผู้ใช้เข้าใจ Agent ได้ทันที</p>
  </a>
  <a class="exercise-card" href="./exercises/exercise-02-add-knowledge">
    <span class="step">02</span>
    <h3>เพิ่ม Knowledge</h3>
    <p>เพิ่มคู่มือจำลอง ทดสอบคำตอบแบบ Grounded และฝึกตอบอย่างปลอดภัยเมื่อข้อมูลไม่พอ</p>
  </a>
  <a class="exercise-card" href="./exercises/exercise-03-add-agent-flow">
    <span class="step">03</span>
    <h3>สร้าง Agent Flow</h3>
    <p>เปลี่ยนรายละเอียดคำขอให้เป็นสรุปที่พร้อมให้คนตรวจ และเพิ่ม Flow เป็น Tool ของ Agent</p>
  </a>
  <a class="exercise-card" href="./exercises/exercise-04-publish-and-review">
    <span class="step">04</span>
    <h3>ทดสอบและ Publish</h3>
    <p>ตรวจ Responsible AI, Authentication, Publishing และการเชื่อมต่อ Teams ตามสิทธิ์ของ Environment</p>
  </a>
</div>

::: warning ข้อมูลสำหรับการอบรม
ชื่อบุคคล เหตุการณ์ ขั้นตอน และข้อมูลบริการทั้งหมดในชุดนี้เป็นข้อมูลสมมติ ไม่ใช่นโยบาย กระบวนการ หรือ SLA จริงของ ttb ห้ามใช้ข้อมูลลูกค้า ข้อมูลส่วนบุคคล หรือข้อมูลภายในจริงในการอบรม
:::

## ก่อนเริ่ม

- มีประสบการณ์ใช้งาน Microsoft 365 และ Chatbot เบื้องต้น
- มีบัญชีที่เข้าใช้ Microsoft Copilot Studio ได้
- มี Developer หรือ Trial Environment ของ Microsoft Power Platform ที่มี Dataverse พร้อมใช้งาน
- ผู้ดูแลเปิด Dataverse search สำหรับการใช้ไฟล์เป็น Knowledge
- การ Publish ต้องมี license และ Copilot Credits/capacity ตามที่องค์กรกำหนด; Trial อาจสร้างและทดสอบได้ แต่ไม่รับรองว่าสามารถ Publish
- Optional Extension สำหรับ email ต้องใช้ Office 365 Outlook connector ที่องค์กรอนุญาต

## ไฟล์ประกอบ

<div class="download-row">
  <a href="./downloads/ttb-ai-agent-day-sample-files.zip">⬇ ดาวน์โหลดไฟล์ทั้งหมด</a>
  <a href="./files/ttb-service-request-guide.docx">📄 คู่มือคำขอบริการจำลอง</a>
  <a href="./resources/service-request-test-cases">🧪 ชุดทดสอบ</a>
  <a href="./resources/agent-readiness-checklist">✅ Readiness Checklist</a>
</div>

## ขอบเขต

แบบฝึกหัดนี้ใช้ Copilot Studio standard harness และครอบคลุม Agent, Instructions, Knowledge, Agent Flow, Tool, การทดสอบ, Authentication และ Teams and Microsoft 365 Copilot channel ไม่ครอบคลุม custom Topic, Prompt node, REST API, MCP, custom connector, production deployment หรือการส่ง Agent เข้าสู่ Agent Store ของทั้งองค์กร

## เอกสารอ้างอิง

- [Upload files as a knowledge source](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-file-upload)
- [Create an agent flow as a tool](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create)
- [Add an agent flow as a tool to an agent](https://learn.microsoft.com/microsoft-copilot-studio/flow-agent)
- [Configure user authentication](https://learn.microsoft.com/microsoft-copilot-studio/configuration-end-user-authentication)
- [Connect an agent to Teams and Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams)
- [Copilot Studio billing and licensing FAQ](https://learn.microsoft.com/microsoft-copilot-studio/faq-billing-licensing)
