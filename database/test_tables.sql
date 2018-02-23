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
