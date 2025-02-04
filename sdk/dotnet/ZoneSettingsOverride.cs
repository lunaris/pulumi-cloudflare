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
    /// Provides a resource which customizes Cloudflare zone settings. Note that after destroying this resource Zone Settings will be reset to their initial values.
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
    ///     var test = new Cloudflare.ZoneSettingsOverride("test", new()
    ///     {
    ///         ZoneId = @var.Cloudflare_zone_id,
    ///         Settings = new Cloudflare.Inputs.ZoneSettingsOverrideSettingsArgs
    ///         {
    ///             Brotli = "on",
    ///             ChallengeTtl = 2700,
    ///             SecurityLevel = "high",
    ///             OpportunisticEncryption = "on",
    ///             AutomaticHttpsRewrites = "on",
    ///             Mirage = "on",
    ///             Waf = "on",
    ///             Minify = new Cloudflare.Inputs.ZoneSettingsOverrideSettingsMinifyArgs
    ///             {
    ///                 Css = "on",
    ///                 Js = "off",
    ///                 Html = "off",
    ///             },
    ///             SecurityHeader = new Cloudflare.Inputs.ZoneSettingsOverrideSettingsSecurityHeaderArgs
    ///             {
    ///                 Enabled = true,
    ///             },
    ///         },
    ///     });
    /// 
    /// });
    /// ```
    /// </summary>
    [CloudflareResourceType("cloudflare:index/zoneSettingsOverride:ZoneSettingsOverride")]
    public partial class ZoneSettingsOverride : global::Pulumi.CustomResource
    {
        /// <summary>
        /// Settings present in the zone at the time the resource is created. This will be used to restore the original settings when this resource is destroyed. Shares the same schema as the `settings` attribute (Above).
        /// </summary>
        [Output("initialSettings")]
        public Output<ImmutableArray<Outputs.ZoneSettingsOverrideInitialSetting>> InitialSettings { get; private set; } = null!;

        /// <summary>
        /// Time when this resource was created and the `initial_settings` were set.
        /// </summary>
        [Output("initialSettingsReadAt")]
        public Output<string> InitialSettingsReadAt { get; private set; } = null!;

        /// <summary>
        /// Which of the current `settings` are not able to be set by the user. Which settings these are is determined by plan level and user permissions.
        /// - `zone_status`. A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup.
        /// - `zone_type`. Status of the zone. Valid values: active, pending, initializing, moved, deleted, deactivated.
        /// </summary>
        [Output("readonlySettings")]
        public Output<ImmutableArray<string>> ReadonlySettings { get; private set; } = null!;

        /// <summary>
        /// Settings overrides that will be applied to the zone. If a setting is not specified the existing setting will be used. For a full list of available settings see below.
        /// </summary>
        [Output("settings")]
        public Output<Outputs.ZoneSettingsOverrideSettings> Settings { get; private set; } = null!;

        /// <summary>
        /// The DNS zone ID to which apply settings.
        /// </summary>
        [Output("zoneId")]
        public Output<string> ZoneId { get; private set; } = null!;

        [Output("zoneStatus")]
        public Output<string> ZoneStatus { get; private set; } = null!;

        [Output("zoneType")]
        public Output<string> ZoneType { get; private set; } = null!;


        /// <summary>
        /// Create a ZoneSettingsOverride resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ZoneSettingsOverride(string name, ZoneSettingsOverrideArgs args, CustomResourceOptions? options = null)
            : base("cloudflare:index/zoneSettingsOverride:ZoneSettingsOverride", name, args ?? new ZoneSettingsOverrideArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ZoneSettingsOverride(string name, Input<string> id, ZoneSettingsOverrideState? state = null, CustomResourceOptions? options = null)
            : base("cloudflare:index/zoneSettingsOverride:ZoneSettingsOverride", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ZoneSettingsOverride resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ZoneSettingsOverride Get(string name, Input<string> id, ZoneSettingsOverrideState? state = null, CustomResourceOptions? options = null)
        {
            return new ZoneSettingsOverride(name, id, state, options);
        }
    }

    public sealed class ZoneSettingsOverrideArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Settings overrides that will be applied to the zone. If a setting is not specified the existing setting will be used. For a full list of available settings see below.
        /// </summary>
        [Input("settings")]
        public Input<Inputs.ZoneSettingsOverrideSettingsArgs>? Settings { get; set; }

        /// <summary>
        /// The DNS zone ID to which apply settings.
        /// </summary>
        [Input("zoneId", required: true)]
        public Input<string> ZoneId { get; set; } = null!;

        public ZoneSettingsOverrideArgs()
        {
        }
        public static new ZoneSettingsOverrideArgs Empty => new ZoneSettingsOverrideArgs();
    }

    public sealed class ZoneSettingsOverrideState : global::Pulumi.ResourceArgs
    {
        [Input("initialSettings")]
        private InputList<Inputs.ZoneSettingsOverrideInitialSettingGetArgs>? _initialSettings;

        /// <summary>
        /// Settings present in the zone at the time the resource is created. This will be used to restore the original settings when this resource is destroyed. Shares the same schema as the `settings` attribute (Above).
        /// </summary>
        public InputList<Inputs.ZoneSettingsOverrideInitialSettingGetArgs> InitialSettings
        {
            get => _initialSettings ?? (_initialSettings = new InputList<Inputs.ZoneSettingsOverrideInitialSettingGetArgs>());
            set => _initialSettings = value;
        }

        /// <summary>
        /// Time when this resource was created and the `initial_settings` were set.
        /// </summary>
        [Input("initialSettingsReadAt")]
        public Input<string>? InitialSettingsReadAt { get; set; }

        [Input("readonlySettings")]
        private InputList<string>? _readonlySettings;

        /// <summary>
        /// Which of the current `settings` are not able to be set by the user. Which settings these are is determined by plan level and user permissions.
        /// - `zone_status`. A full zone implies that DNS is hosted with Cloudflare. A partial zone is typically a partner-hosted zone or a CNAME setup.
        /// - `zone_type`. Status of the zone. Valid values: active, pending, initializing, moved, deleted, deactivated.
        /// </summary>
        public InputList<string> ReadonlySettings
        {
            get => _readonlySettings ?? (_readonlySettings = new InputList<string>());
            set => _readonlySettings = value;
        }

        /// <summary>
        /// Settings overrides that will be applied to the zone. If a setting is not specified the existing setting will be used. For a full list of available settings see below.
        /// </summary>
        [Input("settings")]
        public Input<Inputs.ZoneSettingsOverrideSettingsGetArgs>? Settings { get; set; }

        /// <summary>
        /// The DNS zone ID to which apply settings.
        /// </summary>
        [Input("zoneId")]
        public Input<string>? ZoneId { get; set; }

        [Input("zoneStatus")]
        public Input<string>? ZoneStatus { get; set; }

        [Input("zoneType")]
        public Input<string>? ZoneType { get; set; }

        public ZoneSettingsOverrideState()
        {
        }
        public static new ZoneSettingsOverrideState Empty => new ZoneSettingsOverrideState();
    }
}
