// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package cloudflare

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cloudflare Access Group resource. Access Groups are used
// in conjunction with Access Policies to restrict access to a
// particular resource based on group membership.
//
// ## Conditions
//
// `require`, `exclude` and `include` arguments share the available
// conditions which can be applied. The conditions are:
//
// * `ip` - (Optional) A list of IP addresses or ranges. Example:
//   `ip = ["1.2.3.4", "10.0.0.0/2"]`
// * `email` - (Optional) A list of email addresses. Example:
//   `email = ["test@example.com"]`
// * `emailDomain` - (Optional) A list of email domains. Example:
//   `emailDomain = ["example.com"]`
// * `serviceToken` - (Optional) A list of service token ids. Example:
//   `serviceToken = cloudflare_access_service_token.demo.id`
// * `anyValidServiceToken` - (Optional) Boolean indicating if allow
//   all tokens to be granted. Example: `anyValidServiceToken = true`
// * `group` - (Optional) A list of access group ids. Example:
//   `group = [cloudflare_access_group.demo.id]`
// * `everyone` - (Optional) Boolean indicating permitting access for all
//   requests. Example: `everyone = true`
// * `certificate` - (Optional) Whether to use mTLS certificate authentication.
// * `commonName` - (Optional) Use a certificate common name to authenticate with.
// * `gsuite` - (Optional) Use GSuite as the authentication mechanism. Example:
//
//   ```hcl
//   # ... other configuration
//   include {
//     gsuite {
//       email = "admins@example.com"
//       identityProviderId = "ca298b82-93b5-41bf-bc2d-10493f09b761"
//     }
//   }
//   ```
// * `github` - (Optional) Use a GitHub team as the `include` condition. Example:
//
//   ```hcl
//   # ... other configuration
//   include {
//     github {
//       name = "my-github-team-name"
//       identityProviderId = "ca298b82-93b5-41bf-bc2d-10493f09b761"
//     }
//   }
//   ```
// * `azure` - (Optional) Use Azure AD as the `include` condition. Example:
//
//   ```hcl
//   # ... other configuration
//   include {
//     azure {
//       id = "86773093-5feb-48dd-814b-7ccd3676ff50e"
//       identityProviderId = "ca298b82-93b5-41bf-bc2d-10493f09b761"
//     }
//   }
//   ```
// * `okta` - (Optional) Use Okta as the `include` condition. Example:
//
//   ```hcl
//   # ... other configuration
//   include {
//     okta {
//       name = "admins"
//       identityProviderId = "ca298b82-93b5-41bf-bc2d-10493f09b761"
//     }
//   }
//   ```
// * `saml` - (Optional) Use an external SAML setup as the `include` condition.
//   Example:
//
//   ```hcl
//   # ... other configuration
//   include {
//     saml {
//       attributeName = "group"
//       attributeValue = "admins"
//       identityProviderId = "ca298b82-93b5-41bf-bc2d-10493f09b761"
//     }
//   }
//   ```
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-cloudflare/blob/master/website/docs/r/access_group.html.markdown.
type AccessGroup struct {
	pulumi.CustomResourceState

	// The ID of the account the group is
	// associated with.
	AccountId pulumi.StringOutput `pulumi:"accountId"`
	// A series of access conditions, see below for
	// full list.
	Excludes AccessGroupExcludeArrayOutput `pulumi:"excludes"`
	// A series of access conditions, see below for
	// full list.
	Includes AccessGroupIncludeArrayOutput `pulumi:"includes"`
	// Friendly name of the Access Group.
	Name pulumi.StringOutput `pulumi:"name"`
	// A series of access conditions, see below for
	// full list.
	Requires AccessGroupRequireArrayOutput `pulumi:"requires"`
}

// NewAccessGroup registers a new resource with the given unique name, arguments, and options.
func NewAccessGroup(ctx *pulumi.Context,
	name string, args *AccessGroupArgs, opts ...pulumi.ResourceOption) (*AccessGroup, error) {
	if args == nil || args.AccountId == nil {
		return nil, errors.New("missing required argument 'AccountId'")
	}
	if args == nil || args.Includes == nil {
		return nil, errors.New("missing required argument 'Includes'")
	}
	if args == nil || args.Name == nil {
		return nil, errors.New("missing required argument 'Name'")
	}
	if args == nil {
		args = &AccessGroupArgs{}
	}
	var resource AccessGroup
	err := ctx.RegisterResource("cloudflare:index/accessGroup:AccessGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAccessGroup gets an existing AccessGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAccessGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AccessGroupState, opts ...pulumi.ResourceOption) (*AccessGroup, error) {
	var resource AccessGroup
	err := ctx.ReadResource("cloudflare:index/accessGroup:AccessGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AccessGroup resources.
type accessGroupState struct {
	// The ID of the account the group is
	// associated with.
	AccountId *string `pulumi:"accountId"`
	// A series of access conditions, see below for
	// full list.
	Excludes []AccessGroupExclude `pulumi:"excludes"`
	// A series of access conditions, see below for
	// full list.
	Includes []AccessGroupInclude `pulumi:"includes"`
	// Friendly name of the Access Group.
	Name *string `pulumi:"name"`
	// A series of access conditions, see below for
	// full list.
	Requires []AccessGroupRequire `pulumi:"requires"`
}

type AccessGroupState struct {
	// The ID of the account the group is
	// associated with.
	AccountId pulumi.StringPtrInput
	// A series of access conditions, see below for
	// full list.
	Excludes AccessGroupExcludeArrayInput
	// A series of access conditions, see below for
	// full list.
	Includes AccessGroupIncludeArrayInput
	// Friendly name of the Access Group.
	Name pulumi.StringPtrInput
	// A series of access conditions, see below for
	// full list.
	Requires AccessGroupRequireArrayInput
}

func (AccessGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*accessGroupState)(nil)).Elem()
}

type accessGroupArgs struct {
	// The ID of the account the group is
	// associated with.
	AccountId string `pulumi:"accountId"`
	// A series of access conditions, see below for
	// full list.
	Excludes []AccessGroupExclude `pulumi:"excludes"`
	// A series of access conditions, see below for
	// full list.
	Includes []AccessGroupInclude `pulumi:"includes"`
	// Friendly name of the Access Group.
	Name string `pulumi:"name"`
	// A series of access conditions, see below for
	// full list.
	Requires []AccessGroupRequire `pulumi:"requires"`
}

// The set of arguments for constructing a AccessGroup resource.
type AccessGroupArgs struct {
	// The ID of the account the group is
	// associated with.
	AccountId pulumi.StringInput
	// A series of access conditions, see below for
	// full list.
	Excludes AccessGroupExcludeArrayInput
	// A series of access conditions, see below for
	// full list.
	Includes AccessGroupIncludeArrayInput
	// Friendly name of the Access Group.
	Name pulumi.StringInput
	// A series of access conditions, see below for
	// full list.
	Requires AccessGroupRequireArrayInput
}

func (AccessGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*accessGroupArgs)(nil)).Elem()
}

