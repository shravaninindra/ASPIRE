# ASPIRE
# Google Form Automation Script for Data Logging

This repository contains a Google Apps Script project that  automates the handling of form submissions for various categories. When a user submits a response through the Google Form, the script extracts relevant data and appends it to the appropriate sheet in a Google Spreadsheet based on the type of submission. These records are then 

## Features

- Handles multiple form response categories
- Appends data to different Google Sheets tabs
- Supports extensive form structures like Publications, Events, Awards, Spin-offs, etc.

---

## 📁 Repository Structure

| File Name | Description | Link |
|----------|-------------|------|
| [`Code.gs`](<INSERT_LINK_HERE>) | Main script that listens to form submissions and routes data. |
| [`AddMainRecord`](<INSERT_LINK_HERE>) | Handles logging to the "Landing Page" sheet. |
| [`AddPublicationRecord`](<INSERT_LINK_HERE>) | Handles publication entries. |
| [`AddDisseminationRecord`](<INSERT_LINK_HERE>) | Logs dissemination efforts. |
| [`AddERCRecord`](<INSERT_LINK_HERE>) | Handles ERC Workshops and Webinars. |
| [`AddERCK12Record`](<INSERT_LINK_HERE>) | Records K-12 outreach events. |
| [`AddERCCommunityRecord`](<INSERT_LINK_HERE>) | Logs events for community colleges. |
| [`AddERCUndergradRecord`](<INSERT_LINK_HERE>) | Records outreach for non-ERC undergrad students. |
| [`AddImpactOnCurriculum`](<INSERT_LINK_HERE>) | Logs curriculum development data. |
| [`AddDegreesAndJobs`](<INSERT_LINK_HERE>) | Captures student degrees and employment data. |
| [`AddAwardsAndRecognition`](<INSERT_LINK_HERE>) | Logs awards and recognitions. |
| [`AddIntellectualProperty`](<INSERT_LINK_HERE>) | Records IP and licensing details. |
| [`AddTechnologyTransfer`](<INSERT_LINK_HERE>) | Captures technology transfer data. |
| [`AddSpinOffCompanies`](<INSERT_LINK_HERE>) | Logs data on startup companies. |
| [`AddPersonnel`](<INSERT_LINK_HERE>) | Captures personnel-related data. |
| [`useDataRange`](<INSERT_LINK_HERE>) | Debug function to log spreadsheet data. |

---
