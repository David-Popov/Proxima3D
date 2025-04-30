import { NavLink } from "react-router";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Box, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import LanguagePicker from "./LanguagePicker";
import { useTranslation } from "react-i18next";

const MobileNavBar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 md:hidden">
      <LanguagePicker />
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
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
            <span className="sr-only">{t("common.toggleMenu")}</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[85%] sm:w-[385px] max-w-sm p-0"
        >
          <div className="h-full flex flex-col">
            {/* header */}
            <SheetHeader className="p-6 border-b">
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Box className="h-5 w-5 text-primary" />
                  <span>Proxima3D</span>
                </div>
                <SheetClose className="rounded-full h-8 w-8 flex items-center justify-center border">
                  <X className="h-4 w-4" />
                  <span className="sr-only">{t("common.close")}</span>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>

            {/* content*/}
            <div className="flex-1 overflow-auto">
              <div className="flex flex-col">
                <NavLink
                  to="/"
                  className="px-6 py-4 text-lg font-medium border-b"
                >
                  {t("nav.home")}
                </NavLink>

                <div className="border-b">
                  <div className="px-6 py-4 text-lg font-medium">
                    {t("nav.models")}
                  </div>
                  <NavLink
                    to="/models/architectural"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    {t("models.architectural")}
                  </NavLink>
                  <NavLink
                    to="/models/characters"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    {t("models.characters")}
                  </NavLink>
                  <NavLink
                    to="/models/mechanical"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    {t("models.mechanical")}
                  </NavLink>
                </div>

                <div className="border-b">
                  <div className="px-6 py-4 text-lg font-medium">
                    {t("nav.services")}
                  </div>
                  <NavLink
                    to="/services/3d-printing"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    {t("services.printing")}
                  </NavLink>
                  <NavLink
                    to="/services/custom-design"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    {t("services.customDesign")}
                  </NavLink>
                  <NavLink
                    to="/services/consultation"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    {t("services.consultation")}
                  </NavLink>
                </div>

                <NavLink
                  to="/pricing"
                  className="px-6 py-4 text-lg font-medium border-b"
                >
                  {t("nav.pricing")}
                </NavLink>

                <NavLink
                  to="/contact"
                  className="px-6 py-4 text-lg font-medium border-b"
                >
                  {t("nav.contact")}
                </NavLink>
              </div>
            </div>

            {/* buttons */}
            <div className="p-6 border-t">
              <div className="grid gap-3">
                <Button variant="outline" asChild className="w-full h-11">
                  <NavLink to="/sign-in">{t("nav.signIn")}</NavLink>
                </Button>
                <Button asChild className="w-full h-11">
                  <NavLink to="/sign-up">{t("nav.signUp")}</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavBar;
