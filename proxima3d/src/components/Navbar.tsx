import { NavLink } from "react-router";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { Box } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Лого и име на бранда */}
        <div className="flex items-center gap-2">
          <Box className="h-6 w-6 text-primary" />
          <NavLink to="/" className="font-bold text-lg">
            Proxima3D
          </NavLink>
        </div>

        {/* Основно навигационно меню */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Models</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/featured-models"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Featured Models
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out our curated collection of premium 3D models
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/models/architectural"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Architectural</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Buildings, landscapes and architectural elements
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/models/characters"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Characters</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Figurines, characters and collectibles
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/models/mechanical"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Mechanical</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Functional parts, gears and mechanical components
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/services/3d-printing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">3D Printing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          High-quality printing services with various materials
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/services/custom-design"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Custom Design</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Custom 3D modeling services for your specific needs
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/services/consultation"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">Consultation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Expert advice for your 3D printing projects
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Бутони за вход и ModeToggle */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <NavLink to="/sign-in">Sign In</NavLink>
          </Button>
          <Button asChild>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile nav */}
        <MobileNavBar />
      </div>
    </div>
  );
};

export default NavBar;
