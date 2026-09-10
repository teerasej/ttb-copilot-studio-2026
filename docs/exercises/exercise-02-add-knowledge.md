---
title: แบบฝึกหัดที่ 2 · Knowledge และ RAG
description: สร้าง Loan Application Policy Assistant ที่ตอบจากเอกสารจำลอง
---

# แบบฝึกหัดที่ 2 สร้าง Loan Application Policy Assistant

เราจะสร้าง Agent ที่ตอบคำถามจากชุดแนวทางพิจารณาคำขอสินเชื่อจำลอง เปรียบเหมือนพนักงานใหม่ที่เปิดแฟ้มคู่มือก่อนตอบทุกครั้ง เพื่อให้เห็นว่า `Knowledge` และ RAG ช่วยให้คำตอบอ้างอิงแหล่งข้อมูลที่กำหนดได้อย่างไร

> **License:** ต้องมีสิทธิ์สร้าง Agent และเพิ่มไฟล์เป็น `Knowledge` ใน Microsoft Copilot Studio ต้องตรวจสอบก่อนเริ่มอบรมว่า Environment มี Dataverse และเปิด Dataverse search แล้ว

## Prerequisites

- เข้า Copilot Studio และ Environment ที่ผู้สอนกำหนดได้
- ดาวน์โหลดไฟล์ต่อไปนี้
  - [แนวทางข้อมูลประกอบการพิจารณา](/files/fictional-loan-consideration-guidelines.docx)
  - [รายการเอกสารประกอบ](/files/fictional-loan-required-documents.docx)
  - [แนวทาง Review และ Escalation](/files/fictional-loan-review-and-escalation.docx)
- ใช้เฉพาะข้อมูลผู้สมัครและเอกสารจำลอง
- แบบฝึกหัดนี้ไม่ต้องทำแบบฝึกหัดที่ 1 มาก่อน

---

## Scenario ค้นหาแนวทางก่อนส่งให้ผู้มีอำนาจพิจารณา

พนักงานต้องตอบว่าควรเตรียมข้อมูลอะไรและทำอย่างไรเมื่อเอกสารไม่ครบหรือขัดแย้งกัน Agent จะค้นจากชุดเอกสารสำหรับการฝึก แต่จะไม่อนุมัติ ปฏิเสธ ให้คะแนน หรือคาดการณ์ผลคำขอสินเชื่อ

### Practice 1 สร้าง Agent สำหรับตอบจาก Policy

**Primary target:** สร้าง Agent ที่มีขอบเขตการตอบจาก Knowledge และส่งต่อการตัดสินใจให้ผู้มีอำนาจ

1. ไปที่ `Home` หรือ `Agents` แล้วใส่ prompt ต่อไปนี้

   ```text
   You are a Loan Application Policy Assistant.
   Answer process and document questions only from Knowledge configured for this agent.
   Name the source used when possible. If information is missing or conflicting, explain what
   is missing and direct the case to an authorized human reviewer. Never approve, reject,
   score, rank, or predict a loan application. Never request real customer data.
   ```

2. เลือก `Create`
3. ตั้งชื่อ Agent ว่า

   ```text
   Loan Application Policy Assistant [ชื่อเล่น]
   ```

4. เลือก `Save`

#### Checkpoint

- Agent มีชื่อและขอบเขต Knowledge ครบถ้วน

### Practice 2 เพิ่มชุดเอกสารเป็น Knowledge

**Primary target:** เพิ่มเอกสารจำลองสามไฟล์เป็น Agent-level Knowledge ที่พร้อมค้นหา

1. เปิด Agent แล้วไปที่ `Knowledge`
2. เลือก `Add knowledge`
3. เลือกพื้นที่อัปโหลดไฟล์ แล้วเพิ่มเอกสารทั้งสามไฟล์
4. ตั้งชื่อแหล่ง Knowledge ให้สื่อความหมาย
   - `Loan Consideration Guidelines`
   - `Loan Required Documents`
   - `Loan Review and Escalation`
5. เลือก `Add to agent`
6. รอจนทั้งสามแหล่งแสดงสถานะพร้อมใช้งาน แล้วเลือก `Save`


#### Checkpoint

- หน้า `Knowledge` แสดงเอกสารจำลองสามแหล่งโดยไม่มีสถานะ Error

### Practice 3 ทดสอบคำตอบแบบ Grounded

**Primary target:** พิสูจน์ว่า Agent ตอบจากชุดเอกสารและหยุดก่อนตัดสินผลสินเชื่อ

1. เปิด `Test your agent` และเริ่มบทสนทนาใหม่ก่อนแต่ละกรณี
2. ถามเรื่องเอกสารของผู้สมัครรายได้ประจำ

   ```text
   ผู้สมัครที่มีรายได้ประจำควรเตรียมเอกสารจำลองอะไรบ้างตามคู่มือสำหรับการฝึกนี้
   ```

3. เปรียบเทียบคำตอบกับ `Loan Required Documents` และตรวจ Citation หรือ Source reference เมื่อ UI รองรับ
4. ถามกรณีข้อมูลขัดแย้ง

   ```text
   ถ้าข้อมูลรายได้ในเอกสารสองชุดไม่ตรงกัน พนักงานควรทำอย่างไร
   ```

5. ตรวจว่า Agent แนะนำให้บันทึกความขัดแย้ง ขอข้อมูลเพิ่มเติม และส่งให้ผู้มีอำนาจ Review
6. ถามให้ Agent ตัดสินใจ

   ```text
   จากข้อมูลเท่านี้ ลูกค้าจะได้รับอนุมัติสินเชื่อหรือไม่
   ```

7. ตรวจว่า Agent ไม่อนุมัติ ไม่ปฏิเสธ ไม่ให้คะแนน และไม่คาดการณ์ผล

#### Checkpoint

- Agent ตอบคำถามที่มีแหล่งข้อมูลได้ ระบุแนวทางเมื่อข้อมูลขัดแย้ง และสงวนการตัดสินใจไว้กับผู้มีอำนาจ

> **⚠️ Environment blocked:** หากอัปโหลดหรือประมวลผลไฟล์ไม่ได้ ให้บันทึกข้อความที่พบและใช้เอกสารกับตัวอย่างผลลัพธ์ที่ผู้สอนเตรียมไว้ ห้ามใช้ข้อมูลจริงหรือพยายามหลีกเลี่ยงนโยบาย Environment

## Summary

เราได้สร้าง Agent ที่ค้นคำตอบจากชุดเอกสารเฉพาะและรู้ว่าเมื่อใดควรส่งต่อให้คน เหมือนเจ้าหน้าที่ที่เปิดคู่มือก่อนให้ข้อมูล ขั้นต่อไปเราจะสร้าง Agent ที่เรียก Agent flow เพื่อจัดทำร่างข้อความติดตามลูกค้า

[แบบฝึกหัดก่อนหน้า](./exercise-01-create-agent) | [กลับหน้าหลัก](/) | [แบบฝึกหัดถัดไป Customer Follow-up Assistant](./exercise-03-add-agent-flow)
