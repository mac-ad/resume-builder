import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <div className="wrapper px-5 lg:px-5 py-4 flex items-center">
      <h1 className="font-bold text-xl">Resume Builder</h1>
      <div className="flex items-center gap-2 ml-auto">
        <Button className="flex items-center gap-2" variant="outline">
          <Icon icon="mdi:github" fontSize={20} /> Github
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
