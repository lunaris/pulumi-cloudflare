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
    public sealed class AccessPolicyInclude
    {
        public readonly bool? AnyValidServiceToken;
        public readonly string? AuthMethod;
        public readonly ImmutableArray<Outputs.AccessPolicyIncludeAzure> Azures;
        public readonly bool? Certificate;
        public readonly string? CommonName;
        public readonly ImmutableArray<string> EmailDomains;
        public readonly ImmutableArray<string> Emails;
        public readonly bool? Everyone;
        public readonly ImmutableArray<string> Geos;
        public readonly ImmutableArray<Outputs.AccessPolicyIncludeGithub> Githubs;
        public readonly ImmutableArray<string> Groups;
        public readonly ImmutableArray<Outputs.AccessPolicyIncludeGsuite> Gsuites;
        public readonly ImmutableArray<string> Ips;
        public readonly ImmutableArray<Outputs.AccessPolicyIncludeOkta> Oktas;
        public readonly ImmutableArray<Outputs.AccessPolicyIncludeSaml> Samls;
        public readonly ImmutableArray<string> ServiceTokens;

        [OutputConstructor]
        private AccessPolicyInclude(
            bool? anyValidServiceToken,

            string? authMethod,

            ImmutableArray<Outputs.AccessPolicyIncludeAzure> azures,

            bool? certificate,

            string? commonName,

            ImmutableArray<string> emailDomains,

            ImmutableArray<string> emails,

            bool? everyone,

            ImmutableArray<string> geos,

            ImmutableArray<Outputs.AccessPolicyIncludeGithub> githubs,

            ImmutableArray<string> groups,

            ImmutableArray<Outputs.AccessPolicyIncludeGsuite> gsuites,

            ImmutableArray<string> ips,

            ImmutableArray<Outputs.AccessPolicyIncludeOkta> oktas,

            ImmutableArray<Outputs.AccessPolicyIncludeSaml> samls,

            ImmutableArray<string> serviceTokens)
        {
            AnyValidServiceToken = anyValidServiceToken;
            AuthMethod = authMethod;
            Azures = azures;
            Certificate = certificate;
            CommonName = commonName;
            EmailDomains = emailDomains;
            Emails = emails;
            Everyone = everyone;
            Geos = geos;
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
