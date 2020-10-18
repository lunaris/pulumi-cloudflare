# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from . import _utilities, _tables

__all__ = ['AuthenticatedOriginPulls']


class AuthenticatedOriginPulls(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 authenticated_origin_pulls_certificate: Optional[pulumi.Input[str]] = None,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 hostname: Optional[pulumi.Input[str]] = None,
                 zone_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a Cloudflare Authenticated Origin Pulls resource. An `AuthenticatedOriginPulls` resource is required to use Per-Zone or Per-Hostname Authenticated Origin Pulls.

        ## Example Usage

        The arguments that you provide determine which form of Authenticated Origin Pulls to use:

        ```python
        import pulumi
        import pulumi_cloudflare as cloudflare

        # Authenticated Origin Pulls
        my_aop = cloudflare.AuthenticatedOriginPulls("myAop",
            zone_id=var["cloudflare_zone_id"],
            enabled=True)
        # Per-Zone Authenticated Origin Pulls
        my_per_zone_aop_cert = cloudflare.AuthenticatedOriginPullsCertificate("myPerZoneAopCert",
            zone_id=var["cloudflare_zone_id"],
            certificate="-----INSERT CERTIFICATE-----",
            private_key="-----INSERT PRIVATE KEY-----",
            type="per-zone")
        my_per_zone_aop = cloudflare.AuthenticatedOriginPulls("myPerZoneAop",
            zone_id=var["cloudflare_zone_id"],
            authenticated_origin_pulls_certificate=my_per_zone_aop_cert.id,
            enabled=True)
        # Per-Hostname Authenticated Origin Pulls
        my_per_hostname_aop_cert = cloudflare.AuthenticatedOriginPullsCertificate("myPerHostnameAopCert",
            zone_id=var["cloudflare_zone_id"],
            certificate="-----INSERT CERTIFICATE-----",
            private_key="-----INSERT PRIVATE KEY-----",
            type="per-hostname")
        my_per_hostname_aop = cloudflare.AuthenticatedOriginPulls("myPerHostnameAop",
            zone_id=var["cloudflare_zone_id"],
            authenticated_origin_pulls_certificate=my_per_hostname_aop_cert.id,
            hostname="aop.example.com",
            enabled=True)
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] authenticated_origin_pulls_certificate: The id of an uploaded Authenticated Origin Pulls certificate. If no hostname is provided, this certificate will be used zone wide as Per-Zone Authenticated Origin Pulls.
        :param pulumi.Input[bool] enabled: Whether or not to enable Authenticated Origin Pulls on the given zone or hostname.
        :param pulumi.Input[str] hostname: Specify a hostname to enable Per-Hostname Authenticated Origin Pulls on, using the provided certificate.
        :param pulumi.Input[str] zone_id: The zone ID to upload the certificate to.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['authenticated_origin_pulls_certificate'] = authenticated_origin_pulls_certificate
            if enabled is None:
                raise TypeError("Missing required property 'enabled'")
            __props__['enabled'] = enabled
            __props__['hostname'] = hostname
            if zone_id is None:
                raise TypeError("Missing required property 'zone_id'")
            __props__['zone_id'] = zone_id
        super(AuthenticatedOriginPulls, __self__).__init__(
            'cloudflare:index/authenticatedOriginPulls:AuthenticatedOriginPulls',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            authenticated_origin_pulls_certificate: Optional[pulumi.Input[str]] = None,
            enabled: Optional[pulumi.Input[bool]] = None,
            hostname: Optional[pulumi.Input[str]] = None,
            zone_id: Optional[pulumi.Input[str]] = None) -> 'AuthenticatedOriginPulls':
        """
        Get an existing AuthenticatedOriginPulls resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] authenticated_origin_pulls_certificate: The id of an uploaded Authenticated Origin Pulls certificate. If no hostname is provided, this certificate will be used zone wide as Per-Zone Authenticated Origin Pulls.
        :param pulumi.Input[bool] enabled: Whether or not to enable Authenticated Origin Pulls on the given zone or hostname.
        :param pulumi.Input[str] hostname: Specify a hostname to enable Per-Hostname Authenticated Origin Pulls on, using the provided certificate.
        :param pulumi.Input[str] zone_id: The zone ID to upload the certificate to.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["authenticated_origin_pulls_certificate"] = authenticated_origin_pulls_certificate
        __props__["enabled"] = enabled
        __props__["hostname"] = hostname
        __props__["zone_id"] = zone_id
        return AuthenticatedOriginPulls(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="authenticatedOriginPullsCertificate")
    def authenticated_origin_pulls_certificate(self) -> pulumi.Output[Optional[str]]:
        """
        The id of an uploaded Authenticated Origin Pulls certificate. If no hostname is provided, this certificate will be used zone wide as Per-Zone Authenticated Origin Pulls.
        """
        return pulumi.get(self, "authenticated_origin_pulls_certificate")

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Output[bool]:
        """
        Whether or not to enable Authenticated Origin Pulls on the given zone or hostname.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter
    def hostname(self) -> pulumi.Output[Optional[str]]:
        """
        Specify a hostname to enable Per-Hostname Authenticated Origin Pulls on, using the provided certificate.
        """
        return pulumi.get(self, "hostname")

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> pulumi.Output[str]:
        """
        The zone ID to upload the certificate to.
        """
        return pulumi.get(self, "zone_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

