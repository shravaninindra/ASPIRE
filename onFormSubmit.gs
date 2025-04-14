function onFormSubmit(event) {

  record_array = []

  var form = FormApp.openById('1vTzOuMGzUmyGSXUGw0w1KZbNz2-1vI-yMDv27OAEsxg'); // Form ID
  var formResponses = form.getResponses();
  var formCount = formResponses.length;

  var formResponse = formResponses[formCount - 1];
  var itemResponses = formResponse.getItemResponses();

  for (var j = 0; j < itemResponses.length; j++) {
  var itemResponse = itemResponses[j];
    var title = itemResponse.getItem().getTitle();
    var answer = itemResponse.getResponse();

    //Logger.log(title);
    record_array.push(answer);
  }

// Pushing data onto the Landing Page Sheet
if(record_array[2]=='Education Outreach Events'){
  AddMainRecord(record_array[0], record_array[1], record_array[4], record_array[3]);
}   
else {
  AddMainRecord(record_array[0], record_array[1], record_array[2], record_array[3]);
}

if(record_array[2]=='Publications'){
  //Logger.log("Inside if")
  AddPublicationRecord(record_array[1], record_array[5], record_array[6], record_array[7],record_array[8], record_array[9], record_array[10], record_array[11], record_array[12], record_array[13], record_array[14], record_array[15], record_array[16], record_array[17], record_array[18], record_array[19], record_array[20], record_array[21], record_array[22], record_array[23], record_array[24], record_array[25],record_array[26], record_array[27], record_array[28], record_array[29],record_array[30],record_array[4]);
} 
else if(record_array[2]=='Dissemination Effort'){
  //Logger.log("Inside else")
  AddDisseminationRecord(record_array[1], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10], record_array[11], record_array[12],record_array[13], record_array[14], record_array[15], record_array[16],record_array[17],record_array[18], record_array[19], record_array[20], record_array[21],record_array[22],record_array[4]);
}
else if(record_array[4]=='ERC Sponsored Workshops, Short Courses, and Webinars'){
  AddERCRecord(record_array[1], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10],record_array[11],record_array[5]);
}
else if(record_array[4]=='ERC Sponsored Educational Outreach Events For K-12'){
  AddERCK12Record(record_array[1], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10],record_array[11],record_array[5]);
}
else if(record_array[4]=='ERC Sponsored Educational Outreach Events for Community Colleges'){
  AddERCCommunityRecord(record_array[1], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10],record_array[11],record_array[5]);
}
else if(record_array[4]=='ERC Sponsored Educational Outreach Events for Non-ERC Undergraduate Students') {
  AddERCUndergradRecord(record_array[1], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10],record_array[11],record_array[5]);
}
else if(record_array[2]=='Impact on Curriculum'){
  AddImpactOnCurriculum(record_array[1], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10], record_array[11], record_array[12],record_array[13], record_array[14], record_array[15], record_array[16],record_array[17],record_array[18],record_array[19],record_array[20],record_array[4]);
}
else if(record_array[2]=='Degrees and Jobs'){
  AddDegreesAndJobs(record_array[1], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10], record_array[11],record_array[12],record_array[4]);
}
else if(record_array[2]=='Awards and Recognition'){
  AddAwardsAndRecognition(record_array[1], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10], record_array[11], record_array[12],record_array[13],record_array[4]);
}
else if(record_array[2]=='Intellectual Property'){
  AddIntellectualProperty(record_array[1],record_array[5], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10], record_array[11],record_array[12],record_array[4]);
}
else if(record_array[2]=='Technology Transfer'){
  AddTechnologyTransfer(record_array[1], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9],record_array[10],record_array[4]);
}
else if (record_array[2]=='Spin Off Companies'){
  AddSpinOffCompanies(record_array[1], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9], record_array[10], record_array[11], record_array[12],record_array[13], record_array[14], record_array[15], record_array[16],record_array[17],record_array[18],record_array[19],record_array[20], record_array[21], record_array[22],record_array[23],record_array[4]);
}
else{
  if(record_array[6]=='' && record_array[7]=='' && record_array[8]=='' && record_array[9]=='' && record_array[10]=='' && record_array[11]=='' && record_array[12]=='')
  {AddPersonnel(record_array[4], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9],record_array[10], record_array[11], record_array[12],'R');}
  else{AddPersonnel(record_array[4], record_array[5], record_array[6], record_array[7], record_array[8], record_array[9],record_array[10], record_array[11], record_array[12],'U');}
}
}

function AddMainRecord(name, email_id, form, additional_comments) {
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Landing Page");
  dataSheet.appendRow([name, email_id, form, additional_comments]);
}

