// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package config

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
	"github.com/pulumi/pulumi/sdk/go/pulumi/config"
)

// Configure API client to always use that account.
func GetAccountId(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "cloudflare:accountId")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "CLOUDFLARE_ACCOUNT_ID").(string); ok {
		return dv
	}
	return v
}

// Whether to print logs from the API client (using the default log library logger)
func GetApiClientLogging(ctx *pulumi.Context) bool {
	v, err := config.TryBool(ctx, "cloudflare:apiClientLogging")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(false, parseEnvBool, "CLOUDFLARE_API_CLIENT_LOGGING").(bool); ok {
		return dv
	}
	return v
}

// The API key for operations.
func GetApiKey(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "cloudflare:apiKey")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "CLOUDFLARE_API_KEY").(string); ok {
		return dv
	}
	return v
}

// The API Token for operations.
func GetApiToken(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "cloudflare:apiToken")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "CLOUDFLARE_API_TOKEN").(string); ok {
		return dv
	}
	return v
}

// A special Cloudflare API key good for a restricted set of endpoints.
func GetApiUserServiceKey(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "cloudflare:apiUserServiceKey")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "CLOUDFLARE_API_USER_SERVICE_KEY").(string); ok {
		return dv
	}
	return v
}

// A registered Cloudflare email address.
func GetEmail(ctx *pulumi.Context) string {
	v, err := config.Try(ctx, "cloudflare:email")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault("", nil, "CLOUDFLARE_EMAIL").(string); ok {
		return dv
	}
	return v
}

// Maximum backoff period in seconds after failed API calls
func GetMaxBackoff(ctx *pulumi.Context) int {
	v, err := config.TryInt(ctx, "cloudflare:maxBackoff")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(30, parseEnvInt, "CLOUDFLARE_MAX_BACKOFF").(int); ok {
		return dv
	}
	return v
}

// Minimum backoff period in seconds after failed API calls
func GetMinBackoff(ctx *pulumi.Context) int {
	v, err := config.TryInt(ctx, "cloudflare:minBackoff")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(1, parseEnvInt, "CLOUDFLARE_MIN_BACKOFF").(int); ok {
		return dv
	}
	return v
}

// Maximum number of retries to perform when an API request fails
func GetRetries(ctx *pulumi.Context) int {
	v, err := config.TryInt(ctx, "cloudflare:retries")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(3, parseEnvInt, "CLOUDFLARE_RETRIES").(int); ok {
		return dv
	}
	return v
}

// RPS limit to apply when making calls to the API
func GetRps(ctx *pulumi.Context) int {
	v, err := config.TryInt(ctx, "cloudflare:rps")
	if err == nil {
		return v
	}
	if dv, ok := getEnvOrDefault(4, parseEnvInt, "CLOUDFLARE_RPS").(int); ok {
		return dv
	}
	return v
}
