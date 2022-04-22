// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package cloudflare

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Provides a Workers KV Pair.  *NOTE:*  This resource uses the Cloudflare account APIs.  This requires setting the `CLOUDFLARE_ACCOUNT_ID` environment variable or `accountId` provider argument.
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
// 		exampleNs, err := cloudflare.NewWorkersKvNamespace(ctx, "exampleNs", &cloudflare.WorkersKvNamespaceArgs{
// 			Title: pulumi.String("test-namespace"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = cloudflare.NewWorkersKv(ctx, "example", &cloudflare.WorkersKvArgs{
// 			NamespaceId: exampleNs.ID(),
// 			Key:         pulumi.String("test-key"),
// 			Value:       pulumi.String("test value"),
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
// ```sh
//  $ pulumi import cloudflare:index/workersKv:WorkersKv example beaeb6716c9443eaa4deef11763ccca6_test-key
// ```
//
//  where- `beaeb6716c9443eaa4deef11763ccca6` is the ID of the namespace and `test-key` is the key
type WorkersKv struct {
	pulumi.CustomResourceState

	// The key name
	Key pulumi.StringOutput `pulumi:"key"`
	// The ID of the Workers KV namespace in which you want to create the KV pair
	NamespaceId pulumi.StringOutput `pulumi:"namespaceId"`
	// The string value to be stored in the key
	Value pulumi.StringOutput `pulumi:"value"`
}

// NewWorkersKv registers a new resource with the given unique name, arguments, and options.
func NewWorkersKv(ctx *pulumi.Context,
	name string, args *WorkersKvArgs, opts ...pulumi.ResourceOption) (*WorkersKv, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Key == nil {
		return nil, errors.New("invalid value for required argument 'Key'")
	}
	if args.NamespaceId == nil {
		return nil, errors.New("invalid value for required argument 'NamespaceId'")
	}
	if args.Value == nil {
		return nil, errors.New("invalid value for required argument 'Value'")
	}
	var resource WorkersKv
	err := ctx.RegisterResource("cloudflare:index/workersKv:WorkersKv", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWorkersKv gets an existing WorkersKv resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWorkersKv(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WorkersKvState, opts ...pulumi.ResourceOption) (*WorkersKv, error) {
	var resource WorkersKv
	err := ctx.ReadResource("cloudflare:index/workersKv:WorkersKv", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WorkersKv resources.
type workersKvState struct {
	// The key name
	Key *string `pulumi:"key"`
	// The ID of the Workers KV namespace in which you want to create the KV pair
	NamespaceId *string `pulumi:"namespaceId"`
	// The string value to be stored in the key
	Value *string `pulumi:"value"`
}

type WorkersKvState struct {
	// The key name
	Key pulumi.StringPtrInput
	// The ID of the Workers KV namespace in which you want to create the KV pair
	NamespaceId pulumi.StringPtrInput
	// The string value to be stored in the key
	Value pulumi.StringPtrInput
}

func (WorkersKvState) ElementType() reflect.Type {
	return reflect.TypeOf((*workersKvState)(nil)).Elem()
}

type workersKvArgs struct {
	// The key name
	Key string `pulumi:"key"`
	// The ID of the Workers KV namespace in which you want to create the KV pair
	NamespaceId string `pulumi:"namespaceId"`
	// The string value to be stored in the key
	Value string `pulumi:"value"`
}

// The set of arguments for constructing a WorkersKv resource.
type WorkersKvArgs struct {
	// The key name
	Key pulumi.StringInput
	// The ID of the Workers KV namespace in which you want to create the KV pair
	NamespaceId pulumi.StringInput
	// The string value to be stored in the key
	Value pulumi.StringInput
}

func (WorkersKvArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*workersKvArgs)(nil)).Elem()
}

type WorkersKvInput interface {
	pulumi.Input

	ToWorkersKvOutput() WorkersKvOutput
	ToWorkersKvOutputWithContext(ctx context.Context) WorkersKvOutput
}

func (*WorkersKv) ElementType() reflect.Type {
	return reflect.TypeOf((**WorkersKv)(nil)).Elem()
}

func (i *WorkersKv) ToWorkersKvOutput() WorkersKvOutput {
	return i.ToWorkersKvOutputWithContext(context.Background())
}

func (i *WorkersKv) ToWorkersKvOutputWithContext(ctx context.Context) WorkersKvOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkersKvOutput)
}

