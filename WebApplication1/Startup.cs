using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BunnyHopApplication.Startup))]
namespace BunnyHopApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
