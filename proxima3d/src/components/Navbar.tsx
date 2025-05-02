import { Link, NavLink } from "react-router";
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
import LanguagePicker from "./LanguagePicker";
import { useTranslation } from "react-i18next";
import { useAuth } from "../contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { t } = useTranslation();
  const auth = useAuth();
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(currentScrollPos === 0);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`flex justify-center items-center border-b w-full bg-background z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ position: "fixed", top: 0, left: 0, right: 0 }}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* logo + name */}
        <div className="flex items-center gap-2">
          <Box className="h-6 w-6 text-primary" />
          <NavLink to="/" className="font-bold text-lg">
            Proxima3D
          </NavLink>
        </div>

        {/* main menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/" className={navigationMenuTriggerStyle()}>
                  {t("nav.home")}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.models")}</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background border rounded-none shadow-md p-0">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/featured-models"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {t("models.featured")}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t("models.featuredDescription")}
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
                        <div className="text-sm font-medium">
                          {t("models.architectural")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("models.architecturalDescription")}
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
                        <div className="text-sm font-medium">
                          {t("models.characters")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("models.charactersDescription")}
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
                        <div className="text-sm font-medium">
                          {t("models.mechanical")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("models.mechanicalDescription")}
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("nav.services")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to="/services/3d-printing"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">
                          {t("services.printing")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("services.printingDescription")}
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
                        <div className="text-sm font-medium">
                          {t("services.customDesign")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("services.customDesignDescription")}
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
                        <div className="text-sm font-medium">
                          {t("services.consultation")}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t("services.consultationDescription")}
                        </p>
                      </NavLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/contact" className={navigationMenuTriggerStyle()}>
                  {t("nav.contact")}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Бутони за вход и ModeToggle */}
        <div className="hidden md:flex items-center gap-4">
          {auth.session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-none">
                  {auth.session.user.email}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">
                    {t("nav.profile")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => auth.signOut()}
                >
                  {t("nav.signOut")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <NavLink to="/sign-in">{t("nav.signIn")}</NavLink>
              </Button>
              <Button asChild>
                <NavLink to="/sign-up">{t("nav.signUp")}</NavLink>
              </Button>
            </>
          )}

          <ModeToggle />
          <LanguagePicker />
        </div>

        {/* Mobile nav */}
        <MobileNavBar />
      </div>
    </div>
  );
};

export default NavBar;
