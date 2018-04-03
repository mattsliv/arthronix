/* PATIENTS */
INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('001', 'Tsun','Elaine','et@gmail.com', '8608225463', 'Knee', 'April 7th, 10:00am', '001', '0', '001', 'red', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('002', 'Stumper','Chris','cs@yahoo.com', '8908881234', 'Knee', 'April 9th, 1:00pm', '001', '0', '002', 'green', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('003', 'Singh','Shemona','ss@aol.com', '8908881111', 'Hip', 'April 1st, 7:00am', '002', '0', '003', 'red', 'red', 'green');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('004', 'Smith','Savanna','sos@yahoo.com', '4441234567', 'Hip', 'April 10th, 10:00am', '002', '0', '004', 'yellow', 'green', 'yellow');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, NextApt, ProviderID, Streak, BundleID, StatusROM, StatusPEG, StatusStrength)
VALUES ('005', 'Slivinski','Matt','ms@yahoo.com', '3338885463', 'Knee', 'April 7th, 12:30pm', '001', '0', '002', 'green', 'green', 'red');

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

/* BUNDLES */
INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('001', '[001,004]', '[5,8]', '[4,3]');

INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('002', '[003,005]', '[10,8]', '[3,3]');

INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('003', '[001,003, 004]', '[5,8,7]', '[3,4,3]');

INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('004', '[001,003, 006]', '[5,8,7]', '[3,4,3]');

/* PROVIDERS */
INSERT INTO Providers(ID,LastName, FirstName, PatientIDs)
VALUES ('001', 'Swanson', 'Ron', '[001, 002, 005]');

INSERT INTO Providers(ID,LastName, FirstName, PatientIDs)
VALUES ('002', 'Knope', 'Leslie', '[003, 004]');

/* STATISTICS */
INSERT INTO Statistics (UserId, DateRecorded, ROM, Strength, PEG)
VALUES ('001', '02/08/18', '60.4', '5.0', '4.5'); /*Elaine's entry for feb 8*/

INSERT INTO Statistics (UserId, DateRecorded, ROM, Strength, PEG)
VALUES ('001', '02/12/18', '74.4', '7.0', '5.5'); /*Elaine's entry for feb 12*/

INSERT INTO Statistics (UserId, DateRecorded, ROM, Strength, PEG)
VALUES ('001', '02/22/18', '80.2', '8.1', '6.0'); /*Elaine's entry for feb 22*/
