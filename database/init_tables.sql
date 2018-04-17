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
INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('001', 'Tsun','Elaine','et@gmail.com', '8608225463', 'knee', '001', '0', '001');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('002', 'Stumper','Chris','cs@yahoo.com', '8908881234', 'knee', '001', '0', '002');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('003', 'Singh','Shemona','ss@aol.com', '8908881111', 'hip', '002', '0', '003');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('004', 'Smith','Savanna','sos@yahoo.com', '4441234567', 'hip', '002', '0', '004');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('005', 'Slivinski','Matt','ms@yahoo.com', '3338885463', 'knee', '001', '0', '002');

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


COMMIT;
