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
    /// Provides a Cloudflare Zone Lockdown resource. Zone Lockdown allows you to define one or more URLs (with wildcard matching on the domain or path) that will only permit access if the request originates from an IP address that matches a safelist of one or more IP addresses and/or IP ranges.
    /// </summary>
    public partial class ZoneLockdown : Pulumi.CustomResource
    {
        /// <summary>
        /// A list of IP addresses or IP ranges to match the request against specified in target, value pairs.  It's a complex value. See description below.   The order of the configuration entries is unimportant.
        /// </summary>
        [Output("configurations")]
        public Output<ImmutableArray<Outputs.ZoneLockdownConfiguration>> Configurations { get; private set; } = null!;

        /// <summary>
        /// A description about the lockdown entry. Typically used as a reminder or explanation for the lockdown.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Boolean of whether this zone lockdown is currently paused. Default: false.
        /// </summary>
        [Output("paused")]
        public Output<bool?> Paused { get; private set; } = null!;

        [Output("priority")]
        public Output<int?> Priority { get; private set; } = null!;

        /// <summary>
        /// A list of simple wildcard patterns to match requests against. The order of the urls is unimportant.
        /// </summary>
        [Output("urls")]
        public Output<ImmutableArray<string>> Urls { get; private set; } = null!;

        /// <summary>
        /// The DNS zone ID to which the access rule should be added.
        /// </summary>
        [Output("zoneId")]
        public Output<string> ZoneId { get; private set; } = null!;


        /// <summary>
        /// Create a ZoneLockdown resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ZoneLockdown(string name, ZoneLockdownArgs args, CustomResourceOptions? options = null)
            : base("cloudflare:index/zoneLockdown:ZoneLockdown", name, args ?? new ZoneLockdownArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ZoneLockdown(string name, Input<string> id, ZoneLockdownState? state = null, CustomResourceOptions? options = null)
            : base("cloudflare:index/zoneLockdown:ZoneLockdown", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ZoneLockdown resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ZoneLockdown Get(string name, Input<string> id, ZoneLockdownState? state = null, CustomResourceOptions? options = null)
        {
            return new ZoneLockdown(name, id, state, options);
        }
    }

    public sealed class ZoneLockdownArgs : Pulumi.ResourceArgs
    {
        [Input("configurations", required: true)]
        private InputList<Inputs.ZoneLockdownConfigurationArgs>? _configurations;

        /// <summary>
        /// A list of IP addresses or IP ranges to match the request against specified in target, value pairs.  It's a complex value. See description below.   The order of the configuration entries is unimportant.
        /// </summary>
        public InputList<Inputs.ZoneLockdownConfigurationArgs> Configurations
        {
            get => _configurations ?? (_configurations = new InputList<Inputs.ZoneLockdownConfigurationArgs>());
            set => _configurations = value;
        }

        /// <summary>
        /// A description about the lockdown entry. Typically used as a reminder or explanation for the lockdown.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Boolean of whether this zone lockdown is currently paused. Default: false.
        /// </summary>
        [Input("paused")]
        public Input<bool>? Paused { get; set; }

        [Input("priority")]
        public Input<int>? Priority { get; set; }

        [Input("urls", required: true)]
        private InputList<string>? _urls;

        /// <summary>
        /// A list of simple wildcard patterns to match requests against. The order of the urls is unimportant.
        /// </summary>
        public InputList<string> Urls
        {
            get => _urls ?? (_urls = new InputList<string>());
            set => _urls = value;
        }

        /// <summary>
        /// The DNS zone ID to which the access rule should be added.
        /// </summary>
        [Input("zoneId", required: true)]
        public Input<string> ZoneId { get; set; } = null!;

        public ZoneLockdownArgs()
        {
        }
    }

    public sealed class ZoneLockdownState : Pulumi.ResourceArgs
    {
        [Input("configurations")]
        private InputList<Inputs.ZoneLockdownConfigurationGetArgs>? _configurations;

        /// <summary>
        /// A list of IP addresses or IP ranges to match the request against specified in target, value pairs.  It's a complex value. See description below.   The order of the configuration entries is unimportant.
        /// </summary>
        public InputList<Inputs.ZoneLockdownConfigurationGetArgs> Configurations
        {
            get => _configurations ?? (_configurations = new InputList<Inputs.ZoneLockdownConfigurationGetArgs>());
            set => _configurations = value;
        }

        /// <summary>
        /// A description about the lockdown entry. Typically used as a reminder or explanation for the lockdown.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Boolean of whether this zone lockdown is currently paused. Default: false.
        /// </summary>
        [Input("paused")]
        public Input<bool>? Paused { get; set; }

        [Input("priority")]
        public Input<int>? Priority { get; set; }

        [Input("urls")]
        private InputList<string>? _urls;

        /// <summary>
        /// A list of simple wildcard patterns to match requests against. The order of the urls is unimportant.
        /// </summary>
        public InputList<string> Urls
        {
            get => _urls ?? (_urls = new InputList<string>());
            set => _urls = value;
        }

        /// <summary>
        /// The DNS zone ID to which the access rule should be added.
        /// </summary>
        [Input("zoneId")]
        public Input<string>? ZoneId { get; set; }

        public ZoneLockdownState()
        {
        }
    }
}
