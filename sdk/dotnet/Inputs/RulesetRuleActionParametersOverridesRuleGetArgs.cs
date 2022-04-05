// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class RulesetRuleActionParametersOverridesRuleGetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Action to perform in the rule-level override. Valid values are `"block"`, `"challenge"`, `"ddos_dynamic"`, `"execute"`, `"force_connection_close"`, `"js_challenge"`, `"managed_challenge"`, `"log"`, `"rewrite"`, `"score"`, or `"skip"`.
        /// </summary>
        [Input("action")]
        public Input<string>? Action { get; set; }

        /// <summary>
        /// Defines if the current rule-level override enables or disables the rule.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Rule ID to apply the override to.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.
        /// </summary>
        [Input("scoreThreshold")]
        public Input<int>? ScoreThreshold { get; set; }

        /// <summary>
        /// Sensitivity level for a ruleset rule override.
        /// </summary>
        [Input("sensitivityLevel")]
        public Input<string>? SensitivityLevel { get; set; }

        public RulesetRuleActionParametersOverridesRuleGetArgs()
        {
        }
    }
}
