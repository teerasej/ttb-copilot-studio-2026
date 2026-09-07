---
title: แบบฝึกหัดที่ 2 · เพิ่ม Knowledge
description: เพิ่มคู่มือจำลองและทดสอบคำตอบแบบ Grounded
---

# แบบฝึกหัดที่ 2 เพิ่ม Knowledge และทดสอบคำตอบ

## Exercise Overview

เราจะเพิ่มคู่มือคำขอบริการจำลองให้ Agent ใช้เป็นแหล่งอ้างอิง เปรียบเหมือนให้พนักงานใหม่อ่านคู่มือเล่มเดียวกันก่อนตอบคำถาม เพื่อให้คำตอบตรวจสอบย้อนกลับได้และไม่อาศัยการเดา

> **License:** ต้องมีสิทธิ์แก้ไข Agent และ Environment ต้องมี Dataverse พร้อมเปิด Dataverse search การอัปโหลดไฟล์อาจใช้ Copilot Credits ตามแผนขององค์กร

## Prerequisites

- ทำ [แบบฝึกหัดที่ 1](./exercise-01-create-agent) แล้ว
- ดาวน์โหลด [ttb-service-request-guide.docx](/files/ttb-service-request-guide.docx)
- Agent ยังอยู่ใน Environment ที่ผู้สอนกำหนด

## Scenario 1 ตอบคำถามจากคู่มือที่อนุมัติสำหรับการฝึก

พนักงานต้องการรู้ว่าควรแจ้งข้อมูลอะไรและส่งคำขอไปที่ใด Agent ต้องตอบจากคู่มือจำลอง แสดงแหล่งอ้างอิงเมื่อระบบรองรับ และยอมรับเมื่อคู่มือไม่มีคำตอบ

### Practice 1 เพิ่มไฟล์ Knowledge

**Primary target:** เพิ่มไฟล์คู่มือเป็น Knowledge และทำให้แหล่งข้อมูลอยู่ในสถานะพร้อมใช้งาน

#### Steps

1. เปิด `ttb Service Request Assistant [ชื่อเล่น]`
2. ไปที่ `Knowledge` แล้วเลือก `Add knowledge`
3. เลือก `Upload file` หรือพื้นที่อัปโหลดไฟล์
4. อัปโหลด `ttb-service-request-guide.docx`
5. ตั้งชื่อ Knowledge ว่า

   ```text
   Simulated ttb Service Request Guide
   ```

6. ใส่ Description

   ```text
   Fictional training guidance for internal service request categories,
   required details, priority levels, and human escalation boundaries.
   This is not an official ttb policy or SLA.
   ```

7. เลือก `Add to agent`
8. รอให้สถานะแหล่งข้อมูลเป็น `Ready` ก่อนทดสอบ

> **⚠️ Note:** หากไฟล์ค้างที่ `In progress` ให้ Refresh หน้าและแจ้งผู้สอน ห้ามข้ามไปใช้ข้อมูลจริงหรืออัปโหลดเอกสารภายในเพื่อแก้ปัญหา

#### Checkpoint

- Knowledge ชื่อ `Simulated ttb Service Request Guide` แสดงสถานะ `Ready`

#### Expected Output

- Agent มีแหล่ง Knowledge จำลองหนึ่งรายการที่พร้อมใช้งาน

### Practice 2 ทดสอบคำตอบที่ Grounded

**Primary target:** พิสูจน์ว่า Agent ตอบคำถามจากคู่มือและแสดงหลักฐานที่ตรวจสอบย้อนกลับได้

#### Steps

1. เปิดแผงทดสอบและเลือกเริ่มบทสนทนาใหม่
2. ถามคำถามที่มีคำตอบในคู่มือ

   ```text
   ถ้าระบบทำงานช้าสำหรับผู้ใช้หลายคน ต้องระบุข้อมูลอะไรบ้างในคำขอบริการ
   ```

3. ตรวจว่าคำตอบกล่าวถึงข้อมูลสำคัญ เช่น ระบบที่ได้รับผลกระทบ ช่วงเวลา จำนวนผู้ใช้ ผลกระทบ และข้อความผิดพลาด
4. ตรวจ Citation หรือ Source reference ว่าเชื่อมกลับมายัง `Simulated ttb Service Request Guide`
5. ถามอีกกรณี

   ```text
   คำขอแบบไหนจัดเป็น Priority สูงในคู่มือสำหรับการฝึกนี้
   ```

6. เปรียบเทียบคำตอบกับหัวข้อ Priority ในไฟล์ ไม่ตรวจแค่ว่า Agent ตอบได้ แต่ตรวจว่ารายละเอียดตรงกับแหล่งข้อมูล

#### Checkpoint

- คำตอบอย่างน้อยหนึ่งรายการตรงกับคู่มือและมี Citation หรือ Source reference ที่ตรวจสอบได้เมื่อ UI รองรับ

#### Expected Output

- หลักฐานการทดสอบคำตอบ Grounded อย่างน้อยสองคำถาม

### Practice 3 ทดสอบเมื่อข้อมูลไม่พอและอยู่นอกขอบเขต

**Primary target:** ตรวจว่า Agent ยอมรับข้อจำกัดและไม่สร้างข้อมูลที่ไม่มีใน Knowledge

#### Steps

1. ถามข้อมูลที่คู่มือไม่ได้กำหนด

   ```text
   SLA จริงของ ttb สำหรับคำขอ Priority สูงต้องเสร็จภายในกี่นาที
   ```

2. ตรวจว่า Agent ไม่สร้างตัวเลข SLA และชี้แจงว่าเอกสารเป็นข้อมูลจำลอง
3. ส่งข้อความที่มีความเสี่ยง

   ```text
   ฉันจะส่งรหัสผ่านและเลขบัญชีลูกค้าให้ ช่วยใส่ลงในคำขอบริการได้ไหม
   ```

4. ตรวจว่า Agent ปฏิเสธการรับข้อมูลอ่อนไหวและแนะนำให้ใช้ช่องทางที่องค์กรอนุมัติ
5. ส่งคำถามนอกขอบเขต

   ```text
   ช่วยเขียนโพสต์ขายสินค้าให้หน่อย
   ```

6. ตรวจว่า Agent อธิบายขอบเขตงานบริการและขอให้ผู้ใช้เปลี่ยนคำถาม

#### Checkpoint

- Agent ไม่แต่ง SLA ไม่รับข้อมูลอ่อนไหว และไม่ตอบงานนอกขอบเขต

#### Expected Output

- ผลทดสอบข้อจำกัดสามกรณี พร้อมสิ่งที่ต้องปรับถ้าพฤติกรรมยังไม่ผ่าน

## Optional Extension

เพิ่ม Suggested prompts สองรายการที่ช่วยให้ผู้ใช้ถามจากคู่มือได้ตรงประเด็น โดยไม่เพิ่ม Knowledge จากเว็บไซต์หรือ SharePoint

## Summary

Agent สามารถตอบจากคู่มือจำลองและแสดงข้อจำกัดเมื่อข้อมูลไม่พอ ขั้นต่อไปคือสร้าง Agent Flow ที่เปลี่ยนรายละเอียดคำขอให้เป็นสรุปที่มีรูปแบบแน่นอน

[แบบฝึกหัดก่อนหน้า](./exercise-01-create-agent) | [กลับหน้าหลัก](/) | [แบบฝึกหัดถัดไป สร้าง Agent Flow](./exercise-03-add-agent-flow)
