---
title: แบบฝึกหัดที่ 4 · ทดสอบและ Publish
description: ตรวจ Responsible AI, Authentication และความพร้อมก่อน Publish
---

# แบบฝึกหัดที่ 4 ทดสอบ Responsible AI และ Publish

## Exercise Overview

เราจะตรวจ Agent เหมือนตรวจรายการก่อนเปิดร้าน: ทดสอบเส้นทางหลัก กรณีข้อมูลไม่ครบ ขอบเขตข้อมูล และ Tool ก่อน Publish จากนั้นจึงเปิดให้ตนเองทดลองใน Teams and Microsoft 365 Copilot เมื่อสิทธิ์และนโยบายองค์กรพร้อม

> **License:** การ Publish ต้องมี Microsoft 365 Copilot license หรือ Copilot Studio User License พร้อม capacity ตามเงื่อนไขของ Environment Trial license อย่างเดียวไม่รับรองว่าสามารถ Publish ได้ การเพิ่ม Channel ยังขึ้นกับนโยบาย Teams และการอนุมัติของผู้ดูแล

## Prerequisites

- ทำ [แบบฝึกหัดที่ 3](./exercise-03-add-agent-flow) แล้ว
- ดาวน์โหลดหรือเปิด [service-request-test-cases.md](/resources/service-request-test-cases)
- เปิด [agent-readiness-checklist.md](/resources/agent-readiness-checklist)
- ผู้สอนยืนยันว่าจะใช้เส้นทาง Hands-on หรือ Instructor demonstration สำหรับการ Publish

## Scenario 1 ตรวจความปลอดภัยและความพร้อม

Agent ต้องช่วยตอบและจัดสรุปโดยไม่แต่งนโยบาย ไม่รับข้อมูลอ่อนไหว ไม่อนุมัติคำขอ และไม่ส่ง email โดยไม่มีการยืนยัน

### Practice 1 ทดสอบ Happy path และ Failure path

**Primary target:** ใช้ชุดกรณีทดสอบพิสูจน์ว่า Agent ทำงานครบเส้นทางและจัดการความเสี่ยงได้ตามขอบเขต

#### Steps

1. เปิด `Test your agent` และเริ่มบทสนทนาใหม่ก่อนแต่ละกรณี
2. ทดสอบ `TC-01` จากไฟล์ชุดกรณีทดสอบ แล้วตรวจคำตอบกับ Knowledge
3. ทดสอบ `TC-02` แล้วตรวจว่า Agent ถามข้อมูลที่ขาดก่อนเรียก Tool
4. ทดสอบ `TC-03` แล้วตรวจว่า Agent ไม่สร้าง SLA
5. ทดสอบ `TC-04` แล้วตรวจว่า Agent ไม่รับหรือทวนข้อมูลอ่อนไหว
6. ทดสอบ `TC-05` แล้วตรวจว่า Agent ชี้แจงขอบเขต
7. ทดสอบ `TC-06` แล้วตรวจว่า Agent แสดงสรุปให้คน Review และไม่อ้างว่าอนุมัติแล้ว
8. หากทำ Optional email ให้ทดสอบ `TC-07` และยืนยันว่าไม่มีการส่งก่อนผู้ใช้อนุมัติ
9. บันทึกผลแต่ละกรณีเป็น `ผ่าน`, `ต้องปรับ` หรือ `ถูกบล็อกโดย tenant`
10. แก้ Instructions หรือ Tool description เฉพาะจุด แล้วทดสอบกรณีที่ไม่ผ่านซ้ำ

#### Checkpoint

- กรณีบังคับ `TC-01` ถึง `TC-06` มีผลทดสอบครบและไม่มีข้อผิดพลาดด้านข้อมูลอ่อนไหวหรือการอ้างว่าอนุมัติแล้ว

#### Expected Output

- บันทึกผลทดสอบและ Agent เวอร์ชันที่พร้อมพิจารณา Publish

### Practice 2 ตรวจ Authentication และ Publish

**Primary target:** Publish Agent เวอร์ชันที่ผ่านการทดสอบด้วย Authentication ที่เหมาะกับผู้ใช้ภายใน

#### Steps

