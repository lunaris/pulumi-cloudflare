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
    public sealed class RulesetRuleActionParametersOverrides
    {
        /// <summary>
        /// Action to perform in the rule-level override. Valid values are `"block"`, `"challenge"`, `"ddos_dynamic"`, `"execute"`, `"force_connection_close"`, `"js_challenge"`, `"managed_challenge"`, `"log"`, `"rewrite"`, `"score"`, or `"skip"`.
        /// </summary>
        public readonly string? Action;
        /// <summary>
        /// List of tag-based overrides (refer to the nested schema).
        /// </summary>
        public readonly ImmutableArray<Outputs.RulesetRuleActionParametersOverridesCategory> Categories;
        /// <summary>
        /// Defines if the current rule-level override enables or disables the rule.
        /// </summary>
        public readonly bool? Enabled;
        /// <summary>
        /// List of rule-based overrides (refer to the nested schema).
        /// </summary>
        public readonly ImmutableArray<Outputs.RulesetRuleActionParametersOverridesRule> Rules;

        [OutputConstructor]
        private RulesetRuleActionParametersOverrides(
            string? action,

            ImmutableArray<Outputs.RulesetRuleActionParametersOverridesCategory> categories,

            bool? enabled,

            ImmutableArray<Outputs.RulesetRuleActionParametersOverridesRule> rules)
        {
            Action = action;
            Categories = categories;
            Enabled = enabled;
            Rules = rules;
        }
    }
}
