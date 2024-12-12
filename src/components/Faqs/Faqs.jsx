import React from 'react'
import { For, Stack, Text } from "@chakra-ui/react"
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "@/components/ui/accordion"
const items = [
    { value: "a", title: "How good is the wiper?", text: "Clix Wipers are engineered to be the ultimate wiper blade. The wiper includes a one-piece flex frame design that contours to the many shapes of the windshield throughout its operation. The wiper is designed for both extreme summer and winter weather. Every wiper includes an advanced wiping element available in both natural and silicone rubber." },
    { value: "b", title: "How long does the wiper last?", text: "There are many variables that effect the lifespan of a wiper blade like location, severity of use, and more. With the advanced design of Clix Wipers, they are designed to last longer than traditional national branded wipers. Generally speaking, your Clix Wipers should perform effectively for about a year." },
    { value: "c", title: "Will Clix Wipers fit my vehicle?", text: "Clix Wipers are designed to fit nearly any vehicle - car, truck, RV, etc. Unlike the other national brand wipers, Clix Wipers has starter clips to fit all wiper arm styles, some of which may traditionally be a hassle." },
    { value: "d", title: "What makes Clix Wipers so special?", text: "Clix Wipers are the ultimate wiper blades. They are a great wiper for a great price that replaces easier than an other wiper blade. Our superior design has a long lasting life and an installation system that makes replacing wipers a breeze. To top it off, we offer our superior product with a customizable wiper skin to match your car or your personality." },
    { value: "e", title: "What is Wiper Club?", text: "Wiper Club is our membership program that is like insurance for your wipers. For a low annual fee, you receive the exact wipers needed for your car with a lifetime warranty. When you need new wipers, simply click-on replacements in seconds. Never worry about your wipers again. Ever. Deliveries are automatically schedule annually and can be updated or delayed with ease. You can even swap designs between deliveries." },
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