// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Outputs
{

    [OutputType]
    public sealed class ZoneSettingsOverrideSettingsSecurityHeader
    {
        /// <summary>
        /// true/false
        /// </summary>
        public readonly bool? Enabled;
        /// <summary>
        /// true/false
        /// </summary>
        public readonly bool? IncludeSubdomains;
        /// <summary>
        /// Integer
        /// </summary>
        public readonly int? MaxAge;
        /// <summary>
        /// true/false
        /// </summary>
        public readonly bool? Nosniff;
        /// <summary>
        /// true/false
        /// </summary>
        public readonly bool? Preload;

        [OutputConstructor]
        private ZoneSettingsOverrideSettingsSecurityHeader(
            bool? enabled,

            bool? includeSubdomains,

            int? maxAge,

            bool? nosniff,

            bool? preload)
        {
            Enabled = enabled;
            IncludeSubdomains = includeSubdomains;
            MaxAge = maxAge;
            Nosniff = nosniff;
            Preload = preload;
        }
    }
}
