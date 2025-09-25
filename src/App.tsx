import { CategoryPills } from "./components/CategoryPills.tsx";
import "./index.css";
import { PageHeader } from "./layouts/PageHeader.tsx";

export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-hidden">
        <div className="">Sidebar</div>
        <div className="stickey top-0 bg-white z-10 pb-4">
          <CategoryPills />
        </div>
      </div>
    </div>
  );
}
