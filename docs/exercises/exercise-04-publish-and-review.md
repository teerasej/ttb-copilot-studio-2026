---
title: แบบฝึกหัดที่ 4 · ทดสอบและ Publish
description: ตรวจ Authentication แล้วทดลอง Customer Follow-up Assistant เวอร์ชัน Published
---

# แบบฝึกหัดที่ 4 ทดสอบ Responsible AI และ Publish

เราจะตรวจ `Customer Follow-up Assistant [ชื่อเล่น]` เหมือนตรวจเอกสารก่อนส่งให้ลูกค้า: ทดสอบข้อมูลที่ขาด ข้อมูลอ่อนไหว การเรียก Tool และขอบเขตการทำงานก่อน Publish จากนั้นจึงทดลอง Agent ใน Teams and Microsoft 365 Copilot เมื่อสิทธิ์และนโยบายองค์กรพร้อม

> **License:** การ Publish ต้องมี license และ capacity ตามเงื่อนไขของ Environment การเพิ่ม Channel ยังขึ้นกับนโยบาย Teams และการอนุมัติของผู้ดูแล หากระบบไม่พร้อมให้ติดตาม Instructor demonstration

## Prerequisites

- ทำ [แบบฝึกหัดที่ 3](./exercise-03-add-agent-flow) แล้ว
- เปิด [ชุดทดสอบ Agent](/resources/service-request-test-cases)
- เปิด [Agent Readiness Checklist](/resources/agent-readiness-checklist)
- ผู้สอนยืนยันว่าจะใช้เส้นทาง Hands-on หรือ Instructor demonstration

---

## Scenario ตรวจร่างก่อนเปิดให้ใช้งาน

Agent ต้องถามข้อมูลที่ขาด เรียก Tool เมื่อข้อมูลครบ ปฏิเสธข้อมูลอ่อนไหว และไม่อ้างว่าส่ง email หรือยืนยันผลสินเชื่อ

### Practice 1 ตรวจ Authentication และ Publish

**Primary target:** Publish Agent เวอร์ชันที่ผ่านการทดสอบด้วย Authentication ที่องค์กรอนุญาต


1. เปิด `Settings` > `Security` > `Authentication`
2. เลือกวิธี Authentication ที่ผู้สอนหรือผู้ดูแลกำหนด แล้วเลือก `Save`
3. เลือก `Publish` และยืนยันการ Publish
4. หาก Publish ไม่สำเร็จ ให้บันทึก Error และข้อจำกัด เช่น license, capacity หรือ Data policy แล้วติดตาม Instructor demonstration

> **⚠️ Note:** ห้ามลดระดับ Authentication หรือเปลี่ยนนโยบาย Environment เพื่อหลีกเลี่ยงข้อจำกัด

#### Checkpoint

- Agent Publish สำเร็จด้วย Authentication ที่กำหนด หรือมีหลักฐานว่า Environment บล็อกขั้นตอนใด

### Practice 2 ทดลองใน Teams and Microsoft 365 Copilot

**Primary target:** เปิด Agent เวอร์ชัน Published ในโปรไฟล์ของผู้สร้างและทดสอบ Tool อีกครั้ง

1. ทำต่อเมื่อ Agent Publish สำเร็จและผู้สอนอนุญาตเท่านั้น
2. เปิด `Channels`
3. เลือก `Teams and Microsoft 365 Copilot`
4. ตรวจตัวเลือกที่ผู้สอนกำหนด แล้วเลือก `Add channel`
5. เปิด Agent ในโปรไฟล์ของตนเอง
6. เปรียบเทียบร่างกับผลจาก `Test your agent`
7. หยุดที่การทดลองส่วนตัว ห้ามส่ง Agent เพื่อการอนุมัติทั้งองค์กรหรือแชร์วงกว้าง

#### Checkpoint

- ผู้เรียนเรียก Agent เวอร์ชัน Published และได้รับ `FollowUpDraft` หรือบันทึกข้อจำกัดของ Environment ได้ชัดเจน

## Summary

เราได้ตรวจ Customer Follow-up Assistant ตั้งแต่เส้นทางปกติถึงกรณีเสี่ยง แล้ว Publish ตามสิทธิ์ที่ได้รับ ผลลัพธ์คือ Prototype ที่ช่วยเตรียมร่างงานซ้ำโดยยังคงการ Review และการตัดสินใจไว้กับพนักงาน

[แบบฝึกหัดก่อนหน้า](./exercise-03-add-agent-flow) | [กลับหน้าหลัก](/)
