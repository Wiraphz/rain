# RXIN · Student Portfolio

เว็บไซต์พอร์ตโฟลิโอสำหรับสมัครคณะสัตวแพทยศาสตร์ มหาวิทยาลัยมหิดล
โรงเรียนบ้านบึงอุตสาหกรรมนุเคราะห์

## เปิดเว็บไซต์
ดับเบิลคลิก `dist/index.html` หรือรัน `node server.cjs` แล้วเปิด http://127.0.0.1:4173
เว็บเป็น HTML/CSS/JavaScript ไม่ต้องติดตั้งแพ็กเกจ

## แก้ไขข้อมูล
แก้ `dist/content.js` เพื่อใส่ชื่อ ข้อมูลส่วนตัว คำนำ และแรงบันดาลใจ
ข้อความคำนำและแรงบันดาลใจเป็นฉบับร่าง ควรปรับให้ตรงกับประสบการณ์จริง
ไม่มีการสมมติคะแนนหรือเกียรติบัตร

วางรูปใน `dist/assets/` แล้วระบุใน content.js:
- portrait: 'assets/portrait.jpg'
- schoolLogo: 'assets/school-logo.png'
- certificates: [{ title: 'ชื่อเกียรติบัตร', issuer: 'หน่วยงาน', year: '2569', image: 'assets/certificate-1.jpg' }]

ภาพปกและภาพส่วนตัวใช้ `dist/assets/CTK.jpg` ตั้งค่าที่ portrait ใน content.js
ตราโรงเรียนใช้ `dist/assets/BUU.jpg` และตรามหิดลใช้ `dist/assets/MU.png`
ตั้งค่าโลโก้ได้ที่ schoolLogo และ universityLogo ใน content.js
เมื่อเพิ่มเกียรติบัตร จะกดเปิดภาพขนาดใหญ่ได้และกด Escape เพื่อปิด

## หน้าเว็บ
- dist/index.html — หน้าแรกและคำนำ
- dist/profile.html — ข้อมูลส่วนตัวและเป้าหมาย
- dist/certificates.html — เกียรติบัตร
- dist/thanks.html — ขอบคุณ

ไฟล์ร่วม: styles.css, app.js, content.js
Google Fonts ใช้อินเทอร์เน็ต หากออฟไลน์จะใช้ฟอนต์ในเครื่องแทน
ใช้สีน้ำเงินที่ปรับสำหรับงานออกแบบนี้ โดยอิงสีประจำมหาวิทยาลัย:
https://museum.li.mahidol.ac.th/mahidol-name/
เว็บไซต์นี้เป็นพอร์ตของผู้สมัคร ไม่ใช่เว็บไซต์อย่างเป็นทางการของมหาวิทยาลัย

ภาพสุนัขเดิม (เก็บไว้เป็นไฟล์สำรอง ไม่ได้แสดงบนปก): Faber Leonardo / Unsplash
https://unsplash.com/photos/a-close-up-of-a-dog-with-a-white-background-EVJZJ7_6CLY
ใช้ตาม Unsplash License
