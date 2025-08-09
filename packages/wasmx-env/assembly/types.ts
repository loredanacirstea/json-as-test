import { JSON } from "json-as";

export type HexString = string;
export type Base64String = string;
export type Bech32String = string;

@json
export class CodeInfo {
    code_hash: Base64String = ""
    creator: Bech32String  = ""
    deps: string[] = []
    pinned: boolean = false
    metering_off: boolean = false
    metadata: CodeMetadata = new CodeMetadata("", [], "", "", "", "", "", new CodeOrigin("", ""))
    interpreted_bytecode_deployment: Base64String = ""
    interpreted_bytecode_runtime: Base64String = ""
    runtime_hash: Base64String = ""
    constructor(
        code_hash: Base64String,
        creator: Bech32String,
        deps: string[],
        pinned: boolean,
        metering_off: boolean,
        metadata: CodeMetadata,
        interpreted_bytecode_deployment: Base64String,
        interpreted_bytecode_runtime: Base64String,
        runtime_hash: Base64String,
    ) {
        this.code_hash = code_hash
        this.creator = creator
        this.deps = deps
        this.pinned = pinned
        this.metering_off = metering_off
        this.metadata = metadata
        this.interpreted_bytecode_deployment = interpreted_bytecode_deployment
        this.interpreted_bytecode_runtime = interpreted_bytecode_runtime
        this.runtime_hash = runtime_hash
    }
}

@json
export class CodeOrigin {
    chain_id: string = ""
    address: Bech32String = ""
    constructor(chain_id: string, address: Bech32String) {
        console.log("CodeOrigin.constructor")
        this.chain_id = chain_id
        this.address = address
    }
}

@json
export class CodeMetadata {
    name: string = ""
    categ: string[] = []
    icon: string = ""
    author: string = ""
    site: string = ""
    abi: Base64String = ""
    json_schema: string = ""
    origin: CodeOrigin | null = new CodeOrigin("", "")
    constructor(
        name: string,
        categ: string[],
        icon: string,
        author: string,
        site: string,
        abi: Base64String,
        json_schema: string,
        origin: CodeOrigin | null,
    ) {
        this.name = name
        this.categ = categ
        this.icon = icon
        this.author = author
        this.site = site
        this.abi = abi
        this.json_schema = json_schema
        this.origin = origin
    }

    static Empty(): CodeMetadata {
        return new CodeMetadata("", [], "", "", "", "", "", null)
    }
}

@json
export class ContractInfo {
    code_id: u64 = 0
    creator: Bech32String = ""
    label: string = ""
    storage_type: string = ""
    init_message: Base64String = ""
    provenance: string = ""
    ibc_port_id: string = ""

    constructor(
        code_id: u64,
        creator: Bech32String,
        label: string,
        storage_type: string,
        init_message: Base64String,
        provenance: string,
        ibc_port_id: string,
    ) {
        this.code_id = code_id
        this.creator = creator
        this.label = label
        this.storage_type = storage_type
        this.init_message = init_message
        this.provenance = provenance
        this.ibc_port_id = ibc_port_id
    }
}
