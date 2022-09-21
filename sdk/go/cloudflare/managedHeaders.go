// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

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
// 		_, err := cloudflare.NewManagedHeaders(ctx, "example", &cloudflare.ManagedHeadersArgs{
// 			ManagedRequestHeaders: ManagedHeadersManagedRequestHeaderArray{
// 				&ManagedHeadersManagedRequestHeaderArgs{
// 					Enabled: pulumi.Bool(true),
// 					Id:      pulumi.String("add_true_client_ip_headers"),
// 				},
// 			},
// 			ManagedResponseHeaders: ManagedHeadersManagedResponseHeaderArray{
// 				&ManagedHeadersManagedResponseHeaderArgs{
// 					Enabled: pulumi.Bool(true),
// 					Id:      pulumi.String("remove_x-powered-by_header"),
// 				},
// 			},
// 			ZoneId: pulumi.String("0da42c8d2132a9ddaf714f9e7c920711"),
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
// Import is not supported for this resource.
type ManagedHeaders struct {
	pulumi.CustomResourceState

	// The list of managed request headers.
	ManagedRequestHeaders ManagedHeadersManagedRequestHeaderArrayOutput `pulumi:"managedRequestHeaders"`
	// The list of managed response headers.
	ManagedResponseHeaders ManagedHeadersManagedResponseHeaderArrayOutput `pulumi:"managedResponseHeaders"`
	// The zone identifier to target for the resource.
	ZoneId pulumi.StringOutput `pulumi:"zoneId"`
}

// NewManagedHeaders registers a new resource with the given unique name, arguments, and options.
func NewManagedHeaders(ctx *pulumi.Context,
	name string, args *ManagedHeadersArgs, opts ...pulumi.ResourceOption) (*ManagedHeaders, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ZoneId == nil {
		return nil, errors.New("invalid value for required argument 'ZoneId'")
	}
	var resource ManagedHeaders
	err := ctx.RegisterResource("cloudflare:index/managedHeaders:ManagedHeaders", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagedHeaders gets an existing ManagedHeaders resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagedHeaders(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagedHeadersState, opts ...pulumi.ResourceOption) (*ManagedHeaders, error) {
	var resource ManagedHeaders
	err := ctx.ReadResource("cloudflare:index/managedHeaders:ManagedHeaders", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagedHeaders resources.
type managedHeadersState struct {
	// The list of managed request headers.
	ManagedRequestHeaders []ManagedHeadersManagedRequestHeader `pulumi:"managedRequestHeaders"`
	// The list of managed response headers.
	ManagedResponseHeaders []ManagedHeadersManagedResponseHeader `pulumi:"managedResponseHeaders"`
	// The zone identifier to target for the resource.
	ZoneId *string `pulumi:"zoneId"`
}

type ManagedHeadersState struct {
	// The list of managed request headers.
	ManagedRequestHeaders ManagedHeadersManagedRequestHeaderArrayInput
	// The list of managed response headers.
	ManagedResponseHeaders ManagedHeadersManagedResponseHeaderArrayInput
	// The zone identifier to target for the resource.
	ZoneId pulumi.StringPtrInput
}

func (ManagedHeadersState) ElementType() reflect.Type {
	return reflect.TypeOf((*managedHeadersState)(nil)).Elem()
}

type managedHeadersArgs struct {
	// The list of managed request headers.
	ManagedRequestHeaders []ManagedHeadersManagedRequestHeader `pulumi:"managedRequestHeaders"`
	// The list of managed response headers.
	ManagedResponseHeaders []ManagedHeadersManagedResponseHeader `pulumi:"managedResponseHeaders"`
	// The zone identifier to target for the resource.
	ZoneId string `pulumi:"zoneId"`
}

// The set of arguments for constructing a ManagedHeaders resource.
type ManagedHeadersArgs struct {
	// The list of managed request headers.
	ManagedRequestHeaders ManagedHeadersManagedRequestHeaderArrayInput
	// The list of managed response headers.
	ManagedResponseHeaders ManagedHeadersManagedResponseHeaderArrayInput
	// The zone identifier to target for the resource.
	ZoneId pulumi.StringInput
}

func (ManagedHeadersArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managedHeadersArgs)(nil)).Elem()
}

type ManagedHeadersInput interface {
	pulumi.Input

	ToManagedHeadersOutput() ManagedHeadersOutput
	ToManagedHeadersOutputWithContext(ctx context.Context) ManagedHeadersOutput
}

func (*ManagedHeaders) ElementType() reflect.Type {
	return reflect.TypeOf((**ManagedHeaders)(nil)).Elem()
}

func (i *ManagedHeaders) ToManagedHeadersOutput() ManagedHeadersOutput {
	return i.ToManagedHeadersOutputWithContext(context.Background())
}

func (i *ManagedHeaders) ToManagedHeadersOutputWithContext(ctx context.Context) ManagedHeadersOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedHeadersOutput)
}

// ManagedHeadersArrayInput is an input type that accepts ManagedHeadersArray and ManagedHeadersArrayOutput values.
// You can construct a concrete instance of `ManagedHeadersArrayInput` via:
//
//          ManagedHeadersArray{ ManagedHeadersArgs{...} }
type ManagedHeadersArrayInput interface {
	pulumi.Input

	ToManagedHeadersArrayOutput() ManagedHeadersArrayOutput
	ToManagedHeadersArrayOutputWithContext(context.Context) ManagedHeadersArrayOutput
}

