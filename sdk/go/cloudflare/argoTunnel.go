// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Argo Tunnel exposes applications running on your local web server on any network with an internet connection without manually adding DNS records or configuring a firewall or router.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-cloudflare/sdk/v4/go/cloudflare"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := cloudflare.NewArgoTunnel(ctx, "example", &cloudflare.ArgoTunnelArgs{
// 			AccountId: pulumi.String("d41d8cd98f00b204e9800998ecf8427e"),
// 			Name:      pulumi.String("my-tunnel"),
// 			Secret:    pulumi.String("AQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIAQIDBAUGBwg="),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Argo Tunnels can be imported a composite ID of the account ID and tunnel UUID.
//
// ```sh
//  $ pulumi import cloudflare:index/argoTunnel:ArgoTunnel example d41d8cd98f00b204e9800998ecf8427e/fd2455cb-5fcc-4c13-8738-8d8d2605237f
// ```
//
//  where - `d41d8cd98f00b204e9800998ecf8427e` is the account ID - `fd2455cb-5fcc-4c13-8738-8d8d2605237f` is the Argo Tunnel UUID
type ArgoTunnel struct {
	pulumi.CustomResourceState

	// The Cloudflare account ID that you wish to manage the Argo Tunnel on.
	AccountId pulumi.StringOutput `pulumi:"accountId"`
	// Usable CNAME for accessing the Argo Tunnel.
	Cname pulumi.StringOutput `pulumi:"cname"`
	// A user-friendly name chosen when the tunnel is created. Cannot be empty.
	Name pulumi.StringOutput `pulumi:"name"`
	// 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
	Secret pulumi.StringOutput `pulumi:"secret"`
}

// NewArgoTunnel registers a new resource with the given unique name, arguments, and options.
func NewArgoTunnel(ctx *pulumi.Context,
	name string, args *ArgoTunnelArgs, opts ...pulumi.ResourceOption) (*ArgoTunnel, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountId == nil {
		return nil, errors.New("invalid value for required argument 'AccountId'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.Secret == nil {
		return nil, errors.New("invalid value for required argument 'Secret'")
	}
	var resource ArgoTunnel
	err := ctx.RegisterResource("cloudflare:index/argoTunnel:ArgoTunnel", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetArgoTunnel gets an existing ArgoTunnel resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetArgoTunnel(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ArgoTunnelState, opts ...pulumi.ResourceOption) (*ArgoTunnel, error) {
	var resource ArgoTunnel
	err := ctx.ReadResource("cloudflare:index/argoTunnel:ArgoTunnel", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ArgoTunnel resources.
type argoTunnelState struct {
	// The Cloudflare account ID that you wish to manage the Argo Tunnel on.
	AccountId *string `pulumi:"accountId"`
	// Usable CNAME for accessing the Argo Tunnel.
	Cname *string `pulumi:"cname"`
	// A user-friendly name chosen when the tunnel is created. Cannot be empty.
	Name *string `pulumi:"name"`
	// 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
	Secret *string `pulumi:"secret"`
}

type ArgoTunnelState struct {
	// The Cloudflare account ID that you wish to manage the Argo Tunnel on.
	AccountId pulumi.StringPtrInput
	// Usable CNAME for accessing the Argo Tunnel.
	Cname pulumi.StringPtrInput
	// A user-friendly name chosen when the tunnel is created. Cannot be empty.
	Name pulumi.StringPtrInput
	// 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
	Secret pulumi.StringPtrInput
}

func (ArgoTunnelState) ElementType() reflect.Type {
	return reflect.TypeOf((*argoTunnelState)(nil)).Elem()
}

type argoTunnelArgs struct {
	// The Cloudflare account ID that you wish to manage the Argo Tunnel on.
	AccountId string `pulumi:"accountId"`
	// A user-friendly name chosen when the tunnel is created. Cannot be empty.
	Name string `pulumi:"name"`
	// 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
	Secret string `pulumi:"secret"`
}

// The set of arguments for constructing a ArgoTunnel resource.
type ArgoTunnelArgs struct {
	// The Cloudflare account ID that you wish to manage the Argo Tunnel on.
	AccountId pulumi.StringInput
	// A user-friendly name chosen when the tunnel is created. Cannot be empty.
	Name pulumi.StringInput
	// 32 or more bytes, encoded as a base64 string. The Create Argo Tunnel endpoint sets this as the tunnel's password. Anyone wishing to run the tunnel needs this password.
	Secret pulumi.StringInput
}

func (ArgoTunnelArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*argoTunnelArgs)(nil)).Elem()
}

type ArgoTunnelInput interface {
	pulumi.Input

	ToArgoTunnelOutput() ArgoTunnelOutput
	ToArgoTunnelOutputWithContext(ctx context.Context) ArgoTunnelOutput
}

func (*ArgoTunnel) ElementType() reflect.Type {
	return reflect.TypeOf((**ArgoTunnel)(nil)).Elem()
}

func (i *ArgoTunnel) ToArgoTunnelOutput() ArgoTunnelOutput {
	return i.ToArgoTunnelOutputWithContext(context.Background())
}

func (i *ArgoTunnel) ToArgoTunnelOutputWithContext(ctx context.Context) ArgoTunnelOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ArgoTunnelOutput)
}

// ArgoTunnelArrayInput is an input type that accepts ArgoTunnelArray and ArgoTunnelArrayOutput values.
// You can construct a concrete instance of `ArgoTunnelArrayInput` via:
//
//          ArgoTunnelArray{ ArgoTunnelArgs{...} }
type ArgoTunnelArrayInput interface {
	pulumi.Input

	ToArgoTunnelArrayOutput() ArgoTunnelArrayOutput
	ToArgoTunnelArrayOutputWithContext(context.Context) ArgoTunnelArrayOutput
}

type ArgoTunnelArray []ArgoTunnelInput

func (ArgoTunnelArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ArgoTunnel)(nil)).Elem()
}

