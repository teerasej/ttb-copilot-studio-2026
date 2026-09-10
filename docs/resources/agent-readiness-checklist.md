---
title: Agent Readiness Checklist
description: รายการตรวจความพร้อมและขอบเขตก่อน Publish Agent
---

# Agent Readiness Checklist

เลือกรายการของ Agent ที่ต้องการ Review แล้วใช้เฉพาะข้อมูลจำลอง บันทึกข้อจำกัดของ Environment ตามจริง

## Common Safety

- [ ] Name และ Description บอกชัดว่าเป็นสถานการณ์สำหรับการฝึก
- [ ] ไม่มีข้อมูลลูกค้า ข้อมูลส่วนบุคคล รหัสผ่าน access token หรือเลขบัญชีจริง
- [ ] Agent ไม่อ้างว่าข้อมูลจำลองเป็นนโยบายหรือกระบวนการจริง
- [ ] Agent แจ้งข้อจำกัดและส่งต่อให้มนุษย์เมื่อเกินขอบเขต
- [ ] ทดสอบทั้งกรณีปกติและกรณีเสี่ยงแล้ว

## Vendor Comparison Assistant

- [ ] เปรียบเทียบราคา การชำระเงิน การส่งมอบ การรับประกัน และบริการจากข้อมูลที่ให้เท่านั้น
- [ ] แยกข้อเท็จจริง ข้อมูลที่ขาด และข้อสังเกตได้
- [ ] ไม่เลือก อนุมัติ ปฏิเสธ หรือผูกพันกับ vendor
- [ ] ทดสอบ `VC-01` และ `VC-02` ผ่าน

## Loan Application Policy Assistant

- [ ] Knowledge จำลองทั้งสามแหล่งอยู่ในสถานะพร้อมใช้งาน
- [ ] คำตอบอ้างอิงเอกสารที่เกี่ยวข้องเมื่อ UI รองรับ
- [ ] Agent ไม่สร้างเกณฑ์ รายได้ขั้นต่ำ คะแนน หรือผลการอนุมัติ
- [ ] Agent ส่งข้อมูลที่ขาดหรือขัดแย้งให้ผู้มีอำนาจ Review
- [ ] ทดสอบ `LP-01` ถึง `LP-04` ผ่าน

## Customer Follow-up Assistant

- [ ] `Create Customer Follow-up Draft [ชื่อเล่น]` อยู่ในสถานะ Published
- [ ] Tool รับข้อมูลสามรายการและคืน `FollowUpDraft`
- [ ] `Asynchronous response` เป็น `Off`
- [ ] ร่างระบุว่าไม่ยืนยันผลสินเชื่อ
- [ ] Agent ไม่อ้างว่าส่ง email แล้ว
- [ ] ทดสอบ `CF-01` ถึง `CF-04` ผ่าน
- [ ] หากทำ Optional Extension: Outlook Tool สร้างเฉพาะ Draft หลังผู้ใช้ยืนยันและไม่ส่ง email

## Authentication and Publish

- [ ] ผู้สอนยืนยันว่าจะใช้ Hands-on หรือ Instructor demonstration
- [ ] Authentication ตั้งตามข้อกำหนดขององค์กร
- [ ] ไม่มีการเปลี่ยนการตั้งค่าเพื่อหลีกเลี่ยงนโยบาย Environment
- [ ] Agent ผ่านรายการที่เกี่ยวข้องก่อน Publish
- [ ] บันทึกข้อจำกัดด้าน license, capacity, Knowledge, Flow หรือ Channel ตามจริง
- [ ] ทดลองในโปรไฟล์ของผู้สร้างเท่านั้น เว้นแต่ผู้สอนอนุญาตขอบเขตอื่น
