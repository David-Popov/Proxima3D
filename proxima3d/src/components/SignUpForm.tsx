import { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { NavLink } from "react-router";

const countries = [
  {
    id: "us",
    name: "United States",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  },
  {
    id: "uk",
    name: "United Kingdom",
    cities: ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
  },
  {
    id: "ca",
    name: "Canada",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  },
  {
    id: "au",
    name: "Australia",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  {
    id: "fr",
    name: "France",
    cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
  },
];

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState<string[]>([]);

  const handleCountryChange = (countryId: string) => {
    setSelectedCountry(countryId);
    const country = countries.find((c) => c.id === countryId);
    setCities(country?.cities || []);
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="John" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full">
            <Label htmlFor="country">Country</Label>
            <Select onValueChange={handleCountryChange}>
              <SelectTrigger id="country" className="h-12 w-full mt-2">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.id} value={country.id}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="city">City</Label>
            <Select disabled={!selectedCountry}>
              <SelectTrigger id="city" className="h-12 w-full mt-2">
                <SelectValue
                  placeholder={
                    selectedCountry ? "Select city" : "Select country first"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a secure password"
            required
          />
          <p className="text-xs text-muted-foreground">
            Password must be at least 8 characters long
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Sign up with GitHub
        </Button>
        <Button variant="outline" className="w-full">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-4 w-4"
          >
            <path
              d="M7.5 0C3.36 0 0 3.36 0 7.5c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm3.75 8.25H8.25v3H6.75v-3H3.75V6.75h3V3.75h1.5v3h3v1.5z"
              fill="currentColor"
            />
          </svg>
          Sign up with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <NavLink to="/sign-in" className="underline underline-offset-4">
          Sign-in
        </NavLink>
      </div>
    </form>
  );
}
