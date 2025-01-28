import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataGeneralSideBar } from "./sidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";

export function SidebarRoutes() {
  const { userId } = useAuth;
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {
            dataGeneralSideBar.map((item)=>(
              <SidebarItem key={item.href} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
