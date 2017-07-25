using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//using Finisar.SQLite;
using System.Data.SQLite;

namespace BunnyHopBase.Models.Data
{
    public class AccessServerless : IServerlessAccess
    {
        // We use these three SQLite objects:
        SQLiteConnection sqlite_conn;
        SQLiteCommand sqlite_cmd;
        SQLiteDataReader sqlite_datareader;

        public AccessServerless()
        {
            sqlite_conn = new SQLiteConnection();
            sqlite_cmd = new SQLiteCommand();

        }

        public void OpenConnection()
        {

        }

        public void Connect(out String con)
        {
            string path = HttpRuntime.AppDomainAppPath;

            string dataPath = path + "Data\\bunnyhop.db";
            con = "";
            

            SQLiteConnection sqlite_conn, sqlite_conn2;
            SQLiteCommand sqlite_cmd;
            SQLiteDataReader sqlite_datareader;

            // create a new database connection:
            //sqlite_conn2 = new SQLiteConnection(String.Format("Data Source={0};Version=3;New=False;Compress=True;", dataPath));
            //sqlite_conn = new SQLiteConnection(dataPath);
            
            //sqlite_conn.Open();
            //// open the connection:
            //sqlite_conn.Open();

            //// create a new SQL command:
            //sqlite_cmd = sqlite_conn.CreateCommand();

            //// Let the SQLiteCommand object know our SQL-Query:
            ////sqlite_cmd.CommandText = "CREATE TABLE test (id integer primary key, text varchar(100));";

            ////// Now lets execute the SQL ;D
            ////sqlite_cmd.ExecuteNonQuery();

            ////// Lets insert something into our new table:
            ////sqlite_cmd.CommandText = "INSERT INTO test (id, text) VALUES (1, 'Test Text 1');";

            ////// And execute this again ;D
            ////sqlite_cmd.ExecuteNonQuery();

            ////// ...and inserting another line:
            ////sqlite_cmd.CommandText = "INSERT INTO test (id, text) VALUES (2, 'Test Text 2');";

            //// And execute this again ;D
            //sqlite_cmd.ExecuteNonQuery();

            //// But how do we read something out of our table ?
            //// First lets build a SQL-Query again:
            //sqlite_cmd.CommandText = "SELECT * FROM parts";

            //// Now the SQLiteCommand object can give us a DataReader-Object:
            //sqlite_datareader = sqlite_cmd.ExecuteReader();

            //// The SQLiteDataReader allows us to run through the result lines:
            //while (sqlite_datareader.Read()) // Read() returns true if there is still a result line to read
            //{
            //    // Print out the content of the text field:
            //    con += (sqlite_datareader["text"]) + "/n";
            //}

            //// We are ready, now lets cleanup and close our connection:
            //sqlite_conn.Close();


            

            using (var connection = new SQLiteConnection("Data Source= " + dataPath))
            {
                var listOfParts = new List<String>();
                var statement = "SELECT * FROM parts";

                //System.Data.SQLite.

                connection.Open();

                var command = new SQLiteCommand(statement, connection);
                try
                {
                    var reader = command.ExecuteReader();

                    // And execute this again ;

                    // But how do we read something out of our table ?
                    // First lets build a SQL-Query again:
                    command.CommandText = "SELECT * FROM parts";

                    while (reader.Read())
                    {
                        listOfParts.Add(reader["name"].ToString());
                    }
                    reader.Close();

                    foreach (string item in listOfParts)
                    {
                        con += item + "\n";
                    }
                }

                catch (Exception ex)
                {
                    System.Diagnostics.EventLog log = new System.Diagnostics.EventLog();
                    log.WriteEntry(String.Format("Connecting to serverless exception \n Exception: {0}", ex.Message));
                    throw;
                }

            }
        }

        public string Query (String data)
        {
            string parts = "";

            Connect(out parts);
            return parts;
        }

        public void Write (String data)
        {

        }
    }
}