---
title: Agent Readiness Checklist
description: รายการตรวจ Scope, Knowledge, Tool, Security และความพร้อมก่อน Publish
---

# Agent Readiness Checklist

ใช้รายการนี้ก่อน Publish `ttb Service Request Assistant [ชื่อเล่น]`

## Scope

- [ ] Name และ Description บอกชัดว่าเป็นสถานการณ์สำหรับการฝึก
- [ ] Agent ไม่อนุมัติคำขอ เปลี่ยนสิทธิ์ หรือรับรองเวลาแก้ไข
- [ ] คำถามนอกขอบเขตได้รับการชี้แจงอย่างเหมาะสม

## Knowledge

- [ ] `Simulated ttb Service Request Guide` อยู่ในสถานะ `Ready`
- [ ] คำตอบตรงกับไฟล์และมี Source reference เมื่อระบบรองรับ
- [ ] Agent ไม่สร้าง SLA หรือนโยบายที่ไม่มีในไฟล์

## Tool

- [ ] `Create Service Request Summary` ถูก Publish และเพิ่มเป็น Tool แล้ว
- [ ] Tool รับข้อมูลครบสี่รายการและคืน `FormattedSummary`
- [ ] สรุประบุ `Waiting for human review`
- [ ] Optional email ใช้ที่อยู่สำหรับฝึกและถามยืนยันก่อนส่ง

## Data and Security

- [ ] ไม่มีข้อมูลลูกค้า รหัสผ่าน token เลขบัญชี หรือข้อมูลส่วนบุคคลจริง
- [ ] Authentication ตั้งเป็น `Authenticate with Microsoft`
- [ ] ไม่มีการเลือก `No authentication` เพื่อหลีกเลี่ยงนโยบาย
- [ ] ไม่มีการแชร์ Agent กว้างกว่าขอบเขตที่ผู้สอนอนุญาต

## Test and Publish

- [ ] ทดสอบ `TC-01` ถึง `TC-06` ครบ
- [ ] แก้ไขและทดสอบซ้ำทุกกรณีที่ไม่ผ่าน
- [ ] บันทึกข้อจำกัดด้าน license, capacity, connector หรือ tenant policy
- [ ] ทดสอบเวอร์ชัน Published ในโปรไฟล์ของผู้สร้างเมื่อ Environment รองรับ
