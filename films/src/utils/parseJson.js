import {readFile} from "fs/promises";

export default async (route) => {
    return JSON.parse(
        await readFile (
            new URL(`${route}`, import.meta.url)
        )
    ); 
}