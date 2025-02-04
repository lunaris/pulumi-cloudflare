// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare
{
    /// <summary>
    /// Provides a Cloudflare Teams Account resource. The Teams Account resource defines configuration for secure web gateway.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using Pulumi;
    /// using Cloudflare = Pulumi.Cloudflare;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var main = new Cloudflare.TeamsAccount("main", new()
    ///     {
    ///         AccountId = "1d5fdc9e88c8a8c4518b068cd94331fe",
    ///         Antivirus = new Cloudflare.Inputs.TeamsAccountAntivirusArgs
    ///         {
    ///             EnabledDownloadPhase = true,
    ///             EnabledUploadPhase = false,
    ///             FailClosed = true,
    ///         },
    ///         BlockPage = new Cloudflare.Inputs.TeamsAccountBlockPageArgs
    ///         {
    ///             BackgroundColor = "#000000",
    ///             FooterText = "hello",
    ///             HeaderText = "hello",
    ///             LogoPath = "https://google.com",
    ///         },
    ///         Fips = new Cloudflare.Inputs.TeamsAccountFipsArgs
    ///         {
    ///             Tls = true,
    ///         },
    ///         Logging = new Cloudflare.Inputs.TeamsAccountLoggingArgs
    ///         {
    ///             RedactPii = true,
    ///             SettingsByRuleType = new Cloudflare.Inputs.TeamsAccountLoggingSettingsByRuleTypeArgs
    ///             {
    ///                 Dns = new Cloudflare.Inputs.TeamsAccountLoggingSettingsByRuleTypeDnsArgs
    ///                 {
    ///                     LogAll = false,
    ///                     LogBlocks = true,
    ///                 },
    ///                 Http = new Cloudflare.Inputs.TeamsAccountLoggingSettingsByRuleTypeHttpArgs
    ///                 {
    ///                     LogAll = true,
    ///                     LogBlocks = true,
    ///                 },
    ///                 L4 = new Cloudflare.Inputs.TeamsAccountLoggingSettingsByRuleTypeL4Args
    ///                 {
    ///                     LogAll = false,
    ///                     LogBlocks = true,
    ///                 },
    ///             },
    ///         },
    ///         Proxy = new Cloudflare.Inputs.TeamsAccountProxyArgs
    ///         {
    ///             Tcp = true,
    ///             Udp = true,
    ///         },
    ///         TlsDecryptEnabled = true,
    ///         UrlBrowserIsolationEnabled = true,
    ///     });
    /// 
    /// });
    /// ```
    /// 
    /// ## Import
    /// 
    /// Since a Teams account does not have a unique resource ID, configuration can be imported using the account ID.
    /// 
    /// ```sh
    ///  $ pulumi import cloudflare:index/teamsAccount:TeamsAccount example cb029e245cfdd66dc8d2e570d5dd3322
    /// ```
    /// </summary>
    [CloudflareResourceType("cloudflare:index/teamsAccount:TeamsAccount")]
    public partial class TeamsAccount : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The account to which the teams location should be added.
        /// </summary>
        [Output("accountId")]
        public Output<string> AccountId { get; private set; } = null!;

        [Output("activityLogEnabled")]
        public Output<bool?> ActivityLogEnabled { get; private set; } = null!;

        /// <summary>
        /// Configuration block for antivirus traffic scanning.
        /// </summary>
        [Output("antivirus")]
        public Output<Outputs.TeamsAccountAntivirus?> Antivirus { get; private set; } = null!;

        /// <summary>
        /// Configuration for a custom block page.
        /// </summary>
        [Output("blockPage")]
        public Output<Outputs.TeamsAccountBlockPage?> BlockPage { get; private set; } = null!;

        /// <summary>
        /// Configure compliance with Federal Information Processing Standards.
        /// </summary>
        [Output("fips")]
        public Output<Outputs.TeamsAccountFips?> Fips { get; private set; } = null!;

        [Output("logging")]
        public Output<Outputs.TeamsAccountLogging?> Logging { get; private set; } = null!;

        /// <summary>
        /// Configuration block for specifying which protocols are proxied.
        /// </summary>
        [Output("proxy")]
        public Output<Outputs.TeamsAccountProxy?> Proxy { get; private set; } = null!;

        /// <summary>
        /// Indicator that decryption of TLS traffic is enabled.
        /// </summary>
        [Output("tlsDecryptEnabled")]
        public Output<bool?> TlsDecryptEnabled { get; private set; } = null!;

        /// <summary>
        /// Safely browse websites in Browser Isolation through a URL.
        /// </summary>
        [Output("urlBrowserIsolationEnabled")]
        public Output<bool?> UrlBrowserIsolationEnabled { get; private set; } = null!;


        /// <summary>
        /// Create a TeamsAccount resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public TeamsAccount(string name, TeamsAccountArgs args, CustomResourceOptions? options = null)
            : base("cloudflare:index/teamsAccount:TeamsAccount", name, args ?? new TeamsAccountArgs(), MakeResourceOptions(options, ""))
        {
        }

        private TeamsAccount(string name, Input<string> id, TeamsAccountState? state = null, CustomResourceOptions? options = null)
            : base("cloudflare:index/teamsAccount:TeamsAccount", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing TeamsAccount resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static TeamsAccount Get(string name, Input<string> id, TeamsAccountState? state = null, CustomResourceOptions? options = null)
        {
            return new TeamsAccount(name, id, state, options);
        }
    }

    public sealed class TeamsAccountArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The account to which the teams location should be added.
        /// </summary>
        [Input("accountId", required: true)]
        public Input<string> AccountId { get; set; } = null!;

        [Input("activityLogEnabled")]
        public Input<bool>? ActivityLogEnabled { get; set; }

        /// <summary>
        /// Configuration block for antivirus traffic scanning.
        /// </summary>
        [Input("antivirus")]
        public Input<Inputs.TeamsAccountAntivirusArgs>? Antivirus { get; set; }

        /// <summary>
        /// Configuration for a custom block page.
        /// </summary>
        [Input("blockPage")]
        public Input<Inputs.TeamsAccountBlockPageArgs>? BlockPage { get; set; }

        /// <summary>
        /// Configure compliance with Federal Information Processing Standards.
        /// </summary>
        [Input("fips")]
        public Input<Inputs.TeamsAccountFipsArgs>? Fips { get; set; }

        [Input("logging")]
        public Input<Inputs.TeamsAccountLoggingArgs>? Logging { get; set; }

        /// <summary>
        /// Configuration block for specifying which protocols are proxied.
        /// </summary>
        [Input("proxy")]
        public Input<Inputs.TeamsAccountProxyArgs>? Proxy { get; set; }

        /// <summary>
        /// Indicator that decryption of TLS traffic is enabled.
        /// </summary>
        [Input("tlsDecryptEnabled")]
        public Input<bool>? TlsDecryptEnabled { get; set; }

        /// <summary>
        /// Safely browse websites in Browser Isolation through a URL.
        /// </summary>
        [Input("urlBrowserIsolationEnabled")]
        public Input<bool>? UrlBrowserIsolationEnabled { get; set; }

        public TeamsAccountArgs()
        {
        }
        public static new TeamsAccountArgs Empty => new TeamsAccountArgs();
    }

    public sealed class TeamsAccountState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The account to which the teams location should be added.
        /// </summary>
        [Input("accountId")]
        public Input<string>? AccountId { get; set; }

        [Input("activityLogEnabled")]
        public Input<bool>? ActivityLogEnabled { get; set; }

        /// <summary>
        /// Configuration block for antivirus traffic scanning.
        /// </summary>
        [Input("antivirus")]
        public Input<Inputs.TeamsAccountAntivirusGetArgs>? Antivirus { get; set; }

        /// <summary>
        /// Configuration for a custom block page.
        /// </summary>
        [Input("blockPage")]
        public Input<Inputs.TeamsAccountBlockPageGetArgs>? BlockPage { get; set; }

        /// <summary>
        /// Configure compliance with Federal Information Processing Standards.
        /// </summary>
        [Input("fips")]
        public Input<Inputs.TeamsAccountFipsGetArgs>? Fips { get; set; }

        [Input("logging")]
        public Input<Inputs.TeamsAccountLoggingGetArgs>? Logging { get; set; }

        /// <summary>
        /// Configuration block for specifying which protocols are proxied.
        /// </summary>
        [Input("proxy")]
        public Input<Inputs.TeamsAccountProxyGetArgs>? Proxy { get; set; }

        /// <summary>
        /// Indicator that decryption of TLS traffic is enabled.
        /// </summary>
        [Input("tlsDecryptEnabled")]
        public Input<bool>? TlsDecryptEnabled { get; set; }

        /// <summary>
        /// Safely browse websites in Browser Isolation through a URL.
        /// </summary>
        [Input("urlBrowserIsolationEnabled")]
        public Input<bool>? UrlBrowserIsolationEnabled { get; set; }

        public TeamsAccountState()
        {
        }
        public static new TeamsAccountState Empty => new TeamsAccountState();
    }
}
