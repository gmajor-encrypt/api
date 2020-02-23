[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["type/HeaderExtended"](../modules/_type_headerextended_.md) › [HeaderExtended](_type_headerextended_.headerextended.md)

# Class: HeaderExtended <**S, T, V, E**>

**`name`** HeaderExtended

**`description`** 
A [[Block]] header with an additional `author` field that indicates the block author

## Type parameters

▪ **S**: *TypesDef*

▪ **T**: *object*

▪ **V**: *object*

▪ **E**: *object*

## Hierarchy

* Header

  ↳ **HeaderExtended**

## Implements

* Codec

## Index

### Constructors

* [constructor](_type_headerextended_.headerextended.md#constructor)

### Properties

* [#author](_type_headerextended_.headerextended.md#optional-#author)
* [digest](_type_headerextended_.headerextended.md#digest)
* [extrinsicsRoot](_type_headerextended_.headerextended.md#extrinsicsroot)
* [number](_type_headerextended_.headerextended.md#number)
* [parentHash](_type_headerextended_.headerextended.md#parenthash)
* [registry](_type_headerextended_.headerextended.md#registry)
* [size](_type_headerextended_.headerextended.md#size)
* [stateRoot](_type_headerextended_.headerextended.md#stateroot)

### Accessors

* [Type](_type_headerextended_.headerextended.md#type)
* [author](_type_headerextended_.headerextended.md#author)
* [defKeys](_type_headerextended_.headerextended.md#defkeys)
* [encodedLength](_type_headerextended_.headerextended.md#encodedlength)
* [hash](_type_headerextended_.headerextended.md#hash)
* [isEmpty](_type_headerextended_.headerextended.md#isempty)

### Methods

* [clear](_type_headerextended_.headerextended.md#clear)
* [delete](_type_headerextended_.headerextended.md#delete)
* [eq](_type_headerextended_.headerextended.md#eq)
* [forEach](_type_headerextended_.headerextended.md#foreach)
* [get](_type_headerextended_.headerextended.md#get)
* [getAtIndex](_type_headerextended_.headerextended.md#getatindex)
* [has](_type_headerextended_.headerextended.md#has)
* [set](_type_headerextended_.headerextended.md#set)
* [toArray](_type_headerextended_.headerextended.md#toarray)
* [toHex](_type_headerextended_.headerextended.md#tohex)
* [toHuman](_type_headerextended_.headerextended.md#tohuman)
* [toJSON](_type_headerextended_.headerextended.md#tojson)
* [toRawType](_type_headerextended_.headerextended.md#torawtype)
* [toString](_type_headerextended_.headerextended.md#tostring)
* [toU8a](_type_headerextended_.headerextended.md#tou8a)
* [typesToMap](_type_headerextended_.headerextended.md#static-typestomap)
* [with](_type_headerextended_.headerextended.md#static-with)

## Constructors

###  constructor

\+ **new HeaderExtended**(`registry`: Registry, `header?`: Header, `sessionValidators?`: AccountId[]): *[HeaderExtended](_type_headerextended_.headerextended.md)*

*Overrides void*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:20](https://github.com/polkadot-js/api/blob/869f9b7af/packages/api-derive/src/type/HeaderExtended.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`header?` | Header |
`sessionValidators?` | AccountId[] |

**Returns:** *[HeaderExtended](_type_headerextended_.headerextended.md)*

## Properties

### `Optional` #author

• **#author**? : *AccountId*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:20](https://github.com/polkadot-js/api/blob/869f9b7af/packages/api-derive/src/type/HeaderExtended.ts#L20)*

___

###  digest

• **digest**: *Digest*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[digest](_type_headerextended_.headerextended.md#digest)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:114](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/interfaces/runtime/types.ts#L114)*

___

###  extrinsicsRoot

• **extrinsicsRoot**: *Hash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[extrinsicsRoot](_type_headerextended_.headerextended.md#extrinsicsroot)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:113](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/interfaces/runtime/types.ts#L113)*

___

###  number

• **number**: *Compact‹BlockNumber›*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[number](_type_headerextended_.headerextended.md#number)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:111](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/interfaces/runtime/types.ts#L111)*

___

###  parentHash

• **parentHash**: *Hash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[parentHash](_type_headerextended_.headerextended.md#parenthash)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:110](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/interfaces/runtime/types.ts#L110)*

___

###  registry

• **registry**: *Registry*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[registry](_type_headerextended_.headerextended.md#registry)*

*Defined in [packages/types/src/codec/Struct.ts:106](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L106)*

___

###  size

• **size**: *number*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[size](_type_headerextended_.headerextended.md#size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

###  stateRoot

• **stateRoot**: *Hash*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[stateRoot](_type_headerextended_.headerextended.md#stateroot)*

*Defined in [packages/types/src/interfaces/runtime/types.ts:112](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/interfaces/runtime/types.ts#L112)*

## Accessors

###  Type

• **get Type**(): *E*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[Type](_type_headerextended_.headerextended.md#type)*

*Defined in [packages/types/src/codec/Struct.ts:168](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L168)*

**`description`** Returns the Type description to sthe structure

**Returns:** *E*

___

###  author

• **get author**(): *AccountId | undefined*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:53](https://github.com/polkadot-js/api/blob/869f9b7af/packages/api-derive/src/type/HeaderExtended.ts#L53)*

**`description`** Convenience method, returns the author for the block

**Returns:** *AccountId | undefined*

___

###  defKeys

• **get defKeys**(): *string[]*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[defKeys](_type_headerextended_.headerextended.md#defkeys)*

*Defined in [packages/types/src/codec/Struct.ts:146](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L146)*

**`description`** The available keys for this enum

**Returns:** *string[]*

___

###  encodedLength

• **get encodedLength**(): *number*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[encodedLength](_type_headerextended_.headerextended.md#encodedlength)*

*Defined in [packages/types/src/codec/Struct.ts:181](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L181)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[hash](_type_headerextended_.headerextended.md#hash)*

*Defined in [packages/types/src/codec/Struct.ts:192](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L192)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[isEmpty](_type_headerextended_.headerextended.md#isempty)*

*Defined in [packages/types/src/codec/Struct.ts:153](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L153)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

## Methods

###  clear

▸ **clear**(): *void*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[clear](_type_headerextended_.headerextended.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: keyof S): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[delete](_type_headerextended_.headerextended.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[eq](_type_headerextended_.headerextended.md#eq)*

*Defined in [packages/types/src/codec/Struct.ts:199](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L199)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[forEach](_type_headerextended_.headerextended.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: Codec, `key`: keyof S, `map`: Map‹keyof S, Codec›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Codec |
`key` | keyof S |
`map` | Map‹keyof S, Codec› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`name`: keyof S): *Codec | undefined*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[get](_type_headerextended_.headerextended.md#get)*

*Overrides void*

*Defined in [packages/types/src/codec/Struct.ts:207](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L207)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *Codec | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *Codec*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[getAtIndex](_type_headerextended_.headerextended.md#getatindex)*

*Defined in [packages/types/src/codec/Struct.ts:214](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L214)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *Codec*

___

###  has

▸ **has**(`key`: keyof S): *boolean*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[has](_type_headerextended_.headerextended.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |

**Returns:** *boolean*

___

###  set

▸ **set**(`key`: keyof S, `value`: Codec): *this*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[set](_type_headerextended_.headerextended.md#set)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof S |
`value` | Codec |

**Returns:** *this*

___

###  toArray

▸ **toArray**(): *Codec[]*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toArray](_type_headerextended_.headerextended.md#toarray)*

*Defined in [packages/types/src/codec/Struct.ts:221](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L221)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *Codec[]*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toHex](_type_headerextended_.headerextended.md#tohex)*

*Defined in [packages/types/src/codec/Struct.ts:228](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L228)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *AnyJson*

*Overrides void*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:60](https://github.com/polkadot-js/api/blob/869f9b7af/packages/api-derive/src/type/HeaderExtended.ts#L60)*

**`description`** Creates a human-friendly JSON representation

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *AnyJson*

___

###  toJSON

▸ **toJSON**(): *AnyJson*

*Overrides void*

*Defined in [packages/api-derive/src/type/HeaderExtended.ts:72](https://github.com/polkadot-js/api/blob/869f9b7af/packages/api-derive/src/type/HeaderExtended.ts#L72)*

**`description`** Creates the JSON representation

**Returns:** *AnyJson*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toRawType](_type_headerextended_.headerextended.md#torawtype)*

*Defined in [packages/types/src/codec/Struct.ts:273](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L273)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toString](_type_headerextended_.headerextended.md#tostring)*

*Defined in [packages/types/src/codec/Struct.ts:282](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L282)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: BareOpts): *Uint8Array*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[toU8a](_type_headerextended_.headerextended.md#tou8a)*

*Defined in [packages/types/src/codec/Struct.ts:290](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L290)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | BareOpts | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *Uint8Array*

___

### `Static` typesToMap

▸ **typesToMap**(`registry`: Registry, `Types`: Record‹string, Constructor›): *Record‹string, string›*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[typesToMap](_type_headerextended_.headerextended.md#static-typestomap)*

*Defined in [packages/types/src/codec/Struct.ts:262](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L262)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | Registry |
`Types` | Record‹string, Constructor› |

**Returns:** *Record‹string, string›*

___

### `Static` with

▸ **with**<**S**>(`Types`: S): *Constructor‹Struct‹S››*

*Inherited from [HeaderExtended](_type_headerextended_.headerextended.md).[with](_type_headerextended_.headerextended.md#static-with)*

*Defined in [packages/types/src/codec/Struct.ts:123](https://github.com/polkadot-js/api/blob/869f9b7af/packages/types/src/codec/Struct.ts#L123)*

**Type parameters:**

▪ **S**: *TypesDef*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | S |

**Returns:** *Constructor‹Struct‹S››*