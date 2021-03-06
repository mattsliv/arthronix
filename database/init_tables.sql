BEGIN;
DROP TABLE Patients;
DROP TABLE Bundles;
DROP TABLE Exercises;
DROP TABLE Providers;
DROP TABLE Statistics;


CREATE TABLE Patients (
  ID int,
  LastName varchar(255),
  FirstName varchar(255),
  Email varchar(255),
  Phone varchar(50),
  PatientType varchar(255),
  NextApt varchar(255),
  ProviderID int,
  Streak int,
  BundleID int,
  StatusROM varchar(255),
  StatusPEG varchar(255),
  StatusStrength varchar(255)
);

CREATE TABLE Bundles (
  ID int,
  Ex1 int, Ex2 int, Ex3 int, Ex4 int, Ex5 int, Ex6 int, Ex7 int, Ex8 int, Ex9 int, Ex10 int,
  Reps1 varchar(50), Reps2 varchar(50),Reps3 varchar(50), Reps4 varchar(50), Reps5 varchar(50),
  Reps6 varchar(50), Reps7 varchar(50),Reps8 varchar(50), Reps9 varchar(50), Reps10 varchar(50),
  Sets1 varchar(50), Sets2 varchar(50), Sets3 varchar(50), Sets4 varchar(50), Sets5 varchar(50),
  Sets6 varchar(50), Sets7 varchar(50), Sets8 varchar(50), Sets9 varchar(50), Sets10 varchar(50)
);

CREATE TABLE Exercises (
  ID int,
  ExName varchar(255),
  VideoPath varchar(255)
);

CREATE TABLE Providers (
  ID int,
  LastName varchar(255),
  FirstName varchar(255),
  PatientIDs varchar(255)
);

CREATE TABLE Statistics (
  UserId int, /*should make this required*/
  DateRecorded date,
  ROM float,
  Strength float,
  PEG float
);
COMMIT;

/* Bundles */
INSERT INTO Bundles(ID, Ex1, Ex2, Ex3, Reps1, Reps2, Reps3, Sets1, Sets2, Sets3)
VALUES ('001', '001', '002', '005', '6-8', '6-8', '6-8', '1-2', '1-2', '1-2');

INSERT INTO Bundles(ID, Ex1, Ex2, Ex3, Reps1, Reps2, Reps3, Sets1, Sets2, Sets3)
VALUES ('002', '002', '004', '005', '8-10', '6-8', '6-8', '2-3', '1-2', '1-2');

INSERT INTO Bundles(ID, Ex1, Ex2, Reps1, Reps2, Sets1, Sets2)
VALUES ('003', '004', '005', '8-10', '8-10', '2-3', '2-3');

INSERT INTO Bundles(ID, Ex1, Ex2, Ex3, Reps1, Reps2, Reps3, Sets1, Sets2, Sets3)
VALUES ('004', '003', '004', '005', '6-8', '8-10', '10-12', '1-2', '2-3', '3-4');

INSERT INTO Bundles(ID, Ex1, Ex2, Ex3, Ex4, Reps1, Reps2, Reps3, Reps4, Sets1, Sets2, Sets3, Sets4)
VALUES ('005', '001', '002', '003', '004', '6-8','6-8', '6-8', '8-10', '1-2', '1-2', '1-2', '2-3');

