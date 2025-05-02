import { FormEvent, useState } from "react";
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
import { NavLink, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { SignUpFormRequest } from "../types/AuthType";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";
import { useAuth } from "../contexts/AuthContext";

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
  const auth = useAuth();
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [formData, setFormData] = useState<SignUpFormRequest>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastname: "",
    country: "",
    city: "",
    phone: "",
    is_printer: false,
    avatartUrl: "",
  });

  const navigate = useNavigate();

  const localizedCountries = countries.map((country) => ({
    ...country,
    name: t(`countries.${country.id}`, country.name),
  }));

  const handleCountryChange = (countryId: string) => {
    setSelectedCountry(countryId);
    const country = countries.find((c) => c.id === countryId);
    setFormData({ ...formData, country: country!.name });
    setCities(country?.cities || []);
  };

  const handleCityChange = (city: string) => {
    setFormData({ ...formData, city });
  };

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    formDataValidation();
    const data = await auth.signUpNewUser(formData);
    console.log(data.success);
    if (data.success) {
      toast("Succesful login!");
      setTimeout(() => {}, 1000);
      navigate("/sign-in");
    }
  }

  const formDataValidation = () => {
    if (formData.name == "" || formData.name == null) {
      toast("Please enter First Name!");
      return;
    }
    if (formData.lastname == "" || formData.lastname == null) {
      toast("Please enter Last Name!");
      return;
    }
    if (formData.email == "" || formData.email == null) {
      toast("Please enter Email!");
      return;
    }
    if (formData.country == "" || formData.country == null) {
      toast("Please select Country!");
      return;
    }
    if (formData.city == "" || formData.city == null) {
      toast("Please select City!");
      return;
    }
    if (formData.password == "" || formData.password == null) {
      toast("Please type Password!");
      return;
    }
    if (formData.password.length < 6) {
      toast("Password must be at least 6 characters!");
      return;
    }
    if (formData.confirmPassword == "" || formData.confirmPassword == null) {
      toast("Please type Confrim Password!");
      return;
    }

    if (formData.confirmPassword !== formData.password) {
      toast("Password and Confirm Password does not match!");
      return;
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={(e) => handleSignUp(e)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.signUp.title")}</h1>
        <p className="text-balance text-sm text-muted-foreground">
          {t("auth.signUp.description")}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="firstName">{t("auth.signUp.firstName")}</Label>
            <Input
              id="firstName"
              placeholder={t("common.placeholders.firstName")}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">{t("auth.signUp.lastName")}</Label>
            <Input
              id="lastName"
              placeholder={t("common.placeholders.lastName")}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">{t("auth.signUp.phone")}</Label>
          <Input
            id="phone"
            type="phone"
            placeholder={t("common.placeholders.phone")}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t("auth.signUp.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="avatarUrl">{t("auth.signUp.avatarUrl")}</Label>
          <Input
            id="avatarUrl"
            type="text"
            placeholder=""
            onChange={(e) =>
              setFormData({ ...formData, avatartUrl: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full">
            <Label htmlFor="country">{t("common.country")}</Label>
            <Select onValueChange={handleCountryChange}>
              <SelectTrigger id="country" className="h-12 w-full mt-2">
                <SelectValue placeholder={t("common.selectCountry")} />
              </SelectTrigger>
              <SelectContent>
                {localizedCountries.map((country) => (
                  <SelectItem key={country.id} value={country.id}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="city">{t("common.city")}</Label>
            <Select
              disabled={!selectedCountry}
              onValueChange={handleCityChange}
            >
              <SelectTrigger id="city" className="h-12 w-full mt-2">
                <SelectValue
                  placeholder={
                    selectedCountry
                      ? t("common.selectCity")
                      : t("common.selectCountryFirst")
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
          <Label htmlFor="password">{t("auth.signUp.password")}</Label>
          <Input
            id="password"
            type="password"
            placeholder={t("common.placeholders.createPassword")}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <p className="text-xs text-muted-foreground">
            {t("auth.signUp.passwordRequirements")}
          </p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">
            {t("auth.signUp.confirmPassword")}
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder={t("common.placeholders.confirmPassword")}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {t("auth.signUp.submit")}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            {t("common.continueWith")}
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 mr-2"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          {t("auth.signUp.submit")} {t("common.with")} {t("common.github")}
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
          {t("auth.signUp.submit")} {t("common.with")} {t("common.google")}
        </Button>
      </div>
      <div className="text-center text-sm">
        {t("auth.signUp.alreadyHaveAccount")}{" "}
        <NavLink to="/sign-in" className="underline underline-offset-4">
          {t("auth.signIn.submit")}
        </NavLink>
      </div>
      <Toaster />
    </form>
  );
}
