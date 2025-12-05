import FixedBottomBar from "../ui/fixed-bottom-bar";
import AppNavigation from "./app-navigation";

export default function AppLayout({ children }) {
  return (
    <div className="padding">
      {children}
      <FixedBottomBar>
        <AppNavigation />
      </FixedBottomBar>
    </div>
  );
}
