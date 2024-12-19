import React from 'react'
import { For, Stack, Text } from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
const items = [
    { value: "a", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { value: "b", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
    { value: "c", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
    { value: "d", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
    { value: "e",  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  },
]
const Faqs = () => {
    return (




        <AccordionRoot
            variant={"enclosed"}
            size={'lg'}
            key={'size'}
            collapsible
            defaultValue={["a"]}
        >
            {items.map((item, index) => (
                <AccordionItem key={index} value={item.value} className="border-b border-gray-200">
                    <AccordionItemTrigger className="px-4 py-4 xs:text-lg lg:text-2xl font-semibold transition-transform duration-300 ease-in-out hover:translate-x-2 text-black">{item.title}</AccordionItemTrigger>
                    <AccordionItemContent className="px-4 py-3 xs:text-[14px] lg:text-lg leading-relaxed duration-300 ease-in-out text-black">{item.text}</AccordionItemContent>
                </AccordionItem>
            ))}
        </AccordionRoot>





    )
}

export default Faqs