export async function getTiles() {
    // In the browser we can fetch from the same origin.
    if (typeof window !== "undefined") {
        const res = await fetch("/data.json", { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed to fetch tiles");
        }
        return res.json();
    }

    // On the server (SSR/RSC), read from the local `public/data.json`.
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const filePath = path.join(process.cwd(), "public", "data.json");
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
}

export async function getTileDetailsById(id) {
    const tiles = await getTiles();
    const tile = tiles.find(
        (tile) => tile.id.toString() === id.toString()
    );
    return tile;
}

export async function getFeaturedTiles() {
    const tiles = await getTiles();
    // Return first 4 tiles as featured
    return tiles.slice(0, 4);
}
