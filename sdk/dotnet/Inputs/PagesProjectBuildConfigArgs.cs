// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class PagesProjectBuildConfigArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Command used to build project.
        /// </summary>
        [Input("buildCommand")]
        public Input<string>? BuildCommand { get; set; }

        /// <summary>
        /// Output directory of the build.
        /// </summary>
        [Input("destinationDir")]
        public Input<string>? DestinationDir { get; set; }

        /// <summary>
        /// Directory to run the command.
        /// </summary>
        [Input("rootDir")]
        public Input<string>? RootDir { get; set; }

        /// <summary>
        /// The classifying tag for analytics.
        /// </summary>
        [Input("webAnalyticsTag")]
        public Input<string>? WebAnalyticsTag { get; set; }

        /// <summary>
        /// The auth token for analytics.
        /// </summary>
        [Input("webAnalyticsToken")]
        public Input<string>? WebAnalyticsToken { get; set; }

        public PagesProjectBuildConfigArgs()
        {
        }
        public static new PagesProjectBuildConfigArgs Empty => new PagesProjectBuildConfigArgs();
    }
}
