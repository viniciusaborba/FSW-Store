import { Button } from "./button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

import {
  MenuIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";

export const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
        </SheetHeader>

        <div className="mt-2 flex flex-col gap-3">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogInIcon size={16} />
            Realizar Login
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <HomeIcon size={16} />
            Início
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <PercentIcon size={16} />
            Ofertas
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <ListOrderedIcon size={16} />
            Catálogo
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
