import type { Denops } from "jsr:@denops/std";

export async function main(denops: Denops): Promise<void> {
  // Expose functions callable from Vim as: denops#request(world_denops, 'greet', [])
  denops.dispatcher = {
    async hello(): Promise<void> {
      await denops.cmd(`echomsg "Hello from world_denops!"`);
    },
    async world(lhs, rhs): Promise<void> {
      if (typeof lhs === "number" && typeof rhs === "number") {
        await denops.cmd(`echomsg "The sum is: ${lhs + rhs}"`);
        return;
      }
      if (typeof lhs === "string" && typeof rhs === "string") {
        await denops.cmd(`echomsg "The concatenated string is: ${lhs + rhs}"`);
        return;
      }
      await denops.cmd(`echomsg "Unsupported types"`);
    },
  };
}
