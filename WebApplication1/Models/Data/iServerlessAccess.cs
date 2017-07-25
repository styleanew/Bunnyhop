using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BunnyHopBase.Models.Data
{
    interface IServerlessAccess 
    {
        void OpenConnection();

        void Connect(out String con);

        string Query(String data);

        void Write(String data);
    }
}
