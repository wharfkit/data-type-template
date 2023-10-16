import {Asset, AssetType, Name, NameType, Struct} from '@wharfkit/antelope'

// Build or generate the struct for the data types in question
@Struct.type('transfer')
export class EasyTransfer extends Struct {
    @Struct.field(Name) from!: Name
    @Struct.field(Name) to!: Name
    @Struct.field(Asset) quantity!: Asset
    @Struct.field('string') memo!: string

    // Define any helper methods that assist in using the type
    public static transfer(
        from: NameType, // Usage of NameType instead of Name to allow Name or string types
        to: NameType,
        quantity: AssetType, // Usage of AssetType instead of Asset to allow Asset or string types
        memo = '' // Memo in function is optional, so provide a default empty string
    ): EasyTransfer {
        return EasyTransfer.from({from, to, quantity, memo})
    }
}
