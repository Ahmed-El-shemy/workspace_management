import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { icon: '📊', label: 'Dashboard', path: '/dashboard' },
        { icon: '📁', label: 'Projects', path: '/projects' },
        { icon: '✓', label: 'Tasks', path: '/tasks' },
        { icon: '📅', label: 'Calendar', path: '/calendar' },
        { icon: '👥', label: 'Team', path: '/team' },
        { icon: '📈', label: 'Reports', path: '/reports' },
        { icon: '⚙️', label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="w-[240px] h-screen bg-white border-r border-gray-200 fixed left-0 top-0 flex flex-col">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        W
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-text-dark">Workspace</div>
                        <div className="text-xs text-text-gray">Standard Plan</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors
                ${isActive
                                    ? 'bg-blue-50 text-primary'
                                    : 'text-text-gray hover:bg-gray-50'
                                }
              `}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className={`text-sm ${isActive ? 'font-medium' : 'font-normal'}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
