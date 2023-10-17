import { ShoppingCartIcon } from "lucide-react";

import { Button } from "./button";
import { Card } from "./card";
import { SideBar } from "./sidebar";

export const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      
      <SideBar />

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
