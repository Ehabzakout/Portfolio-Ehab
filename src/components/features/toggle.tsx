import { Toggle } from "@/components/ui/toggle";
import { PropsWithChildren } from "react";

export default function ToggleDemo({
  children,
  pressed,
  action,
  className,
}: PropsWithChildren & {
  pressed: boolean;
  action: () => void;
  className: string;
}) {
  return (
    <Toggle
      asChild
      pressed={pressed}
      onPressedChange={action}
      className={className}
    >
      {children}
    </Toggle>
  );
}
