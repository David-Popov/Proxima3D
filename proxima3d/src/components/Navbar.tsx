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
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Box } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Box className="h-6 w-6 text-primary" />
          <NavLink to="/" className="font-bold text-lg">
            Proxima3D
          </NavLink>
        </div>

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

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <NavLink to="/sign-in">Sign In</NavLink>
          </Button>
          <Button asChild>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 py-6">
              <div className="grid gap-3">
                <NavLink to="/" className="text-lg font-semibold">
                  Home
                </NavLink>
                <NavLink to="/models" className="text-lg font-semibold">
                  Models
                </NavLink>
                <div className="ml-4 grid gap-2">
                  <NavLink to="/models/architectural" className="text-sm">
                    Architectural
                  </NavLink>
                  <NavLink to="/models/characters" className="text-sm">
                    Characters
                  </NavLink>
                  <NavLink to="/models/mechanical" className="text-sm">
                    Mechanical
                  </NavLink>
                </div>
                <NavLink to="/services" className="text-lg font-semibold">
                  Services
                </NavLink>
                <div className="ml-4 grid gap-2">
                  <NavLink to="/services/3d-printing" className="text-sm">
                    3D Printing
                  </NavLink>
                  <NavLink to="/services/custom-design" className="text-sm">
                    Custom Design
                  </NavLink>
                  <NavLink to="/services/consultation" className="text-sm">
                    Consultation
                  </NavLink>
                </div>
                <NavLink to="/pricing" className="text-lg font-semibold">
                  Pricing
                </NavLink>
                <NavLink to="/contact" className="text-lg font-semibold">
                  Contact
                </NavLink>
              </div>
              <div className="grid gap-3">
                <Button variant="outline" asChild className="w-full">
                  <NavLink to="/sign-in">Sign In</NavLink>
                </Button>
                <Button asChild className="w-full">
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
