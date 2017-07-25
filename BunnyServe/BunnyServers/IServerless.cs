using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BunnyServe.BunnyServers
{
    interface IServerless
    {
        void OpenConnection();


        void Connect(out String con);
        

        string Query(String data);


        void Write(String data);
    }
}
