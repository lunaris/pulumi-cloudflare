# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class SpectrumApplication(pulumi.CustomResource):
    argo_smart_routing: pulumi.Output[bool]
    """
    . Enables Argo Smart Routing. Defaults to `false`.
    """
    dns: pulumi.Output[dict]
    """
    The name and type of DNS record for the Spectrum application. Fields documented below.

      * `name` (`str`) - Fully qualified domain name of the origin e.g. origin-ssh.example.com.
      * `type` (`str`) - The type of DNS record associated with the application. Valid values: `CNAME`.
    """
    edge_ip_connectivity: pulumi.Output[str]
    """
    . Choose which types of IP addresses will be provisioned for this subdomain. Valid values are: `all`, `ipv4`, `ipv6`. Defaults to `all`.
    """
    edge_ips: pulumi.Output[list]
    """
    . A list of edge IPs (IPv4 and/or IPv6) to configure Spectrum application to. Requires [Bring Your Own IP](https://developers.cloudflare.com/spectrum/getting-started/byoip/) provisioned.
    """
    ip_firewall: pulumi.Output[bool]
    """
    Enables the IP Firewall for this application. Defaults to `true`.
    """
    origin_directs: pulumi.Output[list]
    """
    A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.
    """
    origin_dns: pulumi.Output[dict]
    """
    A destination DNS addresses to the origin. Fields documented below.

      * `name` (`str`) - Fully qualified domain name of the origin e.g. origin-ssh.example.com.
    """
    origin_port: pulumi.Output[float]
    """
    If using `origin_dns` this is a required attribute. Origin port to proxy traffice to e.g. `22`.
    """
    protocol: pulumi.Output[str]
    """
    The port configuration at Cloudflare’s edge. e.g. `tcp/22`.
    """
    proxy_protocol: pulumi.Output[str]
    """
    Enables a proxy protocol to the origin. Valid values are: `off`, `v1`, `v2`, and `simple`. Defaults to `off`.
    """
    tls: pulumi.Output[str]
    """
    TLS configuration option for Cloudflare to connect to your origin. Valid values are: `off`, `flexible`, `full` and `strict`. Defaults to `off`.
    """
    traffic_type: pulumi.Output[str]
    """
    Sets application type. Valid values are: `direct`, `http`, `https`.  Defaults to `direct`.
    """
    zone_id: pulumi.Output[str]
    """
    The DNS zone ID to add the application to
    """
    def __init__(__self__, resource_name, opts=None, argo_smart_routing=None, dns=None, edge_ip_connectivity=None, edge_ips=None, ip_firewall=None, origin_directs=None, origin_dns=None, origin_port=None, protocol=None, proxy_protocol=None, tls=None, traffic_type=None, zone_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides a Cloudflare Spectrum Application. You can extend the power of Cloudflare's DDoS, TLS, and IP Firewall to your other TCP-based services.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/spectrum_application.html.markdown.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] argo_smart_routing: . Enables Argo Smart Routing. Defaults to `false`.
        :param pulumi.Input[dict] dns: The name and type of DNS record for the Spectrum application. Fields documented below.
        :param pulumi.Input[str] edge_ip_connectivity: . Choose which types of IP addresses will be provisioned for this subdomain. Valid values are: `all`, `ipv4`, `ipv6`. Defaults to `all`.
        :param pulumi.Input[list] edge_ips: . A list of edge IPs (IPv4 and/or IPv6) to configure Spectrum application to. Requires [Bring Your Own IP](https://developers.cloudflare.com/spectrum/getting-started/byoip/) provisioned.
        :param pulumi.Input[bool] ip_firewall: Enables the IP Firewall for this application. Defaults to `true`.
        :param pulumi.Input[list] origin_directs: A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.
        :param pulumi.Input[dict] origin_dns: A destination DNS addresses to the origin. Fields documented below.
        :param pulumi.Input[float] origin_port: If using `origin_dns` this is a required attribute. Origin port to proxy traffice to e.g. `22`.
        :param pulumi.Input[str] protocol: The port configuration at Cloudflare’s edge. e.g. `tcp/22`.
        :param pulumi.Input[str] proxy_protocol: Enables a proxy protocol to the origin. Valid values are: `off`, `v1`, `v2`, and `simple`. Defaults to `off`.
        :param pulumi.Input[str] tls: TLS configuration option for Cloudflare to connect to your origin. Valid values are: `off`, `flexible`, `full` and `strict`. Defaults to `off`.
        :param pulumi.Input[str] traffic_type: Sets application type. Valid values are: `direct`, `http`, `https`.  Defaults to `direct`.
        :param pulumi.Input[str] zone_id: The DNS zone ID to add the application to

        The **dns** object supports the following:

          * `name` (`pulumi.Input[str]`) - Fully qualified domain name of the origin e.g. origin-ssh.example.com.
          * `type` (`pulumi.Input[str]`) - The type of DNS record associated with the application. Valid values: `CNAME`.

        The **origin_dns** object supports the following:

          * `name` (`pulumi.Input[str]`) - Fully qualified domain name of the origin e.g. origin-ssh.example.com.
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

            __props__['argo_smart_routing'] = argo_smart_routing
            if dns is None:
                raise TypeError("Missing required property 'dns'")
            __props__['dns'] = dns
            __props__['edge_ip_connectivity'] = edge_ip_connectivity
            __props__['edge_ips'] = edge_ips
            __props__['ip_firewall'] = ip_firewall
            __props__['origin_directs'] = origin_directs
            __props__['origin_dns'] = origin_dns
            __props__['origin_port'] = origin_port
            if protocol is None:
                raise TypeError("Missing required property 'protocol'")
            __props__['protocol'] = protocol
            __props__['proxy_protocol'] = proxy_protocol
            __props__['tls'] = tls
            __props__['traffic_type'] = traffic_type
            if zone_id is None:
                raise TypeError("Missing required property 'zone_id'")
            __props__['zone_id'] = zone_id
        super(SpectrumApplication, __self__).__init__(
            'cloudflare:index/spectrumApplication:SpectrumApplication',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, argo_smart_routing=None, dns=None, edge_ip_connectivity=None, edge_ips=None, ip_firewall=None, origin_directs=None, origin_dns=None, origin_port=None, protocol=None, proxy_protocol=None, tls=None, traffic_type=None, zone_id=None):
        """
        Get an existing SpectrumApplication resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[bool] argo_smart_routing: . Enables Argo Smart Routing. Defaults to `false`.
        :param pulumi.Input[dict] dns: The name and type of DNS record for the Spectrum application. Fields documented below.
        :param pulumi.Input[str] edge_ip_connectivity: . Choose which types of IP addresses will be provisioned for this subdomain. Valid values are: `all`, `ipv4`, `ipv6`. Defaults to `all`.
        :param pulumi.Input[list] edge_ips: . A list of edge IPs (IPv4 and/or IPv6) to configure Spectrum application to. Requires [Bring Your Own IP](https://developers.cloudflare.com/spectrum/getting-started/byoip/) provisioned.
        :param pulumi.Input[bool] ip_firewall: Enables the IP Firewall for this application. Defaults to `true`.
        :param pulumi.Input[list] origin_directs: A list of destination addresses to the origin. e.g. `tcp://192.0.2.1:22`.
        :param pulumi.Input[dict] origin_dns: A destination DNS addresses to the origin. Fields documented below.
        :param pulumi.Input[float] origin_port: If using `origin_dns` this is a required attribute. Origin port to proxy traffice to e.g. `22`.
        :param pulumi.Input[str] protocol: The port configuration at Cloudflare’s edge. e.g. `tcp/22`.
        :param pulumi.Input[str] proxy_protocol: Enables a proxy protocol to the origin. Valid values are: `off`, `v1`, `v2`, and `simple`. Defaults to `off`.
        :param pulumi.Input[str] tls: TLS configuration option for Cloudflare to connect to your origin. Valid values are: `off`, `flexible`, `full` and `strict`. Defaults to `off`.
        :param pulumi.Input[str] traffic_type: Sets application type. Valid values are: `direct`, `http`, `https`.  Defaults to `direct`.
        :param pulumi.Input[str] zone_id: The DNS zone ID to add the application to

        The **dns** object supports the following:

          * `name` (`pulumi.Input[str]`) - Fully qualified domain name of the origin e.g. origin-ssh.example.com.
          * `type` (`pulumi.Input[str]`) - The type of DNS record associated with the application. Valid values: `CNAME`.

        The **origin_dns** object supports the following:

          * `name` (`pulumi.Input[str]`) - Fully qualified domain name of the origin e.g. origin-ssh.example.com.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["argo_smart_routing"] = argo_smart_routing
        __props__["dns"] = dns
        __props__["edge_ip_connectivity"] = edge_ip_connectivity
        __props__["edge_ips"] = edge_ips
        __props__["ip_firewall"] = ip_firewall
        __props__["origin_directs"] = origin_directs
        __props__["origin_dns"] = origin_dns
        __props__["origin_port"] = origin_port
        __props__["protocol"] = protocol
        __props__["proxy_protocol"] = proxy_protocol
        __props__["tls"] = tls
        __props__["traffic_type"] = traffic_type
        __props__["zone_id"] = zone_id
        return SpectrumApplication(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

