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
    public sealed class AccessPolicyRequire
    {
        public readonly bool? AnyValidServiceToken;
        public readonly ImmutableArray<Outputs.AccessPolicyRequireAzure> Azures;
        public readonly bool? Certificate;
        public readonly string? CommonName;
        public readonly ImmutableArray<string> EmailDomains;
        public readonly ImmutableArray<string> Emails;
        public readonly bool? Everyone;
        public readonly ImmutableArray<Outputs.AccessPolicyRequireGithub> Githubs;
        public readonly ImmutableArray<string> Groups;
        public readonly ImmutableArray<Outputs.AccessPolicyRequireGsuite> Gsuites;
        public readonly ImmutableArray<string> Ips;
        public readonly ImmutableArray<Outputs.AccessPolicyRequireOkta> Oktas;
        public readonly ImmutableArray<Outputs.AccessPolicyRequireSaml> Samls;
        public readonly ImmutableArray<string> ServiceTokens;

        [OutputConstructor]
        private AccessPolicyRequire(
            bool? anyValidServiceToken,

            ImmutableArray<Outputs.AccessPolicyRequireAzure> azures,

            bool? certificate,

            string? commonName,

            ImmutableArray<string> emailDomains,

            ImmutableArray<string> emails,

            bool? everyone,

            ImmutableArray<Outputs.AccessPolicyRequireGithub> githubs,

            ImmutableArray<string> groups,

            ImmutableArray<Outputs.AccessPolicyRequireGsuite> gsuites,

            ImmutableArray<string> ips,

            ImmutableArray<Outputs.AccessPolicyRequireOkta> oktas,

            ImmutableArray<Outputs.AccessPolicyRequireSaml> samls,

            ImmutableArray<string> serviceTokens)
        {
            AnyValidServiceToken = anyValidServiceToken;
            Azures = azures;
            Certificate = certificate;
            CommonName = commonName;
            EmailDomains = emailDomains;
            Emails = emails;
            Everyone = everyone;
            Githubs = githubs;
            Groups = groups;
            Gsuites = gsuites;
            Ips = ips;
            Oktas = oktas;
            Samls = samls;
            ServiceTokens = serviceTokens;
        }
    }
}
