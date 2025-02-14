"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Car, Home, ShoppingBag } from "lucide-react"

const categories = {
  "Real estate": {
    icon: Home,
    items: [
      { title: "For Sale", href: "/category/real-estate/sale" },
      { title: "For Rent", href: "/category/real-estate/rent" },
      { title: "Commercial", href: "/category/real-estate/commercial" },
      { title: "New Projects", href: "/category/real-estate/new" },
    ],
  },
  Vehicles: {
    icon: Car,
    items: [
      { title: "Cars", href: "/category/vehicles/cars" },
      { title: "Motorcycles", href: "/category/vehicles/motorcycles" },
      { title: "Commercial Vehicles", href: "/category/vehicles/commercial" },
      { title: "Spare Parts", href: "/category/vehicles/parts" },
    ],
  },
  Fashion: {
    icon: ShoppingBag,
    items: [
      {
        title: "Clothes",
        items: [
          { title: "Women", href: "/category/fashion/clothes/women" },
          { title: "Men", href: "/category/fashion/clothes/men" },
          { title: "Children", href: "/category/fashion/clothes/children" },
        ],
      },
      {
        title: "Shoes",
        items: [
          { title: "Women", href: "/category/fashion/shoes/women" },
          { title: "Men", href: "/category/fashion/shoes/men" },
          { title: "Children", href: "/category/fashion/shoes/children" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { title: "Bags", href: "/category/fashion/accessories/bags" },
          { title: "Jewelry", href: "/category/fashion/accessories/jewelry" },
          { title: "Watches", href: "/category/fashion/accessories/watches" },
        ],
      },
    ],
  },
  // Add other categories with their dropdowns...
}

export default function CategoryNav() {
  return (
    <NavigationMenu className="max-w-full w-full justify-start">
      <NavigationMenuList className="flex-wrap">
        {Object.entries(categories).map(([name, category]) => (
          <NavigationMenuItem key={name}>
            <NavigationMenuTrigger className="h-10 px-4">
              <category.icon className="mr-2 h-4 w-4" />
              {name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.items.map((item) =>
                  item.items ? (
                    <li key={item.title} className="row-span-3">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                {subItem.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ),
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

