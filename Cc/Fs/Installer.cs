using System;
using System.ComponentModel;
using System.Configuration.Install;
using System.Linq;
using System.ServiceProcess;

namespace Fsss
{

    [RunInstaller(true)]
    [DesignerCategory("")]
    public class MyWindowsServiceInstaller : Installer
    {
        public MyWindowsServiceInstaller()
        {
            var processInstaller = new ServiceProcessInstaller { Account = ServiceAccount.LocalSystem };

            var serviceInstaller = new ServiceInstaller
            {
                StartType = ServiceStartMode.Automatic,
            };

            AfterInstall += (sender, e) =>
            {
                using (var sc = new ServiceController(serviceInstaller.ServiceName))
                    sc.Start();
            };

            Installers.Add(processInstaller);
            Installers.Add(serviceInstaller);
        }

    }

}
