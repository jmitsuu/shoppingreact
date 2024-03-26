"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function NewToast() {
  const { toast } = useToast();
  console.log("ol");
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
