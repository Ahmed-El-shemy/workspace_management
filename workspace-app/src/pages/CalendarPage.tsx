import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

interface CalendarTask {
    id: string;
    title: string;
    date: number;
    color: string;
    assignee: string;
}

interface UnscheduledTask {
    id: string;
    title: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    assignee: string;
    time: string;
}

const CalendarPage = () => {
    const calendarTasks: CalendarTask[] = [
        { id: '1', title: 'Q4 Planning', date: 1, color: 'bg-green-400', assignee: 'AB' },
        { id: '2', title: 'Review Wireframe', date: 4, color: 'bg-blue-400', assignee: 'CD' },
        { id: '3', title: 'Product Demo', date: 5, color: 'bg-yellow-400', assignee: 'EF' },
        { id: '4', title: 'Team Sync', date: 5, color: 'bg-yellow-400', assignee: 'GH' },
        { id: '5', title: 'Frontend Implementation - Sprint', date: 9, color: 'bg-blue-400', assignee: 'IJ' },
        { id: '6', title: 'Bug Bash: Mobile Api', date: 17, color: 'bg-red-400', assignee: 'KL' },
    ];

    const unscheduledTasks: UnscheduledTask[] = [
        { id: '1', title: 'Update API Documentation', priority: 'HIGH', assignee: 'John D.', time: '2h' },
        { id: '2', title: 'Asset Cleanup', priority: 'MEDIUM', assignee: 'Sarah K.', time: '4h' },
        { id: '3', title: 'Internal Newsletter', priority: 'LOW', assignee: 'Mike T.', time: '1h' },
        { id: '4', title: 'Database Migration', priority: 'HIGH', assignee: 'Alex B.', time: '2h' },
    ];

    const daysInMonth = 31;
    const startDay = 0; // Sunday
    const currentDay = 23;

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'HIGH':
                return 'text-danger';
            case 'MEDIUM':
                return 'text-warning';
            case 'LOW':
                return 'text-text-gray';
            default:
                return 'text-text-gray';
        }
    };

    const getPriorityLabel = (priority: string) => {
        return priority.toUpperCase();
    };

    const getTasksForDay = (day: number) => {
        return calendarTasks.filter(task => task.date === day);
    };

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar />

            <div className="flex-1 ml-[240px]">
                <Header title="Projects" />

                <main className="pt-16 p-8">
                    <div className="flex gap-6">
                        {/* Calendar Section */}
                        <div className="flex-1">
                            {/* Calendar Header */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-4">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg">
                                            <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-sm font-medium text-primary">Calendar</span>
                                        </div>

                                        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                                            <svg className="w-4 h-4 text-text-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        <button className="px-3 py-1.5 text-sm font-medium text-text-dark hover:bg-gray-100 rounded-lg transition-colors">
                                            Today
                                        </button>

                                        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors">
                                            <svg className="w-4 h-4 text-text-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        <span className="text-lg font-bold text-text-dark ml-2">October 2023</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="px-3 py-1.5 text-sm text-text-dark hover:bg-gray-100 rounded-lg transition-colors">
                                            Day
                                        </button>
                                        <button className="px-3 py-1.5 text-sm text-text-dark hover:bg-gray-100 rounded-lg transition-colors">
                                            Week
                                        </button>
                                        <button className="px-3 py-1.5 text-sm font-medium text-white bg-primary rounded-lg">
                                            Month
                                        </button>

                                        <div className="ml-2 relative">
                                            <input
                                                type="text"
                                                placeholder="Search tasks..."
                                                className="w-48 h-9 pl-9 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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

                                        <button className="h-9 px-4 bg-primary text-white font-medium text-sm rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 4v16m8-8H4" />
                                            </svg>
                                            Add Task
                                        </button>
                                    </div>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                                    {/* Day Headers */}
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                        <div key={day} className="bg-gray-50 px-3 py-2 text-center text-xs font-semibold text-text-gray uppercase">
                                            {day}
                                        </div>
                                    ))}

                                    {/* Previous month trailing days */}
                                    {Array.from({ length: startDay }).map((_, i) => (
                                        <div key={`prev-${i}`} className="bg-white h-24 p-2"></div>
                                    ))}

                                    {/* Current month days */}
                                    {Array.from({ length: daysInMonth }).map((_, i) => {
                                        const day = i + 1;
                                        const tasksForDay = getTasksForDay(day);
                                        const isToday = day === currentDay;

                                        return (
                                            <div
                                                key={day}
                                                className={`bg-white h-24 p-2 hover:bg-gray-50 transition-colors ${isToday ? 'ring-2 ring-primary ring-inset' : ''
                                                    }`}
                                            >
                                                <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : 'text-text-dark'
                                                    }`}>
                                                    {day}
                                                </div>
                                                <div className="space-y-1">
                                                    {tasksForDay.map((task) => (
                                                        <div
                                                            key={task.id}
                                                            className={`${task.color} text-white text-[10px] px-1.5 py-0.5 rounded truncate font-medium`}
                                                        >
                                                            {task.title}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Unscheduled Sidebar */}
                        <div className="w-80">
                            <div className="bg-white rounded-xl border border-gray-200 p-5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-text-dark uppercase">Unscheduled</h3>
                                    <span className="w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded flex items-center justify-center">
                                        {unscheduledTasks.length}
                                    </span>
                                </div>

                                <p className="text-xs text-text-gray mb-5">Drag tasks to the calendar</p>

                                <div className="space-y-3">
                                    {unscheduledTasks.map((task) => (
                                        <div
                                            key={task.id}
                                            className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow cursor-move"
                                        >
                                            <div className={`text-[10px] font-bold uppercase mb-1.5 ${getPriorityColor(task.priority)}`}>
                                                {getPriorityLabel(task.priority)}
                                            </div>
                                            <div className="text-sm font-semibold text-text-dark mb-2">
                                                {task.title}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-[8px] font-semibold">
                                                        {task.assignee.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <span className="text-xs text-text-gray">{task.assignee}</span>
                                                </div>
                                                <span className="text-xs text-text-gray">{task.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CalendarPage;
