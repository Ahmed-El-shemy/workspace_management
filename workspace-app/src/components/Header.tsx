interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-[240px] right-0 z-10">
            <div className="h-full px-8 flex items-center justify-between">
                <h1 className="text-sm font-medium text-text-dark">{title}</h1>

                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-[280px] h-9 pl-9 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-text-dark placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        <svg
                            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-gray"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Icons */}
                    <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-text-gray" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>

                    <button className="w-9 h-9 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5 text-text-gray" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </button>

                    {/* Profile */}
                    <button className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-medium text-sm hover:opacity-90 transition-opacity">
                        A
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
