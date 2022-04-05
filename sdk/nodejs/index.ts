// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export * from "./accessApplication";
export * from "./accessCaCertificate";
export * from "./accessGroup";
export * from "./accessIdentityProvider";
export * from "./accessKeysConfiguration";
export * from "./accessMutualTlsCertificate";
export * from "./accessPolicy";
export * from "./accessRule";
export * from "./accessServiceToken";
export * from "./accountMember";
export * from "./apiToken";
export * from "./argo";
export * from "./argoTunnel";
export * from "./authenticatedOriginPulls";
export * from "./authenticatedOriginPullsCertificate";
export * from "./byoIpPrefix";
export * from "./certificatePack";
export * from "./customHostname";
export * from "./customHostnameFallbackOrigin";
export * from "./customPages";
export * from "./customSsl";
export * from "./devicePolicyCertificates";
export * from "./devicePostureIntegration";
export * from "./devicePostureRule";
export * from "./fallbackDomain";
export * from "./filter";
export * from "./firewallRule";
export * from "./getAccessIdentityProvider";
export * from "./getAccountRoles";
export * from "./getApiTokenPermissionGroups";
export * from "./getDevices";
export * from "./getIpRanges";
export * from "./getOriginCaRootCertificate";
export * from "./getWafGroups";
export * from "./getWafPackages";
export * from "./getWafRules";
export * from "./getZone";
export * from "./getZoneDnssec";
export * from "./getZones";
export * from "./greTunnel";
export * from "./healthcheck";
export * from "./ipList";
export * from "./ipsecTunnel";
export * from "./loadBalancer";
export * from "./loadBalancerMonitor";
export * from "./loadBalancerPool";
export * from "./logPushOwnershipChallenge";
export * from "./logpullRetention";
export * from "./logpushJob";
export * from "./magicFirewallRuleset";
export * from "./notificationPolicy";
export * from "./notificationPolicyWebhooks";
export * from "./originCaCertificate";
export * from "./pageRule";
export * from "./provider";
export * from "./rateLimit";
export * from "./record";
export * from "./ruleset";
export * from "./spectrumApplication";
export * from "./splitTunnel";
export * from "./staticRoute";
export * from "./teamsAccount";
export * from "./teamsList";
export * from "./teamsLocation";
export * from "./teamsProxyEndpoint";
export * from "./teamsRule";
export * from "./wafGroup";
export * from "./wafOverride";
export * from "./wafPackage";
export * from "./wafRule";
export * from "./waitingRoom";
export * from "./waitingRoomEvent";
export * from "./workerCronTrigger";
export * from "./workerRoute";
export * from "./workerScript";
export * from "./workersKv";
export * from "./workersKvNamespace";
export * from "./zone";
export * from "./zoneCacheVariants";
export * from "./zoneDnssec";
export * from "./zoneLockdown";
export * from "./zoneSettingsOverride";

// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

