"use client"

import { For, Stack, createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"
const frameworks = createListCollection({
    items: [
        { label: "All Categories", value: "All Categories" },
        { label: "React.js", value: "react" },
        { label: "Vue.js", value: "vue" },
        { label: "Angular", value: "angular" },
        { label: "Svelte", value: "svelte" },
    ],
})
const CategoryMenu = () => {
    return (
        <Stack gap="5" className="xs:w-[120px] lg:w-[150px]">
            <For each={["outline"]}>
                {(variant) => (
                    <SelectRoot key={variant} variant={variant} collection={frameworks}>
                        <SelectTrigger>
                            <SelectValueText placeholder="All Categories" className='text-white xs:text-sm lg:text-lg' />
                        </SelectTrigger>
                        <SelectContent>
                            {frameworks.items.map((movie) => (
                                <SelectItem item={movie} key={movie.value}>
                                    {movie.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
                )}
            </For>
        </Stack>
    )
}

export default CategoryMenu