export interface ButtonProps {
  type: "button" | "submit";
  style: "outline" | "error" | "secondary" | "main";
  content: any;
  onClick: () => void | Promise<void>;
}