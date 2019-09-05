# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class Provider(pulumi.ProviderResource):
    def __init__(__self__, resource_name, opts=None, api_client_logging=None, api_token=None, email=None, max_backoff=None, min_backoff=None, org_id=None, retries=None, rps=None, token=None, use_org_from_zone=None, __props__=None, __name__=None, __opts__=None):
        """
        The provider type for the cloudflare package. By default, resources use package-wide configuration
        settings, however an explicit `Provider` instance may be created and passed during resource
        construction to achieve fine-grained programmatic control over provider settings. See the
        [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/index.html.markdown.
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

            if api_client_logging is None:
                api_client_logging = (utilities.get_env_bool('CLOUDFLARE_API_CLIENT_LOGGING') or False)
            __props__['api_client_logging'] = pulumi.Output.from_input(api_client_logging).apply(json.dumps) if api_client_logging is not None else None
            __props__['api_token'] = api_token
            if email is None:
                email = utilities.get_env('CLOUDFLARE_EMAIL')
            __props__['email'] = email
            if max_backoff is None:
                max_backoff = (utilities.get_env_int('CLOUDFLARE_MAX_BACKOFF') or 30)
            __props__['max_backoff'] = pulumi.Output.from_input(max_backoff).apply(json.dumps) if max_backoff is not None else None
            if min_backoff is None:
                min_backoff = (utilities.get_env_int('CLOUDFLARE_MIN_BACKOFF') or 1)
            __props__['min_backoff'] = pulumi.Output.from_input(min_backoff).apply(json.dumps) if min_backoff is not None else None
            if org_id is None:
                org_id = utilities.get_env('CLOUDFLARE_ORG_ID')
            __props__['org_id'] = org_id
            if retries is None:
                retries = (utilities.get_env_int('CLOUDFLARE_RETRIES') or 3)
            __props__['retries'] = pulumi.Output.from_input(retries).apply(json.dumps) if retries is not None else None
            if rps is None:
                rps = (utilities.get_env_int('CLOUDFLARE_RPS') or 4)
            __props__['rps'] = pulumi.Output.from_input(rps).apply(json.dumps) if rps is not None else None
            if token is None:
                token = utilities.get_env('CLOUDFLARE_TOKEN')
            __props__['token'] = token
            if use_org_from_zone is None:
                use_org_from_zone = utilities.get_env('CLOUDFLARE_ORG_ZONE')
            __props__['use_org_from_zone'] = use_org_from_zone
        super(Provider, __self__).__init__(
            'cloudflare',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None):
        """
        Get an existing Provider resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/index.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        return Provider(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

