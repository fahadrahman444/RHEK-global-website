import React, { type ComponentPropsWithoutRef } from "react";
import * as P from "@phosphor-icons/react/dist/ssr";

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
}

export type Icon = React.ComponentType<IconProps>;
export type LucideIcon = Icon;

// Wrapper that guarantees crisp, refined "light" weight (1.25px stroke) for an executive, non-AI aesthetic
function wrap(Comp: any): Icon {
  const IconComponent = (props: IconProps) => {
    return React.createElement(Comp, { weight: "light", ...props });
  };
  IconComponent.displayName = Comp.displayName || "PhosphorIcon";
  return IconComponent;
}

export const Activity = wrap(P.Pulse);
export const AlertCircle = wrap(P.WarningCircle);
export const AlertTriangle = wrap(P.Warning);
export const ArrowLeft = wrap(P.ArrowLeft);
export const ArrowRight = wrap(P.ArrowRight);
export const ArrowUp = wrap(P.ArrowUp);
export const ArrowUpRight = wrap(P.ArrowUpRight);
export const Award = wrap(P.Medal);
export const Briefcase = wrap(P.Briefcase);
export const Building2 = wrap(P.Buildings);
export const Calculator = wrap(P.Calculator);
export const Calendar = wrap(P.CalendarBlank);
export const Check = wrap(P.Check);
export const CheckCircle = wrap(P.CheckCircle);
export const CheckCircle2 = wrap(P.CheckCircle);
export const ChevronDown = wrap(P.CaretDown);
export const ChevronRight = wrap(P.CaretRight);
export const ChevronUp = wrap(P.CaretUp);
export const Clock = wrap(P.Clock);
export const Code = wrap(P.Code);
export const Code2 = wrap(P.CodeSimple);
export const Compass = wrap(P.Compass);
export const Cpu = wrap(P.Cpu);
export const Database = wrap(P.Database);
export const DollarSign = wrap(P.CurrencyDollar);
export const Eye = wrap(P.Eye);
export const FileQuestion = wrap(P.FileMagnifyingGlass);
export const Filter = wrap(P.Funnel);
export const Gauge = wrap(P.Gauge);
export const Gift = wrap(P.Gift);
export const Globe2 = wrap(P.Globe);
export const GraduationCap = wrap(P.GraduationCap);
export const Headphones = wrap(P.Headphones);
export const HelpCircle = wrap(P.Question);
export const Home = wrap(P.House);
export const Landmark = wrap(P.Bank);
export const Laptop = wrap(P.Laptop);
export const Layers = wrap(P.Stack);
export const Layout = wrap(P.Layout);
export const LayoutTemplate = wrap(P.Browsers);
export const Lightbulb = wrap(P.Lightbulb);
export const ListFilter = wrap(P.ListDashes);
export const Loader2 = wrap(P.CircleNotch);
export const Lock = wrap(P.LockSimple);
export const Mail = wrap(P.EnvelopeSimple);
export const MapPin = wrap(P.MapPin);
export const Megaphone = wrap(P.Megaphone);
export const Menu = wrap(P.List);
export const MessageSquare = wrap(P.ChatTeardropText);
export const Palette = wrap(P.Palette);
export const Phone = wrap(P.Phone);
export const PhoneCall = wrap(P.PhoneCall);
export const Quote = wrap(P.Quotes);
export const Rocket = wrap(P.RocketLaunch);
export const Send = wrap(P.PaperPlaneTilt);
export const Shield = wrap(P.Shield);
export const ShieldCheck = wrap(P.ShieldCheck);
export const Shirt = wrap(P.TShirt);
export const ShoppingBag = wrap(P.Tote);
export const ShoppingCart = wrap(P.ShoppingCart);
export const Smartphone = wrap(P.DeviceMobile);
export const Sparkles = wrap(P.Sparkle);
export const Star = wrap(P.Star);
export const Stethoscope = wrap(P.Stethoscope);
export const Target = wrap(P.Target);
export const Terminal = wrap(P.Terminal);
export const TerminalSquare = wrap(P.TerminalWindow);
export const TrendingUp = wrap(P.TrendUp);
export const Truck = wrap(P.Truck);
export const UserCheck = wrap(P.UserCheck);
export const Users = wrap(P.Users);
export const UtensilsCrossed = wrap(P.ForkKnife);
export const Video = wrap(P.VideoCamera);
export const X = wrap(P.X);
export const XCircle = wrap(P.XCircle);
export const Zap = wrap(P.Lightning);
export const Lightning = Zap;
