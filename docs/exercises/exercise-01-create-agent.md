---
title: แบบฝึกหัดที่ 1 · สร้าง Agent ตัวแรก
description: กำหนดขอบเขต Instructions และทดสอบ ttb Service Request Assistant
---

# แบบฝึกหัดที่ 1 สร้าง ttb Service Request Assistant

## Exercise Overview

เราจะเริ่มจากงานน่าเบื่อที่ต้องรับคำขอบริการซ้ำ ๆ แล้วเปลี่ยนโจทย์นั้นเป็น Agent ตัวแรกใน Microsoft Copilot Studio เมื่อจบแบบฝึกหัด เราจะมี Agent ที่มีชื่อ ขอบเขต และ Instructions พร้อมสำหรับเพิ่มข้อมูลอ้างอิงในแบบฝึกหัดถัดไป

> **License:** ต้องมีบัญชีที่สร้างและทดสอบ Agent ใน Microsoft Copilot Studio ได้ หากองค์กรปิดการสร้าง Agent ด้วยภาษาธรรมชาติ ให้ใช้ `Create blank agent` ตามขั้นตอนสำรอง

## Prerequisites

- เข้า [Microsoft Copilot Studio](https://copilotstudio.microsoft.com) ได้
- เลือก Developer หรือ Trial Environment ที่ผู้สอนกำหนด
- ใช้เฉพาะข้อมูลสมมติในแบบฝึกหัดนี้

## Scenario 1 งานรับคำขอบริการที่ทำซ้ำทุกวัน

พนักงานต้องอ่านคำขอบริการจากหลายทีม ถามข้อมูลที่ขาด และสรุปเรื่องเพื่อส่งต่อ เราจะสร้าง Agent ช่วยตอบคำถามเบื้องต้นและเตรียมสรุป โดยไม่ตัดสินใจอนุมัติแทนเจ้าหน้าที่

### Practice 1 กำหนดงานน่าเบื่อและขอบเขต

**Primary target:** ระบุงานซ้ำหนึ่งงานและกำหนดผลลัพธ์ที่ Agent ควรช่วยสร้างได้อย่างชัดเจน

#### Steps

1. อ่านสถานการณ์ด้านบน แล้วเขียนงานน่าเบื่อหนึ่งประโยค เช่น `ต้องถามข้อมูลเดิมซ้ำก่อนส่งคำขอบริการให้ทีมที่เกี่ยวข้อง`
2. กำหนดผู้ใช้หลักเป็น `พนักงานที่ต้องการแจ้งคำขอบริการภายใน`
3. กำหนดผลลัพธ์เป็น `คำตอบจากคู่มือที่อนุมัติแล้ว หรือสรุปคำขอบริการที่พร้อมให้เจ้าหน้าที่ตรวจ`
4. กำหนดสิ่งที่ Agent ห้ามทำ ได้แก่ อนุมัติคำขอ เปลี่ยนสิทธิ์ระบบ เปิดเผยข้อมูลส่วนบุคคล หรืออ้างว่าเนื้อหาจำลองเป็นนโยบายจริง

#### Checkpoint

- อธิบายได้ใน 30 วินาทีว่า Agent ช่วยใคร ทำงานอะไร และไม่ทำอะไร

#### Expected Output

- ขอบเขต Agent หนึ่งย่อหน้าที่ใช้ต่อในการสร้าง Agent

### Practice 2 สร้าง Agent ด้วยภาษาธรรมชาติ

**Primary target:** สร้าง Agent ตั้งต้นจากคำอธิบายภาษาธรรมชาติและตั้งชื่อให้แยกจาก Agent ของผู้เรียนคนอื่น

#### Steps

1. เปิด Copilot Studio และตรวจสอบ Environment ที่มุมบนของหน้าให้ตรงกับที่ผู้สอนกำหนด
2. ไปที่ `Home` หรือ `Agents` แล้วเลือกช่องสำหรับอธิบาย Agent ที่ต้องการสร้าง
3. วางข้อความต่อไปนี้

   ```text
   Create an internal service request assistant for a fictional ttb training scenario.
   It should answer questions from approved training knowledge, ask for missing request details,
   and prepare a service request summary for human review. It must not approve requests,
   expose personal data, or claim that training content is an official ttb policy.
   ```

4. ตรวจรายละเอียดที่ระบบเสนอ แล้วเลือก `Create`
5. ตั้งชื่อ Agent ว่า

   ```text
   ttb Service Request Assistant [ชื่อเล่น]
   ```

6. รอจน Agent สร้างเสร็จและเปิดหน้าแก้ไขได้

> **⚠️ Note:** หากไม่เห็นช่องสร้างด้วยภาษาธรรมชาติ ให้เลือก `Create blank agent` ตั้งชื่อเดียวกัน แล้วทำ Practice 3 ต่อได้ทันที ความสามารถนี้อาจถูกปิดโดยนโยบายองค์กรหรือข้อจำกัดของ Cloud

#### Checkpoint

- เห็น Agent ชื่อ `ttb Service Request Assistant [ชื่อเล่น]` ใน Environment ที่ถูกต้อง

#### Expected Output

- Agent ตั้งต้นหนึ่งตัวที่ผู้เรียนเป็นเจ้าของ

### Practice 3 ตั้ง Instructions และ Smoke test

**Primary target:** กำหนดพฤติกรรมหลักของ Agent และพิสูจน์ว่า Agent รักษาขอบเขตก่อนเพิ่ม Knowledge

#### Steps

1. เปิดส่วน `Instructions` ของ Agent แล้วเลือก `Edit`
2. แทนที่หรือปรับ Instructions ให้มีข้อความต่อไปนี้

   ```text
   You are ttb Service Request Assistant for a fictional training scenario.

   Goals:
   - Help internal employees understand the simulated service request process.
   - Ask for missing request type, issue summary, and business impact.
   - Prepare a concise request summary for human review when the user asks.

   Rules:
   - Use only approved knowledge added to this agent for process or policy answers.
   - Never claim that training content is an official ttb policy or SLA.
   - Never approve a request, change access, or promise completion.
   - Do not request or repeat passwords, access tokens, customer data, national IDs, account numbers, or other sensitive data.
   - For unrelated requests, explain the scope and ask the user to rephrase.
   ```

3. เลือก `Save`
4. เปิด `Test your agent` หรือแผงทดสอบ แล้วเริ่มบทสนทนาใหม่
5. ส่งคำถามทดสอบ

   ```text
   ช่วยแจ้งขั้นตอนขอสิทธิ์เข้าใช้ระบบ Customer Demo Portal ให้หน่อย
   ```

6. สังเกตว่า Agent อาจยังไม่มีข้อมูลขั้นตอนที่เชื่อถือได้ เพราะเรายังไม่ได้เพิ่ม Knowledge
7. ส่งคำถามนอกขอบเขต

   ```text
   ช่วยแนะนำร้านอาหารใกล้ออฟฟิศให้หน่อย
   ```

8. ตรวจว่า Agent ชี้แจงขอบเขตและไม่สร้างคำตอบเกี่ยวกับงานที่ไม่เกี่ยวข้อง

#### Checkpoint

- Agent ไม่แต่งขั้นตอนบริการที่ยังไม่มี Knowledge และจัดการคำถามนอกขอบเขตได้เหมาะสม

#### Expected Output

- Agent พร้อม Instructions และผล Smoke test อย่างน้อยสองกรณี

## Optional Extension

ปรับคำอธิบาย Agent และ Suggested prompts ให้เพื่อนร่วมชั้นเข้าใจขอบเขตได้ทันที โดยยังไม่เพิ่มความสามารถใหม่

## Summary

เราเปลี่ยนงานน่าเบื่อให้เป็น Agent ที่มีขอบเขตชัดเจน ขั้นต่อไปคือเพิ่มคู่มือจำลองเป็น Knowledge เพื่อให้ Agent ตอบจากแหล่งข้อมูลที่ตรวจสอบได้

[กลับหน้าหลัก](/) | [แบบฝึกหัดถัดไป เพิ่ม Knowledge](./exercise-02-add-knowledge)
