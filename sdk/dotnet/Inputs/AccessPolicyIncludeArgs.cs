// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class AccessPolicyIncludeArgs : Pulumi.ResourceArgs
    {
        [Input("anyValidServiceToken")]
        public Input<bool>? AnyValidServiceToken { get; set; }

        [Input("azures")]
        private InputList<Inputs.AccessPolicyIncludeAzureArgs>? _azures;
        public InputList<Inputs.AccessPolicyIncludeAzureArgs> Azures
        {
            get => _azures ?? (_azures = new InputList<Inputs.AccessPolicyIncludeAzureArgs>());
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
        private InputList<Inputs.AccessPolicyIncludeGithubArgs>? _githubs;
        public InputList<Inputs.AccessPolicyIncludeGithubArgs> Githubs
        {
            get => _githubs ?? (_githubs = new InputList<Inputs.AccessPolicyIncludeGithubArgs>());
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
        private InputList<Inputs.AccessPolicyIncludeGsuiteArgs>? _gsuites;
        public InputList<Inputs.AccessPolicyIncludeGsuiteArgs> Gsuites
        {
            get => _gsuites ?? (_gsuites = new InputList<Inputs.AccessPolicyIncludeGsuiteArgs>());
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
        private InputList<Inputs.AccessPolicyIncludeOktaArgs>? _oktas;
        public InputList<Inputs.AccessPolicyIncludeOktaArgs> Oktas
        {
            get => _oktas ?? (_oktas = new InputList<Inputs.AccessPolicyIncludeOktaArgs>());
            set => _oktas = value;
        }

        [Input("samls")]
        private InputList<Inputs.AccessPolicyIncludeSamlArgs>? _samls;
        public InputList<Inputs.AccessPolicyIncludeSamlArgs> Samls
        {
            get => _samls ?? (_samls = new InputList<Inputs.AccessPolicyIncludeSamlArgs>());
            set => _samls = value;
        }

        [Input("serviceTokens")]
        private InputList<string>? _serviceTokens;
        public InputList<string> ServiceTokens
        {
            get => _serviceTokens ?? (_serviceTokens = new InputList<string>());
            set => _serviceTokens = value;
        }

        public AccessPolicyIncludeArgs()
        {
        }
    }
}
