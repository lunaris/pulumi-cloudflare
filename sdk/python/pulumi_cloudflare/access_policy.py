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

__all__ = ['AccessPolicy']


class AccessPolicy(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 account_id: Optional[pulumi.Input[str]] = None,
                 application_id: Optional[pulumi.Input[str]] = None,
                 decision: Optional[pulumi.Input[str]] = None,
                 excludes: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyExcludeArgs']]]]] = None,
                 includes: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyIncludeArgs']]]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 precedence: Optional[pulumi.Input[int]] = None,
                 requires: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyRequireArgs']]]]] = None,
                 zone_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a Cloudflare Access Policy resource. Access Policies are used
        in conjunction with Access Applications to restrict access to a
        particular resource.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_cloudflare as cloudflare

        # Allowing access to `test@example.com` email address only
        test_policy_access_policy = cloudflare.AccessPolicy("testPolicyAccessPolicy",
            application_id="cb029e245cfdd66dc8d2e570d5dd3322",
            zone_id="d41d8cd98f00b204e9800998ecf8427e",
            name="staging policy",
            precedence=1,
            decision="allow",
            includes=[cloudflare.AccessPolicyIncludeArgs(
                emails=["test@example.com"],
            )])
        # Allowing `test@example.com` to access but only when coming from a
        # specific IP.
        test_policy_index_access_policy_access_policy = cloudflare.AccessPolicy("testPolicyIndex/accessPolicyAccessPolicy",
            application_id="cb029e245cfdd66dc8d2e570d5dd3322",
            zone_id="d41d8cd98f00b204e9800998ecf8427e",
            name="staging policy",
            precedence=1,
            decision="allow",
            includes=[cloudflare.AccessPolicyIncludeArgs(
                emails=["test@example.com"],
            )],
            requires={
                "ips": [var["office_ip"]],
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The ID of the application the policy is
               associated with.
        :param pulumi.Input[str] decision: Defines the action Access will take if the policy matches the user.
               Allowed values: `allow`, `deny`, `non_identity`, `bypass`
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyExcludeArgs']]]] excludes: A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyIncludeArgs']]]] includes: A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[int] precedence: The unique precedence for policies on a single application. Integer.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyRequireArgs']]]] requires: A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        :param pulumi.Input[str] zone_id: The DNS zone to which the access rule should be
               added.
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
            if application_id is None:
                raise TypeError("Missing required property 'application_id'")
            __props__['application_id'] = application_id
            if decision is None:
                raise TypeError("Missing required property 'decision'")
            __props__['decision'] = decision
            __props__['excludes'] = excludes
            if includes is None:
                raise TypeError("Missing required property 'includes'")
            __props__['includes'] = includes
            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            __props__['precedence'] = precedence
            __props__['requires'] = requires
            __props__['zone_id'] = zone_id
        super(AccessPolicy, __self__).__init__(
            'cloudflare:index/accessPolicy:AccessPolicy',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            account_id: Optional[pulumi.Input[str]] = None,
            application_id: Optional[pulumi.Input[str]] = None,
            decision: Optional[pulumi.Input[str]] = None,
            excludes: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyExcludeArgs']]]]] = None,
            includes: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyIncludeArgs']]]]] = None,
            name: Optional[pulumi.Input[str]] = None,
            precedence: Optional[pulumi.Input[int]] = None,
            requires: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyRequireArgs']]]]] = None,
            zone_id: Optional[pulumi.Input[str]] = None) -> 'AccessPolicy':
        """
        Get an existing AccessPolicy resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] application_id: The ID of the application the policy is
               associated with.
        :param pulumi.Input[str] decision: Defines the action Access will take if the policy matches the user.
               Allowed values: `allow`, `deny`, `non_identity`, `bypass`
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyExcludeArgs']]]] excludes: A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyIncludeArgs']]]] includes: A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        :param pulumi.Input[str] name: Friendly name of the Access Application.
        :param pulumi.Input[int] precedence: The unique precedence for policies on a single application. Integer.
        :param pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['AccessPolicyRequireArgs']]]] requires: A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        :param pulumi.Input[str] zone_id: The DNS zone to which the access rule should be
               added.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["account_id"] = account_id
        __props__["application_id"] = application_id
        __props__["decision"] = decision
        __props__["excludes"] = excludes
        __props__["includes"] = includes
        __props__["name"] = name
        __props__["precedence"] = precedence
        __props__["requires"] = requires
        __props__["zone_id"] = zone_id
        return AccessPolicy(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="accountId")
    def account_id(self) -> pulumi.Output[str]:
        return pulumi.get(self, "account_id")

    @property
    @pulumi.getter(name="applicationId")
    def application_id(self) -> pulumi.Output[str]:
        """
        The ID of the application the policy is
        associated with.
        """
        return pulumi.get(self, "application_id")

    @property
    @pulumi.getter
    def decision(self) -> pulumi.Output[str]:
        """
        Defines the action Access will take if the policy matches the user.
        Allowed values: `allow`, `deny`, `non_identity`, `bypass`
        """
        return pulumi.get(self, "decision")

    @property
    @pulumi.getter
    def excludes(self) -> pulumi.Output[Optional[Sequence['outputs.AccessPolicyExclude']]]:
        """
        A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        """
        return pulumi.get(self, "excludes")

    @property
    @pulumi.getter
    def includes(self) -> pulumi.Output[Sequence['outputs.AccessPolicyInclude']]:
        """
        A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        """
        return pulumi.get(self, "includes")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Friendly name of the Access Application.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def precedence(self) -> pulumi.Output[Optional[int]]:
        """
        The unique precedence for policies on a single application. Integer.
        """
        return pulumi.get(self, "precedence")

    @property
    @pulumi.getter
    def requires(self) -> pulumi.Output[Optional[Sequence['outputs.AccessPolicyRequire']]]:
        """
        A series of access conditions, see [Access Groups](https://www.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/access_group#conditions).
        """
        return pulumi.get(self, "requires")

    @property
    @pulumi.getter(name="zoneId")
    def zone_id(self) -> pulumi.Output[str]:
        """
        The DNS zone to which the access rule should be
        added.
        """
        return pulumi.get(self, "zone_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

