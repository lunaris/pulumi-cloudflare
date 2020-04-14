// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class ZoneSettingsOverrideInitialSettingsSecurityHeaderGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// true/false
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// true/false
        /// </summary>
        [Input("includeSubdomains")]
        public Input<bool>? IncludeSubdomains { get; set; }

        /// <summary>
        /// Integer
        /// </summary>
        [Input("maxAge")]
        public Input<int>? MaxAge { get; set; }

        /// <summary>
        /// true/false
        /// </summary>
        [Input("nosniff")]
        public Input<bool>? Nosniff { get; set; }

        /// <summary>
        /// true/false
        /// </summary>
        [Input("preload")]
        public Input<bool>? Preload { get; set; }

        public ZoneSettingsOverrideInitialSettingsSecurityHeaderGetArgs()
        {
        }
    }
}
