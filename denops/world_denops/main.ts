import type { Denops } from "jsr:@denops/std";

export async function main(denops: Denops): Promise<void> {
  // Expose functions callable from Vim as: denops#request(world_denops, 'greet', [])
  denops.dispatcher = {
    async hello(): Promise<void> {
      await denops.cmd(`echomsg "Hello from world_denops!"`);
    },
  };
}
