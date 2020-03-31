# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

_SNAKE_TO_CAMEL_CASE_TABLE = {
    "account_id": "accountId",
    "action_mode": "actionMode",
    "allow_insecure": "allowInsecure",
    "api_client_logging": "apiClientLogging",
    "api_key": "apiKey",
    "api_token": "apiToken",
    "api_user_service_key": "apiUserServiceKey",
    "application_id": "applicationId",
    "argo_smart_routing": "argoSmartRouting",
    "bundle_method": "bundleMethod",
    "bypass_url_patterns": "bypassUrlPatterns",
    "check_regions": "checkRegions",
    "client_id": "clientId",
    "client_secret": "clientSecret",
    "created_on": "createdOn",
    "custom_ssl_options": "customSslOptions",
    "custom_ssl_priorities": "customSslPriorities",
    "default_pool_ids": "defaultPoolIds",
    "destination_conf": "destinationConf",
    "digest_type": "digestType",
    "edge_ip_connectivity": "edgeIpConnectivity",
    "edge_ips": "edgeIps",
    "email_address": "emailAddress",
    "expected_body": "expectedBody",
    "expected_codes": "expectedCodes",
    "expires_on": "expiresOn",
    "fallback_pool_id": "fallbackPoolId",
    "filter_id": "filterId",
    "follow_redirects": "followRedirects",
    "geo_restrictions": "geoRestrictions",
    "group_id": "groupId",
    "initial_settings": "initialSettings",
    "initial_settings_read_at": "initialSettingsReadAt",
    "ip_firewall": "ipFirewall",
    "jump_start": "jumpStart",
    "key_tag": "keyTag",
    "kv_namespace_bindings": "kvNamespaceBindings",
    "lat_degrees": "latDegrees",
    "lat_direction": "latDirection",
    "lat_minutes": "latMinutes",
    "lat_seconds": "latSeconds",
    "logpull_options": "logpullOptions",
    "long_degrees": "longDegrees",
    "long_direction": "longDirection",
    "long_minutes": "longMinutes",
    "long_seconds": "longSeconds",
    "matching_type": "matchingType",
    "max_backoff": "maxBackoff",
    "min_backoff": "minBackoff",
    "minimum_origins": "minimumOrigins",
    "modified_on": "modifiedOn",
    "name_servers": "nameServers",
    "namespace_id": "namespaceId",
    "notification_email": "notificationEmail",
    "origin_directs": "originDirects",
    "origin_dns": "originDns",
    "origin_port": "originPort",
    "ownership_challenge": "ownershipChallenge",
    "package_id": "packageId",
    "phishing_detected": "phishingDetected",
    "pop_pools": "popPools",
    "precision_horz": "precisionHorz",
    "precision_vert": "precisionVert",
    "private_key": "privateKey",
    "proxy_protocol": "proxyProtocol",
    "public_key": "publicKey",
    "readonly_settings": "readonlySettings",
    "region_pools": "regionPools",
    "request_type": "requestType",
    "requested_validity": "requestedValidity",
    "role_ids": "roleIds",
    "rule_id": "ruleId",
    "script_name": "scriptName",
    "session_affinity": "sessionAffinity",
    "session_duration": "sessionDuration",
    "smart_routing": "smartRouting",
    "steering_policy": "steeringPolicy",
    "tiered_caching": "tieredCaching",
    "traffic_type": "trafficType",
    "uploaded_on": "uploadedOn",
    "vanity_name_servers": "vanityNameServers",
    "verification_key": "verificationKey",
    "wildcard_proxiable": "wildcardProxiable",
    "zone_id": "zoneId",
    "zone_status": "zoneStatus",
    "zone_type": "zoneType",
}

_CAMEL_TO_SNAKE_CASE_TABLE = {
    "accountId": "account_id",
    "actionMode": "action_mode",
    "allowInsecure": "allow_insecure",
    "apiClientLogging": "api_client_logging",
    "apiKey": "api_key",
    "apiToken": "api_token",
    "apiUserServiceKey": "api_user_service_key",
    "applicationId": "application_id",
    "argoSmartRouting": "argo_smart_routing",
    "bundleMethod": "bundle_method",
    "bypassUrlPatterns": "bypass_url_patterns",
    "checkRegions": "check_regions",
    "clientId": "client_id",
    "clientSecret": "client_secret",
    "createdOn": "created_on",
    "customSslOptions": "custom_ssl_options",
    "customSslPriorities": "custom_ssl_priorities",
    "defaultPoolIds": "default_pool_ids",
    "destinationConf": "destination_conf",
    "digestType": "digest_type",
    "edgeIpConnectivity": "edge_ip_connectivity",
    "edgeIps": "edge_ips",
    "emailAddress": "email_address",
    "expectedBody": "expected_body",
    "expectedCodes": "expected_codes",
    "expiresOn": "expires_on",
    "fallbackPoolId": "fallback_pool_id",
    "filterId": "filter_id",
    "followRedirects": "follow_redirects",
    "geoRestrictions": "geo_restrictions",
    "groupId": "group_id",
    "initialSettings": "initial_settings",
    "initialSettingsReadAt": "initial_settings_read_at",
    "ipFirewall": "ip_firewall",
    "jumpStart": "jump_start",
    "keyTag": "key_tag",
    "kvNamespaceBindings": "kv_namespace_bindings",
    "latDegrees": "lat_degrees",
    "latDirection": "lat_direction",
    "latMinutes": "lat_minutes",
    "latSeconds": "lat_seconds",
    "logpullOptions": "logpull_options",
    "longDegrees": "long_degrees",
    "longDirection": "long_direction",
    "longMinutes": "long_minutes",
    "longSeconds": "long_seconds",
    "matchingType": "matching_type",
    "maxBackoff": "max_backoff",
    "minBackoff": "min_backoff",
    "minimumOrigins": "minimum_origins",
    "modifiedOn": "modified_on",
    "nameServers": "name_servers",
    "namespaceId": "namespace_id",
    "notificationEmail": "notification_email",
    "originDirects": "origin_directs",
    "originDns": "origin_dns",
    "originPort": "origin_port",
    "ownershipChallenge": "ownership_challenge",
    "packageId": "package_id",
    "phishingDetected": "phishing_detected",
    "popPools": "pop_pools",
    "precisionHorz": "precision_horz",
    "precisionVert": "precision_vert",
    "privateKey": "private_key",
    "proxyProtocol": "proxy_protocol",
    "publicKey": "public_key",
    "readonlySettings": "readonly_settings",
    "regionPools": "region_pools",
    "requestType": "request_type",
    "requestedValidity": "requested_validity",
    "roleIds": "role_ids",
    "ruleId": "rule_id",
    "scriptName": "script_name",
    "sessionAffinity": "session_affinity",
    "sessionDuration": "session_duration",
    "smartRouting": "smart_routing",
    "steeringPolicy": "steering_policy",
    "tieredCaching": "tiered_caching",
    "trafficType": "traffic_type",
    "uploadedOn": "uploaded_on",
    "vanityNameServers": "vanity_name_servers",
    "verificationKey": "verification_key",
    "wildcardProxiable": "wildcard_proxiable",
    "zoneId": "zone_id",
    "zoneStatus": "zone_status",
    "zoneType": "zone_type",
}
