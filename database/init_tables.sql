BEGIN;

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
  ExerciseIDs varchar(255),
  NumReps varchar(255),
  NumSets varchar(255)
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
