# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['DevicePolicyCertificatesArgs', 'DevicePolicyCertificates']

@pulumi.input_type
class DevicePolicyCertificatesArgs:
    def __init__(__self__, *,
                 enabled: pulumi.Input[bool],
                 zone_id: pulumi.Input[str]):
        """
        The set of arguments for constructing a DevicePolicyCertificates resource.
        :param pulumi.Input[bool] enabled: True if certificate generation is enabled.
        :param pulumi.Input[str] zone_id: The zone ID where certificate generation is allowed.
        """
        pulumi.set(__self__, "enabled", enabled)
        pulumi.set(__self__, "zone_id", zone_id)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Input[bool]:
        """
        True if certificate generation is enabled.
        """
        return pulumi.get(self, "enabled")

    @enabled.setter
    def enabled(self, value: pulumi.Input[bool]):
        pulumi.set(self, "enabled", value)

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> pulumi.Input[str]:
        """
        The zone ID where certificate generation is allowed.
        """
        return pulumi.get(self, "zone_id")

    @zone_id.setter
    def zone_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "zone_id", value)


@pulumi.input_type
class _DevicePolicyCertificatesState:
    def __init__(__self__, *,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 zone_id: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering DevicePolicyCertificates resources.
        :param pulumi.Input[bool] enabled: True if certificate generation is enabled.
        :param pulumi.Input[str] zone_id: The zone ID where certificate generation is allowed.
        """
        if enabled is not None:
            pulumi.set(__self__, "enabled", enabled)
        if zone_id is not None:
            pulumi.set(__self__, "zone_id", zone_id)

    @property
    @pulumi.getter
    def enabled(self) -> Optional[pulumi.Input[bool]]:
        """
        True if certificate generation is enabled.
        """
        return pulumi.get(self, "enabled")

    @enabled.setter
    def enabled(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "enabled", value)

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> Optional[pulumi.Input[str]]:
        """
        The zone ID where certificate generation is allowed.
        """
        return pulumi.get(self, "zone_id")

    @zone_id.setter
    def zone_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "zone_id", value)


class DevicePolicyCertificates(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 zone_id: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        Provides a Cloudflare device policy certificates resource. Device policy certificate resources enable client device certificate generation.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_cloudflare as cloudflare

        example = cloudflare.DevicePolicyCertificates("example",
            enabled=True,
            zone_id="1d5fdc9e88c8a8c4518b068cd94331fe")
        ```

        ## Import

        Device policy certificate settings can be imported using the zone ID.

        ```sh
         $ pulumi import cloudflare:index/devicePolicyCertificates:DevicePolicyCertificates example cb029e245cfdd66dc8d2e570d5dd3322
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] enabled: True if certificate generation is enabled.
        :param pulumi.Input[str] zone_id: The zone ID where certificate generation is allowed.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: DevicePolicyCertificatesArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Provides a Cloudflare device policy certificates resource. Device policy certificate resources enable client device certificate generation.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_cloudflare as cloudflare

        example = cloudflare.DevicePolicyCertificates("example",
            enabled=True,
            zone_id="1d5fdc9e88c8a8c4518b068cd94331fe")
        ```

        ## Import

        Device policy certificate settings can be imported using the zone ID.

        ```sh
         $ pulumi import cloudflare:index/devicePolicyCertificates:DevicePolicyCertificates example cb029e245cfdd66dc8d2e570d5dd3322
        ```

        :param str resource_name: The name of the resource.
        :param DevicePolicyCertificatesArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(DevicePolicyCertificatesArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 zone_id: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = DevicePolicyCertificatesArgs.__new__(DevicePolicyCertificatesArgs)

            if enabled is None and not opts.urn:
                raise TypeError("Missing required property 'enabled'")
            __props__.__dict__["enabled"] = enabled
            if zone_id is None and not opts.urn:
                raise TypeError("Missing required property 'zone_id'")
            __props__.__dict__["zone_id"] = zone_id
        super(DevicePolicyCertificates, __self__).__init__(
            'cloudflare:index/devicePolicyCertificates:DevicePolicyCertificates',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            enabled: Optional[pulumi.Input[bool]] = None,
            zone_id: Optional[pulumi.Input[str]] = None) -> 'DevicePolicyCertificates':
        """
        Get an existing DevicePolicyCertificates resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] enabled: True if certificate generation is enabled.
        :param pulumi.Input[str] zone_id: The zone ID where certificate generation is allowed.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _DevicePolicyCertificatesState.__new__(_DevicePolicyCertificatesState)

        __props__.__dict__["enabled"] = enabled
        __props__.__dict__["zone_id"] = zone_id
        return DevicePolicyCertificates(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Output[bool]:
        """
        True if certificate generation is enabled.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> pulumi.Output[str]:
        """
        The zone ID where certificate generation is allowed.
        """
        return pulumi.get(self, "zone_id")