1. ใช้ `agent-readiness-checklist.md` ตรวจ Scope, Knowledge, Tool, Data และ Test ให้ครบ
2. เปิด `Settings` > `Security` > `Authentication`
3. เลือก `Authenticate with Microsoft` แล้วเลือก `Save`
4. กลับหน้า Agent และตรวจว่า Name, Description, Instructions, Knowledge และ Tool ไม่มี Error
5. เลือก `Publish` และยืนยันการ Publish
6. รอจนระบบแจ้งว่าสำเร็จ
7. หาก Publish ไม่สำเร็จ ให้บันทึก Error และเหตุผลที่เป็นไปได้ เช่น license, capacity หรือ Data policy แล้วเปลี่ยนไปติดตาม Instructor demonstration

> **⚠️ Note:** ห้ามเลือก `No authentication` เพื่อหลีกเลี่ยงข้อจำกัด และห้ามพยายามแก้นโยบาย tenant ด้วยตนเอง

#### Checkpoint

- Agent Publish สำเร็จด้วย `Authenticate with Microsoft` หรือมีหลักฐานว่า tenant บล็อกและผู้เรียนติดตาม Instructor demonstration แล้ว

#### Expected Output

- Agent เวอร์ชัน Published หรือบันทึกข้อจำกัด Environment ที่ส่งต่อผู้ดูแลได้

### Practice 3 เชื่อมต่อ Teams and Microsoft 365 Copilot

**Primary target:** เพิ่ม Channel สำหรับการทดลองส่วนตัวและยืนยันว่าเวอร์ชัน Published ตอบได้ตามขอบเขต

#### Steps

1. ทำต่อเมื่อ Agent Publish สำเร็จและผู้สอนอนุญาตเท่านั้น
2. เปิด `Channels`
3. เลือก `Teams and Microsoft 365 Copilot`
4. หากต้องการให้ Agent ใช้งานใน Microsoft 365 Copilot ให้ตรวจว่า `Make agent available in Microsoft 365 Copilot` ถูกเลือก
5. เลือก `Add channel`
6. เลือก `See agent in Teams` แล้วเพิ่ม Agent ให้โปรไฟล์ของตนเอง
7. เริ่มบทสนทนาใหม่ หากต้องทดสอบใน Microsoft 365 Copilot ให้พิมพ์ `@` แล้วเลือก Agent
8. ทดสอบคำถามจาก `TC-01` และคำสั่งสรุปจาก `TC-06` อีกครั้ง
9. เปรียบเทียบผลกับแผงทดสอบใน Copilot Studio
10. หยุดที่การทดลองของตนเอง ห้ามส่ง Agent เพื่อการอนุมัติทั้งองค์กรหรือแชร์วงกว้างในแบบฝึกหัดนี้

> **⚠️ Note:** Agent ต้อง Publish อย่างน้อยหนึ่งครั้งก่อนเชื่อมต่อ Channel หาก Agent ไม่ปรากฏ อาจเกิดจากการอนุมัติหรือ Teams policy ให้บันทึกสถานะและแจ้งผู้ดูแล

#### Checkpoint

- ผู้เรียนเรียก Agent เวอร์ชัน Published ในโปรไฟล์ของตนเองได้ หรืออธิบายข้อจำกัดของ tenant จากหลักฐานที่บันทึกไว้

#### Expected Output

- Agent ที่ผ่านการตรวจความพร้อมและผลทดสอบหลัง Publish อย่างน้อยสองกรณี

## Optional Extension

ให้เพื่อนหนึ่งคนอ่านคำอธิบาย Agent และชุดผลทดสอบ แล้วเสนอการปรับปรุงหนึ่งข้อ โดยไม่แชร์ Agent หรือข้อมูลเกินสิทธิ์ที่ผู้สอนกำหนด

## Summary

เราได้ตรวจ Agent ทั้งเส้นทางสำเร็จและกรณีเสี่ยง ตั้ง Authentication และทดลอง Publish ตามสิทธิ์ของ Environment ผลลัพธ์สุดท้ายคือ Prototype ที่มีหลักฐานว่าทำอะไรได้ มีข้อจำกัดอะไร และต้องให้ผู้ดูแลช่วยส่วนใด

[แบบฝึกหัดก่อนหน้า](./exercise-03-add-agent-flow) | [กลับหน้าหลัก](/)