// Import resources to register:
import { AccessApplication } from "./accessApplication";
import { AccessCaCertificate } from "./accessCaCertificate";
import { AccessGroup } from "./accessGroup";
import { AccessIdentityProvider } from "./accessIdentityProvider";
import { AccessKeysConfiguration } from "./accessKeysConfiguration";
import { AccessMutualTlsCertificate } from "./accessMutualTlsCertificate";
import { AccessPolicy } from "./accessPolicy";
import { AccessRule } from "./accessRule";
import { AccessServiceToken } from "./accessServiceToken";
import { AccountMember } from "./accountMember";
import { ApiToken } from "./apiToken";
import { Argo } from "./argo";
import { ArgoTunnel } from "./argoTunnel";
import { AuthenticatedOriginPulls } from "./authenticatedOriginPulls";
import { AuthenticatedOriginPullsCertificate } from "./authenticatedOriginPullsCertificate";
import { ByoIpPrefix } from "./byoIpPrefix";
import { CertificatePack } from "./certificatePack";
import { CustomHostname } from "./customHostname";
import { CustomHostnameFallbackOrigin } from "./customHostnameFallbackOrigin";
import { CustomPages } from "./customPages";
import { CustomSsl } from "./customSsl";
import { DevicePolicyCertificates } from "./devicePolicyCertificates";
import { DevicePostureIntegration } from "./devicePostureIntegration";
import { DevicePostureRule } from "./devicePostureRule";
import { FallbackDomain } from "./fallbackDomain";
import { Filter } from "./filter";
import { FirewallRule } from "./firewallRule";
import { GreTunnel } from "./greTunnel";
import { Healthcheck } from "./healthcheck";
import { IpList } from "./ipList";
import { IpsecTunnel } from "./ipsecTunnel";
import { LoadBalancer } from "./loadBalancer";
import { LoadBalancerMonitor } from "./loadBalancerMonitor";
import { LoadBalancerPool } from "./loadBalancerPool";
import { LogPushOwnershipChallenge } from "./logPushOwnershipChallenge";
import { LogpullRetention } from "./logpullRetention";
import { LogpushJob } from "./logpushJob";
import { MagicFirewallRuleset } from "./magicFirewallRuleset";
import { NotificationPolicy } from "./notificationPolicy";
import { NotificationPolicyWebhooks } from "./notificationPolicyWebhooks";
import { OriginCaCertificate } from "./originCaCertificate";
import { PageRule } from "./pageRule";
import { RateLimit } from "./rateLimit";
import { Record } from "./record";
import { Ruleset } from "./ruleset";
import { SpectrumApplication } from "./spectrumApplication";
import { SplitTunnel } from "./splitTunnel";
import { StaticRoute } from "./staticRoute";
import { TeamsAccount } from "./teamsAccount";
import { TeamsList } from "./teamsList";
import { TeamsLocation } from "./teamsLocation";
import { TeamsProxyEndpoint } from "./teamsProxyEndpoint";
import { TeamsRule } from "./teamsRule";
import { WafGroup } from "./wafGroup";
import { WafOverride } from "./wafOverride";
import { WafPackage } from "./wafPackage";
import { WafRule } from "./wafRule";
import { WaitingRoom } from "./waitingRoom";
import { WaitingRoomEvent } from "./waitingRoomEvent";
import { WorkerCronTrigger } from "./workerCronTrigger";
import { WorkerRoute } from "./workerRoute";
import { WorkerScript } from "./workerScript";
import { WorkersKv } from "./workersKv";
import { WorkersKvNamespace } from "./workersKvNamespace";
import { Zone } from "./zone";
import { ZoneCacheVariants } from "./zoneCacheVariants";
import { ZoneDnssec } from "./zoneDnssec";
import { ZoneLockdown } from "./zoneLockdown";
import { ZoneSettingsOverride } from "./zoneSettingsOverride";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "cloudflare:index/accessApplication:AccessApplication":
                return new AccessApplication(name, <any>undefined, { urn })
            case "cloudflare:index/accessCaCertificate:AccessCaCertificate":
                return new AccessCaCertificate(name, <any>undefined, { urn })
            case "cloudflare:index/accessGroup:AccessGroup":
                return new AccessGroup(name, <any>undefined, { urn })
            case "cloudflare:index/accessIdentityProvider:AccessIdentityProvider":
                return new AccessIdentityProvider(name, <any>undefined, { urn })
            case "cloudflare:index/accessKeysConfiguration:AccessKeysConfiguration":
                return new AccessKeysConfiguration(name, <any>undefined, { urn })
            case "cloudflare:index/accessMutualTlsCertificate:AccessMutualTlsCertificate":
                return new AccessMutualTlsCertificate(name, <any>undefined, { urn })
            case "cloudflare:index/accessPolicy:AccessPolicy":
                return new AccessPolicy(name, <any>undefined, { urn })
            case "cloudflare:index/accessRule:AccessRule":
                return new AccessRule(name, <any>undefined, { urn })
            case "cloudflare:index/accessServiceToken:AccessServiceToken":
                return new AccessServiceToken(name, <any>undefined, { urn })
            case "cloudflare:index/accountMember:AccountMember":
                return new AccountMember(name, <any>undefined, { urn })
            case "cloudflare:index/apiToken:ApiToken":
                return new ApiToken(name, <any>undefined, { urn })
            case "cloudflare:index/argo:Argo":
                return new Argo(name, <any>undefined, { urn })
            case "cloudflare:index/argoTunnel:ArgoTunnel":
                return new ArgoTunnel(name, <any>undefined, { urn })
            case "cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls":
                return new AuthenticatedOriginPulls(name, <any>undefined, { urn })
            case "cloudflare:index/authenticatedOriginPullsCertificate:AuthenticatedOriginPullsCertificate":
                return new AuthenticatedOriginPullsCertificate(name, <any>undefined, { urn })
            case "cloudflare:index/byoIpPrefix:ByoIpPrefix":
                return new ByoIpPrefix(name, <any>undefined, { urn })
            case "cloudflare:index/certificatePack:CertificatePack":
                return new CertificatePack(name, <any>undefined, { urn })
            case "cloudflare:index/customHostname:CustomHostname":
                return new CustomHostname(name, <any>undefined, { urn })
            case "cloudflare:index/customHostnameFallbackOrigin:CustomHostnameFallbackOrigin":
                return new CustomHostnameFallbackOrigin(name, <any>undefined, { urn })
            case "cloudflare:index/customPages:CustomPages":
                return new CustomPages(name, <any>undefined, { urn })
            case "cloudflare:index/customSsl:CustomSsl":
                return new CustomSsl(name, <any>undefined, { urn })
            case "cloudflare:index/devicePolicyCertificates:DevicePolicyCertificates":
                return new DevicePolicyCertificates(name, <any>undefined, { urn })
            case "cloudflare:index/devicePostureIntegration:DevicePostureIntegration":
                return new DevicePostureIntegration(name, <any>undefined, { urn })
            case "cloudflare:index/devicePostureRule:DevicePostureRule":
                return new DevicePostureRule(name, <any>undefined, { urn })
            case "cloudflare:index/fallbackDomain:FallbackDomain":
                return new FallbackDomain(name, <any>undefined, { urn })
            case "cloudflare:index/filter:Filter":
                return new Filter(name, <any>undefined, { urn })
            case "cloudflare:index/firewallRule:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "cloudflare:index/greTunnel:GreTunnel":
                return new GreTunnel(name, <any>undefined, { urn })
            case "cloudflare:index/healthcheck:Healthcheck":
                return new Healthcheck(name, <any>undefined, { urn })
            case "cloudflare:index/ipList:IpList":
                return new IpList(name, <any>undefined, { urn })
            case "cloudflare:index/ipsecTunnel:IpsecTunnel":
                return new IpsecTunnel(name, <any>undefined, { urn })
            case "cloudflare:index/loadBalancer:LoadBalancer":
                return new LoadBalancer(name, <any>undefined, { urn })
            case "cloudflare:index/loadBalancerMonitor:LoadBalancerMonitor":
                return new LoadBalancerMonitor(name, <any>undefined, { urn })
            case "cloudflare:index/loadBalancerPool:LoadBalancerPool":
                return new LoadBalancerPool(name, <any>undefined, { urn })
            case "cloudflare:index/logPushOwnershipChallenge:LogPushOwnershipChallenge":
                return new LogPushOwnershipChallenge(name, <any>undefined, { urn })
            case "cloudflare:index/logpullRetention:LogpullRetention":
                return new LogpullRetention(name, <any>undefined, { urn })
            case "cloudflare:index/logpushJob:LogpushJob":
                return new LogpushJob(name, <any>undefined, { urn })
            case "cloudflare:index/magicFirewallRuleset:MagicFirewallRuleset":
                return new MagicFirewallRuleset(name, <any>undefined, { urn })
            case "cloudflare:index/notificationPolicy:NotificationPolicy":
                return new NotificationPolicy(name, <any>undefined, { urn })
            case "cloudflare:index/notificationPolicyWebhooks:NotificationPolicyWebhooks":
                return new NotificationPolicyWebhooks(name, <any>undefined, { urn })
            case "cloudflare:index/originCaCertificate:OriginCaCertificate":
                return new OriginCaCertificate(name, <any>undefined, { urn })
            case "cloudflare:index/pageRule:PageRule":
                return new PageRule(name, <any>undefined, { urn })
            case "cloudflare:index/rateLimit:RateLimit":
                return new RateLimit(name, <any>undefined, { urn })
            case "cloudflare:index/record:Record":
                return new Record(name, <any>undefined, { urn })
            case "cloudflare:index/ruleset:Ruleset":
                return new Ruleset(name, <any>undefined, { urn })
            case "cloudflare:index/spectrumApplication:SpectrumApplication":
                return new SpectrumApplication(name, <any>undefined, { urn })
            case "cloudflare:index/splitTunnel:SplitTunnel":
                return new SplitTunnel(name, <any>undefined, { urn })
            case "cloudflare:index/staticRoute:StaticRoute":
                return new StaticRoute(name, <any>undefined, { urn })
            case "cloudflare:index/teamsAccount:TeamsAccount":
                return new TeamsAccount(name, <any>undefined, { urn })
            case "cloudflare:index/teamsList:TeamsList":
                return new TeamsList(name, <any>undefined, { urn })
            case "cloudflare:index/teamsLocation:TeamsLocation":
                return new TeamsLocation(name, <any>undefined, { urn })
            case "cloudflare:index/teamsProxyEndpoint:TeamsProxyEndpoint":
                return new TeamsProxyEndpoint(name, <any>undefined, { urn })
            case "cloudflare:index/teamsRule:TeamsRule":
                return new TeamsRule(name, <any>undefined, { urn })
            case "cloudflare:index/wafGroup:WafGroup":
                return new WafGroup(name, <any>undefined, { urn })
            case "cloudflare:index/wafOverride:WafOverride":
                return new WafOverride(name, <any>undefined, { urn })
            case "cloudflare:index/wafPackage:WafPackage":
                return new WafPackage(name, <any>undefined, { urn })
            case "cloudflare:index/wafRule:WafRule":
                return new WafRule(name, <any>undefined, { urn })
            case "cloudflare:index/waitingRoom:WaitingRoom":
                return new WaitingRoom(name, <any>undefined, { urn })
            case "cloudflare:index/waitingRoomEvent:WaitingRoomEvent":
                return new WaitingRoomEvent(name, <any>undefined, { urn })
            case "cloudflare:index/workerCronTrigger:WorkerCronTrigger":
                return new WorkerCronTrigger(name, <any>undefined, { urn })
            case "cloudflare:index/workerRoute:WorkerRoute":
                return new WorkerRoute(name, <any>undefined, { urn })
            case "cloudflare:index/workerScript:WorkerScript":
                return new WorkerScript(name, <any>undefined, { urn })
            case "cloudflare:index/workersKv:WorkersKv":
                return new WorkersKv(name, <any>undefined, { urn })
            case "cloudflare:index/workersKvNamespace:WorkersKvNamespace":
                return new WorkersKvNamespace(name, <any>undefined, { urn })
            case "cloudflare:index/zone:Zone":
                return new Zone(name, <any>undefined, { urn })
            case "cloudflare:index/zoneCacheVariants:ZoneCacheVariants":
                return new ZoneCacheVariants(name, <any>undefined, { urn })
            case "cloudflare:index/zoneDnssec:ZoneDnssec":
                return new ZoneDnssec(name, <any>undefined, { urn })
            case "cloudflare:index/zoneLockdown:ZoneLockdown":
                return new ZoneLockdown(name, <any>undefined, { urn })
            case "cloudflare:index/zoneSettingsOverride:ZoneSettingsOverride":
                return new ZoneSettingsOverride(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("cloudflare", "index/accessApplication", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessCaCertificate", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessGroup", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessIdentityProvider", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessKeysConfiguration", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessMutualTlsCertificate", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessPolicy", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessRule", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accessServiceToken", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/accountMember", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/apiToken", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/argo", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/argoTunnel", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/authenticatedOriginPulls", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/authenticatedOriginPullsCertificate", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/byoIpPrefix", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/certificatePack", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/customHostname", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/customHostnameFallbackOrigin", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/customPages", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/customSsl", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/devicePolicyCertificates", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/devicePostureIntegration", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/devicePostureRule", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/fallbackDomain", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/filter", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/firewallRule", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/greTunnel", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/healthcheck", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/ipList", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/ipsecTunnel", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/loadBalancer", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/loadBalancerMonitor", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/loadBalancerPool", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/logPushOwnershipChallenge", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/logpullRetention", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/logpushJob", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/magicFirewallRuleset", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/notificationPolicy", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/notificationPolicyWebhooks", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/originCaCertificate", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/pageRule", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/rateLimit", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/record", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/ruleset", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/spectrumApplication", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/splitTunnel", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/staticRoute", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/teamsAccount", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/teamsList", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/teamsLocation", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/teamsProxyEndpoint", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/teamsRule", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/wafGroup", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/wafOverride", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/wafPackage", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/wafRule", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/waitingRoom", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/waitingRoomEvent", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/workerCronTrigger", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/workerRoute", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/workerScript", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/workersKv", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/workersKvNamespace", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/zone", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/zoneCacheVariants", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/zoneDnssec", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/zoneLockdown", _module)
pulumi.runtime.registerResourceModule("cloudflare", "index/zoneSettingsOverride", _module)

import { Provider } from "./provider";

pulumi.runtime.registerResourcePackage("cloudflare", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:cloudflare") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
