// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class IpListItemArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// A note that can be used to annotate the item.
        /// </summary>
        [Input("comment")]
        public Input<string>? Comment { get; set; }

        /// <summary>
        /// The IPv4 address, IPv4 CIDR or IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /64.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public IpListItemArgs()
        {
        }
        public static new IpListItemArgs Empty => new IpListItemArgs();
    }
}