type ManagedHeadersArray []ManagedHeadersInput

func (ManagedHeadersArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ManagedHeaders)(nil)).Elem()
}

func (i ManagedHeadersArray) ToManagedHeadersArrayOutput() ManagedHeadersArrayOutput {
	return i.ToManagedHeadersArrayOutputWithContext(context.Background())
}

func (i ManagedHeadersArray) ToManagedHeadersArrayOutputWithContext(ctx context.Context) ManagedHeadersArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedHeadersArrayOutput)
}

// ManagedHeadersMapInput is an input type that accepts ManagedHeadersMap and ManagedHeadersMapOutput values.
// You can construct a concrete instance of `ManagedHeadersMapInput` via:
//
//          ManagedHeadersMap{ "key": ManagedHeadersArgs{...} }
type ManagedHeadersMapInput interface {
	pulumi.Input

	ToManagedHeadersMapOutput() ManagedHeadersMapOutput
	ToManagedHeadersMapOutputWithContext(context.Context) ManagedHeadersMapOutput
}

type ManagedHeadersMap map[string]ManagedHeadersInput

func (ManagedHeadersMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ManagedHeaders)(nil)).Elem()
}

func (i ManagedHeadersMap) ToManagedHeadersMapOutput() ManagedHeadersMapOutput {
	return i.ToManagedHeadersMapOutputWithContext(context.Background())
}

func (i ManagedHeadersMap) ToManagedHeadersMapOutputWithContext(ctx context.Context) ManagedHeadersMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedHeadersMapOutput)
}

type ManagedHeadersOutput struct{ *pulumi.OutputState }

func (ManagedHeadersOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**ManagedHeaders)(nil)).Elem()
}

func (o ManagedHeadersOutput) ToManagedHeadersOutput() ManagedHeadersOutput {
	return o
}

func (o ManagedHeadersOutput) ToManagedHeadersOutputWithContext(ctx context.Context) ManagedHeadersOutput {
	return o
}

// The list of managed request headers.
func (o ManagedHeadersOutput) ManagedRequestHeaders() ManagedHeadersManagedRequestHeaderArrayOutput {
	return o.ApplyT(func(v *ManagedHeaders) ManagedHeadersManagedRequestHeaderArrayOutput { return v.ManagedRequestHeaders }).(ManagedHeadersManagedRequestHeaderArrayOutput)
}

// The list of managed response headers.
func (o ManagedHeadersOutput) ManagedResponseHeaders() ManagedHeadersManagedResponseHeaderArrayOutput {
	return o.ApplyT(func(v *ManagedHeaders) ManagedHeadersManagedResponseHeaderArrayOutput {
		return v.ManagedResponseHeaders
	}).(ManagedHeadersManagedResponseHeaderArrayOutput)
}

// The zone identifier to target for the resource.
func (o ManagedHeadersOutput) ZoneId() pulumi.StringOutput {
	return o.ApplyT(func(v *ManagedHeaders) pulumi.StringOutput { return v.ZoneId }).(pulumi.StringOutput)
}

type ManagedHeadersArrayOutput struct{ *pulumi.OutputState }

func (ManagedHeadersArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*ManagedHeaders)(nil)).Elem()
}

func (o ManagedHeadersArrayOutput) ToManagedHeadersArrayOutput() ManagedHeadersArrayOutput {
	return o
}

func (o ManagedHeadersArrayOutput) ToManagedHeadersArrayOutputWithContext(ctx context.Context) ManagedHeadersArrayOutput {
	return o
}

func (o ManagedHeadersArrayOutput) Index(i pulumi.IntInput) ManagedHeadersOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *ManagedHeaders {
		return vs[0].([]*ManagedHeaders)[vs[1].(int)]
	}).(ManagedHeadersOutput)
}

type ManagedHeadersMapOutput struct{ *pulumi.OutputState }

func (ManagedHeadersMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*ManagedHeaders)(nil)).Elem()
}

func (o ManagedHeadersMapOutput) ToManagedHeadersMapOutput() ManagedHeadersMapOutput {
	return o
}

func (o ManagedHeadersMapOutput) ToManagedHeadersMapOutputWithContext(ctx context.Context) ManagedHeadersMapOutput {
	return o
}

func (o ManagedHeadersMapOutput) MapIndex(k pulumi.StringInput) ManagedHeadersOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *ManagedHeaders {
		return vs[0].(map[string]*ManagedHeaders)[vs[1].(string)]
	}).(ManagedHeadersOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*ManagedHeadersInput)(nil)).Elem(), &ManagedHeaders{})
	pulumi.RegisterInputType(reflect.TypeOf((*ManagedHeadersArrayInput)(nil)).Elem(), ManagedHeadersArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*ManagedHeadersMapInput)(nil)).Elem(), ManagedHeadersMap{})
	pulumi.RegisterOutputType(ManagedHeadersOutput{})
	pulumi.RegisterOutputType(ManagedHeadersArrayOutput{})
	pulumi.RegisterOutputType(ManagedHeadersMapOutput{})
}
