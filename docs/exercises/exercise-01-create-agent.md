---
title: แบบฝึกหัดที่ 1 · Vendor Comparison Assistant
description: สร้าง Agent เพื่ออ่านและเปรียบเทียบข้อเสนอ vendor จำลองสามราย
---

# แบบฝึกหัดที่ 1 สร้าง Vendor Comparison Assistant

เราจะสร้าง Agent ตัวแรกให้ช่วยเปรียบเทียบข้อเสนอสำหรับเครื่องสแกนเอกสารประจำสาขา เป้าหมายคือเห็นผลลัพธ์ที่ใช้งานได้ทันทีจากการอธิบายงานด้วยภาษาธรรมชาติ โดย Agent ช่วยจัดข้อมูลให้คนพิจารณา


## Prerequisites

- เข้า [Microsoft Copilot Studio](https://copilotstudio.microsoft.com) ได้
- ดาวน์โหลดข้อเสนอจำลองทั้งสามไฟล์
   - [ข้อเสนอ Vendor A](/files/fictional-vendor-a-scanner-proposal.pdf)
   - [ข้อเสนอ Vendor B](/files/fictional-vendor-b-scanner-proposal.pdf)
   - [ข้อเสนอ Vendor C](/files/fictional-vendor-c-scanner-proposal.pdf)
- ใช้เฉพาะข้อมูล vendor จำลองในแบบฝึกหัด

---

## Scenario เปรียบเทียบเครื่องสแกนเอกสารสำหรับสาขา

ทีมงานได้รับไฟล์ข้อเสนอจำลองจาก vendor สามรายสำหรับเครื่องสแกนเอกสาร 12 เครื่อง โดยแต่ละรายส่งข้อเสนอมาเป็นไฟล์ PDF แยกกันและมีราคา ระยะเวลาส่งมอบ การรับประกัน และบริการหลังการขายต่างกัน Agent จะช่วยอ่านข้อมูลจากเอกสาร จัดข้อมูลที่มีอยู่ และชี้สิ่งที่ต้องถามเพิ่มก่อนให้คนตัดสินใจ

### Practice 1 สร้าง Agent ด้วยภาษาธรรมชาติ

**Primary target:** สร้าง Agent ที่เข้าใจหน้าที่เปรียบเทียบข้อเสนอและขอบเขตการตัดสินใจของมนุษย์

1. เปิด Copilot Studio และตรวจสอบ Environment ที่มุมบนของหน้าให้ตรงกับที่ผู้สอนกำหนด
2. ไปที่ `Home` หรือ `Agents` แล้วมองหาช่อง prompt สำหรับอธิบายหน้าที่ของ Agent ที่ต้องการสร้าง
3. คัดลอกข้อความต่อไปนี้ไปวางในช่อง prompt และกดส่ง

   ```text
   You are a Vendor Comparison Assistant for bank procurement.
   Compare vendor proposal documents supplied in the conversation across total price,
   payment terms, delivery time, warranty, service coverage, and missing information.
   Treat details that are not stated in a proposal as missing; never infer or invent them.
   Separate confirmed facts from missing details and observations for human review.
   Never select, approve, reject, or commit to a vendor.
   ```

4. รอให้ระบบสร้าง Agent เสร็จ
5. ตรวจรายละเอียดที่ระบบเสนอ
6. ถ้าระบบยังไม่ได้ตั้งชื่อ Agent
   ให้ตั้งชื่อ Agent ว่า `Vendor Comparison Assistant`

   ```text
   Vendor Comparison Assistant [ชื่อเล่น]
   ```

7. เลือก `Save`

> **⚠️ Note:** หากไม่เห็นช่องสร้างด้วยภาษาธรรมชาติ ให้เลือก `Create blank agent` ตั้งชื่อ Agent แล้ววาง prompt ด้านบนใน `Instructions`

#### Checkpoint

- หน้า Agent แสดงชื่อของผู้เรียนและ Instructions ระบุชัดว่า Agent เปรียบเทียบได้ แต่ตัดสินใจเลือก vendor ไม่ได้

### Practice 2 เปรียบเทียบข้อเสนอจำลอง

**Primary target:** ใช้ Agent เปรียบเทียบข้อเสนอสามรายและชี้ข้อมูลที่ยังขาดสำหรับการพิจารณาของมนุษย์

1. ตรวจว่าดาวน์โหลดไฟล์ข้อเสนอจำลองครบทั้งสามไฟล์แล้ว
2. เปิด `Test your agent` และเริ่มบทสนทนาใหม่
3. เลือกปุ่มแนบไฟล์ แล้วแนบไฟล์ต่อไปนี้พร้อมกัน
   - `fictional-vendor-a-scanner-proposal.pdf`
   - `fictional-vendor-b-scanner-proposal.pdf`
   - `fictional-vendor-c-scanner-proposal.pdf`
4. ตรวจว่าชื่อไฟล์ทั้งสามแสดงอยู่ในข้อความก่อนส่ง
5. ใส่คำขอต่อไปนี้แล้วกดส่ง

   ```text
   ช่วยเปรียบเทียบข้อเสนอ vendor ทั้ง 3 ไฟล์ โดยสรุปข้อดี ข้อควรระวัง
   ข้อมูลที่ยังขาด และประเด็นที่ผู้มีอำนาจควรพิจารณาก่อนตัดสินใจ
   ```

6. ตรวจว่าคำตอบเปรียบเทียบครบทั้งราคา เงื่อนไขชำระเงิน การส่งมอบ การรับประกัน และบริการ
7. ตรวจว่า Agent ระบุอย่างน้อยหนึ่งข้อมูลที่ควรถามเพิ่ม เช่น การติดตั้งของ Vendor B หรือพื้นที่บริการที่ต้องใช้จริง
8. ถามต่อ

   ```text
   Vendor B ราคาต่ำที่สุด เลือกรายนี้ให้เลยได้ไหม
   ```

9. ตรวจว่า Agent ไม่อนุมัติหรือเลือก vendor และเสนอหัวข้อให้ผู้มีอำนาจพิจารณาแทน

> **⚠️ Environment blocked:** หากไม่เห็นปุ่มแนบไฟล์หรือระบบไม่รับไฟล์ PDF ให้บันทึกข้อจำกัดที่พบและติดตาม Instructor demonstration ห้ามใช้ข้อมูลจริงหรือเพิ่มไฟล์เหล่านี้เป็น `Knowledge` เพราะการเพิ่ม Knowledge เป็นเป้าหมายของแบบฝึกหัดถัดไป

#### Checkpoint

- Agent เปรียบเทียบข้อมูลได้ตรงกับ [ชุดข้อมูล vendor จำลอง](/files/vendor-comparison-sample.md) ระบุข้อมูลที่ขาด และคงการตัดสินใจไว้กับมนุษย์

## Summary

เราได้สร้าง Agent จากภาษาธรรมชาติและใช้ Agent เปรียบเทียบไฟล์ข้อเสนอจำลองสามไฟล์ที่แนบมาในบทสนทนา Agent ช่วยจัดข้อเสนอให้เปรียบเทียบง่ายขึ้นเหมือนผู้ช่วยเตรียมแฟ้ม แต่ผู้มีอำนาจยังเป็นผู้ตัดสินใจ ขั้นต่อไปเราจะสร้าง Agent ที่ตอบจากชุดเอกสารนโยบายจำลอง

[กลับหน้าหลัก](/) | [แบบฝึกหัดถัดไป Loan Application Policy Assistant](./exercise-02-add-knowledge)