function AddPublicationRecord(email_id,pub_result, appeared_in, multiple_authors, erc_stud, industry, eng_disciplines, eng_non_fields, multiple_inst, title, author_1, author_2, author_3, author_4, author_5, author_6,author_7,author_8,author_9,author_10, month_year, page_num, volume, issue, url, abstract, additional_comments,flag){
var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Publication");
  dataSheet.appendRow([email_id,pub_result, appeared_in, multiple_authors, erc_stud, industry, eng_disciplines, eng_non_fields, multiple_inst, title, author_1, author_2, author_3, author_4, author_5, author_6,author_7,author_8,author_9,author_10, month_year, page_num, volume, issue, url, abstract, additional_comments,flag]);
}

function AddDisseminationRecord(email_id, start_date, end_date, event_name, event_type, title, number_participants, presenter_1,presenter_2,presenter_3,presenter_4,presenter_5,presenter_6,presenter_7,presenter_8,presenter_9,presenter_10, disse_abstract,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Dissemination Effort");
  dataSheet.appendRow([email_id,start_date, end_date, event_name, event_type, title, number_participants, presenter_1,presenter_2,presenter_3,presenter_4,presenter_5,presenter_6,presenter_7,presenter_8,presenter_9,presenter_10,disse_abstract,additional_comments,flag]);
}

function AddERCRecord(email_id, event_date, innovation, event_title, event_location, attendees,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("ERC");
  dataSheet.appendRow([email_id,event_date, innovation, event_title, event_location, attendees,additional_comments,flag]);
}

function AddERCK12Record(email_id, event_date, event_title, event_location,stud_attendees,teach_attendees,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("ERC K-12");
  dataSheet.appendRow([email_id,event_date, event_title, event_location,stud_attendees,teach_attendees, additional_comments,flag]);
}

function AddERCCommunityRecord(email_id, event_date, event_title, event_location,comm_stud_attendees,comm_teach_attendees,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("ERC Community");
  dataSheet.appendRow([email_id,event_date, event_title, event_location,comm_stud_attendees,comm_teach_attendees, additional_comments,flag]);
}

function AddERCUndergradRecord(email_id, event_date, event_title, event_location,ug_stud_attendees,ug_teach_attendees,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("ERC Undergrad");
  dataSheet.appendRow([email_id,event_date, event_title, event_location,ug_stud_attendees,ug_teach_attendees, additional_comments,flag]);
}

function AddImpactOnCurriculum(email_id,course_status, campus, course_level, course_id,course_title, eng_focus, multidisc,team,erc_inst,instructor_1,instructor_2,instructor_3,instructor_4,instructor_5,aspire_content,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Impact on Curriculum");
  dataSheet.appendRow([email_id,course_status, campus, course_level,course_id,course_title, eng_focus, multidisc,team,erc_inst,instructor_1,instructor_2,instructor_3,instructor_4,instructor_5,aspire_content,additional_comments,flag]);
}

function AddDegreesAndJobs(email_id,stud_name,degree_type,industry,other,emp_name,position,status,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Degrees and Jobs");
  dataSheet.appendRow([email_id,stud_name,degree_type,industry,other,emp_name,position,status,additional_comments,flag]);
}

function AddAwardsAndRecognition(email_id,name_1,name_2,name_3,name_4,name_5,award,date_awarded,link,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Awards and Recognition");
  dataSheet.appendRow([email_id,name_1,name_2,name_3,name_4,name_5,award,date_awarded,link,additional_comments,flag]);
}

function AddIntellectualProperty(email_id,type,ip_license,title,category,tech_descr,owner,year,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Intellectual Property");
  dataSheet.appendRow([email_id,type,ip_license,title,category,tech_descr,owner,year,additional_comments,flag]);
}

function AddTechnologyTransfer(email_id,company,tech_descr,impact,year,company_use,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Technology Transfer");
  dataSheet.appendRow([email_id,company,tech_descr,impact,year,company_use,additional_comments,flag]);
}

function AddSpinOffCompanies(email_id,num_employees,name,year,prefix_c,first_name_c,mid_init_c,last_name_c,suffix_c,emaild_id_c,prefix_p,first_name_p,mid_init_p,last_name_p,suffix_p,emaild_id_p,erc_rel,fund_status,technology,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Spin Off Companies");
  dataSheet.appendRow([email_id,num_employees,name,year,prefix_c,first_name_c,mid_init_c,last_name_c,suffix_c,emaild_id_c,prefix_p,first_name_p,mid_init_p,last_name_p,suffix_p,emaild_id_p,erc_rel,fund_status,technology,additional_comments,flag]);
}

function AddPersonnel(name,email_id,campus,dept,job_or_degree,roles,thrusts,projects,additional_comments,flag){
  var url = 'https://docs.google.com/spreadsheets/d/1bLcMCC0QtReKw7TyNlaKq_yBmi2fRLvSpDpe8ch801E/edit#gid=0';   //URL OF GOOGLE SHEET;
  var ss= SpreadsheetApp.openByUrl(url);
  var dataSheet = ss.getSheetByName("Personnel");
  dataSheet.appendRow([name,email_id,campus,dept,job_or_degree,roles,thrusts,projects,additional_comments,flag]);
}

function useDataRange() {
    var rows = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    Logger.log(rows);
  }

