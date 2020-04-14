# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class AccessApplication(pulumi.CustomResource):
    aud: pulumi.Output[str]
    """
    Application Audience (AUD) Tag of the application
    """
    domain: pulumi.Output[str]
    """
    The complete URL of the asset you wish to put
    Cloudflare Access in front of. Can include subdomains or paths. Or both.
    """
    name: pulumi.Output[str]
    """
    Friendly name of the Access Application.
    """
    session_duration: pulumi.Output[str]
    """
    How often a user will be forced to
    re-authorise. Must be one of `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
    """
    zone_id: pulumi.Output[str]
    """
    The DNS zone to which the access rule should be added.
    """
    def __init__(__self__, resource_name, opts=None, domain=None, name=None, session_duration=None, zone_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare Access Application resource. Access Applications
        are used to restrict access to a whole application using an
        authorisation gateway managed by Cloudflare.



        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] domain: The complete URL of the asset you wish to put
               Cloudflare Access in front of. Can include subdomains or paths. Or both.
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[str] session_duration: How often a user will be forced to
               re-authorise. Must be one of `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
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
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if domain is None:
                raise TypeError("Missing required property 'domain'")
            __props__['domain'] = domain
            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            __props__['session_duration'] = session_duration
            if zone_id is None:
                raise TypeError("Missing required property 'zone_id'")
            __props__['zone_id'] = zone_id
            __props__['aud'] = None
        super(AccessApplication, __self__).__init__(
            'cloudflare:index/accessApplication:AccessApplication',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, aud=None, domain=None, name=None, session_duration=None, zone_id=None):
        """
        Get an existing AccessApplication resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] aud: Application Audience (AUD) Tag of the application
        :param pulumi.Input[str] domain: The complete URL of the asset you wish to put
               Cloudflare Access in front of. Can include subdomains or paths. Or both.
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[str] session_duration: How often a user will be forced to
               re-authorise. Must be one of `30m`, `6h`, `12h`, `24h`, `168h`, `730h`.
        :param pulumi.Input[str] zone_id: The DNS zone to which the access rule should be added.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["aud"] = aud
        __props__["domain"] = domain
        __props__["name"] = name
        __props__["session_duration"] = session_duration
        __props__["zone_id"] = zone_id
        return AccessApplication(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

