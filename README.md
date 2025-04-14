# ASPIRE
# Google Form Automation Script for Data Logging

This repository contains three Google Apps Scripts that automates the handling of form submissions for various categories. Firstly relevant databases, users with necessary permissions and tables are created to store the details. When a user submits a response through the Google Form, the script extracts relevant data and appends it to the appropriate sheet in a Google Spreadsheet based on the type of submission. These records are then taken and entered into the respective tables on cloud using CloudSQL for further processing.

---

## 📁 Repository Structure

| File Name | Description | Link |
|----------|-------------|------|
| [`Code.gs`](<https://github.com/shravaninindra/ASPIRE/blob/main/create.gs>) | Handles creation of database, users, tables on MySQL instance. |
| [`onFormSubmit.gs`](<https://github.com/shravaninindra/ASPIRE/blob/main/onFormSubmit.gs>) | Handles form submissions and append it to relevant sheet tabs. |
| [`writeRecords.gs`](<https://github.com/shravaninindra/ASPIRE/blob/main/writeRecords.gs>) | Handles the logging of entries into respective tables in the database. |

---
