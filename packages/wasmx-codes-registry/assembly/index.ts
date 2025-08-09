import { JSON } from "json-as";
import * as wasmx from 'wasmx-env/assembly/wasmx';
import { GenesisState } from "./types";

export function instantiate(): void {
  const calld = getCallDataInstantiate()
  InitGenesis(calld)
}

export function main(): void {
}

function InitGenesis(req: GenesisState): ArrayBuffer {
    console.log("InitGenesis")
    for (let i = 0; i < req.code_infos.length; i++) {
        const codeInfo = req.code_infos[i]
        console.log("---code_infos i---" + i.toString() + ": " + codeInfo.code_hash)
    }
    console.log("InitGenesis contract_infos: " + req.contract_infos.length.toString())

    for (let i = 0; i < req.contract_infos.length; i++) {
        console.log("---contract_infos i---" + i.toString())

        const data = req.contract_infos[i]

        console.log("---data.address---" + data.address)
        console.log("---data.contract_info---" + data.contract_info.code_id.toString())
    }
    return new ArrayBuffer(0);
}

export function getCallDataInstantiate(): GenesisState {
    const calldraw = wasmx.getCallData();
    let calldstr = String.UTF8.decode(calldraw)
    // console.log("===INIT===")
    // console.log(calldstr)
    // console.log("===INIT END===")
    return JSON.parse<GenesisState>(calldstr);
}
