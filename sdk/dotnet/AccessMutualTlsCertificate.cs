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
    /// Provides a Cloudflare Access Mutual TLS Certificate resource. Mutual TLS authentication ensures that the traffic is secure and trusted in both directions between a client and server and can be used with Access to only allows requests from devices with a corresponding client certificate.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Cloudflare = Pulumi.Cloudflare;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var myCert = new Cloudflare.AccessMutualTlsCertificate("myCert", new Cloudflare.AccessMutualTlsCertificateArgs
    ///         {
    ///             ZoneId = "1d5fdc9e88c8a8c4518b068cd94331fe",
    ///             Name = "My Root Cert",
    ///             Certificate = @var.Ca_pem,
    ///             AssociatedHostnames = 
    ///             {
    ///                 "staging.example.com",
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ## Import
    /// 
    /// Access Mutual TLS Certificate can be imported using a composite ID composed of the account or zone and the mutual TLS certificate ID in the form of`account/ACCOUNT_ID/MUTUAL_TLS_CERTIFICATE_ID` or `zone/ZONE_ID/MUTUAL_TLS_CERTIFICATE_ID`.
    /// 
    /// ```sh
    ///  $ pulumi import cloudflare:index/accessMutualTlsCertificate:AccessMutualTlsCertificate staging account/cb029e245cfdd66dc8d2e570d5dd3322/d41d8cd98f00b204e9800998ecf8427e
    /// ```
    /// </summary>
    [CloudflareResourceType("cloudflare:index/accessMutualTlsCertificate:AccessMutualTlsCertificate")]
    public partial class AccessMutualTlsCertificate : Pulumi.CustomResource
    {
        /// <summary>
        /// The account to which the certificate should be added. Conflicts with `zone_id`.
        /// </summary>
        [Output("accountId")]
        public Output<string> AccountId { get; private set; } = null!;

        /// <summary>
        /// The hostnames that will be prompted for this certificate.
        /// </summary>
        [Output("associatedHostnames")]
        public Output<ImmutableArray<string>> AssociatedHostnames { get; private set; } = null!;

        /// <summary>
        /// The Root CA for your certificates.
        /// </summary>
        [Output("certificate")]
        public Output<string?> Certificate { get; private set; } = null!;

        [Output("fingerprint")]
        public Output<string> Fingerprint { get; private set; } = null!;

        /// <summary>
        /// The name of the certificate.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The DNS zone to which the certificate should be added. Conflicts with `account_id`.
        /// </summary>
        [Output("zoneId")]
        public Output<string> ZoneId { get; private set; } = null!;


        /// <summary>
        /// Create a AccessMutualTlsCertificate resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AccessMutualTlsCertificate(string name, AccessMutualTlsCertificateArgs args, CustomResourceOptions? options = null)
            : base("cloudflare:index/accessMutualTlsCertificate:AccessMutualTlsCertificate", name, args ?? new AccessMutualTlsCertificateArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AccessMutualTlsCertificate(string name, Input<string> id, AccessMutualTlsCertificateState? state = null, CustomResourceOptions? options = null)
            : base("cloudflare:index/accessMutualTlsCertificate:AccessMutualTlsCertificate", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing AccessMutualTlsCertificate resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AccessMutualTlsCertificate Get(string name, Input<string> id, AccessMutualTlsCertificateState? state = null, CustomResourceOptions? options = null)
        {
            return new AccessMutualTlsCertificate(name, id, state, options);
        }
    }

    public sealed class AccessMutualTlsCertificateArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The account to which the certificate should be added. Conflicts with `zone_id`.
        /// </summary>
        [Input("accountId")]
        public Input<string>? AccountId { get; set; }

        [Input("associatedHostnames")]
        private InputList<string>? _associatedHostnames;

        /// <summary>
        /// The hostnames that will be prompted for this certificate.
        /// </summary>
        public InputList<string> AssociatedHostnames
        {
            get => _associatedHostnames ?? (_associatedHostnames = new InputList<string>());
            set => _associatedHostnames = value;
        }

        /// <summary>
        /// The Root CA for your certificates.
        /// </summary>
        [Input("certificate")]
        public Input<string>? Certificate { get; set; }

        /// <summary>
        /// The name of the certificate.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The DNS zone to which the certificate should be added. Conflicts with `account_id`.
        /// </summary>
        [Input("zoneId")]
        public Input<string>? ZoneId { get; set; }

        public AccessMutualTlsCertificateArgs()
        {
        }
    }

    public sealed class AccessMutualTlsCertificateState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The account to which the certificate should be added. Conflicts with `zone_id`.
        /// </summary>
        [Input("accountId")]
        public Input<string>? AccountId { get; set; }

        [Input("associatedHostnames")]
        private InputList<string>? _associatedHostnames;

        /// <summary>
        /// The hostnames that will be prompted for this certificate.
        /// </summary>
        public InputList<string> AssociatedHostnames
        {
            get => _associatedHostnames ?? (_associatedHostnames = new InputList<string>());
            set => _associatedHostnames = value;
        }

        /// <summary>
        /// The Root CA for your certificates.
        /// </summary>
        [Input("certificate")]
        public Input<string>? Certificate { get; set; }

        [Input("fingerprint")]
        public Input<string>? Fingerprint { get; set; }

        /// <summary>
        /// The name of the certificate.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The DNS zone to which the certificate should be added. Conflicts with `account_id`.
        /// </summary>
        [Input("zoneId")]
        public Input<string>? ZoneId { get; set; }

        public AccessMutualTlsCertificateState()
        {
        }
    }
}
