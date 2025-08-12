"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { NavbarDemoMobile } from "./NavbarMobile";
import './navmob.css'

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [navToggle,setnavToggle] = useState("navbarDefault")


const handleClick = (): void => {
    if (navToggle === "navbarDefault") {
        setnavToggle("navbarOpen");
    } else {
        setnavToggle("navbarDefault");
    }
};


  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 min-h-[8vh] py-3 sm:py-0", className)}>

        <div className="flex justify-between items-center">
        <h6 className="font-bold text-nowrap ml-4 text-blue-400 z-[100]">WING CEYLONE</h6>


        <div className={`${navToggle}  left-0 w-full absolute`}>
            <NavbarDemoMobile />
        </div>
        

        <div className="">
            <div className="">
           {/*Laptop Menu*/}
       <div className="hidden sm:flex">

        <Menu setActive={setActive}>
        <Link className="text-nowrap" href="/">Home</Link>


        <MenuItem setActive={setActive} active={active} item="Tours">
          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Pilgrimage Tours"
              href="https://algochurn.com"
              src="https://lk.lakpura.com/cdn/shop/files/18_a9280c3f-3da4-4d9b-a513-e204a1285d71.jpg?v=1700034836&width=3840"
              description="Explore sacred sites and spiritual landmarks across Sri Lanka."
            />
            <ProductItem
              title="Culture & Heritage Tours"
              href="https://tailwindmasterkit.com"
              src="https://sridaladamaligawa.lk/wp-content/uploads/2020/09/AC0I1541-Copy.jpg"
              description="Discover Sri Lanka's rich history and cultural wonders."
            />
            <ProductItem
              title="Hill Country Tours"
              href="https://gomoonbeam.com"
              src="https://www.aito.com/images/holidays/311216/sri-lankas-hill-country-2770422.jpg"
              description="Enjoy misty mountains, tea estates, and cool climate."
            />
            <ProductItem
              title="Beach Tours"
              href="https://userogue.com"
              src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg"
              description="Relax on pristine beaches with golden sands and surf."
            />
            <ProductItem
              title="Wild Life Adventure Tours"
              href="https://tailwindmasterkit.com"
              src="https://timbuktutravel.imgix.net/2023/09/sri-lanka-wildlife-kodak-1.jpeg?auto=compress%2Cformat&fit=scale&h=960&ixlib=php-1.1.0&q=50&w=1439&wpsize=large"
              description="Experience thrilling safaris and exotic wildlife encounters."
            />
            <ProductItem
              title="Golf Tours"
              href="https://gomoonbeam.com"
              src="https://www.reddottours.com/uploads/itinerary/Golfing-in-Sri-Lanka-tour/Golfing-in-Sri-Lanka-tour-header.jpg"
              description="Play golf at scenic courses across Sri Lanka."
            />
            <ProductItem
              title="Untouched Tours"
              href="https://userogue.com"
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/1e/48/81.jpg"
              description="Visit hidden gems and untouched natural beauty spots."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Activities">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <ProductItem
              title="Mirissa Whale Waching"
              href="https://algochurn.com"
              src="https://mirissacabs.com/wp-content/uploads/2021/11/whale-watching.jpg"
              description="Witness majestic whales off the southern coast."
            />
            <ProductItem
              title="Hot Air Baloons"
              href="https://tailwindmasterkit.com"
              src="https://www.travelmapsrilanka.com/activities/activtyimages/sri-lanka-ballooning.jpg"
              description="Float above Sri Lanka’s stunning landscapes at sunrise."
            />
            <ProductItem
              title="Water Sports"
              href="https://gomoonbeam.com"
              src="https://nexttravelsrilanka.com/wp-content/uploads/2021/07/A-foreign-boy-windsurfing-on-the-waves-enjoying-one-of-the-most-exciting-water-sports-in-Sri-Lanka.jpg"
              description="Enjoy surfing, diving, and jet skiing adventures."
            />
            <ProductItem
              title="Rafting"
              href="https://userogue.com"
              src="https://www.kitulgalarafting.com/images/rafting3.jpg"
              description="Ride the rapids through lush jungle rivers."
            />
            <ProductItem
              title="Bird Watching"
              href="https://tailwindmasterkit.com"
              src="https://srilankantourguides.com/wp-content/uploads/2018/03/BarnSwallows.jpg"
              description="Spot rare and colorful birds in natural habitats."
            />
            <ProductItem
              title="Hiking & Trekking"
              href="https://gomoonbeam.com"
              src="https://blog.cinnamonhotels.com/wp-content/uploads/2014/01/1.jpg"
              description="Trek through forests, hills, and breathtaking trails."
            />
          </div>
        </MenuItem>
        

        <MenuItem setActive={setActive} active={active} item="Other">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <ProductItem
              title="Honeymoon Tours"
              href="https://algochurn.com"
              src="https://www.walkerstours.com/wp-content/uploads/2015/04/Wedded-Bliss.jpg"
              description="Romantic getaways crafted for newlyweds in paradise."
            />
            <ProductItem
              title="Luxury Tours"
              href="https://tailwindmasterkit.com"
              src="https://www.bestofceylon.com/images/sri-lanka-tailor-made-holidays-tours/luxury-tours-in-sri-lanka/sri-lanka-tours-and-holidays-tailor-made-1.jpg"
              description="Indulge in premium experiences and five-star comfort."
            />
            <ProductItem
              title="Ayurvedic & Wellness Tours"
              href="https://gomoonbeam.com"
              src="https://overatours.com/wp-content/uploads/2021/02/Wellness-and-anti-stress.jpg"
              description="Rejuvenate with traditional healing and spa treatments."
            />
            <ProductItem
              title="MICE"
              href="https://userogue.com"
              src="https://www.tourismsrilanka.org/wp-content/uploads/2017/05/tourism-sri-lanka-mice-business-events-tourismsrilanka.jpg"
              description="Host business events in top Sri Lankan venues."
            />
            <ProductItem
              title="Write to Us"
              href="https://tailwindmasterkit.com"
              src="https://aasteria.com/wp-content/uploads/2021/10/BLOG.jpg"
              description="Contact us for tour info or custom requests."
            />
          </div>
        </MenuItem>

        <Link className="text-nowrap" href="/contact">Contact</Link>
      </Menu>
      

      </div>
       </div>
      
        </div>

       

      <button className="px-4 py-1 rounded-full bg-blue-700 text-white cursor-pointer hidden sm:inline-block">Login</button>

      <RiMenu3Line onClick={handleClick} size={24} className="sm:hidden z-[100] text-gray-500 mr-4 cursor-pointer" />


      </div>
    </div>
  );
}
