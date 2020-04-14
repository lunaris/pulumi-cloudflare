# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class Argo(pulumi.CustomResource):
    smart_routing: pulumi.Output[str]
    """
    Whether smart routing is enabled. Valid values: `on` or `off`. Defaults to `off`.
    """
    tiered_caching: pulumi.Output[str]
    """
    Whether tiered caching is enabled. Valid values: `on` or `off`. Defaults to `off`.
    """
    zone_id: pulumi.Output[str]
    """
    The DNS zone ID that you wish to manage Argo on.
    """
    def __init__(__self__, resource_name, opts=None, smart_routing=None, tiered_caching=None, zone_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Cloudflare Argo controls the routing to your origin and tiered caching options to speed up your website browsing experience.



        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] smart_routing: Whether smart routing is enabled. Valid values: `on` or `off`. Defaults to `off`.
        :param pulumi.Input[str] tiered_caching: Whether tiered caching is enabled. Valid values: `on` or `off`. Defaults to `off`.
        :param pulumi.Input[str] zone_id: The DNS zone ID that you wish to manage Argo on.
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

            __props__['smart_routing'] = smart_routing
            __props__['tiered_caching'] = tiered_caching
            if zone_id is None:
                raise TypeError("Missing required property 'zone_id'")
            __props__['zone_id'] = zone_id
        super(Argo, __self__).__init__(
            'cloudflare:index/argo:Argo',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, smart_routing=None, tiered_caching=None, zone_id=None):
        """
        Get an existing Argo resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] smart_routing: Whether smart routing is enabled. Valid values: `on` or `off`. Defaults to `off`.
        :param pulumi.Input[str] tiered_caching: Whether tiered caching is enabled. Valid values: `on` or `off`. Defaults to `off`.
        :param pulumi.Input[str] zone_id: The DNS zone ID that you wish to manage Argo on.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["smart_routing"] = smart_routing
        __props__["tiered_caching"] = tiered_caching
        __props__["zone_id"] = zone_id
        return Argo(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

