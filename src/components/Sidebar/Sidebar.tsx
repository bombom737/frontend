import { Home, Inbox, BriefcaseBusiness, Contact, } from "lucide-react";
import { RefObject } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { handleScroll } from "@/hooks/handleScroll";

interface SidebarProps {
  landingRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
}

export function AppSidebar({ landingRef, aboutRef, portfolioRef }: SidebarProps) {
  const items = [
    {
      title: "Home",
      ref: landingRef,
      icon: Home,
    },
    {
      title: "About",
      ref: aboutRef,
      icon: Inbox,
    },
    {
      title: "Portfolio",
      ref: portfolioRef,
      icon: BriefcaseBusiness,
    },
    {
      title: "Contact",
      ref: null,
      icon: Contact
    },
  ];

  return (
    <Sidebar className="!bg-[--sidebar-background] !text-[--sidebar-foreground] border border-[--sidebar-border]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel imageSrc="https://i.imgur.com/fO7nB6H.jpeg"></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="text-[--sidebar-primary] hover:bg-[--sidebar-accent]"
                    onClick={() => handleScroll(item.ref!)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
