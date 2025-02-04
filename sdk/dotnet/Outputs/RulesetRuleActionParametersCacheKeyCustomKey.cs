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
    public sealed class RulesetRuleActionParametersCacheKeyCustomKey
    {
        public readonly Outputs.RulesetRuleActionParametersCacheKeyCustomKeyCookie? Cookie;
        public readonly Outputs.RulesetRuleActionParametersCacheKeyCustomKeyHeader? Header;
        public readonly Outputs.RulesetRuleActionParametersCacheKeyCustomKeyHost? Host;
        public readonly Outputs.RulesetRuleActionParametersCacheKeyCustomKeyQueryString? QueryString;
        public readonly Outputs.RulesetRuleActionParametersCacheKeyCustomKeyUser? User;

        [OutputConstructor]
        private RulesetRuleActionParametersCacheKeyCustomKey(
            Outputs.RulesetRuleActionParametersCacheKeyCustomKeyCookie? cookie,

            Outputs.RulesetRuleActionParametersCacheKeyCustomKeyHeader? header,

            Outputs.RulesetRuleActionParametersCacheKeyCustomKeyHost? host,

            Outputs.RulesetRuleActionParametersCacheKeyCustomKeyQueryString? queryString,

            Outputs.RulesetRuleActionParametersCacheKeyCustomKeyUser? user)
        {
            Cookie = cookie;
            Header = header;
            Host = host;
            QueryString = queryString;
            User = user;
        }
    }
}
