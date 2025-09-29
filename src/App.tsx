import { CategoryPills } from "./components/CategoryPills.tsx";
import { categories } from "./data/home.ts";
import "./index.css";
import { PageHeader } from "./layouts/PageHeader.tsx";

export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        <div>Sidebar</div>
        <div className="stickey top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} />
        </div>
      </div>
    </div>
  );
}
