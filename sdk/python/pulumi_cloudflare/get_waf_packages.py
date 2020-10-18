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

__all__ = [
    'GetWafPackagesResult',
    'AwaitableGetWafPackagesResult',
    'get_waf_packages',
]

@pulumi.output_type
class GetWafPackagesResult:
    """
    A collection of values returned by getWafPackages.
    """
    def __init__(__self__, filter=None, id=None, packages=None, zone_id=None):
        if filter and not isinstance(filter, dict):
            raise TypeError("Expected argument 'filter' to be a dict")
        pulumi.set(__self__, "filter", filter)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if packages and not isinstance(packages, list):
            raise TypeError("Expected argument 'packages' to be a list")
        pulumi.set(__self__, "packages", packages)
        if zone_id and not isinstance(zone_id, str):
            raise TypeError("Expected argument 'zone_id' to be a str")
        pulumi.set(__self__, "zone_id", zone_id)

    @property
    @pulumi.getter
    def filter(self) -> Optional['outputs.GetWafPackagesFilterResult']:
        return pulumi.get(self, "filter")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def packages(self) -> Sequence['outputs.GetWafPackagesPackageResult']:
        """
        A map of WAF Rule Packages details. Full list below:
        """
        return pulumi.get(self, "packages")

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> str:
        return pulumi.get(self, "zone_id")


class AwaitableGetWafPackagesResult(GetWafPackagesResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetWafPackagesResult(
            filter=self.filter,
            id=self.id,
            packages=self.packages,
            zone_id=self.zone_id)


def get_waf_packages(filter: Optional[pulumi.InputType['GetWafPackagesFilterArgs']] = None,
                     zone_id: Optional[str] = None,
                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetWafPackagesResult:
    """
    Use this data source to look up [WAF Rule Packages](https://api.cloudflare.com/#waf-rule-packages-properties).


    :param pulumi.InputType['GetWafPackagesFilterArgs'] filter: One or more values used to look up WAF Rule Packages. If more than one value is given all
           values must match in order to be included, see below for full list.
    :param str zone_id: The ID of the DNS zone in which to search for the WAF Rule Packages.
    """
    __args__ = dict()
    __args__['filter'] = filter
    __args__['zoneId'] = zone_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('cloudflare:index/getWafPackages:getWafPackages', __args__, opts=opts, typ=GetWafPackagesResult).value

    return AwaitableGetWafPackagesResult(
        filter=__ret__.filter,
        id=__ret__.id,
        packages=__ret__.packages,
        zone_id=__ret__.zone_id)
