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
    /// Provides a Cloudflare Authenticated Origin Pulls resource. An `cloudflare.AuthenticatedOriginPulls` resource is required to use Per-Zone or Per-Hostname Authenticated Origin Pulls.
    /// 
    /// ## Example Usage
    /// 
    /// The arguments that you provide determine which form of Authenticated Origin Pulls to use:
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using Pulumi;
    /// using Cloudflare = Pulumi.Cloudflare;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     // Authenticated Origin Pulls
    ///     var myAop = new Cloudflare.AuthenticatedOriginPulls("myAop", new()
    ///     {
    ///         ZoneId = @var.Cloudflare_zone_id,
    ///         Enabled = true,
    ///     });
    /// 
    ///     // Per-Zone Authenticated Origin Pulls
    ///     var myPerZoneAopCert = new Cloudflare.AuthenticatedOriginPullsCertificate("myPerZoneAopCert", new()
    ///     {
    ///         ZoneId = @var.Cloudflare_zone_id,
    ///         Certificate = "-----INSERT CERTIFICATE-----",
    ///         PrivateKey = "-----INSERT PRIVATE KEY-----",
    ///         Type = "per-zone",
    ///     });
    /// 
    ///     var myPerZoneAop = new Cloudflare.AuthenticatedOriginPulls("myPerZoneAop", new()
    ///     {
    ///         ZoneId = @var.Cloudflare_zone_id,
    ///         AuthenticatedOriginPullsCertificate = myPerZoneAopCert.Id,
    ///         Enabled = true,
    ///     });
    /// 
    ///     // Per-Hostname Authenticated Origin Pulls
    ///     var myPerHostnameAopCert = new Cloudflare.AuthenticatedOriginPullsCertificate("myPerHostnameAopCert", new()
    ///     {
    ///         ZoneId = @var.Cloudflare_zone_id,
    ///         Certificate = "-----INSERT CERTIFICATE-----",
    ///         PrivateKey = "-----INSERT PRIVATE KEY-----",
    ///         Type = "per-hostname",
    ///     });
    /// 
    ///     var myPerHostnameAop = new Cloudflare.AuthenticatedOriginPulls("myPerHostnameAop", new()
    ///     {
    ///         ZoneId = @var.Cloudflare_zone_id,
    ///         AuthenticatedOriginPullsCertificate = myPerHostnameAopCert.Id,
    ///         Hostname = "aop.example.com",
    ///         Enabled = true,
    ///     });
    /// 
    /// });
    /// ```
    /// 
    /// ## Import
    /// 
    /// Authenticated Origin Pull configuration can be imported using a composite ID formed of the zone ID, the form of Authenticated Origin Pulls, and the certificate ID, with each section filled or left blank e.g. # Import Authenticated Origin Pull configuration
    /// 
    /// ```sh
    ///  $ pulumi import cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls my_aop 023e105f4ecef8ad9ca31a8372d0c353//
    /// ```
    /// 
    /// # Import Per-Zone Authenticated Origin Pull configuration
    /// 
    /// ```sh
    ///  $ pulumi import cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls my_per_zone_aop 023e105f4ecef8ad9ca31a8372d0c353/2458ce5a-0c35-4c7f-82c7-8e9487d3ff60/
    /// ```
    /// 
    /// # Import Per-Hostname Authenticated Origin Pull configuration
    /// 
    /// ```sh
    ///  $ pulumi import cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls my_per_hostname_aop 023e105f4ecef8ad9ca31a8372d0c353/2458ce5a-0c35-4c7f-82c7-8e9487d3ff60/aop.example.com
    /// ```
    /// </summary>
    [CloudflareResourceType("cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls")]
    public partial class AuthenticatedOriginPulls : global::Pulumi.CustomResource
    {
        /// <summary>
        /// The id of an uploaded Authenticated Origin Pulls certificate. If no hostname is provided, this certificate will be used zone wide as Per-Zone Authenticated Origin Pulls.
        /// </summary>
        [Output("authenticatedOriginPullsCertificate")]
        public Output<string?> AuthenticatedOriginPullsCertificate { get; private set; } = null!;

        /// <summary>
        /// Whether or not to enable Authenticated Origin Pulls on the given zone or hostname.
        /// </summary>
        [Output("enabled")]
        public Output<bool> Enabled { get; private set; } = null!;

        /// <summary>
        /// Specify a hostname to enable Per-Hostname Authenticated Origin Pulls on, using the provided certificate.
        /// </summary>
        [Output("hostname")]
        public Output<string?> Hostname { get; private set; } = null!;

        /// <summary>
        /// The zone ID to upload the certificate to.
        /// </summary>
        [Output("zoneId")]
        public Output<string> ZoneId { get; private set; } = null!;


        /// <summary>
        /// Create a AuthenticatedOriginPulls resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AuthenticatedOriginPulls(string name, AuthenticatedOriginPullsArgs args, CustomResourceOptions? options = null)
            : base("cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls", name, args ?? new AuthenticatedOriginPullsArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AuthenticatedOriginPulls(string name, Input<string> id, AuthenticatedOriginPullsState? state = null, CustomResourceOptions? options = null)
            : base("cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing AuthenticatedOriginPulls resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AuthenticatedOriginPulls Get(string name, Input<string> id, AuthenticatedOriginPullsState? state = null, CustomResourceOptions? options = null)
        {
            return new AuthenticatedOriginPulls(name, id, state, options);
        }
    }

    public sealed class AuthenticatedOriginPullsArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The id of an uploaded Authenticated Origin Pulls certificate. If no hostname is provided, this certificate will be used zone wide as Per-Zone Authenticated Origin Pulls.
        /// </summary>
        [Input("authenticatedOriginPullsCertificate")]
        public Input<string>? AuthenticatedOriginPullsCertificate { get; set; }

        /// <summary>
        /// Whether or not to enable Authenticated Origin Pulls on the given zone or hostname.
        /// </summary>
        [Input("enabled", required: true)]
        public Input<bool> Enabled { get; set; } = null!;

        /// <summary>
        /// Specify a hostname to enable Per-Hostname Authenticated Origin Pulls on, using the provided certificate.
        /// </summary>
        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// The zone ID to upload the certificate to.
        /// </summary>
        [Input("zoneId", required: true)]
        public Input<string> ZoneId { get; set; } = null!;

        public AuthenticatedOriginPullsArgs()
        {
        }
        public static new AuthenticatedOriginPullsArgs Empty => new AuthenticatedOriginPullsArgs();
    }

    public sealed class AuthenticatedOriginPullsState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The id of an uploaded Authenticated Origin Pulls certificate. If no hostname is provided, this certificate will be used zone wide as Per-Zone Authenticated Origin Pulls.
        /// </summary>
        [Input("authenticatedOriginPullsCertificate")]
        public Input<string>? AuthenticatedOriginPullsCertificate { get; set; }

        /// <summary>
        /// Whether or not to enable Authenticated Origin Pulls on the given zone or hostname.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Specify a hostname to enable Per-Hostname Authenticated Origin Pulls on, using the provided certificate.
        /// </summary>
        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        /// <summary>
        /// The zone ID to upload the certificate to.
        /// </summary>
        [Input("zoneId")]
        public Input<string>? ZoneId { get; set; }

        public AuthenticatedOriginPullsState()
        {
        }
        public static new AuthenticatedOriginPullsState Empty => new AuthenticatedOriginPullsState();
    }
}
