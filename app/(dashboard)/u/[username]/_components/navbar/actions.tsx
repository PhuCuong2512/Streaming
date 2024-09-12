import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Clapperboard, LogOut } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export const Actions =  () => {
  return (
    <div className="flex items-center justify-center hover:text-primary">
      <Button 
      size = "sm"
      variant = "ghost"
      className="text-muted-foreground hover:text-primary mr-2"
      asChild
      >
        <Link href="/">
        <LogOut className="h-5 w-5 mr-2"/>
         Exit
        </Link>
      </Button>
      <UserButton 
      afterSignOutUrl="/" />
    </div>
  )
};