func (i ArgoTunnelArray) ToArgoTunnelArrayOutput() ArgoTunnelArrayOutput {
	return i.ToArgoTunnelArrayOutputWithContext(context.Background())
}

func (i ArgoTunnelArray) ToArgoTunnelArrayOutputWithContext(ctx context.Context) ArgoTunnelArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ArgoTunnelArrayOutput)
}

// ArgoTunnelMapInput is an input type that accepts ArgoTunnelMap and ArgoTunnelMapOutput values.
// You can construct a concrete instance of `ArgoTunnelMapInput` via:
//
//          ArgoTunnelMap{ "key": ArgoTunnelArgs{...} }
type ArgoTunnelMapInput interface {
	pulumi.Input

	ToArgoTunnelMapOutput() ArgoTunnelMapOutput
	ToArgoTunnelMapOutputWithContext(context.Context) ArgoTunnelMapOutput
}

type ArgoTunnelMap map[string]ArgoTunnelInput

func (ArgoTunnelMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ArgoTunnel)(nil)).Elem()
}

func (i ArgoTunnelMap) ToArgoTunnelMapOutput() ArgoTunnelMapOutput {
	return i.ToArgoTunnelMapOutputWithContext(context.Background())
}

func (i ArgoTunnelMap) ToArgoTunnelMapOutputWithContext(ctx context.Context) ArgoTunnelMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ArgoTunnelMapOutput)
}

type ArgoTunnelOutput struct{ *pulumi.OutputState }

func (ArgoTunnelOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ArgoTunnel)(nil)).Elem()
}

func (o ArgoTunnelOutput) ToArgoTunnelOutput() ArgoTunnelOutput {
	return o
}

func (o ArgoTunnelOutput) ToArgoTunnelOutputWithContext(ctx context.Context) ArgoTunnelOutput {
	return o
}

type ArgoTunnelArrayOutput struct{ *pulumi.OutputState }

func (ArgoTunnelArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ArgoTunnel)(nil)).Elem()
}

func (o ArgoTunnelArrayOutput) ToArgoTunnelArrayOutput() ArgoTunnelArrayOutput {
	return o
}

func (o ArgoTunnelArrayOutput) ToArgoTunnelArrayOutputWithContext(ctx context.Context) ArgoTunnelArrayOutput {
	return o
}

func (o ArgoTunnelArrayOutput) Index(i pulumi.IntInput) ArgoTunnelOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *ArgoTunnel {
		return vs[0].([]*ArgoTunnel)[vs[1].(int)]
	}).(ArgoTunnelOutput)
}

type ArgoTunnelMapOutput struct{ *pulumi.OutputState }

func (ArgoTunnelMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ArgoTunnel)(nil)).Elem()
}

func (o ArgoTunnelMapOutput) ToArgoTunnelMapOutput() ArgoTunnelMapOutput {
	return o
}

func (o ArgoTunnelMapOutput) ToArgoTunnelMapOutputWithContext(ctx context.Context) ArgoTunnelMapOutput {
	return o
}

func (o ArgoTunnelMapOutput) MapIndex(k pulumi.StringInput) ArgoTunnelOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *ArgoTunnel {
		return vs[0].(map[string]*ArgoTunnel)[vs[1].(string)]
	}).(ArgoTunnelOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ArgoTunnelInput)(nil)).Elem(), &ArgoTunnel{})
	pulumi.RegisterInputType(reflect.TypeOf((*ArgoTunnelArrayInput)(nil)).Elem(), ArgoTunnelArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*ArgoTunnelMapInput)(nil)).Elem(), ArgoTunnelMap{})
	pulumi.RegisterOutputType(ArgoTunnelOutput{})
	pulumi.RegisterOutputType(ArgoTunnelArrayOutput{})
	pulumi.RegisterOutputType(ArgoTunnelMapOutput{})
}
