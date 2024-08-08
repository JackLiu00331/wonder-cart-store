"use client";

import React from "react";
import { useState, useEffect } from "react";

import { ShoppingBag } from "lucide-react";

import { useRouter } from "next/navigation";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";

export default function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag className="w-4 h-4" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
}
