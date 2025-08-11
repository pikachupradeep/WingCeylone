"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link className="text-nowrap" href="/">Home</Link>
       
       
         <MenuItem setActive={setActive} active={active} item="Tours">
          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
            <ProductItem
              title="Pilgrimage Tours"
              href="https://algochurn.com"
              src="https://lk.lakpura.com/cdn/shop/files/18_a9280c3f-3da4-4d9b-a513-e204a1285d71.jpg?v=1700034836&width=3840"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Culture & Heritage Tours"
              href="https://tailwindmasterkit.com"
              src="https://sridaladamaligawa.lk/wp-content/uploads/2020/09/AC0I1541-Copy.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Hill Country Tours"
              href="https://gomoonbeam.com"
              src="https://www.aito.com/images/holidays/311216/sri-lankas-hill-country-2770422.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Beach Tours"
              href="https://userogue.com"
              src="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
             <ProductItem
              title="Wild Life Adventure Tours"
              href="https://tailwindmasterkit.com"
              src="https://timbuktutravel.imgix.net/2023/09/sri-lanka-wildlife-kodak-1.jpeg?auto=compress%2Cformat&fit=scale&h=960&ixlib=php-1.1.0&q=50&w=1439&wpsize=large"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Golf Tours"
              href="https://gomoonbeam.com"
              src="https://www.reddottours.com/uploads/itinerary/Golfing-in-Sri-Lanka-tour/Golfing-in-Sri-Lanka-tour-header.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Untouched Tours"
              href="https://userogue.com"
              src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/1e/48/81.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Activities">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
             <ProductItem
              title="Mirissa Whale Waching"
              href="https://algochurn.com"
              src="https://mirissacabs.com/wp-content/uploads/2021/11/whale-watching.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Hot Air Baloons"
              href="https://tailwindmasterkit.com"
              src="https://www.travelmapsrilanka.com/activities/activtyimages/sri-lanka-ballooning.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Water Sports"
              href="https://gomoonbeam.com"
              src="https://nexttravelsrilanka.com/wp-content/uploads/2021/07/A-foreign-boy-windsurfing-on-the-waves-enjoying-one-of-the-most-exciting-water-sports-in-Sri-Lanka.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rafting"
              href="https://userogue.com"
              src="https://www.kitulgalarafting.com/images/rafting3.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
             <ProductItem
              title="Bird Watching"
              href="https://tailwindmasterkit.com"
              src="https://srilankantourguides.com/wp-content/uploads/2018/03/BarnSwallows.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Hiking & Trekking"
              href="https://gomoonbeam.com"
              src="https://blog.cinnamonhotels.com/wp-content/uploads/2014/01/1.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          
          </div>
        </MenuItem>

         <MenuItem setActive={setActive} active={active} item="Other">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
             <ProductItem
              title="Honeymoon Tours"
              href="https://algochurn.com"
              src="https://www.walkerstours.com/wp-content/uploads/2015/04/Wedded-Bliss.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Luxury Tours"
              href="https://tailwindmasterkit.com"
              src="https://www.bestofceylon.com/images/sri-lanka-tailor-made-holidays-tours/luxury-tours-in-sri-lanka/sri-lanka-tours-and-holidays-tailor-made-1.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Ayurvedic & Wellness Tours"
              href="https://gomoonbeam.com"
              src="https://overatours.com/wp-content/uploads/2021/02/Wellness-and-anti-stress.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="MICE"
              href="https://userogue.com"
              src="https://www.tourismsrilanka.org/wp-content/uploads/2017/05/tourism-sri-lanka-mice-business-events-tourismsrilanka.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
             <ProductItem
              title="Write to Us"
              href="https://tailwindmasterkit.com"
              src="https://aasteria.com/wp-content/uploads/2021/10/BLOG.jpg"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
         <Link className="text-nowrap" href="/contact">Contact</Link>
       
      </Menu>
    </div>
  );
}
