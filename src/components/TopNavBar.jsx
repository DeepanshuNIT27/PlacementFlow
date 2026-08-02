import { Link } from 'react-router-dom';

const TopNavBar = () => {
  return (
    <header className="sticky top-0 w-full z-30 bg-background/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-xl py-md">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md group">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-sm pl-11 pr-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-body-md transition-all" placeholder="Search companies..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-lg ml-xl">
        <button className="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-sm text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <Link to="/add-company" className="flex items-center gap-sm bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary-container/10">
          <span className="material-symbols-outlined">add</span>
          Add Company
        </Link>
        <div className="w-10 h-10 rounded-full border-2 border-outline-variant overflow-hidden cursor-pointer hover:border-primary transition-colors">
          <img className="w-full h-full object-cover" alt="User Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGv3x8UeaOnzh7KTC1YrHX6kem4hQfmfqduvPKvLm711oB_hsivfXq06nmH2CSnfuCaTOmBjwRoxMlyM4JmfnDtVlqPbh2AlIsEN-sePRIs8RrhbyAFNe7KSgxzgYh7c8VDGDDHEQY3FOXNwYalUvxGa9Q-8gtOr0hzAlqG1pvAiCVWDo-AYptIg7LqVQsHtjN8rVEZhQq_dE5yWo0oDrFIqPmqgtmoOHRGZutAhsb0OG00iTmcklO0A"/>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
