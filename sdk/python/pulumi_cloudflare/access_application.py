# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from . import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['AccessApplication']


class AccessApplication(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 account_id: Optional[pulumi.Input[str]] = None,
                 allowed_idps: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 auto_redirect_to_identity: Optional[pulumi.Input[bool]] = None,
                 cors_headers: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessApplicationCorsHeaderArgs']]]]] = None,
                 domain: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 session_duration: Optional[pulumi.Input[str]] = None,
                 zone_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a Cloudflare Access Application resource. Access Applications
        are used to restrict access to a whole application using an
        authorisation gateway managed by Cloudflare.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_cloudflare as cloudflare

        # With CORS configuration
        staging_app = cloudflare.AccessApplication("stagingApp",
            cors_headers=[cloudflare.AccessApplicationCorsHeaderArgs(
                allow_credentials=True,
                allowed_methods=[
                    "GET",
                    "POST",
                    "OPTIONS",
                ],
                allowed_origins=["https://example.com"],
                max_age=10,
            )],
            domain="staging.example.com",
            name="staging application",
            session_duration="24h",
            zone_id="1d5fdc9e88c8a8c4518b068cd94331fe")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] allowed_idps: The identity providers selected for the application.
        :param pulumi.Input[bool] auto_redirect_to_identity: Option to skip identity provider
               selection if only one is configured in allowed_idps. Defaults to `false`
               (disabled).
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessApplicationCorsHeaderArgs']]]] cors_headers: CORS configuration for the Access Application. See
               below for reference structure.
        :param pulumi.Input[str] domain: The complete URL of the asset you wish to put
               Cloudflare Access in front of. Can include subdomains or paths. Or both.
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[str] session_duration: How often a user will be forced to
               re-authorise. Must be one of `0s`, `15m`, `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
        :param pulumi.Input[str] zone_id: The DNS zone to which the access rule should be added.
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

            __props__['account_id'] = account_id
            __props__['allowed_idps'] = allowed_idps
            __props__['auto_redirect_to_identity'] = auto_redirect_to_identity
            __props__['cors_headers'] = cors_headers
            if domain is None:
                raise TypeError("Missing required property 'domain'")
            __props__['domain'] = domain
            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            __props__['session_duration'] = session_duration
            if zone_id is not None:
                warnings.warn("This field will be removed in version 3 and replaced with the account_id field.", DeprecationWarning)
                pulumi.log.warn("zone_id is deprecated: This field will be removed in version 3 and replaced with the account_id field.")
            __props__['zone_id'] = zone_id
            __props__['aud'] = None
        super(AccessApplication, __self__).__init__(
            'cloudflare:index/accessApplication:AccessApplication',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            account_id: Optional[pulumi.Input[str]] = None,
            allowed_idps: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
            aud: Optional[pulumi.Input[str]] = None,
            auto_redirect_to_identity: Optional[pulumi.Input[bool]] = None,
            cors_headers: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessApplicationCorsHeaderArgs']]]]] = None,
            domain: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            session_duration: Optional[pulumi.Input[str]] = None,
            zone_id: Optional[pulumi.Input[str]] = None) -> 'AccessApplication':
        """
        Get an existing AccessApplication resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] allowed_idps: The identity providers selected for the application.
        :param pulumi.Input[str] aud: Application Audience (AUD) Tag of the application
        :param pulumi.Input[bool] auto_redirect_to_identity: Option to skip identity provider
               selection if only one is configured in allowed_idps. Defaults to `false`
               (disabled).
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessApplicationCorsHeaderArgs']]]] cors_headers: CORS configuration for the Access Application. See
               below for reference structure.
        :param pulumi.Input[str] domain: The complete URL of the asset you wish to put
               Cloudflare Access in front of. Can include subdomains or paths. Or both.
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[str] session_duration: How often a user will be forced to
               re-authorise. Must be one of `0s`, `15m`, `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
        :param pulumi.Input[str] zone_id: The DNS zone to which the access rule should be added.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["account_id"] = account_id
        __props__["allowed_idps"] = allowed_idps
        __props__["aud"] = aud
        __props__["auto_redirect_to_identity"] = auto_redirect_to_identity
        __props__["cors_headers"] = cors_headers
        __props__["domain"] = domain
        __props__["name"] = name
        __props__["session_duration"] = session_duration
        __props__["zone_id"] = zone_id
        return AccessApplication(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="accountId")
    def account_id(self) -> pulumi.Output[str]:
        return pulumi.get(self, "account_id")

    @property
    @pulumi.getter(name="allowedIdps")
    def allowed_idps(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        The identity providers selected for the application.
        """
        return pulumi.get(self, "allowed_idps")

    @property
    @pulumi.getter
    def aud(self) -> pulumi.Output[str]:
        """
        Application Audience (AUD) Tag of the application
        """
        return pulumi.get(self, "aud")

    @property
    @pulumi.getter(name="autoRedirectToIdentity")
    def auto_redirect_to_identity(self) -> pulumi.Output[Optional[bool]]:
        """
        Option to skip identity provider
        selection if only one is configured in allowed_idps. Defaults to `false`
        (disabled).
        """
        return pulumi.get(self, "auto_redirect_to_identity")

    @property
    @pulumi.getter(name="corsHeaders")
    def cors_headers(self) -> pulumi.Output[Optional[Sequence['outputs.AccessApplicationCorsHeader']]]:
        """
        CORS configuration for the Access Application. See
        below for reference structure.
        """
        return pulumi.get(self, "cors_headers")

    @property
    @pulumi.getter
    def domain(self) -> pulumi.Output[str]:
        """
        The complete URL of the asset you wish to put
        Cloudflare Access in front of. Can include subdomains or paths. Or both.
        """
        return pulumi.get(self, "domain")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Friendly name of the Access Application.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="sessionDuration")
    def session_duration(self) -> pulumi.Output[Optional[str]]:
        """
        How often a user will be forced to
        re-authorise. Must be one of `0s`, `15m`, `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
        """
        return pulumi.get(self, "session_duration")

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> pulumi.Output[str]:
        """
        The DNS zone to which the access rule should be added.
        """
        return pulumi.get(self, "zone_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

