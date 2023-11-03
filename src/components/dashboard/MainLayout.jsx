import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <Sidebar />
      <main className="ml-64 p-4 bg-gray-200 min-h-screen w-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