// WorkersKvArrayInput is an input type that accepts WorkersKvArray and WorkersKvArrayOutput values.
// You can construct a concrete instance of `WorkersKvArrayInput` via:
//
//          WorkersKvArray{ WorkersKvArgs{...} }
type WorkersKvArrayInput interface {
	pulumi.Input

	ToWorkersKvArrayOutput() WorkersKvArrayOutput
	ToWorkersKvArrayOutputWithContext(context.Context) WorkersKvArrayOutput
}

type WorkersKvArray []WorkersKvInput

func (WorkersKvArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*WorkersKv)(nil)).Elem()
}

func (i WorkersKvArray) ToWorkersKvArrayOutput() WorkersKvArrayOutput {
	return i.ToWorkersKvArrayOutputWithContext(context.Background())
}

func (i WorkersKvArray) ToWorkersKvArrayOutputWithContext(ctx context.Context) WorkersKvArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkersKvArrayOutput)
}

// WorkersKvMapInput is an input type that accepts WorkersKvMap and WorkersKvMapOutput values.
// You can construct a concrete instance of `WorkersKvMapInput` via:
//
//          WorkersKvMap{ "key": WorkersKvArgs{...} }
type WorkersKvMapInput interface {
	pulumi.Input

	ToWorkersKvMapOutput() WorkersKvMapOutput
	ToWorkersKvMapOutputWithContext(context.Context) WorkersKvMapOutput
}

type WorkersKvMap map[string]WorkersKvInput

func (WorkersKvMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*WorkersKv)(nil)).Elem()
}

func (i WorkersKvMap) ToWorkersKvMapOutput() WorkersKvMapOutput {
	return i.ToWorkersKvMapOutputWithContext(context.Background())
}

func (i WorkersKvMap) ToWorkersKvMapOutputWithContext(ctx context.Context) WorkersKvMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WorkersKvMapOutput)
}

type WorkersKvOutput struct{ *pulumi.OutputState }

func (WorkersKvOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**WorkersKv)(nil)).Elem()
}

func (o WorkersKvOutput) ToWorkersKvOutput() WorkersKvOutput {
	return o
}

func (o WorkersKvOutput) ToWorkersKvOutputWithContext(ctx context.Context) WorkersKvOutput {
	return o
}

type WorkersKvArrayOutput struct{ *pulumi.OutputState }

func (WorkersKvArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*WorkersKv)(nil)).Elem()
}

func (o WorkersKvArrayOutput) ToWorkersKvArrayOutput() WorkersKvArrayOutput {
	return o
}

func (o WorkersKvArrayOutput) ToWorkersKvArrayOutputWithContext(ctx context.Context) WorkersKvArrayOutput {
	return o
}

func (o WorkersKvArrayOutput) Index(i pulumi.IntInput) WorkersKvOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *WorkersKv {
		return vs[0].([]*WorkersKv)[vs[1].(int)]
	}).(WorkersKvOutput)
}

type WorkersKvMapOutput struct{ *pulumi.OutputState }

func (WorkersKvMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*WorkersKv)(nil)).Elem()
}

func (o WorkersKvMapOutput) ToWorkersKvMapOutput() WorkersKvMapOutput {
	return o
}

func (o WorkersKvMapOutput) ToWorkersKvMapOutputWithContext(ctx context.Context) WorkersKvMapOutput {
	return o
}

func (o WorkersKvMapOutput) MapIndex(k pulumi.StringInput) WorkersKvOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *WorkersKv {
		return vs[0].(map[string]*WorkersKv)[vs[1].(string)]
	}).(WorkersKvOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*WorkersKvInput)(nil)).Elem(), &WorkersKv{})
	pulumi.RegisterInputType(reflect.TypeOf((*WorkersKvArrayInput)(nil)).Elem(), WorkersKvArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*WorkersKvMapInput)(nil)).Elem(), WorkersKvMap{})
	pulumi.RegisterOutputType(WorkersKvOutput{})
	pulumi.RegisterOutputType(WorkersKvArrayOutput{})
	pulumi.RegisterOutputType(WorkersKvMapOutput{})
}
