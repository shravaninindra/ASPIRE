var instanceName= 'YOUR_INSTANCE_NAME';
var rootPwd= 'YOUR_PASSWORD';

var connectionName = '#YOUR_CONNECTION_NAME';
var user = 'YOUR_USER';
var userPwd = 'YOU_PASSWORD';
var db = 'YOUR_DB';
var root = 'YOUR_ROOT_USER';
var instanceUrl = 'jdbc:google:mysql://' + connectionName;
var dbUrl = instanceUrl + '/' + db;

function createDatabase() {
  var conn = Jdbc.getCloudSqlConnection(instanceUrl, root, rootPwd);
  conn.createStatement().execute('CREATE DATABASE ' + db);
}
function createUser() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, root, rootPwd);

  var stmt = conn.prepareStatement('CREATE USER ? IDENTIFIED BY ?');
  stmt.setString(1, user);
  stmt.setString(2, userPwd);
  stmt.execute();

  conn.createStatement().execute('GRANT ALL ON `%`.* TO ' + user);
}
function createTable() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  /*conn.createStatement().execute('CREATE TABLE personnel '
      + '(Name VARCHAR(255), Email_ID VARCHAR(255), Campus VARCHAR(255), Department VARCHAR(255), Job_Title VARCHAR(255), Aspire_Roles VARCHAR(255), Thrusts VARCHAR(255), Projects VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Email_ID));');

  conn.createStatement().execute('CREATE TABLE erc '
      + '(Email_ID VARCHAR(255), Event_Date VARCHAR(255), Event_Innovation_Focused VARCHAR(255), Event_Title VARCHAR(255), Event_Location VARCHAR(255), Num_of_Attendees VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Event_Title, Event_Date));');

  /*conn.createStatement().execute('CREATE TABLE erc_k12 '
      + '(Email_ID VARCHAR(255), Event_Date VARCHAR(255), Event_Title VARCHAR(255), Event_Location VARCHAR(255), Num_of_Students VARCHAR(255), Num_of_Faculty VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Event_Title));'); 
  
  conn.createStatement().execute('CREATE TABLE impact_on_curriculum '
      + '(Email_ID VARCHAR(255), Course_Status VARCHAR(255), Campus VARCHAR(255), Course_Level VARCHAR(255), Course_ID VARCHAR(255), Course_Title VARCHAR(255), Eng_Sys_Focus VARCHAR(255), Multidisc_Content VARCHAR(255), Team_Taught VARCHAR(255), ERC_Inst VARCHAR(255), Instructor_1 VARCHAR(255), Instructor_2 VARCHAR(255), Instructor_3 VARCHAR(255), Instructor_4 VARCHAR(255), Instructor_5 VARCHAR(255), Aspire_Content VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Campus, Course_ID));');

  conn.createStatement().execute('CREATE TABLE degrees_and_jobs '
      + '(Email_ID VARCHAR(255), Student_Name VARCHAR(255), Degree_Type VARCHAR(255), Hired_Industry VARCHAR(255), Hired_Other VARCHAR(255), Employer_Name VARCHAR(255), Position VARCHAR(255), Status VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Student_Name));');
  
  conn.createStatement().execute('CREATE TABLE awards_and_recog '
      + '(Email_ID VARCHAR(255), Name_1 VARCHAR(255), Name_2 VARCHAR(255), Name_3 VARCHAR(255), Name_4 VARCHAR(255), Name_5 VARCHAR(255), Award_Recog VARCHAR(255), Awarded_Date VARCHAR(255), Link VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Award_Recog));');

  conn.createStatement().execute('CREATE TABLE intellectual_property '
      + '(Email_ID VARCHAR(255), Type VARCHAR(255), IP_License VARCHAR(255), License_Title VARCHAR(255), Category VARCHAR(255), Description VARCHAR(255), Owner VARCHAR(255), Awarded_Year VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(IP_License));');
  
  conn.createStatement().execute('CREATE TABLE tech_transfer '
      + '(Email_ID VARCHAR(255), Adopting_Company VARCHAR(255), Tech_Descr VARCHAR(255), Impact VARCHAR(255), Year VARCHAR(255), Use_in_Company VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Adopting_Company));');
      
  conn.createStatement().execute('CREATE TABLE dissemination_effort '
      + '(Email_ID VARCHAR(255), Event_Start_Date VARCHAR(255), Event_End_Date VARCHAR(255), Event_Name VARCHAR(255), Event_Type VARCHAR(255), Presentation_Title VARCHAR(255), Num_of_Participants VARCHAR(255), Presenter_1 VARCHAR(255), Presenter_2 VARCHAR(255), Presenter_3 VARCHAR(255), Presenter_4 VARCHAR(255), Presenter_5 VARCHAR(255), Presenter_6 VARCHAR(255), Presenter_7 VARCHAR(255), Presenter_8 VARCHAR(255), Presenter_9 VARCHAR(255), Presenter_10 VARCHAR(255), Abstract VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Event_Name, Presentation_Title));');*/
  
  conn.createStatement().execute('CREATE TABLE publication '
      + '(Email_ID VARCHAR(255), Pub_From VARCHAR(255), Appeared_In VARCHAR(255), Multiple_Authors VARCHAR(255), ERC_Students VARCHAR(255), Industry VARCHAR(255), Eng_Discipline VARCHAR(255), Both_Fields VARCHAR(255), Multiple_Inst VARCHAR(255), Title VARCHAR(255), Author_1 VARCHAR(255), Author_2 VARCHAR(255), Author_3 VARCHAR(255), Author_4 VARCHAR(255), Author_5 VARCHAR(255), Author_6 VARCHAR(255), Author_7 VARCHAR(255), Author_8 VARCHAR(255), Author_9 VARCHAR(255), Author_10 VARCHAR(255), Month_Year VARCHAR(255), Page_Num VARCHAR(255), Volume VARCHAR(255), Issue VARCHAR(255), Link_Pub VARCHAR(255), Abstract VARCHAR(255), Addnl_Info VARCHAR(255), Flag VARCHAR(255), '
      + 'PRIMARY KEY(Title));');
  
}
function writeOneRecord() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  var stmt = conn.prepareStatement('INSERT INTO personnel '
      + '(Name, Department, Campus, Role, Email_ID, New_Addition, Addnl_Comments) values (?, ?, ?, ?, ?, ?, ?)');
  stmt.setString(1, 'Shravani Nindra');
  stmt.setString(2, 'Computer Science');
  stmt.setString(3, 'University of Colorado Boulder');
  stmt.setString(4, 'Student');
  stmt.setString(5, 'shravani.nindra@colorado.edu');
  stmt.setString(6, 'Publication');
  stmt.setString(7, '');
  stmt.execute();
  }
