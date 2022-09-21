// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class PagesProjectDeploymentConfigsPreviewGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("compatibilityDate")]
        public Input<string>? CompatibilityDate { get; set; }

        [Input("compatibilityFlags")]
        private InputList<string>? _compatibilityFlags;
        public InputList<string> CompatibilityFlags
        {
            get => _compatibilityFlags ?? (_compatibilityFlags = new InputList<string>());
            set => _compatibilityFlags = value;
        }

        [Input("d1Databases")]
        private InputMap<object>? _d1Databases;
        public InputMap<object> D1Databases
        {
            get => _d1Databases ?? (_d1Databases = new InputMap<object>());
            set => _d1Databases = value;
        }

        [Input("durableObjectNamespaces")]
        private InputMap<object>? _durableObjectNamespaces;
        public InputMap<object> DurableObjectNamespaces
        {
            get => _durableObjectNamespaces ?? (_durableObjectNamespaces = new InputMap<object>());
            set => _durableObjectNamespaces = value;
        }

        [Input("environmentVariables")]
        private InputMap<object>? _environmentVariables;
        public InputMap<object> EnvironmentVariables
        {
            get => _environmentVariables ?? (_environmentVariables = new InputMap<object>());
            set => _environmentVariables = value;
        }

        [Input("kvNamespaces")]
        private InputMap<object>? _kvNamespaces;
        public InputMap<object> KvNamespaces
        {
            get => _kvNamespaces ?? (_kvNamespaces = new InputMap<object>());
            set => _kvNamespaces = value;
        }

        [Input("r2Buckets")]
        private InputMap<object>? _r2Buckets;
        public InputMap<object> R2Buckets
        {
            get => _r2Buckets ?? (_r2Buckets = new InputMap<object>());
            set => _r2Buckets = value;
        }

        public PagesProjectDeploymentConfigsPreviewGetArgs()
        {
        }
        public static new PagesProjectDeploymentConfigsPreviewGetArgs Empty => new PagesProjectDeploymentConfigsPreviewGetArgs();
    }
}
