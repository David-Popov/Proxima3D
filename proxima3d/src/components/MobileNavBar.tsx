import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Box } from "lucide-react";

const MobileNavBar = () => {
  return (
    <div className="flex items-center gap-2 md:hidden">
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
            <span className="sr-only">Toggle menu</span>
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
              </SheetTitle>
            </SheetHeader>

            {/* mobile content */}
            <div className="flex-1 overflow-auto">
              <div className="flex flex-col">
                <NavLink
                  to="/"
                  className="px-6 py-4 text-lg font-medium border-b"
                >
                  Home
                </NavLink>

                <div className="border-b">
                  <div className="px-6 py-4 text-lg font-medium">Models</div>
                  <NavLink
                    to="/models/architectural"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    Architectural
                  </NavLink>
                  <NavLink
                    to="/models/characters"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    Characters
                  </NavLink>
                  <NavLink
                    to="/models/mechanical"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    Mechanical
                  </NavLink>
                </div>

                <div className="border-b">
                  <div className="px-6 py-4 text-lg font-medium">Services</div>
                  <NavLink
                    to="/services/3d-printing"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    3D Printing
                  </NavLink>
                  <NavLink
                    to="/services/custom-design"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    Custom Design
                  </NavLink>
                  <NavLink
                    to="/services/consultation"
                    className="block px-10 py-3 text-base text-muted-foreground"
                  >
                    Consultation
                  </NavLink>
                </div>

                <NavLink
                  to="/pricing"
                  className="px-6 py-4 text-lg font-medium border-b"
                >
                  Pricing
                </NavLink>

                <NavLink
                  to="/contact"
                  className="px-6 py-4 text-lg font-medium border-b"
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* auth + other buttons */}
            <div className="p-6 border-t">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Appearance</span>
                  <ModeToggle />
                </div>
                <Button variant="outline" asChild className="w-full h-11">
                  <NavLink to="/sign-in">Sign In</NavLink>
                </Button>
                <Button asChild className="w-full h-11">
                  <NavLink to="/sign-up">Sign Up</NavLink>
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
