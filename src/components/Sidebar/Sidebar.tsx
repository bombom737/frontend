import { Home, Inbox, Search, Settings } from "lucide-react";
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

interface SidebarProps {
  landingRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
}

export function AppSidebar({ landingRef, aboutRef }: SidebarProps) {
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
      title: "Search",
      ref: null,
      icon: Search,
    },
    {
      title: "Settings",
      ref: null,
      icon: Settings,
    },
  ];

  function handleScroll(ref: RefObject<HTMLDivElement>) {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

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
