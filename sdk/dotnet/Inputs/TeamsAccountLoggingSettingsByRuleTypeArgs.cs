// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class TeamsAccountLoggingSettingsByRuleTypeArgs : global::Pulumi.ResourceArgs
    {
        [Input("dns", required: true)]
        public Input<Inputs.TeamsAccountLoggingSettingsByRuleTypeDnsArgs> Dns { get; set; } = null!;

        [Input("http", required: true)]
        public Input<Inputs.TeamsAccountLoggingSettingsByRuleTypeHttpArgs> Http { get; set; } = null!;

        [Input("l4", required: true)]
        public Input<Inputs.TeamsAccountLoggingSettingsByRuleTypeL4Args> L4 { get; set; } = null!;

        public TeamsAccountLoggingSettingsByRuleTypeArgs()
        {
        }
        public static new TeamsAccountLoggingSettingsByRuleTypeArgs Empty => new TeamsAccountLoggingSettingsByRuleTypeArgs();
    }
}
