## 📌 Project Title: Dmoney API Testing Project

### 📝 Project Summary

This repository presents a professional-grade API testing project for the **Dmoney REST API**, focusing on financial transaction operations like deposits, transfers, withdrawals, and balance inquiries. It includes a complete suite of manual and automated test cases, detailed issue reports, and documentation to demonstrate best practices in API quality assurance.

---

### 🔧 Technologies & Tools Used

| Tool                      | Purpose                                  |
| ------------------------- | ---------------------------------------- |
| **Postman**               | Manual API Testing                       |
| **Newman**                | Generate detailed test reports           |
| **htmlextra**             | Enhanced HTML reporting for test results |
| **Excel / Google Sheets** | Documentation of test cases and issues   |
| **Git & GitHub**          | Version control and portfolio hosting    |

---
### 📂 Documentation & Resources

| Resource                     | Link                                              |
| ---------------------------- | ------------------------------------------------- |
| 📋 Test Case File            | [DMoney_Test_cases](https://docs.google.com/spreadsheets/d/1FmtkGdyf_ERoKKhrQHKP2Vg_H0sGayX5iDgYN_EWads/edit?usp=sharing)                                 |
| 🐞 Bug/Improvement Report    | [Bug/Improvement Report](https://docs.google.com/spreadsheets/d/150HT1sCrYjQ12OCMcii4PLy7s30h-le7z3GZ1cUy0bU/edit?usp=sharing)                                 |
| 📬 Postman Collection        | [Link](https://api.postman.com/collections/42737134-ae6334fd-dd03-48a8-b595-697ff80aaa91?access_key=PMAT-01JXAGTXK57EFNYDXJEAD652YN)                      |
| 🌐 API Documentation         | [Link](https://documenter.getpostman.com/view/42737134/2sB2x3otTv)                                     |
| 📊 HTML Report               | [Link](https://mdrafsanmahmud.github.io/Dmoney-User-Integration-Testing/report.html)


---

### ✅ Key Features

* 30+ Functional, Boundary, and Negative Test Cases
* Both Manual & Automation test execution using Postman
* Enhanced HTML test reports
* Documented bug and improvement suggestions
* API documentation reference for better traceability

---
### ⚙️ How to Run This Project Locally

#### 1. 📥 Clone the repo

```bash
git clone https://github.com/MdRafsanMahmud/Dmoney-User-Integration-Testing.git
cd Dmoney-User-Integration-Testing
```

#### 2. 📦 Install dependencies

```bash
npm install newman-reporter-htmlextra
```

#### 3. 🧪 Run tests

```bash
npx newman run https://api.postman.com/collections/42737134-ae6334fd-dd03-48a8-b595-697ff80aaa91?access_key=PMAT-01JXAGTXK57EFNYDXJEAD652YN
```
#### 4. 📄 Generate HTML report

```bash
node .\report.js
```
> 📌 Prerequisites: Ensure you have [Node.js](https://nodejs.org/) installed and Newman globally added via `npm install -g newman newman-reporter-htmlextra`

   
---

### 📸 Screenshots
Here are some screenshots of the test execution and report UI.
![Screenshot_3](https://github.com/user-attachments/assets/c78434a3-1d63-4ec7-9b94-b47340c3ae41)
![Screenshot_4](https://github.com/user-attachments/assets/5c921ead-7983-4a60-8481-3ee86307f1ae)

---
### 🤝 Contributors

- **[Md Rafsan Mahmud](https://github.com/MdRafsanMahmud)** – Creator, QA Tester  
- **[Salman Rahman](https://github.com/salmansrabon)** – Reviewer / Contributor [LinkedIn](https://www.linkedin.com/in/kmsalmanrahman/)


---

### 👤 Author

**Md Rafsan Mahmud**
🔗 [LinkedIn](https://www.linkedin.com/in/mdrafsanmahmud/)
✉️ [Email](mailto:mdrafsanmahmud99@gmail.com)

---

### ⭐ Final Notes

This project highlights core strengths in:

* End-to-end RESTful API Testing
* Test Case Design & Execution
* Bug Reporting & Issue Management
* Automated API Workflows with Newman
* Quality Assurance Best Practices




