-- MyScreenDB veritabanını oluştur
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'MyScreenDB')
BEGIN
    CREATE DATABASE MyScreenDB;
END
GO

USE MyScreenDB;
GO

-- Users tablosunu oluştur
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Users')
BEGIN
    CREATE TABLE Users (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        Name NVARCHAR(100) NOT NULL,
        Email NVARCHAR(100) NOT NULL UNIQUE,
        Password NVARCHAR(100) NOT NULL,
        CreatedAt DATETIME NOT NULL,
        UpdatedAt DATETIME NULL
    );
END
GO 