/* PATIENTS */
INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('001', 'Tsun','Elaine','et@gmail.com', '8608225463', 'Knee', 'May 7th, 10:00am', '001', '0', '001', 'red', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('002', 'Stumper','Chris','cs@yahoo.com', '8908881234', 'Knee', 'May 9th, 1:00pm', '001', '0', '002', 'green', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('003', 'Singh','Shemona','ss@aol.com', '8908881111', 'Hip', 'May 1st, 7:00am', '002', '0', '003', 'red', 'red', 'green');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('004', 'Smith','Savanna','sos@yahoo.com', '4441234567', 'Hip', 'May 10th, 10:00am', '002', '0', '004', 'yellow', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('005', 'Slivinski','Matt','ms@yahoo.com', '3338885463', 'Knee', 'May 7th, 12:30pm', '001', '0', '002', 'green', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('006', 'Johnson','John','jj@yahoo.com', '4927846283', 'Knee', 'May 17th, 2:30pm', '001', '0', '002', 'red', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('007', 'Mac','Robert','rob@yahoo.com', '3336545463', 'Hip', 'May 10th, 4:50pm', '001', '0', '002', 'green', 'red', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('008', 'Musk','Elon','elm@yahoo.com', '8608882463', 'Knee', 'May 25th, 1:45pm', '001', '0', '002', 'yellow', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('009', 'White','Sam','sw@yahoo.com', '8458885463', 'Hip', 'May 14th, 11:30am', '001', '0', '002', 'green', 'green', 'green');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('010', 'Cat','Kathy','cs@yahoo.com', '8908881234', 'Knee', 'May 9th, 1:00pm', '001', '0', '002', 'green', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('011', 'Read','Michelle','ss@aol.com', '8908881111', 'Hip', 'May 1st, 7:00am', '002', '0', '003', 'red', 'red', 'green');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('012', 'Williams','Steve','sos@yahoo.com', '4441234567', 'Hip', 'May 10th, 10:00am', '002', '0', '004', 'yellow', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('013', 'Ron','Harry','ms@yahoo.com', '3338885463', 'Knee', 'May 7th, 12:30pm', '001', '0', '002', 'green', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('014', 'Vally','Samantha','et@gmail.com', '8608225463', 'Knee', 'May 7th, 10:00am', '001', '0', '001', 'red', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('015', 'Yun','Tak','cs@yahoo.com', '8908881234', 'Hip', 'May 9th, 3:00pm', '001', '0', '002', 'red', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('016', 'Trolly','Joe','cs@yahoo.com', '8908881234', 'Knee', 'May 9th, 1:00pm', '001', '0', '002', 'green', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('017', 'Cohen','Nick','ss@aol.com', '8908881111', 'Hip', 'May 1st, 7:00am', '002', '0', '003', 'red', 'red', 'green');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('018', 'Stratton','Mary','sos@yahoo.com', '4441234567', 'Hip', 'May 10th, 10:00am', '002', '0', '004', 'yellow', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('019', 'Lai','Bryant','ms@yahoo.com', '3338885463', 'Knee', 'May 7th, 12:30pm', '001', '0', '002', 'green', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('020', 'Wu','Matthew','jj@yahoo.com', '4927846283', 'Knee', 'May 17th, 2:30pm', '001', '0', '002', 'red', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('021', 'Ford','Sammi','ms@yahoo.com', '3338885463', 'Knee', 'May 7th, 12:30pm', '001', '0', '002', 'green', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('022', 'Swan','Jessica','jj@yahoo.com', '4927846283', 'Knee', 'May 17th, 2:30pm', '001', '0', '002', 'red', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('023', 'Han','Song','rob@yahoo.com', '3336545463', 'Hip', 'May 10th, 4:50pm', '001', '0', '002', 'green', 'red', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('024', 'LeBlanc','Sarah','elm@yahoo.com', '8608882463', 'Knee', 'May 25th, 1:45pm', '001', '0', '002', 'yellow', 'green', 'red');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('025', 'Rogers','Jesse','sw@yahoo.com', '8458885463', 'Hip', 'May 14th, 11:30am', '001', '0', '002', 'green', 'green', 'green');



/* EXERCISES */
INSERT INTO Exercises(ID,ExName)
VALUES ('001', 'calf raises');

INSERT INTO Exercises(ID,ExName)
VALUES ('002', 'sitting kicks');

INSERT INTO Exercises(ID,ExName)
VALUES ('003', 'knee swings');

INSERT INTO Exercises(ID,ExName)
VALUES ('004', 'lying kicks');

INSERT INTO Exercises(ID,ExName)
VALUES ('005', 'leg slides');

INSERT INTO Exercises(ID,ExName)
VALUES ('006', 'squats');

/* PROVIDERS */
INSERT INTO Providers(ID,LastName, FirstName, PatientIDs)
VALUES ('001', 'Swanson', 'Ron', '[001, 002, 005]');

INSERT INTO Providers(ID,LastName, FirstName, PatientIDs)
VALUES ('002', 'Knope', 'Leslie', '[003, 004]');

/* STATISTICS */
INSERT INTO Statistics (UserId, DateRecorded, ROM, Strength, PEG)
VALUES ('001', '01/23/18', '50.4', '2.0', '4.0');

INSERT INTO Statistics (UserId, DateRecorded, ROM, Strength, PEG)
VALUES ('001', '02/9/18', '62.2', '5.0', '4.7');

INSERT INTO Statistics (UserId, DateRecorded, ROM, Strength, PEG)
VALUES ('001', '02/10/18', '65.9', '6.0', '5.0');

COMMIT;
