INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('001', 'Tsun','Elaine','et@gmail.com', '8608225463', 'knee', '001', '0', '001');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('002', 'Garcia','Miguel','mg@yahoo.com', '8908885463', 'knee', '001', '0', '002');

INSERT INTO Patients(ID, LastName, FirstName, Email, Phone, PatientType, ProviderID, Streak, BundleID)
VALUES ('002', 'Smith','Savanna','sos@yahoo.com', '8601234567', 'hip', '001', '0', '003');

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

INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('001', '[001,004]', '[5,8]', '[4,3]');

INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('002', '[003,005]', '[10,8]', '[3,3]');

INSERT INTO Bundles(ID, ExerciseIDs, NumReps, NumSets)
VALUES ('003', '[001,003, 004]', '[5,8,7]', '[3,4,3]');
