var instanceName= '#YOUR_INSTANCE';
var rootPwd= 'YOUR_PASSWORD';

var connectionName = 'YOUR_CONNECTION_NAME';
var user = 'YOUR_USER';
var userPwd = 'YOUR_PASSWORD';
var db = 'YOUR_DB';
var root = 'YOUR_ROOT_USER';
var instanceUrl = 'jdbc:google:mysql://' + connectionName;
var dbUrl = instanceUrl + '/' + db;

function writeManyRecords() {
  var pubrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Publication").getDataRange().getValues();
  var dissrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dissemination Effort").getDataRange().getValues();
  var ercrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ERC").getDataRange().getValues();
  var erckrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ERC K-12").getDataRange().getValues();
  var impactrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Impact on Curriculum").getDataRange().getValues();
  var degjobrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Degrees and Jobs").getDataRange().getValues();
  var awardrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Awards and Recognition").getDataRange().getValues();
  var iprows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Intellectual Property").getDataRange().getValues();
  var techrows = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Technology Transfer").getDataRange().getValues();
  Logger.log(pubrows);
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.setAutoCommit(false);

  var start = new Date();
  var stmt = conn.prepareStatement('INSERT IGNORE INTO erc_k12 '
      + '(Email_ID, Event_Date, Event_Title, Event_Location, Num_of_Students, Num_of_Faculty, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt1 = conn.prepareStatement('INSERT IGNORE INTO erc '
      + '(Email_ID, Event_Date, Event_Innovation_Focused, Event_Title, Event_Location, Num_of_Attendees, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt2 = conn.prepareStatement('INSERT IGNORE INTO impact_on_curriculum '
      + '(Email_ID, Course_Status, Campus, Course_Level, Course_ID, Course_Title, Eng_Sys_Focus, Multidisc_Content, Team_Taught, ERC_Inst, Instructor_1, Instructor_2, Instructor_3, Instructor_4, Instructor_5, Aspire_Content, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt3 = conn.prepareStatement('INSERT IGNORE INTO degrees_and_jobs '
      + '(Email_ID, Student_Name, Degree_Type, Hired_Industry, Hired_Other, Employer_Name, Position, Status, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  
  var stmt4 = conn.prepareStatement('INSERT IGNORE INTO awards_and_recog '
      + '(Email_ID, Name_1, Name_2, Name_3, Name_4, Name_5, Award_Recog, Awarded_Date, Link, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt5 = conn.prepareStatement('INSERT IGNORE INTO intellectual_property '
      + '(Email_ID, Type, IP_License, License_Title, Category, Description, Owner, Awarded_Year, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt6 = conn.prepareStatement('INSERT IGNORE INTO tech_transfer '
      + '(Email_ID, Adopting_Company, Tech_Descr, Impact, Year, Use_in_Company, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt7 = conn.prepareStatement('INSERT IGNORE INTO dissemination_effort '
      + '(Email_ID, Event_Start_Date, Event_End_Date, Event_Name, Event_Type, Presentation_Title, Num_of_Participants, Presenter_1, Presenter_2, Presenter_3, Presenter_4, Presenter_5, Presenter_6, Presenter_7, Presenter_8, Presenter_9, Presenter_10, Abstract, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

  var stmt8 = conn.prepareStatement('INSERT IGNORE INTO publication '
      + '(Email_ID, Pub_From, Appeared_In, Multiple_Authors, ERC_Students, Industry, Eng_Discipline, Both_Fields, Multiple_Inst, Title, Author_1, Author_2, Author_3, Author_4, Author_5, Author_6, Author_7, Author_8, Author_9, Author_10, Month_Year, Page_Num, Volume, Issue, Link_Pub, Abstract, Addnl_Info, Flag) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

  for (var i = 1; i < erckrows.length; i++) {
    stmt.setString(1, erckrows[i][0]);
    stmt.setString(2, erckrows[i][1]);
    stmt.setString(3, erckrows[i][2]);
    stmt.setString(4, erckrows[i][3]);
    stmt.setString(5, erckrows[i][4]);
    stmt.setString(6, erckrows[i][5]);
    stmt.setString(7, erckrows[i][6]);
    stmt.setString(8, erckrows[i][7]);
    stmt.addBatch();
  }
  for (var i = 1; i < ercrows.length; i++) {
    stmt1.setString(1, ercrows[i][0]);
    stmt1.setString(2, ercrows[i][1]);
    stmt1.setString(3, ercrows[i][2]);
    stmt1.setString(4, ercrows[i][3]);
    stmt1.setString(5, ercrows[i][4]);
    stmt1.setString(6, ercrows[i][5]);
    stmt1.setString(7, ercrows[i][6]);
    stmt1.setString(8, ercrows[i][7]);
    stmt1.addBatch();
  }
  for (var i = 1; i < impactrows.length; i++) {
    stmt2.setString(1, impactrows[i][0]);
    stmt2.setString(2, impactrows[i][1]);
    stmt2.setString(3, impactrows[i][2]);
    stmt2.setString(4, impactrows[i][3]);
    stmt2.setString(5, impactrows[i][4]);
    stmt2.setString(6, impactrows[i][5]);
    stmt2.setString(7, impactrows[i][6]);
    stmt2.setString(8, impactrows[i][7]);
    stmt2.setString(9, impactrows[i][8]);
    stmt2.setString(10, impactrows[i][9]);
    stmt2.setString(11, impactrows[i][10]);
    stmt2.setString(12, impactrows[i][11]);
    stmt2.setString(13, impactrows[i][12]);
    stmt2.setString(14, impactrows[i][13]);
    stmt2.setString(15, impactrows[i][14]);
    stmt2.setString(16, impactrows[i][15]);
    stmt2.setString(17, impactrows[i][16]);
    stmt2.setString(18, impactrows[i][17]);
    stmt2.addBatch();
  }
  for (var i = 1; i < degjobrows.length; i++) {
    stmt3.setString(1, degjobrows[i][0]);
    stmt3.setString(2, degjobrows[i][1]);
    stmt3.setString(3, degjobrows[i][2]);
    stmt3.setString(4, degjobrows[i][3]);
    stmt3.setString(5, degjobrows[i][4]);
    stmt3.setString(6, degjobrows[i][5]);
    stmt3.setString(7, degjobrows[i][6]);
    stmt3.setString(8, degjobrows[i][7]);
    stmt3.setString(9, degjobrows[i][8]);
    stmt3.setString(10, degjobrows[i][9]);
    stmt3.addBatch();
  }
  for (var i = 1; i < awardrows.length; i++) {
    stmt4.setString(1, awardrows[i][0]);
    stmt4.setString(2, awardrows[i][1]);
    stmt4.setString(3, awardrows[i][2]);
    stmt4.setString(4, awardrows[i][3]);
    stmt4.setString(5, awardrows[i][4]);
    stmt4.setString(6, awardrows[i][5]);
    stmt4.setString(7, awardrows[i][6]);
    stmt4.setString(8, awardrows[i][7]);
    stmt4.setString(9, awardrows[i][8]);
    stmt4.setString(10, awardrows[i][9]);
    stmt4.setString(11, awardrows[i][10]);
    stmt4.addBatch();
  }
  for (var i = 1; i < iprows.length; i++) {
    stmt5.setString(1, iprows[i][0]);
    stmt5.setString(2, iprows[i][1]);
    stmt5.setString(3, iprows[i][2]);
    stmt5.setString(4, iprows[i][3]);
    stmt5.setString(5, iprows[i][4]);
    stmt5.setString(6, iprows[i][5]);
    stmt5.setString(7, iprows[i][6]);
    stmt5.setString(8, iprows[i][7]);
    stmt5.setString(9, iprows[i][8]);
    stmt5.setString(10, iprows[i][9]);
    stmt5.addBatch();
  }
  for (var i = 1; i < techrows.length; i++) {
    stmt6.setString(1, techrows[i][0]);
    stmt6.setString(2, techrows[i][1]);
    stmt6.setString(3, techrows[i][2]);
    stmt6.setString(4, techrows[i][3]);
    stmt6.setString(5, techrows[i][4]);
    stmt6.setString(6, techrows[i][5]);
    stmt6.setString(7, techrows[i][6]);
    stmt6.setString(8, techrows[i][7]);
    stmt6.addBatch();
  }
   for (var i = 1; i < dissrows.length; i++) {
    stmt7.setString(1, dissrows[i][0]);
    stmt7.setString(2, dissrows[i][1]);
    stmt7.setString(3, dissrows[i][2]);
    stmt7.setString(4, dissrows[i][3]);
    stmt7.setString(5, dissrows[i][4]);
    stmt7.setString(6, dissrows[i][5]);
    stmt7.setString(7, dissrows[i][6]);
    stmt7.setString(8, dissrows[i][7]);
    stmt7.setString(9, dissrows[i][8]);
    stmt7.setString(10, dissrows[i][9]);
    stmt7.setString(11, dissrows[i][10]);
    stmt7.setString(12, dissrows[i][11]);
    stmt7.setString(13, dissrows[i][12]);
    stmt7.setString(14, dissrows[i][13]);
    stmt7.setString(15, dissrows[i][14]);
    stmt7.setString(16, dissrows[i][15]);
    stmt7.setString(17, dissrows[i][16]);
    stmt7.setString(18, dissrows[i][17]);
    stmt7.setString(19, dissrows[i][18]);
    stmt7.setString(20, dissrows[i][19]);
    stmt7.addBatch();
  }
  for (var i = 1; i < pubrows.length; i++) {
    stmt8.setString(1, pubrows[i][0]);
    stmt8.setString(2, pubrows[i][1]);
    stmt8.setString(3, pubrows[i][2]);
    stmt8.setString(4, pubrows[i][3]);
    stmt8.setString(5, pubrows[i][4]);
    stmt8.setString(6, pubrows[i][5]);
    stmt8.setString(7, pubrows[i][6]);
    stmt8.setString(8, pubrows[i][7]);
    stmt8.setString(9, pubrows[i][8]);
    stmt8.setString(10, pubrows[i][9]);
    stmt8.setString(11, pubrows[i][10]);
    stmt8.setString(12, pubrows[i][11]);
    stmt8.setString(13, pubrows[i][12]);
    stmt8.setString(14, pubrows[i][13]);
    stmt8.setString(15, pubrows[i][14]);
    stmt8.setString(16, pubrows[i][15]);
    stmt8.setString(17, pubrows[i][16]);
    stmt8.setString(18, pubrows[i][17]);
    stmt8.setString(19, pubrows[i][18]);
    stmt8.setString(20, pubrows[i][19]);
    stmt8.setString(21, pubrows[i][20]);
    stmt8.setString(22, pubrows[i][21]);
    stmt8.setString(23, pubrows[i][22]);
    stmt8.setString(24, pubrows[i][23]);
    stmt8.setString(25, pubrows[i][24]);
    stmt8.setString(26, pubrows[i][25]);
    stmt8.setString(27, pubrows[i][26]);
    stmt8.setString(28, pubrows[i][27]);
    stmt8.addBatch();
  }
  var batch = stmt.executeBatch();
  var batch1 = stmt1.executeBatch();
  var batch2 = stmt2.executeBatch();
  var batch3 = stmt3.executeBatch();
  var batch4 = stmt4.executeBatch();
  var batch5 = stmt5.executeBatch();
  var batch6 = stmt6.executeBatch();
  var batch7 = stmt7.executeBatch();
  var batch8 = stmt8.executeBatch();
  conn.commit();
  conn.close();

  var end = new Date();
  Logger.log('Time elapsed: %sms for %s rows.', end - start, batch.length);
}
