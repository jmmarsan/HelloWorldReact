using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(HelloWorldReact.ReactConfig), "Configure")]

namespace HelloWorldReact
{
	public static class ReactConfig
	{
		public static void Configure()
		{

            ReactSiteConfiguration.Configuration
                .AddScript("~/Scripts/ReactComponents/Index.jsx");

            JsEngineSwitcher.Current.DefaultEngineName = V8JsEngine.EngineName;
            JsEngineSwitcher.Current.EngineFactories.AddV8();
        }
	}
}