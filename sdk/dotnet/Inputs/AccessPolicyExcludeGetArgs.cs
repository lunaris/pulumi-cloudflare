// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class AccessPolicyExcludeGetArgs : Pulumi.ResourceArgs
    {
        [Input("anyValidServiceToken")]
        public Input<bool>? AnyValidServiceToken { get; set; }

        [Input("azures")]
        private InputList<Inputs.AccessPolicyExcludeAzureGetArgs>? _azures;
        public InputList<Inputs.AccessPolicyExcludeAzureGetArgs> Azures
        {
            get => _azures ?? (_azures = new InputList<Inputs.AccessPolicyExcludeAzureGetArgs>());
            set => _azures = value;
        }

        [Input("certificate")]
        public Input<bool>? Certificate { get; set; }

        [Input("commonName")]
        public Input<string>? CommonName { get; set; }

        [Input("emailDomains")]
        private InputList<string>? _emailDomains;
        public InputList<string> EmailDomains
        {
            get => _emailDomains ?? (_emailDomains = new InputList<string>());
            set => _emailDomains = value;
        }

        [Input("emails")]
        private InputList<string>? _emails;
        public InputList<string> Emails
        {
            get => _emails ?? (_emails = new InputList<string>());
            set => _emails = value;
        }

        [Input("everyone")]
        public Input<bool>? Everyone { get; set; }

        [Input("githubs")]
        private InputList<Inputs.AccessPolicyExcludeGithubGetArgs>? _githubs;
        public InputList<Inputs.AccessPolicyExcludeGithubGetArgs> Githubs
        {
            get => _githubs ?? (_githubs = new InputList<Inputs.AccessPolicyExcludeGithubGetArgs>());
            set => _githubs = value;
        }

        [Input("groups")]
        private InputList<string>? _groups;
        public InputList<string> Groups
        {
            get => _groups ?? (_groups = new InputList<string>());
            set => _groups = value;
        }

        [Input("gsuites")]
        private InputList<Inputs.AccessPolicyExcludeGsuiteGetArgs>? _gsuites;
        public InputList<Inputs.AccessPolicyExcludeGsuiteGetArgs> Gsuites
        {
            get => _gsuites ?? (_gsuites = new InputList<Inputs.AccessPolicyExcludeGsuiteGetArgs>());
            set => _gsuites = value;
        }

        [Input("ips")]
        private InputList<string>? _ips;
        public InputList<string> Ips
        {
            get => _ips ?? (_ips = new InputList<string>());
            set => _ips = value;
        }

        [Input("oktas")]
        private InputList<Inputs.AccessPolicyExcludeOktaGetArgs>? _oktas;
        public InputList<Inputs.AccessPolicyExcludeOktaGetArgs> Oktas
        {
            get => _oktas ?? (_oktas = new InputList<Inputs.AccessPolicyExcludeOktaGetArgs>());
            set => _oktas = value;
        }

        [Input("samls")]
        private InputList<Inputs.AccessPolicyExcludeSamlGetArgs>? _samls;
        public InputList<Inputs.AccessPolicyExcludeSamlGetArgs> Samls
        {
            get => _samls ?? (_samls = new InputList<Inputs.AccessPolicyExcludeSamlGetArgs>());
            set => _samls = value;
        }

        [Input("serviceTokens")]
        private InputList<string>? _serviceTokens;
        public InputList<string> ServiceTokens
        {
            get => _serviceTokens ?? (_serviceTokens = new InputList<string>());
            set => _serviceTokens = value;
        }

        public AccessPolicyExcludeGetArgs()
        {
        }
    }
}
