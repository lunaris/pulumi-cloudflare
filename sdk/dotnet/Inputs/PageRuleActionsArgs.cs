// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Cloudflare.Inputs
{

    public sealed class PageRuleActionsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("alwaysOnline")]
        public Input<string>? AlwaysOnline { get; set; }

        /// <summary>
        /// Boolean of whether this action is enabled. Default: false.
        /// </summary>
        [Input("alwaysUseHttps")]
        public Input<bool>? AlwaysUseHttps { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("automaticHttpsRewrites")]
        public Input<string>? AutomaticHttpsRewrites { get; set; }

        /// <summary>
        /// The Time To Live for the browser cache. `0` means 'Respect Existing Headers'
        /// </summary>
        [Input("browserCacheTtl")]
        public Input<string>? BrowserCacheTtl { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("browserCheck")]
        public Input<string>? BrowserCheck { get; set; }

        /// <summary>
        /// String value of cookie name to conditionally bypass cache the page.
        /// </summary>
        [Input("bypassCacheOnCookie")]
        public Input<string>? BypassCacheOnCookie { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("cacheByDeviceType")]
        public Input<string>? CacheByDeviceType { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("cacheDeceptionArmor")]
        public Input<string>? CacheDeceptionArmor { get; set; }

        /// <summary>
        /// Controls how Cloudflare creates Cache Keys used to identify files in cache. See below for full description.
        /// </summary>
        [Input("cacheKeyFields")]
        public Input<Inputs.PageRuleActionsCacheKeyFieldsArgs>? CacheKeyFields { get; set; }

        /// <summary>
        /// Whether to set the cache level to `"bypass"`, `"basic"`, `"simplified"`, `"aggressive"`, or `"cache_everything"`.
        /// </summary>
        [Input("cacheLevel")]
        public Input<string>? CacheLevel { get; set; }

        /// <summary>
        /// String value of cookie name to conditionally cache the page.
        /// </summary>
        [Input("cacheOnCookie")]
        public Input<string>? CacheOnCookie { get; set; }

        [Input("cacheTtlByStatuses")]
        private InputList<Inputs.PageRuleActionsCacheTtlByStatusArgs>? _cacheTtlByStatuses;

        /// <summary>
        /// Set cache TTL based on the response status from the origin web server. Can be specified multiple times. See below for full description.
        /// </summary>
        public InputList<Inputs.PageRuleActionsCacheTtlByStatusArgs> CacheTtlByStatuses
        {
            get => _cacheTtlByStatuses ?? (_cacheTtlByStatuses = new InputList<Inputs.PageRuleActionsCacheTtlByStatusArgs>());
            set => _cacheTtlByStatuses = value;
        }

        /// <summary>
        /// Boolean of whether this action is enabled. Default: false.
        /// </summary>
        [Input("disableApps")]
        public Input<bool>? DisableApps { get; set; }

        /// <summary>
        /// Boolean of whether this action is enabled. Default: false.
        /// </summary>
        [Input("disablePerformance")]
        public Input<bool>? DisablePerformance { get; set; }

        /// <summary>
        /// Boolean of whether this action is enabled. Default: false.
        /// </summary>
        [Input("disableRailgun")]
        public Input<bool>? DisableRailgun { get; set; }

        /// <summary>
        /// Boolean of whether this action is enabled. Default: false.
        /// </summary>
        [Input("disableSecurity")]
        public Input<bool>? DisableSecurity { get; set; }

        /// <summary>
        /// Boolean of whether this action is enabled. Default: false.
        /// </summary>
        [Input("disableZaraz")]
        public Input<bool>? DisableZaraz { get; set; }

        /// <summary>
        /// The Time To Live for the edge cache.
        /// </summary>
        [Input("edgeCacheTtl")]
        public Input<int>? EdgeCacheTtl { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("emailObfuscation")]
        public Input<string>? EmailObfuscation { get; set; }

        /// <summary>
        /// Whether origin Cache-Control action is `"on"` or `"off"`.
        /// </summary>
        [Input("explicitCacheControl")]
        public Input<string>? ExplicitCacheControl { get; set; }

        /// <summary>
        /// The URL to forward to, and with what status. See below.
        /// </summary>
        [Input("forwardingUrl")]
        public Input<Inputs.PageRuleActionsForwardingUrlArgs>? ForwardingUrl { get; set; }

        /// <summary>
        /// Value of the Host header to send.
        /// </summary>
        [Input("hostHeaderOverride")]
        public Input<string>? HostHeaderOverride { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("ipGeolocation")]
        public Input<string>? IpGeolocation { get; set; }

        [Input("minifies")]
        private InputList<Inputs.PageRuleActionsMinifyArgs>? _minifies;

        /// <summary>
        /// The configuration for HTML, CSS and JS minification. See below for full list of options.
        /// </summary>
        public InputList<Inputs.PageRuleActionsMinifyArgs> Minifies
        {
            get => _minifies ?? (_minifies = new InputList<Inputs.PageRuleActionsMinifyArgs>());
            set => _minifies = value;
        }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("mirage")]
        public Input<string>? Mirage { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("opportunisticEncryption")]
        public Input<string>? OpportunisticEncryption { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("originErrorPagePassThru")]
        public Input<string>? OriginErrorPagePassThru { get; set; }

        /// <summary>
        /// Whether this action is `"off"`, `"lossless"` or `"lossy"`.
        /// </summary>
        [Input("polish")]
        public Input<string>? Polish { get; set; }

        /// <summary>
        /// Overridden origin server name.
        /// </summary>
        [Input("resolveOverride")]
        public Input<string>? ResolveOverride { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("respectStrongEtag")]
        public Input<string>? RespectStrongEtag { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("responseBuffering")]
        public Input<string>? ResponseBuffering { get; set; }

        /// <summary>
        /// Whether to set the rocket loader to `"on"`, `"off"`.
        /// </summary>
        [Input("rocketLoader")]
        public Input<string>? RocketLoader { get; set; }

        /// <summary>
        /// Whether to set the security level to `"off"`, `"essentially_off"`, `"low"`, `"medium"`, `"high"`, or `"under_attack"`.
        /// </summary>
        [Input("securityLevel")]
        public Input<string>? SecurityLevel { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("serverSideExclude")]
        public Input<string>? ServerSideExclude { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("sortQueryStringForCache")]
        public Input<string>? SortQueryStringForCache { get; set; }

        /// <summary>
        /// Whether to set the SSL mode to `"off"`, `"flexible"`, `"full"`, `"strict"`, or `"origin_pull"`.
        /// </summary>
        [Input("ssl")]
        public Input<string>? Ssl { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("trueClientIpHeader")]
        public Input<string>? TrueClientIpHeader { get; set; }

        /// <summary>
        /// Whether this action is `"on"` or `"off"`.
        /// </summary>
        [Input("waf")]
        public Input<string>? Waf { get; set; }

        public PageRuleActionsArgs()
        {
        }
    }
}
